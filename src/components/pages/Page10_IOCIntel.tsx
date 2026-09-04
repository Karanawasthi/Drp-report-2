import React from 'react';
import { A4PageContainer } from '../A4PageContainer';
import { MetricCard } from '../MetricCard';
import { DonutChart, ProgressBarList, VerticalBarChart } from '../ReportCharts';
import { iocData, reportMetadata } from '../../reportData';
import { Activity, ShieldCheck, Database, CheckCircle, FileCheck, Lock } from 'lucide-react';

export const Page10_IOCIntel: React.FC<{ pageNumber: number; totalPages: number }> = ({
  pageNumber,
  totalPages
}) => {
  return (
    <A4PageContainer
      pageNumber={pageNumber}
      totalPages={totalPages}
      sectionTag="Threat Feed"
      sectionTitle="IOC Threat Intelligence &amp; Ingestion Feed"
    >
      {/* 4 Single Value Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {iocData.singleValues.map((ioc, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs">
            <span className="text-[10px] font-semibold text-slate-500 uppercase block tracking-wider mb-0.5">
              {ioc.title}
            </span>
            <div className="text-2xl font-black font-mono text-slate-900">{ioc.value}</div>
            <p className="text-[10px] text-slate-500 mt-0.5">{ioc.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Row 2: Donut Chart IOCs by Type & Top Threat Tags Progress Bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Donut Chart: IOCs by Type */}
        <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">
              IOCs by Type (Indicator Category &amp; Signature Split)
            </h3>
            <p className="text-[10.5px] text-slate-500 mb-1">
              Distribution of technical indicators ingested across intelligence feeds
            </p>
          </div>
          <DonutChart
            data={iocData.iocsByType}
            centerLabel="2,106"
            centerSubtext="IOCs"
            size={135}
            thickness={18}
          />
        </div>

        {/* Progress Bars: Top Threat Tags */}
        <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">
                Top Threat Tags (Active Campaigns)
              </h3>
              <span className="text-[10px] font-mono text-slate-400">90 Distinct Tags</span>
            </div>
            <p className="text-[10.5px] text-slate-500 mb-2">
              Most prevalent malware campaigns active across global observation sensors
            </p>
            <ProgressBarList items={iocData.topThreatTags} maxVal={486} />
          </div>
          <div className="mt-2 text-[10.5px] bg-slate-50 p-2 rounded border border-slate-100 text-slate-600">
            <strong>Action Trigger:</strong> Autonomous ingestion into enterprise EDR, DNS sinkholes, and WAF firewall blacklists completed.
          </div>
        </div>
      </div>

      {/* Row 3: Vertical Bar Chart: IOC Detections Over Time */}
      <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-xs">
        <div className="flex items-center justify-between mb-1">
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-tight">
              IOC Detections Over Time (Daily New Indicators · Last 7 Days)
            </h4>
            <p className="text-[10px] text-slate-500">
              Velocity of fresh technical indicators ingested and blocked at perimeter
            </p>
          </div>
          <span className="text-[9.5px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
            Axis: 100, 80...0
          </span>
        </div>
        <VerticalBarChart
          data={iocData.iocDetectionsOverTime}
          yMax={135}
          primaryLegend="New Indicators Ingested"
          barColor="#0284c7"
          height={115}
        />
      </div>

      {/* Row 4: Recent IOCs Ingested Table */}
      <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-xs overflow-hidden">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xs font-bold text-slate-900 uppercase flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-blue-600" />
            Recent IOCs (Latest Ingested Threat Feed)
          </h4>
          <span className="text-[9.5px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            Automated Block Enforced
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-[10.5px]">
            <thead>
              <tr className="bg-slate-50 text-slate-600 border-b border-slate-200 text-[9.5px] uppercase font-mono">
                <th className="py-2 px-2.5 font-semibold">Field Type</th>
                <th className="py-2 px-2.5 font-semibold">Field Value (Indicator)</th>
                <th className="py-2 px-2.5 font-semibold">Threat Campaign Tag</th>
                <th className="py-2 px-2.5 font-semibold text-right">Detection Date &amp; Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono">
              {iocData.recentIocs.map((ioc, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60">
                  <td className="py-2 px-2.5">
                    <span className="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[9.5px] border border-slate-200">
                      {ioc.fieldType}
                    </span>
                  </td>
                  <td className="py-2 px-2.5 font-bold text-slate-900 text-[10px] break-all">
                    {ioc.fieldValue}
                  </td>
                  <td className="py-2 px-2.5 font-sans font-semibold text-rose-700">
                    {ioc.tag}
                  </td>
                  <td className="py-2 px-2.5 text-right text-slate-500 text-[10px]">
                    {ioc.detectionDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Report Sign-off & Cryptographic Integrity Box */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-[10.5px] text-slate-600 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div>
          <div className="flex items-center gap-1.5 font-bold text-slate-900">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            Report Certification &amp; Custody
          </div>
          <p className="text-[10px] text-slate-500 mt-0.5">
            Compiled for Chief Information Security Officer (CISO) &amp; Executive Security Council.
          </p>
        </div>
        <div className="font-mono text-[9.5px] text-slate-500 text-left sm:text-right">
          <div>SHA-256: 7f8a9e1d02c4b8e612f073ac991823ab44e89102c</div>
          <div className="text-emerald-700 font-semibold">Signed: ACME SOC SecOps Automation · TLP:AMBER</div>
        </div>
      </div>
    </A4PageContainer>
  );
};
