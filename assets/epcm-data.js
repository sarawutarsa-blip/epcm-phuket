// Glenalmond Phuket EPCM Data Model
// Live Google Sheets sync URL (Pre-configured)
window.GOOGLE_SHEETS_PAYMENT_URL = 'https://docs.google.com/spreadsheets/d/1qKr7ahiBiUv4iDS02g96w1D7N1O8lJf44z1U0vo4gMA/edit';
const jobs=[
  ['West Coast Engineering Co., Ltd.','Early works',1172417.40,1172417.40,0,0,'Close / เรียกเก็บตามจริง ส่วนที่เหลือยกเลิก'],
  ['West Coast Engineering Co., Ltd.','EPCM',7000000,4550000,1400000,1050000,'Open'],
  ['บริษัท เรือนแก้ว ภูเก็ต จำกัด','เสาเข็ม',5072000,5072000,0,0,'Close'],
  ['บริษัท ต.วรคุณ จำกัด','เหล็กเส้น',4696684.50,4696684.50,0,0,'Close'],
  ['บริษัท เรือนแก้ว ภูเก็ต จำกัด','งาน Sub-Structure (งานฐานรากส่วนเสาเข็ม, ฟุตติ้ง, ตอม่อ, คานพื้น)',10617064.57,10206164.57,0,0,'Close / เรียกเก็บตามจริง ส่วนที่เหลือยกเลิก'],
  ['SSI Building Technology','งาน Super-Structure (ค่าสินค้า)',64824252,64824252,0,0,'Open'],
  ['SSI Building Technology','งาน Super-Structure (ค่าติดตั้ง)',14980700,13326165,592570,1061965,'Open'],
  ['บริษัท ออสซี่ คอนสตรัคชั่นส์ จำกัด','งาน Sub-Structure (งานฐานราก ฟุตติ้ง, ตอม่อ, คานพื้น) อาคาร B2, B3',8000000,8000000,0,0,'Close'],
  ['SHIELD TECH','ระบบกำจัดปลวก',337380,320511,0,0,'Open'],
  ['บริษัท ยายบัวการช่าง จำกัด','งานสถาปัตยกรรมและงานระบบ',166000000,144996749.12,0,21003250.88,'Open'],
  ['บริษัท พลเกษมเคหะภัณฑ์ จำกัด','การสำรองซื้อเหล็กที่ไม่เพียงพอของโครงการ',319116.07,319116.07,0,0,'Close'],
  ['บริษัท ออสซี่ คอนสตรัคชั่นส์ จำกัด','เบิกค่าเหล็กของ AUSY โดยหักจากเรือนแก้ว',143933.08,143933.08,0,0,'Close'],
  ['Kitchen Design and Consultant Co.,Ltd.','China Craft Select Co., Ltd.',50000,50000,0,0,'Close'],
  ['China Craft Select Co., Ltd.','Custom-Made Furniture Sales Contract(เฟส1)',339066.36,207166.16,135626.54,0,'Open'],
  ['China Craft Select Co., Ltd.','Loose Furniture Sales Contract (เฟส1)',5277620.46,3166572.28,0,0,'Open'],
  ['บริษัท ยายบัวการช่าง จำกัด','งานถังน้ำดีใต้ดิน',6500000,5200000,0,1300000,'Open'],
  ['บริษัท ยายบัวการช่าง จำกัด','เบิกเงินงานเพิ่มงานโครงสร้างพื้น ชั้น 1 อาคาร (K)',390380.07,390380.07,0,0,'Close'],
  ['บริษัท ออสซี่ คอนสตรัคชั่นส์ จำกัด','Addition งานโครงสร้าง ชั้น 1 อาคาร B3',821255.36,821255.36,0,0,'Close'],
  ['SHIELD TECH','งานเพิ่มเติม (Additional Work)',9780,9780,0,0,'Open'],
  ['บริษัท อัลสตัน อินเตอร์เนชั่นแนล จำกัด','ก่อสร้างโครงการ DROP OFF',1777000,1777000,0,0,'Close'],
  ['China Craft Select Co., Ltd.','Loose Furniture Sales Contract (เฟส2)',1904640,1142784,761856,0,'Open'],
  ['บริษัท พศ.สถาปนิก จำกัด','งานออกแบบตกแต่งภายใน',500000,300000,0,200000,'Open'],
  ['บริษัท เอ๊กซ์ตร้า บิ๊ก เซลส์ จำกัด','งานอุปกรณ์เครื่องครัวพร้อมงานบริการและติดตั้ง',7716104,3086441.60,3086441.60,1543220.80,'Open'],
  ['บริษัท ยายบัวการช่าง จำกัด','งานเพิ่มพ่นฉนวน PU FOAM ใต้ท้องพื้นชั้นดาดฟ้า',1700000,1700000,0,0,'Close'],
  ['บริษัท เอส.เอฟ.อินซูเลชั่น จำกัด','งานพื้น PU บริเวณห้องครัว',165000,165000,0,0,'Close'],
  ['West Coast Engineering Co., Ltd.','งานก่อสร้างโรงเรียนนานาชาติจังหวัดภูเก็ต (EPCM Service)',1400000,0,1400000,0,'Open'],
  ['บริษัท ยายบัวการช่าง จำกัด','งานเพิ่มเติมส่วนงานสระว่ายน้ำเด็ก (Kid Pool)',1500000,450000,0,1050000,'Open'],
  ['บริษัท เทวาวณิชกิจ จำกัด','จ้างTEWAงานถนน',3550000,1065000,502020.40,1982979.60,'Open']
];
const payments=[['West Coast Engineering Co., Ltd.','Early works','งวด 1 · 50% Down payment',839500,'-','ชำระแล้ว'],['West Coast Engineering Co., Ltd.','Early works','งวด 2 · 50% งานเสร็จ',332917.40,'INV68/10/191','ชำระแล้ว'],['West Coast Engineering Co., Ltd.','EPCM','งวด 1 · 10% Down payment',700000,'INV68/10/171','ชำระแล้ว'],['West Coast Engineering Co., Ltd.','EPCM','งวด 2 · 12% Progress',840000,'INV69/02/061','ชำระแล้ว'],['West Coast Engineering Co., Ltd.','EPCM','งวด 3 · 12% Progress',840000,'INV69/03/089','ชำระแล้ว'],['West Coast Engineering Co., Ltd.','EPCM','งวด 4 · 11% Progress',770000,'INV69/04/107','ชำระแล้ว'],['West Coast Engineering Co., Ltd.','EPCM','งวด 5 · 10% Progress',700000,'INV69/05/034','ชำระแล้ว'],['West Coast Engineering Co., Ltd.','EPCM','งวด 6 · 10% Progress',700000,'INV69/05/099','ชำระแล้ว'],['West Coast Engineering Co., Ltd.','EPCM','งวด 7 · 10% Progress',700000,'INV69/07/023','วางบิลแล้ว · รอชำระ'],['West Coast Engineering Co., Ltd.','EPCM','งวด 8 · 5% Progress',350000,'INV69/08/111','วางบิลแล้ว · รอชำระ'],['West Coast Engineering Co., Ltd.','EPCM','งวด 9 · 5% Progress',350000,'INV69/08/111','วางบิลแล้ว · รอชำระ'],['West Coast Engineering Co., Ltd.','EPCM','งวด 10 · 5% Progress',350000,'-','รอวางบิล'],['West Coast Engineering Co., Ltd.','EPCM','งวด 11 · 5% Progress',350000,'-','รอวางบิล'],['West Coast Engineering Co., Ltd.','EPCM','งวด 12 · 5% Progress',350000,'-','รอวางบิล'],['บริษัท ยายบัวการช่าง จำกัด','งานถังน้ำดีใต้ดิน','งวด 1 · 20% Down payment',1300000,'INV.YBT/GAM/ADD003/001','ชำระแล้ว'],['บริษัท ยายบัวการช่าง จำกัด','งานถังน้ำดีใต้ดิน','งวด 2 · 30%',1950000,'INV.YBT/GAM/ADD003/002','ชำระแล้ว'],['บริษัท ยายบัวการช่าง จำกัด','งานถังน้ำดีใต้ดิน','งวด 3 · 30%',1950000,'INV.YBT/GAM/AD0003/003','ชำระแล้ว'],['บริษัท ยายบัวการช่าง จำกัด','งานถังน้ำดีใต้ดิน','งวด 4 · 20%',1300000,'-','รอวางบิล'],['China Craft Select Co., Ltd.','Loose Furniture เฟส 2','งวด 1 · 10% Down payment',190464,'IV202606001','ชำระแล้ว'],['China Craft Select Co., Ltd.','Loose Furniture เฟส 2','งวด 2 · 50% ทำสัญญา',952320,'IV202606001','ชำระแล้ว'],['China Craft Select Co., Ltd.','Loose Furniture เฟส 2','งวด 3 · 30% เริ่มติดตั้ง',571392,'IV202608006','วางบิลแล้ว · รอชำระ'],['China Craft Select Co., Ltd.','Loose Furniture เฟส 2','งวด 4 · 10% ติดตั้งเสร็จ',190464,'IV202608007','วางบิลแล้ว · รอชำระ'],['บริษัท เอ๊กซ์ตร้า บิ๊ก เซลส์ จำกัด','อุปกรณ์เครื่องครัวและติดตั้ง','งวด 1 · 40% Down payment',3086441.60,'BI-69-06-0066','ชำระแล้ว'],['บริษัท เอ๊กซ์ตร้า บิ๊ก เซลส์ จำกัด','อุปกรณ์เครื่องครัวและติดตั้ง','งวด 2 · 40% สินค้าเข้าหน้างาน',3086441.60,'BI-69-08-0062','วางบิลแล้ว · รอชำระ'],['บริษัท เอ๊กซ์ตร้า บิ๊ก เซลส์ จำกัด','อุปกรณ์เครื่องครัวและติดตั้ง','งวด 3 · 10% ติดตั้งครัวเสร็จ',771610.40,'-','รอวางบิล'],['บริษัท เอ๊กซ์ตร้า บิ๊ก เซลส์ จำกัด','อุปกรณ์เครื่องครัวและติดตั้ง','งวด 4 · 10% ส่งมอบ',771610.40,'-','รอวางบิล'],['บริษัท เทวาวณิชกิจ จำกัด','งานถนนและ Hardscape','งวด 1 · 30% Down payment',1065000,'INV2026070054','ชำระแล้ว'],['บริษัท เทวาวณิชกิจ จำกัด','งานถนนและ Hardscape','งวด 2 · ตามปริมาณงานจริง',502020.40,'INV2026080072','วางบิลแล้ว · รอชำระ'],['บริษัท เทวาวณิชกิจ จำกัด','งานถนนและ Hardscape','งวด 3 · ตามปริมาณงานจริง',1982979.60,'-','รอวางบิล']];
payments.push(...[
['บริษัท ยายบัวการช่าง จำกัด','งานสถาปัตยกรรมและงานระบบ','งวด 1 · 10% Down payment ครั้งที่ 1',16600000,'INV.YBT/GAM/001','ชำระแล้ว'],
['บริษัท ยายบัวการช่าง จำกัด','งานสถาปัตยกรรมและงานระบบ','งวด 2 · 10% Down payment ครั้งที่ 2',16600000,'INV.YBT/GAM/002','ชำระแล้ว'],
['บริษัท ยายบัวการช่าง จำกัด','งานสถาปัตยกรรมและงานระบบ','งวด 3 · Progress ครั้งที่ 1',7799697.22,'INV.YBT/GAM/003','ชำระแล้ว'],
['บริษัท ยายบัวการช่าง จำกัด','งานสถาปัตยกรรมและงานระบบ','งวด 4 · Progress ครั้งที่ 2',10354145.97,'INV.YBT/GAM/004','ชำระแล้ว'],
['บริษัท ยายบัวการช่าง จำกัด','งานสถาปัตยกรรมและงานระบบ','งวด 5 · Progress ครั้งที่ 3',12135311.74,'INV.YBT/GAM/005','ชำระแล้ว'],
['บริษัท ยายบัวการช่าง จำกัด','งานสถาปัตยกรรมและงานระบบ','งวด 6 · Progress ครั้งที่ 4',16620971.44,'INV.YBT/GAM/006','ชำระแล้ว'],
['บริษัท ยายบัวการช่าง จำกัด','งานสถาปัตยกรรมและงานระบบ','งวด 7 · Progress ครั้งที่ 5',14752049.90,'INV.YBT/GAM/007','ชำระแล้ว'],
['บริษัท ยายบัวการช่าง จำกัด','งานสถาปัตยกรรมและงานระบบ','งวด 8 · Progress ครั้งที่ 6',14934730.05,'INV.YBT/GAM/008','ชำระแล้ว'],
['บริษัท ยายบัวการช่าง จำกัด','งานสถาปัตยกรรมและงานระบบ','งวด 9 · Progress ครั้งที่ 7',11933629.51,'INV.YBT/GAM/009','ชำระแล้ว'],
['บริษัท ยายบัวการช่าง จำกัด','งานสถาปัตยกรรมและงานระบบ','งวด 10 · Progress ครั้งที่ 8',10927451.15,'INV.YBT/GAM/010','ชำระแล้ว'],
['บริษัท ยายบัวการช่าง จำกัด','งานสถาปัตยกรรมและงานระบบ','งวด 11 · Progress ครั้งที่ 9',6002301.77,'INV.YBT/GAM/011','ชำระแล้ว'],
['บริษัท ยายบัวการช่าง จำกัด','งานสถาปัตยกรรมและงานระบบ','งวด 12 · Progress ครั้งที่ 10',6336460.37,'INV.YBT/GAM/012','ชำระแล้ว'],
['บริษัท ยายบัวการช่าง จำกัด','งานสถาปัตยกรรมและงานระบบ','งวด 13 · คงเหลือตามสัญญา',21003250.88,'-','รอวางบิล']]);
const sections={Dashboard:['Executive Dashboard','S-Curve'],Contractor:['Manpower','Contractor Progress','Contractor Contract'],'Cost / Payment':['Payment','Cost Summary'],Action:['Meeting','Action Tracker','Monthly Report'],Technical:['EPCM Work Status','Drawing / As-Built','Punch List']};
document.head.insertAdjacentHTML('beforeend','<style>@media(max-width:700px){.monthly-card{grid-template-columns:54px 1fr!important}.monthly-actions{grid-column:1/-1;justify-content:flex-start!important}.monthly-actions a{flex:1;text-align:center}}</style>');
document.head.insertAdjacentHTML('beforeend',`<style>.payment-company{border-top:4px solid var(--company-color,var(--navy))}.payment-company .contractor-summary{grid-template-columns:minmax(240px,1.5fr) repeat(3,135px) 28px}.payment-metric small{display:block;color:var(--muted);font-size:11px}.payment-metric b{font-size:14px}.historybar{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:15px}.historybar select{border:1px solid var(--line);background:#fff;border-radius:7px;padding:9px 12px;min-width:220px}.historytag{background:#eef3f7;color:var(--navy);border-radius:18px;padding:6px 10px;font-size:12px}.meeting-meta{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.agenda{padding:16px 0;border-bottom:1px solid var(--line)}.agenda:last-child{border:0}.agenda h3{margin:0 0 8px;color:var(--navy);font-size:16px}.agenda ul{margin:0;padding-left:20px}.status-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:13px}.status-card{padding:20px;border-left:4px solid var(--gold)}.status-card strong{font-size:22px;color:var(--navy)}.status-card .pill{float:right}.delay-count{font-weight:800;color:var(--red)}@media(max-width:1050px){.payment-company .contractor-summary{grid-template-columns:1fr 120px 120px 28px}.payment-company .payment-metric:nth-of-type(3){display:none}.meeting-meta,.status-grid{grid-template-columns:1fr 1fr}}@media(max-width:650px){.payment-company .contractor-summary{grid-template-columns:1fr 24px}.payment-company .payment-metric{display:none!important}.meeting-meta,.status-grid{grid-template-columns:1fr}}</style>`);
document.head.insertAdjacentHTML('beforeend',`<style>
.manpower-summary-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.manpower-summary-card{padding:24px;border-top:5px solid var(--navy)}.manpower-summary-card.total{border-color:var(--green);background:#f3faf6}.manpower-summary-card.system{border-color:var(--gold)}.manpower-summary-card.other{border-color:#607d8b}.manpower-summary-card span{color:var(--muted);font-weight:700}.manpower-summary-card strong{display:block;color:var(--navy);font-size:38px;margin:12px 0}.manpower-summary-card strong small{font-size:15px}.manpower-summary-card p{margin:0;color:var(--muted)}
.payment-report{border-collapse:separate;border-spacing:0 4px}.payment-report th{background:#f2f5f8}.payment-report td{background:#fff;border-bottom:1px solid #edf0f3}.payment-report .company-start td{border-top:10px solid #f4f6f8}.payment-report .company-start td:first-child{border-left:0}.payment-report .vendor-cell{background:#f7f9fb;border-left:5px solid var(--group-color);font-size:14px;line-height:1.5}.payment-report .contract-row td{background:#f0f4f7}.payment-report tbody tr:hover td{background:#f8fafc}.payment-report .contract-row:hover td{background:#eaf0f4}.payment-tools{background:#fff;padding:12px;border:1px solid var(--line);border-radius:10px}
.cost-company-list{display:grid;gap:15px;margin-top:15px}.cost-company{overflow:hidden;border-left:6px solid var(--company-color)}.cost-company-head{display:flex;justify-content:space-between;align-items:center;padding:16px 18px;background:color-mix(in srgb,var(--company-color) 8%,white);border-bottom:1px solid var(--line)}.cost-company-head b{display:block;color:var(--company-color);font-size:16px}.cost-company-head small{color:var(--muted)}.cost-company-head strong{color:var(--company-color)}.cost-status{font-weight:700;color:#596574}.cost-table th{background:#fafbfc}
.meeting-agendas{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:15px}.meeting-agenda{display:grid;grid-template-columns:38px 1fr;gap:14px;padding:20px;border-top:3px solid #d8e0e8}.agenda-number{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:var(--navy);color:#fff;font-weight:800}.meeting-agenda h3{margin:3px 0 10px;color:var(--navy);font-size:16px}.meeting-agenda ul{margin:0;padding-left:20px}.meeting-agenda li{margin:0 0 7px;line-height:1.55}
.action-summary{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:15px}.action-summary .card{padding:17px;border-bottom:4px solid var(--navy)}.action-summary .warning{border-color:var(--red)}.action-summary .active{border-color:var(--green)}.action-summary span{color:var(--muted);font-weight:700}.action-summary strong{display:block;font-size:28px;color:var(--navy);margin-top:5px}.action-table .is-delayed td{background:#fff8f6}.action-index{display:inline-flex;width:28px;height:28px;align-items:center;justify-content:center;border-radius:7px;background:#edf2f6;color:var(--navy);font-size:12px;margin-right:8px}.due-date{font-weight:800;color:var(--navy)}
@media(max-width:850px){.meeting-agendas{grid-template-columns:1fr}.manpower-summary-grid,.action-summary{grid-template-columns:1fr 1fr}}@media(max-width:560px){.manpower-summary-grid,.action-summary{grid-template-columns:1fr}}
</style>`);
const companyInfo={
'West Coast Engineering Co., Ltd.':['บริษัท เวสท์โคสท์ เอ็นจิเนียริ่ง จำกัด · WEST COAST ENGINEERING COMPANY LIMITED','0105542000061','16 อาคารเค แอนด์ วาย ชั้น 5 ถนนสุรศักดิ์ แขวงสีลม เขตบางรัก กรุงเทพมหานคร 10500','120,000,000 บาท','ยังดำเนินกิจการอยู่','4 มกราคม 2542','กิจกรรมงานวิศวกรรมและการให้คำปรึกษาทางด้านเทคนิคที่เกี่ยวข้อง · ธุรกิจที่ส่งงบการเงินล่าสุด: ให้บริการวิศวกรรม','https://www.wce.co.th'],
'บริษัท เรือนแก้ว ภูเก็ต จำกัด':['RUENKAEW PHUKET CO., LTD.','0835568015450','97/165 หมู่ที่ 4 ตำบลวิชิต อำเภอเมืองภูเก็ต จังหวัดภูเก็ต 83000','1,000,000 บาท','ยังดำเนินกิจการอยู่','11 กรกฎาคม 2568','รับเหมาก่อสร้างอาคารที่พักอาศัยทุกประเภท บ้านเดี่ยว อาคารอยู่อาศัยรวม อาคารสูง รวมถึงการดัดแปลงหรือปรับปรุงอาคาร · หมวดธุรกิจ: การก่อสร้างอาคารที่พักอาศัย',''],
'บริษัท ต.วรคุณ จำกัด':['T. WORAKOON COMPANY LIMITED','0105531052790','648 ซอยสวนพลู แขวงทุ่งมหาเมฆ เขตสาทร กรุงเทพมหานคร 10120','30,000,000 บาท','ยังดำเนินกิจการอยู่','15 กรกฎาคม 2531','จำหน่ายส่ง-ปลีกเหล็กทุกประเภท · หมวดธุรกิจ: การขายส่งเหล็กกล้าและโลหะที่นอกกลุ่มเหล็กขั้นมูลฐาน · ธุรกิจที่ส่งงบการเงินล่าสุด: การขายเหล็กทุกประเภท',''],
'SSI Building Technology':['บริษัท สหวิริยาสตีลอินดัสตรี จำกัด (มหาชน) · SAHAVIRIYA STEEL INDUSTRIES PUBLIC COMPANY LIMITED','0107537000688','28/1 อาคารประภาวิทย์ ชั้นที่ 2-3 ถนนสุรศักดิ์ แขวงสีลม เขตบางรัก กรุงเทพมหานคร 10500','871,646,772,055 บาท','ยังดำเนินกิจการอยู่','24 กุมภาพันธ์ 2537','การผลิตเหล็กแผ่นรีดร้อนชนิดม้วน · หมวดธุรกิจ: การผลิตเหล็กและเหล็กกล้าขั้นมูลฐานขั้นต้นและขั้นกลาง · ธุรกิจที่ส่งงบการเงินล่าสุด: ผลิตเหล็กแผ่นรีดร้อนและเหล็กแผ่นรีดร้อนเคลือบน้ำมัน','http://www.ssi-steel.com'],
'บริษัท ออสซี่ คอนสตรัคชั่นส์ จำกัด':['AUSY CONSTRUCTIONS CO., LTD.','0125559030651','70/93 ซอยทวีวัฒนา 9 แขวงทวีวัฒนา เขตทวีวัฒนา กรุงเทพมหานคร 10170','50,000,000 บาท','ยังดำเนินกิจการอยู่','9 ธันวาคม 2559','รับเหมาก่อสร้างอาคารพาณิชย์ อาคารที่พักอาศัย สถานที่ทำการ ถนน สะพาน เขื่อน อุโมงค์ และงานโยธาทุกประเภท รวมทั้งผลิตและจำหน่ายผลิตภัณฑ์คอนกรีตหล่อสำเร็จและคอนกรีตบล็อก · หมวดธุรกิจ: การก่อสร้างอาคารที่ไม่ใช่ที่พักอาศัย · ธุรกิจที่ส่งงบการเงินล่าสุด: รับเหมาก่อสร้าง ผลิตและจำหน่ายผลิตภัณฑ์คอนกรีตหล่อสำเร็จ',''],
'SHIELD TECH':['บริษัท ชิลด์เทค เซอร์วิส (ประเทศไทย) จำกัด · SHIELDTECH SERVICE (THAILAND) COMPANY LIMITED','0835554004451','103/15 หมู่ที่ 5 ตำบลรัษฎา อำเภอเมืองภูเก็ต จังหวัดภูเก็ต 83000','1,000,000 บาท','ยังดำเนินกิจการอยู่','19 เมษายน 2554','จำหน่ายเคมีและบริการกำจัดปลวกและแมลง · หมวดธุรกิจ: การขายส่งปุ๋ยและเคมีภัณฑ์ทางการเกษตร · ธุรกิจที่ส่งงบการเงินล่าสุด: จำหน่ายเคมีและบริการกำจัดปลวก',''],
'บริษัท ยายบัวการช่าง จำกัด':['YAAI BOA KARNCHANG CO., LTD.','0835552009269','94/98 หมู่ที่ 7 ตำบลเกาะแก้ว อำเภอเกาะแก้ว จังหวัดภูเก็ต 83120','20,000,000 บาท','ยังดำเนินกิจการอยู่','29 ตุลาคม 2552','รับเหมาก่อสร้างอาคาร อาคารพาณิชย์ อาคารที่พักอาศัย สถานที่ทำการ ถนน สะพาน เขื่อน และอุโมงค์ · หมวดธุรกิจ: การก่อสร้างอาคารที่ไม่ใช่ที่พักอาศัย · ธุรกิจที่ส่งงบการเงินล่าสุด: รับเหมาก่อสร้าง',''],
'China Craft Select Co., Ltd.':['China Craft Select Co., Ltd.','รอตรวจสอบเลขทะเบียน','รอตรวจสอบ','รอตรวจสอบ','ดำเนินกิจการ'],
'บริษัท เอ๊กซ์ตร้า บิ๊ก เซลส์ จำกัด':['EXTRA BIG SALES COMPANY LIMITED','0105550022337','98 ถนนโพธิ์แก้ว แขวงคลองจั่น เขตบางกะปิ กรุงเทพมหานคร 10240','20,000,000 บาท','ยังดำเนินกิจการอยู่','26 กุมภาพันธ์ 2550','ผลิตเครื่องครัวสเตนเลสและผลิตภัณฑ์สเตนเลส เช่น ฝาครัว ซิงก์ล้างจาน และโต๊ะสเตนเลส · ธุรกิจที่ส่งงบการเงินล่าสุด: ผลิตเครื่องใช้และอุปกรณ์ในครัว','https://www.extrabigsales.com'],
'บริษัท เทวาวณิชกิจ จำกัด':['THEWAWANICHAKIT COMPANY LIMITED','0835560010211','32/18 หมู่ที่ 5 ตำบลรัษฎา อำเภอเมืองภูเก็ต จังหวัดภูเก็ต 83000','1,000,000 บาท','ยังดำเนินกิจการอยู่','26 กรกฎาคม 2560','กิจกรรมการบริการอื่น ๆ เพื่อสนับสนุนธุรกิจ ซึ่งมิได้จัดประเภทไว้ในที่อื่น · ธุรกิจที่ส่งงบการเงินล่าสุด: กิจกรรมการบริการอื่น ๆ เพื่อสนับสนุนธุรกิจ',''],
'บริษัท พลเกษมเคหะภัณฑ์ จำกัด':['PHONKASEMKEHAPHUN COMPANY LIMITED','0835558008604','68/33 หมู่ที่ 4 ตำบลเกาะแก้ว อำเภอเมืองภูเก็ต จังหวัดภูเก็ต 83000','4,000,000 บาท','ยังดำเนินกิจการอยู่','16 กรกฎาคม 2558','บริการค้ำประกันหนี้สิน ความรับผิด และการปฏิบัติตามสัญญาของบุคคลอื่น · หมวดธุรกิจ: การให้สินเชื่อเพื่อการค้าและการลงทุน · ธุรกิจที่ส่งงบการเงินล่าสุด: ร้านขายปลีกวัสดุก่อสร้างอื่น ๆ',''],
'Kitchen Design and Consultant Co.,Ltd.':['บริษัท คิทเช่น ดีไซน์ แอนด์ คอนซัลแทนส์ จำกัด · KITCHEN DESIGN AND CONSULTANTS COMPANY LIMITED','0835558001073','60/1 หมู่ที่ 7 ตำบลฉลอง อำเภอเมืองภูเก็ต จังหวัดภูเก็ต 83130','1,000,000 บาท','ยังดำเนินกิจการอยู่','29 มกราคม 2558','จำหน่ายวัสดุและอุปกรณ์เครื่องครัว เครื่องใช้ในร้านอาหาร รับติดตั้งระบบแก๊ส งานโครงเหล็กและสเตนเลส · ธุรกิจที่ส่งงบการเงินล่าสุด: จำหน่ายวัสดุ อุปกรณ์เครื่องครัว และรับติดตั้งระบบแก๊ส',''],
'บริษัท อัลสตัน อินเตอร์เนชั่นแนล จำกัด':['ALSTON INTERNATIONAL CO., LTD.','0105541051788','70/93 ซอยทวีวัฒนา 9 แขวงทวีวัฒนา เขตทวีวัฒนา กรุงเทพมหานคร 10170','1,000,000 บาท','ยังดำเนินกิจการอยู่','19 สิงหาคม 2541','ค้าวัสดุก่อสร้าง อุปกรณ์และเครื่องมือที่ใช้ในการก่อสร้าง สี เหล็ก และเครื่องมือช่างทุกประเภท · ธุรกิจที่ส่งงบการเงินล่าสุด: จำหน่ายอุปกรณ์ก่อสร้าง',''],
'บริษัท พศ.สถาปนิก จำกัด':['PORSOR.ARCHITECTS CO., LTD.','0835565000052','7/63 หมู่ที่ 8 ตำบลเทพกระษัตรี อำเภอถลาง จังหวัดภูเก็ต 83110','1,000,000 บาท','ยังดำเนินกิจการอยู่','4 มกราคม 2565','กิจกรรมงานสถาปัตยกรรมและการให้คำปรึกษาที่เกี่ยวข้อง · ธุรกิจที่ส่งงบการเงินล่าสุด: งานสถาปัตยกรรมและการให้คำปรึกษาที่เกี่ยวข้อง',''],
'บริษัท เอส.เอฟ.อินซูเลชั่น จำกัด':['S.F. INSULATION CO., LTD.','0125554016757','50/13 หมู่ที่ 12 ตำบลบางบัวทอง อำเภอบางบัวทอง จังหวัดนนทบุรี 11110','5,000,000 บาท','ยังดำเนินกิจการอยู่','13 กันยายน 2554','ซื้อขายและรับติดตั้งระบบกันซึม ฉนวนกันความร้อน และระบบกันเสียง · ธุรกิจที่ส่งงบการเงินล่าสุด: ซื้อขายฉนวนกันความร้อนทุกชนิด ผลิตและจำหน่ายฉนวนกันความร้อน','']};
const manpowerGroups=[
['ทีม EXB งานครัว',[['Kitchen Team',4]]],
['เทวาวณิชกิจ',[]],
['ทีม Firstcon งานซ่อมร้าวดาดฟ้า',[['Roof Crack Repair Team (งานซ่อมร้าวดาดฟ้า)',6]]],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer (วิศวกรโครงสร้าง)',2],['Safety Officer (จป.)',0],['Architect (สถาปนิก)',0],['Foreman (โฟร์แมน)',6],['Office Staff (สำนักงาน)',0],['Concrete Worker (ช่างปูน)',1],['Wall Plaster Team (ช่างฉาบ)',3],['Supervisor (หัวหน้างาน)',3],['General Worker (ช่างทั่วไป)',14],['Laborer (กรรมกร)',12],['Surveyor (เซอร์เวย์)',3],['Scaffolding Team (ชุดตั้งนั่งร้าน)',4],['Driver (คนขับรถ)',3],['Storekeeper (เจ้าหน้าที่สโตร์)',1],['Interior Tile Installation (งานกระเบื้องภายใน)',5],['Exterior Tile Installation (งานกระเบื้องภายนอก)',2],['Painting Team (ช่างสี)',5],['Underground Water Tank Structure',0],['Elevator Work (งานลิฟต์)',4],['Ceiling Work (งานฝ้าเพดาน)',0],['Texture Painting Work (งานสีเทคเจอร์)',0],['Vinyl Tile Work (งานกระเบื้องยาง)',0],['Aluminum Work (งานอลูมิเนียม)',3],['Door Installation (งานติดตั้งประตู)',0],['Underground Tank Repair',0],['Villa Wall Installation',4]]],
['ทีมงานระบบ ยายบัวการช่าง',[['MEP Engineer (วิศวกร)',2],['Foreman (โฟร์แมน)',1],['Pipefitter (ช่างประปา)',3],['Electrician (ช่างไฟ)',0],['Fire System Installers (ช่างดับเพลิง)',0],['AC Installation Team (ช่างแอร์)',2],['Storehouse (สโตร์)',0]]]];
jobs.find(x=>x[1]==='ระบบกำจัดปลวก')[5]=0;jobs.find(x=>x[1]==='Loose Furniture เฟส 1')[5]=0;
const manpowerGroups19=[
['ทีม EXB งานครัว',[['Kitchen Installation Team (งานครัว)',5]]],
['เทวาวณิชกิจ',[['Engineer (วิศวกร)',1],['Surveyor (เซอร์เวย์)',4],['Worker (คนงาน)',2],['Backhoe PC45 (แบคโฮ PC45)',1]]],
['ทีม Firstcon งานซ่อมร้าวดาดฟ้า',[['Roof Crack Repair Team (งานซ่อมร้าวดาดฟ้า)',6]]],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer (วิศวกรโครงสร้าง)',3],['Safety Officer (จป.)',0],['Architect (สถาปนิก)',2],['Foreman (โฟร์แมน)',6],['Office Staff (สำนักงาน)',1],['Concrete Worker (ช่างปูน)',5],['Wall Plaster Team (ช่างฉาบ)',10],['Supervisor (หัวหน้างาน)',3],['General Worker (ช่างทั่วไป)',38],['Laborer (กรรมกร)',21],['Surveyor (เซอร์เวย์)',4],['Scaffolding Team (ชุดตั้งนั่งร้าน)',4],['Driver (คนขับรถ)',3],['Storekeeper (เจ้าหน้าที่สโตร์)',1],['Interior Tile Installation (งานกระเบื้องภายใน)',7],['Exterior Tile Installation (งานกระเบื้องภายนอก)',4],['Painting Team (ช่างสี)',5],['Underground Water Tank Structure',2],['Elevator Work (งานลิฟต์)',0],['Ceiling Work (งานฝ้าเพดาน)',4],['Texture Painting Work (งานสีเทคเจอร์)',0],['Vinyl Tile Work (งานกระเบื้องยาง)',0],['Aluminum Work (งานอลูมิเนียม)',0],['Door Installation (งานติดตั้งประตู)',2],['Underground Tank Repair',3],['Willy Wall Installation',4]]],
['ทีมงานระบบ ยายบัวการช่าง',[['MEP Engineer (วิศวกร)',3],['Foreman (โฟร์แมน)',2],['Pipefitter (ช่างประปา)',3],['Electrician (ช่างไฟ)',8],['Fire System Installers (ช่างดับเพลิง)',0],['AC Installation Team (ช่างแอร์)',0],['Storehouse (สโตร์)',1]]]];
const manpowerGroups21=[
['เทวาวณิชกิจ',[['วิศวกร',1],['คนงาน',4]],5],
['ทีม FirstCon',[['งานซ่อมร้าวดาดฟ้า',6]],6],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer',3],['Safety Officer',0],['Architect',1],['Foreman',6],['Office Staff',1],['Concrete Worker',5],['Bricklaying Team',13],['Wall Plaster Team',3],['Supervisor',40],['General Worker',21],['Laborer',4],['Surveyor',4],['Scaffolding Team',4],['Driver',3],['Storekeeper',1],['Interior Tile Installation',7],['Exterior Tile Installation',4],['Painter',5],['Underground Water Tank Structure Team',5],['Lift Installation',4],['Ceiling Installation',4],['Texture Paint Team',0],['Vinyl Flooring Installation',0],['Aluminium Installation',0],['Door Installation',0],['Underground Water Tank Crack Repair',3]],137],
['ทีมงานระบบ',[['MEP Engineer',3],['Foreman',3],['Pipefitter',3],['Electrician',14],['Fire System Installers',0],['AC Installation Team',1],['Storehouse',1]],25]];
const manpowerGroups22=[
['เทวาวณิชกิจ',[['Engineer',1],['Worker',2],['Tree Cutting Team',3]],6],
['ทีม FirstCon · งานซ่อมร้าวดาดฟ้า',[['Foreman',1],['Crack Repair Technician',4]],5],
['ทีม EXB',[['Kitchen Installation Team',4]],4],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer',3],['Safety Officer',0],['Architect',2],['Foreman',6],['Office Staff',1],['Concrete Worker',5],['Wall Plasterer Team',13],['Supervisor',3],['General Worker',40],['Laborer',21],['Surveyor',4],['Scaffolding Team',4],['Driver',3],['Storekeeper',1],['Interior Tile Installation',7],['Exterior Tile Installation',4],['Painter',5],['Underground Water Tank Structure Team',0],['Brick Plastering Team',0],['Elevator Team',4],['Ceiling Team',4],['Texture Paint Team',0],['Vinyl Flooring Team',0],['Aluminum Team',5],['Door Installation Team',2],['Underground Water Tank Crack Repair',3]],140],
['ทีมงานระบบ',[['MEP Engineer',3],['Foreman',3],['Pipefitter',3],['Electrician',13],['Fire System Installers',3],['AC Installation Team',1],['Storehouse',1]],27]];
const manpowerGroups23=[
['FirstCon Construction',[['Foreman',1],['Crack Repair Technician',4]],5],
['เทวาวณิชกิจ',[['Engineer',1],['Worker',3]],4],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer',3],['Safety Officer',0],['Architect',2],['Foreman',6],['Office Staff',1],['Concrete Worker',5],['Wall Plasterer Team',15],['Supervisor',3],['General Worker',40],['Laborer',24],['Surveyor',4],['Scaffolding Team',4],['Driver',3],['Storekeeper',1],['Interior Tile Installation',7],['Exterior Tile Installation',4],['Painter',5],['Underground Water Tank Structure Team',0],['Elevator Work',4],['Ceiling Work',7],['Texture Paint Work',0],['Vinyl Flooring Work',0],['Aluminium Work',5],['Door Installation',2],['Underground Water Tank Crack Repair',3]],148],
['ทีมงานระบบ',[['MEP Engineer',3],['Foreman',3],['Pipefitter',6],['Electrician',10],['Fire System Installers',3],['AC Installation Team',1],['Storehouse',1]],27]
];
const manpowerGroups24=[
['FirstCon Construction',[['Foreman',1],['Crack Repair Technician',4]],5],
['เทวาวณิชกิจ',[['Engineer',1],['Worker',3]],4],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer',3],['Safety Officer',0],['Architect',2],['Foreman',6],['Office Staff',1],['Concrete Worker',0],['Wall Plasterer Team',16],['Supervisor',3],['General Worker',41],['Laborer',22],['Surveyor',4],['Scaffolding Team',4],['Driver',3],['Storekeeper',1],['Interior Tile Installation',2],['Exterior Tile Installation',2],['Painter',5],['Underground Water Tank Structure Team',0],['Elevator Work',4],['Ceiling Work',7],['Texture Paint Work',0],['Vinyl Flooring Work',0],['Aluminium Work',5],['Door Installation',2],['Underground Water Tank Crack Repair',3]],136],
['ทีมงานระบบ',[['MEP Engineer','—'],['Foreman','—'],['Pipefitter','—'],['Electrician','—'],['Fire System Installers','—'],['AC Installation Team','—'],['Storehouse','—']],20]
];
const manpowerGroups25=[
['FirstCon Construction',[['Foreman',1],['Crack Repair Technician',4]],5],
['เทวาวณิชกิจ',[['Engineer',1],['Worker',2],['Machinery Operator',1]],4],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer',3],['Safety Officer',1],['Architect',2],['Foreman',6],['Office Staff',1],['Concrete Worker',3],['Wall Plasterer Team',14],['Supervisor',3],['General Worker',41],['Laborer',23],['Surveyor',4],['Scaffolding Team',4],['Driver',3],['Storekeeper',1],['Interior Tile Installation',7],['Exterior Tile Installation',2],['Painter',5],['Underground Water Tank Structure Team',0],['Elevator Work',4],['Ceiling Work',7],['Texture Paint Work',0],['Vinyl Flooring Work',0],['Aluminium Work',5],['Door Installation',2],['Underground Water Tank Crack Repair',4]],145],
['ทีมงานระบบ',[['MEP Engineer',3],['Foreman',2],['Pipefitter',6],['Electrician',4],['Fire System Installers',3],['AC Installation Team',0],['Storehouse',1]],19]
];
const manpowerGroups26=[
['เทวาวณิชกิจ',[['Engineer',1],['Worker',2],['Driver',2]],5],
['FirstCon Construction · งานซ่อมรอยร้าวดาดฟ้า',[['Foreman',1],['Crack Repair Worker',4]],5],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer',3],['Safety Officer',1],['Architect',2],['Foreman',6],['Office Staff',1],['Concrete Worker',6],['Wall Plaster Team',20],['Supervisor',3],['General Worker',41],['Laborer',21],['Surveyor',4],['Scaffolding Team',4],['Driver',3],['Storekeeper',1],['Interior Tile Installation',7],['Exterior Tile Installation',2],['Painting Team',5],['Lift Team',0],['Ceiling Installation',0],['Texture Painting',0],['Vinyl Tile Installation',0],['Aluminum Installation',0],['Door Installation Team',2],['Underground Water Tank Crack Repair',2]],134],
['ทีมงานระบบ',[['MEP Engineer',3],['Foreman',2],['Pipefitter',6],['Electrician',7],['Fire System Installers',2],['AC Installation Team',2],['Storehouse',1]],23]
];
const manpowerGroups27=[
['เทวาวณิชกิจ',[['Engineer',0],['Worker',0],['Driver',0]],0],
['FirstCon Construction · งานซ่อมรอยร้าวดาดฟ้า',[['Foreman',0],['Crack Repair Worker',0]],0],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer',0],['Safety Officer',0],['Architect',0],['Foreman',0],['Office Staff',0],['Concrete Worker',0],['Wall Plaster Team',15],['Supervisor',0],['General Worker',0],['Laborer',0],['Surveyor',0],['Scaffolding Team',0],['Driver',0],['Storekeeper',0],['Interior Tile Installation',0],['Exterior Tile Installation',0],['Painting Team',0],['Lift Team',0],['Ceiling Installation',0],['Texture Painting',0],['Vinyl Tile Installation',0],['Aluminum Installation',0],['Door Installation Team',0],['Underground Water Tank Crack Repair',0]],15],
['ทีมงานระบบ',[['MEP Engineer',2],['Foreman',1],['Pipefitter',6],['Electrician',0],['Fire System Installers',0],['AC Installation Team',2],['Storehouse',0]],11]
];
const manpowerGroups28=[
['เทวาวณิชกิจ',[['Engineer',1],['Foreman',1],['Surveyor',3],['Worker',4]],9],
['FirstCon · งานซ่อมรอยร้าวดาดฟ้า',[['Foreman',1],['Crack Repair Worker',4]],5],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer',3],['Safety Officer',1],['Architect',2],['Foreman',6],['Office Staff',1],['Concrete Worker',5],['Wall Plaster Team',19],['Supervisor',2],['General Worker',41],['Laborer',23],['Surveyor',4],['Scaffolding Team',4],['Driver',3],['Storekeeper',1],['Interior Tile Installation',7],['Exterior Tile Installation',2],['Painting Team',5],['Lift Team',0],['Ceiling Installation',0],['Texture Painting',0],['Vinyl Tile Installation',0],['Aluminum Installation',0],['Door Installation Team',0],['Underground Water Tank Crack Repair',2]],131],
['ทีมงานระบบ',[['MEP Engineer',3],['Foreman',2],['Pipefitter',6],['Electrician',7],['Fire System Installers',2],['AC Installation Team',1],['Storehouse',1]],22]
];
const manpowerGroups29=[
['เทวาวณิชกิจ',[['Engineer',1],['Foreman',1],['Worker',6]],8],
['FirstCon · งานซ่อมรอยร้าวดาดฟ้า',[['Foreman',1],['Crack Repair Worker',4]],5],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer',3],['Safety Officer',1],['Architect',2],['Foreman',6],['Office Staff',1],['Concrete Worker',7],['Wall Plaster Team',19],['Supervisor',2],['General Worker',41],['Laborer',21],['Surveyor',4],['Scaffolding Team',4],['Driver',3],['Storekeeper',1],['Interior Tile Installation',7],['Exterior Tile Installation',2],['Painting Team',5],['Lift Team',0],['Ceiling Installation',5],['Texture Painting',0],['Vinyl Tile Installation',0],['Aluminum Installation',0],['Door Installation Team',0],['Underground Water Tank Crack Repair',2]],136],
['ทีมงานระบบ',[['MEP Engineer',3],['Foreman',2],['Pipefitter',6],['Electrician',9],['Fire System Installers',2],['AC Installation Team',0],['Storehouse',1]],23]
];
const manpowerGroups30=[
['เทวาวณิชกิจ',[['Engineer',1],['Foreman',1],['Worker',6]],8],
['FirstCon Construction · งานซ่อมรอยร้าวดาดฟ้า',[['Foreman',1],['Crack Repair Worker',4]],5],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer',3],['Safety Officer',1],['Architect',2],['Foreman',6],['Office Staff',1],['Concrete Worker',7],['Wall Plaster Team',19],['Supervisor',3],['General Worker',12],['Laborer',10],['Surveyor',4],['Scaffolding Team',2],['Driver',3],['Storekeeper',1],['Interior Tile Installation',7],['Exterior Tile Installation',2],['Painting Team',5],['Lift Team',0],['Ceiling Installation',5],['Texture Painting',0],['Vinyl Tile Installation',0],['Aluminum Installation',6],['Door Installation Team',2],['Underground Water Tank Crack Repair',2]],103],
['ทีมงานระบบ',[['MEP Engineer',3],['Foreman',3],['Pipefitter',6],['Electrician',12],['Fire System Installers',4],['AC Installation Team',0],['Storehouse',1]],29]
];
const manpowerGroups01Oct=[
['เทวาวณิชกิจ',[['Engineer',1],['Structural Foreman',1],['Worker',6]],8],
['FirstCon · งานซ่อมรอยร้าวดาดฟ้า',[['Foreman',1],['Crack Repair Worker',4]],5],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer',3],['Safety Officer',2],['Architect',2],['Foreman',6],['Office Staff',1],['Concrete Worker',7],['Wall Plaster Team',19],['Supervisor',3],['General Worker',31],['Laborer',21],['Surveyor',4],['Scaffolding Team',2],['Driver',3],['Storekeeper',1],['Interior Tile Installation',7],['Exterior Tile Installation',2],['Painting Team',5],['Lift Team',0],['Ceiling Installation',7],['Texture Painting',0],['Vinyl Tile Installation',0],['Aluminum Installation',6],['Door Installation Team',2],['Underground Water Tank Crack Repair',2]],136],
['ทีมงานระบบ',[['MEP Engineer',3],['Foreman',3],['Pipefitter',6],['Electrician',5],['Fire System Installers',4],['AC Installation Team',0],['Storehouse',1]],22]
];
const manpowerGroups02Oct=[
['เทวาวณิชกิจ',[['Engineer',1],['Structural Foreman',1],['Worker',10],['Machine Operator',1]],13],
['FirstCon Construction · งานซ่อมรอยร้าวดาดฟ้า',[['Foreman',1],['Crack Repair Worker',4]],5],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer',3],['Safety Officer',2],['Architect',2],['Foreman',6],['Office Staff',1],['Concrete Worker',7],['Wall Plaster Team',19],['Supervisor',3],['General Worker',30],['Laborer',21],['Surveyor',4],['Scaffolding Team',2],['Driver',3],['Storekeeper',1],['Interior Tile Installation',7],['Exterior Tile Installation',2],['Painting Team',5],['Lift Team',0],['Ceiling Installation',7],['Texture Painting',0],['SPC Flooring Installation',10],['Aluminum Installation',5],['Door Installation Team',2],['Underground Water Tank Crack Repair',2]],144],
['ทีมงานระบบ',[['MEP Engineer',3],['Foreman',2],['Pipefitter',6],['Electrician',5],['Fire System Installers',2],['AC Installation Team',6],['Storehouse',1]],25]
];
const manpowerGroups03Oct=[
['เทวาวณิชกิจ',[['Engineer',1],['Structural Foreman',1],['Worker',10]],12],
['FirstCon · งานซ่อมรอยร้าวดาดฟ้า',[['Foreman',1],['Crack Repair Worker',4]],5],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer',3],['Safety Officer',1],['Architect',2],['Foreman',6],['Office Staff',1],['Concrete Worker',7],['Wall Plaster Team',19],['Supervisor',3],['General Worker',30],['Laborer',21],['Surveyor',4],['Scaffolding Team',2],['Driver',3],['Storekeeper',1],['Interior Tile Installation',7],['Exterior Tile Installation',2],['Painting Team',5],['Lift Team',0],['Ceiling Installation',7],['Texture Painting',0],['SPC Flooring Installation',6],['Aluminum Installation',5],['Door Installation Team',2],['Underground Water Tank Crack Repair',2],['Underground Water Tank Crack Scanning',5]],144],
['ทีมงานระบบ',[['MEP Engineer',3],['Foreman',1],['Pipefitter',6],['Electrician',4],['Fire System Installers',2],['AC Installation Team',0],['Storehouse',1]],17]
];
const manpowerGroups04Oct=[
['เทวาวณิชกิจ',[['Engineer',1],['Worker',10]],11],
['FirstCon · งานซ่อมรอยร้าวดาดฟ้า',[['Foreman',1],['Crack Repair Worker',4]],5],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer',2],['Safety Officer',0],['Architect',0],['Foreman',6],['Office Staff',0],['Concrete Worker',0],['Wall Plaster Team',15],['Supervisor',3],['General Worker',28],['Laborer',17],['Surveyor',4],['Scaffolding Team',2],['Driver',3],['Storekeeper',1],['Interior Tile Installation',2],['Exterior Tile Installation',2],['Painting Team',5],['Lift Team',0],['Ceiling Installation',0],['Texture Painting',0],['SPC Flooring Installation',0],['Aluminum Installation',0],['Door Installation Team',0],['Underground Water Tank Crack Repair',0],['Underground Water Tank Crack Scanning',0]],90],
['ทีมงานระบบ',[['MEP Engineer',2],['Foreman',0],['Pipefitter',0],['Electrician',0],['Fire System Installers',2],['AC Installation Team',0],['Storehouse',0]],4]
];
const manpowerGroups06Oct=[
['เทวาวณิชกิจ',[['Engineer',1],['Structural Foreman',1],['Worker',8]],10],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer',3],['Safety Officer',1],['Architect',2],['Foreman',6],['Office Staff',1],['Concrete Worker',7],['Wall Plaster Team',15],['Supervisor',1],['General Worker',29],['Laborer',20],['Surveyor',4],['Scaffolding Team',2],['Driver',3],['Storekeeper',1],['Interior Tile Installation',7],['Exterior Tile Installation',2],['Painting Team',4],['Lift Team',0],['Ceiling Installation',6],['Texture Painting',0],['SPC Flooring Installation',0],['Aluminum Installation',5],['Door Installation Team',1],['Underground Water Tank Crack Repair',0],['Underground Water Tank Crack Scanning',0]],120],
['ทีมงานระบบ',[['MEP Engineer',3],['Foreman',3],['Pipefitter',6],['Electrician',5],['Fire System Installers',2],['AC Installation Team',0],['Storehouse',1]],20]
];
const manpowerGroups08Oct=[
['เทวาวณิชกิจ',[['Engineer',1],['Structural Foreman',1],['Worker',10],['Backhoe Operator',1]],13],
['FirstCon Construction',[['Foreman',1],['Crack Repair Worker',4]],5],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer',3],['Safety Officer',1],['Architect',2],['Foreman',5],['Office Staff',1],['Concrete Worker',7],['Wall Plaster Team',15],['Supervisor',1],['General Worker',27],['Laborer',18],['Surveyor',4],['Scaffolding Team',4],['Driver',3],['Storekeeper',1],['Interior Tile Installation',7],['Exterior Tile Installation',2],['Painting Team',5],['Lift Team',0],['Ceiling Installation',0],['Texture Painting',6],['SPC Flooring Installation',5],['Aluminum Installation',6],['Door Installation Team',2],['Underground Water Tank Crack Repair',2]],127],
['ทีมงานระบบ · ข้อมูล 07/10/69',[['MEP Engineer',3],['Foreman',2],['Pipefitter',5],['Electrician',3],['Fire System Installers',2],['AC Installation Team',1],['Storehouse',1]],17]
];
const manpowerGroups09Oct=[
['เทวาวณิชกิจ',[['Engineer',1],['Structural Foreman',1],['Worker',10],['Machine Operator',1]],13],
['FirstCon Construction',[['Foreman',1],['Crack Repair Worker',4]],5],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer',3],['Safety Officer',1],['Architect',2],['Foreman',5],['Office Staff',1],['Concrete Worker',7],['Wall Plaster Team',15],['Supervisor',3],['General Worker',30],['Laborer',20],['Surveyor',4],['Scaffolding Team',4],['Driver',3],['Storekeeper',1],['Interior Tile Installation',7],['Exterior Tile Installation',2],['Painting Team',5],['Lift Team',0],['Ceiling Installation',6],['Texture Painting',6],['SPC Flooring Installation',5],['Aluminum Installation',6],['Door Installation Team',2],['Underground Water Tank Crack Repair',0]],138],
['ทีมงานระบบ',[['MEP Engineer',3],['Foreman',2],['Pipefitter',3],['Electrician',6],['Fire System Installers',2],['AC Installation Team',1],['Storehouse',1]],18]
];
const manpowerGroups10Oct=[
['เทวาวณิชกิจ',[['Engineer',1],['Structural Foreman',1],['Worker',10]],12],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer',3],['Architect',1],['Safety Officer',2],['Foreman',5],['Office Staff',1],['Concrete Worker',7],['Wall Plaster Team',13],['Supervisor',3],['General Worker',30],['Laborer',20],['Surveyor',4],['Scaffolding Team',4],['Driver',3],['Storekeeper',1],['Interior Tile Installation',7],['Exterior Tile Installation',2],['Painting Team',5],['Lift Team',0],['Ceiling Installation',6],['Texture Painting',6],['SPC Flooring Installation',0],['Aluminum Installation',6],['Door Installation Team',2],['Underground Water Tank Crack Repair',0],['Soft Flooring',3]],134],
['ทีมงานระบบ',[['MEP Engineer',3],['Foreman',2],['Pipefitter',3],['Electrician',2],['Fire System Installers',2],['AC Installation Team',0],['Storehouse',1]],13]
];
const manpowerGroups11Oct=[
['เทวาวณิชกิจ',[['Engineer',1],['Structural Foreman',1],['Worker',10]],12],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer',2],['Architect',1],['Safety Officer',2],['Foreman',5],['Office Staff',1],['Concrete Worker',7],['Wall Plaster Team',7],['Supervisor',3],['General Worker',28],['Laborer',18],['Surveyor',4],['Scaffolding Team',4],['Driver',3],['Storekeeper',1],['Interior Tile Installation',7],['Exterior Tile Installation',2],['Painting Team',5],['Lift Team',0],['Ceiling Installation',0],['Texture Painting',6],['SPC Flooring Installation',0],['Aluminum Installation',6],['Door Installation Team',0],['Underground Water Tank Crack Repair',0],['Soft Flooring',0]],112],
['ทีมงานระบบ',[['MEP Engineer',3],['Foreman',2],['Pipefitter',3],['Electrician',2],['Fire System Installers',2],['AC Installation Team',0],['Storehouse',1]],13]
];
const manpowerGroups12Oct=[
['เทวาวณิชกิจ',[['Engineer',1],['Structural Foreman',1],['Worker',10]],12],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer',3],['Architect',1],['Safety Officer',2],['Foreman',5],['Office Staff',1],['Concrete Worker',7],['Wall Plaster Team',0],['Supervisor',3],['General Worker',30],['Laborer',18],['Surveyor',4],['Scaffolding Team',4],['Driver',3],['Storekeeper',1],['Interior Tile Installation',7],['Exterior Tile Installation',2],['Painting Team',5],['Lift Team',0],['Ceiling Installation',9],['Texture Painting',0],['SPC Flooring Installation',0],['Aluminum Installation',6],['Door Installation Team',2],['Underground Water Tank Crack Repair',0],['Soft Flooring',3]],116]
];
const manpowerGroups13Oct=[
['เทวาวณิชกิจ',[['Engineer',1],['Structural Foreman',1],['Worker',10],['Machine Operator',2]],14],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer',2],['Architect',0],['Safety Officer',0],['Foreman',4],['Office Staff',0],['Concrete Worker',7],['Wall Plaster Team',0],['Supervisor',3],['General Worker',27],['Laborer',15],['Surveyor',4],['Scaffolding Team',4],['Driver',3],['Storekeeper',0],['Interior Tile Installation',2],['Exterior Tile Installation',2],['Painting Team',5],['Lift Team',0],['Ceiling Installation',9],['Texture Painting',0],['SPC Flooring Installation',0],['Aluminum Installation',0],['Door Installation Team',1],['Underground Water Tank Crack Repair',0],['Soft Flooring',0]],88],
['ทีมงานระบบ',[['MEP Engineer',2],['Foreman',2],['Pipefitter',3],['Electrician',7],['Fire System Installers',2],['AC Installation Team',2],['Storehouse',1]],19]
];
const manpowerGroups14Oct=[
['เทวาวณิชกิจ',[['Engineer',1],['Worker',10],['Machine Operator',2]],13],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer',3],['Architect',1],['Safety Officer',2],['Foreman',5],['Office Staff',1],['Concrete Worker',7],['Wall Plaster Team',13],['Supervisor',3],['General Worker',25],['Laborer',22],['Surveyor',4],['Scaffolding Team',4],['Driver',3],['Storekeeper',1],['Interior Tile Installation',2],['Exterior Tile Installation',2],['Painting Team',5],['Lift Team',0],['Ceiling Installation',6],['Texture Painting',0],['SPC Flooring Installation',0],['Aluminum Installation',6],['Door Installation Team',2],['Underground Water Tank Crack Repair',0],['Soft Flooring',3]],120],
['ทีมงานระบบ',[['MEP Engineer',3],['Foreman',1],['Pipefitter',6],['Electrician',5],['Fire System Installers',2],['AC Installation Team',0],['Storehouse',1]],18]
];
const manpowerGroups15Oct=[
['เทวาวณิชกิจ',[['Engineer',1],['Worker',10],['Machine Operator',2]],13],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer',3],['Safety Officer',1],['Architect',2],['Foreman',5],['Office Staff',1],['Concrete Worker',7],['Wall Plaster Team',11],['Supervisor',3],['General Worker',25],['Laborer',22],['Surveyor',4],['Scaffolding Team',4],['Driver',3],['Storekeeper',1],['Interior Tile Installation',2],['Exterior Tile Installation',2],['Painting Team',5],['Ceiling Installation',0],['Texture Painting',6],['SPC Flooring Installation',0],['Aluminum Installation',0],['Door Installation Team',2],['Soft Flooring',3]],112],
['ทีมงานระบบ',[['MEP Engineer',3],['Foreman',1],['Pipefitter',6],['Electrician',5],['Fire System Installers',2],['AC Installation Team',4],['Storehouse',1]],22]
];
const manpowerGroups16Oct=[
['เทวาวณิชกิจ',[['Engineer',1],['Structural Foreman',1],['Worker',6],['Machine Operator',1]],9],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer',3],['Safety Officer',1],['Architect',2],['Foreman',5],['Office Staff',1],['Concrete Worker',7],['Wall Plaster Team',10],['Supervisor',3],['General Worker',32],['Laborer',16],['Surveyor',4],['Scaffolding Team',4],['Driver',3],['Storekeeper',1],['Interior Tile Installation',2],['Exterior Tile Installation',2],['Painting Team',4],['Ceiling Installation',0],['Texture Painting',6],['SPC Flooring Installation',0],['Aluminum Installation',6],['Door Installation Team',2],['Soft Flooring',3]],117],
['ทีมงานระบบ',[['MEP Engineer',3],['Foreman',2],['Pipefitter',6],['Electrician',7],['Fire System Installers',2],['AC Installation Team',0],['Storehouse',1]],21]
];
const manpowerGroups17Oct=[
['เทวาวณิชกิจ',[['Engineer',1],['Foreman',1],['Worker',10]],12],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer',3],['Safety Officer',1],['Architect',2],['Foreman',5],['Office Staff',1],['Concrete Worker',7],['Wall Plaster Team',10],['Supervisor',3],['General Worker',32],['Laborer',16],['Surveyor',4],['Scaffolding Team',4],['Driver',3],['Storekeeper',1],['Interior Tile Installation',2],['Exterior Tile Installation',2],['Painting Team',5],['Ceiling Installation',0],['Texture Painting',6],['SPC Flooring Installation',0],['Aluminum Installation',6],['Door Installation Team',2],['Marble Installation',3]],118],
['ทีมงานระบบ',[['MEP Engineer',3],['Foreman',2],['Pipefitter',3],['Electrician',7],['Fire System Installers',2],['AC Installation Team',0],['Storehouse',1]],18]
];
const manpowerGroups18Oct=[
['เทวาวณิชกิจ',[['Engineer',1],['Worker',11]],12],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer',0],['Safety Officer',0],['Architect',0],['Foreman',4],['Office Staff',0],['Concrete Worker',7],['Wall Plaster Team',11],['Supervisor',3],['General Worker',23],['Laborer',13],['Surveyor',4],['Scaffolding Team',4],['Driver',2],['Storekeeper',1],['Interior Tile Installation',2],['Exterior Tile Installation',2],['Painting Team',5],['Ceiling Installation',0],['Texture Painting',6],['SPC Flooring Installation',0],['Aluminum Installation',4],['Door Installation Team',0],['Marble Installation',0]],91],
['ทีมงานระบบ',[['MEP Engineer',2],['Foreman',2],['Pipefitter',0],['Electrician',4],['Fire System Installers',9],['AC Installation Team',0],['Storehouse',2]],19]
];
const manpowerGroups19Oct=[
['เทวาวณิชกิจ',[['Engineer',1],['Worker',10]],11],
['ยายบัวการช่าง · งานสถาปัตย์',[['Structural Engineer',3],['Safety Officer',1],['Architect',2],['Foreman',4],['Office Staff',1],['Concrete Worker',7],['Wall Plaster Team',11],['Supervisor',3],['General Worker',25],['Laborer',15],['Surveyor',4],['Scaffolding Team',4],['Driver',2],['Storekeeper',1],['Interior Tile Installation',2],['Exterior Tile Installation',2],['Painting Team',5],['Ceiling Installation',6],['Texture Painting',0],['SPC Flooring Installation',3],['Aluminum Installation',5],['Door Installation Team',1],['Marble Installation',3]],110],
['ทีมงานระบบ',[['MEP Engineer',2],['Foreman',2],['Pipefitter',3],['Electrician',6],['Fire System Installers',2],['AC Installation Team',0],['Storehouse',1]],16]
];
const manpowerGroups22Oct=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['คนงาน',11]],13],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',2],['จป.',1],['สถาปนิก',1],['โฟร์แมน',3],['สำนักงาน',1],['ช่างปูน',6],['ช่างฉาบ',11],['หัวหน้างาน',3],['ช่างทั่วไป',30],['กรรมกร',20],['เซอร์เวย์',4],['ชุดตั้งนั่งร้าน',4],['คนขับรถ',2],['เจ้าหน้าที่สโตร์',1],['งานกระเบื้องภายใน',2],['งานกระเบื้องภายนอก',2],['ช่างสี',5],['งานฝ้าเพดาน',5],['งานสีเทคเจอร์',0],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',5],['งานติดตั้งประตู',1]],109],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',2],['โฟร์แมน',3],['ช่างประปา',3],['ช่างไฟ',19],['ช่างดับเพลิง',0],['ช่างแอร์',0],['สโตร์',1]],28]
];
const manpowerGroups23Oct=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['คนงาน',10]],12],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',2],['จป.',1],['สถาปนิก',1],['โฟร์แมน',3],['สำนักงาน',1],['ช่างปูน',6],['ช่างฉาบ',11],['หัวหน้างาน',3],['ช่างทั่วไป',28],['กรรมกร',21],['เซอร์เวย์',4],['ชุดตั้งนั่งร้าน',4],['คนขับรถ',2],['เจ้าหน้าที่สโตร์',1],['งานกระเบื้องภายใน',2],['งานกระเบื้องภายนอก',2],['ช่างสี',5],['งานฝ้าเพดาน',7],['งานสีเทคเจอร์',5],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',5],['งานติดตั้งประตู',1],['ทรายล้าง',5]],120],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',3],['โฟร์แมน',3],['ช่างประปา',4],['ช่างไฟ',12],['ช่างดับเพลิง',0],['ช่างแอร์',2],['สโตร์',1]],25]
];
const manpowerGroups24Oct=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['คนงาน',10]],12],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',3],['จป.',1],['สถาปนิก',1],['โฟร์แมน',3],['สำนักงาน',1],['ช่างปูน',6],['ช่างฉาบ',11],['หัวหน้างาน',3],['ช่างทั่วไป',25],['กรรมกร',21],['เซอร์เวย์',2],['ชุดตั้งนั่งร้าน',4],['คนขับรถ',2],['เจ้าหน้าที่สโตร์',1],['งานกระเบื้องภายใน',2],['งานกระเบื้องภายนอก',2],['ช่างสี',4],['งานฝ้าเพดาน',8],['งานสีเทคเจอร์',0],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',5],['งานติดตั้งประตู',1],['ทรายล้าง',5]],111],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',3],['โฟร์แมน',3],['ช่างประปา',4],['ช่างไฟ',12],['ช่างดับเพลิง',2],['ช่างแอร์',1],['สโตร์',1]],26]
];
const manpowerGroups25Oct=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['คนงาน',6]],8],
['งานครัว EXB',[['ช่างติดตั้งเครื่องครัว',4]],4],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',2],['จป.',1],['สถาปนิก',0],['โฟร์แมน',3],['สำนักงาน',0],['ช่างปูน',0],['ช่างฉาบ',11],['หัวหน้างาน',3],['ช่างทั่วไป',0],['กรรมกร',0],['เซอร์เวย์',0],['ชุดตั้งนั่งร้าน',0],['คนขับรถ',2],['เจ้าหน้าที่สโตร์',1],['งานกระเบื้องภายใน',0],['งานกระเบื้องภายนอก',0],['ช่างสี',0],['งานฝ้าเพดาน',10],['งานสีเทคเจอร์',6],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',0],['งานติดตั้งประตู',0],['ทรายล้าง',7]],46],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',3],['โฟร์แมน',2],['ช่างประปา',4],['ช่างไฟ',7],['ช่างดับเพลิง',6],['ช่างแอร์',0],['สโตร์',0]],22]
];
const manpowerGroups26Oct=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['คนงาน',7]],9],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',0],['จป.',0],['สถาปนิก',0],['โฟร์แมน',0],['สำนักงาน',0],['ช่างปูน',0],['ช่างฉาบ',0],['หัวหน้างาน',0],['ช่างทั่วไป',0],['กรรมกร',0],['เซอร์เวย์',0],['ชุดตั้งนั่งร้าน',0],['คนขับรถ',0],['เจ้าหน้าที่สโตร์',0],['งานกระเบื้องภายใน',0],['งานกระเบื้องภายนอก',0],['ช่างสี',0],['งานฝ้าเพดาน',0],['งานสีเทคเจอร์',0],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',0],['งานติดตั้งประตู',0],['ทรายล้าง',0]],0],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',2],['โฟร์แมน',1],['ช่างประปา',4],['ช่างไฟ',5],['ช่างดับเพลิง',2],['ช่างแอร์',0],['สโตร์',1]],15]
];
const manpowerGroups27Oct=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['ผู้รับเหมางานทดสอบประตู',3]],5],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',3],['จป.',1],['สถาปนิก',2],['โฟร์แมน',3],['สำนักงาน',1],['ช่างปูน',2],['ช่างฉาบ',11],['หัวหน้างาน',3],['ช่างทั่วไป',10],['กรรมกร',4],['เซอร์เวย์',0],['ชุดตั้งนั่งร้าน',0],['คนขับรถ',2],['เจ้าหน้าที่สโตร์',0],['งานกระเบื้องภายใน',2],['งานกระเบื้องภายนอก',2],['ช่างสี',5],['งานฝ้าเพดาน',8],['งานสีเทคเจอร์',0],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',5],['งานติดตั้งประตู',1],['ทรายล้าง',0]],65],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',1],['โฟร์แมน',1],['ช่างประปา',4],['ช่างไฟ',4],['ช่างดับเพลิง',0],['ช่างแอร์',0],['สโตร์',1]],11]
];
const manpowerGroups28Oct=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['คนงาน',8]],10],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',3],['จป.',1],['สถาปนิก',2],['โฟร์แมน',3],['สำนักงาน',1],['ช่างปูน',2],['ช่างฉาบ',0],['หัวหน้างาน',3],['ช่างทั่วไป',8],['กรรมกร',2],['เซอร์เวย์',0],['ชุดตั้งนั่งร้าน',0],['คนขับรถ',2],['เจ้าหน้าที่สโตร์',0],['งานกระเบื้องภายใน',2],['งานกระเบื้องภายนอก',2],['ช่างสี',5],['งานฝ้าเพดาน',6],['งานสีเทคเจอร์',0],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',0],['งานติดตั้งประตู',0],['ทรายล้าง',0]],42],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',2],['โฟร์แมน',3],['ช่างประปา',4],['ช่างไฟ',9],['ช่างดับเพลิง',0],['ช่างแอร์',0],['สโตร์',1]],19]
];
const manpowerGroups29Oct=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['คนงาน',8]],10],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',3],['จป.',1],['สถาปนิก',2],['โฟร์แมน',3],['สำนักงาน',1],['ช่างปูน',2],['ช่างฉาบ',11],['หัวหน้างาน',3],['ช่างทั่วไป',22],['กรรมกร',20],['เซอร์เวย์',2],['ชุดตั้งนั่งร้าน',4],['คนขับรถ',2],['เจ้าหน้าที่สโตร์',1],['งานกระเบื้องภายใน',2],['งานกระเบื้องภายนอก',2],['ช่างสี',5],['งานฝ้าเพดาน',6],['งานสีเทคเจอร์',0],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',0],['งานติดตั้งประตู',1]],93],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',1],['โฟร์แมน',2],['ช่างประปา',4],['ช่างไฟ',6],['ช่างดับเพลิง',0],['ช่างแอร์',0],['สโตร์',1]],14]
];
const manpowerGroups30Oct=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['คนงาน',10]],12],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',3],['จป.',1],['สถาปนิก',2],['โฟร์แมน',3],['สำนักงาน',1],['ช่างปูน',2],['ช่างฉาบ',10],['หัวหน้างาน',3],['ช่างทั่วไป',24],['กรรมกร',20],['เซอร์เวย์',2],['ชุดตั้งนั่งร้าน',4],['คนขับรถ',2],['เจ้าหน้าที่สโตร์',1],['งานกระเบื้องภายใน',2],['งานกระเบื้องภายนอก',2],['ช่างสี',5],['งานฝ้าเพดาน',6],['งานสีเทคเจอร์',0],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',0],['งานติดตั้งประตู',1]],94],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',0],['โฟร์แมน',1],['ช่างประปา',4],['ช่างไฟ',3],['ช่างดับเพลิง',0],['ช่างแอร์',0],['สโตร์',1]],9]
];
const manpowerGroups31Oct=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['คนงาน',10]],12],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',3],['จป.',1],['สถาปนิก',2],['โฟร์แมน',3],['สำนักงาน',1],['ช่างปูน',2],['ช่างฉาบ',10],['หัวหน้างาน',3],['ช่างทั่วไป',9],['กรรมกร',8],['เซอร์เวย์',0],['ชุดตั้งนั่งร้าน',3],['คนขับรถ',3],['เจ้าหน้าที่สโตร์',1],['งานกระเบื้องภายใน',2],['งานกระเบื้องภายนอก',2],['ช่างสี',5],['งานฝ้าเพดาน',6],['งานสีเทคเจอร์',5],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',5],['งานติดตั้งประตู',1]],75],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',1],['โฟร์แมน',2],['ช่างประปา',6],['ช่างไฟ',6],['ช่างดับเพลิง',4],['ช่างแอร์',2],['สโตร์',0]],21]
];
const manpowerGroups01Nov=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['คนงาน',8],['เครื่องจักร (คน)',2]],12],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',2],['จป.',0],['สถาปนิก',0],['โฟร์แมน',3],['สำนักงาน',0],['ช่างปูน',2],['ช่างฉาบ',0],['หัวหน้างาน',2],['ช่างทั่วไป',13],['กรรมกร',14],['เซอร์เวย์',4],['ชุดตั้งนั่งร้าน',3],['คนขับรถ',3],['เจ้าหน้าที่สโตร์',1],['งานกระเบื้องภายใน',2],['งานกระเบื้องภายนอก',2],['ช่างสี',3],['งานฝ้าเพดาน',0],['งานสีเทคเจอร์',5],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',0],['งานติดตั้งประตู',0]],59],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',1],['โฟร์แมน',0],['ช่างประปา',2],['ช่างไฟ',0],['ช่างดับเพลิง',0],['ช่างแอร์',0],['สโตร์',0]],3]
];
const manpowerGroups02Nov=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['คนงาน',8],['เครื่องจักร (คน)',1]],11],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',3],['จป.',1],['สถาปนิก',2],['โฟร์แมน',3],['สำนักงาน',1],['ช่างปูน',2],['ช่างฉาบ',7],['หัวหน้างาน',3],['ช่างทั่วไป',20],['กรรมกร',21],['เซอร์เวย์',4],['ชุดตั้งนั่งร้าน',3],['คนขับรถ',3],['เจ้าหน้าที่สโตร์',1],['งานกระเบื้องภายใน',0],['งานกระเบื้องภายนอก',4],['ช่างสี',5],['งานฝ้าเพดาน',2],['งานสีเทคเจอร์',0],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',5],['งานติดตั้งประตู',1]],91],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',2],['โฟร์แมน',1],['ช่างประปา',5],['ช่างไฟ',0],['ช่างดับเพลิง',0],['ช่างแอร์',0],['สโตร์',0]],8]
];
const manpowerGroups03Nov=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['คนงาน',9],['เครื่องจักร (คน)',1]],12],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',3],['จป.',1],['สถาปนิก',2],['โฟร์แมน',3],['สำนักงาน',1],['ช่างปูน',3],['ช่างฉาบ',10],['หัวหน้างาน',3],['ช่างทั่วไป',22],['กรรมกร',21],['เซอร์เวย์',4],['ชุดตั้งนั่งร้าน',3],['คนขับรถ',3],['เจ้าหน้าที่สโตร์',0],['งานกระเบื้องภายใน',4],['งานกระเบื้องภายนอก',0],['ช่างสี',5],['งานฝ้าเพดาน',3],['งานสีเทคเจอร์',0],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',0],['งานติดตั้งประตู',0]],91],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',1],['โฟร์แมน',2],['ช่างประปา',4],['ช่างไฟ',1],['ช่างดับเพลิง',0],['ช่างแอร์',0],['สโตร์',1]],9]
];
const manpowerGroups04Nov=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['คนงาน',18],['คนขับเครื่องจักร',2]],22],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',3],['จป.',1],['สถาปนิก',2],['โฟร์แมน',3],['สำนักงาน',1],['ช่างปูน',5],['ช่างฉาบ',8],['หัวหน้างาน',3],['ช่างทั่วไป',22],['กรรมกร',21],['เซอร์เวย์',4],['ชุดตั้งนั่งร้าน',3],['คนขับรถ',3],['เจ้าหน้าที่สโตร์',1],['งานกระเบื้องภายใน',4],['งานกระเบื้องภายนอก',0],['ช่างสี',5],['งานฝ้าเพดาน',3],['งานสีเทคเจอร์',5],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',6],['งานติดตั้งประตู',0]],103],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',2],['โฟร์แมน',1],['ช่างประปา',4],['ช่างไฟ',0],['ช่างดับเพลิง',0],['ช่างแอร์',0],['สโตร์',1]],8]
];
const manpowerGroups05Nov=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['คนงาน',13]],15],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',3],['จป.',1],['สถาปนิก',2],['โฟร์แมน',3],['สำนักงาน',1],['ช่างปูน',5],['ช่างฉาบ',8],['หัวหน้างาน',3],['ช่างทั่วไป',22],['กรรมกร',21],['เซอร์เวย์',4],['ชุดตั้งนั่งร้าน',3],['คนขับรถ',3],['เจ้าหน้าที่สโตร์',1],['งานกระเบื้องภายใน',4],['งานกระเบื้องภายนอก',0],['ช่างสี',5],['งานฝ้าเพดาน',0],['งานสีเทคเจอร์',7],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',6],['งานติดตั้งประตู',0]],102],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',1],['โฟร์แมน',2],['ช่างประปา',4],['ช่างไฟ',4],['ช่างดับเพลิง',0],['ช่างแอร์',0],['สโตร์',1]],12]
];
const manpowerGroups06Nov=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['คนงาน',15]],17],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',3],['จป.',1],['สถาปนิก',2],['โฟร์แมน',3],['สำนักงาน',1],['ช่างปูน',5],['ช่างฉาบ',10],['หัวหน้างาน',3],['ช่างทั่วไป',28],['กรรมกร',22],['เซอร์เวย์',4],['ชุดตั้งนั่งร้าน',3],['คนขับรถ',3],['เจ้าหน้าที่สโตร์',1],['งานกระเบื้องภายใน',4],['งานกระเบื้องภายนอก',2],['ช่างสี',3],['งานฝ้าเพดาน',0],['งานสีเทคเจอร์',7],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',6],['งานติดตั้งประตู',0]],111],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',1],['โฟร์แมน',2],['ช่างประปา',4],['ช่างไฟ',3],['ช่างดับเพลิง',0],['ช่างแอร์',0],['สโตร์',1]],11]
];
const manpowerGroups07Nov=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['คนงาน',17]],19],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',3],['จป.',1],['สถาปนิก',2],['โฟร์แมน',4],['สำนักงาน',1],['ช่างปูน',4],['ช่างฉาบ',6],['หัวหน้างาน',3],['ช่างทั่วไป',27],['กรรมกร',23],['เซอร์เวย์',2],['ชุดตั้งนั่งร้าน',3],['คนขับรถ',3],['เจ้าหน้าที่สโตร์',1],['งานกระเบื้องภายใน',4],['งานกระเบื้องภายนอก',2],['ช่างสี',3],['งานฝ้าเพดาน',3],['งานสีเทคเจอร์',6],['งานปูกระเบื้องยาง SPC',4],['งานอลูมิเนียม',5],['งานติดตั้งประตู',0]],110],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',3],['โฟร์แมน',3],['ช่างประปา',4],['ช่างไฟ',4],['ช่างดับเพลิง',2],['ช่างแอร์',0],['สโตร์',0]],16]
];
const manpowerGroups08Nov=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['คนงาน',17]],19],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',2],['จป.',0],['สถาปนิก',0],['โฟร์แมน',4],['สำนักงาน',0],['ช่างปูน',4],['ช่างฉาบ',2],['หัวหน้างาน',3],['ช่างทั่วไป',23],['กรรมกร',19],['เซอร์เวย์',2],['ชุดตั้งนั่งร้าน',3],['คนขับรถ',3],['เจ้าหน้าที่สโตร์',1],['งานกระเบื้องภายใน',4],['งานกระเบื้องภายนอก',2],['ช่างสี',4],['งานฝ้าเพดาน',0],['งานสีเทคเจอร์',0],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',0],['งานติดตั้งประตู',0]],76],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',0],['โฟร์แมน',0],['ช่างประปา',4],['ช่างไฟ',0],['ช่างดับเพลิง',0],['ช่างแอร์',0],['สโตร์',0]],4]
];
const manpowerGroups09Nov=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['คนงาน',14]],16],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',3],['จป.',1],['สถาปนิก',2],['โฟร์แมน',4],['สำนักงาน',1],['ช่างปูน',4],['ช่างฉาบ',2],['หัวหน้างาน',2],['ช่างทั่วไป',27],['กรรมกร',23],['เซอร์เวย์',2],['ชุดตั้งนั่งร้าน',3],['คนขับรถ',3],['เจ้าหน้าที่สโตร์',1],['งานกระเบื้องภายใน',4],['งานกระเบื้องภายนอก',2],['ช่างสี',7],['งานฝ้าเพดาน',3],['งานสีเทคเจอร์',6],['งานปูกระเบื้องยาง SPC',4],['งานอลูมิเนียม',5],['งานติดตั้งประตู',1]],110],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',1],['โฟร์แมน',2],['ช่างประปา',4],['ช่างไฟ',0],['ช่างดับเพลิง',0],['ช่างแอร์',0],['สโตร์',1]],8]
];
const manpowerGroups10Nov=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['คนงาน',15]],17],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',3],['จป.',1],['สถาปนิก',2],['โฟร์แมน',4],['สำนักงาน',1],['ช่างปูน',4],['ช่างฉาบ',2],['หัวหน้างาน',2],['ช่างทั่วไป',27],['กรรมกร',23],['เซอร์เวย์',2],['ชุดตั้งนั่งร้าน',3],['คนขับรถ',3],['เจ้าหน้าที่สโตร์',1],['งานกระเบื้องภายใน',4],['งานกระเบื้องภายนอก',2],['ช่างสี',7],['งานฝ้าเพดาน',3],['งานสีเทคเจอร์',6],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',5],['งานติดตั้งประตู',1]],106],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',1],['โฟร์แมน',1],['ช่างประปา',4],['ช่างไฟ',0],['ช่างดับเพลิง',0],['ช่างแอร์',0],['สโตร์',1]],7]
];
const manpowerGroups11Nov=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['คนงาน',17]],19],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',3],['จป.',1],['สถาปนิก',2],['โฟร์แมน',3],['สำนักงาน',1],['ช่างปูน',4],['ช่างฉาบ',2],['หัวหน้างาน',2],['ช่างทั่วไป',30],['กรรมกร',22],['เซอร์เวย์',0],['ชุดตั้งนั่งร้าน',3],['คนขับรถ',3],['เจ้าหน้าที่สโตร์',1],['งานกระเบื้องภายใน',4],['งานกระเบื้องภายนอก',2],['ช่างสี',2],['งานฝ้าเพดาน',0],['งานสีเทคเจอร์',0],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',0],['งานติดตั้งประตู',1]],86],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',2],['โฟร์แมน',1],['ช่างประปา',3],['ช่างไฟ',3],['ช่างดับเพลิง',0],['ช่างแอร์',0],['สโตร์',1]],10]
];
const manpowerGroups12Nov=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['คนงาน',16],['คนขับเครื่องจักร',2]],20],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',3],['จป.',1],['สถาปนิก',2],['โฟร์แมน',3],['สำนักงาน',1],['ช่างปูน',4],['ช่างฉาบ',2],['หัวหน้างาน',2],['ช่างทั่วไป',30],['กรรมกร',22],['เซอร์เวย์',0],['ชุดตั้งนั่งร้าน',3],['คนขับรถ',3],['เจ้าหน้าที่สโตร์',1],['งานกระเบื้องภายใน',4],['งานกระเบื้องภายนอก',2],['ช่างสี',2],['งานฝ้าเพดาน',0],['งานสีเทคเจอร์',0],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',0],['งานติดตั้งประตู',1]],86],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',2],['โฟร์แมน',1],['ช่างประปา',3],['ช่างไฟ',3],['ช่างดับเพลิง',0],['ช่างแอร์',0],['สโตร์',1]],10]
];
const manpowerGroups13Nov=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['คนงาน',17],['คนขับเครื่องจักร',2]],21],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',2],['จป.',1],['สถาปนิก',2],['โฟร์แมน',3],['สำนักงาน',1],['ช่างปูน',2],['ช่างฉาบ',2],['หัวหน้างาน',2],['ช่างทั่วไป',30],['กรรมกร',22],['เซอร์เวย์',0],['ชุดตั้งนั่งร้าน',3],['คนขับรถ',3],['เจ้าหน้าที่สโตร์',1],['งานกระเบื้องภายใน',4],['งานกระเบื้องภายนอก',2],['ช่างสี',3],['งานฝ้าเพดาน',0],['งานสีเทคเจอร์',0],['งานปูกระเบื้องยาง SPC',4],['งานอลูมิเนียม',4],['งานติดตั้งประตู',1]],92],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',1],['โฟร์แมน',2],['ช่างประปา',0],['ช่างไฟ',2],['ช่างดับเพลิง',0],['ช่างแอร์',0],['สโตร์',0]],5]
];

