import { TopVulnerability, RansomwareIncident } from './types';

export const reportMetadata = {
  title: 'MASTER SECURITY INTELLIGENCE REPORT',
  subtitle: 'Attack Surface, Cloud Exposure, Threat Actors & Data Breach Intelligence',
  organization: 'ACME Global Enterprise Ltd.',
  timeline: '12 May 2026 – 12 July 2026',
  generatedAt: '2026-07-13T09:00:00Z',
  classification: 'CONFIDENTIAL // TLP:AMBER+STRICT',
  reportId: 'MSR-2026-07-ACME-01',
  version: '2.4.1 Production'
};

// 1. Attack Surface Monitor (ASM)
export const asmData = {
  singleValues: [
    {
      title: 'Total Assets Discovered',
      value: '1,284',
      subtitle: 'External perimeter',
      detailItems: [
        { label: 'Subdomains', value: '947' },
        { label: 'IP Addresses', value: '337' }
      ],
      badge: 'Active Scanned',
      badgeVariant: 'neutral' as const
    },
    {
      title: 'Web Vulnerabilities',
      value: '412',
      subtitle: 'Across public web endpoints',
      detailItems: [
        { label: 'Critical', value: '56' },
        { label: 'High', value: '25' },
        { label: 'Medium', value: '76' },
        { label: 'Low', value: '87' }
      ],
      badge: '56 Critical',
      badgeVariant: 'critical' as const
    },
    {
      title: 'Critical Ports Identified',
      value: '156',
      subtitle: 'Exposed perimeter ports',
      detailItems: [
        { label: 'New Discovered', value: '56' },
        { label: 'Scan Window', value: '12 May – 12 July' }
      ],
      badge: '+56 In Window',
      badgeVariant: 'high' as const
    },
    {
      title: 'IP Vulnerabilities',
      value: '287',
      subtitle: 'Host-level weaknesses',
      detailItems: [
        { label: 'CISA KEV Confirmed', value: '14' },
        { label: 'Action Required', value: 'Priority' }
      ],
      badge: '14 CISA KEV',
      badgeVariant: 'critical' as const
    }
  ],
  trendGraph: [
    { label: 'May 1', value: 890, secondaryValue: 240 },
    { label: 'May 8', value: 950, secondaryValue: 275 },
    { label: 'May 15', value: 1020, secondaryValue: 310 },
    { label: 'May 22', value: 1090, secondaryValue: 345 },
    { label: 'May 29', value: 1145, secondaryValue: 368 },
    { label: 'Jun 5', value: 1198, secondaryValue: 382 },
    { label: 'Jun 12', value: 1240, secondaryValue: 399 },
    { label: 'May N', value: 1284, secondaryValue: 412 }
  ],
  webSeverityDonut: [
    { label: 'Critical', value: 18, color: '#e11d48' },
    { label: 'High', value: 74, color: '#ea580c' },
    { label: 'Medium', value: 196, color: '#f59e0b' },
    { label: 'Low', value: 124, color: '#3b82f6' }
  ],
  ipSeverityBars: [
    { label: 'Critical', value: 31, color: '#e11d48', percentage: 11 },
    { label: 'High', value: 88, color: '#ea580c', percentage: 31 },
    { label: 'Medium', value: 121, color: '#f59e0b', percentage: 42 },
    { label: 'Low', value: 47, color: '#3b82f6', percentage: 16 }
  ],
  cisaKevHighlight: '14 CISA KEV confirmed - Known-exploited vulns require priority remediation',
  top5IpVulns: [
    {
      id: '1',
      name: 'Microsoft Outlook Privilege Escalation',
      cweOrCve: 'CVE-2023-23397',
      severity: 'Critical',
      assetsImpacted: '9 assets',
      isKev: true
    },
    {
      id: '2',
      name: 'Microsoft Outlook Remote Code Execution',
      cweOrCve: 'CVE-2024-21413',
      severity: 'Critical',
      assetsImpacted: '7 assets',
      isKev: true
    },
    {
      id: '3',
      name: 'MOVEit Transfer SQL Injection RCE',
      cweOrCve: 'CVE-2023-34362',
      severity: 'Critical',
      assetsImpacted: '5 assets',
      isKev: true
    },
    {
      id: '4',
      name: 'Ivanti Policy Secure Authentication Bypass',
      cweOrCve: 'CVE-2023-46805',
      severity: 'High',
      assetsImpacted: '4 assets',
      isKev: true
    },
    {
      id: '5',
      name: 'ScreenConnect Authentication Bypass',
      cweOrCve: 'CVE-2024-1709',
      severity: 'Critical',
      assetsImpacted: '3 assets',
      isKev: true
    }
  ] as TopVulnerability[],
  top5WebVulns: [
    {
      id: 'w1',
      name: 'Authentication endpoints injection',
      cweOrCve: 'SQL Injection - CWE-89',
      severity: 'Critical',
      assetsImpacted: '11 hosts'
    },
    {
      id: 'w2',
      name: 'File upload handler arbitrary code execution',
      cweOrCve: 'Remote Code Execution (RCE) - CWE-94',
      severity: 'Critical',
      assetsImpacted: '8 hosts'
    },
    {
      id: 'w3',
      name: 'User management API object-level authorization',
      cweOrCve: 'BOLA - CWE-285',
      severity: 'High',
      assetsImpacted: '14 hosts'
    },
    {
      id: 'w4',
      name: 'Profile comments sanitization failure',
      cweOrCve: 'Cross-Site Scripting (Stored XSS) - CWE-79',
      severity: 'Medium',
      assetsImpacted: '19 hosts'
    },
    {
      id: 'w5',
      name: 'Webhook trigger internal network probe',
      cweOrCve: 'SSRF - CWE-918',
      severity: 'High',
      assetsImpacted: '6 hosts'
    }
  ] as TopVulnerability[]
};

