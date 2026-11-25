// =============================================================
// GOOGLE SHEETS LIVE SYNC MODULE
// =============================================================
window.gsheetSyncStatus = window.gsheetSyncStatus || null;

function parseGSheetCSV(text) {
  const lines = [];
  let row = [''];
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const next = text[i + 1];
    if (c === '"') {
      if (inQuotes && next === '"') {
        row[row.length - 1] += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === ',' && !inQuotes) {
      row.push('');
    } else if ((c === '\r' || c === '\n') && !inQuotes) {
      if (c === '\r' && next === '\n') i++;
      lines.push(row);
      row = [''];
    } else {
      row[row.length - 1] += c;
    }
  }
  if (row.length > 1 || row[0] !== '') lines.push(row);
  return lines;
}

async function syncPaymentFromGoogleSheet(customUrl = null) {
  const targetUrl = customUrl || localStorage.getItem('epcm_gsheet_payment_url') || window.GOOGLE_SHEETS_PAYMENT_URL || '';
  if (!targetUrl) return false;

  const match = targetUrl.match(/\/d\/([a-zA-Z0-9-_]+)/);
  const sheetId = match ? match[1] : targetUrl.trim();
  if (!sheetId) return false;

  const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=Sheet1`;
  try {
    const res = await fetch(csvUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    const rows = parseGSheetCSV(text);
    if (rows.length < 2) throw new Error('Data rows empty');

    const dataRows = rows.slice(1).filter(r => r.length >= 4 && r[1] && r[1].trim());
    if (dataRows.length === 0) throw new Error('No valid rows found');

    const newReport = dataRows.map(r => [
      r[0] ? r[0].trim() : '',
      r[1] ? r[1].trim() : '',
      r[2] ? r[2].trim() : '',
      r[3] ? r[3].trim() : '0',
      r[4] ? r[4].trim() : '',
      parseInt(r[5]) || 0
    ]);

    window.paymentReport = newReport;
    window.gsheetSyncStatus = {
      synced: true,
      lastSync: new Date(),
      rowCount: newReport.length,
      url: targetUrl.startsWith('http') ? targetUrl : `https://docs.google.com/spreadsheets/d/${sheetId}/edit`,
      sheetId: sheetId
    };
    return true;
  } catch (err) {
    console.warn('Google Sheets sync notice (using local payment-data.js):', err.message);
    window.gsheetSyncStatus = {
      synced: false,
      error: err.message,
      url: targetUrl
    };
    return false;
  }
}

async function configurePaymentGSheet() {
  const current = localStorage.getItem('epcm_gsheet_payment_url') || window.GOOGLE_SHEETS_PAYMENT_URL || '';
  const input = prompt(
    "กรอกลิงก์ Google Sheet ที่แชร์แบบ 'ทุกคนที่มีลิงก์ดูได้ (Anyone with the link can view)':\n\n(หากต้องการยกเลิกการเชื่อมต่อ ให้ลบข้อความออกทั้งหมดแล้วกด OK เพื่อกลับไปใช้ข้อมูล Local)",
    current
  );
  if (input === null) return;

  const trimmed = input.trim();
  if (!trimmed) {
    localStorage.removeItem('epcm_gsheet_payment_url');
    window.gsheetSyncStatus = null;
    alert("ยกเลิกการเชื่อมต่อ Google Sheets แล้ว กลับไปใช้ข้อมูลภายใน (Local)");
    payment();
    return;
  }

  localStorage.setItem('epcm_gsheet_payment_url', trimmed);
  const ok = await syncPaymentFromGoogleSheet(trimmed);
  if (ok) {
    alert("✅ เชื่อมต่อและดึงข้อมูลจาก Google Sheets สำเร็จเรียบร้อย!");
    payment();
  } else {
    alert("⚠️ ไม่สามารถดึงข้อมูลได้ กรุณาตรวจสอบว่าใน Google Sheets ตั้งค่า Share เป็น 'Anyone with the link can view' แล้วหรือไม่");
  }
}

async function refreshPaymentGSheet() {
  const ok = await syncPaymentFromGoogleSheet();
  if (ok) {
    payment();
  } else {
    alert("ไม่สามารถรีเฟรชข้อมูลได้ กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ตหรือลิงก์ Google Sheet");
  }
}


// Glenalmond Phuket EPCM Control — Application Logic & View Controller

// Formatters
const fmt = n => '฿' + (typeof n === 'number' ? n.toLocaleString('en-US', { maximumFractionDigits: 2 }) : n);
const num = v => Number(String(v).replace(/,/g, '')) || 0;
const money = v => '฿' + (typeof v === 'number' ? v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : v);

// Status Badge Renderer
function badge(status) {
  if (!status) return '<span class="status-pill">ไม่ระบุ</span>';
  const s = String(status).trim();
  if (s === 'ชำระแล้ว' || s === 'จ่ายเงินแล้ว' || s === 'Close' || s === 'Closed' || s === 'เสร็จแล้ว') {
    return `<span class="status-pill paid"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>${s}</span>`;
  }
  if (s.startsWith('วางบิลแล้ว') || s === 'กำลังดำเนินการ' || s === 'In Progress' || s === 'Ongoing') {
    return `<span class="status-pill billed"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><circle cx="12" cy="12" r="10"/></svg>${s}</span>`;
  }
  if (s === 'รอวางบิล' || s === 'ยังไม่วางบิล' || s === 'เลื่อนกำหนด' || s === 'Critical' || s === 'High') {
    return `<span class="status-pill unbilled">${s}</span>`;
  }
  return `<span class="status-pill open">${s}</span>`;
}

