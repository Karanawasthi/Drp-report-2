import React, { useState, useEffect } from 'react';
import { ReportToolbar } from './components/ReportToolbar';
import { Page1_ASM } from './components/pages/Page1_ASM';
import { Page2_CloudAndAI } from './components/pages/Page2_CloudAndAI';
import { Page3_CredentialBreaches } from './components/pages/Page3_CredentialBreaches';
import { Page4_SessionChatterMarketplace } from './components/pages/Page4_SessionChatterMarketplace';
import { Page5_SourceCodeLeaks } from './components/pages/Page5_SourceCodeLeaks';
import { Page6_DocumentAndCardLeaks } from './components/pages/Page6_DocumentAndCardLeaks';
import { Page7_LookalikeDomains } from './components/pages/Page7_LookalikeDomains';
import { Page8_MobileAdsDefacement } from './components/pages/Page8_MobileAdsDefacement';
import { Page9_SocialMediaAndIntel } from './components/pages/Page9_SocialMediaAndIntel';
import { Page10_IOCIntel } from './components/pages/Page10_IOCIntel';

const PAGE_DEFINITIONS = [
  { page: 1, title: 'Attack Surface Monitor', tag: 'ASM' },
  { page: 2, title: 'Cloud & AI Exposure', tag: 'Cloud & AI' },
  { page: 3, title: 'Credential & Identity Breaches', tag: 'Data Leaks' },
  { page: 4, title: 'Session, Chatter & Marketplace', tag: 'Dark Web' },
  { page: 5, title: 'Source Code Leaks & Secrets', tag: 'Code Security' },
  { page: 6, title: 'Document & Credit Card Leaks', tag: 'Sensitive Data' },
  { page: 7, title: 'Look-alike Domain Monitor', tag: 'Brand Defense' },
  { page: 8, title: 'Mobile Apps, Ads & Defacement', tag: 'Apps & Integrity' },
  { page: 9, title: 'Social Media & Ransomware Intel', tag: 'Ransomware' },
  { page: 10, title: 'IOC Threat Intelligence', tag: 'IOC Feed' }
];

export default function App() {
  const [activePage, setActivePage] = useState<number>(1);
  const [isPaginated, setIsPaginated] = useState<boolean>(true);

  // Sync active page with viewport scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = PAGE_DEFINITIONS.length; i >= 1; i--) {
        const el = document.getElementById(`page-${i}`);
        if (el && el.offsetTop <= scrollPos) {
          setActivePage(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900 print:bg-white print:p-0">
      {/* Top sticky navigation toolbar */}
      <ReportToolbar
        activePage={activePage}
        setActivePage={setActivePage}
        isPaginated={isPaginated}
        setIsPaginated={setIsPaginated}
        totalPages={PAGE_DEFINITIONS.length}
        pageTitles={PAGE_DEFINITIONS}
      />

      {/* Main Report Container */}
      <main
        className={`w-full mx-auto py-6 px-3 sm:px-6 print:p-0 transition-all ${
          isPaginated ? 'max-w-[210mm]' : 'max-w-6xl space-y-6'
        }`}
      >
        <Page1_ASM pageNumber={1} totalPages={PAGE_DEFINITIONS.length} />
        <Page2_CloudAndAI pageNumber={2} totalPages={PAGE_DEFINITIONS.length} />
        <Page3_CredentialBreaches pageNumber={3} totalPages={PAGE_DEFINITIONS.length} />
        <Page4_SessionChatterMarketplace pageNumber={4} totalPages={PAGE_DEFINITIONS.length} />
        <Page5_SourceCodeLeaks pageNumber={5} totalPages={PAGE_DEFINITIONS.length} />
        <Page6_DocumentAndCardLeaks pageNumber={6} totalPages={PAGE_DEFINITIONS.length} />
        <Page7_LookalikeDomains pageNumber={7} totalPages={PAGE_DEFINITIONS.length} />
        <Page8_MobileAdsDefacement pageNumber={8} totalPages={PAGE_DEFINITIONS.length} />
        <Page9_SocialMediaAndIntel pageNumber={9} totalPages={PAGE_DEFINITIONS.length} />
        <Page10_IOCIntel pageNumber={10} totalPages={PAGE_DEFINITIONS.length} />
      </main>

      {/* Bottom subtle print helper banner for screen viewing */}
      <div className="no-print py-6 text-center text-xs text-slate-500 border-t border-slate-200 bg-white">
        <p className="max-w-xl mx-auto">
          This digital intelligence report is formatted for standard A4 portrait printing and PDF export. Click <strong>Print / Save PDF</strong> in the header to export with calibrated page breaks and vector chart rendering.
        </p>
      </div>
    </div>
  );
}