// 2. Cloud Exposure Validation
export const cloudExposureData = {
  subtitle: 'AWS posture checks validated against external exposure · acct 7828·6059',
  postureDonut: [
    { label: 'Passed', value: 2311, color: '#10b981' },
    { label: 'Failed', value: 829, color: '#e11d48' }
  ],
  singleValues: [
    { title: 'Exposed Resources', value: '494', subtitle: 'Directly reachable from internet' },
    { title: 'Regions Affected', value: '18', subtitle: 'Global AWS deployment scope' }
  ],
  failedBySeverity: [
    { label: 'Critical', value: 1, color: '#e11d48', percentage: 1 },
    { label: 'High', value: 106, color: '#ea580c', percentage: 13 },
    { label: 'Medium', value: 454, color: '#f59e0b', percentage: 55 },
    { label: 'Low', value: 168, color: '#3b82f6', percentage: 20 }
  ],
  topExposedServices: [
    { label: 'EC2', value: 324, color: '#ea580c' },
    { label: 'IAM', value: 74, color: '#e11d48' },
    { label: 'VPC', value: 186, color: '#f59e0b' },
    { label: 'S3', value: 142, color: '#0284c7' },
    { label: 'CloudTrail', value: 103, color: '#6366f1' }
  ]
};

// 3. AI Exposure
export const aiExposureData = {
  subtitle: 'LLM endpoints, agents & model APIs · sample data',
  donutResults: [
    { label: 'Critical', value: 4, color: '#e11d48' },
    { label: 'High', value: 5, color: '#ea580c' },
    { label: 'Medium', value: 3, color: '#f59e0b' }
  ],
  summaryCards: [
    { title: 'Total Results', value: '12', subtitle: 'Findings by severity' },
    { title: 'Assets Found', value: '45', subtitle: 'Publicly indexed AI/LLM assets' },
    { title: 'At Risk', value: '12', subtitle: 'Directly exposed & vulnerable' }
  ],
  exposedAgentsTimeline: [
    { label: 'May 1', value: 24, secondaryValue: 8 },
    { label: 'May 8', value: 35, secondaryValue: 12 },
    { label: 'May 15', value: 48, secondaryValue: 18 },
    { label: 'May 22', value: 59, secondaryValue: 24 },
    { label: 'May 29', value: 68, secondaryValue: 31 },
    { label: 'Jun 5', value: 74, secondaryValue: 38 },
    { label: 'Jun 12', value: 79, secondaryValue: 42 },
    { label: 'May N', value: 80, secondaryValue: 45 }
  ],
  recentFindings: [
    {
      ip: '192.168.1.45',
      port: 8080,
      hostname: 'ollama-api.acme.io',
      exposedAsset: 'ai_dashboards',
      riskScore: '10.0',
      exploitability: 'High',
      impact: 'Model & data exfiltration'
    },
    {
      ip: '192.168.1.88',
      port: 11434,
      hostname: 'llm-inference.acme.io',
      exposedAsset: 'vllm_core_endpoint',
      riskScore: '9.8',
      exploitability: 'High',
      impact: 'Prompt injection & system prompt leak'
    },
    {
      ip: '10.42.12.19',
      port: 8000,
      hostname: 'agent-executor.acme.io',
      exposedAsset: 'langchain_worker',
      riskScore: '9.2',
      exploitability: 'High',
      impact: 'Arbitrary tool invocation & credential theft'
    },
    {
      ip: '172.16.4.110',
      port: 5000,
      hostname: 'rag-vector.acme.io',
      exposedAsset: 'chromadb_unauth',
      riskScore: '8.9',
      exploitability: 'High',
      impact: 'Unauthenticated vector DB document dump'
    },
    {
      ip: '192.168.2.14',
      port: 8888,
      hostname: 'jupyter-lab.acme.io',
      exposedAsset: 'ml_experiment_notebook',
      riskScore: '8.5',
      exploitability: 'Medium',
      impact: 'Unauthenticated shell execution & model weights'
    }
  ]
};

