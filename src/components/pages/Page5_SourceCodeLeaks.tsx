import React from 'react';
import { A4PageContainer } from '../A4PageContainer';
import { MetricCard } from '../MetricCard';
import { DonutChart, TrendLineChart, VerticalBarChart } from '../ReportCharts';
import { sourceCodeLeaksData } from '../../reportData';
import { Code2, KeyRound, AlertOctagon, GitFork, ShieldCheck } from 'lucide-react';

export const Page5_SourceCodeLeaks: React.FC<{ pageNumber: number; totalPages: number }> = ({
  pageNumber,
  totalPages
}) => {
  return (
    <A4PageContainer
      pageNumber={pageNumber}
      totalPages={totalPages}
      sectionTag="Code Security"
      sectionTitle="Source Code Leaks &amp; Secret Exposure"
    >
      {/* 4 Single Value Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {sourceCodeLeaksData.singleValues.map((metric, idx) => (
          <MetricCard key={idx} metric={metric} />
        ))}
      </div>

      {/* Row 2: Leak Detection Trend & Donut Severity */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Trend Graph */}
        <div className="md:col-span-2 bg-white border border-slate-200 rounded-lg p-3.5 shadow-xs">
          <div className="flex items-center justify-between mb-1">
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">
                Leak Detection Trend (Detected vs. Remediated, Last 8 Weeks)
              </h3>
              <p className="text-[10px] text-slate-500">Cumulative detection timeline against revocation velocity</p>
            </div>
            <span className="text-[9.5px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
              Axis: 250, 200...0
            </span>
          </div>
          <TrendLineChart
            data={sourceCodeLeaksData.trendGraph}
            primaryLegend="Detected Leaks (250)"
            secondaryLegend="Remediated (215)"
            yMax={250}
            yTicks={[0, 50, 100, 150, 200, 250]}
            primaryColor="#ea580c"
            secondaryColor="#10b981"
            height={130}
          />
        </div>

        {/* Donut Chart: Leak Severity */}
        <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">
              Leak Severity
            </h3>
            <p className="text-[10px] text-slate-500 mb-1">412 leaks classified by criticality</p>
          </div>
          <DonutChart
            data={sourceCodeLeaksData.severityDonut}
            centerLabel="412 Leaks"
            centerSubtext="Total"
            size={115}
            thickness={16}
          />
        </div>
      </div>

      {/* Row 3: Leaks by Source & Secret Types Detected Bar Graphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Vertical Bar Graph: Leaks by Source */}
        <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs">
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-[11px] font-bold text-slate-900 uppercase">
              Leaks by Source (Where Code &amp; Secrets Surfaced)
            </h4>
            <span className="text-[9.5px] font-mono text-slate-400">Axis: 100, 80...0</span>
          </div>
          <VerticalBarChart
            data={sourceCodeLeaksData.leaksBySource}
            yMax={100}
            primaryLegend="Leaks Count"
            barColor="#3b82f6"
            height={130}
          />
        </div>

        {/* Vertical Bar Graph: Secret Types Detected */}
        <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs">
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-[11px] font-bold text-slate-900 uppercase">
              Secret Types Detected (312 Classified Secrets)
            </h4>
            <span className="text-[9.5px] font-mono text-slate-400">Axis: 100, 80...0</span>
          </div>
          <VerticalBarChart
            data={sourceCodeLeaksData.secretTypesDetected}
            yMax={100}
            primaryLegend="Secrets Ingested"
            barColor="#e11d48"
            height={130}
          />
        </div>
      </div>

      {/* Row 4: Tables (Higher Risk Repos, Recent Leaks, Leaked Postman Requests) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Table 1: Higher Risk-Ranked Repositories */}
        <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-[10.5px] font-bold text-slate-900 uppercase flex items-center gap-1">
              <GitFork className="w-3 h-3 text-slate-600" />
              High Risk Repositories
            </h4>
            <span className="text-[9px] font-mono text-rose-600 font-bold">Top Secrets</span>
          </div>
          <div className="space-y-1 text-[10px]">
            {sourceCodeLeaksData.higherRiskRepos.slice(0, 4).map((r, i) => (
              <div key={i} className="p-1.5 rounded bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-mono font-bold text-slate-900">{r.repository}</div>
                  <div className="text-slate-500 text-[9px]">{r.source}</div>
                </div>
                <div className="text-right">
                  <span className="font-mono font-bold text-rose-600">{r.secrets} secrets</span>
                  <span className="block text-[8.5px] text-rose-700 font-semibold">{r.severity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Table 2: Recent Leaks */}
        <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-[10.5px] font-bold text-slate-900 uppercase flex items-center gap-1">
              <KeyRound className="w-3 h-3 text-amber-600" />
              Recent Leaks
            </h4>
            <span className="text-[9px] font-mono text-slate-400">Fresh Ingestion</span>
          </div>
          <div className="space-y-1 text-[10px]">
            {sourceCodeLeaksData.recentLeaks.slice(0, 4).map((l, i) => (
              <div key={i} className="p-1.5 rounded bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-mono font-bold text-slate-900 truncate max-w-[110px]">{l.finding}</div>
                  <div className="text-slate-500 text-[9px]">{l.type} · {l.source}</div>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-mono text-slate-500 text-[9px]">{l.detected}</span>
                  <span className="block text-[8.5px] text-rose-700 font-bold">{l.severity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Table 3: Leaked Postman Requests */}
        <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs">
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-[10.5px] font-bold text-slate-900 uppercase">
              Leaked Postman Requests
            </h4>
            <span className="text-[9px] font-mono text-amber-600 font-bold">162 Leaks</span>
          </div>
          <p className="text-[9px] text-slate-500 mb-2">6 public secrets · 156 public endpoints</p>
          <div className="space-y-1 text-[10px]">
            {sourceCodeLeaksData.postmanRequests.slice(0, 4).map((p, i) => (
              <div key={i} className="p-1.5 rounded bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div className="min-w-0 pr-1">
                  <span className="font-mono font-bold text-blue-600 mr-1 text-[9px]">{p.method}</span>
                  <span className="font-mono text-slate-700 text-[9.5px] truncate inline-block max-w-[95px] align-bottom">{p.url}</span>
                </div>
                <span className={`text-[8.5px] px-1 py-0.2 rounded shrink-0 font-semibold ${
                  p.severity === 'Critical' ? 'bg-rose-100 text-rose-800' : p.severity === 'High' ? 'bg-amber-100 text-amber-800' : 'bg-slate-200 text-slate-700'
                }`}>
                  {p.severity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </A4PageContainer>
  );
};
