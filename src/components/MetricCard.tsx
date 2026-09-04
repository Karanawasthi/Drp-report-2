import React from 'react';
import { SingleMetric } from '../types';

interface MetricCardProps {
  metric: SingleMetric;
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ metric, className = '' }) => {
  const getBadgeStyle = (variant?: string) => {
    switch (variant) {
      case 'critical':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      case 'high':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'medium':
        return 'bg-yellow-50 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'accent':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div
      className={`bg-white border border-slate-200 rounded-lg p-3.5 shadow-xs flex flex-col justify-between ${className}`}
    >
      <div>
        <div className="flex items-start justify-between gap-2 mb-1">
          <span className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
            {metric.title}
          </span>
          {metric.badge && (
            <span
              className={`text-[9.5px] font-semibold px-2 py-0.5 rounded-full border shrink-0 ${getBadgeStyle(
                metric.badgeVariant
              )}`}
            >
              {metric.badge}
            </span>
          )}
        </div>

        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 tracking-tight">
            {metric.value}
          </span>
        </div>

        {metric.subtitle && (
          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{metric.subtitle}</p>
        )}
      </div>

      {metric.detailItems && metric.detailItems.length > 0 && (
        <div className="mt-3 pt-2.5 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px]">
          {metric.detailItems.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-slate-400 text-[10px] truncate">{item.label}</span>
              <span className="font-semibold font-mono text-slate-800">{item.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
