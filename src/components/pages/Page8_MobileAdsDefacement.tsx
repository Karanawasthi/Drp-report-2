import React from 'react';
import { A4PageContainer } from '../A4PageContainer';
import { MetricCard } from '../MetricCard';
import { DonutChart, ProgressBarList } from '../ReportCharts';
import { mobileAndContentData } from '../../reportData';
import { Smartphone, Megaphone, FileSearch, ShieldAlert } from 'lucide-react';

export const Page8_MobileAdsDefacement: React.FC<{ pageNumber: number; totalPages: number }> = ({
  pageNumber,
  totalPages
}) => {
  return (
    <A4PageContainer
      pageNumber={pageNumber}
      totalPages={totalPages}
      sectionTag="Apps & Defacement"
      sectionTitle="Mobile Apps, Ads Monitoring, Content &amp; Defacement"
    >
      {/* SECTION 1: MOBILE APPS & ADS MONITORING */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Mobile Apps */}
        <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 mb-2">
              <div className="flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-blue-600" />
                <h4 className="text-[11px] font-bold text-slate-900 uppercase">
                  Mobile Apps (Rogue &amp; Impersonating Apps)
                </h4>
              </div>
              <span className="text-[9.5px] font-mono text-slate-400">145 Apps Indexed</span>
            </div>

            {/* Donut & Status */}
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div>
                <div className="text-[9.5px] font-semibold text-slate-500 uppercase mb-0.5">By Store</div>
                <DonutChart
                  data={mobileAndContentData.mobileAppsStore}
                  centerLabel="145"
                  centerSubtext="Apps"
                  size={95}
                  thickness={13}
                />
              </div>
              <div>
                <div className="text-[9.5px] font-semibold text-slate-500 uppercase mb-0.5">Disposition</div>
                <ProgressBarList items={mobileAndContentData.mobileApprovalStatus} maxVal={126} />
              </div>
            </div>

            {/* Incident Summary Cards */}
            <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] bg-slate-50 p-1.5 rounded border border-slate-100 mb-2">
              <div>
                <span className="text-slate-400 text-[9px] block">Open</span>
                <span className="font-bold text-rose-600 font-mono">29</span>
              </div>
              <div>
                <span className="text-slate-400 text-[9px] block">Monitor</span>
                <span className="font-bold text-slate-700 font-mono">104</span>
              </div>
              <div>
                <span className="text-slate-400 text-[9px] block">Takedown</span>
                <span className="font-bold text-indigo-600 font-mono">1</span>
              </div>
              <div>
                <span className="text-slate-400 text-[9px] block">Cleared</span>
                <span className="font-bold text-emerald-600 font-mono">1</span>
              </div>
            </div>

            {/* Recent App Finding */}
            <div className="text-[10px] bg-slate-50 p-2 rounded border border-slate-100 flex items-center justify-between">
              <div>
                <span className="font-bold text-slate-900">ACME Solutions</span>
                <span className="text-slate-500 ml-1.5">(Store: Aptoide · Dev: Eric Tsai)</span>
              </div>
              <span className="text-[8.5px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                Not Whitelisted · Open
              </span>
            </div>
          </div>
        </div>

        {/* Ads Monitoring */}
        <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 mb-2">
              <div className="flex items-center gap-1.5">
                <Megaphone className="w-3.5 h-3.5 text-rose-600" />
                <h4 className="text-[11px] font-bold text-slate-900 uppercase">
                  Ads Monitoring (Impersonating Campaigns)
                </h4>
              </div>
              <span className="text-[9.5px] font-mono text-slate-400">64 Flagged Ads</span>
            </div>

            {/* Donut & Platforms */}
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div>
                <div className="text-[9.5px] font-semibold text-slate-500 uppercase mb-0.5">By Creative Format</div>
                <DonutChart
                  data={mobileAndContentData.adsByFormat}
                  centerLabel="7,580"
                  centerSubtext="Sessions"
                  size={95}
                  thickness={13}
                />
              </div>
              <div>
                <div className="text-[9.5px] font-semibold text-slate-500 uppercase mb-0.5">By Platform</div>
                <ProgressBarList items={mobileAndContentData.adsByPlatform} maxVal={952} />
              </div>
            </div>

            {/* Recent Ad Finding */}
            <div className="text-[10px] bg-slate-50 p-2 rounded border border-slate-100 flex items-center justify-between mt-4">
              <div>
                <span className="font-bold text-slate-900">Acme Secure Login</span>
                <span className="text-slate-500 ml-1.5">→ acme-login.com (Text)</span>
              </div>
              <span className="text-[8.5px] font-bold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">
                Status: Rejected
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: CONTENT MONITORING */}
      <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 mb-2">
          <div className="flex items-center gap-1.5">
            <FileSearch className="w-3.5 h-3.5 text-amber-600" />
            <h4 className="text-[11px] font-bold text-slate-900 uppercase">
              Content Monitoring (Brand Keyword, Executive &amp; Company Mentions)
            </h4>
          </div>
          <span className="text-[9.5px] font-mono text-slate-400">52 Pages Monitored Across 44 Domains</span>
        </div>

        {/* 3 Single Values */}
        <div className="grid grid-cols-3 gap-2 mb-2">
          {mobileAndContentData.contentMonitoringCards.map((c, i) => (
            <div key={i} className="p-2 bg-slate-50 rounded border border-slate-100">
              <span className="text-[9.5px] font-semibold text-slate-500 uppercase block">{c.title}</span>
              <span className="text-lg font-black font-mono text-slate-900">{c.value}</span>
              <p className="text-[9px] text-slate-400 truncate">{c.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Flagged Content Table & Executives Mentioned */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[10px]">
              <thead>
                <tr className="bg-slate-50 text-slate-500 border-b border-slate-200 text-[9px] uppercase font-mono">
                  <th className="py-1 px-1.5">Domain</th>
                  <th className="py-1 px-1.5">Page Path</th>
                  <th className="py-1 px-1.5 text-center">Keyword</th>
                  <th className="py-1 px-1.5 text-center">Exec</th>
                  <th className="py-1 px-1.5 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {mobileAndContentData.flaggedContent.map((f, i) => (
                  <tr key={i}>
                    <td className="py-1 px-1.5 font-bold text-slate-800">{f.domain}</td>
                    <td className="py-1 px-1.5 text-slate-500 text-[9.5px] truncate max-w-[120px]">{f.page}</td>
                    <td className="py-1 px-1.5 text-center text-blue-600 font-bold">{f.keyword}</td>
                    <td className="py-1 px-1.5 text-center text-rose-600 font-bold">{f.exec}</td>
                    <td className="py-1 px-1.5 text-right font-sans text-[8.5px] text-amber-700 font-semibold">{f.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold text-slate-700 uppercase">Executives Mentioned</span>
              <span className="text-[9px] text-rose-600 font-semibold">{mobileAndContentData.executivesContentHighlight}</span>
            </div>
            <ProgressBarList items={mobileAndContentData.executivesMentionedContent} maxVal={3} showPercentage={false} />
          </div>
        </div>
      </div>

      {/* SECTION 3: WEBSITE DEFACEMENT */}
      <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 mb-2">
          <div className="flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
            <h4 className="text-[11px] font-bold text-slate-900 uppercase">
              Website Defacement (Asset Integrity Monitoring · 3 Parameters)
            </h4>
          </div>
          <span className="text-[9.5px] font-mono text-rose-600 font-bold bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">
            Real-Time Integrity Alert
          </span>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-3 gap-2 mb-2">
          {mobileAndContentData.defacementCards.map((d, i) => (
            <div key={i} className="p-2 bg-slate-50 rounded border border-slate-100">
              <span className="text-[9.5px] font-semibold text-slate-500 uppercase block">{d.title}</span>
              <span className="text-xl font-black font-mono text-rose-600">{d.value}</span>
              <p className="text-[9px] text-slate-400 truncate">{d.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Recent Defacement Detections Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-[10.5px]">
            <thead>
              <tr className="bg-slate-50 text-slate-600 border-b border-slate-200 text-[9.5px] uppercase font-mono">
                <th className="py-1 px-2 font-semibold">Asset / URL</th>
                <th className="py-1 px-2 font-semibold">Signals Triggered</th>
                <th className="py-1 px-2 font-semibold text-center">Modified Text %</th>
                <th className="py-1 px-2 font-semibold text-center">Severity</th>
                <th className="py-1 px-2 font-semibold">Detected</th>
                <th className="py-1 px-2 font-semibold text-right">Incident Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono">
              {mobileAndContentData.recentDefacements.map((def, i) => (
                <tr key={i} className="hover:bg-slate-50/50">
                  <td className="py-1.5 px-2 font-bold text-blue-700">{def.assetUrl}</td>
                  <td className="py-1.5 px-2 font-sans text-rose-700 font-semibold">{def.signalsTriggered}</td>
                  <td className="py-1.5 px-2 text-center font-bold text-slate-800">{def.text}</td>
                  <td className="py-1.5 px-2 text-center">
                    <span className="bg-rose-100 text-rose-800 text-[8.5px] px-1.5 py-0.5 rounded font-sans font-bold">
                      {def.severity}
                    </span>
                  </td>
                  <td className="py-1.5 px-2 text-slate-500">{def.detected}</td>
                  <td className="py-1.5 px-2 text-right">
                    <span className="bg-amber-50 text-amber-800 border border-amber-200 text-[8.5px] px-1.5 py-0.5 rounded font-sans font-semibold">
                      {def.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </A4PageContainer>
  );
};
