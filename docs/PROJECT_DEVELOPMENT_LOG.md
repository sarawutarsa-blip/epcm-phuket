# โครงการ Glenalmond Phuket International School — บันทึกประวัติและสรุปการพัฒนา (Project & Chat Log)

> **รหัสการสนทนา (Conversation ID):** [fe03e7bf-3fff-4231-90f9-f552a24b2c0b](conversation://fe03e7bf-3fff-4231-90f9-f552a24b2c0b)  
> **ที่อยู่โปรเจกต์ (Workspace Path):** `C:\Users\HP OMEN 16\.gemini\antigravity\scratch\epcm-phuket`  
> **GitHub Repository:** [https://github.com/sarawutarsa-blip/epcm-phuket](https://github.com/sarawutarsa-blip/epcm-phuket)  
> **Live Web (GitHub Pages):** [https://sarawutarsa-blip.github.io/epcm-phuket/](https://sarawutarsa-blip.github.io/epcm-phuket/)  
> **Google Sheet Tracker:** [Glenalmond Phuket - Payment Tracker](https://docs.google.com/spreadsheets/d/1qKr7ahiBiUv4iDS02g96w1D7N1O8lJf44z1U0vo4gMA/edit)

---

## 📌 สรุปลำดับเหตุการณ์และคำสั่งทั้งหมดใน Chat นี้

### 1. การดึงระบบเดิมและติดตั้งโครงสร้าง Git (Milestone 1)
- **ความต้องการ**: ดึงข้อมูลและไฟล์ทั้งหมดจาก `https://epcm-phuket.sarawutarsa.chatgpt.site/` มาไว้ในเครื่อง เพื่อเตรียมย้ายขึ้น GitHub
- **การดำเนินการ**:
  - ดาวน์โหลดไฟล์ต้นฉบับครบถ้วน พร้อมสำรองไฟล์เดิมไว้ที่ `index.original.html`
  - ติดตั้งสภาพแวดล้อม Git แบบพกพา (MinGit) บนเครื่อง Windows โดยไม่ต้องติดตั้งโปรแกรมเพิ่ม
  - เชื่อมต่อ GitHub REST API สร้าง Remote Repository: `sarawutarsa-blip/epcm-phuket`
  - ผลักดันโค้ดขึ้น GitHub และเปิดระบบ GitHub Pages ออนไลน์ทันที

### 2. ปรับโฉมหน้าตา Dashboard สไตล์ผู้บริหาร (Milestone 2)
- **ความต้องการ**: ปรับดีไซน์ให้ดูสวยงาม เรียบหรู อ่านง่าย และดูเป็นมืออาชีพระดับ Executive
- **การดำเนินการ**:
  - ปรับธีมเป็น **Luxury Dark Navy & Warm Gold**
  - แยกโครงสร้างโค้ดเป็นระบบโมดูลาร์: `index.html`, `assets/style.css`, `assets/app.js`, `assets/epcm-data.js`
  - ทำ Router 13 มุมมอง (Dashboard, S-Curve, Manpower, Contractor Progress, Payment, Cost Summary, Meetings ฯลฯ)

### 3. นำเข้าข้อมูล Manpower จากรูปถ่ายหน้างาน 11 วัน (Milestone 3)
- **ความต้องการ**: อัปเดตข้อมูลกำลังพลประจำวันจากภาพถ่ายรายงาน 11 รูป (13/11/69 ถึง 23/11/69)
- **การดำเนินการ**:
  - ถอดรหัส OCR ภาพถ่ายตารางยอดแรงงานทั้ง 11 วัน
  - บันทึกลงใน `manpowerHistory` ขยายฐานข้อมูลย้อนหลังสะสมรวมเป็น 62 วันต่อเนื่อง

### 4. ปรับจูนระบบฟอนต์และช่องไฟตัวเลข (Typography Fine-Tuning)
- **ความต้องการ**: ฟอนต์ตัวเลขห่างและโดดแปลกๆ ปรับให้กระชับและไม่สะเปะสะปะ
- **การดำเนินการ**:
  - ตัดฟอนต์ Monospace (`JetBrains Mono`) และฟอนต์หัวเรื่อง (`Cinzel`) ออก
  - รวมศูนย์ฟอนต์ทั้งระบบเป็น **Plus Jakarta Sans** (สากล/ตัวเลข) + **IBM Plex Sans Thai** (ภาษาไทย)
  - กำหนด `font-variant-numeric: tabular-nums` ทำให้ตัวเลขในตารางเรียงตรงหลักสวยงามและช่องไฟกระชับเป็นธรรมชาติ

### 5. เชื่อมต่อระบบแก้ไขค่างวดผ่าน Google Sheets (Milestone 4)
- **ความต้องการ**: ต้องการตรวจสอบและแก้ไขยอดค่างวดหรือสถานะการจ่ายเงินจาก Google Sheets เพื่อความสะดวกในการทำงานร่วมกัน
- **การดำเนินการ**:
  - สร้าง Git Tag: `v1.0-static-baseline` เป็นจุดย้อนกลับอย่างปลอดภัย
  - ติดตั้งปลั๊กอิน Google Sheets อย่างเป็นทางการ
  - สร้าง Google Sheet ในบัญชี `sarawutarsa@gmail.com` ชื่อ `Glenalmond Phuket - Payment Tracker`
  - นำเข้าข้อมูลค่างวด 167 แถว พร้อมจัดระเบียบหัวตารางและตรึงแถวบน
  - เขียนโมดูล Live Google Sheets Sync ใน `assets/app.js` รองรับการดึงข้อมูลสดผ่าน CSV Feed พร้อมระบบ Fallback ป้องกันเว็บพัง

### 6. กู้คืนและอัปเกรดกราฟแนวโน้ม Manpower ภาพรวม (Milestone 5)
- **ความต้องการ**: ดึงกราฟ Manpower แนวโน้มภาพรวมกลับมาแสดงผล
- **การดำเนินการ**:
  - สร้างคอมโพเนนต์ `renderManpowerTrendChart()` แสดงเส้นแนวโน้มย้อนหลังสะสมครบทั้ง 62 วัน
  - เพิ่มปุ่มสลับช่วงเวลา 7 วัน / 14 วัน / 30 วัน / ทั้งหมด
  - แสดงเส้นประสีทองค่าเฉลี่ย (Average Line) และสถิติ สูงสุด / เฉลี่ย / ต่ำสุด / ล่าสุด
  - แสดงผลควบคู่กับกราฟแท่งสัดส่วน 7 วันล่าสุด ทั้งในหน้า Executive Dashboard และ Manpower

---

## 🛠 วิธีเปิดโฟลเดอร์นี้เป็น Active Workspace ใน Antigravity / IDE
1. ไปที่เมนูด้านบนของโปรแกรม: **File ➔ Open Folder... (เปิดโฟลเดอร์)**
2. เลือกไปที่โฟลเดอร์:  
   `C:\Users\HP OMEN 16\.gemini\antigravity\scratch\epcm-phuket`
3. กด **Select Folder (เลือกโฟลเดอร์)**
4. IDE จะเปิดโฟลเดอร์นี้ขึ้นมาเป็น Workspace หลัก และบทสนทนาจะเชื่อมโยงเข้ากับโปรเจกต์นี้โดยตรง
