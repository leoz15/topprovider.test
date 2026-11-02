import React from 'react';
import {
  Activity,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  Users,
  Stethoscope,
  Calendar,
  Database,
  Bed,
  Globe,
  BookOpen,
  Layers,
  ShieldCheck,
  Search,
  BarChart3,
  HeartPulse,
  Tablet,
  Building2,
  CreditCard,
} from 'lucide-react';

interface SoftwareMockupUIProps {
  productId: string;
  variant?: 'primary' | 'analytics' | 'compact';
}

export const SoftwareMockupUI: React.FC<SoftwareMockupUIProps> = ({
  productId,
  variant = 'primary',
}) => {
  const isCompact = variant === 'compact';

  // 01. VITANIX CLAIM
  if (productId === 'vitanix-claim') {
    if (variant === 'analytics') {
      return (
        <div className="w-full h-full bg-[#F8FAFC] p-4 sm:p-5 flex flex-col justify-between text-[#17233F] select-none">
          <div className="flex items-center justify-between border-b border-[#E5EAF2] pb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#0866F5] text-white flex items-center justify-center font-bold text-xs">
                VC
              </div>
              <div>
                <p className="text-xs font-bold text-[#17233F]">Vitanix Claim • Pre-Audit & Fund Rules</p>
                <p className="text-[10px] text-[#64748B]">16-File Validation & Reimbursement Reconciliation</p>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200">
              Auto Pre-Audit Active
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2.5 my-3">
            <div className="bg-white p-3 rounded-xl border border-[#E5EAF2] shadow-2xs">
              <p className="text-[10px] text-[#64748B]">OP-CR / UC Fund</p>
              <p className="text-sm font-bold text-[#0866F5] mt-0.5">Passed Pre-Audit</p>
              <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-[#0866F5] h-full w-[92%] rounded-full" />
              </div>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#E5EAF2] shadow-2xs">
              <p className="text-[10px] text-[#64748B]">IPD DRG RW Check</p>
              <p className="text-sm font-bold text-[#13A8E8] mt-0.5">Verified ICD-10</p>
              <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-[#13A8E8] h-full w-[88%] rounded-full" />
              </div>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#E5EAF2] shadow-2xs">
              <p className="text-[10px] text-[#64748B]">REP / STM Sync</p>
              <p className="text-sm font-bold text-emerald-600 mt-0.5">Matched</p>
              <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-emerald-500 h-full w-[96%] rounded-full" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E5EAF2] p-3 space-y-2">
            <div className="flex items-center justify-between text-[11px] font-semibold text-[#17233F] pb-1.5 border-b border-slate-100">
              <span>Claim Validation Queue</span>
              <span className="text-[#0866F5]">Status</span>
            </div>
            {[
              { hn: 'HN-690412 • OP-Anywhere', rule: 'ครบ 16 แฟ้ม • รหัสโรคสมบูรณ์', status: 'Approved', color: 'text-emerald-600 bg-emerald-50' },
              { hn: 'HN-690418 • IPD-UCS', rule: 'ผ่านการตรวจสอบ Authen Code', status: 'Sent REP', color: 'text-[#0866F5] bg-blue-50' },
              { hn: 'HN-690425 • PPFS Screening', rule: 'รอตรวจสอบรหัสหัตถการเพิ่มเติม', status: 'Pending Check', color: 'text-amber-600 bg-amber-50' },
            ].map((row, idx) => (
              <div key={idx} className="flex items-center justify-between text-[11px] py-1">
                <div>
                  <p className="font-semibold text-[#17233F]">{row.hn}</p>
                  <p className="text-[10px] text-[#64748B]">{row.rule}</p>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${row.color}`}>
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="w-full h-full bg-[#F8FAFC] p-3 sm:p-4 flex flex-col justify-between text-[#17233F] select-none">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-2.5 border-b border-[#E5EAF2]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#0866F5] text-white flex items-center justify-center text-[11px] font-bold">
              V
            </div>
            <span className="text-xs font-bold text-[#17233F]">Vitanix Claim Dashboard</span>
          </div>
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-50 text-[#0866F5] border border-blue-200">
            Real-Time Claim Status
          </span>
        </div>

        {/* 4 Summary Cards required by Prompt: Total, Pending, Approved, Rejected */}
        <div className="grid grid-cols-4 gap-2 my-2.5">
          <div className="bg-white p-2 sm:p-2.5 rounded-xl border border-[#E5EAF2]">
            <p className="text-[9px] sm:text-[10px] text-[#64748B] font-medium">Total Claims</p>
            <p className="text-xs sm:text-sm font-bold text-[#17233F] mt-0.5">All Funds</p>
            <span className="inline-block mt-1 text-[9px] text-[#0866F5] font-semibold">100% Tracked</span>
          </div>
          <div className="bg-white p-2 sm:p-2.5 rounded-xl border border-[#E5EAF2]">
            <p className="text-[9px] sm:text-[10px] text-[#64748B] font-medium">Pending Claims</p>
            <p className="text-xs sm:text-sm font-bold text-amber-600 mt-0.5">Pre-Audit</p>
            <span className="inline-block mt-1 text-[9px] text-amber-600 font-semibold">In Queue</span>
          </div>
          <div className="bg-white p-2 sm:p-2.5 rounded-xl border border-[#E5EAF2]">
            <p className="text-[9px] sm:text-[10px] text-[#64748B] font-medium">Approved Claims</p>
            <p className="text-xs sm:text-sm font-bold text-emerald-600 mt-0.5">REP / STM</p>
            <span className="inline-block mt-1 text-[9px] text-emerald-600 font-semibold">Verified</span>
          </div>
          <div className="bg-white p-2 sm:p-2.5 rounded-xl border border-[#E5EAF2]">
            <p className="text-[9px] sm:text-[10px] text-[#64748B] font-medium">Rejected Claims</p>
            <p className="text-xs sm:text-sm font-bold text-rose-600 mt-0.5">Alert Fix</p>
            <span className="inline-block mt-1 text-[9px] text-rose-600 font-semibold">C-Rule Check</span>
          </div>
        </div>

        {/* Screenshot + Status Table */}
        {!isCompact ? (
          <div className="grid grid-cols-12 gap-3 items-center bg-white rounded-xl border border-[#E5EAF2] p-2.5">
            <div className="col-span-7 rounded-lg overflow-hidden border border-slate-100">
              <img
                src={`${import.meta.env.BASE_URL}assets/vitanix-claim.png`}
                alt="Vitanix Claim Interface"
                className="w-full h-36 sm:h-44 object-cover object-top"
              />
            </div>
            <div className="col-span-5 space-y-2">
              <p className="text-[11px] font-bold text-[#17233F]">Claim Analytics & Table</p>
              <div className="space-y-1.5 text-[10px]">
                <div className="p-2 rounded-lg bg-[#F5F8FC] flex items-center justify-between">
                  <span className="font-medium text-[#17233F]">OP-CR / Walk-in</span>
                  <span className="text-emerald-600 font-semibold">Approved</span>
                </div>
                <div className="p-2 rounded-lg bg-[#F5F8FC] flex items-center justify-between">
                  <span className="font-medium text-[#17233F]">IPD Admission</span>
                  <span className="text-[#0866F5] font-semibold">Validated</span>
                </div>
                <div className="p-2 rounded-lg bg-[#F5F8FC] flex items-center justify-between">
                  <span className="font-medium text-[#17233F]">PPFS Health Fund</span>
                  <span className="text-amber-600 font-semibold">Pending</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-xl overflow-hidden border border-[#E5EAF2] bg-white">
            <img
              src={`${import.meta.env.BASE_URL}assets/vitanix-claim.png`}
              alt="Vitanix Claim Dashboard"
              className="w-full h-28 object-cover object-top"
            />
          </div>
        )}
      </div>
    );
  }

  // 02. PANACEA PLUS HOSPITAL SOLUTION (HIS)
  if (productId === 'panacea-his') {
    return (
      <div className="w-full h-full bg-[#F8FAFC] p-3.5 sm:p-4 flex flex-col justify-between text-[#17233F] select-none">
        <div className="flex items-center justify-between pb-2.5 border-b border-[#E5EAF2]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#0866F5] text-white flex items-center justify-center">
              <Stethoscope className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#17233F]">Panacea Plus HIS • Hospital Overview</p>
              {!isCompact && (
                <p className="text-[10px] text-[#64748B]">Integrated OPD • IPD • ER • LIS • PACS • Pharmacy</p>
              )}
            </div>
          </div>
          <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
            One System Cloud HIS
          </span>
        </div>

        {/* Department Overview Grid */}
        <div className="grid grid-cols-4 gap-2 my-2.5">
          {[
            { dept: 'OPD Clinics', status: 'Active Flow', sub: 'Outpatient Care', color: 'text-[#0866F5]' },
            { dept: 'IPD Wards', status: 'Bed Census', sub: 'Inpatient Care', color: 'text-[#13A8E8]' },
            { dept: 'Pharmacy', status: 'e-Prescription', sub: 'Drug Safety', color: 'text-emerald-600' },
            { dept: 'Lab & PACS', status: 'HL7 / DICOM', sub: 'Online Results', color: 'text-indigo-600' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-2.5 rounded-xl border border-[#E5EAF2]">
              <p className="text-[10px] text-[#64748B] font-medium">{item.dept}</p>
              <p className={`text-xs font-bold mt-0.5 ${item.color}`}>{item.status}</p>
              <p className="text-[9px] text-slate-400 mt-0.5">{item.sub}</p>
            </div>
          ))}
        </div>

        {/* Operational Dashboard & Patient Statistics */}
        <div className="bg-white rounded-xl border border-[#E5EAF2] p-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#17233F]">
              {variant === 'analytics' ? 'Hospital Service Analytics & Workflow' : 'Department Operational Status'}
            </span>
            <span className="text-[10px] text-[#0866F5] font-medium">Real-time Sync</span>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-1">
            <div className="p-2 rounded-lg bg-[#F5F8FC] border border-slate-100">
              <p className="text-[10px] font-semibold text-[#17233F]">Medical Records</p>
              <p className="text-[9px] text-[#64748B] mt-0.5">Smart Card & Eligibility</p>
              <div className="mt-1.5 h-1.5 w-full bg-blue-100 rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-[#0866F5] rounded-full" />
              </div>
            </div>
            <div className="p-2 rounded-lg bg-[#F5F8FC] border border-slate-100">
              <p className="text-[10px] font-semibold text-[#17233F]">Doctor Workbench</p>
              <p className="text-[9px] text-[#64748B] mt-0.5">Diagnosis & CPOE Order</p>
              <div className="mt-1.5 h-1.5 w-full bg-sky-100 rounded-full overflow-hidden">
                <div className="h-full w-5/6 bg-[#13A8E8] rounded-full" />
              </div>
            </div>
            <div className="p-2 rounded-lg bg-[#F5F8FC] border border-slate-100">
              <p className="text-[10px] font-semibold text-[#17233F]">Billing & Claim</p>
              <p className="text-[9px] text-[#64748B] mt-0.5">Auto Right Calculation</p>
              <div className="mt-1.5 h-1.5 w-full bg-emerald-100 rounded-full overflow-hidden">
                <div className="h-full w-11/12 bg-emerald-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 03. SMART EMR TABLET & MOBILE PATIENTS
  if (productId === 'smart-emr-tablet') {
    return (
      <div className="w-full h-full bg-[#F8FAFC] p-3.5 sm:p-4 flex flex-col justify-between text-[#17233F] select-none">
        <div className="flex items-center justify-between pb-2.5 border-b border-[#E5EAF2]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#0866F5] text-white flex items-center justify-center">
              <Tablet className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#17233F]">Smart EMR Tablet • Bedside Clinical UI</p>
              {!isCompact && (
                <p className="text-[10px] text-[#64748B]">Patient Profile • Vital Signs • Medical Documentation</p>
              )}
            </div>
          </div>
          <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0866F5] border border-blue-200">
            Tablet & Mobile Ready
          </span>
        </div>

        {/* Patient Profile Header */}
        <div className="bg-white rounded-xl border border-[#E5EAF2] p-2.5 my-2 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-[#0866F5] font-bold text-xs flex items-center justify-center">
              PT
            </div>
            <div>
              <p className="text-xs font-bold text-[#17233F]">Patient Profile • Ward 4B (Bed 12)</p>
              <p className="text-[10px] text-[#64748B]">Allergy: No Known Drug Allergy • Status: Stable</p>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-600 text-[10px] font-semibold">
            Wristband Verified
          </span>
        </div>

        {/* Vital Signs & Medical Record */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white p-2.5 rounded-xl border border-[#E5EAF2]">
            <div className="flex items-center justify-between text-[10px] text-[#64748B]">
              <span>Heart Rate</span>
              <HeartPulse className="w-3.5 h-3.5 text-rose-500" />
            </div>
            <p className="text-sm font-bold text-[#17233F] mt-1">76 bpm</p>
            <p className="text-[9px] text-emerald-600">Normal Sinus</p>
          </div>
          <div className="bg-white p-2.5 rounded-xl border border-[#E5EAF2]">
            <div className="flex items-center justify-between text-[10px] text-[#64748B]">
              <span>Blood Pressure</span>
              <Activity className="w-3.5 h-3.5 text-[#0866F5]" />
            </div>
            <p className="text-sm font-bold text-[#17233F] mt-1">118/76</p>
            <p className="text-[9px] text-[#0866F5]">Auto-Synced</p>
          </div>
          <div className="bg-white p-2.5 rounded-xl border border-[#E5EAF2]">
            <div className="flex items-center justify-between text-[10px] text-[#64748B]">
              <span>SpO2 / Temp</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            </div>
            <p className="text-sm font-bold text-[#17233F] mt-1">99% • 36.6°C</p>
            <p className="text-[9px] text-[#64748B]">Charted on Tablet</p>
          </div>
        </div>
      </div>
    );
  }

  // 04. FRONTBACKPROJECT / HIS
  if (productId === 'frontback-his') {
    return (
      <div className="w-full h-full bg-[#F8FAFC] p-3.5 sm:p-4 flex flex-col justify-between text-[#17233F] select-none">
        <div className="flex items-center justify-between pb-2.5 border-b border-[#E5EAF2]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#0866F5] text-white flex items-center justify-center">
              <Layers className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#17233F]">FrontBackProject / HIS Bridge</p>
              {!isCompact && (
                <p className="text-[10px] text-[#64748B]">Front-Office Patient Services ↔ Back-Office Administration</p>
              )}
            </div>
          </div>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-[#0866F5]">
            Live Sync
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 my-2">
          <div className="bg-white p-3 rounded-xl border border-[#E5EAF2]">
            <p className="text-[10px] font-bold text-[#0866F5] uppercase">Front-Office HIS</p>
            <ul className="mt-1.5 space-y-1 text-[10px] text-[#17233F]">
              <li className="flex items-center justify-between">
                <span>OPD/IPD Billing</span>
                <span className="text-emerald-600 font-semibold">Synced</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Pharmacy Dispensing</span>
                <span className="text-emerald-600 font-semibold">Auto-Cut</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Cashier & Receipt</span>
                <span className="text-[#0866F5] font-semibold">Posted</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded-xl border border-[#E5EAF2]">
            <p className="text-[10px] font-bold text-[#13A8E8] uppercase">Back-Office Admin</p>
            <ul className="mt-1.5 space-y-1 text-[10px] text-[#17233F]">
              <li className="flex items-center justify-between">
                <span>General Ledger (GL)</span>
                <span className="text-emerald-600 font-semibold">Balanced</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Medical Stock Lot</span>
                <span className="text-emerald-600 font-semibold">Updated</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Cost Center Report</span>
                <span className="text-[#0866F5] font-semibold">Ready</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white px-3 py-2 rounded-xl border border-[#E5EAF2] flex items-center justify-between text-[10px]">
          <span className="font-medium text-[#64748B]">Daily Front-to-Back Reconciliation Status</span>
          <span className="font-bold text-emerald-600">100% Matched</span>
        </div>
      </div>
    );
  }

  // 05. EMR SMART DOCUMENT
  if (productId === 'emr-smart-document') {
    return (
      <div className="w-full h-full bg-[#F8FAFC] p-3.5 sm:p-4 flex flex-col justify-between text-[#17233F] select-none">
        <div className="flex items-center justify-between pb-2.5 border-b border-[#E5EAF2]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#0866F5] text-white flex items-center justify-center">
              <FileText className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#17233F]">EMR Smart Document Vault</p>
              {!isCompact && (
                <p className="text-[10px] text-[#64748B]">Digital Medical Record Scanning, OCR & e-Signature</p>
              )}
            </div>
          </div>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600">
            Paperless Archive
          </span>
        </div>

        <div className="space-y-2 my-2">
          {[
            { doc: 'Surgical Informed Consent Form', tag: 'e-Signature Verified', status: 'Signed' },
            { doc: 'Outpatient Progress & Referral Chart', tag: 'OCR Barcode Indexed', status: 'Archived' },
            { doc: 'Medical Certificate & Insurance Form', tag: 'PDPA Encrypted PDF', status: 'Ready' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-2.5 rounded-xl border border-[#E5EAF2] flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#0866F5] shrink-0" />
                <div>
                  <p className="text-[11px] font-bold text-[#17233F]">{item.doc}</p>
                  <p className="text-[9px] text-[#64748B]">{item.tag}</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold bg-blue-50 text-[#0866F5]">
                {item.status}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-white px-3 py-2 rounded-xl border border-[#E5EAF2] flex items-center justify-between text-[10px]">
          <span className="text-[#64748B] flex items-center gap-1">
            <Search className="w-3 h-3 text-[#0866F5]" /> Fast HN / AN Document Indexing
          </span>
          <span className="font-semibold text-[#0866F5]">Audit Trail Enabled</span>
        </div>
      </div>
    );
  }

  // 06. BACK OFFICE (SAP ERP)
  if (productId === 'sap-erp-backoffice') {
    return (
      <div className="w-full h-full bg-[#F8FAFC] p-3.5 sm:p-4 flex flex-col justify-between text-[#17233F] select-none">
        <div className="flex items-center justify-between pb-2.5 border-b border-[#E5EAF2]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#111B46] text-white flex items-center justify-center">
              <Database className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#17233F]">Back Office (SAP ERP) Connector</p>
              {!isCompact && (
                <p className="text-[10px] text-[#64748B]">Enterprise Finance (FI/CO), Procurement (MM) & Inventory</p>
              )}
            </div>
          </div>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-[#0866F5]">
            SAP Interface Active
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 my-2">
          <div className="bg-white p-2.5 rounded-xl border border-[#E5EAF2]">
            <p className="text-[9px] text-[#64748B]">FI / General Ledger</p>
            <p className="text-xs font-bold text-[#17233F] mt-0.5">Auto JV Posting</p>
            <span className="text-[9px] text-emerald-600 font-semibold">Synced</span>
          </div>
          <div className="bg-white p-2.5 rounded-xl border border-[#E5EAF2]">
            <p className="text-[9px] text-[#64748B]">MM / Procurement</p>
            <p className="text-xs font-bold text-[#0866F5] mt-0.5">PR / PO Workflow</p>
            <span className="text-[9px] text-[#0866F5] font-semibold">Approved</span>
          </div>
          <div className="bg-white p-2.5 rounded-xl border border-[#E5EAF2]">
            <p className="text-[9px] text-[#64748B]">CO / Cost Center</p>
            <p className="text-xs font-bold text-[#13A8E8] mt-0.5">Budget Control</p>
            <span className="text-[9px] text-emerald-600 font-semibold">On Track</span>
          </div>
        </div>

        <div className="bg-white p-2.5 rounded-xl border border-[#E5EAF2] space-y-1.5">
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-semibold text-[#17233F]">Hospital Revenue to SAP FI Batch</span>
            <span className="text-emerald-600 font-bold">Completed</span>
          </div>
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-semibold text-[#17233F]">Medical Supply Goods Receipt (MIGO)</span>
            <span className="text-[#0866F5] font-bold">Verified</span>
          </div>
        </div>
      </div>
    );
  }

  // 07. IPD ROUND WARD
  if (productId === 'ipd-round-ward') {
    return (
      <div className="w-full h-full bg-[#F8FAFC] p-3.5 sm:p-4 flex flex-col justify-between text-[#17233F] select-none">
        <div className="flex items-center justify-between pb-2.5 border-b border-[#E5EAF2]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#0866F5] text-white flex items-center justify-center">
              <Bed className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#17233F]">IPD Round Ward • Smart Bed Map</p>
              {!isCompact && (
                <p className="text-[10px] text-[#64748B]">Inpatient Ward Census, Doctor Orders & e-MAR Chart</p>
              )}
            </div>
          </div>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-[#0866F5]">
            Inpatient Ward 5A
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 my-2">
          {[
            { bed: 'Bed 501', note: 'Doctor Round Done', mar: 'e-MAR Scheduled', badge: 'bg-emerald-50 text-emerald-600' },
            { bed: 'Bed 502', note: 'New Lab Result', mar: 'Continue Order', badge: 'bg-blue-50 text-[#0866F5]' },
            { bed: 'Bed 503', note: 'Pre-Discharge', mar: 'Home Med Ready', badge: 'bg-amber-50 text-amber-600' },
          ].map((b, i) => (
            <div key={i} className="bg-white p-2.5 rounded-xl border border-[#E5EAF2]">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#17233F]">{b.bed}</span>
                <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${b.badge}`}>IPD</span>
              </div>
              <p className="text-[10px] font-medium text-[#0866F5] mt-1">{b.note}</p>
              <p className="text-[9px] text-[#64748B]">{b.mar}</p>
            </div>
          ))}
        </div>

        <div className="bg-white px-3 py-2 rounded-xl border border-[#E5EAF2] flex items-center justify-between text-[10px]">
          <span className="text-[#64748B]">Nursing Shift Handover & Doctor Order Sync</span>
          <span className="font-semibold text-[#0866F5]">Real-time Ward Care</span>
        </div>
      </div>
    );
  }

  // 08. SMART APPOINTMENT ONLINE
  if (productId === 'smart-appointment') {
    return (
      <div className="w-full h-full bg-[#F8FAFC] p-3.5 sm:p-4 flex flex-col justify-between text-[#17233F] select-none">
        <div className="flex items-center justify-between pb-2.5 border-b border-[#E5EAF2]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#0866F5] text-white flex items-center justify-center">
              <Calendar className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#17233F]">Smart Appointment Online Portal</p>
              {!isCompact && (
                <p className="text-[10px] text-[#64748B]">Patient Online Booking, Doctor Slots & Queue Notification</p>
              )}
            </div>
          </div>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600">
            24/7 Online Booking
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 my-2">
          {[
            { time: '09:00 - 10:00', clinic: 'Cardiology Clinic', state: 'Confirmed' },
            { time: '10:30 - 11:30', clinic: 'Orthopedic Center', state: 'Available Slot' },
            { time: '13:30 - 14:30', clinic: 'Health Checkup', state: 'QR Checked-in' },
          ].map((slot, i) => (
            <div key={i} className="bg-white p-2.5 rounded-xl border border-[#E5EAF2]">
              <p className="text-[10px] font-bold text-[#0866F5]">{slot.time}</p>
              <p className="text-[11px] font-semibold text-[#17233F] mt-0.5">{slot.clinic}</p>
              <span className="inline-block mt-1 text-[9px] text-emerald-600 font-medium">{slot.state}</span>
            </div>
          ))}
        </div>

        <div className="bg-white px-3 py-2 rounded-xl border border-[#E5EAF2] flex items-center justify-between text-[10px]">
          <span className="text-[#64748B]">Automated SMS & LINE Official Reminder</span>
          <span className="font-semibold text-[#0866F5]">HIS Schedule Synced</span>
        </div>
      </div>
    );
  }

  // 09. CMS
  if (productId === 'cms-platform') {
    return (
      <div className="w-full h-full bg-[#F8FAFC] p-3.5 sm:p-4 flex flex-col justify-between text-[#17233F] select-none">
        <div className="flex items-center justify-between pb-2.5 border-b border-[#E5EAF2]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#0866F5] text-white flex items-center justify-center">
              <Globe className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#17233F]">Enterprise CMS • Content Studio</p>
              {!isCompact && (
                <p className="text-[10px] text-[#64748B]">Web Content, Doctor Directory & Health Package Publisher</p>
              )}
            </div>
          </div>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-[#0866F5]">
            Published Live
          </span>
        </div>

        <div className="space-y-2 my-2">
          <div className="bg-white p-2.5 rounded-xl border border-[#E5EAF2] flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold text-[#17233F]">Medical Center & Doctor Directory</p>
              <p className="text-[9px] text-[#64748B]">Bilingual Profile (TH/EN) • Specialty Search</p>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold bg-emerald-50 text-emerald-600">
              Active
            </span>
          </div>
          <div className="bg-white p-2.5 rounded-xl border border-[#E5EAF2] flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold text-[#17233F]">Health Articles & News Banner</p>
              <p className="text-[9px] text-[#64748B]">SEO Optimized • PDPA Consent Integrated</p>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold bg-blue-50 text-[#0866F5]">
              Updated
            </span>
          </div>
        </div>

        <div className="bg-white px-3 py-2 rounded-xl border border-[#E5EAF2] flex items-center justify-between text-[10px]">
          <span className="text-[#64748B]">Role-Based Content Approval Workflow</span>
          <span className="font-semibold text-[#0866F5]">Multi-Channel Ready</span>
        </div>
      </div>
    );
  }

  // 10. E-LEARNING
  if (productId === 'e-learning') {
    return (
      <div className="w-full h-full bg-[#F8FAFC] p-3.5 sm:p-4 flex flex-col justify-between text-[#17233F] select-none">
        <div className="flex items-center justify-between pb-2.5 border-b border-[#E5EAF2]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#0866F5] text-white flex items-center justify-center">
              <BookOpen className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#17233F]">E-Learning LMS • Knowledge Portal</p>
              {!isCompact && (
                <p className="text-[10px] text-[#64748B]">Medical Continuing Education, Staff Training & Certification</p>
              )}
            </div>
          </div>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600">
            CME / HA Training
          </span>
        </div>

        <div className="space-y-2 my-2">
          {[
            { course: 'Hospital Infection Control & Patient Safety (HA)', progress: 'w-full', state: 'Certified' },
            { course: 'PDPA & Healthcare Cybersecurity Compliance', progress: 'w-4/5', state: 'In Progress' },
          ].map((c, i) => (
            <div key={i} className="bg-white p-2.5 rounded-xl border border-[#E5EAF2]">
              <div className="flex items-center justify-between text-[10px]">
                <span className="font-bold text-[#17233F]">{c.course}</span>
                <span className="text-[#0866F5] font-semibold">{c.state}</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
                <div className={`h-full bg-[#0866F5] rounded-full ${c.progress}`} />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white px-3 py-2 rounded-xl border border-[#E5EAF2] flex items-center justify-between text-[10px]">
          <span className="text-[#64748B]">Video Curriculum, Quiz & e-Certificate</span>
          <span className="font-semibold text-[#0866F5]">HR Competency Sync</span>
        </div>
      </div>
    );
  }

  // 11. HEALTH SCHEDULING
  if (productId === 'health-scheduling') {
    return (
      <div className="w-full h-full bg-[#F8FAFC] p-3.5 sm:p-4 flex flex-col justify-between text-[#17233F] select-none">
        <div className="flex items-center justify-between pb-2.5 border-b border-[#E5EAF2]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#0866F5] text-white flex items-center justify-center">
              <Clock className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#17233F]">Health Scheduling • Master Roster</p>
              {!isCompact && (
                <p className="text-[10px] text-[#64748B]">Doctor Roster, Nurse Shifts & Operating Room Coordinator</p>
              )}
            </div>
          </div>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-[#0866F5]">
            Zero Conflict Check
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 my-2">
          <div className="bg-white p-2.5 rounded-xl border border-[#E5EAF2]">
            <p className="text-[9px] text-[#64748B]">Morning Shift</p>
            <p className="text-xs font-bold text-[#17233F] mt-0.5">OPD Clinics</p>
            <span className="text-[9px] text-emerald-600 font-semibold">Assigned</span>
          </div>
          <div className="bg-white p-2.5 rounded-xl border border-[#E5EAF2]">
            <p className="text-[9px] text-[#64748B]">OR Theater 1-4</p>
            <p className="text-xs font-bold text-[#0866F5] mt-0.5">Surgery Queue</p>
            <span className="text-[9px] text-[#0866F5] font-semibold">Coordinated</span>
          </div>
          <div className="bg-white p-2.5 rounded-xl border border-[#E5EAF2]">
            <p className="text-[9px] text-[#64748B]">On-Call Roster</p>
            <p className="text-xs font-bold text-[#13A8E8] mt-0.5">ER & ICU Team</p>
            <span className="text-[9px] text-emerald-600 font-semibold">Active</span>
          </div>
        </div>

        <div className="bg-white px-3 py-2 rounded-xl border border-[#E5EAF2] flex items-center justify-between text-[10px]">
          <span className="text-[#64748B]">Doctor & Medical Resource Calendar</span>
          <span className="font-semibold text-[#0866F5]">Auto Slot Sync</span>
        </div>
      </div>
    );
  }

  // 12. ERP BACK OFFICE SOFTWARE (Default fallback as well)
  return (
    <div className="w-full h-full bg-[#F8FAFC] p-3.5 sm:p-4 flex flex-col justify-between text-[#17233F] select-none">
      <div className="flex items-center justify-between pb-2.5 border-b border-[#E5EAF2]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#0866F5] text-white flex items-center justify-center">
            <BarChart3 className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="text-xs font-bold text-[#17233F]">ERP Back Office Software Suite</p>
            {!isCompact && (
              <p className="text-[10px] text-[#64748B]">Finance, HRM/Payroll, Inventory & Medical Asset Tracking</p>
            )}
          </div>
        </div>
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600">
          Enterprise BI
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 my-2">
        <div className="bg-white p-2.5 rounded-xl border border-[#E5EAF2] flex items-center gap-2.5">
          <CreditCard className="w-4 h-4 text-[#0866F5] shrink-0" />
          <div>
            <p className="text-[11px] font-bold text-[#17233F]">Finance & Budget</p>
            <p className="text-[9px] text-[#64748B]">AP / AR / Cashflow Control</p>
          </div>
        </div>
        <div className="bg-white p-2.5 rounded-xl border border-[#E5EAF2] flex items-center gap-2.5">
          <Users className="w-4 h-4 text-[#13A8E8] shrink-0" />
          <div>
            <p className="text-[11px] font-bold text-[#17233F]">HR & Medical Payroll</p>
            <p className="text-[9px] text-[#64748B]">Shift Allowance & E-Leave</p>
          </div>
        </div>
        <div className="bg-white p-2.5 rounded-xl border border-[#E5EAF2] flex items-center gap-2.5">
          <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <div>
            <p className="text-[11px] font-bold text-[#17233F]">Central Inventory</p>
            <p className="text-[9px] text-[#64748B]">Purchasing & Stock Alert</p>
          </div>
        </div>
        <div className="bg-white p-2.5 rounded-xl border border-[#E5EAF2] flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
          <div>
            <p className="text-[11px] font-bold text-[#17233F]">Asset Maintenance</p>
            <p className="text-[9px] text-[#64748B]">Calibration & PM Schedule</p>
          </div>
        </div>
      </div>

      <div className="bg-white px-3 py-2 rounded-xl border border-[#E5EAF2] flex items-center justify-between text-[10px]">
        <span className="text-[#64748B] flex items-center gap-1">
          <AlertCircle className="w-3 h-3 text-[#0866F5]" /> Paperless E-Approval Workflow
        </span>
        <span className="font-semibold text-[#0866F5]">Executive Dashboard</span>
      </div>
    </div>
  );
};

