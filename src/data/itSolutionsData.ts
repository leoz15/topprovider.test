export type SolutionCategoryTab =
  | 'All Solutions'
  | 'Hospital Information System'
  | 'Healthcare Software'
  | 'Enterprise ERP'
  | 'Smart Healthcare'
  | 'Digital Transformation'
  | 'Medical Equipment'
  | 'Network & Infrastructure';

export const SOLUTION_CATEGORY_TABS: SolutionCategoryTab[] = [
  'All Solutions',
  'Hospital Information System',
  'Healthcare Software',
  'Enterprise ERP',
  'Smart Healthcare',
  'Digital Transformation',
  'Medical Equipment',
  'Network & Infrastructure',
];

export type DomainPillId =
  | 'printing'
  | 'hardware'
  | 'software'
  | 'network'
  | 'medical'
  | 'iot';

export const DOMAIN_PILLS: { id: DomainPillId; label: string }[] = [
  { id: 'printing', label: 'Printing & Supply Solution' },
  { id: 'hardware', label: 'Hardware Solution' },
  { id: 'software', label: 'Software Solution' },
  { id: 'network', label: 'Network Solution' },
  { id: 'medical', label: 'Medical Equipment' },
  { id: 'iot', label: 'Smart Solution (IoT)' },
];

export interface DeepDiveBlock {
  badge: string;
  heading: string;
  paragraphs: string[];
  bullets: string[];
  mockupVariant: 'primary' | 'workflow' | 'analytics';
}

export interface ITSolutionProduct {
  id: string;
  number: string;
  name: string;
  sidebarLabel: string;
  category: string;
  subBadge: string;
  filterCategories: SolutionCategoryTab[];
  domainPill: DomainPillId;
  shortDescription: string;
  thaiDescription: string;
  fullDescription: string;
  features: string[];
  keyBenefits: string[];
  browserUrl: string;
  featuredInHealthcareSection?: boolean;
  deepDiveSection1: DeepDiveBlock;
  deepDiveSection2: DeepDiveBlock;
  relatedIds: string[];
}