const manpowerGroups14Nov=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['คนงาน',17],['เครื่องจักร',2]],21],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',2],['จป.',1],['สถาปนิก',2],['โฟร์แมน',3],['สำนักงาน',1],['ช่างปูน',2],['ช่างฉาบ',2],['หัวหน้างาน',2],['ช่างทั่วไป',30],['กรรมกร',22],['เซอร์เวย์',0],['ชุดตั้งนั่งร้าน',3],['คนขับรถ',3],['เจ้าหน้าที่สโตร์',1],['งานกระเบื้องภายใน',4],['งานกระเบื้องภายนอก',5],['ช่างสี',3],['งานฝ้าเพดาน',3],['งานสีเทคเจอร์',6],['งานปูกระเบื้องยาง SPC',4],['งานอลูมิเนียม',4],['งานติดตั้งประตู',1]],104],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',1],['โฟร์แมน',2],['ช่างประปา',11],['ช่างไฟ',4],['ช่างดับเพลิง',0],['ช่างแอร์',0],['สโตร์',1]],19]
];

const manpowerGroups15Nov=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['คนงาน',17]],19],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',1],['จป.',0],['สถาปนิก',1],['โฟร์แมน',3],['สำนักงาน',1],['ช่างปูน',2],['ช่างฉาบ',5],['หัวหน้างาน',2],['ช่างทั่วไป',27],['กรรมกร',20],['เซอร์เวย์',0],['ชุดตั้งนั่งร้าน',3],['คนขับรถ',3],['เจ้าหน้าที่สโตร์',1],['งานกระเบื้องภายใน',4],['งานกระเบื้องภายนอก',5],['ช่างสี',3],['งานฝ้าเพดาน',0],['งานสีเทคเจอร์',6],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',4],['งานติดตั้งประตู',1]],92],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',1],['โฟร์แมน',2],['ช่างประปา',11],['ช่างไฟ',4],['ช่างดับเพลิง',0],['ช่างแอร์',0],['สโตร์',1]],19]
];

