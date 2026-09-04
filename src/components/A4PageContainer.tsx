import React from 'react';
import { Shield, AlertCircle } from 'lucide-react';
import { reportMetadata } from '../reportData';

interface A4PageContainerProps {
  pageNumber: number;
  totalPages: number;
  sectionTag: string;
  sectionTitle: string;
  children: React.ReactNode;
  isCover?: boolean;
}

export const A4PageContainer: React.FC<A4PageContainerProps> = ({
  pageNumber,
  totalPages,
  sectionTag,
  sectionTitle,
  children,
  isCover = false
}) => {
  return (
    <div
      id={`page-${pageNumber}`}
      className="print-page relative w-full max-w-[210mm] mx-auto bg-white border border-slate-200 shadow-md print:border-none print:shadow-none mb-8 print:mb-0 flex flex-col justify-between"
      style={{
        minHeight: '297mm',
        boxSizing: 'border-box'
      }}
    >
      {/* Top Security Banner (Repeats on every printed page) */}
      <div className="w-full bg-slate-900 text-white px-6 py-2.5 flex items-center justify-between text-[11px] font-mono tracking-wider">
        <div className="flex items-center gap-2">
          <Shield className="w-3.5 h-3.5 text-rose-400 shrink-0" />
          <span className="font-bold text-rose-400">{reportMetadata.classification}</span>
          <span className="text-slate-500 hidden sm:inline">|</span>
          <span className="text-slate-300 hidden sm:inline">{reportMetadata.reportId}</span>
        </div>
        <div className="flex items-center gap-3 text-slate-400">
          <span className="hidden sm:inline">Timeline: {reportMetadata.timeline}</span>
          <span className="bg-slate-800 text-slate-200 px-2 py-0.5 rounded text-[10px] font-bold">
            PAGE {pageNumber} OF {totalPages}
          </span>
        </div>
      </div>

      {/* Page Header */}
      {!isCover && (
        <div className="px-8 pt-6 pb-4 border-b border-slate-200 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                {sectionTag}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {reportMetadata.organization}
              </span>
            </div>
            <h2 className="text-xl font-black text-slate-900 tracking-tight">
              {sectionTitle}
            </h2>
          </div>
          <div className="text-right text-[10px] text-slate-600 font-mono hidden sm:block">
            <div>Scope: External Attack Surface & Threat Feed</div>
            <div>Ref Period: 12 May to 12 July 2026</div>
          </div>
        </div>
      )}

      {/* Main Page Content */}
      <div className="flex-1 px-8 py-5 flex flex-col justify-start gap-5">
        {children}
      </div>

      {/* Page Footer */}
      <div className="w-full px-8 py-3 bg-slate-50 border-t border-slate-200 text-[10px] text-slate-700 flex items-center justify-between font-mono">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-3 h-3 text-slate-400 shrink-0" />
          <span>STRICTLY CONFIDENTIAL — EXECUTIVE & BOARD REVIEW ONLY</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">ACME Enterprise Security Operations</span>
          <span className="font-bold text-slate-700">Page {pageNumber} / {totalPages}</span>
        </div>
      </div>
    </div>
  );
};
