import React from 'react';
import { A4PageContainer } from '../A4PageContainer';
import { MetricCard } from '../MetricCard';
import { DonutChart, ProgressBarList, RadarPentagonChart } from '../ReportCharts';
import { credentialBreachData } from '../../reportData';
import { KeyRound, ShieldAlert, UserCheck, Bug } from 'lucide-react';

export const Page3_CredentialBreaches: React.FC<{ pageNumber: number; totalPages: number }> = ({
  pageNumber,
  totalPages
}) => {
  return (
    <A4PageContainer
      pageNumber={pageNumber}
      totalPages={totalPages}
      sectionTag="Data Leaks"
      sectionTitle="Credential &amp; Identity Breaches"
    >
      {/* Subtitle callout */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-700 flex items-center justify-between">
        <div>
          <span className="font-bold text-slate-900 block mb-0.5">
            Exposed Corporate &amp; Third-Party Credentials Intelligence
          </span>
          <p className="text-[11px] text-slate-600">
            Monitoring active stealer malware telemetry, compromised corporate employee SSO logins, and credential-stuffing exposure databases.
          </p>
        </div>
        <span className="shrink-0 text-[10px] font-mono bg-rose-50 text-rose-700 border border-rose-200 font-bold px-2 py-1 rounded">
          HIGH RISK IMPACT
        </span>
      </div>

      {/* 3 Single Value Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {credentialBreachData.singleValues.map((metric, idx) => (
          <MetricCard key={idx} metric={metric} />
        ))}
      </div>

      {/* Row 2: Most Exposed URLs Donut & Top Breached 3rd-Party Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Donut: Most Exposed URLs */}
        <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">
              Most Exposed URLs (Credential Breach · By Destination)
            </h3>
            <p className="text-[10.5px] text-slate-500 mb-1">
              Destination web portals where corporate user credentials were leaked
            </p>
          </div>
          <DonutChart
            data={credentialBreachData.exposedUrlsDonut}
            centerLabel="184"
            centerSubtext="Leaks"
            size={135}
            thickness={18}
          />
        </div>

        {/* Progress bars: Top Breached 3rd-Party Services */}
        <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">
                Top Breached 3rd-Party Services
              </h3>
              <span className="text-[10px] font-mono text-slate-500">Staff Reused Emails</span>
            </div>
            <p className="text-[10.5px] text-slate-500 mb-3">
              External platforms breached where enterprise domain emails were utilized
            </p>
            <ProgressBarList items={credentialBreachData.topBreachedThirdParty} maxVal={87} />
          </div>
          <div className="mt-2 text-[10px] text-slate-500 bg-slate-50 p-1.5 rounded border border-slate-100">
            <strong>Observation:</strong> Reused passwords on these 5 services heighten credential replay attacks against corporate Single Sign-On (SSO).
          </div>
        </div>
      </div>

      {/* Row 3: Pentagonal Radar Chart & Executives by Credential Breaches */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Pentagonal Radar Chart: Info-Stealer Malware Families */}
        <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-xs flex flex-col items-center justify-between">
          <div className="w-full mb-1 text-left">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight flex items-center gap-1.5">
              <Bug className="w-3.5 h-3.5 text-rose-600" />
              Info-Stealer Malware Families (Radar View)
            </h3>
            <p className="text-[10.5px] text-slate-500">
              Identified strains (excl. unclassified) — performance distribution
            </p>
          </div>
          <div className="py-2">
            <RadarPentagonChart data={credentialBreachData.infoStealerRadar} size={170} />
          </div>
          <div className="w-full text-[10px] font-mono text-slate-500 border-t border-slate-100 pt-2 flex justify-between">
            <span>RedLine &amp; Lumma dominant</span>
            <span className="font-bold text-rose-600">515 Logs Analyzed</span>
          </div>
        </div>

        {/* Progress Bars: Executives by Credential Breaches */}
        <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-amber-600" />
                Executives by Credential Breaches
              </h3>
              <span className="text-[10px] font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                VIP Watchlist
              </span>
            </div>
            <p className="text-[10.5px] text-slate-500 mb-3">
              Credential Breaches detected for each Leader &amp; C-suite Officer
            </p>
            <ProgressBarList
              items={credentialBreachData.executivesCredentialBreaches.map(e => ({
                label: `${e.label} (${e.role})`,
                value: e.value,
                color: e.color
              }))}
              maxVal={3}
              showPercentage={false}
            />
          </div>
          <div className="mt-3 bg-amber-50 border border-amber-200 rounded p-2 text-[10.5px] text-amber-800">
            <strong>Remediation Notice:</strong> Mandatory password resets and hardware FIDO2 MFA keys enforced for John Doe (3) and Jane Smith (2).
          </div>
        </div>
      </div>
    </A4PageContainer>
  );
};