const manpowerGroups16Nov=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['คนงาน',17],['เครื่องจักร (คน)',2]],21],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',1],['จป.',0],['สถาปนิก',1],['โฟร์แมน',3],['สำนักงาน',1],['ช่างปูน',2],['ช่างฉาบ',5],['หัวหน้างาน',2],['ช่างทั่วไป',27],['กรรมกร',20],['เซอร์เวย์',0],['ชุดตั้งนั่งร้าน',3],['คนขับรถ',3],['เจ้าหน้าที่สโตร์',1],['งานกระเบื้องภายใน',4],['งานกระเบื้องภายนอก',5],['ช่างสี',3],['งานฝ้าเพดาน',0],['งานสีเทคเจอร์',6],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',4],['งานติดตั้งประตู',1]],92],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',1],['โฟร์แมน',1],['ช่างประปา',3],['ช่างไฟ',2],['ช่างดับเพลิง',0],['ช่างแอร์',0],['สโตร์',1]],8]
];

const manpowerGroups17Nov=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',2],['เซอร์เวย์',3],['คนงาน',21],['เครื่องจักร (คน)',2]],29],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',1],['จป.',0],['สถาปนิก',1],['โฟร์แมน',3],['สำนักงาน',1],['ช่างปูน',0],['ช่างฉาบ',0],['หัวหน้างาน',2],['ช่างทั่วไป',30],['กรรมกร',25],['เซอร์เวย์',0],['ชุดตั้งนั่งร้าน',5],['คนขับรถ',3],['ผู้ช่วยสโตร์',1],['งานกระเบื้องภายใน',4],['งานกระเบื้องภายนอก',3],['ช่างสี',3],['งานฝ้าเพดาน',0],['งานสีเทคเจอร์',0],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',0],['งานติดตั้งประตู',1]],83],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',2],['โฟร์แมน',2],['ช่างประปา',0],['ช่างไฟ',5],['ช่างดับเพลิง',0],['ช่างแอร์',8],['สโตร์',1]],18]
];

