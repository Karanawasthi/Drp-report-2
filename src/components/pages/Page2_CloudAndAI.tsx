import React from 'react';
import { A4PageContainer } from '../A4PageContainer';
import { DonutChart, ProgressBarList, VerticalBarChart } from '../ReportCharts';
import { cloudExposureData, aiExposureData } from '../../reportData';
import { Cloud, Bot, AlertTriangle, ShieldCheck, Cpu } from 'lucide-react';

export const Page2_CloudAndAI: React.FC<{ pageNumber: number; totalPages: number }> = ({
  pageNumber,
  totalPages
}) => {
  return (
    <A4PageContainer
      pageNumber={pageNumber}
      totalPages={totalPages}
      sectionTag="Cloud & AI"
      sectionTitle="Cloud Exposure Validation & AI Exposure"
    >
      {/* SECTION 1: CLOUD EXPOSURE VALIDATION */}
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
          <div className="flex items-center gap-2">
            <Cloud className="w-4 h-4 text-sky-600" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">
              Cloud Exposure Validation
            </h3>
          </div>
          <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
            {cloudExposureData.subtitle}
          </span>
        </div>

        {/* Top summary row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Posture Donut */}
          <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs">
            <div className="text-[10.5px] font-bold text-slate-700 uppercase mb-1">
              AWS Posture Compliance
            </div>
            <DonutChart
              data={cloudExposureData.postureDonut}
              centerLabel="3,140"
              centerSubtext="Total Checks"
              size={110}
              thickness={15}
            />
          </div>

          {/* Single Values */}
          <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs flex flex-col justify-around">
            <div className="border-b border-slate-100 pb-2">
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                Exposed Resources
              </span>
              <div className="text-2xl font-black font-mono text-rose-600">494</div>
              <p className="text-[10px] text-slate-500">Directly exposed to public internet</p>
            </div>
            <div className="pt-2">
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                Regions Affected
              </span>
              <div className="text-2xl font-black font-mono text-slate-900">18</div>
              <p className="text-[10px] text-slate-500">AWS regions with public posture flaws</p>
            </div>
          </div>

          {/* Failed Checks by Severity */}
          <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs">
            <div className="flex items-center justify-between text-[10.5px] font-bold text-slate-700 uppercase mb-1">
              <span>Failed Checks by Severity</span>
              <span className="text-rose-600 font-mono">829 Failed</span>
            </div>
            <ProgressBarList items={cloudExposureData.failedBySeverity} maxVal={829} />
          </div>
        </div>

        {/* Top Exposed Services Bar List */}
        <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10.5px] font-bold text-slate-900 uppercase">
              Top Exposed AWS Services
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              EC2 (324) · IAM (74) · VPC (186) · S3 (142) · CloudTrail (103)
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
            <ProgressBarList items={cloudExposureData.topExposedServices} maxVal={350} showPercentage={false} />
          </div>
        </div>
      </div>

      {/* SECTION 2: AI EXPOSURE */}
      <div className="space-y-3 pt-2 border-t border-slate-200">
        <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-indigo-600" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">
              AI Exposure
            </h3>
          </div>
          <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
            {aiExposureData.subtitle}
          </span>
        </div>

        {/* AI Metrics & Charts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Donut Chart: Total Results */}
          <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs">
            <div className="text-[10.5px] font-bold text-slate-700 uppercase mb-1">
              AI Vulnerability Severity
            </div>
            <div className="text-[10px] text-slate-500 mb-1">
              45 Assets Found · 12 At Risk
            </div>
            <DonutChart
              data={aiExposureData.donutResults}
              centerLabel="12"
              centerSubtext="At Risk"
              size={110}
              thickness={15}
            />
          </div>

          {/* Vertical Bar Chart: Exposed AI Agents over time */}
          <div className="md:col-span-2 bg-white border border-slate-200 rounded-lg p-3 shadow-xs">
            <div className="flex items-center justify-between mb-1">
              <div>
                <h4 className="text-[10.5px] font-bold text-slate-900 uppercase">
                  Exposed AI Agents (Publicly Reachable Agents Over Time)
                </h4>
                <p className="text-[10px] text-slate-500">
                  Weekly growth of indexed LLM endpoints &amp; actively vulnerable agents
                </p>
              </div>
              <span className="text-[9.5px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                Axis: 80, 60...0
              </span>
            </div>
            <VerticalBarChart
              data={aiExposureData.exposedAgentsTimeline}
              yMax={80}
              primaryLegend="Discovered Agents"
              secondaryLegend="Exposed & At Risk"
              barColor="#6366f1"
              height={125}
            />
          </div>
        </div>

        {/* Table/Grid Format: Recent Findings */}
        <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-[10.5px] font-bold text-slate-900 uppercase flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-indigo-600" />
              Recent AI Exposure Findings (Sample Data)
            </h4>
            <span className="text-[9.5px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
              High Exploitability
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[10.5px]">
              <thead>
                <tr className="bg-slate-50 text-slate-600 border-b border-slate-200 text-[9.5px] uppercase font-mono">
                  <th className="py-1.5 px-2 font-semibold">IP Address</th>
                  <th className="py-1.5 px-2 font-semibold">Port</th>
                  <th className="py-1.5 px-2 font-semibold">Hostname</th>
                  <th className="py-1.5 px-2 font-semibold">Exposed Asset</th>
                  <th className="py-1.5 px-2 font-semibold text-center">Risk Score</th>
                  <th className="py-1.5 px-2 font-semibold text-center">Exploitability</th>
                  <th className="py-1.5 px-2 font-semibold">Impact Assessment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {aiExposureData.recentFindings.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="py-1.5 px-2 font-mono font-medium text-slate-800">{row.ip}</td>
                    <td className="py-1.5 px-2 font-mono text-slate-600">{row.port}</td>
                    <td className="py-1.5 px-2 font-mono text-blue-600">{row.hostname}</td>
                    <td className="py-1.5 px-2 text-slate-700 font-medium">{row.exposedAsset}</td>
                    <td className="py-1.5 px-2 text-center">
                      <span className="font-mono font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded text-[9.5px] border border-rose-200">
                        {row.riskScore}
                      </span>
                    </td>
                    <td className="py-1.5 px-2 text-center">
                      <span className="text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded font-bold text-[9px] border border-amber-200">
                        {row.exploitability}
                      </span>
                    </td>
                    <td className="py-1.5 px-2 text-slate-600 text-[10px]">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </A4PageContainer>
  );
};
