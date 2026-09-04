import React from 'react';
import { Printer, FileText, ChevronRight, Eye, ShieldAlert, Sparkles } from 'lucide-react';
import { reportMetadata } from '../reportData';

interface ReportToolbarProps {
  activePage: number;
  setActivePage: (p: number) => void;
  isPaginated: boolean;
  setIsPaginated: (v: boolean) => void;
  totalPages: number;
  pageTitles: { page: number; title: string; tag: string }[];
}

export const ReportToolbar: React.FC<ReportToolbarProps> = ({
  activePage,
  setActivePage,
  isPaginated,
  setIsPaginated,
  totalPages,
  pageTitles
}) => {
  const handlePrint = () => {
    window.print();
  };

  const handleJump = (page: number) => {
    setActivePage(page);
    const el = document.getElementById(`page-${page}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="no-print sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Report Identity */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center font-black text-sm tracking-widest shadow-xs">
            ASM
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">
                {reportMetadata.title}
              </h1>
              <span className="hidden md:inline-flex text-[10px] font-mono px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-bold border border-rose-200">
                TLP:AMBER
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">
              {reportMetadata.organization} • Window: {reportMetadata.timeline}
            </p>
          </div>
        </div>

        {/* Center: Page Selector / Quick Jump */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs">
          <span className="px-2 py-1 text-[11px] font-semibold text-slate-500">Jump to:</span>
          <select
            value={activePage}
            onChange={(e) => handleJump(Number(e.target.value))}
            className="bg-white text-slate-800 font-medium text-xs rounded px-2 py-1 border border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
          >
            {pageTitles.map((p) => (
              <option key={p.page} value={p.page}>
                P{p.page}: {p.tag} — {p.title}
              </option>
            ))}
          </select>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* View Mode Toggle */}
          <button
            type="button"
            onClick={() => setIsPaginated(!isPaginated)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-2xs"
            title="Toggle between individual A4 pages and continuous flow"
          >
            <Eye className="w-3.5 h-3.5 text-slate-600" />
            <span className="hidden sm:inline">
              {isPaginated ? 'A4 Paper Sheets' : 'Continuous Stream'}
            </span>
          </button>

          {/* Print / Save PDF Button */}
          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs"
            title="Print or export complete report to A4 PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Horizontal Page Navigation Pills */}
      <div className="bg-slate-50 border-t border-slate-200 px-4 sm:px-6 py-1.5 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-[11px] whitespace-nowrap min-w-max">
          {pageTitles.map((p) => (
            <button
              key={p.page}
              onClick={() => handleJump(p.page)}
              className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                activePage === p.page
                  ? 'bg-blue-600 text-white font-semibold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <span className="opacity-70 mr-1 font-mono">P{p.page}</span>
              <span>{p.tag}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