// 4. Data Leak Monitor - Credential & Identity Breaches
export const credentialBreachData = {
  singleValues: [
    {
      title: 'Credential Breach',
      value: '2,885',
      subtitle: 'Total credentials leaked',
      detailItems: [
        { label: 'Corporate accounts', value: '116' },
        { label: 'Unique users affected', value: '1,185' }
      ],
      badge: 'High Impact',
      badgeVariant: 'critical' as const
    },
    {
      title: 'Info-Stealer Breach',
      value: '515',
      subtitle: 'Malware-harvested logs',
      detailItems: [
        { label: 'Infected devices', value: '65' },
        { label: 'Card data records', value: '6' },
        { label: 'Corporate accounts', value: '116' }
      ],
      badge: 'Active Stealers',
      badgeVariant: 'critical' as const
    },
    {
      title: '3rd-Party Breach',
      value: '320',
      subtitle: 'External services breach dumps',
      detailItems: [
        { label: 'Unique users affected', value: '294' },
        { label: 'External services breached', value: '48' }
      ],
      badge: 'Reused Passwords',
      badgeVariant: 'high' as const
    }
  ],
  exposedUrlsDonut: [
    { label: 'Microsoft 365 - login.acme.com', value: 58, color: '#e11d48' },
    { label: 'iifl.com', value: 39, color: '#ea580c' },
    { label: 'ttblaze.iifl.com', value: 31, color: '#f59e0b' },
    { label: 'idolapp.iifl.com', value: 24, color: '#10b981' },
    { label: 'Zoho Workplace - mail.company.com', value: 18, color: '#3b82f6' },
    { label: 'subbroker-franchisee.iifl.com', value: 14, color: '#8b5cf6' }
  ],
  topBreachedThirdParty: [
    { label: 'Luminpdf.com', value: 87, color: '#e11d48' },
    { label: 'Bigbasket.com', value: 38, color: '#ea580c' },
    { label: 'Canva.com', value: 34, color: '#f59e0b' },
    { label: 'Hathway.com', value: 28, color: '#3b82f6' },
    { label: 'Ibanklive.com', value: 26, color: '#6366f1' }
  ],
  infoStealerRadar: [
    { label: 'RedLine', value: 92, count: 184 },
    { label: 'Stealer (generic)', value: 78, count: 126 },
    { label: 'Meta', value: 65, count: 85 },
    { label: 'Lumma', value: 88, count: 160 },
    { label: 'Raccoon', value: 54, count: 60 }
  ],
  executivesCredentialBreaches: [
    { label: 'John Doe', value: 3, role: 'Chief Executive Officer', color: '#e11d48' },
    { label: 'Jane Smith', value: 2, role: 'Chief Financial Officer', color: '#ea580c' },
    { label: 'Robert Johnson', value: 2, role: 'VP of Technology', color: '#f59e0b' },
    { label: 'Emily Davis', value: 1, role: 'General Counsel', color: '#3b82f6' },
    { label: 'Michael Brown', value: 1, role: 'Head of Operations', color: '#6366f1' }
  ]
};

// 5. Session & Chatter Leaks + Marketplace
export const sessionAndMarketplaceData = {
  sessionLeaksDonut: [
    { label: 'Still valid', value: 926, color: '#e11d48' },
    { label: 'Expired', value: 105, color: '#10b981' },
    { label: 'Unknown expiry', value: 6549, color: '#f59e0b' }
  ],
  chatterLeaksBars: [
    { label: 'Breachforums.st', value: 952, color: '#e11d48' },
    { label: 'Telegram (t.me)', value: 708, color: '#ea580c' },
    { label: 'Darkforums.st', value: 348, color: '#f59e0b' },
    { label: 'Xforums.st', value: 112, color: '#3b82f6' },
    { label: 'Leakbase.io', value: 56, color: '#6366f1' }
  ],
  marketplacePosts: [
    {
      attacker: 'ShadowBroker_IN',
      postHeading: 'ABC full customer database — 1.2M records [FRESH]',
      marketplace: 'BreachForums',
      discovered: '24 Jun 2026',
      price: '$4,500 USD',
      status: 'Under Investigation'
    },
    {
      attacker: 'GhostProtocol',
      postHeading: 'ACME Corp Employee Active Directory & Internal LDAP Dump',
      marketplace: 'DarkForums',
      discovered: '18 Jun 2026',
      price: '0.35 BTC',
      status: 'Credential Reset'
    },
    {
      attacker: 'RedVault_Net',
      postHeading: 'Internal Financial Statements & Vendor Ledger 2025-26',
      marketplace: 'LeakBase',
      discovered: '02 Jun 2026',
      price: '$2,800 USD',
      status: 'Legal Escalation'
    },
    {
      attacker: 'DataMerchant_VIP',
      postHeading: 'Complete Source Code Repositories & API Secrets [GIT DUMP]',
      marketplace: 'BreachForums',
      discovered: '28 May 2026',
      price: '$8,000 USD',
      status: 'Takedown In Progress'
    }
  ]
};

