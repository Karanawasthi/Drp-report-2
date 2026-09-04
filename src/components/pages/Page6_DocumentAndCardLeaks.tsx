import React from 'react';
import { A4PageContainer } from '../A4PageContainer';
import { MetricCard } from '../MetricCard';
import { DonutChart } from '../ReportCharts';
import { documentAndCardLeaksData } from '../../reportData';
import { FileSpreadsheet, CreditCard, ShieldAlert, AlertTriangle, ExternalLink } from 'lucide-react';

export const Page6_DocumentAndCardLeaks: React.FC<{ pageNumber: number; totalPages: number }> = ({
  pageNumber,
  totalPages
}) => {
  return (
    <A4PageContainer
      pageNumber={pageNumber}
      totalPages={totalPages}
      sectionTag="Sensitive Data"
      sectionTitle="Document Leaks &amp; Credit Card Exposure"
    >
      {/* SECTION 1: DOCUMENT LEAKS */}
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
          <div className="flex items-center gap-2">
            <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">
              Document Leak Monitor
            </h3>
          </div>
          <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
            Leaked corporate documents found across sources · sample data
          </span>
        </div>

        {/* Leaked Documents Table */}
        <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-xs overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase">
                Leaked Documents (Files Exposed on Forums, Telegram &amp; Paste Sites)
              </h4>
              <p className="text-[10.5px] text-slate-500">
                Corroborated confidential company documents indexed across dark-web repositories
              </p>
            </div>
            <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
              PII &amp; KYC Impact
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[11px]">
              <thead>
                <tr className="bg-slate-50 text-slate-600 border-b border-slate-200 text-[10px] uppercase font-mono">
                  <th className="py-2 px-2.5 font-semibold">Exposed File Name</th>
                  <th className="py-2 px-2.5 font-semibold">File Size</th>
                  <th className="py-2 px-2.5 font-semibold">Company Name</th>
                  <th className="py-2 px-2.5 font-semibold">Source Type</th>
                  <th className="py-2 px-2.5 font-semibold">Breach Discovered</th>
                  <th className="py-2 px-2.5 font-semibold">URL / Main Post Reference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {documentAndCardLeaksData.leakedDocuments.map((doc, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 text-[10.5px]">
                    <td className="py-2 px-2.5 font-bold text-slate-900 flex items-center gap-1.5 font-sans">
                      <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{doc.file}</span>
                    </td>
                    <td className="py-2 px-2.5 text-slate-600">{doc.fileSize}</td>
                    <td className="py-2 px-2.5 font-sans text-slate-800 font-medium">{doc.companyName}</td>
                    <td className="py-2 px-2.5">
                      <span className="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[9.5px] border border-slate-200">
                        {doc.sourceType}
                      </span>
                    </td>
                    <td className="py-2 px-2.5 text-slate-500">{doc.breachDiscovered}</td>
                    <td className="py-2 px-2.5 text-blue-600 text-[10px] truncate max-w-xs font-mono">
                      {doc.urlMainPost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* SECTION 2: CREDIT CARD LEAK */}
      <div className="space-y-3 pt-2 border-t border-slate-200">
        <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-rose-600" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">
              Credit Card Leak (Card Exposure Summary)
            </h3>
          </div>
          <span className="text-[10px] font-mono text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200 font-bold">
            Exposed payment cards · sample data
          </span>
        </div>

        {/* 4 Single Value Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {documentAndCardLeaksData.cardSummary.map((c, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs">
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block mb-0.5">
                {c.title}
              </span>
              <div className="text-2xl font-black font-mono text-slate-900">{c.value}</div>
              <p className="text-[10px] text-slate-500 mt-0.5">{c.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Donut Chart: Leaks by BIN & Exposed Cards Table */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Donut Chart */}
          <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-xs flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-tight">
                Leaks by BIN Range
              </h4>
              <p className="text-[10px] text-slate-500 mb-1">
                324 cards categorized by issuing institution
              </p>
            </div>
            <DonutChart
              data={documentAndCardLeaksData.leaksByBinDonut}
              centerLabel="324 Cards"
              centerSubtext="Total"
              size={120}
              thickness={16}
            />
            <div className="mt-2 text-[10px] text-slate-500 bg-slate-50 p-1.5 rounded border border-slate-100">
              BIN 453912 represents 43.8% of harvested corporate cards.
            </div>
          </div>

          {/* Exposed Cards Table */}
          <div className="md:col-span-2 bg-white border border-slate-200 rounded-lg p-3.5 shadow-xs overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase">
                Exposed Cards (Payment Cards Found in Breach Dumps)
              </h4>
              <span className="text-[9.5px] font-mono text-slate-500">PCI-DSS Breach Alert</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-[10.5px]">
                <thead>
                  <tr className="bg-slate-50 text-slate-600 border-b border-slate-200 text-[9.5px] uppercase font-mono">
                    <th className="py-1.5 px-2 font-semibold">Site Name</th>
                    <th className="py-1.5 px-2 font-semibold">Compromised URL</th>
                    <th className="py-1.5 px-2 font-semibold">Masked Card Number</th>
                    <th className="py-1.5 px-2 font-semibold">Expiry</th>
                    <th className="py-1.5 px-2 font-semibold text-center">CVV</th>
                    <th className="py-1.5 px-2 font-semibold text-right">Breach Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono">
                  {documentAndCardLeaksData.exposedCards.map((card, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50">
                      <td className="py-2 px-2 font-sans font-semibold text-slate-900">{card.siteName}</td>
                      <td className="py-2 px-2 text-blue-600 text-[10px] truncate max-w-[130px]">{card.url}</td>
                      <td className="py-2 px-2 font-bold text-slate-800">{card.cardNumber}</td>
                      <td className="py-2 px-2 text-slate-600">{card.expiry}</td>
                      <td className="py-2 px-2 text-center text-rose-600 font-bold">{card.cvv}</td>
                      <td className="py-2 px-2 text-right text-slate-500">{card.breachDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-2 text-[10px] text-slate-500">
              *Full PAN records masked for compliance. Issuing banks notified for immediate freeze.
            </div>
          </div>
        </div>
      </div>
    </A4PageContainer>
  );
};