const manpowerGroups18Nov=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',2],['เซอร์เวย์',3],['คนงาน',21],['เครื่องจักร (คน)',2]],29],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',1],['จป.',0],['สถาปนิก',1],['โฟร์แมน',3],['สำนักงาน',1],['ช่างปูน',2],['ช่างฉาบ',5],['หัวหน้างาน',2],['ช่างทั่วไป',27],['กรรมกร',20],['เซอร์เวย์',0],['ชุดตั้งนั่งร้าน',3],['คนขับรถ',3],['เจ้าหน้าที่สโตร์',1],['งานกระเบื้องภายใน',4],['งานกระเบื้องภายนอก',5],['ช่างสี',3],['งานฝ้าเพดาน',0],['งานสีเทคเจอร์',6],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',4],['งานติดตั้งประตู',1]],92],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',2],['โฟร์แมน',2],['ช่างประปา',2],['ช่างไฟ',3],['ช่างดับเพลิง',0],['ช่างแอร์',5],['สโตร์',1]],15]
];

const manpowerGroups19Nov=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',2],['เซอร์เวย์',3],['คนงาน',21],['เครื่องจักร (คน)',2]],29],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',1],['จป.',0],['สถาปนิก',1],['โฟร์แมน',3],['สำนักงาน',1],['ช่างปูน',2],['ช่างฉาบ',5],['หัวหน้างาน',2],['ช่างทั่วไป',25],['กรรมกร',20],['เซอร์เวย์',0],['ชุดตั้งนั่งร้าน',3],['คนขับรถ',3],['เจ้าหน้าที่สโตร์',1],['งานกระเบื้องภายใน',4],['งานกระเบื้องภายนอก',5],['ช่างสี',3],['งานฝ้าเพดาน',3],['งานสีเทคเจอร์',6],['งานปูกระเบื้องยาง SPC',4],['งานอลูมิเนียม',4],['งานติดตั้งประตู',1]],97],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',1],['โฟร์แมน',1],['ช่างประปา',2],['ช่างไฟ',1],['ช่างดับเพลิง',0],['ช่างแอร์',0],['สโตร์',1]],6]
];