// 6. Source Code Leaks
export const sourceCodeLeaksData = {
  singleValues: [
    {
      title: 'Total Leaks Detected',
      value: '63',
      subtitle: 'Code exposures across web',
      detailItems: [
        { label: 'New in Scan Timeline', value: '6' },
        { label: 'Period', value: '12 May to 12 July' }
      ],
      badge: '+6 In Window',
      badgeVariant: 'high' as const
    },
    {
      title: 'Exposed Repositories',
      value: '1,284',
      subtitle: 'Monitored code repositories',
      detailItems: [
        { label: 'Publicly Indexed', value: '1,284' },
        { label: 'At Risk', value: '63' }
      ],
      badge: 'Monitored',
      badgeVariant: 'neutral' as const
    },
    {
      title: 'Secrets Exposed',
      value: '412',
      subtitle: 'API keys, cloud creds, tokens & private keys',
      detailItems: [
        { label: 'Critical · Open', value: '287' },
        { label: 'Remediated', value: '125' }
      ],
      badge: '287 Critical Open',
      badgeVariant: 'critical' as const
    },
    {
      title: 'Critical · Open',
      value: '287',
      subtitle: 'Unrevoked sensitive secrets',
      detailItems: [
        { label: 'Immediate Revocation', value: 'Required' },
        { label: 'Avg Age', value: '4.2 Days' }
      ],
      badge: 'Action Required',
      badgeVariant: 'critical' as const
    }
  ],
  trendGraph: [
    { label: 'May 1', value: 85, secondaryValue: 42 },
    { label: 'May 8', value: 110, secondaryValue: 58 },
    { label: 'May 15', value: 145, secondaryValue: 80 },
    { label: 'May 22', value: 175, secondaryValue: 105 },
    { label: 'May 29', value: 198, secondaryValue: 135 },
    { label: 'Jun 5', value: 220, secondaryValue: 168 },
    { label: 'Jun 12', value: 238, secondaryValue: 192 },
    { label: 'May N', value: 250, secondaryValue: 215 }
  ],
  severityDonut: [
    { label: 'Critical', value: 18, color: '#e11d48' },
    { label: 'High', value: 74, color: '#ea580c' },
    { label: 'Medium', value: 196, color: '#f59e0b' },
    { label: 'Low', value: 124, color: '#3b82f6' }
  ],
  leaksBySource: [
    { label: 'GitHub', value: 24, color: '#10b981' },
    { label: 'Postman collections', value: 78, color: '#ea580c' },
    { label: 'Forums / Telegram', value: 19, color: '#e11d48' },
    { label: 'Pastebin', value: 31, color: '#f59e0b' },
    { label: 'GitLab', value: 32, color: '#6366f1' },
    { label: 'Public S3 buckets', value: 56, color: '#0284c7' }
  ],
  secretTypesDetected: [
    { label: 'Cloud keys (AWS/GCP/Azure)', value: 94, color: '#e11d48' },
    { label: 'API keys / tokens', value: 88, color: '#ea580c' },
    { label: 'Database credentials', value: 58, color: '#f59e0b' },
    { label: 'OAuth / webhooks', value: 44, color: '#3b82f6' },
    { label: 'Private keys (SSH/PGP)', value: 28, color: '#8b5cf6' }
  ],
  higherRiskRepos: [
    { repository: 'acme/payments-api', source: 'GitHub', secrets: 38, severity: 'Critical' },
    { repository: 'acme/cloud-infra-terraform', source: 'GitLab', secrets: 29, severity: 'Critical' },
    { repository: 'acme/identity-sso-gateway', source: 'GitHub', secrets: 17, severity: 'High' },
    { repository: 'acme/customer-analytics-etl', source: 'Public S3 buckets', secrets: 14, severity: 'High' },
    { repository: 'acme/notification-service', source: 'GitHub', secrets: 8, severity: 'Medium' }
  ],
  recentLeaks: [
    { finding: 'acme/payments-api', source: 'GitHub', type: 'Cloud key', severity: 'Critical', detected: '25 Jun 2026' },
    { finding: 'acme/auth-service', source: 'Pastebin', type: 'Database credentials', severity: 'Critical', detected: '22 Jun 2026' },
    { finding: 'acme/mobile-backend', source: 'Postman collections', type: 'API keys / tokens', severity: 'High', detected: '19 Jun 2026' },
    { finding: 'acme/devops-scripts', source: 'GitLab', type: 'Private keys (SSH)', severity: 'Critical', detected: '15 Jun 2026' },
    { finding: 'acme/reporting-tool', source: 'Public S3 buckets', type: 'OAuth token', severity: 'Medium', detected: '11 Jun 2026' }
  ],
  postmanRequests: [
    { method: 'GET', url: '{{base_url}}/health', leakType: 'Public Endpoint', severity: 'Low' },
    { method: 'POST', url: '{{api_root}}/v1/auth/token', leakType: 'Hardcoded Bearer Secret', severity: 'Critical' },
    { method: 'GET', url: '{{prod_host}}/users/export', leakType: 'Unauthenticated Endpoint', severity: 'High' },
    { method: 'POST', url: '{{payment_gateway}}/charge', leakType: 'Live Stripe Test Secret', severity: 'Critical' },
    { method: 'GET', url: '{{api_root}}/v2/config/debug', leakType: 'Environment Dump', severity: 'Medium' }
  ]
};