export const IT_SOLUTION_PRODUCTS: ITSolutionProduct[] = [
  {
    id: 'vitanix-claim',
    number: '01',
    name: 'Vitanix Claim',
    sidebarLabel: 'Vitanix Claim (Panacea Claim)',
    category: 'Hospital Claim Management',
    subBadge: 'Healthcare Software',
    filterCategories: ['All Solutions', 'Healthcare Software', 'Hospital Information System'],
    domainPill: 'software',
    shortDescription:
      'Hospital claim management and claim tracking platform designed to validate healthcare data, streamline claim workflows, and monitor reimbursement statuses in real time.',
    thaiDescription:
      'ระบบบริหารจัดการข้อมูลการเคลมค่ารักษาพยาบาล ช่วยให้โรงพยาบาลติดตามสถานะการส่งเคลม ตรวจสอบข้อมูล และบริหารจัดการรายการเคลมได้อย่างเป็นระบบ',
    fullDescription:
      'Vitanix Claim คือแพลตฟอร์มบริหารจัดการการเคลมค่ารักษาพยาบาลแบบครบวงจร รองรับการตรวจสอบความถูกต้องของข้อมูลล่วงหน้า (Pre-Audit) การติดตามสถานะการส่งเคลมแยกตามกองทุนสิทธิการรักษา และแดชบอร์ดวิเคราะห์ข้อมูลการเบิกจ่ายแบบเรียลไทม์',
    features: [
      'Claim Management',
      'Claim Status Tracking',
      'Claim Data Validation',
      'Healthcare Data Management',
      'Claim Dashboard',
    ],
    keyBenefits: [
      'ตรวจสอบความครบถ้วนของข้อมูล 16 แฟ้มและเงื่อนไขกองทุนก่อนส่งเคลม',
      'ติดตามสถานะ Total, Pending, Approved และ Rejected Claims แบบ Real-time',
      'ลดความซ้ำซ้อนในการตรวจสอบเอกสารระหว่างแผนกเวชระเบียนและการเงิน',
    ],
    browserUrl: 'Topprovider.co.th / Vitanix Claim',
    featuredInHealthcareSection: true,
    deepDiveSection1: {
      badge: 'PRE-AUDIT & CLAIM TRACKING',
      heading: 'Automated Healthcare Claim Validation & Real-Time Status Control',
      paragraphs: [
        'ระบบ Vitanix Claim ออกแบบมาเพื่อช่วยให้ทีมเวชระเบียนและฝ่ายการเงินของโรงพยาบาลสามารถบริหารจัดการข้อมูลการเคลมทุกกองทุนได้ในหน้าจอเดียว ตั้งแต่การดึงข้อมูลจากระบบ HIS การตรวจสอบรหัสโรคและหัตถการ ไปจนถึงการส่งข้อมูลเข้าสู่ระบบกองทุนสุขภาพ',
        'ด้วยระบบ Pre-Audit อัจฉริยะที่ช่วยแจ้งเตือนรายการที่ข้อมูลไม่ครบถ้วนหรือติดเงื่อนไข C กองทุนล่วงหน้า ช่วยให้เจ้าหน้าที่สามารถแก้ไขข้อมูลได้อย่างถูกต้องก่อนส่งเบิกจริง',
      ],
      bullets: [
        'Total, Pending, Approved & Rejected Claims Dashboard',
        'Pre-Audit Verification for 16-File Standard & Fund Rules',
        'Multi-Fund Claim Tracking (OP-CR, IPD, PPFS, Social Security)',
      ],
      mockupVariant: 'primary',
    },
    deepDiveSection2: {
      badge: 'REIMBURSEMENT ANALYTICS',
      heading: 'Why Hospital Financial Teams Choose Vitanix Claim?',
      paragraphs: [
        'ลดภาระงานเอกสารที่ซับซ้อนด้วยการเชื่อมโยงข้อมูลการรักษาและรายการยา-เวชภัณฑ์เข้ากับเกณฑ์การเบิกจ่ายโดยตรง พร้อมระบบรายงานวิเคราะห์แนวโน้มการเคลมแยกตามแผนกและสิทธิการรักษาอย่างละเอียด',
      ],
      bullets: [
        'Real-Time Claim Status Table with Instant Error Highlighting',
        'Automated REP & STM Reconciliation Workflow',
        'Seamless API Integration with Hospital Information Systems (HIS)',
      ],
      mockupVariant: 'analytics',
    },
    relatedIds: ['panacea-his', 'frontback-his', 'emr-smart-document'],
  },
  {
    id: 'panacea-his',
    number: '02',
    name: 'Panacea Plus Hospital Solution (HIS)',
    sidebarLabel: 'Panacea Plus HIS',
    category: 'Hospital Information System',
    subBadge: 'Core Hospital Platform',
    filterCategories: ['All Solutions', 'Hospital Information System', 'Healthcare Software'],
    domainPill: 'software',
    shortDescription:
      'Integrated hospital information system supporting clinical operations, patient records, outpatient/inpatient workflows, and hospital management.',
    thaiDescription:
      'ระบบบริหารจัดการข้อมูลและกระบวนการทำงานภายในโรงพยาบาล เชื่อมโยงข้อมูลการให้บริการและสนับสนุนการทำงานของบุคลากรทางการแพทย์',
    fullDescription:
      'Panacea Plus Hospital Solution (HIS) ระบบสารสนเทศโรงพยาบาลแบบบูรณาการที่เชื่อมโยงทุกจุดบริการตั้งแต่เวชระเบียน ผู้ป่วยนอก (OPD) ผู้ป่วยใน (IPD) ห้องฉุกเฉิน ห้องยา ห้องปฏิบัติการ (LIS) รังสีวิทยา (PACS) และการเงินเข้าด้วยกันบนฐานข้อมูลเดียว',
    features: [
      'Hospital Information Management',
      'Patient Information',
      'Hospital Workflow',
      'Medical Service Management',
      'Hospital Dashboard',
    ],
    keyBenefits: [
      'เชื่อมโยงข้อมูลผู้ป่วยและกระบวนการทำงานทุกแผนกแบบไร้รอยต่อ',
      'รองรับมาตรฐานการแลกเปลี่ยนข้อมูลสุขภาพ HL7 / FHIR และระบบความปลอดภัยระดับองค์กร',
      'มีหน้าจอ Hospital Operational Dashboard สำหรับผู้บริหารและหัวหน้าแผนก',
    ],
    browserUrl: 'Topprovider.co.th / Panacea Plus HIS',
    featuredInHealthcareSection: true,
    deepDiveSection1: {
      badge: 'END-TO-END HOSPITAL WORKFLOW',
      heading: 'Unified Hospital Information System for Modern Healthcare',
      paragraphs: [
        'Panacea Plus HIS ทำหน้าที่เป็นหัวใจหลักของโรงพยาบาลในการเชื่อมโยงข้อมูลการรักษาพยาบาลตั้งแต่ก้าวแรกที่ผู้ป่วยลงทะเบียน คัดกรองสัญญาณชีพ เข้าพบแพทย์ สั่งจ่ายยา ส่งตรวจทางห้องปฏิบัติการ ไปจนถึงการชำระเงินและส่งเคลม',
        'สถาปัตยกรรมระบบออกแบบให้รองรับทั้งรูปแบบ On-Premise และ Cloud SaaS ช่วยให้แพทย์ พยาบาล เภสัชกร และเจ้าหน้าที่ทุกฝ่ายเข้าถึงข้อมูลที่ถูกต้องตรงกันแบบเรียลไทม์',
      ],
      bullets: [
        'Comprehensive OPD, IPD, ER & Medical Record Modules',
        'Integrated CPOE (Computerized Physician Order Entry) & Pharmacy',
        'Lab (LIS) & Radiology (RIS/PACS) Seamless Data Exchange',
      ],
      mockupVariant: 'primary',
    },
    deepDiveSection2: {
      badge: 'OPERATIONAL INTELLIGENCE',
      heading: 'How Panacea Plus Elevates Hospital Operations?',
      paragraphs: [
        'ผู้บริหารและทีมงานสามารถติดตามภาพรวมการให้บริการของโรงพยาบาล ระยะเวลารอคอยของผู้ป่วยแต่ละแผนก และสถิติการใช้บริการผ่านแดชบอร์ดกลาง เพื่อนำข้อมูลไปวางแผนบริหารทรัพยากรได้อย่างเหมาะสม',
      ],
      bullets: [
        'Real-Time Department Overview & Patient Flow Monitoring',
        'Role-Based Access Control & Audit Trail Compliance',
        'Modular Architecture Ready for Smart Hospital Expansion',
      ],
      mockupVariant: 'analytics',
    },
    relatedIds: ['vitanix-claim', 'smart-emr-tablet', 'ipd-round-ward'],
  },
  {
    id: 'smart-emr-tablet',
    number: '03',
    name: 'Smart EMR Tablet & Mobile Patients',
    sidebarLabel: 'EMR Tablet & Mobile',
    category: 'Electronic Medical Record',
    subBadge: 'Healthcare Software',
    filterCategories: ['All Solutions', 'Healthcare Software', 'Smart Healthcare'],
    domainPill: 'software',
    shortDescription:
      'Mobile electronic medical record solution enabling healthcare professionals to access patient information, vital signs, and clinical documentation on tablets.',
    thaiDescription:
      'ระบบสนับสนุนการใช้งานข้อมูลทางการแพทย์ผ่าน Tablet และ Mobile Interface ช่วยให้บุคลากรทางการแพทย์เข้าถึงข้อมูลผู้ป่วยและบันทึกข้อมูลได้อย่างสะดวก',
    fullDescription:
      'Smart EMR Tablet & Mobile Patients ยกระดับการทำงานของแพทย์และพยาบาลสู่โรงพยาบาลไร้กระดาษ (Paperless Hospital) ให้บุคลากรทางการแพทย์เปิดดูประวัติการรักษา ผลแล็บ สัญญาณชีพ และบันทึกการตรวจรักษาผ่าน Tablet ข้างเตียงผู้ป่วยได้ทันที พร้อมระบบ Mobile Patient Portal สำหรับผู้รับบริการ',
    features: [
      'Electronic Medical Record',
      'Tablet Medical Interface',
      'Patient Data Management',
      'Mobile Healthcare Workflow',
      'Medical Documentation',
    ],
    keyBenefits: [
      'แพทย์และพยาบาลเข้าถึงเวชระเบียนและผลตรวจข้างเตียงผู้ป่วยได้ทันทีผ่าน Tablet',
      'รองรับการเขียนบันทึกด้วยปากกา Stylus การแนบภาพถ่ายแผล และการลงลายมือชื่ออิเล็กทรอนิกส์',
      'ซิงค์ข้อมูลเข้าสู่ฐานข้อมูล HIS กลางแบบ Real-time ลดการคัดลอกข้อมูลซ้ำ',
    ],
    browserUrl: 'Topprovider.co.th / Smart EMR Tablet',
    featuredInHealthcareSection: true,
    deepDiveSection1: {
      badge: 'POINT-OF-CARE MOBILITY',
      heading: 'Point-of-Care Tablet EMR for Doctors & Clinical Teams',
      paragraphs: [
        'ออกแบบ UI/UX สำหรับการใช้งานบนหน้าจอสัมผัสของ Tablet โดยเฉพาะ ช่วยให้แพทย์และพยาบาลสามารถเปิดดู Patient Profile, ประวัติการแพ้ยา, กราฟสัญญาณชีพ (Vital Signs), ผลตรวจทางห้องปฏิบัติการ และบันทึก Progress Note ได้อย่างรวดเร็วขณะตรวจเยี่ยมผู้ป่วย',
        'ลดการถือแฟ้มกระดาษและลดความคลาดเคลื่อนจากการอ่านลายมือ พร้อมระบบยืนยันตัวตนผู้ป่วยด้วยการสแกนบาร์โค้ดสายรัดข้อมือ',
      ],
      bullets: [
        'Patient Profile, Allergy Alert & Active Medication Timeline',
        'Interactive Vital Signs Charting & Stylus Clinical Drawing',
        'Digital Consent Form & Electronic Signature Capture',
      ],
      mockupVariant: 'primary',
    },
    deepDiveSection2: {
      badge: 'CONNECTED PATIENT EXPERIENCE',
      heading: 'Why Point-of-Care Mobile EMR Matters?',
      paragraphs: [
        'นอกจากฝั่งบุคลากรทางการแพทย์แล้ว ระบบยังเชื่อมโยงกับ Mobile Interface สำหรับผู้ป่วยในการตรวจสอบนัดหมาย ดูคิวรับบริการ และเข้าถึงข้อมูลสุขภาพส่วนบุคคลอย่างปลอดภัย',
      ],
      bullets: [
        'Instant Synchronization with Core HIS & EMR Document Repository',
        'Bedside Barcode Verification for Medication Safety',
        'Responsive Tablet & Mobile Layout Optimized for Clinical Wards',
      ],
      mockupVariant: 'analytics',
    },
    relatedIds: ['ipd-round-ward', 'emr-smart-document', 'smart-appointment'],
  },
  {
    id: 'frontback-his',
    number: '04',
    name: 'FrontBackProject / HIS',
    sidebarLabel: 'FrontBackProject / HIS',
    category: 'Hospital Information System',
    subBadge: 'Hospital Front & Back Office',
    filterCategories: ['All Solutions', 'Hospital Information System', 'Enterprise ERP'],
    domainPill: 'software',
    shortDescription:
      'Hospital information management system connecting front-office patient services with back-office administration.',
    thaiDescription:
      'ระบบบริหารจัดการสารสนเทศโรงพยาบาลที่เชื่อมโยงงานบริการผู้ป่วยส่วนหน้า (Front Office) เข้ากับระบบบริหารจัดการส่วนหลัง (Back Office) อย่างครบวงจร',
    fullDescription:
      'FrontBackProject / HIS ผสานการทำงานของจุดบริการผู้ป่วยส่วนหน้า (ลงทะเบียน, คัดกรอง, ห้องตรวจ, ห้องยา, การเงิน) เข้ากับระบบบริหารทรัพยากรส่วนหลัง (คลังยาและเวชภัณฑ์, จัดซื้อ, บัญชีการเงิน, งบประมาณ) เพื่อให้ข้อมูลการรักษาและข้อมูลต้นทุนเชื่อมโยงกันโดยอัตโนมัติ',
    features: [
      'Front-Office Patient Registration & Queue',
      'Clinical Billing & Cashier Integration',
      'Pharmacy & Medical Supply Inventory Sync',
      'Back-Office Accounting & Cost Center Link',
      'Hospital Executive Summary Dashboard',
    ],
    keyBenefits: [
      'ข้อมูลการสั่งใช้ยาและเวชภัณฑ์ที่จุดบริการตัดสต็อกและลงบัญชีส่วนหลังอัตโนมัติ',
      'ลดความคลาดเคลื่อนในการกระทบยอดรายได้ค่ารักษาพยาบาลประจำวัน',
      'ตรวจสอบสถานะการทำงานตั้งแต่จุดรับผู้ป่วยไปจนถึงฝ่ายบริหารได้ในระบบเดียว',
    ],
    browserUrl: 'Topprovider.co.th / FrontBackProject HIS',
    deepDiveSection1: {
      badge: 'SEAMLESS FRONT-TO-BACK INTEGRATION',
      heading: 'Bridging Clinical Front-Office Care with Back-Office Control',
      paragraphs: [
        'ปัญหาสำคัญของโรงพยาบาลหลายแห่งคือระบบหน้าบ้าน (HIS) และระบบหลังบ้าน (ERP/Inventory) แยกขาดจากกัน ทำให้ต้องคีย์ข้อมูลซ้ำและกระทบยอดตัวเลขไม่ตรงกัน',
        'FrontBackProject / HIS ถูกพัฒนาขึ้นเพื่อให้ทุกธุรกรรมที่เกิดขึ้นหน้าห้องตรวจ ห้องยา และห้องการเงิน ส่งข้อมูลเชื่อมโยงไปยังระบบคลังเวชภัณฑ์และบัญชีการเงินแบบอัตโนมัติ',
      ],
      bullets: [
        'Unified Patient Visit, Billing & Receipt Processing',
        'Automated Lot/Expiry Tracking for Pharmacy & Medical Supplies',
        'Real-Time Revenue & Department Cost Allocation',
      ],
      mockupVariant: 'primary',
    },
    deepDiveSection2: {
      badge: 'UNIFIED DATA GOVERNANCE',
      heading: 'How FrontBackProject Streamlines Hospital Workflows?',
      paragraphs: [
        'ช่วยให้ทั้งทีมบุคลากรทางการแพทย์และทีมสนับสนุนหลังบ้านทำงานบนฐานข้อมูลเดียวกัน ลดขั้นตอนการส่งเอกสารระหว่างแผนกและเพิ่มความโปร่งใสในการตรวจสอบข้อมูล',
      ],
      bullets: [
        'Automated Daily Cashier Closing & Financial Reconciliation',
        'Smart Reorder Point Alerts for Critical Hospital Supplies',
        'Standardized Data Structure Across Clinical & Admin Teams',
      ],
      mockupVariant: 'analytics',
    },
    relatedIds: ['panacea-his', 'sap-erp-backoffice', 'erp-back-office'],
  },
  {
    id: 'emr-smart-document',
    number: '05',
    name: 'EMR Smart Document',
    sidebarLabel: 'EMR Smart Document',
    category: 'Healthcare Document Management',
    subBadge: 'Digital Transformation',
    filterCategories: ['All Solutions', 'Digital Transformation', 'Healthcare Software'],
    domainPill: 'software',
    shortDescription:
      'Digital document management system for medical records and hospital documentation.',
    thaiDescription:
      'ระบบบริหารจัดการเอกสารทางการแพทย์และเวชระเบียนอิเล็กทรอนิกส์ รองรับการจัดเก็บ สแกน ค้นหา และลงนามเอกสารดิจิทัลภายในโรงพยาบาล',
    fullDescription:
      'EMR Smart Document ช่วยเปลี่ยนเอกสารกระดาษในโรงพยาบาล เช่น ใบยินยอมรับการรักษา (Consent Form), เวชระเบียนย้อนหลัง, ผลตรวจจากภายนอก และเอกสารรับรองแพทย์ ให้เป็นเอกสารดิจิทัลที่จัดหมวดหมู่อย่างเป็นระบบ ค้นหาง่าย และเชื่อมโยงกับ HN/AN ของผู้ป่วยโดยตรง',
    features: [
      'Medical Record Scanning & OCR Indexing',
      'Digital Consent Form & e-Signature',
      'HN / AN Document Folder Structure',
      'Document Version & Audit Log Control',
      'Fast Full-Text & Barcode Document Search',
    ],
    keyBenefits: [
      'ลดพื้นที่จัดเก็บแฟ้มเวชระเบียนกระดาษและลดเวลาในการค้นหาแฟ้มประวัติเดิม',
      'รองรับการสแกนเอกสารพร้อมอ่านบาร์โค้ด HN/AN เพื่อจัดเข้าแฟ้มผู้ป่วยอัตโนมัติ',
      'กำหนดสิทธิ์การเข้าถึงและตรวจสอบประวัติการเปิดดูเอกสารตามมาตรฐานความปลอดภัยข้อมูล',
    ],
    browserUrl: 'Topprovider.co.th / EMR Smart Document',
    deepDiveSection1: {
      badge: 'PAPERLESS MEDICAL ARCHIVE',
      heading: 'Intelligent Medical Document Management & e-Consent Platform',
      paragraphs: [
        'EMR Smart Document ช่วยให้โรงพยาบาลจัดการเอกสารทางการแพทย์ทุกประเภทในรูปแบบดิจิทัล ตั้งแต่การสร้างแบบฟอร์มอิเล็กทรอนิกส์ การลงลายมือชื่อดิจิทัลของผู้ป่วยและแพทย์ ไปจนถึงการสแกนเอกสารเดิมเข้าสู่ระบบด้วย Barcode/OCR',
        'เอกสารทุกฉบับจะถูกผูกเข้ากับหมายเลขผู้ป่วย (HN) และลำดับการเข้ารับบริการ (VN/AN) ทำให้แพทย์สามารถเปิดดูเอกสารประกอบการรักษาได้ทันทีจากหน้าจอ HIS',
      ],
      bullets: [
        'Automated Barcode & OCR Classification by HN / AN / Document Type',
        'Custom Digital Medical Forms & Pad/Tablet e-Signature Support',
        'High-Speed Document Viewer with Annotation & Print Watermark',
      ],
      mockupVariant: 'primary',
    },
    deepDiveSection2: {
      badge: 'SECURITY & COMPLIANCE',
      heading: 'Why Digitize Hospital Documentation with EMR Smart Document?',
      paragraphs: [
        'ปกป้องข้อมูลสำคัญของผู้ป่วยด้วยการเข้ารหัสและการกำหนดสิทธิ์การเข้าถึงตามบทบาทหน้าที่ (Role-Based Access) พร้อมบันทึก Audit Log ทุกครั้งที่มีการเปิดดูหรือดาวน์โหลดเอกสาร',
      ],
      bullets: [
        'PDPA & Healthcare Information Security Compliant Storage',
        'Direct Integration with Vitanix Claim for Supporting Claim Documents',
        'Zero Lost Charts & Instant Multi-Department Access',
      ],
      mockupVariant: 'analytics',
    },
    relatedIds: ['smart-emr-tablet', 'vitanix-claim', 'panacea-his'],
  },
  {
    id: 'sap-erp-backoffice',
    number: '06',
    name: 'Back Office (SAP ERP)',
    sidebarLabel: 'Back Office (SAP - ERP)',
    category: 'Enterprise ERP',
    subBadge: 'Enterprise Resource Planning',
    filterCategories: ['All Solutions', 'Enterprise ERP', 'Digital Transformation'],
    domainPill: 'software',
    shortDescription:
      'Enterprise resource planning solution for finance, procurement, inventory, and administrative operations.',
    thaiDescription:
      'โซลูชันเชื่อมต่อและบริหารจัดการงานหลังบ้านระดับองค์กร (SAP ERP Integration) ครอบคลุมระบบบัญชีการเงิน การจัดซื้อจัดจ้าง คลังพัสดุ และการบริหารงบประมาณ',
    fullDescription:
      'Back Office (SAP ERP) รองรับการบริหารจัดการทรัพยากรองค์กรระดับ Enterprise และการเชื่อมต่อข้อมูลระหว่างระบบสารสนเทศโรงพยาบาล (HIS) เข้ากับระบบ SAP ERP อย่างเป็นมาตรฐาน ช่วยให้การบริหารบัญชีแยกประเภท (GL), เจ้าหนี้ (AP), ลูกหนี้ (AR), การจัดซื้อ และคลังพัสดุมีความถูกต้องแม่นยำ',
    features: [
      'SAP ERP Financial & GL Integration',
      'Procurement & Purchase Order Workflow',
      'Warehouse & Medical Inventory Control',
      'Account Payable (AP) & Receivable (AR)',
      'Budget Planning & Cost Center Analytics',
    ],
    keyBenefits: [
      'เชื่อมต่อข้อมูลรายได้และต้นทุนจากระบบบริการเข้าสู่ SAP ERP โดยไม่ต้องคีย์ซ้ำ',
      'ควบคุมงบประมาณและกระบวนการอนุมัติจัดซื้อจัดจ้างตามระเบียบขององค์กร',
      'รายงานสถานะทางการเงินและมูลค่าคงคลังแบบเรียลไทม์สำหรับผู้บริหาร',
    ],
    browserUrl: 'Topprovider.co.th / Back Office SAP ERP',
    deepDiveSection1: {
      badge: 'ENTERPRISE RESOURCE PLANNING',
      heading: 'Enterprise-Grade Financial, Procurement & SAP ERP Integration',
      paragraphs: [
        'ออกแบบมาสำหรับโรงพยาบาลและองค์กรขนาดใหญ่ที่ต้องการมาตรฐานการบริหารจัดการระดับสากล ระบบรองรับการเชื่อมต่อข้อมูลธุรกรรมทางการเงิน รายได้ค่ารักษาพยาบาล และการตัดจ่ายพัสดุเวชภัณฑ์เข้าสู่โมดูล FI/CO และ MM ของ SAP ERP อย่างราบรื่น',
        'มีหน้าจอตรวจสอบสถานะการซิงค์ข้อมูล (Interface Monitor) พร้อมระบบตรวจสอบความถูกต้องของรหัสบัญชีและ Cost Center อัตโนมัติ',
      ],
      bullets: [
        'Automated Journal Voucher Posting (GL / AP / AR)',
        'End-to-End Purchase Requisition (PR) to Purchase Order (PO) Tracking',
        'Real-Time Budget Availability Checking & Cost Center Reporting',
      ],
      mockupVariant: 'primary',
    },
    deepDiveSection2: {
      badge: 'EXECUTIVE FINANCIAL VISIBILITY',
      heading: 'How SAP ERP Integration Strengthens Organization Governance?',
      paragraphs: [
        'ลดระยะเวลาในการปิดงบการเงินประจำเดือนและประจำปี พร้อมให้ข้อมูลวิเคราะห์ต้นทุนต่อหน่วยงานที่แม่นยำ เพื่อสนับสนุนการตัดสินใจเชิงกลยุทธ์ของผู้บริหารระดับสูง',
      ],
      bullets: [
        'Real-Time Interface Dashboard & Data Validation Logs',
        'Multi-Branch & Multi-Department Financial Consolidation',
        'Audit-Ready Compliance & Internal Control Workflows',
      ],
      mockupVariant: 'analytics',
    },
    relatedIds: ['erp-back-office', 'frontback-his', 'panacea-his'],
  },
  {
    id: 'ipd-round-ward',
    number: '07',
    name: 'IPD Round Ward',
    sidebarLabel: 'IPD Round Ward',
    category: 'Hospital Management',
    subBadge: 'Smart Healthcare',
    filterCategories: ['All Solutions', 'Smart Healthcare', 'Hospital Information System'],
    domainPill: 'software',
    shortDescription:
      'Inpatient ward management system supporting medical staff during ward rounds and patient care.',
    thaiDescription:
      'ระบบบริหารจัดการหอผู้ป่วยในและสนับสนุนการราวน์วอร์ดของแพทย์และพยาบาล แสดงผังเตียง ข้อมูลสัญญาณชีพ คำสั่งการรักษา และการบริหารยาผู้ป่วยใน',
    fullDescription:
      'IPD Round Ward ช่วยให้ทีมแพทย์และพยาบาลบริหารจัดการหอผู้ป่วยใน (Inpatient Department) ได้อย่างมีประสิทธิภาพ แสดงผังเตียงอัจฉริยะ (Smart Bed Map) สถานะผู้ป่วยแต่ละเตียง บันทึก Doctor Order, Progress Note, Nurse Note และตารางการให้ยา (e-MAR) อย่างครบถ้วน',
    features: [
      'Interactive Ward & Smart Bed Map',
      'Doctor Round Note & CPOE Order Entry',
      'Electronic Medication Administration (e-MAR)',
      'Nursing Care Plan & Shift Handover',
      'Discharge Summary & Home Medication Flow',
    ],
    keyBenefits: [
      'เห็นภาพรวมสถานะเตียงว่าง เตียงครอง และระดับความรุนแรงของผู้ป่วยในแต่ละหอผู้ป่วยทันที',
      'ลดความคลาดเคลื่อนในการคัดลอกคำสั่งแพทย์ (Doctor Order) สู่พยาบาลและห้องยา',
      'สนับสนุนการส่งเวรพยาบาล (Shift Handover) ด้วยข้อมูลที่ครบถ้วนและเป็นปัจจุบัน',
    ],
    browserUrl: 'Topprovider.co.th / IPD Round Ward',
    deepDiveSection1: {
      badge: 'INPATIENT CARE & WARD MANAGEMENT',
      heading: 'Digital Ward Rounds & Inpatient Care Coordination',
      paragraphs: [
        'IPD Round Ward เปลี่ยนการราวน์วอร์ดแบบเดิมให้เป็นดิจิทัลเต็มรูปแบบ แพทย์สามารถเปิดดูข้อมูลแนวโน้มสัญญาณชีพ ผลตรวจแล็บล่าสุด และสั่งการรักษา (One Day / Continue Order) ได้ทันทีที่ข้างเตียงผู้ป่วย',
        'คำสั่งการรักษาของแพทย์จะถูกส่งต่อไปยังหน้าจอของพยาบาลประจำหอผู้ป่วยและห้องยาผู้ป่วยในทันที ช่วยลดเวลารอคอยยาและเพิ่มความปลอดภัยในการดูแลผู้ป่วย',
      ],
      bullets: [
        'Visual Ward Census & Real-Time Bed Occupancy Dashboard',
        'One-Day & Continuous Doctor Order Sheet with Allergy Check',
        'Barcode-Verified e-MAR & Vital Signs Flowsheet',
      ],
      mockupVariant: 'primary',
    },
    deepDiveSection2: {
      badge: 'PATIENT SAFETY & NURSING WORKFLOW',
      heading: 'Why Inpatient Wards Rely on IPD Round Ward?',
      paragraphs: [
        'ช่วยให้พยาบาลบริหารตารางกิจกรรมการพยาบาลและการให้ยาผู้ป่วยแต่ละเตียงได้อย่างแม่นยำ มีระบบแจ้งเตือนเมื่อถึงเวลาวัดสัญญาณชีพหรือให้ยาตามคำสั่งแพทย์',
      ],
      bullets: [
        'Structured SBAR Nursing Handover & Care Plan Tracking',
        'Early Warning Score (MEWS/NEWS) Automatic Calculation',
        'Streamlined Discharge Planning & Bed Turnover Coordination',
      ],
      mockupVariant: 'analytics',
    },
    relatedIds: ['smart-emr-tablet', 'panacea-his', 'health-scheduling'],
  },
  {
    id: 'smart-appointment',
    number: '08',
    name: 'Smart Appointment Online',
    sidebarLabel: 'Smart Appointment Online',
    category: 'Healthcare Digital Service',
    subBadge: 'Smart Healthcare',
    filterCategories: ['All Solutions', 'Smart Healthcare', 'Healthcare Software'],
    domainPill: 'software',
    shortDescription:
      'Online appointment booking and scheduling platform for patients and hospitals.',
    thaiDescription:
      'แพลตฟอร์มการนัดหมายแพทย์และจองคิวรับบริการออนไลน์สำหรับผู้ป่วยและโรงพยาบาล ลดความแออัดและยกระดับประสบการณ์ผู้รับบริการยุคดิจิทัล',
    fullDescription:
      'Smart Appointment Online ช่วยให้ผู้ป่วยสามารถตรวจสอบตารางออกตรวจของแพทย์ เลือกวันและเวลานัดหมาย เลื่อนนัด และรับการแจ้งเตือนล่วงหน้าผ่านช่องทางออนไลน์ (Web / LINE OA / Mobile) โดยเชื่อมต่อกับตารางนัดหมายในระบบ HIS ของโรงพยาบาลโดยตรง',
    features: [
      '24/7 Online Doctor Appointment Booking',
      'Clinic & Specialty Slot Management',
      'Automated SMS / LINE Appointment Reminders',
      'Pre-Registration & Digital Queue Check-in',
      'No-Show Analytics & Capacity Optimization',
    ],
    keyBenefits: [
      'ผู้ป่วยจองคิวและเลือกเวลานัดหมายล่วงหน้าได้ด้วยตนเองตลอด 24 ชั่วโมง',
      'ลดอัตราการผิดนัด (No-Show) ด้วยระบบแจ้งเตือนนัดหมายและการเตรียมตัวก่อนตรวจอัตโนมัติ',
      'กระจายปริมาณผู้ป่วยในแต่ละช่วงเวลา ลดความแออัดบริเวณโถงผู้ป่วยนอก',
    ],
    browserUrl: 'Topprovider.co.th / Smart Appointment Online',
    deepDiveSection1: {
      badge: 'DIGITAL PATIENT FRONT DOOR',
      heading: 'Seamless Online Appointment Booking & Patient Queue Experience',
      paragraphs: [
        'มอบความสะดวกสบายให้แก่ผู้รับบริการตั้งแต่อยู่ที่บ้าน ผู้ป่วยสามารถค้นหาคลินิกเฉพาะทาง ดูตารางเวลาว่างของแพทย์ และทำการจองนัดหมายออนไลน์ได้ในไม่กี่คลิก พร้อมรับบัตรนัดดิจิทัลและคำแนะนำการเตรียมตัวก่อนพบแพทย์ (เช่น การงดน้ำงดอาหารก่อนเจาะเลือด)',
        'สำหรับเจ้าหน้าที่โรงพยาบาล ระบบมีหน้าจอบริหารจัดการโควตานัดหมายแต่ละคลินิก สามารถอนุมัติหรือปรับเปลี่ยนตารางนัดได้อย่างยืดหยุ่น',
      ],
      bullets: [
        'Real-Time Doctor Slot Availability Synced with Hospital HIS',
        'Automated Appointment Confirmation & Pre-Visit Instructions',
        'QR Code Fast-Track Check-In at Hospital Self-Service Kiosks',
      ],
      mockupVariant: 'primary',
    },
    deepDiveSection2: {
      badge: 'OPD FLOW OPTIMIZATION',
      heading: 'How Smart Appointment Transforms Outpatient Services?',
      paragraphs: [
        'ช่วยให้โรงพยาบาลคาดการณ์ปริมาณผู้ป่วยล่วงหน้าในแต่ละวันได้อย่างแม่นยำ สามารถจัดสรรจำนวนแพทย์ พยาบาล และห้องตรวจได้อย่างเหมาะสมกับความต้องการจริง',
      ],
      bullets: [
        'Multi-Channel Access via Web Portal, Mobile App & LINE Official',
        'Wait-Time Reduction & Balanced Clinic Utilization',
        'Comprehensive Appointment & Attendance Analytics',
      ],
      mockupVariant: 'analytics',
    },
    relatedIds: ['health-scheduling', 'smart-emr-tablet', 'panacea-his'],
  },
  {
    id: 'cms-platform',
    number: '09',
    name: 'CMS',
    sidebarLabel: 'CMS',
    category: 'Content Management System',
    subBadge: 'Digital Transformation',
    filterCategories: ['All Solutions', 'Digital Transformation', 'Healthcare Software'],
    domainPill: 'software',
    shortDescription:
      'Content management system for managing digital content, announcements, and web information.',
    thaiDescription:
      'ระบบบริหารจัดการเนื้อหาเว็บไซต์ ข่าวสาร บทความสุขภาพ และประชาสัมพันธ์ดิจิทัลสำหรับโรงพยาบาลและองค์กร',
    fullDescription:
      'CMS (Enterprise Content Management System) แพลตฟอร์มบริหารจัดการเนื้อหาเว็บไซต์และสื่อประชาสัมพันธ์ดิจิทัลขององค์กรและโรงพยาบาล รองรับการจัดการข้อมูลแพ็กเกจตรวจสุขภาพ ทำเนียบแพทย์ บทความความรู้สุขภาพ ข่าวสารกิจกรรม และแบนเนอร์ประชาสัมพันธ์ได้อย่างสะดวกและปลอดภัย',
    features: [
      'Visual Page & Health Content Editor',
      'Doctor Directory & Medical Center Profiles',
      'Health Checkup Package & Promotion Manager',
      'Multi-Language (TH / EN) Content Support',
      'SEO, PDPA Cookie Consent & Security Publishing',
    ],
    keyBenefits: [
      'ทีมประชาสัมพันธ์และการตลาดสามารถอัปเดตข่าวสารและแบนเนอร์ได้ทันทีโดยไม่ต้องเขียนโค้ด',
      'มีโครงสร้างข้อมูลเฉพาะสำหรับโรงพยาบาล เช่น ข้อมูลศูนย์การแพทย์และตารางแพทย์ออกตรวจ',
      'รองรับการแสดงผลแบบ Responsive ทุกหน้าจอ พร้อมระบบอนุมัติเนื้อหาก่อนเผยแพร่',
    ],
    browserUrl: 'Topprovider.co.th / Enterprise CMS',
    deepDiveSection1: {
      badge: 'DIGITAL CORPORATE COMMUNICATION',
      heading: 'Modern Content Management System for Healthcare & Enterprise Portals',
      paragraphs: [
        'ระบบ CMS ออกแบบมาเพื่อให้องค์กรและสถานพยาบาลสามารถบริหารจัดการเว็บไซต์หลักและช่องทางสื่อสารดิจิทัลได้อย่างคล่องตัว มีเครื่องมือจัดหน้าและแก้ไขเนื้อหาที่ใช้งานง่าย รองรับการอัปโหลดรูปภาพ วิดีโอ และเอกสารดาวน์โหลดอย่างเป็นระบบ',
        'มาพร้อมโมดูลเฉพาะทางสำหรับธุรกิจสุขภาพ เช่น ระบบค้นหาแพทย์ (Find a Doctor) ข้อมูลศูนย์การแพทย์ และแพ็กเกจโปรโมชั่นสุขภาพ',
      ],
      bullets: [
        'Intuitive Drag-and-Drop Content Blocks & Media Library',
        'Role-Based Publishing Workflow (Draft, Review, Approve, Publish)',
        'Integrated SEO Meta Management & Analytics Tracking',
      ],
      mockupVariant: 'primary',
    },
    deepDiveSection2: {
      badge: 'ENTERPRISE SECURITY & SCALABILITY',
      heading: 'Why Choose Our Enterprise CMS Platform?',
      paragraphs: [
        'พัฒนาด้วยสถาปัตยกรรมที่เน้นความเร็วในการโหลดหน้าเว็บและความมั่นคงปลอดภัยทางไซเบอร์ รองรับการเชื่อมต่อกับระบบนัดหมายออนไลน์และระบบ CRM ขององค์กร',
      ],
      bullets: [
        'Built-in PDPA Consent Banner & Privacy Policy Management',
        'High-Performance CDN Caching & Responsive Layout Engine',
        'API-Ready Headless & Traditional Publishing Modes',
      ],
      mockupVariant: 'analytics',
    },
    relatedIds: ['smart-appointment', 'e-learning', 'health-scheduling'],
  },
  {
    id: 'e-learning',
    number: '10',
    name: 'E-Learning',
    sidebarLabel: 'E-Learning',
    category: 'Learning Management System',
    subBadge: 'Digital Transformation',
    filterCategories: ['All Solutions', 'Digital Transformation', 'Smart Healthcare'],
    domainPill: 'software',
    shortDescription:
      'Digital learning platform for training, education, and knowledge management.',
    thaiDescription:
      'แพลตฟอร์มการเรียนรู้ออนไลน์และบริหารจัดการการฝึกอบรมบุคลากร (LMS) สำหรับการพัฒนาทักษะบุคลากรทางการแพทย์และองค์กร',
    fullDescription:
      'E-Learning (Learning Management System) ระบบบริหารจัดการการฝึกอบรมและการเรียนรู้ออนไลน์ครบวงจร สนับสนุนการจัดหลักสูตรปฐมนิเทศพนักงานใหม่ การอบรมมาตรฐานวิชาชีพทางการแพทย์ (CME/CNEU) คลังวิดีโอองค์ความรู้ ระบบสอบวัดผลออนไลน์ และการออกใบประกาศนียบัตรดิจิทัล',
    features: [
      'Interactive Video Courses & SCORM Support',
      'Online Examination & Quiz Assessment Engine',
      'Staff Training Roadmap & Competency Tracking',
      'Continuing Medical/Nursing Education (CME/CNEU)',
      'Automated Digital Certificate Generation',
    ],
    keyBenefits: [
      'บุคลากรสามารถเข้าเรียนและทบทวนบทเรียนได้ทุกที่ทุกเวลาผ่านคอมพิวเตอร์และมือถือ',
      'ฝ่ายทรัพยากรบุคคลและฝ่ายวิชาการติดตามความคืบหน้าการอบรมและผลสอบได้แบบเรียลไทม์',
      'ลดต้นทุนการจัดอบรมในห้องประชุมและสร้างคลังความรู้ดิจิทัลที่ยั่งยืนภายในองค์กร',
    ],
    browserUrl: 'Topprovider.co.th / E-Learning LMS',
    deepDiveSection1: {
      badge: 'KNOWLEDGE & TRAINING PLATFORM',
      heading: 'Comprehensive Learning Management System for Healthcare & Enterprise',
      paragraphs: [
        'ในองค์กรด้านสุขภาพและเทคโนโลยี การพัฒนาทักษะบุคลากรอย่างต่อเนื่องเป็นสิ่งสำคัญ ระบบ E-Learning ช่วยให้ฝ่ายพัฒนาบุคลากรสามารถสร้างหลักสูตรออนไลน์ จัดหมวดหมู่ตามสายวิชาชีพ และกำหนดหลักสูตรบังคับประจำปีได้อย่างเป็นระบบ',
        'รองรับสื่อการสอนหลากหลายรูปแบบทั้งวิดีโอสตรีมมิ่ง เอกสารประกอบการเรียน บทเรียนอินเทอร์แอคทีฟ และคลังข้อสอบสุ่มอัตโนมัติ',
      ],
      bullets: [
        'Role-Based Learning Paths for Doctors, Nurses & Staff',
        'Pre-Test / Post-Test Evaluation & Instant Score Analytics',
        'Live Webinar Integration & Attendance Recording',
      ],
      mockupVariant: 'primary',
    },
    deepDiveSection2: {
      badge: 'COMPETENCY & COMPLIANCE TRACKING',
      heading: 'How E-Learning Accelerates Organization Capability?',
      paragraphs: [
        'มีแดชบอร์ดสรุปผลการอบรมรายบุคคลและรายแผนก ช่วยให้การเตรียมข้อมูลเพื่อรับรองคุณภาพโรงพยาบาล (HA / JCI) และมาตรฐาน ISO เป็นเรื่องง่ายและตรวจสอบได้ทันที',
      ],
      bullets: [
        'Automated Training Record Sync with HR Profile',
        'Hospital Accreditation (HA) Mandatory Training Reports',
        'Engaging Learner Dashboard with Badges & Certificates',
      ],
      mockupVariant: 'analytics',
    },
    relatedIds: ['cms-platform', 'erp-back-office', 'health-scheduling'],
  },
  {
    id: 'health-scheduling',
    number: '11',
    name: 'Health Scheduling',
    sidebarLabel: 'Health Scheduling',
    category: 'Healthcare Management',
    subBadge: 'Smart Healthcare',
    filterCategories: ['All Solutions', 'Smart Healthcare', 'Hospital Information System', 'Medical Equipment'],
    domainPill: 'software',
    shortDescription:
      'Medical scheduling system for managing doctors, clinics, and healthcare services.',
    thaiDescription:
      'ระบบบริหารตารางเวรแพทย์ พยาบาล ห้องตรวจ ห้องผ่าตัด และทรัพยากรทางการแพทย์ เพื่อการจัดสรรเวลาและบริการที่แม่นยำ',
    fullDescription:
      'Health Scheduling ระบบบริหารจัดการตารางเวลาและทรัพยากรทางการแพทย์แบบรวมศูนย์ ครอบคลุมการจัดตารางออกตรวจของแพทย์ (Doctor Roster) ตารางเวรพยาบาล ตารางการใช้ห้องผ่าตัด (OR Scheduling) และคิวการใช้เครื่องมือแพทย์พิเศษ ช่วยป้องกันปัญหาตารางซ้อนทับและเพิ่มประสิทธิภาพการใช้ทรัพยากร',
    features: [
      'Doctor Clinic Roster & Shift Management',
      'Operating Room (OR) & Procedure Scheduling',
      'Medical Equipment & Examination Room Booking',
      'Conflict Detection & Leave Substitution Flow',
      'Real-Time Schedule Sync to Appointment Portal',
    ],
    keyBenefits: [
      'ป้องกันปัญหาตารางแพทย์ ห้องตรวจ หรือเครื่องมือแพทย์ซ้อนทับกันโดยอัตโนมัติ',
      'เมื่อตารางแพทย์มีการเปลี่ยนแปลง ระบบจะอัปเดตไปยังจุดนัดหมายและแจ้งเตือนผู้เกี่ยวข้องทันที',
      'เพิ่มอัตราการใช้ประโยชน์ห้องตรวจและเครื่องมือแพทย์อย่างคุ้มค่าสูงสุด',
    ],
    browserUrl: 'Topprovider.co.th / Health Scheduling',
    deepDiveSection1: {
      badge: 'CLINICAL RESOURCE COORDINATION',
      heading: 'Intelligent Doctor Roster, Clinic & Medical Resource Scheduling',
      paragraphs: [
        'การบริหารตารางแพทย์หลายร้อยท่านพร้อมกับห้องตรวจและเครื่องมือแพทย์เป็นงานที่ละเอียดอ่อน Health Scheduling ช่วยให้ผู้ประสานงานคลินิกสามารถจัดตารางรายเดือน รายสัปดาห์ และรายวันได้ผ่านปฏิทินอัจฉริยะที่มองเห็นความพร้อมของทรัพยากรทั้งหมด',
        'รองรับการแจ้งลา การสลับเวร และการกำหนดโควตาผู้ป่วยตามประเภทหัตถการหรือระยะเวลาที่ใช้ในการตรวจแต่ละรายการ',
      ],
      bullets: [
        'Master Calendar for Doctors, Clinics, OR Rooms & Diagnostic Devices',
        'Smart Conflict Check & Automated Leave Replacement Workflow',
        'Direct Synchronization with Smart Appointment Online & HIS',
      ],
      mockupVariant: 'primary',
    },
    deepDiveSection2: {
      badge: 'OPERATIONAL EFFICIENCY',
      heading: 'Why Hospitals Standardize on Health Scheduling?',
      paragraphs: [
        'ลดเวลาในการประสานงานทางโทรศัพท์ระหว่างแผนก และให้ข้อมูลสถิติการใช้งานห้องตรวจและเวลาปฏิบัติงานของบุคลากรทางการแพทย์อย่างถูกต้อง',
      ],
      bullets: [
        'Room & Medical Equipment Utilization Analytics',
        'Automated On-Call & Shift Notification to Mobile Devices',
        'Flexible Slot Templates for General & Specialized Clinics',
      ],
      mockupVariant: 'analytics',
    },
    relatedIds: ['smart-appointment', 'ipd-round-ward', 'panacea-his'],
  },
  {
    id: 'erp-back-office',
    number: '12',
    name: 'ERP Back Office Software',
    sidebarLabel: 'ERP (Back Office) SW',
    category: 'Enterprise ERP',
    subBadge: 'Network & Enterprise Platform',
    filterCategories: ['All Solutions', 'Enterprise ERP', 'Network & Infrastructure', 'Medical Equipment'],
    domainPill: 'software',
    shortDescription:
      'Back-office management software supporting finance, HR, inventory, and enterprise operations.',
    thaiDescription:
      'ซอฟต์แวร์บริหารจัดการงานหลังบ้านครบวงจร ครอบคลุมระบบบัญชีการเงิน ทรัพยากรบุคคล (HR & Payroll) คลังพัสดุ และครุภัณฑ์ทางการแพทย์',
    fullDescription:
      'ERP Back Office Software แพลตฟอร์มบริหารจัดการภายในองค์กรและโรงพยาบาลที่พัฒนาขึ้นเพื่อให้ครอบคลุมทุกกระบวนการทำงานสนับสนุน ได้แก่ ระบบบัญชีและการเงิน ระบบบริหารงานบุคคลและเงินเดือน (HRM/Payroll) ระบบคลังพัสดุและจัดซื้อ ระบบบริหารสินทรัพย์และซ่อมบำรุงเครื่องมือแพทย์ (Asset & Maintenance)',
    features: [
      'Financial Accounting, Budgeting & Cashflow',
      'Human Resource Management (HRM) & Payroll',
      'Inventory, Purchasing & Supplier Management',
      'Medical Equipment Asset & Maintenance Tracking',
      'Executive Business Intelligence (BI) Dashboard',
    ],
    keyBenefits: [
      'รวมระบบงานหลังบ้านทั้งหมดไว้ในแพลตฟอร์มเดียว ลดการใช้ซอฟต์แวร์แยกส่วนหลายระบบ',
      'มีระบบติดตามประวัติการซ่อมบำรุงและสอบเทียบ (Calibration) ครุภัณฑ์และอุปกรณ์ไอที/การแพทย์',
      'สรุปรายงานผู้บริหารแบบ Real-time ทั้งมิติการเงิน บุคลากร และพัสดุคงคลัง',
    ],
    browserUrl: 'Topprovider.co.th / ERP Back Office Software',
    deepDiveSection1: {
      badge: 'ALL-IN-ONE BACK OFFICE SUITE',
      heading: 'Complete Back-Office ERP for Finance, HR, Inventory & Asset Management',
      paragraphs: [
        'ERP Back Office Software ช่วยให้องค์กรบริหารจัดการทรัพยากรภายในได้อย่างเป็นระบบ ตั้งแต่งานบัญชีการเงิน การคำนวณเงินเดือนและค่าตอบแทนบุคลากรทางการแพทย์ ไปจนถึงการบริหารคลังพัสดุและการดูแลรักษาสินทรัพย์ภายในองค์กร',
        'ทุกโมดูลทำงานเชื่อมโยงกันโดยอัตโนมัติ ช่วยลดขั้นตอนงานเอกสารกระดาษด้วยระบบ E-Workflow สำหรับการขออนุมัติภายในองค์กร',
      ],
      bullets: [
        'Integrated Finance, HR/Payroll, Procurement & Fixed Assets',
        'Preventive Maintenance Scheduling for Medical & IT Equipment',
        'Paperless E-Approval Workflow for Leave, Overtime & Requisitions',
      ],
      mockupVariant: 'primary',
    },
    deepDiveSection2: {
      badge: 'EXECUTIVE BI & INFRASTRUCTURE CONTROL',
      heading: 'How ERP Back Office Drives Sustainable Enterprise Growth?',
      paragraphs: [
        'ผู้บริหารสามารถตรวจสอบสถานะงบประมาณ ต้นทุนบุคลากร และความพร้อมใช้งานของครุภัณฑ์ได้ทุกเมื่อผ่าน Executive BI Dashboard ที่ออกแบบมาให้เข้าใจง่ายและเจาะลึกข้อมูลได้หลายมิติ',
      ],
      bullets: [
        'Real-Time KPI & Financial Health Executive Dashboard',
        'Seamless Integration with Front-Office HIS & Network Infrastructure',
        'Scalable Cloud & On-Premise Enterprise Deployment',
      ],
      mockupVariant: 'analytics',
    },
    relatedIds: ['sap-erp-backoffice', 'frontback-his', 'vitanix-claim'],
  },
];

