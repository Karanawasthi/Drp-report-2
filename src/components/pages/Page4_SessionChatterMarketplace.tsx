import React from 'react';
import { A4PageContainer } from '../A4PageContainer';
import { DonutChart, ProgressBarList } from '../ReportCharts';
import { sessionAndMarketplaceData } from '../../reportData';
import { Cookie, MessageSquareWarning, ShoppingBag, ShieldAlert } from 'lucide-react';

export const Page4_SessionChatterMarketplace: React.FC<{ pageNumber: number; totalPages: number }> = ({
  pageNumber,
  totalPages
}) => {
  return (
    <A4PageContainer
      pageNumber={pageNumber}
      totalPages={totalPages}
      sectionTag="Dark Web"
      sectionTitle="Session &amp; Chatter Leaks · Marketplace"
    >
      {/* SECTION 1: SESSION & CHATTER LEAKS */}
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
          <div className="flex items-center gap-2">
            <Cookie className="w-4 h-4 text-amber-600" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">
              Session &amp; Chatter Leaks
            </h3>
          </div>
          <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
            Stolen sessions &amp; dark-web / forum chatter
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Radial / Donut Chart: Session Leaks */}
          <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-tight">
                  Session Leaks (Stolen Session Cookies)
                </h4>
                <span className="text-[10px] font-mono font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">
                  926 Valid Sessions
                </span>
              </div>
              <p className="text-[10.5px] text-slate-500 mb-1">
                Stolen browser cookies harvested by info-stealers categorized by validity
              </p>
            </div>
            <DonutChart
              data={sessionAndMarketplaceData.sessionLeaksDonut}
              centerLabel="7,580"
              centerSubtext="Sessions"
              size={130}
              thickness={18}
            />
            <div className="mt-2 text-[10px] text-rose-700 bg-rose-50 p-1.5 rounded border border-rose-200 font-medium">
              CRITICAL: 926 still-valid sessions permit immediate MFA-bypass session hijacking. Revocation tokens issued.
            </div>
          </div>

          {/* Progress Bars: Chatter Leaks */}
          <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-tight flex items-center gap-1.5">
                  <MessageSquareWarning className="w-3.5 h-3.5 text-rose-600" />
                  Chatter Leaks (Top Sources)
                </h4>
                <span className="text-[10px] font-mono font-bold text-slate-500">
                  2,612 Brand Mentions
                </span>
              </div>
              <p className="text-[10.5px] text-slate-500 mb-2">
                Brand mentions across illicit forums, Telegram leak channels &amp; cybercrime nodes
              </p>
              <ProgressBarList items={sessionAndMarketplaceData.chatterLeaksBars} maxVal={952} />
            </div>
            <div className="mt-2 text-[10px] text-slate-500 bg-slate-50 p-1.5 rounded border border-slate-100">
              BreachForums (952) and Telegram (708) represent 63.5% of total brand chatter activity.
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: MARKETPLACE */}
      <div className="space-y-3 pt-2 border-t border-slate-200">
        <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-rose-600" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">
              Marketplace (Dark-Web Brand Data for Sale)
            </h3>
          </div>
          <span className="text-[10px] font-mono text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200 font-bold">
            Active Monetization Detected
          </span>
        </div>

        {/* Table Format: Marketplace Posts */}
        <div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-xs overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase">
                Marketplace Posts — Threat Actors Offering Brand Data
              </h4>
              <p className="text-[10.5px] text-slate-500">
                Verified illicit listings offering ACME organizational datasets, corporate files, and databases
              </p>
            </div>
            <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
              Dark Web Index
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[11px]">
              <thead>
                <tr className="bg-slate-50 text-slate-600 border-b border-slate-200 text-[10px] uppercase font-mono">
                  <th className="py-2 px-3 font-semibold">Attacker Handle</th>
                  <th className="py-2 px-3 font-semibold">Post Heading</th>
                  <th className="py-2 px-3 font-semibold">Marketplace</th>
                  <th className="py-2 px-3 font-semibold">Price / Terms</th>
                  <th className="py-2 px-3 font-semibold">Discovered</th>
                  <th className="py-2 px-3 font-semibold text-right">Action Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {sessionAndMarketplaceData.marketplacePosts.map((post, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60">
                    <td className="py-2 px-3 font-mono font-bold text-rose-700">
                      {post.attacker}
                    </td>
                    <td className="py-2 px-3 font-medium text-slate-900 max-w-xs">
                      {post.postHeading}
                    </td>
                    <td className="py-2 px-3">
                      <span className="font-mono text-[10px] bg-slate-100 text-slate-800 px-2 py-0.5 rounded border border-slate-200">
                        {post.marketplace}
                      </span>
                    </td>
                    <td className="py-2 px-3 font-mono text-slate-600">
                      {post.price}
                    </td>
                    <td className="py-2 px-3 font-mono text-slate-500 text-[10.5px]">
                      {post.discovered}
                    </td>
                    <td className="py-2 px-3 text-right">
                      <span className="text-[9.5px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                        {post.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Security Assessment Notes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[10.5px] text-slate-600 bg-slate-50 border border-slate-200 rounded-lg p-3">
          <div>
            <span className="font-bold text-slate-900 block mb-0.5">Primary Threat Actor: ShadowBroker_IN</span>
            <p>
              Claiming 1.2M records from customer relational database. Schema inspection indicates potential legacy CRM staging replica breach. Law enforcement referral filed.
            </p>
          </div>
          <div>
            <span className="font-bold text-slate-900 block mb-0.5">Dark-Web Infiltration Defense</span>
            <p>
              Undercover intelligence operatives have engaged threat actors for sample verification to confirm integrity without funding illicit actors.
            </p>
          </div>
        </div>
      </div>
    </A4PageContainer>
  );
};