// 7. Document Leak & Credit Card Leak
export const documentAndCardLeaksData = {
  leakedDocuments: [
    {
      file: 'customer_kyc_export.xlsx',
      fileSize: '18.6 MB',
      companyName: 'ACME Ltd.',
      sourceType: 'BreachForums',
      breachDiscovered: '14 Jun 2026',
      urlMainPost: 'breachforums.st/t/iifl-kyc'
    },
    {
      file: 'internal_audit_q1_review.pdf',
      fileSize: '4.2 MB',
      companyName: 'ACME Ltd.',
      sourceType: 'Telegram (t.me)',
      breachDiscovered: '11 Jun 2026',
      urlMainPost: 't.me/dark_intel_leaks/8912'
    },
    {
      file: 'payroll_summary_2026.csv',
      fileSize: '9.8 MB',
      companyName: 'ACME Ltd.',
      sourceType: 'DarkForums',
      breachDiscovered: '04 Jun 2026',
      urlMainPost: 'darkforums.st/thread-91823'
    },
    {
      file: 'executive_board_minutes_may.docx',
      fileSize: '1.4 MB',
      companyName: 'ACME Ltd.',
      sourceType: 'LeakBase',
      breachDiscovered: '29 May 2026',
      urlMainPost: 'leakbase.io/view/7721'
    }
  ],
  cardSummary: [
    { title: 'Cards Exposed', value: '324', subtitle: 'Compromised payment cards' },
    { title: 'Unique BINs', value: '47', subtitle: 'Issuing bank categories' },
    { title: 'With CVV', value: '318', subtitle: 'Full card credentials' },
    { title: 'Not Yet Expired', value: '209', subtitle: 'Active merchant validity' }
  ],
  leaksByBinDonut: [
    { label: '453912 (Visa Signature)', value: 142, color: '#e11d48' },
    { label: '552188 (Mastercard World)', value: 98, color: '#ea580c' },
    { label: '402400 (Visa Classic)', value: 63, color: '#f59e0b' },
    { label: '378282 (Amex Gold)', value: 21, color: '#3b82f6' }
  ],
  exposedCards: [
    {
      siteName: 'shop.example-cart.in',
      url: 'example-cart.in/checkout',
      cardNumber: '4539 12•• •••• 8821',
      expiry: '08/27',
      cvv: '•••',
      breachDate: '25 Jun 2026'
    },
    {
      siteName: 'ticketbooking-portal.net',
      url: 'ticketbooking-portal.net/pay',
      cardNumber: '5521 88•• •••• 4190',
      expiry: '11/28',
      cvv: '•••',
      breachDate: '21 Jun 2026'
    },
    {
      siteName: 'gadgetstore-online.in',
      url: 'gadgetstore-online.in/payment',
      cardNumber: '4024 00•• •••• 1032',
      expiry: '05/27',
      cvv: '•••',
      breachDate: '18 Jun 2026'
    },
    {
      siteName: 'traveldeals-direct.com',
      url: 'traveldeals-direct.com/confirm',
      cardNumber: '3782 82•• •••• 9924',
      expiry: '09/29',
      cvv: '•••',
      breachDate: '12 Jun 2026'
    }
  ]
};