const manpowerGroups20Nov=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',2],['เซอร์เวย์',3],['คนงาน',25],['เครื่องจักร (คน)',5]],36],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',1],['จป.',0],['สถาปนิก',1],['โฟร์แมน',2],['สำนักงาน',1],['ช่างปูน',2],['ช่างฉาบ',2],['หัวหน้างาน',2],['ช่างทั่วไป',30],['กรรมกร',25],['เซอร์เวย์',0],['ชุดตั้งนั่งร้าน',5],['คนขับรถ',1],['สโตร์',2],['งานกระเบื้องภายใน',4],['งานกระเบื้องภายนอก',0],['ช่างสี',0],['งานฝ้าเพดาน',0],['งานสีเทคเจอร์',0],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',5],['งานติดตั้งประตู',0]],83],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',1],['โฟร์แมน',1],['ช่างประปา',0],['ช่างไฟ',3],['ช่างดับเพลิง',0],['ช่างแอร์',0],['สโตร์',1]],6]
];

const manpowerGroups21Nov=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['เซอร์เวย์',4],['คนงาน',10],['เครื่องจักร (คน)',3]],19],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',1],['จป.',0],['สถาปนิก',1],['โฟร์แมน',2],['สำนักงาน',1],['ช่างปูน',2],['ช่างฉาบ',2],['หัวหน้างาน',2],['ช่างทั่วไป',16],['กรรมกร',18],['เซอร์เวย์',0],['ชุดตั้งนั่งร้าน',0],['คนขับรถ',1],['สโตร์',2],['งานกระเบื้องภายใน',2],['งานกระเบื้องภายนอก',0],['ช่างสี',0],['งานฝ้าเพดาน',0],['งานสีเทคเจอร์',0],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',5],['งานติดตั้งประตู',0]],55],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',1],['โฟร์แมน',1],['ช่างประปา',0],['ช่างไฟ',3],['ช่างดับเพลิง',0],['ช่างแอร์',0],['สโตร์',1]],6],
['Frist Con · งานซ่อมร้าว',[['หัวหน้างาน',1],['คนงาน',2]],3]
];

const manpowerGroups22Nov=[
['เทวาวณิชกิจ',[['วิศวกร',0],['โฟร์แมน',0],['คนงาน',0],['คนขับเครื่องจักร',0]],0],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',0],['จป.',0],['สถาปนิก',0],['โฟร์แมน',2],['สำนักงาน',0],['ช่างปูน',0],['ช่างฉาบ',0],['หัวหน้างาน',0],['ช่างทั่วไป',0],['กรรมกร',0],['เซอร์เวย์',0],['ชุดตั้งนั่งร้าน',0],['คนขับรถ',1],['เจ้าหน้าที่สโตร์',1],['งานกระเบื้องภายใน',0],['งานกระเบื้องภายนอก',0],['ช่างสี',6],['งานฝ้าเพดาน',0],['งานสีเทคเจอร์',0],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',0],['งานติดตั้งประตู',0]],10],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',1],['โฟร์แมน',3],['ช่างประปา',10],['ช่างไฟ',5],['ช่างดับเพลิง',0],['ช่างแอร์',0],['สโตร์',1]],20]
];

const manpowerGroups23Nov=[
['เทวาวณิชกิจ',[['วิศวกร',1],['โฟร์แมน',1],['คนงาน',30],['คนขับเครื่องจักร',2]],34],
['ยายบัวการช่าง · งานสถาปัตย์',[['วิศวกรโครงสร้าง',0],['จป.',0],['สถาปนิก',1],['โฟร์แมน',2],['สำนักงาน',1],['ช่างปูน',0],['ช่างฉาบ',0],['หัวหน้างาน',0],['ช่างทั่วไป',0],['กรรมกร',2],['เซอร์เวย์',0],['ชุดตั้งนั่งร้าน',0],['คนขับรถ',1],['เจ้าหน้าที่สโตร์',1],['งานกระเบื้องภายใน',2],['งานกระเบื้องภายนอก',0],['ช่างสี',6],['งานฝ้าเพดาน',0],['งานสีเทคเจอร์',0],['งานปูกระเบื้องยาง SPC',0],['งานอลูมิเนียม',0],['งานติดตั้งประตู',1]],17],
['ยายบัวการช่าง · ทีมงานระบบ',[['วิศวกร',1],['โฟร์แมน',1],['ช่างประปา',2],['ช่างไฟ',1],['ช่างดับเพลิง',0],['ช่างแอร์',0],['สโตร์',1]],6]
];

