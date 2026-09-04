import React from 'react';
import { A4PageContainer } from '../A4PageContainer';
import { MetricCard } from '../MetricCard';
import { DonutChart, ProgressBarList, VerticalBarChart } from '../ReportCharts';
import { lookalikeDomainData } from '../../reportData';
import { Globe2, ShieldAlert, Mail, Users, AlertCircle } from 'lucide-react';

export const Page7_LookalikeDomains: React.FC<{ pageNumber: number; totalPages: number }> = ({
  pageNumber,
  totalPages
}) => {
  return (
    <A4PageContainer
      pageNumber={pageNumber}
      totalPages={totalPages}
      sectionTag="Brand Defense"
      sectionTitle="Look-alike Domain Monitor (Brand Monitoring)"
    >
      {/* 4 Single Value Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {lookalikeDomainData.singleValues.map((metric, idx) => (
          <MetricCard key={idx} metric={metric} />
        ))}
      </div>

      {/* Row 2: Content Match Distribution Donut & Domain Aging Bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Radial / Donut Chart: Content Match Distribution */}
        <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">
              Content Match Distribution
            </h3>
            <p className="text-[10.5px] text-slate-500 mb-1">
              Page-similarity vs. legitimate brand site (2,349 total look-alike domains)
            </p>
          </div>
          <DonutChart
            data={lookalikeDomainData.contentMatchDonut}
            centerLabel="2,349"
            centerSubtext="Domains"
            size={130}
            thickness={18}
          />
        </div>

        {/* Progress Bars: Domain Aging */}
        <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">
                Domain Aging
              </h3>
              <span className="text-[10px] font-mono text-slate-400">As of 27 Feb 2026</span>
            </div>
            <p className="text-[10.5px] text-slate-500 mb-2">
              Time since initial discovery across worldwide registrar zone files
            </p>
            <ProgressBarList items={lookalikeDomainData.domainAgingBars} maxVal={1456} />
          </div>
          <div className="mt-2 text-[10px] text-slate-500 bg-slate-50 p-1.5 rounded border border-slate-100">
            Rapid surge: 530 newly registered (&lt;1 month) domains indicates an organized campaign.
          </div>
        </div>
      </div>

      {/* Row 3: Detection Timeline Bar Chart & DNS Resolution / MX Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Vertical Bar Chart: Detection Timeline */}
        <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs">
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-[11px] font-bold text-slate-900 uppercase">
              Detection Timeline (By Period)
            </h4>
            <span className="text-[9.5px] font-mono text-slate-400">Axis: 100, 80...0</span>
          </div>
          <p className="text-[9.5px] text-slate-500 mb-1">Weekly new look-alikes detected</p>
          <VerticalBarChart
            data={lookalikeDomainData.detectionTimeline}
            primaryLegend="Domains detected"
            barColor="#2563eb"
            height={115}
          />
        </div>

        {/* DNS Resolution Status Card */}
        <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <Globe2 className="w-3.5 h-3.5 text-blue-600" />
              <h4 className="text-[11px] font-bold text-slate-900 uppercase">
                DNS Resolution Status
              </h4>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded p-2 text-[10.5px] text-blue-900 font-semibold mb-2">
              {lookalikeDomainData.dnsResolution.highlightText}
            </div>
            <ProgressBarList items={lookalikeDomainData.dnsResolution.bars} maxVal={1919} />
          </div>
        </div>

        {/* MX Active Status Card */}
        <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <Mail className="w-3.5 h-3.5 text-rose-600" />
              <h4 className="text-[11px] font-bold text-slate-900 uppercase">
                MX Active (Email Capable)
              </h4>
            </div>
            <div className="bg-rose-50 border border-rose-200 rounded p-2 text-[10.5px] text-rose-900 font-semibold mb-2">
              {lookalikeDomainData.mxActive.highlightText}
            </div>
            <ProgressBarList items={lookalikeDomainData.mxActive.bars} maxVal={1747} />
          </div>
        </div>
      </div>

      {/* Row 4: Mail Providers, Executive Mentions & Top Look-alike Domains Table */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Mail Providers Behind Active MX */}
        <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs">
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-[10.5px] font-bold text-slate-900 uppercase">
              Mail Providers Behind Active MX
            </h4>
            <span className="text-[9px] font-mono text-slate-400">602 with Active MX</span>
          </div>
          <ProgressBarList items={lookalikeDomainData.mailProviders} maxVal={242} showPercentage={false} />
        </div>

        {/* Executive Mentions */}
        <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-[10.5px] font-bold text-slate-900 uppercase flex items-center gap-1">
                <Users className="w-3 h-3 text-amber-600" />
                Executive Mentions
              </h4>
              <span className="text-[9px] font-mono text-rose-600 font-bold">CEO Fraud Risk</span>
            </div>
            <ProgressBarList items={lookalikeDomainData.executiveMentions} maxVal={5} showPercentage={false} />
          </div>
          <div className="mt-2 bg-rose-50 border border-rose-200 rounded p-1.5 text-[9.5px] text-rose-800 font-medium">
            {lookalikeDomainData.executiveMentionsHighlight}
          </div>
        </div>

        {/* Top Look-alike Domains by Content Match */}
        <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs">
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-[10.5px] font-bold text-slate-900 uppercase">
              Top Look-alikes (High Similarity)
            </h4>
            <span className="text-[9px] font-bold text-rose-600 bg-rose-50 px-1 rounded">Prioritize Takedown</span>
          </div>
          <div className="space-y-1.5 text-[10px] mt-2">
            {lookalikeDomainData.topLookalikes.map((d, i) => (
              <div key={i} className="p-1.5 rounded bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-mono font-bold text-blue-700">{d.domain}</div>
                  <div className="text-slate-400 text-[9px]">Last seen: {d.lastSeen}</div>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-mono font-bold text-rose-600 bg-rose-50 px-1 py-0.2 rounded border border-rose-200">
                    {d.matches} match
                  </span>
                  <div className="text-[8.5px] text-slate-500 mt-0.5">{d.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </A4PageContainer>
  );
};