// 8. Look-alike Domain Brand Monitoring
export const lookalikeDomainData = {
  singleValues: [
    {
      title: 'Total Domains Identified',
      value: '2,349',
      subtitle: 'Potential brand impersonators',
      detailItems: [
        { label: 'New This Month', value: '2,335' },
        { label: 'Baseline', value: '14' }
      ],
      badge: 'High Influx',
      badgeVariant: 'critical' as const
    },
    {
      title: 'Active / Live DNS',
      value: '1,919',
      subtitle: 'Currently resolving on internet',
      detailItems: [
        { label: 'Active Resolving', value: '1,919' },
        { label: 'Inactive / Parked', value: '430' }
      ],
      badge: 'Live Threat',
      badgeVariant: 'critical' as const
    },
    {
      title: 'Open Incidents',
      value: '2,340',
      subtitle: 'Awaiting triage & takedowns',
      detailItems: [
        { label: 'Awaiting Triage', value: '99.6%' },
        { label: 'Closed Takedowns', value: '9' }
      ],
      badge: '99.6% Pending',
      badgeVariant: 'high' as const
    },
    {
      title: 'High Content Match',
      value: '7',
      subtitle: 'Domains >25% page similarity',
      detailItems: [
        { label: 'High (>25%)', value: '6' },
        { label: 'Partial (1–25%)', value: '1' }
      ],
      badge: 'Phishing Replicas',
      badgeVariant: 'critical' as const
    }
  ],
  contentMatchDonut: [
    { label: 'High (> 25%)', value: 6, color: '#e11d48' },
    { label: 'Partial (1–25%)', value: 1, color: '#ea580c' },
    { label: 'No match (0%)', value: 2342, color: '#94a3b8' }
  ],
  domainAgingBars: [
    { label: '< 1 month', value: 530, color: '#e11d48' },
    { label: '1–6 months', value: 1456, color: '#ea580c' },
    { label: '6–12 months', value: 456, color: '#f59e0b' },
    { label: '> 1 year', value: 987, color: '#3b82f6' }
  ],
  detectionTimeline: [
    { label: 'May 2026 (W1)', value: 420 },
    { label: 'May 2026 (W2)', value: 580 },
    { label: 'May 2026 (W3)', value: 690 },
    { label: 'May 2026 (W4)', value: 659 }
  ],
  dnsResolution: {
    highlightText: '82% resolve to live infrastructure and warrant active takedown review.',
    bars: [
      { label: 'Active', value: 1919, percentage: 34, color: '#e11d48' },
      { label: 'Inactive', value: 430, percentage: 75, color: '#94a3b8' }
    ]
  },
  mxActive: {
    highlightText: '26% (602 mail-capable, excl. parking) — able to send phishing / BEC email.',
    bars: [
      { label: 'MX active', value: 602, percentage: 34, color: '#e11d48' },
      { label: 'No MX', value: 1747, percentage: 75, color: '#94a3b8' }
    ]
  },
  mailProviders: [
    { label: 'Google Workspace', value: 242, color: '#ea580c' },
    { label: 'Microsoft 365', value: 188, color: '#0284c7' },
    { label: 'localhost / self-hosted', value: 94, color: '#e11d48' },
    { label: 'GoDaddy', value: 46, color: '#10b981' },
    { label: 'Namecheap', value: 32, color: '#8b5cf6' }
  ],
  executiveMentions: [
    { label: 'John Doe', value: 3, color: '#e11d48' },
    { label: 'Jane Smith', value: 2, color: '#ea580c' },
    { label: 'Robert Johnson', value: 5, color: '#f59e0b' },
    { label: 'Emily Davis', value: 5, color: '#3b82f6' },
    { label: 'Michael Brown', value: 4, color: '#6366f1' }
  ],
  executiveMentionsHighlight: '19 domains impersonate named executives — elevated CEO-fraud / BEC risk.',
  topLookalikes: [
    { domain: 'acme.ae', lastSeen: '14 Jun 2023', matches: '46%', status: 'Open' },
    { domain: 'acme-portal-login.com', lastSeen: '22 May 2026', matches: '39%', status: 'Open' },
    { domain: 'acme-verification.in', lastSeen: '04 Jun 2026', matches: '33%', status: 'Takedown Initiated' },
    { domain: 'myacme-support.co', lastSeen: '18 Jun 2026', matches: '28%', status: 'Open' },
    { domain: 'acme-rewards-claim.net', lastSeen: '25 Jun 2026', matches: '27%', status: 'Open' }
  ]
};