const manpowerHistory=[
{date:'23 Nov 2026',thaiDate:'23/11/69',total:57,groups:manpowerGroups23Nov},
{date:'22 Nov 2026',thaiDate:'22/11/69',total:30,groups:manpowerGroups22Nov},
{date:'21 Nov 2026',thaiDate:'21/11/69',total:83,groups:manpowerGroups21Nov},
{date:'20 Nov 2026',thaiDate:'20/11/69',total:125,groups:manpowerGroups20Nov},
{date:'19 Nov 2026',thaiDate:'19/11/69',total:132,groups:manpowerGroups19Nov},
{date:'18 Nov 2026',thaiDate:'18/11/69',total:136,groups:manpowerGroups18Nov},
{date:'17 Nov 2026',thaiDate:'17/11/69',total:130,groups:manpowerGroups17Nov},
{date:'16 Nov 2026',thaiDate:'16/11/69',total:121,groups:manpowerGroups16Nov},
{date:'15 Nov 2026',thaiDate:'15/11/69',total:130,groups:manpowerGroups15Nov},
{date:'14 Nov 2026',thaiDate:'14/11/69',total:144,groups:manpowerGroups14Nov},
{date:'13 Nov 2026',thaiDate:'13/11/69',total:118,groups:manpowerGroups13Nov},{date:'12 Nov 2026',thaiDate:'12/11/69',total:116,groups:manpowerGroups12Nov},{date:'11 Nov 2026',thaiDate:'11/11/69',total:115,groups:manpowerGroups11Nov},{date:'10 Nov 2026',thaiDate:'10/11/69',total:130,groups:manpowerGroups10Nov},{date:'09 Nov 2026',thaiDate:'09/11/69',total:134,groups:manpowerGroups09Nov},{date:'08 Nov 2026',thaiDate:'08/11/69',total:99,groups:manpowerGroups08Nov},{date:'07 Nov 2026',thaiDate:'07/11/69',total:145,groups:manpowerGroups07Nov},{date:'06 Nov 2026',thaiDate:'06/11/69',total:139,groups:manpowerGroups06Nov},{date:'05 Nov 2026',thaiDate:'05/11/69',total:129,groups:manpowerGroups05Nov},{date:'04 Nov 2026',thaiDate:'04/11/69',total:133,groups:manpowerGroups04Nov},{date:'03 Nov 2026',thaiDate:'03/11/69',total:112,groups:manpowerGroups03Nov},{date:'02 Nov 2026',thaiDate:'02/11/69',total:110,groups:manpowerGroups02Nov},{date:'01 Nov 2026',thaiDate:'01/11/69',total:74,groups:manpowerGroups01Nov},{date:'31 Oct 2026',thaiDate:'31/10/69',total:108,groups:manpowerGroups31Oct},{date:'30 Oct 2026',thaiDate:'30/10/69',total:115,groups:manpowerGroups30Oct},{date:'29 Oct 2026',thaiDate:'29/10/69',total:117,groups:manpowerGroups29Oct},{date:'28 Oct 2026',thaiDate:'28/10/69',total:71,groups:manpowerGroups28Oct},{date:'27 Oct 2026',thaiDate:'27/10/69',total:81,groups:manpowerGroups27Oct},{date:'26 Oct 2026',thaiDate:'26/10/69',total:24,groups:manpowerGroups26Oct},{date:'25 Oct 2026',thaiDate:'25/10/69',total:80,groups:manpowerGroups25Oct},{date:'24 Oct 2026',thaiDate:'24/10/69',total:149,groups:manpowerGroups24Oct},{date:'23 Oct 2026',thaiDate:'23/10/69',total:157,groups:manpowerGroups23Oct},{date:'22 Oct 2026',thaiDate:'22/10/69',total:150,groups:manpowerGroups22Oct},{date:'19 Oct 2026',thaiDate:'19/10/69',total:137,groups:manpowerGroups19Oct},{date:'18 Oct 2026',thaiDate:'18/10/69',total:122,groups:manpowerGroups18Oct},{date:'17 Oct 2026',thaiDate:'17/10/69',total:148,groups:manpowerGroups17Oct},{date:'16 Oct 2026',thaiDate:'16/10/69',total:147,groups:manpowerGroups16Oct},{date:'15 Oct 2026',thaiDate:'15/10/69',total:147,groups:manpowerGroups15Oct},{date:'14 Oct 2026',thaiDate:'14/10/69',total:151,groups:manpowerGroups14Oct},{date:'13 Oct 2026',thaiDate:'13/10/69',total:121,groups:manpowerGroups13Oct},{date:'12 Oct 2026',thaiDate:'12/10/69',total:128,groups:manpowerGroups12Oct},{date:'11 Oct 2026',thaiDate:'11/10/69',total:137,groups:manpowerGroups11Oct},{date:'10 Oct 2026',thaiDate:'10/10/69',total:159,groups:manpowerGroups10Oct},{date:'09 Oct 2026',thaiDate:'09/10/69',total:174,groups:manpowerGroups09Oct},{date:'08 Oct 2026',thaiDate:'08/10/69',total:162,groups:manpowerGroups08Oct},{date:'06 Oct 2026',thaiDate:'06/10/69',total:150,groups:manpowerGroups06Oct},{date:'04 Oct 2026',thaiDate:'04/10/69',total:110,groups:manpowerGroups04Oct},{date:'03 Oct 2026',thaiDate:'03/10/69',total:178,groups:manpowerGroups03Oct},{date:'02 Oct 2026',thaiDate:'02/10/69',total:187,groups:manpowerGroups02Oct},{date:'01 Oct 2026',thaiDate:'01/10/69',total:171,groups:manpowerGroups01Oct},{date:'30 Sep 2026',thaiDate:'30/09/69',total:145,groups:manpowerGroups30},{date:'29 Sep 2026',thaiDate:'29/09/69',total:172,groups:manpowerGroups29},{date:'28 Sep 2026',thaiDate:'28/09/69',total:167,groups:manpowerGroups28},{date:'27 Sep 2026',thaiDate:'27/09/69',total:26,groups:manpowerGroups27},{date:'26 Sep 2026',thaiDate:'26/09/69',total:167,groups:manpowerGroups26},{date:'25 Sep 2026',thaiDate:'25/09/69',total:173,groups:manpowerGroups25},{date:'24 Sep 2026',thaiDate:'24/09/69',total:165,groups:manpowerGroups24},{date:'23 Sep 2026',thaiDate:'23/09/69',total:184,groups:manpowerGroups23},{date:'22 Sep 2026',thaiDate:'22/09/69',total:182,groups:manpowerGroups22},{date:'21 Sep 2026',thaiDate:'21/09/69',total:173,groups:manpowerGroups21},{date:'20 Sep 2026',thaiDate:'20/09/69',total:93,groups:manpowerGroups},{date:'19 Sep 2026',thaiDate:'19/09/69',total:168,groups:manpowerGroups19}];
const meetingHistory=[{no:49,date:'25/11/69',time:'10.00',location:'Onsite / Online',chairman:'EPCM',agendas:[
['รับรองรายงานการประชุมครั้งที่ 48',['ไม่มีแก้ไขรายงานการประชุมครั้งก่อน']],
['แจ้งเพื่อทราบ กำหนดการสำคัญและค่าปรับ YBT ล่าสุด',[
  'ตารางเปรียบเทียบค่าปรับ YBT: มูลค่าสัญญา 166,000,000 บาท ครบกำหนดสัญญา 16 ก.ค. 2569 ล่าช้าสะสม 132 วัน (+7 วัน) คิดค่าปรับ 0.05% ต่อวัน (83,000 บาท/วัน) รวมค่าปรับสะสม 10,956,000 บาท (เพิ่มขึ้นจาก 10,375,000 บาท ณ 18 พ.ย. 69)',
  'กำหนดการสำคัญของโรงเรียน: วันที่ 28-29/11/69 โรงเรียนขอใช้อาคาร B1; วันที่ 29/11/69 ช่วงเช้ามีงานวิ่ง ให้ดูแลการจราจร; วันที่ 30/11/69 แขก VIP เข้าเยี่ยมชมอาคาร ให้เตรียมความเรียบร้อย; วันที่ 18/12/69 ปิดภาคเรียน; วันที่ 04/01/70 เปิดภาคเรียน',
  'งานแก้ไขรอยร้าวดาดฟ้า: YBT นัดเข้าตรวจวันที่ 26/11/69 เวลา 14.30 - 15.50 น.',
  'Solar Roof: อยู่ระหว่างรอดำเนินการ',
  'สถานะงานฝ้า: ปลด HOLD ให้ดำเนินการต่อได้แล้วทั้ง B3 (ห้องสมุด, พยาบาล, ห้องวิทย์ชั้น 2, ฝ้าหน้าห้องวิทย์ชั้น 3) และ B2 (Auditorium, Lecture)',
  'แจ้งแนวปฏิบัติเอกสาร Payment: เล่ม Payment ต้องส่งตรงตามผลงานจริงหน้างาน แนบแบบแสดงพื้นที่ ถอดปริมาณจริงตาม BOQ แนบภาพถ่ายแยกหัวข้อ และแนบเอกสารตรวจงาน EPCM',
  'VO งานระบบ: สรุปงานเพิ่มไฟฟ้าถนน (EE) ยอด 448,619 บาท (ราคาหลังต่อรองแล้ว, exvat)',
  'VO งานสถาปัตย์ (สรุปยอดรวม 4,624,895.16 บาท exvat): ผนังห้องน้ำสำเร็จรูป 139,813.66 บ. (มีงานลดผนังกระเบื้อง), โครงสร้างพื้นยื่นรับแผงก่อ/รื้อแผ่นเหล็ก/หุ้มเสาตอม่อ Dropoff 715,709 บ., งานทาสี 2,563,121.53 บ., ปรับปรุงครัวอาคาร K 397,602.93 บ., ฉาบตีนผนังภายนอกชั้น 1 98,088.67 บ., สุขภัณฑ์ 1,136,544.23 บ., ลดระบบท่อระบายน้ำทิ้งภายนอก (-1,081,093.48 บ.), งานบัวผนัง 293,176.30 บ. (ต่อรองแล้ว รอแบบแนบ), หลังคากันสาด Lobby + หน้าอาคาร 3 361,932.32 บ., ประตูหน้าต่างและฝ้ารอยืนยันยอด'
]],
['เร่งรัดงาน (วาระเร่งด่วน) - เทวา (ถนน & Landscape)',[
  'รั้ว Main Gate: นัดหมาย 27/11/69 ยังไม่ทันตามแผนงาน',
  'งานทางเท้า: นัดหมาย 27/11/69 ยังไม่ทันตามแผนงาน',
  'ปรับดินเทพื้นหลัง B2, B3: เลื่อนเป็น 30/11/69 (เดิม 27/11/69)',
  'ปรับพื้นที่จอดรถ SGS: ชุดบดอัดเข้าแล้วเสร็จ 22/11/69 เหลือเก็บรายละเอียด'
]],
['เร่งรัดงาน (วาระเร่งด่วน) - YB (สถาปัตย์ & งานระบบ)',[
  'Drop-off: แจ้งนัดตรวจ',
  'ตรวจงาน Deflect ภายนอก B1: ตรวจรอบแรกแล้ว รอนัดตรวจครั้งที่ 2 พื้นที่ที่เหลือ',
  'ประตูหลังครัว: Hold งานมอเตอร์ไฟฟ้า; ประตูเหล็ก B1 นัด 16/11/69; ประตูวงเวียน: แก้ไขเสา นัดตรวจเลื่อนเป็น 26/11/69 เวลา 13.00 น.',
  'หลังคา Metal sheet: แจ้งตรวจสี + Flashing นัดตรวจ 16/11/69 ขอเลื่อนเป็น 28/11/69',
  'บ่อเก็บน้ำใต้ดิน / ห้องเครื่อง / ผิวสนาม ตีเส้น: สถาปัตย์เลื่อนตรวจเป็น 30/11/69',
  'รั้วโครงการ Zone A หลังถังเก็บน้ำ: 96% เสริม Flat Bar เลื่อนเป็น 30/11/69; Zone C แนวโรงแรม รอแจ้งรื้อแนวรั้วด้านหน้า',
  'Site Drain: มีแก้ไขระดับส่วนที่เป็นสนามหญ้า -0.10 ม. และรอยืนยันระดับหน้า B3',
  'งานลิฟต์: งานเก็บผิวปล่องภายในลิฟต์ยังไม่ได้เริ่มดำเนินการ',
  'ห้องเก็บแก๊ส B3: ณ 25/11/69 ยังไม่เสร็จ เหลือประตูและเก็บงานทาสี',
  'ห้องอาบน้ำเด็ก โครงสร้างพื้น + ทรายล้าง: รอดำเนินการแก้ไขพร้อมพื้นทางเดิน',
  'Overflow: ทยอยติดตั้งแล้ว',
  'งานกันซึมดาดฟ้า: รอยืนตรวจและยืนยันงานซ่อมพื้น',
  'ห้องครัว: ประตูบานเลื่อนขอเก็บงาน เลื่อนนัดตรวจเป็น 27/11/69',
  'Counter ห้องน้ำเด็กเล็ก: ณ 23/11/69 ประเมินแล้วเสร็จ (เสร็จเรียบร้อยแล้ว)',
  'สี Texture: ตรวจแล้ว 1 แผง เลื่อนนัดตรวจทั้งหมดเป็น 27/11/69',
  'อาคารห้องช่าง / ห้องเก็บแก๊สหลังครัว ทางเดินไปโรงแรม: เลื่อนเป็น 20/12/69 (เดิม 30/11/69)',
  'บานประตู Acoustic: เลื่อนเข้าเป็นวันที่ 05/12/69 (เดิม 28/11/69)',
  'Kid Pool: นัดตรวจ 26/11/69 ขยับเสาชิดแนวรั้ว แกรนิตและราวกันตกรอตรวจ; หลังคากันสาดเปลี่ยนแบบเป็นแผ่น Polycarbonate ยื่น 2.40 ม.',
  'ราวกันตกเหล็ก B3: กำหนดเสร็จ 30/11/69 รวมราวจับ',
  'งานดาดฟ้า + โถงบันไดดาดฟ้า: แจ้งนัดตรวจครั้งที่ 2'
]],
['ข้อกำหนดเข้าอาคาร และความปลอดภัย',[
  'YB ต้องจัดหัวหน้างานประจำควบคุมตลอด มีทีมทำความสะอาดพร้อมเครื่องมือ และถ่ายรูปส่งมอบงานระบุพื้นที่',
  'ส่งเอกสารขอเข้าทำงานพื้นที่ก่อน 15.00 น.',
  'จัดระเบียบเศษวัสดุ ขยะ กองวัสดุภายนอก แสงสว่าง และห้องน้ำให้ถูกสุขลักษณะ',
  'ตรวจสภาพนั่งร้าน จุดยึดอาคาร อุปกรณ์ยึด ผ้าใบกันฝุ่น ตาข่าย และแนวริ้วขาวแดงทุกจุดเสี่ยง'
]]
]},{no:48,date:'18/11/69',time:'10.00',location:'Onsite / Online',chairman:'EPCM',agendas:[
['รับรองรายงานการประชุมครั้งที่ 47',['ไม่มีแก้ไขรายงานการประชุมครั้งก่อน']],
['แจ้งเพื่อทราบ กำหนดการและค่าปรับ YBT',[
  'สรุปค่าปรับ YBT ณ 18 พ.ย. 69: สัญญา 166,000,000 บาท ครบกำหนด 16 ก.ค. 69 ล่าช้า 125 วัน ค่าปรับ 0.05%/วัน (83,000 บาท/วัน) รวมค่าปรับสะสม 10,375,000 บาท',
  'แจ้งกิจกรรมโรงเรียน: 29/11/69 ช่วงเช้ามีงานวิ่ง ให้จัดเตรียมและดูแลการจราจร',
  'แก้ไขรอยร้าวดาดฟ้า: YBT นัดเข้าตรวจ 25/11/69 เวลา 14.30 น.',
  'Solar Roof: อยู่ระหว่างรอดำเนินการ',
  'สถานะงานฝ้า: B3 (ห้องสมุด, พยาบาล, วิทย์ ชั้น 2-3) และ B2 (Auditorium) ดำเนินการต่อได้; ยังคง HOLD เฉพาะ B2 (Lecture)',
  'VO งานระบบ: EE งานเพิ่มไฟฟ้าถนน 448,619 บาท (ราคาต่อรองแล้ว, exvat)',
  'VO งานสถาปัตย์ (รวม 4,624,895.16 บาท exvat): ผนังห้องน้ำสำเร็จรูป 139,813.66 บ. (มีงานลดผนังกระเบื้อง), โครงสร้างพื้นยื่นรับแผงก่อ/รื้อแผ่นเหล็ก/หุ้มเสาตอม่อ Dropoff 715,709 บ., งานทาสี 2,563,121.53 บ., ปรับปรุงครัวอาคาร K 397,602.93 บ., ฉาบตีนผนังภายนอกชั้น 1 98,088.67 บ., สุขภัณฑ์ 1,136,544.23 บ., ลดระบบท่อระบายน้ำทิ้งภายนอก (-1,081,093.48 บ.), บัวผนัง 293,176.30 บ. (ต่อรองแล้ว รอแบบแนบ), กันสาด Lobby + หน้าอาคาร 3 361,932.32 บ.'
]],
['เร่งรัดงาน (วาระเร่งด่วน) - เทวา (ถนน & Landscape)',[
  'รั้ว Main Gate: แจ้งเลื่อนเป็น 27/11/69 (เฉพาะโครงสร้าง)',
  'งานทางเท้า: แจ้งเลื่อนเป็น 27/11/69 (โครงสร้างแล้วเสร็จ ไม่รวม Stamp)',
  'งานเติมดิน + ปรับดิน B2, B3: แผนงาน 27/11/69',
  'ปรับพื้นที่จอดรถ SGS: ชุดบดอัดเข้าแล้วเสร็จ เลื่อนเป็น 22/11/69'
]],
['เร่งรัดงาน (วาระเร่งด่วน) - YB (สถาปัตย์ & งานระบบ)',[
  'Drop-off: แจ้งนัดตรวจ',
  'ตรวจ Deflect ภายนอก B1: ตรวจรอบแรก 11/11/69 แล้ว รอนัดตรวจครั้งที่ 2 พื้นที่ที่เหลือ',
  'ประตูหลังครัว, ประตูเหล็กทางเข้า B1, ประตูวงเวียน: แก้ไขเสา นัดตรวจ 24/11/69',
  'หลังคา Metal sheet: แจ้งตรวจสี + Flashing นัดตรวจ 16/11/69 ขอเลื่อนเป็น 28/11/69',
  'บ่อเก็บน้ำใต้ดิน / ห้องเครื่อง / ผิวสนาม ตีเส้น: สถาปัตย์แจ้งตรวจ 18/11/69 เลื่อนเป็น 20/11/69',
  'รั้ว Zone A หลังถังเก็บน้ำ: 96% เลื่อนเป็น 18/11/69; Zone C แนวโรงแรม ดำเนินการส่วนที่พร้อม',
  'Site Drain: รอยืนยันระดับหน้า B3 มีแก้ไขระดับส่วนที่เป็นสนามหญ้า -0.10 ม.',
  'งานลิฟต์: งานหลักเสร็จรอตรวจภายใน งานเก็บผิวปล่องภายในลิฟต์ระหว่างดำเนินการ',
  'ห้องเก็บแก๊ส B3: 20/11/69 แล้วเสร็จ',
  'ห้องครัว: ประตูบานเลื่อนติดเสร็จแล้ว ขอเข้าเก็บงานอีกครั้ง รอแจ้งเข้าตรวจ 23/11/69',
  'Counter ห้องน้ำเด็กเล็ก: 23/11/69 แล้วเสร็จ',
  'สี Texture: ตรวจแล้ว 1 แผง (40% ณ 11/11/69) นัดตรวจทั้งหมด 24/11/69',
  'ห้อง Heat pump: ติดตั้งพัดลมดูดอากาศแล้วเสร็จ 14/11/69',
  'อาคารห้องช่าง / แก๊สหลังครัว: เสร็จทั้งหมด 30/11/69 (ไม่รวมเก็บรายละเอียด)',
  'บานประตู Acoustic: เลื่อนเข้า 28/11/69; บาน Service ห้องปั๊ม Kid Pool ติดแล้วรอเก็บงาน',
  'ประตูห้องคนพิการ: ปรับบานได้ 0.90 ม. รอติดตั้งลามิเนต',
  'Kid Pool: รอผ้าใบแรงดึง ขยับเสาชิดแนวรั้ว; ราวกันตกเหล็ก B3 เลื่อนเสร็จ 30/11/69 รวมราวจับ; หลังคากันสาด Kid Pool กระจกลามิเนต ยื่น 2.40 ม.',
  'งานดาดฟ้า + โถงบันไดดาดฟ้า: แจ้งนัดตรวจครั้งที่ 2'
]],
['ข้อกำหนดเข้าอาคาร และความปลอดภัย',[
  'YB คุมเข้มหัวหน้างานประจำพื้นที่ ทีมทำความสะอาด ภาพถ่ายส่งมอบ และเอกสารเข้าพื้นที่ก่อน 15.00 น.',
  'จัดการขยะ กองวัสดุ แสงสว่าง และสุขอนามัย',
  'ตรวจนั่งร้าน ราวกันตก ตาข่าย และแนวริ้วขาวแดงทุกจุดเสี่ยง'
]]
]},{no:47,date:'11/11/69',time:'10.00',location:'Onsite / Online',chairman:'EPCM',agendas:[
['รับรองรายงานการประชุมครั้งที่ 46',['ไม่มีแก้ไขรายงานการประชุมครั้งก่อน']],
['แจ้งเพื่อทราบ กำหนดการและค่าปรับ YBT',[
  'สรุปค่าปรับ YBT: มูลค่าสัญญา 166,000,000 บาท ครบกำหนดเดิม 16 ก.ค. 2569 ล่าช้าสะสม 118 วัน อัตราค่าปรับ 0.05% ต่อวัน (83,000 บาท/วัน) รวมค่าปรับสะสม 9,794,000 บาท',
  'แก้ไขรอยร้าวดาดฟ้า: นัด 17/11/69 14.00 น., YBT นัดตรวจ 25/11/69 10.00 น. และ 26/11/69 14.30 น.',
  'Solar Roof: รอดำเนินการ',
  'ปลด HOLD งานฝ้า: B3 (ห้องสมุด, ห้องพยาบาล, ห้องวิทย์ชั้น 2, ฝ้าหน้าห้องวิทย์ชั้น 3) และ B2 (Auditorium) ดำเนินการต่อได้ (แจ้ง 11/11/69); ยังคง HOLD เฉพาะ B2 (Lecture) 1 ห้อง',
  'แจ้งเอกสาร Payment: เล่ม Payment ต้องตรงหน้างานจริง แนบผังพื้นที่ส่งงาน ถอดปริมาณจริงตาม BOQ แนบรูปถ่ายและเอกสารตรวจงาน EPCM',
  'เร่งรัดงาน ตรวจ Deflect และส่งมอบพื้นที่',
  'VO งานสถาปัตย์ที่ให้ทยอยส่งยอด: (1) เพิ่มผนังห้องน้ำสำเร็จรูป, (2) เพิ่มโครงสร้างพื้นยื่นรับแผงก่อ รื้อแผ่นเหล็ก และงานหุ้มเสาตอม่อ, (3) งานทาสี, (4) ปรับปรุงห้องครัวอาคาร K, (5) งานฉาบตีนผนังภายนอก ชั้น 1, (6) งานสุขภัณฑ์'
]],
['เร่งรัดงาน (วาระเร่งด่วน) - เทวา (ถนน & Landscape)',[
  'รั้ว Main Gate: แจ้งเลื่อนเป็น 27/11/69 (เดิม 10/11/69)',
  'งานทางเท้า: แจ้งเลื่อนเป็น 27/11/69 (โครงสร้างแล้วเสร็จ ไม่รวม Stamp)',
  'งานเติมดิน + ปรับดิน B2, B3: แผน 27/11/69',
  'ปรับพื้นที่จอดรถ SGS: ชุดบดอัดเข้าแล้วเสร็จ 15/11/69'
]],
['เร่งรัดงาน (วาระเร่งด่วน) - YB (สถาปัตย์ & งานระบบ)',[
  'Drop-off: แจ้งนัดตรวจ',
  'ตรวจงาน Deflect ภายนอก B1: นัดตรวจ 11/11/69 เวลา 14.30 น. (บริเวณหน้า Canteen ก่อน)',
  'ประตูหลังครัว, ประตูเหล็กทางเข้า B1, ประตูวงเวียน (แก้ไขเสา): กำหนดตรวจ 16/11/69 เวลา 10.00 น.',
  'หลังคา Metal sheet: แจ้งตรวจสี + Flashing นัดตรวจ 16/11/69 เวลา 10.00 น.',
  'บ่อเก็บน้ำใต้ดิน: แจ้งตรวจงานสถาปัตย์ 18/11/69 เวลา 14.30 น.',
  'รั้วโครงการ Zone A หลังถังเก็บน้ำ: 96% เสริม Flat Bar เลื่อนเป็น 15/11/69; Zone C เลื่อนเป็น 15/11/69',
  'Site Drain: รอยืนยันระดับหน้า B3',
  'งานลิฟต์: งานหลักเสร็จรอตรวจภายใน งานเก็บผิวปล่องภายในลิฟต์อยู่ระหว่างดำเนินการ',
  'ห้องเก็บแก๊ส B3: กำหนดแล้วเสร็จ 20/11/69; ห้องอาบน้ำเด็ก โครงสร้างพื้น+ทรายล้าง รอดำเนินการแก้ไขพร้อมพื้นทางเดิน',
  'Overflow: ของมาแล้วรอติดตั้ง 15/11/69; งานกันซึมดาดฟ้า รอยืนตรวจและยืนยันงานซ่อมพื้น',
  'ห้องครัว: ประตูบานเลื่อนแล้วเสร็จ เลื่อนตรวจเป็น 15/11/69',
  'Counter ห้องน้ำเด็กเล็ก: ติดตั้ง 1 ห้องที่เหลือแล้วเสร็จ 15/11/69',
  'สี Texture: ตรวจแล้ว 40% ณ 11/11/69',
  'Sewage 1: เลื่อนเป็น 7/11/69 แล้วเสร็จ; ห้อง Heat pump พัดลมดูดอากาศเลื่อนเป็น 14/11/69',
  'อาคารห้องช่าง และห้องเก็บแก๊สหลัง Kitchen: เสร็จทั้งหมด 30/11/69 (ไม่รวมงานเก็บรายละเอียด)',
  'บานประตู Acoustic: เลื่อนเข้า 15/11/69; บาน Service ห้องปั๊ม Kid Pool ติดตั้งแล้วรอเก็บรายละเอียด',
  'ประตูห้องคนพิการ: ปรับแก้ไขความกว้างให้ได้ 0.90 ม. ปรับขนาดบานแล้วรอติดตั้งลามิเนต',
  'Kid Pool: รอผ้าใบแรงดึง; ราวกันตกเหล็ก B3 เลื่อนเป็น 12/11/69 (ไม่รวมราวจับ); หลังคากันสาด Kid Pool กระจกลามิเนตยื่น 2.40 ม.',
  'งานดาดฟ้า + โถงบันไดดาดฟ้า: นัดตรวจ 9/11/69'
]],
['ข้อกำหนดเข้าอาคาร และความปลอดภัย',[
  'YB จัดหัวหน้างานควบคุมตลอด พร้อมทีมทำความสะอาด ถ่ายรูปหลังเสร็จงาน และส่งเอกสารก่อน 15.00 น.',
  'ตรวจตราความสะอาด ขนย้ายขยะ จัดระเบียบกองวัสดุ แสงสว่าง และสุขอนามัยห้องน้ำ',
  'ตรวจสอบนั่งร้าน จุดยึดอาคาร ผ้าใบกันฝุ่น ราวกันตก และริ้วขาวแดงทุกจุดเสี่ยง'
]]
]},{no:46,date:'04/11/69',time:'10.00',location:'Onsite / Online',chairman:'EPCM',agendas:[
['รับรองรายงานการประชุมครั้งที่ 45',['ไม่มีแก้ไข']],
['แจ้งเพื่อทราบและกำหนดการโครงการ',[
  'แก้ไขรอยร้าวดาดฟ้า: แจ้งประชุมครั้งถัดไป 3/11/69, YB แจ้งดำเนินการ 18/11/69',
  'Solar Roof: รอดำเนินการ โดยวันที่ 29/11/69 มีงานวิ่ง รถเข้าไปจอดในพื้นที่',
  'HOLD งานฝ้า 6 ห้อง: B2 (Auditorium, Lecture), B3 (ห้องสมุด, ห้องพยาบาล, ห้องวิทย์ชั้น 2, ฝ้าหน้าห้องวิทย์ชั้น 3)',
  'แจ้งเอกสาร Payment: ส่งเล่มอัปเดตตามผลงานจริง ทำแบบแนบพื้นที่ ถอดปริมาณจริงตาม BOQ (ตร.ม./ชิ้น/ความยาว) แนบรูปถ่ายแยกหัวข้อ และแนบเอกสารตรวจงาน EPCM ตามหัวข้อ/พื้นที่ที่เบิก',
  'ตรวจ Deflect และส่งมอบพื้นที่: B1 แจ้งนัดตรวจงาน; B2 ชั้น 1 นัดตรวจครั้งที่ 2 วันที่ 10/11/69; B3 นัดตรวจครั้งที่ 2 วันที่ 16/11/69',
  'VO ระบบ: AC และ EE วางบิลแล้ว',
  'เร่งรัดให้ทยอยส่ง VO งานสถาปัตย์ (สุขภัณฑ์, ผนังห้องน้ำสำเร็จรูป, งานสี)',
  'งานถนน: เทวา สามารถส่งงานลด-เพิ่มเข้ามาได้',
  'กำหนดการสัญญาหลัก YBT: สัญญาครบกำหนด 16/7/69 ล่าช้าสะสม 111 วัน (เลยกำหนด); YB แจ้งเลื่อนส่งมอบเป็น 15/10/69 (-35 วัน) และแจ้งเลื่อนเป็น 30/10/69 (-20 วัน)'
]],
['เร่งรัดงาน (วาระเร่งด่วน) - เทวา (ถนน & Landscape)',[
  'รั้ว Main Gate: อยู่ระหว่างดำเนินการ ยืนยันเฉพาะโครงสร้าง 30/10/69 แจ้งเลื่อนเป็น 10/11/69 ส่งแผน 4/11/69',
  'งานทางเท้า: เริ่ม 28/9/69 โครงสร้างแล้วเสร็จไม่รวม Stamp ไม่ทันตามแผน คันหินเข้า 30/10/69 ส่งแผน 4/11/69',
  'งานเติมดิน + ปรับดิน B2, B3: ปรับแผนงาน ส่งแผน 4/11/69',
  'ปรับพื้นที่จอดรถ SGS: ติดเรื่องสภาพอากาศ เครื่องจักรนัดเข้า 1-3/11/69 ส่งแผน 4/11/69'
]],
['เร่งรัดงาน (วาระเร่งด่วน) - YB (สถาปัตย์ & งานระบบ)',[
  'Drop-off: แจ้งนัดตรวจ',
  'ตรวจงาน Deflect ภายนอก B1: เลื่อนเป็น 10/11/69 (บริเวณหน้า Canteen ก่อน)',
  'ประตูหลังครัว: กำหนด 10/11/69; ประตูเหล็กทางเข้า B1: เลื่อนเป็น 10/11/69; ประตูวงเวียน: แก้ไขเสา',
  'หลังคา Metal sheet: เริ่มดำเนินการภายในสัปดาห์หน้า',
  'บ่อเก็บน้ำใต้ดิน: สถาปัตย์เลื่อนเป็น 10/11/69 ตรวจรอยน้ำซึมห้องปั๊ม แก้ไขแล้ว',
  'รั้วโครงการ Zone A หลังถังเก็บน้ำ: ดำเนินการ 96% เสริม Flat Bar เพิ่มความแข็งแรง เลื่อนเป็น 15/11/69; Zone C แนวโรงแรม เลื่อนเป็น 15/11/69',
  'งานระบบ Site Drain: รอยืนยันระดับ',
  'งานลิฟต์: งานหลักเสร็จแล้วรอตรวจงานภายใน งานเก็บผิวปล่องภายในลิฟต์',
  'ห้องเก็บแก๊ส B1 หลังครัว: เก็บรายละเอียดงาน เลื่อนเป็น 15/11/69; ห้องเก็บแก๊ส B3: อาคาร B3 แล้วเสร็จ 30/10/69 รอกระเบื้องดินเผา',
  'ห้องอาบน้ำเด็ก โครงสร้างพื้น + ทรายล้าง: รอดำเนินการพร้อมกับพื้นทางเดิน',
  'Overflow: นำเสนอกล่องสเตนเลส ได้ตัวอย่างแล้วรอแบบตำแหน่ง เซ็ตระดับก่อนติดตั้งสูงจากพื้น 5 cm.',
  'งานกันซึมดาดฟ้า: รอยืนตรวจและยืนยันงานซ่อมพื้น',
  'ห้องครัว: รอตรวจ Deflect รอบ 2; ประตูบานเลื่อนและช่องกริลล์ระบายอากาศ เลื่อนเป็น 15/11/69',
  'Counter ห้องน้ำเด็กเล็ก: ติดตั้งแล้ว 1 ห้อง ที่เหลือเลื่อนเป็น 15/11/69',
  'สี Texture: รอเก็บรายละเอียดงาน เลื่อนเป็น 10/11/69',
  'Sewage 1: Supplier เข้ามา Test Start Up 27/10/69 เลื่อนเป็น 7/11/69',
  'ห้อง Heat pump: พัดลมดูดอากาศเลื่อนเป็น 14/11/69',
  'อาคารห้องช่าง: พื้นภายนอกที่เหลือ 14/10/69 เสร็จทั้งหมด 30/11/69',
  'บานประตู Acoustic: ของเข้า 31/10/69; บานประตู Service ห้องปั๊ม Kid Pool เจาะแล้วรอติดตั้งบาน; ตรวจเช็คความกว้างประตูห้องคนพิการ',
  'Kid Pool: แล้วเสร็จ ติดตามกำหนด; ราวกันตกเหล็ก B3 เลื่อนเป็น 10/11/69 (ไม่รวมราวจับ); หลังคากันสาดออกไป Kid Pool ยื่น 2.40 ม. กระจกลามิเนต',
  'งานดาดฟ้า + โถงบันไดดาดฟ้า: นัดตรวจ 9/11/69'
]],
['ข้อกำหนดเข้าอาคาร และงานเสนอราคา',[
  'YB ต้องมีหัวหน้างานอยู่ควบคุมงานตลอด พร้อมทีมงานและเครื่องมือทำความสะอาด',
  'ถ่ายรูปพร้อมระบุพื้นที่หลังเสร็จงาน และส่งเอกสารเข้าพื้นที่ก่อน 15.00 น.',
  'Renovate Workshop รวมพื้น Load หลังครัว: ยืนยันราคาแก้ใบเสนอราคาด่วน',
  'งานไฟถนน, ไฟทางเดิน + ส่องผนังอาคาร 3 จุด 3 ด้าน, งานบัวผนังเดิมงานเพิ่ม: ให้ดำเนินการได้เลย'
]],
['ความปลอดภัยและอาชีวอนามัย',[
  'ขนย้ายเศษวัสดุและขยะออกจากพื้นที่และบันไดเป็นประจำ',
  'จัดระเบียบพื้นที่กองวัสดุภายนอก แยกประเภทและกำหนดจุดจัดเก็บให้ชัดเจน',
  'ดูแลแสงสว่างในพื้นที่ทำงาน/ทางเดิน (20/7) และห้องน้ำสะอาดเพียงพอต่อแรงงาน',
  'ตรวจสอบสภาพนั่งร้าน จุดยืน จุดยึด และการผูกยึดกับอาคารทุกสัปดาห์',
  'ติดตั้งและยึดผ้าใบกันฝุ่น ตาข่ายกันเศษวัสดุ ราวกันตก และริ้วขาวแดงทุกพื้นที่เสี่ยง'
]]
]},{no:45,date:'28/10/69',time:'10.00',location:'Onsite / Online',chairman:'EPCM',agendas:[
['รับรองรายงานการประชุมครั้งที่ 44',['ไม่มีแก้ไขรายงานการประชุมครั้งก่อน']],
['แจ้งเพื่อทราบและกำหนดการโครงการ',['งานแก้ไขรอยร้าวดาดฟ้า: นัดประชุมครั้งถัดไป 03/11/69 และ YB ขอเลื่อนดำเนินการหลัง 15/11/69','Solar Roof รอดำเนินการ โดยวันที่ 29/11/69 มีงานวิ่งและต้องใช้พื้นที่จอดรถ','HOLD งานฝ้า 6 ห้อง: B2 Auditorium และ Lecture; B3 ห้องสมุด ห้องพยาบาล ห้องวิทยาศาสตร์ชั้น 2 และฝ้าหน้าห้องวิทยาศาสตร์ชั้น 3','เอกสาร Payment ต้องอัปเดตตามผลงานจริง แนบแบบพื้นที่และปริมาณตาม BOQ รูปถ่าย และเอกสารตรวจงาน EPCM','ตรวจ Deflect และส่งมอบพื้นที่: B1 นัดภายใน 28/10/69; B2 ชั้น 1 นัดตรวจ 28/10/69 และแจ้งตรวจ Deflect อีกครั้ง 02/11/69','VO ระบบ SN, AC และ EE วางบิลแล้ว โดย SN โอนงวดที่ 1 แล้ว; เร่งทยอยส่ง VO งานสถาปัตย์ที่เสร็จ','VO งานสถาปัตย์: สุขภัณฑ์ 1,200,000 บาท, ผนังห้องน้ำสำเร็จรูป 149,000 บาท และงานสี 2,563,121.53 บาท','Drop-off และ B2 ชั้น 1 เปิดใช้งานหลังปิดเทอม โดยงานในพื้นที่ต้องเสร็จ 100%','YB แจ้งเลื่อนส่งมอบทั้งโครงการเป็น 30/10/69 หลังเลยกำหนดเดิม']],
['เร่งรัดงานและติดตามผู้รับเหมา',['Main Gate: เฉพาะโครงสร้างยืนยัน 30/10/69 แต่ยังไม่ทันและเลื่อนเป็น 10/11/69; ให้ส่งแผน 28/10/69','งานทางเท้า: โครงสร้างแล้วเสร็จแต่ไม่รวม Stamp; คันหินเข้าวันที่ 30/10/69','พื้นที่จอดรถ SGS รอสภาพอากาศ และนัดเครื่องจักรเข้า 01-03/11/69','Drop-off ส่งมอบใช้งาน 25/10/69 เหลือเก็บงานปูน สี และกระเบื้อง','ตรวจ Deflect ภายนอก B1 เลื่อนเป็น 03/11/69; ประตูวงเวียนกำหนด 30/10/69','บ่อเก็บน้ำใต้ดินเลื่อนเป็น 10/11/69 และให้ตรวจรอยน้ำซึมห้องปั๊ม','รั้ว Zone A เลื่อนเป็น 04/11/69 ให้เสร็จ 100%; Zone C กำหนด 30/10/69','Site Drain เร่งติดตั้งฝาบนถนนและยืนยันระดับ; งานลิฟต์งานหลักเสร็จแล้วรอตรวจภายใน','ห้องเก็บแก๊ส B1 เก็บรายละเอียดถึง 10/11/69; B3 แล้วเสร็จ 30/10/69 และรอกระเบื้องดินเผา','Overflow ติดตั้งตัวอย่าง 30/10/69; งานกันซึมดาดฟ้ารอยืนยันงานซ่อมพื้น','Counter ห้องน้ำเด็กเล็กเลื่อนเป็น 07/11/69; สี Texture เลื่อนเป็น 10/11/69','Sewage 1 เลื่อนเป็น 30/11/69; พัดลมดูดอากาศห้อง Heat Pump เลื่อนเป็น 31/10/69','ประตูโหลดสินค้าหลังครัวและประตูวงเวียนเลื่อนเป็น 10/11/69','อาคารห้องช่างกำหนดเสร็จทั้งหมด 30/11/69; บาน Acoustic ของเข้า 31/10/69','บาน Service ห้องปั๊ม Kid Pool เจาะแล้วรอติดตั้ง; Kid Pool แล้วเสร็จและติดตามกำหนด','ราวกันตกเหล็ก B3 กำหนด 08/11/69; หลังคากันสาด Kid Pool เป็นกระจกลามิเนตยื่น 2.40 ม.']],
['ข้อกำหนดเข้าพื้นที่และงานเสนอราคา',['YB ต้องมีหัวหน้างานควบคุม ทีมทำความสะอาด และถ่ายรูปหลังเสร็จงานพร้อมระบุพื้นที่','ส่งเอกสารเข้าพื้นที่ก่อน 15.00 น.','Renovate Workshop รวมพื้น Load หลังครัว ให้ยืนยันราคาแก้ไขใบเสนอราคาโดยด่วน','ไฟถนนและไฟทางเดินพร้อมไฟส่องผนังอาคาร ดำเนินการได้เลย','งานบัวผนังเพิ่มเติมเสนอแล้วและเริ่มดำเนินการได้เลย']],
['ความปลอดภัยและอาชีวอนามัย',['ขนย้ายเศษวัสดุและขยะออกจากอาคารและบันไดเป็นประจำ','จัดระเบียบพื้นที่กองวัสดุภายนอก แยกประเภทและกำหนดจุดจัดเก็บ','จัดแสงสว่างและห้องน้ำให้เพียงพอต่อจำนวนแรงงาน','ตรวจนั่งร้าน จุดยืน จุดยึด และการผูกยึดกับอาคารทุกสัปดาห์','ติดตั้งผ้าใบกันฝุ่น ตาข่าย ราวกันตก และริ้วขาวแดงในพื้นที่เสี่ยงให้มั่นคง']],
['อัปเดตความก้าวหน้าที่ผ่านมา',['ไม่มีรายละเอียดเพิ่มเติมในต้นฉบับ']]
]},{no:43,date:'14/10/69',time:'10.00',location:'Onsite / Online',chairman:'EPCM',agendas:[
['รับรองรายงานการประชุมครั้งที่ 42',['ไม่มีแก้ไขรายงานการประชุมครั้งก่อน']],
['แจ้งเพื่อทราบและกำหนดการโครงการ',['งานซ่อมรอยร้าวดาดฟ้าเสร็จแล้วและให้ YBT เฝ้าสังเกตการรั่วซึม; การประชุมวันที่ 10/10 ยังไม่มีข้อสรุป ให้ BDT เสนอแนวทางทดสอบรอยรั่วตาม Scope และนัดชี้แจงใหม่ภายใน 2 สัปดาห์','Solar Roof รอดำเนินการ','พื้นที่จอดรถ SGS เปิดสั่งจ้างแล้วและกำหนดแล้วเสร็จ 15/10/69','HOLD งานฝ้า 6 ห้อง; Kid Pool ดำเนินการต่อและกำหนด Shade/ราวกันตกแล้วเสร็จ 15/10/69','VO: SN วางบิลแล้ว, AC ส่ง 15/10, EE ส่ง 17/10 และงานสถาปัตย์หลักนัดส่ง 21/10','ช่วงปิดเทอม 17-25 ตุลาคม ให้ B2 ชั้น 1 และทุกระบบพร้อมใช้งาน พร้อมเก็บ Defect B1-B3 และส่งแผนเข้าทำงาน','YB ยืนยันส่งมอบทั้งโครงการ 15/10/69 หลังเลยกำหนดเดิม; Grand Opening วันที่ 11/11/69 เหลือ 28 วัน']],
['เร่งรัดงานและติดตามผู้รับเหมา',['Main Gate ยืนยันแล้วเสร็จ 30/10/69; งานทางเท้าเลื่อนเป็น 15/10/69','งานเติมดิน/ปรับดิน: B3 90%, B2 และ B1 รอคนงาน','ตรวจ Deflect ภายนอก B1 เลื่อนเป็น 17/10/69 โดยให้คุณสมมาตรเป็น Leader','ฝ้าอะลูมิเนียม B1-B2 เลื่อนเป็น 15/10/69','บ่อเก็บน้ำใต้ดินรับ Third Party Report แล้ว 12/10; เติมน้ำ 10-15/10 และงานสถาปัตย์กำหนด 15/10','รั้ว Zone A 96% และให้เสริม Flat Bar; Zone C กำหนดเสร็จ 25/10/69','Site Drain เร่งติดตั้งฝาและเทฝาบ่อบนถนนให้เรียบ; งานลิฟต์นำเสนอ 15/10','Overflow รอติดตั้งตัวอย่างและตรวจระดับสูงจากพื้น 5 ซม. ก่อนติดตั้ง','ห้องครัวรอตรวจรอบ 2; ประตูเลื่อนและช่องกริลล์ระบายอากาศกำหนด 21/10','Counter ห้องน้ำเด็กเล็กยืนยัน 14/10; สี Texture กำหนด 25/10','Sewage 1 เลื่อนเป็น 17/10; พัดลมดูดอากาศห้อง Heat Pump เลื่อนเป็น 25/10','ประตูโหลดสินค้าหลังครัวและประตูวงเวียนกำหนด 25/10','ลบมุมราวจับบันไดและอาคารห้องช่างเสร็จแล้ว','บานประตู Acoustic ของเข้า 31/10; บาน Service ห้องปั๊ม Kid Pool อยู่ระหว่างหาแนวทางแก้ไข']],
['ข้อกำหนดเข้าพื้นที่และงานเสนอราคา',['YB ต้องมีหัวหน้างานควบคุม ทีมทำความสะอาด และถ่ายรูปหลังเสร็จงานพร้อมระบุพื้นที่','ส่งเอกสารเข้าพื้นที่ก่อน 15.00 น.','Renovate Workshop รวมพื้น Load หลังครัว ให้ยืนยันราคาแก้ไขใบเสนอราคาโดยด่วน','ไฟถนนและไฟทางเดินพร้อมไฟส่องผนังอาคาร ดำเนินการได้เลย','งานบัวผนังเพิ่มเติมเสนอแล้วและเริ่มดำเนินการได้']],
['ความปลอดภัยและอาชีวอนามัย',['ขนย้ายเศษวัสดุและขยะออกจากอาคารและบันไดเป็นประจำ','จัดระเบียบพื้นที่กองวัสดุภายนอก แยกประเภทและกำหนดจุดจัดเก็บ','จัดแสงสว่างและห้องน้ำให้เพียงพอต่อจำนวนแรงงาน','ตรวจนั่งร้าน จุดยืน จุดยึด และการผูกยึดกับอาคารทุกสัปดาห์','ติดตั้งผ้าใบกันฝุ่น ตาข่าย ราวกันตก และริ้วขาวแดงในพื้นที่เสี่ยงให้มั่นคง']],
['อัปเดตความก้าวหน้าที่ผ่านมา',['ไม่มีรายละเอียดเพิ่มเติมในต้นฉบับ']]
]},{no:42,date:'07/10/69',time:'10.00',location:'Onsite / Online',chairman:'EPCM',agendas:[
['รับรองรายงานการประชุมครั้งที่ 41',['ไม่มีแก้ไขรายงานการประชุมครั้งก่อน']],
['แจ้งเพื่อทราบและกำหนดการโครงการ',['งานซ่อมรอยร้าวดาดฟ้า BDT แจ้งว่าเสร็จแล้ว ให้ YBT เฝ้าสังเกตพื้นที่รั่วเดิม และนัดประชุมชี้แจงวันที่ 10/10 เวลา 14.00 น.','Solar Roof รอดำเนินการ','พื้นที่จอดรถ SGS กำหนดแล้วเสร็จ 15/10/69 โดยเทวาวณิชกิจดำเนินการได้ และรอนำดินออกกับสภาพอากาศ','HOLD งานฝ้า 6 ห้อง ส่วน Kid Pool ดำเนินการต่อและกำหนด Shade/ราวกันตกแล้วเสร็จ 15/10/69','VO: SN วางบิลแล้ว, AC ระหว่างดำเนินการ และ EE เปิดพร้อมวางบิลตามหลังได้ทันที','ช่วงปิดเทอม 17-25 ตุลาคม ให้ B2 ชั้น 1 พร้อมใช้งานทุกระบบ และเก็บ Defect B1-B3 พร้อมแผนเข้าทำงานของ YB','YB แจ้งเลื่อนส่งมอบทั้งโครงการเป็น 15/10/69 และต้องเร่งรัดยืนยันกำหนด','Grand Opening วันที่ 11/11/69 เหลือ 35 วัน']],
['เร่งรัดงานและติดตามผู้รับเหมา',['Main Gate กำหนดแล้วเสร็จ 30/10/69; เชื่อมงานถนนกับภายนอกและยืนยันเปิดใช้ถนนวันที่ 10/10/69','งานทางเท้า งานเติมดิน และปรับดิน B2-B3 อยู่ระหว่างดำเนินการ','ตรวจ Deflect ภายนอก B1 เลื่อนเป็น 13/10/69 โดยให้คุณสมมาตรเป็น Leader','ฝ้าอะลูมิเนียม B1-B2 เลื่อนเป็น 10/10/69','บ่อเก็บน้ำใต้ดิน: ซ่อมรอยร้าวเลื่อนเป็น 08/10/69, Third Party ตรวจแล้วรอรายงาน, เติมน้ำ 10-15/10/69 และงานสถาปัตย์กำหนด 15/10/69','รั้ว Zone A ดำเนินการ 96%; Zone C กำหนดเสร็จ 25/10/69','ลิฟต์อาคาร 1 เก็บงานแล้วเรียกตรวจ 08/10/69; อาคาร 3 รอแจ้งทดสอบ','Roof Drain เสร็จแล้ว; Overflow ของมาแล้วรอติดตั้งและตรวจระดับ','Counter ห้องน้ำเด็กเล็กเริ่มติดตั้ง 10/10/69','งานพื้นโครงสร้างหลังห้องอาบน้ำเด็กและช่อง Service/หน้า Hood ครัวเสร็จแล้ว','Sewage 1 เลื่อนเป็น 10/10/69; Heat Pump พร้อมใช้งานแล้ว แต่พัดลมดูดอากาศกำหนด 12/10/69','ประตูโหลดสินค้าหลังครัวและประตูวงเวียน เริ่มติดตั้งและกำหนดเสร็จ 25/10/69','ลบมุมราวจับบันไดเลื่อนเป็น 12/10/69','อาคารห้องช่าง: พื้นโหลดเสร็จ 100% และพื้นภายนอกที่เหลือกำหนด 14/10/69','บานประตู Acoustic กำหนดของเข้า 31/10/69 และบาน Service Kid Pool อยู่ระหว่างหาแนวทางแก้ไข']],
['ข้อกำหนดเข้าพื้นที่และงานเสนอราคา',['YB ต้องมีหัวหน้างานควบคุม ทีมทำความสะอาด และถ่ายรูปหลังเสร็จงานพร้อมระบุพื้นที่','ส่งเอกสารเข้าพื้นที่ก่อน 15.00 น.','Renovate Workshop รวมพื้น Load หลังครัว เริ่มดำเนินการก่อนและรอ VE ระยะ 1.5 ม.','ไฟถนนและไฟทางเดินพร้อมไฟส่องผนังอาคาร ดำเนินการได้เลย','งานบัวผนังเพิ่มเติมเสนอแล้วและเริ่มดำเนินการได้']],
['ความปลอดภัยและอาชีวอนามัย',['ขนย้ายเศษวัสดุและขยะออกจากอาคารและบันไดเป็นประจำ','จัดระเบียบพื้นที่กองวัสดุภายนอก แยกประเภทและกำหนดจุดจัดเก็บ','จัดแสงสว่างและห้องน้ำให้เพียงพอต่อจำนวนแรงงาน','ตรวจนั่งร้าน จุดยืน จุดยึด และการผูกยึดกับอาคารทุกสัปดาห์','ติดตั้งผ้าใบกันฝุ่น ตาข่าย ราวกันตก และริ้วขาวแดงในพื้นที่เสี่ยงให้มั่นคง']],
['อัปเดตความก้าวหน้าที่ผ่านมา',['ไม่มีรายละเอียดเพิ่มเติมในต้นฉบับ']]
]},{no:41,date:'30/09/69',time:'10.00',location:'Onsite / Online',chairman:'EPCM',agendas:[
['รับรองรายงานการประชุมครั้งที่ 40',['ไม่มีแก้ไขรายงานการประชุมครั้งก่อน']],
['แจ้งเพื่อทราบและกำหนดการโครงการ',['งานแก้ไขรอยร้าวดาดฟ้าคาดว่าเลื่อนวันแล้วเสร็จเนื่องจากสภาพอากาศ และ YB ยังไม่ได้รับผลทดสอบคอนกรีตกับรายการคำนวณเพิ่มเติม','Solar Roof รอดำเนินการ','พื้นที่จอดรถ SGS ต้องปรับพื้นที่ให้เสร็จภายใน 15/10/69 โดยเทวาวณิชกิจเสนอราคาเบื้องต้นและมีการแก้ไขพื้นที่จอด','HOLD งานฝ้า 6 ห้อง: B2 Auditorium และ Lecture; B3 ห้องสมุด ห้องพยาบาล ห้องวิทยาศาสตร์ชั้น 2 และฝ้าหน้าห้องวิทยาศาสตร์ชั้น 3','Kid Pool ดำเนินการต่อได้ พร้อมเสนอปรับแบบ Shade และราวกันตก กำหนดแล้วเสร็จ 15/10/69','เอกสาร Payment ต้องอัปเดตตามผลงานจริง แนบแบบพื้นที่ ปริมาณตาม BOQ รูปถ่าย และเอกสารตรวจงาน EPCM','ให้ทยอยส่ง VO งานสถาปัตย์เมื่อแต่ละรายการแล้วเสร็จ และอัปเดต VO แยกตามระบบ','ช่วงปิดเทอม 17-25 ตุลาคม: เตรียม B2 ชั้น 1 และระบบ Fire Pump, Fire Alarm, AC ให้พร้อมใช้งาน พร้อมเก็บ Defect อาคาร B1-B3 ตามลำดับ','สัญญาหลัก YBT เลยกำหนด 76 วัน; กำหนดส่งมอบทั้งโครงการ 30/09/69 ยังรอแจ้งกำหนดใหม่','Grand Opening วันที่ 11/11/69 เหลือ 42 วัน']],
['เร่งรัดงานและติดตามผู้รับเหมา',['เทวาวณิชกิจ: รั้ว Main Gate ขอปรับแผนใหม่เป็น 30/10/69 และวันที่ 07/10/69 เชื่อมงานถนนกับภายนอก','งานทางเท้าเริ่ม 28/09/69; งานเติมดินและปรับดิน B2-B3 เริ่มแล้ว; งานเทคอนกรีต B1-B2 รอปรับแบบและเสนอราคา','YB: Drop-off ทรายล้างและทางลาดรอตรวจ; ประตูเหล็ก B1 รอแก้ไข; ฝ้าอะลูมิเนียม B1-B2 กำหนด 05/10/69','บ่อเก็บน้ำใต้ดิน: ซ่อมรอยร้าวคาดว่าเสร็จ 03/10/69, Third Party เข้าตรวจ 02/10/69 และงานสถาปัตย์คาดว่าเสร็จ 15/10/69','รั้ว Zone A หลังถังเก็บน้ำดำเนินการ 96%; Zone C ให้ทำแนวโค้งตามถนนโดยเว้นระยะขอบถนนถึงหน้าเสา 60 ซม.','Site Drain เร่งติดตั้งฝาบนถนนและเทฝาบ่อบนถนนให้เรียบ','ลิฟต์อาคาร 1 ทดสอบแล้ว; อาคาร 3 เทสระบบแล้วและรอแจ้งทดสอบ','ห้องเก็บแก๊ส B1 เลื่อนเป็น 03/10/69; ห้องเก็บแก๊ส B3 รอย้ายนั่งร้าน','Roof Drain เหลือ 2 หัว; Overflow ให้นำเสนอกล่องสเตนเลส; งานกันซึมดาดฟ้ารอยืนยันงานซ่อมพื้น','ห้องครัวรอตรวจรอบ 2; ช่อง Service และหน้า Hood ดำเนินการแล้วและเพิ่มกริลล์ระบายอากาศด้านหลัง','Counter ห้องน้ำเด็กเล็กติดตั้ง Mockup วันที่ 03-04/10/69; สี Texture รอเก็บรายละเอียด','Sewage 1 ติดตั้งปั๊มวันที่ 01/10/69 ใช้เวลา 3 วัน; ห้อง Heat Pump พร้อมใช้งาน','ลบมุมราวจับบันไดเลื่อนเป็น 03/10/69; ตรวจ Deflect อาคาร 1 และติดตั้ง HUB LINK ห้องซ้อมดนตรีอยู่ระหว่างดำเนินการ','อาคารห้องช่างกำหนดเทพื้น คสล. ภายนอกให้แล้วเสร็จ 100% วันที่ 03/10/69']],
['ข้อกำหนดเข้าพื้นที่และงานเสนอราคา',['YB ต้องมีหัวหน้างานควบคุม พร้อมทีมและเครื่องมือทำความสะอาดตลอดเวลาที่เข้าทำงาน','หลังเสร็จงานให้ถ่ายรูปพร้อมระบุพื้นที่ และส่งเอกสารเข้าพื้นที่ก่อน 15.00 น.','Renovate Workshop รวมพื้น Load หลังครัว เริ่มดำเนินการก่อนและรอ VE ระยะ 1.5 ม.','ราวกันตก Drop-off ส่งราคาแล้ว 09/09/69','ไฟถนน ไฟทางเดิน และไฟส่องผนังอาคาร 3 จุด 3 ด้าน รอเสนอราคา','งานบัวผนังเพิ่มเติมให้เริ่มดำเนินการได้']],
['ความปลอดภัยและอาชีวอนามัย',['ขนย้ายเศษวัสดุและขยะภายในอาคารและบันไดออกเป็นประจำ','จัดระเบียบพื้นที่กองวัสดุภายนอก แยกประเภทและกำหนดจุดจัดเก็บให้ชัดเจน','จัดแสงสว่างในพื้นที่ทำงานและทางเดินให้เพียงพอ และดูแลห้องน้ำให้สะอาดเพียงพอต่อแรงงาน','ตรวจสภาพนั่งร้าน จุดยืน จุดยึด และการผูกยึดกับอาคารทุกสัปดาห์','ติดตั้งและยึดผ้าใบกันฝุ่น ตาข่ายกันเศษวัสดุ ราวกันตก และริ้วขาวแดงในทุกพื้นที่เสี่ยงให้มั่นคง']],
['อัปเดตความก้าวหน้าที่ผ่านมา',['ไม่มีรายละเอียดเพิ่มเติมในต้นฉบับ']]
]},{no:40,date:'23/09/69',time:'10.00',location:'Onsite / Online',chairman:'EPCM',agendas:[
['รับรองรายงานการประชุมครั้งที่ 39',['ไม่มีแก้ไขรายงานการประชุมครั้งก่อน']],
['แจ้งเพื่อทราบและกำหนดการโครงการ',['แก้ไขรอยร้าวดาดฟ้า ดำเนินการระหว่างวันที่ 16/09/69 - 30/09/69 โดย YB ขอผลทดสอบคอนกรีตดาดฟ้าและรายการคำนวณเพิ่มเติม','Solar Roof รอดำเนินการ','พื้นที่จอดรถ SGS ต้องปรับพื้นที่ให้แล้วเสร็จภายใน 15/10/69','HOLD งานฝ้า 6 ห้อง: B2 Auditorium และ Lecture; B3 ห้องสมุด ห้องพยาบาล ห้องวิทยาศาสตร์ชั้น 2 และฝ้าหน้าห้องวิทยาศาสตร์ชั้น 3','Kid Pool ให้ดำเนินการต่อได้ โดยเสนอปรับแบบ Shade และราวกันตก','เอกสาร Payment ต้องอัปเดตตามผลงานจริง แนบแบบแสดงพื้นที่ ปริมาณตาม BOQ รูปถ่าย และเอกสารตรวจงาน EPCM','อัปเดต Progress, ตรวจ Deflect, ส่งมอบพื้นที่ และอัปเดต VO แยกตามระบบ','ให้เริ่มทยอยส่ง VO งานสถาปัตย์','ช่วงปิดเทอม 17-25 ตุลาคม: เตรียม B2 ชั้น 1 ให้พร้อมใช้งานทุกระบบ และเก็บ Defect อาคาร B1 ให้แล้วเสร็จ','สัญญาหลัก YBT เลยกำหนด 69 วัน; Owner กำหนดส่งมอบทั้งโครงการ 30/09/69 และรอกำหนดเลื่อนยืนยันกลับ','Grand Opening วันที่ 11/11/69 เหลือ 49 วัน']],
['เร่งรัดงานและติดตามผู้รับเหมา',['เทวาวณิชกิจ: รั้ว Main Gate ล่าช้า 6 วัน; งานทางเท้าและงานเติมดิน/ปรับดิน B2-B3 เริ่ม 28/09/69','เทวาวณิชกิจ: รอเสนอราคาปรับดินหลัง B1, เทพื้นคอนกรีต B1-B2 และปรับดินลงหินคลุกพื้นที่กองดินนอกโครงการ','YB: Drop-off ทรายล้างและทางลาดรอตรวจ; ตรวจงานภายนอก B1 วันที่ 28/09/69; ประตูเหล็กทางเข้า B1 รอแก้ไข','งานฝ้าอะลูมิเนียม B1-B2 กำหนด 05/10/69 และหลังคา Metal Sheet รอตรวจ','บ่อเก็บน้ำใต้ดิน: โครงสร้างแล้วเสร็จ 100%; ซ่อมรอยร้าวคาดว่าเสร็จ 27/09/69; งานสถาปัตย์คาดว่าเสร็จ 15/10/69 พร้อมเสนอวิธีตรวจรอยร้าวและทดสอบรั่ว','รั้ว Zone A หลังถังเก็บน้ำ 96%; Zone C แนวโรงเรียน 65% และพร้อมติดตั้งประตู','Site Drain เชื่อม Main แล้ว เร่งติดตั้งฝาบนถนน','ลิฟต์: อาคาร 1 ทดสอบแล้ว; อาคาร 3 เทสระบบแล้วและรอแจ้งทดสอบ','ห้องเก็บแก๊ส B1 พื้นโหลดสินค้ากำหนด 30/09/69; ห้องเก็บแก๊ส B3 ระหว่างดำเนินการ','Roof Drain เริ่มทยอยติดตั้ง; Overflow เสนอรูปแบบสเตนเลส 5x15 ซม.','งานกันซึมดาดฟ้าเร่งงานฉาบก่อน และรอ BDT ยืนยันเข้าดำเนินการ','งานครัว กระเบื้องผนังและประตูเลื่อนรอตรวจรอบ 2; ช่อง Service ห้องเย็นและหน้า Hood ระหว่างดำเนินการ','แก้ Counter ห้องน้ำเด็กเล็ก จัดทำแบบหรือ Mockup ภายใน 28/09/69','ปรับแสงห้องทำงาน ตรวจได้ประมาณ 800-1,200 ลักซ์ ปรับแล้วและเหลือ 2 ห้อง','Sewage 1 กำหนดเสร็จ 23/09/69; Heat Pump พร้อมใช้งาน 20/09/69','ประตูบานเลื่อนโหลดสินค้าหลังครัวและประตูเปิดวงเวียน เลื่อนนำเสนอเป็น 25/09/69','ตรวจ Deflect งานภายนอกอาคาร 1 และติดตั้ง HUB LINK ห้องซ้อมดนตรี 2 ห้อง อยู่ระหว่างดำเนินการ']],
['ข้อกำหนดเข้าพื้นที่และงานเสนอราคา',['YB ต้องมีหัวหน้างานควบคุมตลอด พร้อมทีมและเครื่องมือทำความสะอาด','หลังเสร็จงานให้ถ่ายรูปพร้อมระบุพื้นที่ และส่งเอกสารเข้าพื้นที่ก่อน 15.00 น.','Renovate Workshop รวมพื้น Load หลังครัว เริ่มดำเนินการก่อนและรอการยืนยัน','ราวกันตก Drop-off ส่งราคาแล้ว 09/09/69','ไฟถนน และไฟทางเดินพร้อมไฟส่องผนังอาคาร 3 จุด 3 ด้าน รอเสนอราคา']],
['ความปลอดภัยและอาชีวอนามัย',['ขนย้ายเศษวัสดุและขยะภายในอาคารและบันไดออกเป็นประจำ','จัดระเบียบพื้นที่กองวัสดุภายนอก แยกประเภทและกำหนดจุดจัดเก็บให้ชัดเจน','จัดแสงสว่างในพื้นที่ทำงานและทางเดินให้เพียงพอ และดูแลห้องน้ำให้สะอาดเพียงพอต่อแรงงาน','ตรวจสภาพนั่งร้าน จุดยืน จุดยึด และการผูกยึดกับอาคารทุกสัปดาห์','ติดตั้งผ้าใบกันฝุ่น ตาข่ายกันเศษวัสดุ ราวกันตก และริ้วขาวแดงในทุกพื้นที่เสี่ยงให้มั่นคง']],
['อัปเดตความก้าวหน้าที่ผ่านมา',['ไม่มีรายละเอียดเพิ่มเติมในต้นฉบับ']]
]},{no:39,date:'16/09/69',time:'10.00',location:'Onsite / Online',chairman:'EPCM',agendas:[
['รับรองรายงานการประชุมครั้งที่ 38',['ไม่มีรายการแก้ไขรายงานการประชุมครั้งก่อน']],
['กำหนดการและเรื่องแจ้งเพื่อทราบ',['ยื่น อ.5 อาคาร B2 และ B3 โดย YB เข้าตรวจสอบเบื้องต้นวันที่ 16/09/69','สัญญาหลัก YBT ครบกำหนด 16/07/69 และ Owner กำหนดส่งมอบทั้งโครงการ 30/09/69','Grand Opening วันที่ 11/11/69','BDT ตรวจสอบรอยร้าวแล้ว รอ Report และ Memo พร้อมผลทดสอบคอนกรีตและแบบโครงสร้าง','ปลายเดือนกันยายนเริ่มติดตั้งฐาน Solar Roof','พื้นที่จอดรถ SGS ต้องปรับพื้นที่เสร็จก่อน 15/10/69 เพื่อใช้งานวันที่ 29/11/69','HOLD งานฝ้า B2 Auditorium และ Lecture รวมถึง B3 ห้องสมุด ห้องพยาบาล ห้องวิทยาศาสตร์ และหน้าห้องวิทยาศาสตร์','Kid Pool รอยืนยันแบบ กำหนดยืนยัน 17/09/69','YB รื้อห้องน้ำชั่วคราวและย้ายถังเก็บน้ำไปพื้นที่จอดรถวันที่ 19/09/69','เอกสาร Payment ต้องแสดงเปอร์เซ็นต์จริง ปริมาณตาม BOQ รูปถ่ายพื้นที่ และเอกสารตรวจงาน EPCM']],
['งานเร่งด่วนและการติดตาม',['Drop-off รอทรายล้างเข้าพื้นที่','เทวาวณิชกิจเร่งถนนทางเข้า ทางเท้า งานเติมดินและปรับดินรอบ B1 B2 และ B3','งานสถาปัตย์ Drop-off ทางลาด งานภายนอก B1 ประตูเหล็ก และงานฝ้าอะลูมิเนียม','บ่อเก็บน้ำใต้ดินดำเนินการซ่อมร้าว ตรวจผิว และงานกันซึม กำหนดเสร็จ 20/09/69','รั้ว Zone A ระหว่างดำเนินการ และ Zone C รอดำเนินการต่อ','เร่งติดตั้งฝาระบายน้ำบนถนนหลัง Site Drain เชื่อม Main แล้ว','ลิฟต์ติดตั้งเสร็จและกำหนดทดสอบ 20/09/69','ห้องเก็บแก๊ส B1 หลัง Kitchen และ B3 หลังอาคาร รวมถึงพื้นโหลดสินค้า B1 กำหนด 30/09/69','Roof Drain เริ่มทยอยติดตั้ง และ Overflow เสนอรูปแบบสเตนเลสขนาด 5x15 ซม.','ตรวจห้องไฟฟ้าและห้อง IT พร้อมเปลี่ยนพื้น SPC','งานห้องครัว กระเบื้องผนัง ท่อน้ำดีเครื่องดักกลิ่น ช่อง Service ห้องเย็นและหน้า Hood','แก้ Counter ห้องน้ำเด็กเล็กและจัดทำแบบหรือ Mockup','Sewage 1 เริ่มดำเนินการ กำหนดเสร็จ 23/09/69','Heater Pump กำหนดพร้อมใช้งาน 20/09/69','เสนอประตูบานเลื่อนจุดโหลดสินค้าหลังครัวและประตูเปิดวงเวียนภายใน 20/09/69','ตรวจ Deflect งานภายนอกอาคาร B1']],
['งานเสนอราคาและประเด็นรออนุมัติ',['Renovate Workshop รวมพื้น Load หลังครัว เริ่มดำเนินการก่อนและรอการยืนยัน','ราวกันตก Drop-off','ไฟถนน','ไฟทางเดิน','ปรับดินหลัง B1','เทพื้นคอนกรีตและลงหินคลุกพื้นที่กองเก็บดินนอกโครงการ']],
['ความปลอดภัยและอาชีวอนามัย',['ขนย้ายเศษวัสดุและขยะภายในอาคารและบันไดเป็นประจำ','จัดระเบียบพื้นที่กองวัสดุภายนอกและแยกประเภทวัสดุให้ชัดเจน','จัดแสงสว่างในพื้นที่ทำงานและทางเดินให้เพียงพอ','ตรวจสภาพนั่งร้าน จุดยืน จุดยึด และการผูกยึดกับอาคารทุกสัปดาห์','ติดตั้งและยึดผ้าใบกันฝุ่นกับตาข่ายกันเศษวัสดุให้มั่นคง','ติดตั้งราวกันตกและริ้วขาวแดงในทุกพื้นที่เสี่ยง','ดูแลห้องน้ำให้สะอาดและมีจำนวนเพียงพอต่อแรงงาน']]
]}];
const actionItems=[
['งานแก้ไขรอยร้าวดาดฟ้า (นัดเข้าตรวจ)','BDT / YB / EPCM','03/11/69','26/11/69 (14.30-15.50 น.)',3,'กำลังดำเนินการ',49],
['รั้ว Main Gate (โครงสร้าง)','เทวาวณิชกิจ','30/10/69','27/11/69 (ไม่ทันแผน)',5,'เลื่อนกำหนด',49],
['งานทางเท้า · โครงสร้างและ Stamp','เทวาวณิชกิจ','25/10/69','27/11/69 (ไม่ทันแผน)',5,'เลื่อนกำหนด',49],
['ปรับดินเทพื้นหลัง B2, B3','เทวาวณิชกิจ','27/11/69','30/11/69',1,'เลื่อนกำหนด',49],
['ปรับพื้นที่จอดรถ SGS','เทวาวณิชกิจ','15/10/69','22/11/69 (บดอัดเสร็จ รอเก็บงาน)',2,'กำลังดำเนินการ',49],
['Drop-off · โครงสร้างและสถาปัตย์','YB','25/10/69','แจ้งนัดตรวจ',0,'กำลังดำเนินการ',49],
['ตรวจ Deflect ภายนอก B1','YB / EPCM','28/09/69','ตรวจรอบแรกแล้ว รอนัดตรวจรอบ 2',5,'กำลังดำเนินการ',49],
['ประตูหลังครัว (Hold มอเตอร์ไฟฟ้า)','YB','25/09/69','16/11/69',4,'เลื่อนกำหนด',49],
['ประตูเหล็กทางเข้า B1','YB','02/10/69','16/11/69',3,'เลื่อนกำหนด',49],
['ประตูวงเวียน (แก้ไขเสา)','YB','30/10/69','26/11/69 (13.00 น.)',3,'เลื่อนกำหนด',49],
['หลังคา Metal Sheet (สี + Flashing)','YB','ไม่ระบุ','28/11/69 (ขอเลื่อน)',2,'เลื่อนกำหนด',49],
['บ่อเก็บน้ำใต้ดิน / ห้องเครื่อง / ผิวสนาม ตีเส้น','YB','15/10/69','30/11/69',4,'เลื่อนกำหนด',49],
['รั้ว Zone A หลังถังเก็บน้ำ (เสริม Flat Bar)','YB','30/10/69','30/11/69 (คืบหน้า 96%)',4,'เลื่อนกำหนด',49],
['รั้ว Zone C แนวโรงแรม','YB','25/10/69','รอแจ้งรื้อแนวรั้วด้านหน้า',2,'กำลังดำเนินการ',49],
['งานระบบ Site Drain','YB','ไม่ระบุ','แก้ไขระดับสนามหญ้า -0.10 ม. / รอระดับ B3',1,'กำลังดำเนินการ',49],
['งานลิฟต์ · ปล่องลิฟต์','YB / ผู้รับเหมาลิฟต์','15/10/69','ยังไม่ได้เริ่มดำเนินการ',3,'เลื่อนกำหนด',49],
['ห้องเก็บแก๊ส B3 หลังอาคาร','YB','30/10/69','25/11/69 เหลือประตูและทาสี',2,'กำลังดำเนินการ',49],
['Overflow กล่องสเตนเลส','YB','30/10/69','ทยอยติดตั้งแล้ว',0,'กำลังดำเนินการ',49],
['งานกันซึมดาดฟ้า','YB / EPCM','ไม่ระบุ','รอยืนตรวจและยืนยันงานซ่อมพื้น',0,'กำลังดำเนินการ',49],
['ห้องครัว · ประตูบานเลื่อน','YB','21/10/69','27/11/69 นัดตรวจ',4,'เลื่อนกำหนด',49],
['Counter ห้องน้ำเด็กเล็ก','YB','03-04/10/69','23/11/69 ประเมินแล้วเสร็จ',4,'เสร็จแล้ว',49],
['สี Texture','YB','25/10/69','27/11/69 นัดตรวจทั้งหมด (ตรวจแล้ว 1 แผง)',4,'กำลังดำเนินการ',49],
['Sewage 1 · Test Start Up','ทีมงานระบบ','03/10/69','07/11/69 แล้วเสร็จ',5,'เสร็จแล้ว',49],
['Heat Pump · พัดลมดูดอากาศ','ทีมงานระบบ','12/10/69','14/11/69 ติดตั้งแล้ว',3,'เสร็จแล้ว',49],
['อาคารห้องช่าง / แก๊สหลังครัว ทางเดินโรงแรม','เทวาวณิชกิจ','03/10/69','20/12/69',4,'เลื่อนกำหนด',49],
['บานประตู Acoustic','YB / Supplier','31/10/69','05/12/69',3,'เลื่อนกำหนด',49],
['บานประตู Service ห้องปั๊ม Kid Pool','YB','ไม่ระบุ','ติดตั้งแล้ว รอเก็บรายละเอียด',0,'กำลังดำเนินการ',49],
['ประตูห้องคนพิการ (ขยาย 0.90 ม.)','YB','ไม่ระบุ','ปรับบานแล้ว รอติดลามิเนต',0,'กำลังดำเนินการ',49],
['Kid Pool (แกรนิต ราวกันตก หลังคา Poly)','YB','15/10/69','26/11/69 นัดตรวจ',2,'กำลังดำเนินการ',49],
['ราวกันตกเหล็ก B3','YB','08/11/69','30/11/69 รวมราวจับ',3,'เลื่อนกำหนด',49],
['งานดาดฟ้า + โถงบันไดดาดฟ้า','YB / EPCM','09/11/69','แจ้งนัดตรวจครั้งที่ 2',1,'กำลังดำเนินการ',49],
['ส่งมอบพื้นที่ B1 ให้โรงเรียนใช้งานชั่วคราว','YB / EPCM','28/11/69','28-29/11/69',0,'กำลังดำเนินการ',49],
['เตรียมความพร้อมรับรอง VIP เยี่ยมชมอาคาร','ทุกฝ่าย','30/11/69','30/11/69',0,'กำลังดำเนินการ',49],
['VO งานระบบ EE (ไฟถนน)','YB / EPCM','ไม่ระบุ','448,619 บาท exvat (ต่อรองแล้ว)',0,'เสร็จแล้ว',49],
['VO งานสถาปัตย์ 9 รายการ','YB / EPCM','ไม่ระบุ','4,624,895.16 บาท exvat',0,'เสร็จแล้ว',49],
['ค่าปรับส่งมอบงานล่าช้า YBT (132 วัน)','Owner / YBT','16/07/69','สะสม 10,956,000 บาท (83,000 บ./วัน)',132,'เลื่อนกำหนด',49]
];
const monthlyReports=[
{year:2026,month:10,monthLabel:'ตุลาคม 2569',title:'Monthly Report · October 2026',reportDate:'31/10/69',pages:29,file:'assets/monthly-report-2026-10.pdf'},
{year:2026,month:8,monthLabel:'สิงหาคม 2569',title:'Monthly Report · August 2026',reportDate:'20/08/69',pages:45,file:'assets/monthly-report-2026-08.pdf'}
];

