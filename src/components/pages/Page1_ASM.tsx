import React from 'react';
import { A4PageContainer } from '../A4PageContainer';
import { MetricCard } from '../MetricCard';
import { DonutChart, TrendLineChart, ProgressBarList } from '../ReportCharts';
import { asmData, reportMetadata } from '../../reportData';
import { ShieldAlert, AlertTriangle, Flame, CheckCircle2, Server, Globe } from 'lucide-react';

export const Page1_ASM: React.FC<{ pageNumber: number; totalPages: number }> = ({
  pageNumber,
  totalPages
}) => {
  return (
    <A4PageContainer
      pageNumber={pageNumber}
      totalPages={totalPages}
      sectionTag="ASM"
      sectionTitle="Attack Surface Monitor"
    >
      {/* Executive Brief Box */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-700">
        <div className="flex items-center justify-between font-semibold text-slate-900 mb-1">
          <span className="flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-rose-600" />
            Executive Perimeter Posture Summary
          </span>
          <span className="font-mono text-[11px] text-slate-500">Timeline: 12 May – 12 July 2026</span>
        </div>
        <p className="leading-relaxed text-[11.5px] text-slate-600">
          Continuous passive and active perimeter reconnaissance indexed <strong>1,284 total assets</strong>, surfacing <strong>412 web vulnerabilities</strong> and <strong>287 host IP vulnerabilities</strong>. High-risk exposure includes <strong>56 new critical ports</strong> and <strong>14 CISA Known Exploited Vulnerabilities (KEV)</strong> requiring immediate emergency remediation.
        </p>
      </div>

      {/* 4 Single Value Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {asmData.singleValues.map((metric, idx) => (
          <MetricCard key={idx} metric={metric} />
        ))}
      </div>

      {/* Discovery & Vulnerability Trend Graph */}
      <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
          <div>
            <h3 className="text-xs font-bold text-slate-900 tracking-tight uppercase">
              Discovery &amp; Vulnerability Trend (Cumulative, Last 8 Weeks)
            </h3>
            <p className="text-[10.5px] text-slate-500">
              Cumulative progression of discovered perimeter assets vs. verified vulnerabilities
            </p>
          </div>
          <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
            Vertical: 1400, 1200 ... 0
          </span>
        </div>
        <TrendLineChart
          data={asmData.trendGraph}
          primaryLegend="Total Assets Discovered (1,284)"
          secondaryLegend="Cumulative Vulnerabilities (412)"
          yMax={1400}
          yTicks={[0, 400, 800, 1200, 1400]}
          primaryColor="#2563eb"
          secondaryColor="#e11d48"
          height={140}
        />
      </div>

      {/* Severity Breakdown: Web Vulnerability Donut & IP Vulnerability Severity Progress Bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Donut Chart: Web Vulnerability Severity */}
        <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-xs flex flex-col justify-between">
          <div className="mb-1">
            <h3 className="text-xs font-bold text-slate-900 tracking-tight uppercase">
              Web Vulnerability Severity
            </h3>
            <p className="text-[10.5px] text-slate-500">
              412 findings across external web applications
            </p>
          </div>
          <DonutChart
            data={asmData.webSeverityDonut}
            centerLabel="412"
            centerSubtext="Findings"
            size={125}
            thickness={16}
          />
        </div>

        {/* Progress bars: IP Vulnerability Severity */}
        <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-xs font-bold text-slate-900 tracking-tight uppercase">
                IP Vulnerability Severity
              </h3>
              <span className="text-[10px] font-mono font-bold text-slate-500">287 findings</span>
            </div>
            <p className="text-[10.5px] text-slate-500 mb-2">
              Distribution across exposed IP assets &amp; host daemons
            </p>
            <ProgressBarList items={asmData.ipSeverityBars} maxVal={287} />
          </div>

          {/* CISA KEV Highlight Banner */}
          <div className="mt-3 bg-rose-50 border border-rose-200 rounded-md p-2 flex items-center gap-2 text-rose-800 text-[11px] font-medium">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{asmData.cisaKevHighlight}</span>
          </div>
        </div>
      </div>

      {/* Top 5 IP & Web Vulnerabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Top 5 IP Vulnerabilities */}
        <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-slate-900 uppercase flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-blue-600" />
              Top 5 IP Vulnerabilities
            </h3>
            <span className="text-[10px] font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
              KEV Prioritized
            </span>
          </div>
          <div className="space-y-1.5">
            {asmData.top5IpVulns.map((vuln) => (
              <div
                key={vuln.id}
                className="text-[11px] p-2 rounded bg-slate-50 border border-slate-100 flex items-center justify-between gap-2"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-mono font-bold text-slate-900">{vuln.cweOrCve}</span>
                    {vuln.isKev && (
                      <span className="bg-rose-100 text-rose-700 text-[9px] font-bold px-1.5 py-0.2 rounded">
                        KEV
                      </span>
                    )}
                  </div>
                  <div className="text-slate-600 truncate text-[10.5px]">{vuln.name}</div>
                </div>
                <div className="text-right shrink-0">
                  <span
                    className={`inline-block text-[9.5px] font-bold px-1.5 py-0.5 rounded ${
                      vuln.severity === 'Critical'
                        ? 'bg-rose-100 text-rose-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {vuln.severity}
                  </span>
                  <div className="text-[10px] font-mono text-slate-500 mt-0.5">
                    {vuln.assetsImpacted}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top 5 Web Vulnerabilities */}
        <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-slate-900 uppercase flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-emerald-600" />
              Top 5 Web Vulnerabilities
            </h3>
            <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
              Public Endpoints
            </span>
          </div>
          <div className="space-y-1.5">
            {asmData.top5WebVulns.map((vuln) => (
              <div
                key={vuln.id}
                className="text-[11px] p-2 rounded bg-slate-50 border border-slate-100 flex items-center justify-between gap-2"
              >
                <div className="min-w-0 flex-1">
                  <div className="font-mono font-bold text-slate-900 truncate">
                    {vuln.cweOrCve}
                  </div>
                  <div className="text-slate-600 truncate text-[10.5px]">{vuln.name}</div>
                </div>
                <div className="text-right shrink-0">
                  <span
                    className={`inline-block text-[9.5px] font-bold px-1.5 py-0.5 rounded ${
                      vuln.severity === 'Critical'
                        ? 'bg-rose-100 text-rose-800'
                        : vuln.severity === 'High'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {vuln.severity}
                  </span>
                  <div className="text-[10px] font-mono text-slate-500 mt-0.5">
                    {vuln.assetsImpacted}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </A4PageContainer>
  );
};