// 9. Mobile Apps, Ads Monitoring, Content Monitoring, Website Defacement
export const mobileAndContentData = {
  mobileAppsStore: [
    { label: 'Play Store', value: 50, color: '#10b981' },
    { label: 'App Store', value: 30, color: '#0284c7' },
    { label: 'APK Pure', value: 20, color: '#f59e0b' },
    { label: 'Aptoide', value: 10, color: '#ea580c' },
    { label: 'Others', value: 4, color: '#8b5cf6' }
  ],
  mobileApprovalStatus: [
    { label: 'Whitelisted', value: 24, color: '#10b981' },
    { label: 'Not Whitelisted', value: 126, color: '#ea580c' },
    { label: 'Rejected', value: 5, color: '#e11d48' },
    { label: 'Takedown Initiated', value: 1, color: '#8b5cf6' }
  ],
  mobileIncidents: [
    { title: 'Open Incidents', value: '29', subtitle: 'Flagged for review' },
    { title: 'Monitoring (N/A)', value: '104', subtitle: 'Low risk watch' },
    { title: 'Takedown Initiated', value: '1', subtitle: 'Legal notice sent' },
    { title: 'Whitelisted (Cleared)', value: '1', subtitle: 'Legitimate corporate app' }
  ],
  recentDiscoveredApps: [
    { appName: 'ACME Solutions', store: 'Aptoide', developer: 'Eric Tsai', approval: 'Not Whitelisted', incident: 'Open' },
    { appName: 'ACME Fast Pay', store: 'APK Pure', developer: 'QuickFin Soft', approval: 'Rejected', incident: 'Open' },
    { appName: 'ACME Mobile Banking Guard', store: 'Play Store', developer: 'FraudApp Ltd.', approval: 'Takedown Initiated', incident: 'Takedown Initiated' },
    { appName: 'ACME Connect Official', store: 'App Store', developer: 'ACME Ltd.', approval: 'Whitelisted', incident: 'Whitelisted' }
  ],
  adsByFormat: [
    { label: 'Text', value: 926, color: '#3b82f6' },
    { label: 'Video', value: 105, color: '#ea580c' },
    { label: 'Image', value: 6549, color: '#e11d48' }
  ],
  adsByPlatform: [
    { label: 'Google', value: 952, color: '#ea580c' },
    { label: 'LinkedIn', value: 708, color: '#0284c7' },
    { label: 'Tiktok', value: 348, color: '#10b981' },
    { label: 'Beta', value: 112, color: '#8b5cf6' }
  ],
  recentDiscoveredAds: [
    { advertiser: 'Acme Secure Login', destination: 'acme-login.com', format: 'Text', status: 'Rejected' },
    { advertiser: 'Official ACME Careers', destination: 'acme-hiring-now.net', format: 'Image', status: 'Flagged' },
    { advertiser: 'ACME Financial Giveaway', destination: 'acme-crypto-bonus.io', format: 'Video', status: 'Rejected' }
  ],
  contentMonitoringCards: [
    { title: 'Pages Monitored', value: '52', subtitle: 'Across 44 external domains' },
    { title: 'Keyword Match', value: '31', subtitle: 'Pages with brand keywords (42 hits)' },
    { title: 'Executive Match', value: '7', subtitle: 'Pages naming company executives' }
  ],
  flaggedContent: [
    { domain: 'jp.pinterest.com', page: '/ryangaming190yt/undead-scar/', keyword: '2', exec: '1', status: 'Not Whitelisted' },
    { domain: 'paste-drop.org', page: '/v8921/acme_finance_raw', keyword: '5', exec: '2', status: 'Not Whitelisted' },
    { domain: 'medium.com', page: '/@invest_guru/acme-insider-review', keyword: '8', exec: '3', status: 'Under Review' },
    { domain: 'telegra.ph', page: '/acme-customer-leak-index-06-14', keyword: '12', exec: '1', status: 'Takedown Notice' }
  ],
  executivesMentionedContent: [
    { label: 'John Doe', value: 3, color: '#e11d48' },
    { label: 'Jane Smith', value: 2, color: '#ea580c' },
    { label: 'Robert Johnson', value: 1, color: '#f59e0b' },
    { label: 'Emily Davis', value: 1, color: '#3b82f6' },
    { label: 'Michael Brown', value: 0, color: '#94a3b8' }
  ],
  executivesContentHighlight: '7 executive mentions need review for impersonation or doxxing.',
  defacementCards: [
    { title: 'Full Defacement', value: '6', subtitle: '≥ 50% of page text modified vs. baseline' },
    { title: 'Embedded JS Code', value: '11', subtitle: 'Unrecognised / malicious script injected' },
    { title: 'Sensitive Keyword Match', value: '18', subtitle: 'Hacked-by / gambling / illicit terms detected' }
  ],
  recentDefacements: [
    {
      assetUrl: 'mybank.acme.co',
      signalsTriggered: 'Full Defacement, JS Embedded',
      text: '72%',
      severity: 'Critical',
      detected: '14 Jun 2023',
      status: 'Open'
    },
    {
      assetUrl: 'investor.acme.com',
      signalsTriggered: 'Sensitive Keyword Match',
      text: '48%',
      severity: 'High',
      detected: '28 Jun 2026',
      status: 'Under Triage'
    },
    {
      assetUrl: 'support.acme.ae',
      signalsTriggered: 'Embedded JS Code',
      text: '31%',
      severity: 'Critical',
      detected: '01 Jul 2026',
      status: 'Remediated'
    }
  ]
};

// 10. Social Media Sentiment
export const socialMediaData = {
  overallSentiment: [
    { label: 'Positive', value: 926, color: '#10b981' },
    { label: 'Neutral', value: 105, color: '#94a3b8' },
    { label: 'Negative', value: 6549, color: '#e11d48' }
  ],
  singleValues: {
    positiveShare: '36%',
    negativeMentions: '11',
    totalAnalyzed: '231 Mentions'
  },
  sentimentByPlatform: [
    { label: 'GitHub', positive: 45, neutral: 30, negative: 15 },
    { label: 'Postman collections', positive: 20, neutral: 15, negative: 65 },
    { label: 'Forums / Telegram', positive: 5, neutral: 10, negative: 85 },
    { label: 'Pastebin', positive: 10, neutral: 12, negative: 78 }
  ],
  socialMediaByPlatform: [
    { label: 'X (Twitter)', value: 952, color: '#0284c7' },
    { label: 'Instagram', value: 708, color: '#ea580c' },
    { label: 'LinkedIn', value: 348, color: '#3b82f6' },
    { label: 'Reddit', value: 112, color: '#f59e0b' },
    { label: 'Facebook', value: 112, color: '#6366f1' },
    { label: 'YouTube', value: 112, color: '#e11d48' }
  ],
  recentDiscoveredSocial: [
    { handle: '@acme_official', platform: 'X (Twitter)', type: 'Profile', discoveredDate: '28 Jul 2026', status: 'Impersonation' },
    { handle: 'acme_corporate_support', platform: 'Instagram', type: 'Profile', discoveredDate: '24 Jul 2026', status: 'Phishing Bio Link' },
    { handle: 'r/acme_leaks', platform: 'Reddit', type: 'Community', discoveredDate: '19 Jul 2026', status: 'Takedown Sent' },
    { handle: 'ACME VIP Club Group', platform: 'Facebook', type: 'Group', discoveredDate: '14 Jul 2026', status: 'Under Review' }
  ]
};