// Additional Project Mappings and Metadata
const contractorAliases={'AUSY Constructions Co., Ltd.':'บริษัท ออสซี่ คอนสตรัคชั่นส์ จำกัด','AUSY CONSTRUCTIONS CO., LTD.':'บริษัท ออสซี่ คอนสตรัคชั่นส์ จำกัด','บริษัท ชิลด์เทค เซอร์วิส (ประเทศไทย) จำกัด':'SHIELD TECH','SHIELDTECH SERVICE (THAILAND) COMPANY LIMITED':'SHIELD TECH','YAAI BOA KARNCHANG CO., LTD.':'บริษัท ยายบัวการช่าง จำกัด','KITCHEN DESIGN AND CONSULTANTS COMPANY LIMITED':'Kitchen Design and Consultant Co.,Ltd.','Kitchen Design and Consultant Co., Ltd.':'Kitchen Design and Consultant Co.,Ltd.','ALSTON INTERNATIONAL CO., LTD.':'บริษัท อัลสตัน อินเตอร์เนชั่นแนล จำกัด','PORSOR.ARCHITECTS CO., LTD.':'บริษัท พศ.สถาปนิก จำกัด','EXTRA BIG SALES COMPANY LIMITED':'บริษัท เอ๊กซ์ตร้า บิ๊ก เซลส์ จำกัด','S.F. INSULATION CO., LTD.':'บริษัท เอส.เอฟ.อินซูเลชั่น จำกัด','THEWAWANICHAKIT COMPANY LIMITED':'บริษัท เทวาวณิชกิจ จำกัด'};
const canonicalContractorName=name=>contractorAliases[name]||name;