// Navigation structure
const navSections = {
  'Overview': [
    { name: 'Executive Dashboard', icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>' },
    { name: 'S-Curve', icon: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>' }
  ],
  'Contractors & Site': [
    { name: 'Manpower', icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' },
    { name: 'Contractor Progress', icon: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>' },
    { name: 'Contractor Contract', icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>' }
  ],
  'Financials': [
    { name: 'Payment', icon: '<rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>' },
    { name: 'Cost Summary', icon: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>' }
  ],
  'Project Control': [
    { name: 'Meeting', icon: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>' },
    { name: 'Action Tracker', icon: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>' },
    { name: 'Monthly Report', icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>' }
  ],
  'Engineering & QA': [
    { name: 'EPCM Work Status', icon: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>' },
    { name: 'Drawing / As-Built', icon: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>' },
    { name: 'Punch List', icon: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>' }
  ]
};

// Mount Sidebar Navigation
function initNav() {
  const navContainer = document.getElementById('sidebarNav');
  if (!navContainer) return;
  
  let html = '';
  for (const [groupName, items] of Object.entries(navSections)) {
    html += `<div class="nav-group">
      <div class="nav-group-title">${groupName}</div>
      ${items.map(item => `
        <button class="nav-link ${item.name === 'Executive Dashboard' ? 'active' : ''}" data-page="${item.name}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${item.icon}</svg>
          <span>${item.name}</span>
        </button>
      `).join('')}
    </div>`;
  }
  navContainer.innerHTML = html;

  document.querySelectorAll('.nav-link').forEach(btn => {
    btn.onclick = () => show(btn.dataset.page);
  });
}

// Page Banner Generator
function banner(title, subtitle, actions = '') {
  return `
    <div class="page-banner">
      <div class="page-banner-title">
        <h1>${title}</h1>
        <p>${subtitle}</p>
      </div>
      <div class="page-actions">${actions}</div>
    </div>
  `;
}

// Contractor Filter Dropdown
function contractorFilterHtml(id = 'contractorFilter') {
  const contractors = [...new Set(jobs.map(x => x[0]))];
  return `
    <select id="${id}" class="form-select">
      <option value="">ผู้รับเหมาทั้งหมด (All Contractors)</option>
      ${contractors.map(c => `<option value="${c}">${c}</option>`).join('')}
    </select>
  `;
}

// Jobs Table Renderer
function renderJobsTable(data) {
  return `
    <div class="table-responsive">
      <table class="luxury-table">
        <thead>
          <tr>
            <th>ผู้รับเหมา (Contractor)</th>
            <th>ชื่องาน / แพ็กเกจ (Work Package)</th>
            <th style="text-align:right">มูลค่างาน</th>
            <th>Progress โดยประมาณ</th>
            <th style="text-align:center">สถานะ</th>
          </tr>
        </thead>
        <tbody>
          ${data.map(x => {
            const p = x[6] === 'Close' ? 100 : Math.min(100, ((x[3] + x[4]) / x[2]) * 100);
            return `
              <tr class="${x[6] === 'Close' ? 'closed' : ''}">
                <td><b style="color:var(--navy-850)">${x[0]}</b></td>
                <td>
                  <button class="btn-outline" style="padding:4px 10px;font-size:12.5px" onclick="jumpToPayment('${x[0]}')">
                    ${x[1]} ↗
                  </button>
                </td>
                <td class="money-cell">${fmt(x[2])}</td>
                <td style="min-width:140px">
                  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
                    <b style="font-size:12.5px">${p.toFixed(1)}%</b>
                  </div>
                  <div class="bar-track">
                    <div class="bar-fill" style="width:${p}%"></div>
                  </div>
                </td>
                <td style="text-align:center">${badge(x[6])}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// Jump helper
function jumpToPayment(vendor) {
  show('Payment');
  setTimeout(() => {
    const sel = document.getElementById('paymentVendor');
    if (sel) {
      sel.value = vendor;
      sel.dispatchEvent(new Event('change'));
    }
  }, 50);
}

// S-Curve Line Chart SVG Renderer
function renderSCurveSvg() {
  const plan = [0.002575,0.005149,0.005663,0.006177,0.016502,0.043188,0.069874,0.09656,0.118781,0.141002,0.166327,0.191652,0.216977,0.242502,0.268027,0.293552,0.319076,0.344601,0.370126,0.37909,0.383873,0.388655,0.398008,0.407361,0.434214,0.466448,0.501515,0.533477,0.576903,0.622034,0.672844,0.723655,0.775734,0.827814,0.877506,0.920621,0.958755,0.994862,0.995376,0.99589,0.996404,0.996917,0.997431,0.997945,0.998459,0.998972,0.999486,1,1,1,1,1,1,1,1,1,1,1,1,1];
  const actual = [0.002574,0.005148,0.005661,0.006173,0.014937,0.037445,0.059952,0.082456,0.1005,0.118542,0.136584,0.157792,0.176872,0.196601,0.216208,0.234502,0.255383,0.279691,0.303871,0.329065,0.340447,0.352136,0.361356,0.373898,0.387339,0.41785,0.451658,0.514159,0.543051,0.58061,0.611475,0.678539,0.745284,0.762331,0.778697,0.79784,0.819144,0.844498,0.866812,0.899353,0.904421,0.909185,0.913641,0.917782,0.921578,0.924998,0.928055,0.93067,0.932796,0.93437,0.935148];
  
  const w = 720, h = 240, padding = 14;
  const x = (i, len) => padding + (i / (len - 1)) * (w - padding * 2);
  const y = v => h - padding - (v * (h - padding * 2));
  
  const planPts = plan.map((v, i) => `${x(i, plan.length).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const actualPts = actual.map((v, i) => `${x(i, plan.length).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  
  return `
    <div class="scurve-chart-box">
      <svg class="scurve-chart-svg" viewBox="0 0 ${w} ${h}">
        <!-- Gridlines -->
        <line x1="${padding}" y1="${y(0)}" x2="${w - padding}" y2="${y(0)}" stroke="#e2e8f0" stroke-width="1"/>
        <line x1="${padding}" y1="${y(0.25)}" x2="${w - padding}" y2="${y(0.25)}" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="4"/>
        <line x1="${padding}" y1="${y(0.5)}" x2="${w - padding}" y2="${y(0.5)}" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="4"/>
        <line x1="${padding}" y1="${y(0.75)}" x2="${w - padding}" y2="${y(0.75)}" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="4"/>
        <line x1="${padding}" y1="${y(1)}" x2="${w - padding}" y2="${y(1)}" stroke="#e2e8f0" stroke-width="1"/>
        
        <!-- Plan Curve -->
        <polyline points="${planPts}" fill="none" stroke="#0b2345" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Actual Curve -->
        <polyline points="${actualPts}" fill="none" stroke="#ef4444" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
        
        <!-- End points -->
        <circle cx="${x(plan.length - 1, plan.length)}" cy="${y(plan[plan.length - 1])}" r="5" fill="#0b2345" stroke="#fff" stroke-width="2"/>
        <circle cx="${x(actual.length - 1, plan.length)}" cy="${y(actual[actual.length - 1])}" r="5" fill="#ef4444" stroke="#fff" stroke-width="2"/>
      </svg>
      <div class="chart-legend">
        <div class="legend-item"><span class="legend-dot" style="background:#0b2345"></span> แผนงาน (Plan): 100.0%</div>
        <div class="legend-item"><span class="legend-dot" style="background:#ef4444"></span> ความคืบหน้าจริง (Actual): 93.5%</div>
        <div class="legend-item" style="color:var(--rose-700)">• ล่าช้ากว่าแผน 110 วัน (Lag -6.5%)</div>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// Daily Manpower Trend Curve (Historical Trend Overview)
// -------------------------------------------------------------
let selectedTrendRange = 'all'; // '7', '14', '30', 'all'

function setTrendRange(range) {
  selectedTrendRange = range;
  const currentView = document.querySelector('.nav-link.active')?.dataset.page;
  if (currentView === 'Executive Dashboard') {
    dashboard();
  } else if (currentView === 'Manpower') {
    manpower();
  }
}

function renderManpowerTrendChart() {
  const series = [
    ['main', 'ยายบัวงานสถาปัตย์', '#0b2345', n => n.includes('สถาปัตย์')],
    ['system', 'ทีมระบบ', '#c5a869', n => n.includes('ระบบ')],
    ['firstcon', 'FirstCon', '#ef4444', n => n.toLowerCase().includes('firstcon')],
    ['thewa', 'เทวาวณิชกิจ', '#10b981', n => n.includes('เทวาวณิชกิจ')],
    ['exb', 'EXB', '#8b5cf6', n => n.includes('EXB')]
  ];

  const selected = series.find(s => s[0] === selectedMpContractor);
  const getVal = (r, s) => r.groups.filter(g => s[3](g[0])).reduce((sum, g) => sum + (g[2] ?? g[1].reduce((a, b) => a + b[1], 0)), 0);

  let rawData = [...manpowerHistory].reverse(); // chronological order from oldest to newest
  if (selectedTrendRange === '7') {
    rawData = rawData.slice(-7);
  } else if (selectedTrendRange === '14') {
    rawData = rawData.slice(-14);
  } else if (selectedTrendRange === '30') {
    rawData = rawData.slice(-30);
  }

  const values = rawData.map(r => ({
    date: r.date,
    thaiDate: r.thaiDate,
    label: r.thaiDate.slice(0, 5),
    val: selected ? getVal(r, selected) : r.total
  }));

  const maxVal = Math.max(...values.map(x => x.val), 1);
  const minVal = Math.min(...values.map(x => x.val));
  const avgVal = Math.round(values.reduce((s, x) => s + x.val, 0) / values.length);
  const latestVal = values[values.length - 1]?.val || 0;

  const chartName = selected ? selected[1] : 'กำลังพลรวมทุกทีม';
  const lineColor = selected ? selected[2] : '#0b2345';
  const fillColor = selected ? selected[2] : '#0b2345';

  const w = Math.max(860, values.length * 28);
  const h = 260;
  const padLeft = 45;
  const padRight = 35;
  const padTop = 30;
  const padBottom = 40;
  const plotW = w - padLeft - padRight;
  const plotH = h - padTop - padBottom;
  const scaleMax = Math.ceil(maxVal * 1.15 / 10) * 10 || 10;

  const getX = i => padLeft + (i / Math.max(1, values.length - 1)) * plotW;
  const getY = v => padTop + plotH - (v / scaleMax) * plotH;

  const points = values.map((d, i) => `${getX(i).toFixed(1)},${getY(d.val).toFixed(1)}`).join(' ');
  const areaPoints = `${getX(0).toFixed(1)},${padTop + plotH} ${points} ${getX(values.length - 1).toFixed(1)},${padTop + plotH}`;
  const avgY = getY(avgVal);

  return `
    <div class="luxury-card" style="margin-bottom:22px">
      <div class="card-header" style="flex-wrap:wrap;gap:12px">
        <div>
          <h2>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            แนวโน้มกำลังพลรายวันภาพรวม (${chartName})
          </h2>
          <span>Daily Manpower Trend Curve · ข้อมูลสถิติย้อนหลังต่อเนื่อง (${values.length} วัน)</span>
        </div>
        <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap">
          <div style="display:flex;gap:4px;background:#f1f5f9;padding:3px;border-radius:8px">
            <button class="btn-outline" style="padding:3px 9px;font-size:12px;border:none;${selectedTrendRange === '7' ? 'background:#fff;color:var(--navy-850);box-shadow:0 1px 3px rgba(0,0,0,0.1);font-weight:700' : 'background:transparent;color:#64748b'}" onclick="setTrendRange('7')">7 วัน</button>
            <button class="btn-outline" style="padding:3px 9px;font-size:12px;border:none;${selectedTrendRange === '14' ? 'background:#fff;color:var(--navy-850);box-shadow:0 1px 3px rgba(0,0,0,0.1);font-weight:700' : 'background:transparent;color:#64748b'}" onclick="setTrendRange('14')">14 วัน</button>
            <button class="btn-outline" style="padding:3px 9px;font-size:12px;border:none;${selectedTrendRange === '30' ? 'background:#fff;color:var(--navy-850);box-shadow:0 1px 3px rgba(0,0,0,0.1);font-weight:700' : 'background:transparent;color:#64748b'}" onclick="setTrendRange('30')">30 วัน</button>
            <button class="btn-outline" style="padding:3px 9px;font-size:12px;border:none;${selectedTrendRange === 'all' ? 'background:#fff;color:var(--navy-850);box-shadow:0 1px 3px rgba(0,0,0,0.1);font-weight:700' : 'background:transparent;color:#64748b'}" onclick="setTrendRange('all')">ทั้งหมด (${manpowerHistory.length} วัน)</button>
          </div>
          <div style="display:flex;gap:16px;text-align:right">
            <div><small style="display:block;color:#64748b;font-size:11px">ล่าสุด</small><b style="color:var(--navy-850);font-size:16px">${latestVal} <small style="font-size:11px">คน</small></b></div>
            <div><small style="display:block;color:#64748b;font-size:11px">สูงสุด</small><b style="color:#16a34a;font-size:16px">${maxVal} <small style="font-size:11px">คน</small></b></div>
            <div><small style="display:block;color:#64748b;font-size:11px">เฉลี่ย</small><b style="color:#b45309;font-size:16px">${avgVal} <small style="font-size:11px">คน</small></b></div>
            <div><small style="display:block;color:#64748b;font-size:11px">ต่ำสุด</small><b style="color:#dc2626;font-size:16px">${minVal} <small style="font-size:11px">คน</small></b></div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div style="overflow-x:auto;padding-bottom:10px">
          <svg viewBox="0 0 ${w} ${h}" style="width:100%;min-width:${Math.min(w, 860)}px;height:260px;overflow:visible">
            <defs>
              <linearGradient id="mpGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="${fillColor}" stop-opacity="0.22"/>
                <stop offset="100%" stop-color="${fillColor}" stop-opacity="0.01"/>
              </linearGradient>
            </defs>
            <!-- Gridlines & Y-Axis values -->
            ${[0, 0.25, 0.5, 0.75, 1].map(frac => {
              const val = Math.round(scaleMax * frac);
              const yPos = padTop + plotH - frac * plotH;
              return `
                <line x1="${padLeft}" y1="${yPos}" x2="${w - padRight}" y2="${yPos}" stroke="#f1f5f9" stroke-width="1"/>
                <text x="${padLeft - 8}" y="${yPos + 4}" font-size="11" fill="#94a3b8" text-anchor="end">${val}</text>
              `;
            }).join('')}

            <!-- Average dashed line -->
            <line x1="${padLeft}" y1="${avgY}" x2="${w - padRight}" y2="${avgY}" stroke="#d97706" stroke-width="1.5" stroke-dasharray="6 4"/>
            <text x="${w - padRight}" y="${avgY - 6}" font-size="11" font-weight="700" fill="#b45309" text-anchor="end">เฉลี่ย ${avgVal} คน</text>

            <!-- Area & Line -->
            <polygon points="${areaPoints}" fill="url(#mpGradient)"/>
            <polyline points="${points}" fill="none" stroke="${lineColor}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>

            <!-- Data Dots & Labels -->
            ${values.map((d, i) => {
              const xPos = getX(i);
              const yPos = getY(d.val);
              const isHighlight = d.val === maxVal || d.val === minVal || i === values.length - 1;
              const dotColor = d.val === maxVal ? '#16a34a' : d.val === minVal ? '#dc2626' : lineColor;
              const showDate = values.length <= 14 || i % Math.ceil(values.length / 15) === 0 || i === values.length - 1;

              return `
                <g>
                  <circle cx="${xPos}" cy="${yPos}" r="${isHighlight ? 5 : 3.5}" fill="${dotColor}" stroke="#fff" stroke-width="1.5">
                    <title>${d.thaiDate} (${d.date}): ${d.val} คน · ${(d.val * 8).toLocaleString()} MH/วัน</title>
                  </circle>
                  ${isHighlight || values.length <= 14 ? `
                    <text x="${xPos}" y="${yPos - 9}" font-size="11" font-weight="700" fill="${dotColor}" text-anchor="middle">${d.val}</text>
                  ` : ''}
                  ${showDate ? `
                    <text x="${xPos}" y="${h - 12}" font-size="11" fill="#64748b" text-anchor="middle">${d.label}</text>
                  ` : ''}
                </g>
              `;
            }).join('')}
          </svg>
        </div>

        <!-- Legend & Contractor Selection -->
        <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-top:14px;padding-top:12px;border-top:1px solid #f1f5f9">
          <span style="font-size:12px;font-weight:700;color:#64748b;margin-right:4px">เลือกดูตามผู้รับเหมา:</span>
          <button class="btn-outline" style="padding:4px 10px;font-size:12px;${selectedMpContractor === 'all' ? 'background:var(--navy-850);color:#fff;border-color:var(--navy-850)' : ''}" onclick="setMpContractor('all')">
            ทั้งหมด
          </button>
          ${series.map(s => `
            <button class="btn-outline" style="padding:4px 10px;font-size:12px;${selectedMpContractor === s[0] ? `background:${s[2]};color:#fff;border-color:${s[2]}` : ''}" onclick="setMpContractor('${s[0]}')">
              <span style="width:8px;height:8px;border-radius:2px;background:${selectedMpContractor === s[0] ? '#fff' : s[2]};display:inline-block;margin-right:4px"></span>
              ${s[1]}
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// 7-Day Manpower Stacked Bar Chart Component
let selectedMpContractor = 'all';
function renderManpowerBarChart(interactive = true) {
  const series = [
    ['main', 'ยายบัวงานสถาปัตย์', '#0b2345', n => n.includes('สถาปัตย์')],
    ['system', 'ทีมระบบ', '#c5a869', n => n.includes('ระบบ')],
    ['firstcon', 'FirstCon', '#ef4444', n => n.toLowerCase().includes('firstcon')],
    ['thewa', 'เทวาวณิชกิจ', '#10b981', n => n.includes('เทวาวณิชกิจ')],
    ['exb', 'EXB', '#8b5cf6', n => n.includes('EXB')]
  ];
  
  const data = [...manpowerHistory.slice(0, 7)].reverse();
  const getVal = (r, s) => r.groups.filter(g => s[3](g[0])).reduce((sum, g) => sum + (g[2] ?? g[1].reduce((a, b) => a + b[1], 0)), 0);
  const selected = series.find(s => s[0] === selectedMpContractor);
  const displayTotals = data.map(r => selected ? getVal(r, selected) : r.total);
  const max = Math.max(...displayTotals, 1);

  return `
    <div class="luxury-card" style="margin-bottom:22px">
      <div class="card-header">
        <div>
          <h2>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            ${selected ? 'กำลังพล · ' + selected[1] : 'สัดส่วนกำลังคนแยกตามผู้รับเหมา (7 วันล่าสุด)'}
          </h2>
          <span>หน่วย: คน/วัน · ข้อมูลเปรียบเทียบสัดส่วนแรงงานเข้าพื้นที่</span>
        </div>
        ${interactive && selected ? `<button class="btn-outline" onclick="setMpContractor('all')">ดูภาพรวมทั้งหมด</button>` : ''}
      </div>
      <div class="card-body">
        <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:12px;height:240px;padding:20px 10px 0;border-bottom:1px solid var(--slate-200);overflow-x:auto">
          ${data.map((r, i) => {
            const shown = displayTotals[i];
            const barH = shown ? Math.max(26, (shown / max) * 180) : 6;
            return `
              <div style="flex:1;min-width:65px;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:flex-end">
                <b style="font-size:15px;color:var(--navy-850);margin-bottom:6px">${shown}</b>
                <div style="width:100%;max-width:56px;height:${barH}px;display:flex;flex-direction:column-reverse;border-radius:8px 8px 0 0;overflow:hidden;background:#f1f5f9;box-shadow:0 3px 8px rgba(0,0,0,0.06)">
                  ${selected ? `
                    <div title="${r.thaiDate} · ${selected[1]}: ${shown} คน" style="height:100%;background:${selected[2]};display:grid;place-items:center;color:#fff;font-size:11px;font-weight:800">
                      ${shown}
                    </div>
                  ` : series.map(s => {
                    const v = getVal(r, s);
                    const pct = r.total ? (v / r.total) * 100 : 0;
                    return v ? `
                      <div ${interactive ? `onclick="setMpContractor('${s[0]}')"` : ''} title="${r.thaiDate} · ${s[1]}: ${v} คน" style="height:${pct}%;background:${s[2]};cursor:pointer;display:grid;place-items:center;color:#fff;font-size:10px;font-weight:700">
                        ${pct > 12 ? v : ''}
                      </div>
                    ` : '';
                  }).join('')}
                </div>
                <span style="font-size:12px;font-weight:700;color:var(--slate-500);margin-top:8px">${r.thaiDate.slice(0, 5)}</span>
              </div>
            `;
          }).join('')}
        </div>
        
        <!-- Legend & Filter Chips -->
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:18px">
          ${interactive ? `
            <button class="btn-outline" style="${selectedMpContractor === 'all' ? 'background:var(--navy-850);color:#fff;border-color:var(--navy-850)' : ''}" onclick="setMpContractor('all')">
              ทั้งหมด
            </button>
          ` : ''}
          ${series.map(s => `
            <button class="btn-outline" style="${selectedMpContractor === s[0] ? `background:${s[2]};color:#fff;border-color:${s[2]}` : ''}" onclick="setMpContractor('${s[0]}')">
              <span style="width:8px;height:8px;border-radius:2px;background:${selectedMpContractor === s[0] ? '#fff' : s[2]};display:inline-block;margin-right:4px"></span>
              ${s[1]}
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function setMpContractor(key) {
  selectedMpContractor = key;
  const currentView = document.querySelector('.nav-link.active')?.dataset.page;
  if (currentView === 'Executive Dashboard') {
    dashboard();
  } else if (currentView === 'Manpower') {
    manpower();
  }
}

// -------------------------------------------------------------
// VIEW 1: EXECUTIVE DASHBOARD
// -------------------------------------------------------------
function dashboard() {
  const total = jobs.reduce((s, x) => s + x[2], 0);
  const paid = jobs.reduce((s, x) => s + x[3], 0);
  const bill = jobs.reduce((s, x) => s + x[4], 0);
  const unbill = jobs.reduce((s, x) => s + x[5], 0);
  const openJobs = jobs.filter(x => x[6] === 'Open');
  const latestMp = manpowerHistory[0];

  const html = `
    ${banner(
      'Executive Dashboard',
      'ภาพรวมการดำเนินงานโครงการ Glenalmond Phuket International School',
      `<div class="stat-pill success"><span class="live-pulse"></span> ข้อมูลล่าสุด ณ ${latestMp.thaiDate} (${latestMp.total} คน · ${(latestMp.total * 8).toLocaleString()} MH/วัน)</div>`
    )}

    <!-- 4 Main KPI Cards -->
    <div class="kpi-grid">
      <div class="luxury-card kpi-card red">
        <div class="kpi-label">
          <span>Overall S-Curve Progress</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        </div>
        <div class="kpi-value">93.5%</div>
        <div class="kpi-subtext negative">แผน 100.0% · ล่าช้า 6.5% (110 วัน)</div>
      </div>

      <div class="luxury-card kpi-card">
        <div class="kpi-label">
          <span>Current Job Value</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        </div>
        <div class="kpi-value">฿${(total / 1e6).toFixed(2)}M</div>
        <div class="kpi-subtext">${jobs.length} แพ็กเกจ · ${new Set(jobs.map(x => x[0])).size} ผู้รับเหมา</div>
      </div>

      <div class="luxury-card kpi-card gold">
        <div class="kpi-label">
          <span>Payment Certified</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <div class="kpi-value">฿${((paid + bill) / 1e6).toFixed(2)}M</div>
        <div class="kpi-subtext">${(((paid + bill) / total) * 100).toFixed(1)}% ของมูลค่าโครงการทั้งหมด</div>
      </div>

      <div class="luxury-card kpi-card green">
        <div class="kpi-label">
          <span>Paid Disbursed</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <div class="kpi-value">฿${(paid / 1e6).toFixed(2)}M</div>
        <div class="kpi-subtext positive">${((paid / total) * 100).toFixed(1)}% โอนเงินชำระแล้วเสร็จ</div>
      </div>
    </div>

    <!-- S-Curve & Financial Split Grid -->
    <div class="dashboard-grid-2">
      <div class="luxury-card">
        <div class="card-header">
          <div>
            <h2>Project S-Curve Performance</h2>
            <span>เปรียบเทียบผลงานสะสมจริงกับแผนงาน</span>
          </div>
          <button class="btn-navy" onclick="show('S-Curve')">ดู S-Curve แบบเต็ม →</button>
        </div>
        <div class="card-body">
          ${renderSCurveSvg()}
        </div>
      </div>

      <div class="luxury-card">
        <div class="card-header">
          <div>
            <h2>Financial Breakdown</h2>
            <span>สรุปสถานะการเงินและการเบิกจ่าย</span>
          </div>
          <button class="btn-outline" onclick="show('Payment')">รายงานการเงิน →</button>
        </div>
        <div class="card-body">
          <div style="display:flex;height:12px;border-radius:10px;overflow:hidden;margin-bottom:20px;background:#e2e8f0">
            <div style="width:${(paid / total) * 100}%;background:#10b981" title="ชำระแล้ว ${(paid / total * 100).toFixed(1)}%"></div>
            <div style="width:${(bill / total) * 100}%;background:#f59e0b" title="วางบิลแล้ว ${(bill / total * 100).toFixed(1)}%"></div>
            <div style="width:${(unbill / total) * 100}%;background:#ef4444" title="รอวางบิล ${(unbill / total * 100).toFixed(1)}%"></div>
          </div>

          <div style="display:flex;flex-direction:column;gap:14px">
            <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:12px;border-bottom:1px solid var(--slate-100)">
              <div>
                <b style="color:var(--navy-850)">ชำระแล้ว (Paid Amount)</b>
                <div style="font-size:12px;color:var(--slate-500)">โอนจ่ายผู้รับเหมาเรียบร้อยแล้ว</div>
              </div>
              <b class="money-cell" style="color:var(--emerald-700);font-size:16px">${fmt(paid)}</b>
            </div>

            <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:12px;border-bottom:1px solid var(--slate-100)">
              <div>
                <b style="color:var(--navy-850)">วางบิลแล้ว · รอชำระ (Billed Pending)</b>
                <div style="font-size:12px;color:var(--slate-500)">เอกสารผ่านการตรวจแล้ว รออนุมัติจ่าย</div>
              </div>
              <b class="money-cell" style="color:var(--amber-700);font-size:16px">${fmt(bill)}</b>
            </div>

            <div style="display:flex;justify-content:space-between;align-items:center">
              <div>
                <b style="color:var(--navy-850)">รอวางบิลตามงวดงาน (Unbilled)</b>
                <div style="font-size:12px;color:var(--slate-500)">มูลค่าคงเหลือตามสัญญาที่ยังไม่ถึงงวดเบิก</div>
              </div>
              <b class="money-cell" style="color:var(--rose-700);font-size:16px">${fmt(unbill)}</b>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Manpower Charts: Historical Trend & 7-Day Proportion -->
    ${renderManpowerTrendChart()}
    ${renderManpowerBarChart(true)}
    

    <!-- Ongoing Work Packages Table -->
    <div class="luxury-card">
      <div class="card-header">
        <div>
          <h2>งานที่อยู่ระหว่างดำเนินการ (Open Work Packages)</h2>
          <span>${openJobs.length} งานที่กำลังปฏิบัติงานในปัจจุบัน</span>
        </div>
        <div style="display:flex;gap:10px">
          ${contractorFilterHtml('dashboardContractorFilter')}
        </div>
      </div>
      <div class="card-body" style="padding:0">
        <div id="dashboardJobsTableWrap">
          ${renderJobsTable(openJobs)}
        </div>
      </div>
    </div>
  `;

  document.getElementById('screen').innerHTML = html;

  // Wire Filter
  const f = document.getElementById('dashboardContractorFilter');
  if (f) {
    f.onchange = () => {
      const filtered = f.value ? openJobs.filter(x => x[0] === f.value) : openJobs;
      document.getElementById('dashboardJobsTableWrap').innerHTML = renderJobsTable(filtered);
    };
  }
}

// -------------------------------------------------------------
// VIEW 2: S-CURVE FULL REPORT
// -------------------------------------------------------------
function scurve() {
  document.getElementById('screen').innerHTML = `
    ${banner(
      'Project S-Curve Performance',
      'รายงานกราฟแสดงผลความก้าวหน้าโครงการ Glenalmond Phuket International School รายสัปดาห์',
      `<a class="btn-gold" href="assets/S-Curve_International_School_Phuket_latest.xlsx" download>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        ดาวน์โหลดไฟล์ Excel ล่าสุด
      </a>`
    )}
    <div class="luxury-card" style="padding:0;overflow:hidden">
      <iframe src="assets/Glenalmond_SCurve_Report.html" title="Glenalmond S-Curve" style="width:100%;height:1300px;border:none;display:block"></iframe>
    </div>
  `;
}

// -------------------------------------------------------------
// VIEW 3: CONTRACTOR PROGRESS
// -------------------------------------------------------------
function contractors() {
  const names = [...new Set(jobs.map(x => x[0]))];
  
  const cardsHtml = names.map(name => {
    const list = jobs.filter(x => x[0] === name);
    const closed = list.filter(x => x[6] === 'Close').length;
    const open = list.length - closed;
    const totalVal = list.reduce((s, x) => s + x[2], 0);
    const completedVal = list.reduce((s, x) => s + (x[6] === 'Close' ? x[2] : x[3] + x[4]), 0);
    const progress = totalVal ? (completedVal / totalVal) * 100 : 0;

    return `
      <div class="luxury-card" style="margin-bottom:14px">
        <div style="padding:18px 22px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;background:#ffffff" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'">
          <div>
            <b style="font-size:16px;color:var(--navy-850)">${name}</b>
            <div style="font-size:12.5px;color:var(--slate-500);margin-top:2px">
              ${open} งานกำลังทำ · ${closed} งานแล้วเสร็จ · รวมมูลค่า ${fmt(totalVal)}
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:18px">
            <div style="width:130px">
              <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:3px">
                <b>${progress.toFixed(1)}%</b>
              </div>
              <div class="bar-track">
                <div class="bar-fill" style="width:${progress}%"></div>
              </div>
            </div>
            ${open ? '<span class="status-pill billed">In Progress</span>' : '<span class="status-pill paid">Completed</span>'}
            <span style="color:var(--slate-400);font-size:18px">▾</span>
          </div>
        </div>
        <div style="display:none;border-top:1px solid var(--slate-100);padding:0">
          ${renderJobsTable(list)}
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('screen').innerHTML = `
    ${banner(
      'Contractor Progress',
      'สรุปจำนวนแพ็กเกจงานและความก้าวหน้ารายบริษัทผู้รับเหมา'
    )}
    ${cardsHtml}
  `;
}

// -------------------------------------------------------------
// VIEW 4: CONTRACTOR DIRECTORY & LEGAL
// -------------------------------------------------------------
function contractorContract() {
  const report = window.paymentReport || [];
  const names = [...new Set([...jobs.map(x => x[0]), ...report.map(x => x[1])].map(canonicalContractorName))];

  const html = `
    ${banner(
      'Contractor Directory & Profile',
      'ข้อมูลทะเบียนนิติบุคคลและข้อมูลบริษัทผู้รับเหมาโครงการ อ้างอิงฐานข้อมูล DBD กรมพัฒนาธุรกิจการค้า'
    )}
    <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(460px, 1fr));gap:18px">
      ${names.map(name => {
        const d = companyInfo[name] || [name, 'รอตรวจสอบเลขทะเบียน', 'รอตรวจสอบ', 'รอตรวจสอบ', 'รอตรวจสอบ'];
        const active = d[4] === 'ดำเนินกิจการ' || d[4] === 'ยังดำเนินกิจการอยู่';
        const legal = d[0].split(' · ');
        const title = legal.length > 1 ? legal[0] : name;
        const sub = legal.length > 1 ? legal.slice(1).join(' · ') : '';

        return `
          <div class="luxury-card" style="padding:22px">
            <div style="border-bottom:1px solid var(--slate-100);padding-bottom:12px;margin-bottom:14px">
              <span class="status-pill ${active ? 'paid' : 'unbilled'}" style="float:right">${d[4]}</span>
              <h3 style="font-size:16px;color:var(--navy-850);margin-bottom:2px">${title}</h3>
              ${sub ? `<small style="color:var(--slate-500)">${sub}</small>` : ''}
            </div>

            <div style="display:grid;grid-template-columns:140px 1fr;gap:8px 12px;font-size:13px">
              <span style="color:var(--slate-500)">เลขทะเบียนนิติบุคคล:</span>
              <b>${d[1]}</b>

              <span style="color:var(--slate-500)">ทุนจดทะเบียน:</span>
              <b>${d[3]}</b>

              <span style="color:var(--slate-500)">วันที่จดทะเบียน:</span>
              <span>${d[5] || 'รอตรวจสอบ'}</span>

              <span style="color:var(--slate-500)">ที่ตั้งสำนักงาน:</span>
              <span>${d[2]}</span>

              <span style="color:var(--slate-500)">หมวดธุรกิจ:</span>
              <span>${d[6] || 'งานก่อสร้าง/บริการตามสัญญาโครงการ'}</span>

              ${d[7] ? `
                <span style="color:var(--slate-500)">เว็บไซต์:</span>
                <a href="${d[7]}" target="_blank" rel="noopener" style="color:var(--navy-850);font-weight:700">${d[7].replace(/^https?:\/\//, '')} ↗</a>
              ` : ''}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  document.getElementById('screen').innerHTML = html;
}

// -------------------------------------------------------------
// VIEW 5: MANPOWER
// -------------------------------------------------------------
function manpower(index = 0) {
  const r = manpowerHistory[index];
  const g = r.groups;
  const getGroupTotal = group => group ? (group[2] ?? group[1].reduce((a, b) => a + (typeof b[1] === 'number' ? b[1] : 0), 0)) : 0;
  const mainTotal = getGroupTotal(g.find(x => x[0].includes('สถาปัตย์')));
  const sysTotal = getGroupTotal(g.find(x => x[0].includes('ระบบ')));
  const otherTotal = Math.max(0, r.total - mainTotal - sysTotal);

  document.getElementById('screen').innerHTML = `
    ${banner(
      'Daily Manpower Monitoring',
      'ระบบติดตามกำลังพลและแรงงานหน้างานโครงการ Glenalmond Phuket International School',
      `<div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:13px;font-weight:700">เลือกวันที่:</span>
        <select id="mpDateSelect" class="form-select">
          ${manpowerHistory.map((x, i) => `<option value="${i}" ${i === index ? 'selected' : ''}>${x.date} (${x.thaiDate}) · ${x.total} คน</option>`).join('')}
        </select>
      </div>`
    )}

    <!-- 4 Stats summary -->
    <div class="manpower-grid-4">
      <div class="mp-stat-box highlight">
        <span>Total Manpower</span>
        <strong>${r.total} <small style="font-size:16px">คน</small></strong>
        <small>${(r.total * 8).toLocaleString()} Man-Hours/Day ณ ${r.date}</small>
      </div>

      <div class="mp-stat-box">
        <span>Main Contractor</span>
        <strong>${mainTotal} <small style="font-size:16px">คน</small></strong>
        <small>ยายบัวการช่าง · งานสถาปัตย์</small>
      </div>

      <div class="mp-stat-box">
        <span>Systems Work</span>
        <strong>${sysTotal} <small style="font-size:16px">คน</small></strong>
        <small>ทีมงานระบบ MEP</small>
      </div>

      <div class="mp-stat-box">
        <span>Other Teams</span>
        <strong>${otherTotal} <small style="font-size:16px">คน</small></strong>
        <small>เทวาวณิชกิจ · FirstCon · EXB</small>
      </div>
    </div>

    <!-- Daily Manpower Trend Curve -->
    

    <!-- Manpower Charts: Historical Trend & 7-Day Proportion -->
    ${renderManpowerTrendChart()}
    ${renderManpowerBarChart(true)}
    

    <!-- Detailed breakdown cards -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(360px, 1fr));gap:18px">
      ${g.map(group => {
        const teamName = group[0];
        const roles = group[1];
        const teamTotal = group[2] ?? roles.reduce((sum, row) => sum + row[1], 0);

        return `
          <div class="luxury-card">
            <div class="card-header" style="background:#f8fafc">
              <h2 style="font-size:15px">${teamName}</h2>
              <span class="status-pill open">${teamTotal} คน</span>
            </div>
            <div class="card-body" style="padding:0">
              <table class="luxury-table" style="min-width:auto">
                <thead>
                  <tr>
                    <th>หน้าที่ / ตำแหน่งงาน (Role)</th>
                    <th style="text-align:right">จำนวน (คน)</th>
                  </tr>
                </thead>
                <tbody>
                  ${roles.map(row => `
                    <tr>
                      <td>${row[0]}</td>
                      <td style="text-align:right"><b>${row[1]}</b></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  document.getElementById('mpDateSelect').onchange = e => manpower(+e.target.value);
}

// -------------------------------------------------------------
// VIEW 6: PAYMENT FINANCIAL TRACKER
// -------------------------------------------------------------
// VIEW 6: PAYMENT & BILLING TRACKER (SOURCE OF TRUTH ENGINE)
// -------------------------------------------------------------
function payment(initialVendor = '', activeTab = 'summary') {
  const contracts = window.paymentContracts || [];
  const installments = window.paymentInstallments || [];

  // Overall totals directly from source of truth
  const totalVal = contracts.reduce((s, c) => s + (c.value || 0), 0);
  const totalPaid = contracts.reduce((s, c) => s + (c.paid || 0), 0);
  const totalBilled = contracts.reduce((s, c) => s + (c.billed || 0), 0);
  const totalUnbilled = contracts.reduce((s, c) => s + (c.unbilled || 0), 0);

  const pctPaid = totalVal ? ((totalPaid / totalVal) * 100).toFixed(1) : 0;
  const pctBilled = totalVal ? ((totalBilled / totalVal) * 100).toFixed(1) : 0;
  const pctUnbilled = totalVal ? ((totalUnbilled / totalVal) * 100).toFixed(1) : 0;

  const vendors = [...new Set(contracts.map(c => c.vendor))].sort();

  let currentTab = activeTab; // 'summary' | 'installments'
  let currentVendor = initialVendor;
  let currentStatus = '';

  const syncStatusHtml = `
    <div style="display:flex;align-items:center;gap:10px;font-size:12.5px;color:#1e293b;background:#f8fafc;border:1px solid #e2e8f0;padding:10px 16px;border-radius:10px;margin-bottom:20px;flex-wrap:wrap">
      <span class="live-pulse" style="background:#10b981"></span>
      <span><strong>ฐานข้อมูลทางการ (Source of Truth):</strong> ตรวจสอบตรงกับไฟล์สรุปรายงานการวางบิลต้นฉบับ 100% · ครอบคลุม 28 สัญญาหลัก 138 งวดงาน</span>
      <div style="margin-left:auto;display:flex;gap:8px">
        <button id="tabSummaryBtn" class="btn-navy" style="padding:6px 14px;font-size:13px;border-radius:6px;cursor:pointer">📑 สรุปตามสัญญา (28 รายการ)</button>
        <button id="tabInstBtn" class="btn-outline" style="padding:6px 14px;font-size:13px;border-radius:6px;cursor:pointer">📋 รายละเอียดงวดงาน (138 งวด)</button>
      </div>
    </div>
  `;

  document.getElementById('screen').innerHTML = `
    ${banner(
      'Payment & Billing Tracker',
      'สรุปยอดการวางบิลและเบิกจ่ายเงินโครงการ (มูลค่าไม่รวม VAT) อ้างอิงไฟล์บัญชีการเงินต้นฉบับ',
      `<div style="display:flex;gap:10px;flex-wrap:wrap">
        <select id="paymentVendor" class="form-select">
          <option value="">ผู้รับเหมาทั้งหมด (${vendors.length} ราย)</option>
          ${vendors.map(v => `<option value="${v}" ${v === initialVendor ? 'selected' : ''}>${v}</option>`).join('')}
        </select>
        <select id="paymentStatus" class="form-select">
          <option value="">ทุกสถานะ (All Status)</option>
          <option value="จ่ายเงินแล้ว">จ่ายเงินแล้ว (Paid)</option>
          <option value="วางบิลแล้ว">วางบิลแล้ว (ยังไม่จ่ายเงิน)</option>
          <option value="ยังไม่วางบิล">ยังไม่วางบิล (Unbilled)</option>
        </select>
      </div>`
    )}

    ${syncStatusHtml}

    <!-- Executive KPI Grid -->
    <div class="kpi-grid" style="margin-bottom:20px">
      <div class="luxury-card kpi-card">
        <div class="kpi-label">มูลค่าสัญญารวมทั้งโครงการ</div>
        <div class="kpi-value" style="font-size:24px">${money(totalVal)}</div>
        <div class="kpi-subtext">28 สัญญาและงานสั่งจ้าง (ex VAT)</div>
      </div>
      <div class="luxury-card kpi-card" style="border-top-color:#16a34a">
        <div class="kpi-label" style="color:#16a34a">จ่ายเงินแล้ว (Paid)</div>
        <div class="kpi-value" style="font-size:24px;color:#16a34a">${money(totalPaid)}</div>
        <div class="kpi-subtext">${pctPaid}% ของมูลค่าสัญญารวม</div>
      </div>
      <div class="luxury-card kpi-card" style="border-top-color:#d97706">
        <div class="kpi-label" style="color:#d97706">วางบิลแล้ว · รอชำระ (Pending)</div>
        <div class="kpi-value" style="font-size:24px;color:#d97706">${money(totalBilled)}</div>
        <div class="kpi-subtext">${pctBilled}% รอจ่ายตามรอบโอน</div>
      </div>
      <div class="luxury-card kpi-card" style="border-top-color:#64748b">
        <div class="kpi-label">ยังไม่วางบิล (Unbilled)</div>
        <div class="kpi-value" style="font-size:24px;color:#475569">${money(totalUnbilled)}</div>
        <div class="kpi-subtext">${pctUnbilled}% รอดำเนินการตามงวดงาน</div>
      </div>
    </div>

    <!-- Overall Visual Progress Bar -->
    <div class="luxury-card" style="padding:14px 18px;margin-bottom:24px;background:#f8fafc">
      <div style="display:flex;justify-content:space-between;font-size:12.5px;font-weight:600;margin-bottom:6px">
        <span style="color:#16a34a">● จ่ายแล้ว ${pctPaid}% (${money(totalPaid)})</span>
        <span style="color:#d97706">● วางบิลรอชำระ ${pctBilled}% (${money(totalBilled)})</span>
        <span style="color:#64748b">● ยังไม่วางบิล ${pctUnbilled}% (${money(totalUnbilled)})</span>
      </div>
      <div style="height:12px;background:#e2e8f0;border-radius:6px;overflow:hidden;display:flex">
        <div style="width:${pctPaid}%;background:#16a34a" title="จ่ายแล้ว ${pctPaid}%"></div>
        <div style="width:${pctBilled}%;background:#f59e0b" title="วางบิลแล้ว ${pctBilled}%"></div>
        <div style="width:${pctUnbilled}%;background:#94a3b8" title="ยังไม่วางบิล ${pctUnbilled}%"></div>
      </div>
    </div>

    <div id="paymentResults"></div>
  `;

  // Global toggle function for accordion
  window.toggleContractDrawer = function(no) {
    const el = document.getElementById('drawer-' + no);
    const btn = document.getElementById('btn-drawer-' + no);
    if (!el) return;
    if (el.style.display === 'none' || !el.style.display) {
      el.style.display = 'table-row';
      if (btn) btn.innerHTML = '▲ ซ่อนงวดงาน';
    } else {
      el.style.display = 'none';
      if (btn) btn.innerHTML = '🔍 ดูงวดงาน';
    }
  };

  function renderView() {
    const v = document.getElementById('paymentVendor').value;
    const st = document.getElementById('paymentStatus').value;
    const resultsContainer = document.getElementById('paymentResults');

    const tabSumBtn = document.getElementById('tabSummaryBtn');
    const tabInstBtn = document.getElementById('tabInstBtn');

    if (currentTab === 'summary') {
      tabSumBtn.className = 'btn-navy';
      tabInstBtn.className = 'btn-outline';

      let filteredContracts = contracts;
      if (v) filteredContracts = filteredContracts.filter(c => c.vendor === v);
      if (st === 'จ่ายเงินแล้ว') filteredContracts = filteredContracts.filter(c => c.unbilled === 0 && c.billed === 0);
      else if (st === 'วางบิลแล้ว') filteredContracts = filteredContracts.filter(c => c.billed > 0);
      else if (st === 'ยังไม่วางบิล') filteredContracts = filteredContracts.filter(c => c.unbilled > 0);

      const subVal = filteredContracts.reduce((s, c) => s + c.value, 0);
      const subPaid = filteredContracts.reduce((s, c) => s + c.paid, 0);
      const subBilled = filteredContracts.reduce((s, c) => s + c.billed, 0);
      const subUnbilled = filteredContracts.reduce((s, c) => s + c.unbilled, 0);

      resultsContainer.innerHTML = `
        <div class="luxury-card" style="padding:0;overflow:hidden">
          <div class="card-header" style="background:#f8fafc;display:flex;justify-content:space-between;align-items:center;padding:14px 20px">
            <h2 style="font-size:16px;margin:0">
              สรุปรายงานการวางบิลและยอดสัญญา (28 สัญญาหลัก)
              <span style="font-size:13px;font-weight:400;color:var(--slate-500);margin-left:8px">(แสดง ${filteredContracts.length} รายการ)</span>
            </h2>
            <small style="color:var(--slate-500)">* คลิกที่แถวหรือปุ่ม "ดูงวดงาน" เพื่อเปิดดูรายละเอียดงวดเงิน</small>
          </div>
          <div class="table-responsive">
            <table class="luxury-table" style="font-size:13.5px">
              <thead>
                <tr>
                  <th style="width:45px;text-align:center">#</th>
                  <th style="width:230px">ผู้รับเหมา (Vendor)</th>
                  <th>งาน / รายละเอียดสัญญา</th>
                  <th style="text-align:right;width:140px">มูลค่าสัญญา</th>
                  <th style="text-align:right;width:130px;color:#16a34a">จ่ายเงินแล้ว</th>
                  <th style="text-align:right;width:130px;color:#d97706">วางบิลรอจ่าย</th>
                  <th style="text-align:right;width:120px;color:#64748b">ยังไม่วางบิล</th>
                  <th style="text-align:center;width:80px">% จ่าย</th>
                  <th style="width:140px">สถานะ / หมายเหตุ</th>
                  <th style="text-align:center;width:105px">งวดงาน</th>
                </tr>
              </thead>
              <tbody>
                ${filteredContracts.map(c => {
                  const cInsts = installments.filter(inRow => inRow.contractNo === c.no);
                  const pct = c.value ? ((c.paid / c.value) * 100).toFixed(1) : 0;
                  const isClosed = c.note && c.note.toLowerCase().includes('close');
                  return `
                    <tr style="cursor:pointer;${isClosed ? 'background:#fcfdfd' : ''}" onclick="toggleContractDrawer(${c.no})">
                      <td style="text-align:center;font-weight:700;color:var(--slate-500)">${c.no}</td>
                      <td>
                        <strong>${c.vendor}</strong>
                        ${c.po ? `<br><small style="color:var(--slate-500);font-size:11.5px">PO: ${c.po}</small>` : ''}
                      </td>
                      <td>
                        <span>${c.work}</span>
                        ${c.contractNo && c.contractNo !== 'Non' ? `<br><small style="color:var(--slate-400);font-size:11px">สัญญา: ${c.contractNo}</small>` : ''}
                      </td>
                      <td class="money-cell" style="font-weight:700;color:var(--navy-850)">${money(c.value)}</td>
                      <td class="money-cell" style="color:#16a34a;font-weight:600">${money(c.paid)}</td>
                      <td class="money-cell" style="color:#d97706;font-weight:600">${c.billed > 0 ? money(c.billed) : '-'}</td>
                      <td class="money-cell" style="color:var(--slate-500)">${c.unbilled > 0 ? money(c.unbilled) : '-'}</td>
                      <td style="text-align:center">
                        <span style="font-weight:700;color:${pct >= 100 ? '#16a34a' : 'var(--navy-850)'}">${pct}%</span>
                      </td>
                      <td>
                        ${c.note ? `<span class="status-pill ${isClosed ? 'paid' : 'open'}" style="font-size:11.5px;padding:2px 8px">${c.note}</span>` : '<span style="color:var(--slate-400)">-</span>'}
                      </td>
                      <td style="text-align:center" onclick="event.stopPropagation()">
                        <button id="btn-drawer-${c.no}" onclick="toggleContractDrawer(${c.no})" class="btn-outline" style="padding:4px 8px;font-size:11.5px;border-radius:4px">
                          🔍 ดูงวดงาน (${cInsts.length})
                        </button>
                      </td>
                    </tr>
                    <tr id="drawer-${c.no}" style="display:none;background:#f8fafc">
                      <td colspan="10" style="padding:14px 20px;border-bottom:2px solid var(--slate-200)">
                        <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:8px;padding:12px;box-shadow:0 1px 3px rgba(0,0,0,0.05)">
                          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;border-bottom:1px solid #f1f5f9;padding-bottom:8px">
                            <span style="font-weight:700;color:var(--navy-850);font-size:13.5px">
                              📑 รายละเอียดงวดเงิน: ${c.work} (${c.vendor}) — ทั้งหมด ${cInsts.length} งวด
                            </span>
                            <span style="font-size:12px;color:var(--slate-500)">
                              มูลค่าสัญญา: ${money(c.value)} บาท
                            </span>
                          </div>
                          ${cInsts.length > 0 ? `
                            <table style="width:100%;border-collapse:collapse;font-size:12.5px">
                              <thead>
                                <tr style="background:#f1f5f9;color:var(--slate-600);text-align:left">
                                  <th style="padding:6px 8px">งวดงาน / เงื่อนไข</th>
                                  <th style="padding:6px 8px">เลขที่ใบวางบิล</th>
                                  <th style="padding:6px 8px;text-align:right">ไม่รวม VAT</th>
                                  <th style="padding:6px 8px;text-align:right">รวม VAT</th>
                                  <th style="padding:6px 8px;text-align:right">หัก ณ ที่จ่าย</th>
                                  <th style="padding:6px 8px;text-align:right">Retention</th>
                                  <th style="padding:6px 8px;text-align:right;color:#16a34a">ยอดโอนสุทธิ</th>
                                  <th style="padding:6px 8px;text-align:center">ครบกำหนด</th>
                                  <th style="padding:6px 8px;text-align:center">สถานะ</th>
                                </tr>
                              </thead>
                              <tbody>
                                ${cInsts.map(inst => `
                                  <tr style="border-bottom:1px solid #f1f5f9">
                                    <td style="padding:6px 8px;font-weight:500">
                                      ${inst.desc}
                                      ${inst.note ? `<br><small style="color:var(--slate-500)">${inst.note}</small>` : ''}
                                    </td>
                                    <td style="padding:6px 8px;font-family:monospace;color:var(--slate-700)">${inst.invoice || '-'}</td>
                                    <td style="padding:6px 8px;text-align:right;font-weight:600">${money(inst.amount)}</td>
                                    <td style="padding:6px 8px;text-align:right;color:var(--slate-600)">${inst.incVat > 0 ? money(inst.incVat) : '-'}</td>
                                    <td style="padding:6px 8px;text-align:right;color:var(--slate-500)">${inst.wht > 0 ? money(inst.wht) : '-'}</td>
                                    <td style="padding:6px 8px;text-align:right;color:var(--slate-500)">${inst.retention > 0 ? money(inst.retention) : '-'}</td>
                                    <td style="padding:6px 8px;text-align:right;font-weight:700;color:#16a34a">${inst.netTransfer > 0 ? money(inst.netTransfer) : '-'}</td>
                                    <td style="padding:6px 8px;text-align:center;color:var(--slate-600)">${inst.dueDate || '-'}</td>
                                    <td style="padding:6px 8px;text-align:center">${badge(inst.status)}</td>
                                  </tr>
                                `).join('')}
                              </tbody>
                            </table>
                          ` : '<div style="color:var(--slate-400);padding:8px">ไม่มีรายการงวดย่อย</div>'}
                        </div>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
              <tfoot>
                <tr style="background:#f1f5f9;font-weight:700;border-top:2px solid var(--slate-300)">
                  <td colspan="3" style="padding:12px;font-size:14px">รวมทั้งหมด (${filteredContracts.length} รายการ)</td>
                  <td class="money-cell" style="font-size:15px;color:var(--navy-850)">${money(subVal)}</td>
                  <td class="money-cell" style="font-size:15px;color:#16a34a">${money(subPaid)}</td>
                  <td class="money-cell" style="font-size:15px;color:#d97706">${money(subBilled)}</td>
                  <td class="money-cell" style="font-size:15px;color:var(--slate-500)">${money(subUnbilled)}</td>
                  <td style="text-align:center;font-size:14px">${subVal ? ((subPaid / subVal) * 100).toFixed(1) : 0}%</td>
                  <td colspan="2"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      `;
    } else {
      // Tab 2: All Installments view
      tabSumBtn.className = 'btn-outline';
      tabInstBtn.className = 'btn-navy';

      let filteredInst = installments;
      if (v) filteredInst = filteredInst.filter(inRow => inRow.vendor === v);
      if (st) filteredInst = filteredInst.filter(inRow => inRow.status === st);

      const totInstEx = filteredInst.reduce((s, inRow) => s + inRow.amount, 0);
      const totInstNet = filteredInst.reduce((s, inRow) => s + (inRow.netTransfer || 0), 0);

      resultsContainer.innerHTML = `
        <div class="luxury-card" style="padding:0;overflow:hidden">
          <div class="card-header" style="background:#f8fafc;display:flex;justify-content:space-between;align-items:center;padding:14px 20px">
            <h2 style="font-size:16px;margin:0">
              รายละเอียดงวดงานและการวางบิล (Installment Schedule)
              <span style="font-size:13px;font-weight:400;color:var(--slate-500);margin-left:8px">(พบ ${filteredInst.length} งวดงาน)</span>
            </h2>
            <span style="font-size:13px;font-weight:600;color:var(--navy-850)">ยอดรวมงวดงานที่เลือก: ${money(totInstEx)} บาท</span>
          </div>
          <div class="table-responsive">
            <table class="luxury-table" style="font-size:13px">
              <thead>
                <tr>
                  <th style="width:40px;text-align:center">#</th>
                  <th style="width:190px">ผู้รับเหมา (Vendor)</th>
                  <th>รายละเอียดงวดงาน</th>
                  <th style="width:120px">เลขที่ใบวางบิล</th>
                  <th style="text-align:right;width:125px">มูลค่า (ex VAT)</th>
                  <th style="text-align:right;width:125px">มูลค่า (inc VAT)</th>
                  <th style="text-align:right;width:95px">หัก ณ ที่จ่าย</th>
                  <th style="text-align:right;width:95px">Retention</th>
                  <th style="text-align:right;width:125px;color:#16a34a">ยอดโอนสุทธิ</th>
                  <th style="text-align:center;width:95px">ครบกำหนด</th>
                  <th style="text-align:center;width:130px">สถานะ</th>
                </tr>
              </thead>
              <tbody>
                ${filteredInst.map((inst, idx) => `
                  <tr>
                    <td style="text-align:center;color:var(--slate-400)">${inst.contractNo}</td>
                    <td><strong>${inst.vendor}</strong></td>
                    <td>
                      <span>${inst.desc}</span>
                      ${inst.note ? `<br><small style="color:var(--slate-500)">${inst.note}</small>` : ''}
                    </td>
                    <td style="font-family:monospace;color:var(--slate-700)">${inst.invoice || '-'}</td>
                    <td class="money-cell" style="font-weight:600">${money(inst.amount)}</td>
                    <td class="money-cell" style="color:var(--slate-600)">${inst.incVat > 0 ? money(inst.incVat) : '-'}</td>
                    <td class="money-cell" style="color:var(--slate-500)">${inst.wht > 0 ? money(inst.wht) : '-'}</td>
                    <td class="money-cell" style="color:var(--slate-500)">${inst.retention > 0 ? money(inst.retention) : '-'}</td>
                    <td class="money-cell" style="font-weight:700;color:#16a34a">${inst.netTransfer > 0 ? money(inst.netTransfer) : '-'}</td>
                    <td style="text-align:center;color:var(--slate-600)">${inst.dueDate || '-'}</td>
                    <td style="text-align:center">${badge(inst.status)}</td>
                  </tr>
                `).join('')}
              </tbody>
              <tfoot>
                <tr style="background:#f1f5f9;font-weight:700;border-top:2px solid var(--slate-300)">
                  <td colspan="4" style="padding:12px;font-size:14px">รวมงวดงานที่แสดง (${filteredInst.length} รายการ)</td>
                  <td class="money-cell" style="font-size:14px;color:var(--navy-850)">${money(totInstEx)}</td>
                  <td colspan="3"></td>
                  <td class="money-cell" style="font-size:14px;color:#16a34a">${money(totInstNet)}</td>
                  <td colspan="2"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      `;
    }
  }

  document.getElementById('tabSummaryBtn').onclick = () => {
    currentTab = 'summary';
    renderView();
  };
  document.getElementById('tabInstBtn').onclick = () => {
    currentTab = 'installments';
    renderView();
  };

  document.getElementById('paymentVendor').onchange = renderView;
  document.getElementById('paymentStatus').onchange = renderView;

  renderView();
}

// -------------------------------------------------------------
// VIEW 7: COST SUMMARY
// -------------------------------------------------------------
function cost() {
  const total = jobs.reduce((s, x) => s + x[2], 0);
  const paid = jobs.reduce((s, x) => s + x[3], 0);
  const bill = jobs.reduce((s, x) => s + x[4], 0);
  const unbill = jobs.reduce((s, x) => s + x[5], 0);
  const names = [...new Set(jobs.map(x => x[0]))];

  document.getElementById('screen').innerHTML = `
    ${banner(
      'Cost Summary',
      'สรุปงบประมาณและมูลค่างาน แยกตามบริษัทผู้รับเหมาและสถานะเบิกจ่าย',
      contractorFilterHtml('costFilter')
    )}

    <div class="kpi-grid">
      <div class="luxury-card kpi-card">
        <div class="kpi-label">มูลค่างานรวมทั้งโครงการ</div>
        <div class="kpi-value">${fmt(total)}</div>
        <div class="kpi-subtext">28 แพ็กเกจสัญญา</div>
      </div>
      <div class="luxury-card kpi-card green">
        <div class="kpi-label">ชำระเงินแล้ว (Paid)</div>
        <div class="kpi-value" style="color:var(--emerald-700)">${fmt(paid)}</div>
        <div class="kpi-subtext positive">${((paid / total) * 100).toFixed(1)}% ของมูลค่างาน</div>
      </div>
      <div class="luxury-card kpi-card gold">
        <div class="kpi-label">วางบิลแล้ว (Billed)</div>
        <div class="kpi-value" style="color:var(--amber-700)">${fmt(bill)}</div>
        <div class="kpi-subtext">${((bill / total) * 100).toFixed(1)}% รออนุมัติจ่าย</div>
      </div>
      <div class="luxury-card kpi-card red">
        <div class="kpi-label">รอวางบิล (Unbilled)</div>
        <div class="kpi-value" style="color:var(--rose-700)">${fmt(unbill)}</div>
        <div class="kpi-subtext">${((unbill / total) * 100).toFixed(1)}% คงเหลือตามสัญญา</div>
      </div>
    </div>

    <div id="costCompanyList">
      ${names.map(name => {
        const rows = jobs.filter(x => x[0] === name);
        const subTotal = rows.reduce((s, x) => s + x[2], 0);

        return `
          <div class="luxury-card cost-card-item" data-vendor="${name}" style="margin-bottom:16px">
            <div class="card-header" style="background:#f8fafc">
              <div>
                <h2>${name}</h2>
                <span>${rows.length} แพ็กเกจงาน</span>
              </div>
              <b class="money-cell" style="font-size:16px;color:var(--navy-850)">${fmt(subTotal)}</b>
            </div>
            <div class="card-body" style="padding:0">
              <div class="table-responsive">
                <table class="luxury-table">
                  <thead>
                    <tr>
                      <th>งาน</th>
                      <th style="text-align:right">มูลค่างาน</th>
                      <th style="text-align:right">ชำระแล้ว</th>
                      <th style="text-align:right">รอชำระ</th>
                      <th style="text-align:right">คงเหลือ</th>
                      <th style="text-align:center">สถานะ</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${rows.map(r => `
                      <tr>
                        <td><b>${r[1]}</b></td>
                        <td class="money-cell">${fmt(r[2])}</td>
                        <td class="money-cell" style="color:var(--emerald-700)">${fmt(r[3])}</td>
                        <td class="money-cell" style="color:var(--amber-700)">${fmt(r[4])}</td>
                        <td class="money-cell" style="color:var(--rose-700)">${fmt(r[5])}</td>
                        <td style="text-align:center">${badge(r[6])}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  document.getElementById('costFilter').onchange = e => {
    const val = e.target.value;
    document.querySelectorAll('.cost-card-item').forEach(el => {
      el.style.display = !val || el.dataset.vendor === val ? 'block' : 'none';
    });
  };
}

// -------------------------------------------------------------
// VIEW 8: MEETINGS & AGENDAS
// -------------------------------------------------------------
function meeting(index = 0) {
  const m = meetingHistory[index];
  const doc = meetingDocuments[m.no];
  const att = meetingAttendance[m.no];

  document.getElementById('screen').innerHTML = `
    ${banner(
      'Weekly Progress Meetings',
      'บันทึกรายงานการประชุมความก้าวหน้าโครงการประจำสัปดาห์ (WCE - EPCM)',
      `<div style="display:flex;gap:10px;flex-wrap:wrap">
        <select id="meetingSelect" class="form-select">
          ${meetingHistory.map((x, i) => `<option value="${i}" ${i === index ? 'selected' : ''}>Weekly Meeting #${x.no} (${x.date})</option>`).join('')}
        </select>
        ${doc ? `<a class="btn-navy" href="${doc.file}" target="_blank" rel="noopener">📄 เปิดรายงานประชุม (${doc.pages} หน้า) ↗</a>` : ''}
        ${att ? `<a class="btn-outline" href="${att.file}" target="_blank" rel="noopener">✍️ ดูใบลงชื่อ (${att.count || ''} คน) ↗</a>` : ''}
      </div>`
    )}

    <!-- Meeting Metadata Cards -->
    <div class="kpi-grid" style="margin-bottom:20px">
      <div class="luxury-card kpi-card">
        <div class="kpi-label">ครั้งที่ประชุม</div>
        <div class="kpi-value">#${m.no}</div>
        <div class="kpi-subtext">Weekly Progress Meeting</div>
      </div>
      <div class="luxury-card kpi-card">
        <div class="kpi-label">วันที่ / เวลา</div>
        <div class="kpi-value" style="font-size:22px">${m.date}</div>
        <div class="kpi-subtext">เวลา ${m.time} น.</div>
      </div>
      <div class="luxury-card kpi-card">
        <div class="kpi-label">สถานที่ประชุม</div>
        <div class="kpi-value" style="font-size:20px">${m.location}</div>
        <div class="kpi-subtext">ห้องประชุมหน้างาน & ออนไลน์</div>
      </div>
      <div class="luxury-card kpi-card gold">
        <div class="kpi-label">ประธานที่ประชุม</div>
        <div class="kpi-value" style="font-size:22px">${m.chairman}</div>
        <div class="kpi-subtext">West Coast Engineering</div>
      </div>
    </div>

    <!-- Agendas -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(460px, 1fr));gap:18px">
      ${m.agendas.map((a, i) => `
        <div class="luxury-card">
          <div class="card-header" style="background:#f8fafc">
            <h2 style="font-size:15px">
              <span style="width:24px;height:24px;border-radius:50%;background:var(--navy-850);color:#fff;display:inline-grid;place-items:center;font-size:12px;margin-right:4px">${i + 1}</span>
              ${a[0]}
            </h2>
          </div>
          <div class="card-body">
            <ul style="padding-left:20px;display:flex;flex-direction:column;gap:8px;font-size:13.5px;color:var(--slate-700)">
              ${a[1].map(pt => `<li>${pt}</li>`).join('')}
            </ul>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  document.getElementById('meetingSelect').onchange = e => meeting(+e.target.value);
}

// -------------------------------------------------------------
// VIEW 9: ACTION TRACKER
// -------------------------------------------------------------
function actionTracker() {
  const delayed = actionItems.filter(x => x[4] > 0).length;
  const active = actionItems.filter(x => x[5] === 'กำลังดำเนินการ').length;
  const done = actionItems.filter(x => x[5] === 'เสร็จแล้ว').length;

  document.getElementById('screen').innerHTML = `
    ${banner(
      'Action Item Tracker',
      'รายการติดตามงานเร่งรัดและข้อสั่งการ อ้างอิงบันทึกการประชุม Weekly Meeting #45'
    )}

    <!-- 4 KPI counters -->
    <div class="action-kpi-row">
      <div class="action-kpi-card">
        <span>รายการทั้งหมด (Total)</span>
        <strong>${actionItems.length}</strong>
      </div>
      <div class="action-kpi-card delayed">
        <span>เลื่อนกำหนด (Delayed)</span>
        <strong style="color:var(--rose-700)">${delayed}</strong>
      </div>
      <div class="action-kpi-card progress">
        <span>กำลังดำเนินการ (Ongoing)</span>
        <strong style="color:var(--amber-700)">${active}</strong>
      </div>
      <div class="action-kpi-card closed">
        <span>เสร็จสิ้นแล้ว (Done)</span>
        <strong style="color:var(--emerald-700)">${done}</strong>
      </div>
    </div>

    <!-- Table -->
    <div class="luxury-card">
      <div class="card-body" style="padding:0">
        <div class="table-responsive">
          <table class="luxury-table">
            <thead>
              <tr>
                <th style="width:50px">No.</th>
                <th>รายการงานเร่งรัด (Action Item)</th>
                <th>ผู้รับผิดชอบ</th>
                <th>กำหนดเดิม</th>
                <th>กำหนดล่าสุด</th>
                <th style="text-align:center">เลื่อนสะสม</th>
                <th style="text-align:center">สถานะ</th>
              </tr>
            </thead>
            <tbody>
              ${actionItems.map((item, idx) => `
                <tr style="${item[4] ? 'background:#fffafa' : ''}">
                  <td style="color:var(--slate-400);font-weight:700">${String(idx + 1).padStart(2, '0')}</td>
                  <td><b style="color:var(--navy-850)">${item[0]}</b></td>
                  <td><span class="status-pill open">${item[1]}</span></td>
                  <td>${item[2]}</td>
                  <td><b style="color:var(--navy-850)">${item[3]}</b></td>
                  <td style="text-align:center">
                    ${item[4] ? `<span style="color:var(--rose-700);font-weight:800">${item[4]} ครั้ง</span>` : '<span style="color:var(--slate-400)">—</span>'}
                  </td>
                  <td style="text-align:center">${badge(item[5])}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// VIEW 10: MONTHLY REPORTS
// -------------------------------------------------------------
function monthlyReport() {
  document.getElementById('screen').innerHTML = `
    ${banner(
      'Monthly Progress Reports',
      'เอกสารรายงานความก้าวหน้าประจำเดือน จัดทำโดย West Coast Engineering Co., Ltd.'
    )}

    <div style="display:grid;gap:18px">
      ${monthlyReports.map(r => `
        <div class="luxury-card" style="padding:24px;display:flex;align-items:center;justify-content:space-between;gap:20px;border-left:5px solid var(--gold-500)">
          <div style="display:flex;align-items:center;gap:20px">
            <div style="width:56px;height:64px;border-radius:var(--radius-sm);background:#fee2e2;color:#dc2626;display:grid;place-items:center;font-weight:800;font-size:14px;border:1px solid #fca5a5">
              PDF
            </div>
            <div>
              <span class="status-pill open" style="margin-bottom:6px">${r.year + 543}</span>
              <h2 style="font-size:18px;color:var(--navy-850)">${r.title}</h2>
              <div style="font-size:13px;color:var(--slate-500);margin-top:4px">
                วันที่จัดทำ: ${r.reportDate} · ความยาว ${r.pages} หน้า · EPCM Project Control
              </div>
            </div>
          </div>
          <div style="display:flex;gap:10px">
            <a class="btn-outline" href="${r.file}" target="_blank" rel="noopener">เปิดดูเอกสาร ↗</a>
            <a class="btn-gold" href="${r.file}" download>ดาวน์โหลด PDF ↓</a>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// -------------------------------------------------------------
// VIEW 11: EPCM WORK STATUS
// -------------------------------------------------------------
function epcmWorkStatus() {
  const leaderClass = n => n === 'Petch' ? 'leader-petch' : n === 'Boss' ? 'leader-boss' : n === 'Kreng' ? 'leader-kreng' : '';
  const active = epcmWorkItems.filter(x => x[6] === 'In Progress' || x[6] === 'Ongoing').length;
  const waiting = epcmWorkItems.filter(x => x[6] === 'Waiting Contractor').length;
  const closed = epcmWorkItems.filter(x => x[6] === 'Closed').length;

  document.getElementById('screen').innerHTML = `
    ${banner(
      'EPCM Work Status',
      'สถานะการควบคุมงานหลัก 11 หมวด และทีมงานผู้รับผิดชอบ (Petch, Boss, Kreng)'
    )}

    <div class="action-kpi-row">
      <div class="action-kpi-card">
        <span>หมวดงานหลัก (Categories)</span>
        <strong>11</strong>
      </div>
      <div class="action-kpi-card progress">
        <span>กำลังดำเนินการ (In Progress)</span>
        <strong style="color:var(--amber-700)">${active}</strong>
      </div>
      <div class="action-kpi-card delayed">
        <span>รอผู้รับเหมา (Waiting)</span>
        <strong style="color:var(--rose-700)">${waiting}</strong>
      </div>
      <div class="action-kpi-card closed">
        <span>ปิดแล้ว (Closed)</span>
        <strong style="color:var(--emerald-700)">${closed}</strong>
      </div>
    </div>

    <div class="luxury-card">
      <div class="card-body" style="padding:0">
        <div class="table-responsive">
          <table class="luxury-table">
            <thead>
              <tr>
                <th style="width:60px">No.</th>
                <th>หมวดงาน / รายการงาน</th>
                <th>Leader</th>
                <th>Support</th>
                <th>Priority</th>
                <th>สถานะ</th>
                <th style="width:140px">% Complete</th>
                <th>หมายเหตุ / Remark</th>
              </tr>
            </thead>
            <tbody>
              ${epcmWorkItems.map(row => {
                const isGroup = row[0] && row[2] && !row[3] && !row[5] && !row[6];
                if (isGroup) {
                  return `
                    <tr style="background:#e8edf5;font-weight:800;color:var(--navy-850)">
                      <td>${row[0]}</td>
                      <td colspan="7" style="font-size:14px">${row[1]} — ${row[2]}</td>
                    </tr>
                  `;
                }
                return `
                  <tr>
                    <td style="color:var(--slate-400)">${row[0] || '↳'}</td>
                    <td><b>${row[2]}</b></td>
                    <td>${row[3] ? `<span class="leader-badge ${leaderClass(row[3])}">${row[3]}</span>` : '—'}</td>
                    <td>${row[4] || '—'}</td>
                    <td>${badge(row[5])}</td>
                    <td>${badge(row[6])}</td>
                    <td>
                      ${row[7] !== null ? `
                        <div style="display:flex;align-items:center;gap:8px">
                          <div class="bar-track" style="flex:1">
                            <div class="bar-fill" style="width:${row[7]}%"></div>
                          </div>
                          <b style="font-size:12px">${row[7]}%</b>
                        </div>
                      ` : '—'}
                    </td>
                    <td><small style="color:var(--slate-500)">${row[8] || ''}</small></td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// VIEW 12 & 13: DRAWING & PUNCH LIST
// -------------------------------------------------------------
function drawing() {
  const items = [['ST', 'Structural Works'], ['AR', 'Architectural Works'], ['EE', 'Electrical Works'], ['ME', 'Mechanical Works'], ['FF', 'Fire Fighting System'], ['SN', 'Sanitary System']];
  document.getElementById('screen').innerHTML = `
    ${banner('Drawing & As-Built Register', 'รายการแบบก่อสร้างและ As-Built แยกตามระบบวิศวกรรม')}
    <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));gap:16px">
      ${items.map(x => `
        <div class="luxury-card" style="padding:22px;border-left:4px solid var(--gold-500)">
          <span class="status-pill open" style="float:right">พร้อมเชื่อมต่อ</span>
          <strong style="font-size:24px;color:var(--navy-850);display:block">${x[0]}</strong>
          <span style="color:var(--slate-600);font-size:14px;font-weight:600">${x[1]}</span>
          <p style="font-size:12px;color:var(--slate-400);margin-top:8px">โมดูลจัดเก็บไฟล์ As-Built สำหรับส่งมอบอาคาร</p>
        </div>
      `).join('')}
    </div>
  `;
}

function punch() {
  const buildings = ['Building B1 (อาคารประถม)', 'Building B2 (อาคารมัธยม & หอประชุม)', 'Building B3 (อาคารวิทยาศาสตร์ & ห้องสมุด)'];
  document.getElementById('screen').innerHTML = `
    ${banner('Defect & Punch List', 'รายการตรวจสอบข้อบกพร่องและส่งมอบพื้นที่รายอาคาร')}
    <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(340px, 1fr));gap:16px">
      ${buildings.map(b => `
        <div class="luxury-card" style="padding:24px;border-left:4px solid var(--navy-850)">
          <span class="status-pill paid" style="float:right">Active</span>
          <strong style="font-size:18px;color:var(--navy-850);display:block;margin-bottom:6px">${b}</strong>
          <p style="font-size:13px;color:var(--slate-500)">การตรวจรับพื้นที่ร่วมกันระหว่าง EPCM, ผู้รับเหมา และเจ้าของโครงการ</p>
        </div>
      `).join('')}
    </div>
  `;
}

// View Router
function show(pageName) {
  document.querySelectorAll('.nav-link').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.page === pageName);
  });

  const sidebar = document.getElementById('sidebar');
  if (sidebar) sidebar.classList.remove('open');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  switch (pageName) {
    case 'Executive Dashboard': dashboard(); break;
    case 'S-Curve': scurve(); break;
    case 'Manpower': manpower(); break;
    case 'Contractor Progress': contractors(); break;
    case 'Contractor Contract': contractorContract(); break;
    case 'Payment': payment(); break;
    case 'Cost Summary': cost(); break;
    case 'Meeting': meeting(); break;
    case 'Action Tracker': actionTracker(); break;
    case 'Monthly Report': monthlyReport(); break;
    case 'EPCM Work Status': epcmWorkStatus(); break;
    case 'Drawing / As-Built': drawing(); break;
    case 'Punch List': punch(); break;
    default: dashboard(); break;
  }
}

// Global Search
function filterGlobal(term) {
  const t = term.toLowerCase().trim();
  if (!t) return;
  // Jump to appropriate tab or filter current
}

// Bootstrap
window.addEventListener('DOMContentLoaded', async () => {
  initNav();
  dashboard();
  if (localStorage.getItem('epcm_gsheet_payment_url') || window.GOOGLE_SHEETS_PAYMENT_URL) {
    const synced = await syncPaymentFromGoogleSheet();
    if (synced) {
      const cur = document.querySelector('.nav-link.active')?.dataset.page;
      if (cur === 'Payment') payment();
      else if (cur === 'Contractor Contract') contractorContract();
    }
  }
});