// 11. Ransomware & Threat Intel
export const ransomwareData = {
  singleValues: [
    { title: 'Ransomware Groups Tracked', value: '340', subtitle: 'Active & dormant groups monitored' },
    { title: 'Ransomware Victims', value: '4,273', subtitle: 'Named victims this year' },
    { title: 'Top Active Ransomware', value: 'Qilin', subtitle: '606 victims · 13.94% of total' },
    { title: 'Top Targeted Sector', value: 'Manufacturing', subtitle: '18.4% of victims · energy & finance next' }
  ],
  attacksByGroup: [
    { label: 'Qilin', value: 606, percentage: '13.94%', color: '#e11d48' },
    { label: 'Thegentlemen', value: 430, percentage: '9.89%', color: '#ea580c' },
    { label: 'Akira', value: 284, percentage: '6.53%', color: '#f59e0b' },
    { label: 'Dragonforce', value: 244, percentage: '5.61%', color: '#10b981' },
    { label: 'Incransom', value: 233, percentage: '5.36%', color: '#3b82f6' }
  ],
  attacksByCountries: [
    { label: 'United States', value: 1513, percentage: '34.81%', color: '#e11d48' },
    { label: 'Unknown', value: 638, percentage: '14.68%', color: '#94a3b8' },
    { label: 'Germany', value: 200, percentage: '4.60%', color: '#ea580c' },
    { label: 'United Kingdom', value: 183, percentage: '4.21%', color: '#f59e0b' },
    { label: 'Canada', value: 134, percentage: '3.08%', color: '#3b82f6' }
  ],
  victimsOverTime: [
    { label: 'May 1', value: 48 },
    { label: 'May 8', value: 62 },
    { label: 'May 15', value: 75 },
    { label: 'May 22', value: 92 },
    { label: 'May 29', value: 84 },
    { label: 'Jun 5', value: 78 },
    { label: 'Jun 12', value: 96 },
    { label: 'May N', value: 104 }
  ],
  activeIncidentRoster: {
    leadGroup: '0apt',
    incident: {
      group: '0apt',
      chipTag: '0apt',
      location: 'Liberia',
      dateTime: '02 Feb 2026, 12:58 PM',
      title: 'Liberia Electricity Corporation (LEC)',
      subtext: 'LEC Network Under Control. We hold the blueprints of the national power grid and customer billing databases. Silence from the board will lead to data exposure.'
    } as RansomwareIncident,
    trackedGroupsList: ['0day syndicate', 'Abyss', 'Ailock', 'Akira', 'Qilin', 'Dragonforce']
  }
};

// 12. IOC Threat Intelligence
export const iocData = {
  singleValues: [
    { title: 'Total IOCs', value: '2,106', subtitle: 'Correlated threat telemetry indicators' },
    { title: 'Malicious Domains', value: '983', subtitle: '412 IPs · 408 URLs' },
    { title: 'Threat Tags', value: '90', subtitle: 'Distinct malware / campaign tags' },
    { title: 'With File Hashes', value: '284', subtitle: 'MD5 & SHA-256 available' }
  ],
  iocsByType: [
    { label: 'TECH_DOMAIN', value: 983, percentage: '46.68%', color: '#e11d48' },
    { label: 'TECH_IPv', value: 412, percentage: '19.56%', color: '#ea580c' },
    { label: 'TECH_URL', value: 408, percentage: '19.37%', color: '#f59e0b' },
    { label: 'UNKNOWN', value: 303, percentage: '14.39%', color: '#94a3b8' }
  ],
  topThreatTags: [
    { label: 'Phishing', value: 486, color: '#e11d48' },
    { label: 'ClearFake', value: 342, color: '#ea580c' },
    { label: 'iClickFix', value: 268, color: '#f59e0b' },
    { label: 'Systemic', value: 195, color: '#3b82f6' }
  ],
  iocDetectionsOverTime: [
    { label: 'May 1', value: 54 },
    { label: 'May 8', value: 68 },
    { label: 'May 15', value: 82 },
    { label: 'May 22', value: 95 },
    { label: 'May 29', value: 89 },
    { label: 'Jun 5', value: 102 },
    { label: 'Jun 12', value: 114 },
    { label: 'May N', value: 128 }
  ],
  recentIocs: [
    {
      fieldType: 'TECH_DOMAIN',
      fieldValue: 'www.dopravnipokuta.eu.cc',
      tag: 'Phishing',
      detectionDate: '29 Jun 2026 · 16:51'
    },
    {
      fieldType: 'TECH_IPv',
      fieldValue: '185.220.101.42',
      tag: 'ClearFake',
      detectionDate: '29 Jun 2026 · 14:22'
    },
    {
      fieldType: 'TECH_URL',
      fieldValue: 'https://verify-acme-security.in/token',
      tag: 'Phishing',
      detectionDate: '28 Jun 2026 · 22:15'
    },
    {
      fieldType: 'TECH_DOMAIN',
      fieldValue: 'cdn-fast-delivery.top',
      tag: 'iClickFix',
      detectionDate: '28 Jun 2026 · 18:04'
    },
    {
      fieldType: 'TECH_IPv',
      fieldValue: '91.240.118.66',
      tag: 'Systemic',
      detectionDate: '27 Jun 2026 · 11:38'
    }
  ]
};
