export interface SingleMetric {
  title: string;
  value: string | number;
  subtitle?: string;
  badge?: string;
  badgeVariant?: 'critical' | 'high' | 'medium' | 'low' | 'neutral' | 'accent';
  detailItems?: { label: string; value: string | number }[];
}

export interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
  sublabel?: string;
  secondaryValue?: number;
}

export interface TableRowFinding {
  [key: string]: string | number;
}

export interface TopVulnerability {
  id: string;
  name: string;
  cweOrCve: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  assetsImpacted: string;
  isKev?: boolean;
}

export interface RansomwareIncident {
  group: string;
  chipTag: string;
  location: string;
  dateTime: string;
  title: string;
  subtext: string;
}