const meetingAttendance={49:{file:'assets/meeting-49-attendance.jpg',count:9},48:{file:'assets/meeting-48-attendance.jpg',count:9},47:{file:'assets/meeting-47-attendance.jpg',count:9},45:{file:'assets/meeting-45-attendance.jpg',count:7},43:{file:'assets/meeting-43-attendance.jpg',count:11},42:{file:'assets/meeting-42-attendance.jpg',count:9},41:{file:'assets/meeting-41-attendance.jpg',count:9},40:{file:'assets/meeting-40-attendance.jpg',count:10},39:{file:'assets/meeting-39-attendance.jpg'}};
const meetingDocuments={49:{file:'assets/weekly-meeting-49-25-11-69.pdf',pages:8},48:{file:'assets/weekly-meeting-48-18-11-69.pdf',pages:8},47:{file:'assets/weekly-meeting-47-11-11-69.pdf',pages:7},46:{file:'assets/weekly-meeting-46-04-11-69.pdf',pages:7},45:{file:'assets/weekly-meeting-45-28-10-69.pdf',pages:7},43:{file:'assets/weekly-meeting-43-14-10-69.pdf',pages:7},42:{file:'assets/weekly-meeting-42-07-10-69.pdf',pages:5},41:{file:'assets/weekly-meeting-41-30-09-69.pdf',pages:6}};

const epcmWorkItems=[
['1','Progress','Update Progress โครงการ','','','', '',null,''],
['','','AR Architectural Works','Petch','Boss','Normal','In Progress',90,'Meeting #49'],['','','ST Structural Work','Petch','','Normal','Closed',100,''],['','','EE Electrical Works','Kreng','','Normal','In Progress',90,''],['','','SN Sanitary System','Kreng','','Normal','In Progress',98,''],['','','FF Fire Fighting System','Kreng','','Normal','In Progress',100,''],['','','AC Air Conditioning System','Kreng','','Normal','In Progress',90,''],
['2','External Work','Update Progress โครงการ','','','','',null,''],
['','','ซ่อมรอยร้าวดาดฟ้า','Boss','Petch','Critical','In Progress',50,'YBT นัดตรวจ 26/11/69'],['','','Site Drain','Boss','','Critical','In Progress',85,'แก้ไขระดับสนามหญ้า -0.10m'],['','','รั้ว','Boss','Petch','Critical','In Progress',80,'Zone A 96% นัด 30/11 · Zone C รอรื้อแนวหน้า'],['','','ถนน','Boss','','High','In Progress',80,'Main Gate/ทางเท้า 27/11 ไม่ทันแผน'],['','','ทางเดิน สนาม','Boss','','Normal','In Progress',40,'SGS บดอัดแล้วเสร็จ 22/11'],
['3','As-built','แบบ ASBUILD โครงการ','','','','',null,''],['','','AR Architectural Works','Petch','Boss','Normal','Waiting Contractor',35,''],['','','ST Structural Work','Petch','Boss','Normal','Waiting Contractor',0,''],['','','EE Electrical Works','Kreng','','Normal','Waiting Contractor',0,''],['','','SN Sanitary System','Kreng','','Normal','Waiting Contractor',0,''],['','','FF Fire Fighting System','Kreng','','Normal','Waiting Contractor',0,''],['','','AC Air Conditioning System','Kreng','','Normal','Waiting Contractor',0,''],
['4','VO','สรุปงานเพิ่ม-ลด จากสัญญา','','','','',null,''],['','','AR Architectural Works','Petch','Boss','High','In Progress',50,'สรุป 9 รายการ 4.62M exvat'],['','','SN Sanitary System','Kreng','','Critical','Waiting Contractor',100,''],['','','FF Fire Fighting System','Kreng','','Critical','Waiting Contractor',100,''],['','','AC Air Conditioning System','Kreng','','Critical','Waiting Contractor',100,''],['','','EE Electrical Works','Kreng','','Critical','In Progress',100,'สรุปไฟถนน 448K exvat'],
['5','Inspection','Request ตรวจงาน','','','','',null,''],['','','AR Architectural Works','Petch','Boss','Normal','Ongoing',null,''],['','','ST Civil / Structure & EXTERNAL','Boss','Pech','Normal','Ongoing',null,''],['','','Mechanical, Electrical & Plumbing','Kreng','','Normal','Ongoing',null,''],
['6','Defect','Defect / Punch List','','','','',null,''],['','','AR Architectural Works','Petch','Boss','High','Ongoing',40,'นัด Deflect รอบ 2 B1'],['','','Mechanical, Electrical & Plumbing','Kreng','','High','Ongoing',70,'ติดตาม T&C และ Defect'],
['7','TENDER','งานออกแบบใหม่ / แบบเสนอราคา','Petch','Boss','Normal','Ongoing',0,''],
['8','T&C','Testing & Commissioning','','','','',null,''],['','','EE Electrical Works','Kreng','','High','',35,''],['','','SN Sanitary System','Kreng','','High','',35,''],['','','FF Fire Fighting System','Kreng','','High','',35,''],['','','AC Air Conditioning System','Kreng','','High','',35,''],
['9','Handover','Drawing / As-built','','','','',null,''],['','','รวบรวม Drawing / As-built','Petch','','High','In Progress',0,''],['','','AR Architectural Works','Petch','Boss','Normal','Waiting Contractor',10,''],['','','ST Structural Work','Petch','Boss','Normal','In Progress',50,''],['','','EE Electrical Works','Kreng','','Normal','Waiting Contractor',0,''],['','','SN Sanitary System','Kreng','','Normal','Waiting Contractor',0,''],['','','FF Fire Fighting System','Kreng','','Normal','Waiting Contractor',0,''],['','','AC Air Conditioning System','Kreng','','Normal','Waiting Contractor',0,''],
['10','Handover','เอกสาร RFI RFA','','','','',null,''],['','','AR Architectural Works','Petch','','High','In Progress',50,''],['','','ST Structural Work','Petch','Boss','High','In Progress',80,''],['','','Mechanical, Electrical & Plumbing','Kreng','','High','In Progress',0,''],
['11','Handover','O&M / Warranty / Certificate','','','','',null,''],['','','EE Electrical Works','Kreng','','Normal','Waiting Contractor',0,''],['','','SN Sanitary System','Kreng','','Normal','Waiting Contractor',0,''],['','','FF Fire Fighting System','Kreng','','Normal','Waiting Contractor',0,''],['','','AC Air Conditioning System','Kreng','','Normal','Waiting Contractor',0,''],['','','AR Architectural Works','Petch','Boss','Normal','',0,''],['','','ST Structural Work','Boss','','Normal','',0,'']
];