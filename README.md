# Glenalmond Phuket · Executive EPCM Control Dashboard

ระบบติดตาม บริหาร และควบคุมโครงการก่อสร้างระดับผู้บริหาร **Glenalmond Phuket International School**  
ควบคุมโครงการโดย: **West Coast Engineering Co., Ltd. (WCE)**

---

## 🌟 จุดเด่นของการออกแบบใหม่ (Executive Modern Redesign)

1. **Executive Design System**:
   - ธีมสีหรูหราทรงเกียรติสไตล์โรงเรียนนานาชาติอังกฤษ (**Deep Royal Navy `#0b2345` & Champagne Gold `#c5a869`**)
   - Typography ระดับสากล: ใช้ฟอนต์ **Cinzel** สำหรับหัวข้อระดับสูง, **Plus Jakarta Sans** สำหรับเนื้อหาและระบบ UI, และ **JetBrains Mono** สำหรับตัวเลขทางการเงิน
   - โลโก้ Glenalmond Phuket ในกรอบคอนทราสต์คมชัด พร้อม Badge แสดงสถานะโครงการ
2. **Interactive Data Visualization**:
   - **Executive Dashboard**: รวม 4 การ์ดสรุป KPI หลัก (Overall Progress 93.5%, Project Value ฿316.76M, Certified ฿285.04M, Paid ฿277.16M)
   - **S-Curve Chart**: กราฟแสดงเส้นแผนงาน (Plan 100.0%) เทียบกับผลงานจริง (Actual 93.5%) พร้อมระบุจำนวนวันล่าช้าชัดเจน
   - **Financial Breakdown**: หลอดสรุปการเงิน 3 สี (ชำระแล้ว, วางบิลแล้ว, รอวางบิล)
   - **7-Day Manpower Proportion**: กราฟแท่งแสดงสัดส่วนแรงงานรายวันย้อนหลัง 7 วัน พร้อมปุ่มกรองดูแยกตามรายชื่อผู้รับเหมาได้ทันที
   - **Live Status Pulse**: ไฟกระพริบสีเขียวแสดงสถานะความเคลื่อนไหวข้อมูลแบบเรียลไทม์
3. **ครบถ้วนทุกโมดูลงาน (13 Views)**:
   - **Overview**: Executive Dashboard, S-Curve Report แบบเต็ม
   - **Contractors & Site**: Manpower รายวัน (เลือกดูย้อนหลังได้ 51 วัน), Contractor Progress (Accordion Card), Contractor Directory (ข้อมูลจดทะเบียน DBD, ทุนจดทะเบียน, ที่ตั้ง)
   - **Financials**: Payment & Billing Tracker (กรองตามผู้รับเหมาและสถานะเบิกจ่าย), Cost Summary
   - **Project Control**: Weekly Progress Meetings (#39 - #45 พร้อมลิงก์เปิด PDF รายงานและภาพใบลงชื่อ), Action Item Tracker (สรุปงานเร่งรัดและจำนวนครั้งที่เลื่อน), Monthly Progress Reports
   - **Engineering & QA**: EPCM Work Status (11 หมวดงานหลัก พร้อมระบบระบุผู้รับผิดชอบ Petch, Boss, Kreng), Drawing / As-Built Register, Defect & Punch List
4. **ความเข้ากันได้ 100%**:
   - ไม่มี Dependencies ภายนอกที่หนักหรือเสี่ยงพัง ทำงานด้วย Vanilla HTML5, CSS3, ES6 JavaScript
   - รองรับการเปิดดูแบบ **Local File (`file:///`)** บนเครื่อง หรืออัปโหลดขึ้น **GitHub Pages** ได้ทันทีโดยไม่ต้องตั้งค่าเซิร์ฟเวอร์ใดๆ

---

## 📂 โครงสร้างโฟลเดอร์ (File Architecture)

```
epcm-phuket/
├── index.html                  # หน้าแดชบอร์ดหลักที่ผ่านการดีไซน์ใหม่ระดับพรีเมียม
├── index.original.html         # ไฟล์ต้นฉบับดั้งเดิม (สำรองไว้ 100%)
├── README.md                   # เอกสารคู่มือโปรเจกต์
└── assets/
    ├── style.css               # Executive Luxury Design System (CSS)
    ├── app.js                  # View Controller, Charts & Interactivity (JS)
    ├── epcm-data.js            # ฐานข้อมูลโครงการทั้งหมด (Data Model)
    ├── payment-data.js         # ข้อมูลการเงินและการชำระเงินรายงวด
    ├── scurve-data.js          # ข้อมูลเส้นกราฟ S-Curve
    ├── Glenalmond_SCurve_Report.html # รายงาน S-Curve แบบเจาะลึก
    ├── glenalmond-phuket-logo.png    # โลโก้โรงเรียน Glenalmond Phuket
    ├── S-Curve_International_School_Phuket_latest.xlsx # ไฟล์ Excel ล่าสุด
    ├── monthly-report-*.pdf    # รายงานประจำเดือน PDF
    ├── weekly-meeting-*.pdf    # รายงานการประชุมประจำสัปดาห์ PDF
    └── meeting-*-attendance.jpg# ภาพถ่ายใบลงชื่อผู้เข้าประชุม
```

---

## 🚀 วิธีการนำขึ้น GitHub & เปิดใช้งาน GitHub Pages

### วิธีที่ง่ายที่สุด (ผ่านหน้าเว็บ GitHub)
1. เข้าไปที่ [GitHub](https://github.com) และเข้าสู่ระบบ
2. กดปุ่ม **New** (สร้าง Repository ใหม่)
3. ตั้งชื่อ Repository เช่น `epcm-phuket` (เลือกเป็น **Public** เพื่อใช้ GitHub Pages ฟรี หรือ Private ก็ได้)
4. ในหน้า Repository กดปุ่ม **uploading an existing file**
5. ลากไฟล์และโฟลเดอร์ทั้งหมดในโปรเจกต์นี้ไปปล่อย แล้วกด **Commit changes**
6. เปิดใช้เว็บไซต์ฟรี:
   - ไปที่แท็บ **Settings** ของ Repository
   - เมนูด้านซ้ายเลือก **Pages**
   - ในส่วน Branch ให้เลือก `main` (หรือ `master`) โฟลเดอร์ `/ (root)` แล้วกด **Save**
   - รอประมาณ 1-2 นาที คุณจะได้ URL เว็บไซต์ เช่น `https://<your-username>.github.io/epcm-phuket/` ที่สามารถเปิดใช้งานได้จากทุกที่ทั่วโลก!
