import React from 'react';
import { A4PageContainer } from '../A4PageContainer';
import { MetricCard } from '../MetricCard';
import { DonutChart, ProgressBarList, StackedBarChart, VerticalBarChart } from '../ReportCharts';
import { socialMediaData, ransomwareData } from '../../reportData';
import { Share2, Skull, ShieldAlert, Globe2, Radio } from 'lucide-react';

export const Page9_SocialMediaAndIntel: React.FC<{ pageNumber: number; totalPages: number }> = ({
  pageNumber,
  totalPages
}) => {
  return (
    <A4PageContainer
      pageNumber={pageNumber}
      totalPages={totalPages}
      sectionTag="Social & Intel"
      sectionTitle="Social Media Sentiment &amp; Ransomware Intel"
    >
      {/* SECTION 1: SOCIAL MEDIA SENTIMENT */}
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
          <div className="flex items-center gap-2">
            <Share2 className="w-4 h-4 text-sky-600" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">
              Social Media (Brand Mention Sentiment Across Platforms)
            </h3>
          </div>
          <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
            231 Mentions Analysed
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Donut Chart: Overall Sentiment & Single values card */}
          <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs flex flex-col justify-between">
            <div>
              <h4 className="text-[11px] font-bold text-slate-900 uppercase mb-1">
                Overall Sentiment
              </h4>
              <p className="text-[9.5px] text-slate-500 mb-1">Sentiment polarization across public mentions</p>
            </div>
            <DonutChart
              data={socialMediaData.overallSentiment}
              centerLabel="231"
              centerSubtext="Mentions"
              size={105}
              thickness={15}
            />
            {/* Single values (inside card only as requested) */}
            <div className="mt-2 pt-2 border-t border-slate-100 grid grid-cols-2 gap-2 text-center text-xs">
              <div className="bg-emerald-50 rounded p-1.5 border border-emerald-100">
                <span className="text-[9.5px] text-emerald-800 font-medium block">Positive Share</span>
                <span className="text-base font-bold font-mono text-emerald-700">
                  {socialMediaData.singleValues.positiveShare}
                </span>
              </div>
              <div className="bg-rose-50 rounded p-1.5 border border-rose-100">
                <span className="text-[9.5px] text-rose-800 font-medium block">Negative Mentions</span>
                <span className="text-base font-bold font-mono text-rose-700">
                  {socialMediaData.singleValues.negativeMentions}
                </span>
              </div>
            </div>
          </div>

          {/* Stacked Vertical Bar Chart: Sentiment by Platform */}
          <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-[11px] font-bold text-slate-900 uppercase">
                  Sentiment by Platform
                </h4>
                <span className="text-[9px] font-mono text-slate-400">Axis: 100, 80...0</span>
              </div>
              <p className="text-[9.5px] text-slate-500 mb-1">
                Positive · neutral · negative split per channel
              </p>
            </div>
            <StackedBarChart data={socialMediaData.sentimentByPlatform} height={125} />
          </div>

          {/* Progress Bars: Social Media by Platform */}
          <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-[11px] font-bold text-slate-900 uppercase">
                  Posts by Social Platform
                </h4>
                <span className="text-[9px] font-mono text-slate-400">Total Volume</span>
              </div>
              <p className="text-[9.5px] text-slate-500 mb-2">Platform distribution of identified posts</p>
              <ProgressBarList items={socialMediaData.socialMediaByPlatform} maxVal={952} />
            </div>
            <div className="mt-2 text-[9.5px] bg-slate-50 p-1 rounded border border-slate-100 flex items-center justify-between font-mono">
              <span className="font-bold text-slate-900">@acme_official</span>
              <span className="text-slate-500">X (Twitter) · Profile · 28 Jul 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: RANSOMWARE & THREAT INTEL */}
      <div className="space-y-3 pt-2 border-t border-slate-200">
        <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
          <div className="flex items-center gap-2">
            <Skull className="w-4 h-4 text-rose-600" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">
              Ransomware Intel
            </h3>
          </div>
          <span className="text-[10px] font-mono text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200 font-bold">
            Threat Landscape Monitor
          </span>
        </div>

        {/* 4 Single Value Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {ransomwareData.singleValues.map((r, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-lg p-2.5 shadow-xs">
              <span className="text-[9.5px] font-semibold text-slate-500 uppercase block tracking-wider">
                {r.title}
              </span>
              <div className="text-xl font-black font-mono text-slate-900 mt-0.5">{r.value}</div>
              <p className="text-[9px] text-slate-500 mt-0.5">{r.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Donut Chart: Attacks by Group & Country Bars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Donut: Attacks by Group */}
          <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs flex flex-col justify-between">
            <div>
              <h4 className="text-[11px] font-bold text-slate-900 uppercase">
                Attacks by Group
              </h4>
              <p className="text-[9.5px] text-slate-500 mb-1">Share of named victims globally</p>
            </div>
            <DonutChart
              data={ransomwareData.attacksByGroup}
              centerLabel="5,000"
              centerSubtext="Total Count"
              size={110}
              thickness={15}
            />
          </div>

          {/* Progress Bars: Attacks by Countries */}
          <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs flex flex-col justify-between">
            <div>
              <h4 className="text-[11px] font-bold text-slate-900 uppercase">
                Attacks by Countries
              </h4>
              <p className="text-[9.5px] text-slate-500 mb-2">Victim organisation geographic distribution</p>
              <ProgressBarList items={ransomwareData.attacksByCountries} maxVal={1513} />
            </div>
          </div>

          {/* Victims Over Time Vertical Bar Chart */}
          <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-[11px] font-bold text-slate-900 uppercase">
                  Ransomware Victims Over Time
                </h4>
                <span className="text-[9px] font-mono text-slate-400">Axis: 100, 80...0</span>
              </div>
              <p className="text-[9.5px] text-slate-500 mb-1">Daily named-victim count · last 7 days</p>
            </div>
            <VerticalBarChart
              data={ransomwareData.victimsOverTime}
              yMax={110}
              primaryLegend="Victims Count"
              barColor="#e11d48"
              height={115}
            />
          </div>
        </div>

        {/* List Table Format: Lead Incident & Tracked Groups */}
        <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-[11px] font-bold text-slate-900 uppercase flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
              Active Incident Report (Group: {ransomwareData.activeIncidentRoster.leadGroup})
            </h4>
            <span className="text-[9.5px] font-mono bg-rose-50 text-rose-800 font-bold px-2 py-0.5 rounded border border-rose-200">
              Critical Ransomware Extortion
            </span>
          </div>

          {/* Incident Banner with Chips */}
          <div className="bg-slate-50 border border-slate-200 rounded p-2.5 mb-2.5">
            <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
              <span className="bg-rose-600 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded">
                Chip: {ransomwareData.activeIncidentRoster.incident.chipTag}
              </span>
              <span className="bg-slate-200 text-slate-800 font-mono text-[9px] font-semibold px-2 py-0.5 rounded">
                {ransomwareData.activeIncidentRoster.incident.location}
              </span>
              <span className="bg-slate-200 text-slate-600 font-mono text-[9px] px-2 py-0.5 rounded">
                {ransomwareData.activeIncidentRoster.incident.dateTime}
              </span>
            </div>
            <h5 className="font-bold text-slate-900 text-xs mb-1">
              Title: {ransomwareData.activeIncidentRoster.incident.title}
            </h5>
            <p className="text-[10.5px] text-slate-700 italic leading-relaxed border-l-2 border-rose-500 pl-2">
              "{ransomwareData.activeIncidentRoster.incident.subtext}"
            </p>
          </div>

          {/* Other Monitored Groups Chips */}
          <div className="flex items-center gap-2 flex-wrap text-[10px]">
            <span className="font-semibold text-slate-500 uppercase tracking-wider text-[9px]">
              Active Tracked Groups:
            </span>
            {ransomwareData.activeIncidentRoster.trackedGroupsList.map((grp, i) => (
              <span
                key={i}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono px-2 py-0.5 rounded border border-slate-200 font-medium"
              >
                {grp}
              </span>
            ))}
          </div>
        </div>
      </div>
    </A4PageContainer>
  );
};
