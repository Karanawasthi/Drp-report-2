import React from 'react';
import { ChartDataPoint } from '../types';

// ==========================================
// 1. DONUT CHART (STATIC WITH VALUE LABELS & LEGENDS)
// ==========================================
interface DonutChartProps {
  data: { label: string; value: number; color: string; percentage?: string }[];
  centerLabel?: string;
  centerSubtext?: string;
  size?: number;
  thickness?: number;
}

export const DonutChart: React.FC<DonutChartProps> = ({
  data,
  centerLabel,
  centerSubtext,
  size = 140,
  thickness = 18
}) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  let accumulatedOffset = 0;

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 py-1">
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#f1f5f9"
            strokeWidth={thickness}
          />
          {/* Slices */}
          {data.map((item, index) => {
            const strokeDasharray = `${(item.value / total) * circumference} ${circumference}`;
            const strokeDashoffset = -accumulatedOffset;
            accumulatedOffset += (item.value / total) * circumference;

            return (
              <circle
                key={index}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="transparent"
                stroke={item.color}
                strokeWidth={thickness}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="butt"
              />
            );
          })}
        </svg>

        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
          {centerLabel && (
            <span className="font-bold text-slate-900 text-xs sm:text-sm tracking-tight leading-tight">
              {centerLabel}
            </span>
          )}
          {centerSubtext && (
            <span className="text-[10px] text-slate-500 font-medium leading-tight">
              {centerSubtext}
            </span>
          )}
        </div>
      </div>

      {/* Legend with explicit values & percentages */}
      <div className="flex-1 w-full space-y-1 text-xs">
        {data.map((item, index) => {
          const pct = item.percentage || `${Math.round((item.value / (total || 1)) * 100)}%`;
          return (
            <div key={index} className="flex items-center justify-between py-0.5 border-b border-slate-100 last:border-0">
              <div className="flex items-center gap-1.5 truncate pr-2">
                <span className="w-2.5 h-2.5 rounded-xs shrink-0" style={{ backgroundColor: item.color }} />
                <span className="text-slate-700 font-medium truncate">{item.label}</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0 font-mono">
                <span className="font-semibold text-slate-900">{item.value.toLocaleString()}</span>
                <span className="text-slate-500 text-[10px] w-9 text-right">({pct})</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ==========================================
// 2. TREND LINE CHART (STATIC WITH VALUE CALLOUTS)
// ==========================================
interface TrendLineChartProps {
  data: { label: string; value: number; secondaryValue?: number }[];
  primaryLegend?: string;
  secondaryLegend?: string;
  height?: number;
  yMax?: number;
  yTicks?: number[];
  primaryColor?: string;
  secondaryColor?: string;
}

export const TrendLineChart: React.FC<TrendLineChartProps> = ({
  data,
  primaryLegend = 'Detected',
  secondaryLegend,
  height = 160,
  yMax,
  yTicks,
  primaryColor = '#2563eb',
  secondaryColor = '#059669'
}) => {
  const calculatedMax = yMax || Math.max(...data.map(d => Math.max(d.value, d.secondaryValue || 0))) * 1.15;
  const padding = { top: 22, right: 20, bottom: 26, left: 45 };
  const width = 500;
  const graphWidth = width - padding.left - padding.right;
  const graphHeight = height - padding.top - padding.bottom;

  const getX = (index: number) => padding.left + (index / (data.length - 1)) * graphWidth;
  const getY = (val: number) => padding.top + graphHeight - (val / calculatedMax) * graphHeight;

  // Primary Path
  const primaryPoints = data.map((d, i) => `${getX(i)},${getY(d.value)}`).join(' ');
  // Secondary Path (if any)
  const secondaryPoints = secondaryLegend
    ? data.map((d, i) => `${getX(i)},${getY(d.secondaryValue || 0)}`).join(' ')
    : '';

  const defaultTicks = yTicks || [0, Math.round(calculatedMax * 0.33), Math.round(calculatedMax * 0.66), Math.round(calculatedMax)];

  return (
    <div className="w-full">
      {/* Legend header */}
      <div className="flex items-center justify-end gap-4 mb-1.5 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-1 rounded-full" style={{ backgroundColor: primaryColor }} />
          <span className="font-semibold text-slate-700">{primaryLegend}</span>
        </div>
        {secondaryLegend && (
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1 rounded-full" style={{ backgroundColor: secondaryColor }} />
            <span className="font-semibold text-slate-700">{secondaryLegend}</span>
          </div>
        )}
      </div>

      <div className="relative w-full overflow-hidden">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
          {/* Y Axis Grid & Ticks */}
          {defaultTicks.map((tick, i) => {
            const y = getY(tick);
            return (
              <g key={i}>
                <line
                  x1={padding.left}
                  y1={y}
                  x2={width - padding.right}
                  y2={y}
                  stroke="#e2e8f0"
                  strokeDasharray="3 3"
                  strokeWidth="1"
                />
                <text
                  x={padding.left - 6}
                  y={y + 3}
                  textAnchor="end"
                  className="fill-slate-400 text-[9px] font-mono"
                >
                  {tick.toLocaleString()}
                </text>
              </g>
            );
          })}

          {/* Area under primary line */}
          <polygon
            points={`${getX(0)},${getY(0)} ${primaryPoints} ${getX(data.length - 1)},${getY(0)}`}
            fill={primaryColor}
            fillOpacity="0.08"
          />

          {/* Secondary Line */}
          {secondaryLegend && (
            <polyline
              fill="none"
              stroke={secondaryColor}
              strokeWidth="2"
              points={secondaryPoints}
            />
          )}

          {/* Primary Line */}
          <polyline
            fill="none"
            stroke={primaryColor}
            strokeWidth="2.5"
            points={primaryPoints}
          />

          {/* Secondary Data points & Value tags */}
          {secondaryLegend &&
            data.map((d, i) => {
              const val = d.secondaryValue || 0;
              const cx = getX(i);
              const cy = getY(val);
              return (
                <g key={`sec-${i}`}>
                  <circle cx={cx} cy={cy} r="3" fill="#ffffff" stroke={secondaryColor} strokeWidth="2" />
                  <rect
                    x={cx - 14}
                    y={cy + 5}
                    width="28"
                    height="12"
                    rx="3"
                    fill="#ecfdf5"
                    stroke={secondaryColor}
                    strokeWidth="0.5"
                  />
                  <text
                    x={cx}
                    y={cy + 14}
                    textAnchor="middle"
                    className="fill-emerald-800 text-[8px] font-mono font-bold"
                  >
                    {val}
                  </text>
                </g>
              );
            })}

          {/* Primary Data points & Value tags (CRITICAL for static print report) */}
          {data.map((d, i) => {
            const cx = getX(i);
            const cy = getY(d.value);
            return (
              <g key={`pri-${i}`}>
                <circle cx={cx} cy={cy} r="3.5" fill="#ffffff" stroke={primaryColor} strokeWidth="2" />
                <rect
                  x={cx - 15}
                  y={cy - 16}
                  width="30"
                  height="12"
                  rx="3"
                  fill="#ffffff"
                  stroke="#cbd5e1"
                  strokeWidth="0.5"
                />
                <text
                  x={cx}
                  y={cy - 7}
                  textAnchor="middle"
                  className="fill-slate-900 text-[8.5px] font-mono font-bold"
                >
                  {d.value}
                </text>
              </g>
            );
          })}

          {/* X Axis Labels */}
          {data.map((d, i) => {
            const x = getX(i);
            return (
              <text
                key={`label-${i}`}
                x={x}
                y={height - 6}
                textAnchor="middle"
                className="fill-slate-600 text-[9px] font-medium"
              >
                {d.label}
              </text>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

// ==========================================
// 3. VERTICAL BAR CHART (WITH VALUE LABELS ON TOP)
// ==========================================
interface VerticalBarChartProps {
  data: { label: string; value: number; secondaryValue?: number; color?: string }[];
  yMax?: number;
  height?: number;
  barColor?: string;
  secondaryLegend?: string;
  primaryLegend?: string;
  yAxisLabel?: string;
}

export const VerticalBarChart: React.FC<VerticalBarChartProps> = ({
  data,
  yMax,
  height = 160,
  barColor = '#2563eb',
  secondaryLegend,
  primaryLegend = 'Detected'
}) => {
  const calculatedMax = yMax || Math.max(...data.map(d => Math.max(d.value, d.secondaryValue || 0))) * 1.2;
  const padding = { top: 20, right: 15, bottom: 35, left: 35 };
  const width = 500;
  const graphWidth = width - padding.left - padding.right;
  const graphHeight = height - padding.top - padding.bottom;

  const ticks = [0, Math.round(calculatedMax * 0.25), Math.round(calculatedMax * 0.5), Math.round(calculatedMax * 0.75), Math.round(calculatedMax)];
  const getY = (val: number) => padding.top + graphHeight - (val / calculatedMax) * graphHeight;

  const groupWidth = graphWidth / data.length;
  const barWidth = secondaryLegend ? Math.min(20, groupWidth * 0.35) : Math.min(32, groupWidth * 0.6);

  return (
    <div className="w-full">
      {/* Legend */}
      <div className="flex items-center justify-end gap-3 mb-1.5 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-xs" style={{ backgroundColor: barColor }} />
          <span className="font-semibold text-slate-700">{primaryLegend}</span>
        </div>
        {secondaryLegend && (
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-xs bg-amber-500" />
            <span className="font-semibold text-slate-700">{secondaryLegend}</span>
          </div>
        )}
      </div>

      <div className="relative w-full">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
          {/* Grid lines */}
          {ticks.map((tick, i) => {
            const y = getY(tick);
            return (
              <g key={i}>
                <line
                  x1={padding.left}
                  y1={y}
                  x2={width - padding.right}
                  y2={y}
                  stroke="#f1f5f9"
                  strokeWidth="1"
                />
                <text
                  x={padding.left - 4}
                  y={y + 3}
                  textAnchor="end"
                  className="fill-slate-400 text-[8.5px] font-mono"
                >
                  {tick}
                </text>
              </g>
            );
          })}

          {/* Baseline */}
          <line
            x1={padding.left}
            y1={padding.top + graphHeight}
            x2={width - padding.right}
            y2={padding.top + graphHeight}
            stroke="#cbd5e1"
            strokeWidth="1"
          />

          {/* Bars */}
          {data.map((d, i) => {
            const groupCenterX = padding.left + i * groupWidth + groupWidth / 2;

            if (secondaryLegend) {
              const b1X = groupCenterX - barWidth - 1;
              const b2X = groupCenterX + 1;
              const b1Y = getY(d.value);
              const b1H = graphHeight - (b1Y - padding.top);
              const b2Val = d.secondaryValue || 0;
              const b2Y = getY(b2Val);
              const b2H = graphHeight - (b2Y - padding.top);

              return (
                <g key={i}>
                  {/* Bar 1 */}
                  <rect
                    x={b1X}
                    y={b1Y}
                    width={barWidth}
                    height={Math.max(0, b1H)}
                    fill={d.color || barColor}
                    rx="2"
                  />
                  <text
                    x={b1X + barWidth / 2}
                    y={b1Y - 3}
                    textAnchor="middle"
                    className="fill-slate-900 text-[8px] font-mono font-bold"
                  >
                    {d.value}
                  </text>

                  {/* Bar 2 */}
                  <rect
                    x={b2X}
                    y={b2Y}
                    width={barWidth}
                    height={Math.max(0, b2H)}
                    fill="#f59e0b"
                    rx="2"
                  />
                  <text
                    x={b2X + barWidth / 2}
                    y={b2Y - 3}
                    textAnchor="middle"
                    className="fill-amber-900 text-[8px] font-mono font-bold"
                  >
                    {b2Val}
                  </text>

                  {/* Label */}
                  <text
                    x={groupCenterX}
                    y={padding.top + graphHeight + 14}
                    textAnchor="middle"
                    className="fill-slate-700 text-[8px] font-medium"
                  >
                    {d.label}
                  </text>
                </g>
              );
            }

            // Single bar
            const barX = groupCenterX - barWidth / 2;
            const barY = getY(d.value);
            const barH = graphHeight - (barY - padding.top);

            return (
              <g key={i}>
                <rect
                  x={barX}
                  y={barY}
                  width={barWidth}
                  height={Math.max(0, barH)}
                  fill={d.color || barColor}
                  rx="2"
                />
                {/* Value on top of bar */}
                <text
                  x={groupCenterX}
                  y={barY - 4}
                  textAnchor="middle"
                  className="fill-slate-900 text-[9px] font-mono font-bold"
                >
                  {d.value}
                </text>
                {/* X-axis label */}
                <text
                  x={groupCenterX}
                  y={padding.top + graphHeight + 14}
                  textAnchor="middle"
                  className="fill-slate-700 text-[8.5px] font-medium"
                >
                  {d.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

// ==========================================
// 4. STACKED VERTICAL BAR CHART
// ==========================================
interface StackedBarProps {
  data: { label: string; positive: number; neutral: number; negative: number }[];
  height?: number;
}

export const StackedBarChart: React.FC<StackedBarProps> = ({ data, height = 150 }) => {
  const width = 480;
  const padding = { top: 20, right: 15, bottom: 35, left: 35 };
  const graphWidth = width - padding.left - padding.right;
  const graphHeight = height - padding.top - padding.bottom;
  const maxTotal = 100; // Normalized percentage or count

  const groupWidth = graphWidth / data.length;
  const barWidth = Math.min(36, groupWidth * 0.55);

  return (
    <div className="w-full">
      <div className="flex items-center justify-end gap-3 mb-1.5 text-xs">
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-xs bg-emerald-500" />
          <span className="text-slate-700 font-medium">Positive</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-xs bg-slate-400" />
          <span className="text-slate-700 font-medium">Neutral</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-xs bg-rose-600" />
          <span className="text-slate-700 font-medium">Negative</span>
        </div>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
        {/* Baseline */}
        <line
          x1={padding.left}
          y1={padding.top + graphHeight}
          x2={width - padding.right}
          y2={padding.top + graphHeight}
          stroke="#cbd5e1"
          strokeWidth="1"
        />

        {data.map((d, i) => {
          const groupCenterX = padding.left + i * groupWidth + groupWidth / 2;
          const barX = groupCenterX - barWidth / 2;

          const hPos = (d.positive / maxTotal) * graphHeight;
          const hNeu = (d.neutral / maxTotal) * graphHeight;
          const hNeg = (d.negative / maxTotal) * graphHeight;

          const yNeg = padding.top + graphHeight - hNeg;
          const yNeu = yNeg - hNeu;
          const yPos = yNeu - hPos;

          return (
            <g key={i}>
              {/* Negative segment */}
              <rect x={barX} y={yNeg} width={barWidth} height={hNeg} fill="#e11d48" />
              {/* Neutral segment */}
              <rect x={barX} y={yNeu} width={barWidth} height={hNeu} fill="#94a3b8" />
              {/* Positive segment */}
              <rect x={barX} y={yPos} width={barWidth} height={hPos} fill="#10b981" rx="2" />

              {/* Total label */}
              <text
                x={groupCenterX}
                y={yPos - 4}
                textAnchor="middle"
                className="fill-slate-900 text-[8.5px] font-mono font-bold"
              >
                {d.positive + d.neutral + d.negative}%
              </text>

              {/* X Axis Label */}
              <text
                x={groupCenterX}
                y={padding.top + graphHeight + 14}
                textAnchor="middle"
                className="fill-slate-700 text-[8.5px] font-medium"
              >
                {d.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

// ==========================================
// 5. PENTAGONAL RADAR CHART (FOR INFO-STEALERS)
// ==========================================
interface RadarChartProps {
  data: { label: string; value: number; count: number }[];
  size?: number;
}

export const RadarPentagonChart: React.FC<RadarChartProps> = ({ data, size = 180 }) => {
  const center = size / 2;
  const radius = size * 0.38;
  const totalAxes = data.length; // 5 for pentagon

  const getCoordinates = (index: number, valPercent: number) => {
    const angle = (Math.PI * 2 / totalAxes) * index - Math.PI / 2;
    const r = radius * (valPercent / 100);
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle)
    };
  };

  // Concentric polygons
  const gridLevels = [0.25, 0.5, 0.75, 1.0];

  // Data polygon points
  const points = data
    .map((item, index) => {
      const { x, y } = getCoordinates(index, item.value);
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        {/* Concentric pentagons */}
        {gridLevels.map((lvl, lIdx) => {
          const polyPoints = Array.from({ length: totalAxes })
            .map((_, aIdx) => {
              const { x, y } = getCoordinates(aIdx, lvl * 100);
              return `${x},${y}`;
            })
            .join(' ');
          return (
            <polygon
              key={lIdx}
              points={polyPoints}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="1"
            />
          );
        })}

        {/* Axes lines */}
        {data.map((_, aIdx) => {
          const { x, y } = getCoordinates(aIdx, 100);
          return (
            <line
              key={aIdx}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="#cbd5e1"
              strokeWidth="1"
            />
          );
        })}

        {/* Data polygon */}
        <polygon
          points={points}
          fill="#f43f5e"
          fillOpacity="0.25"
          stroke="#e11d48"
          strokeWidth="2"
        />

        {/* Data points & Labels at vertices */}
        {data.map((item, index) => {
          const { x, y } = getCoordinates(index, item.value);
          const outer = getCoordinates(index, 125);
          return (
            <g key={index}>
              <circle cx={x} cy={y} r="3.5" fill="#ffffff" stroke="#e11d48" strokeWidth="2" />
              <text
                x={outer.x}
                y={outer.y}
                textAnchor="middle"
                className="fill-slate-800 text-[8.5px] font-semibold"
              >
                {item.label}
              </text>
              <text
                x={outer.x}
                y={outer.y + 9}
                textAnchor="middle"
                className="fill-rose-700 text-[8px] font-mono font-bold"
              >
                {item.count} logs ({item.value}%)
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

// ==========================================
// 6. PROGRESS BAR LIST (EXPLICIT VALUES)
// ==========================================
interface ProgressBarItem {
  label: string;
  value: number;
  color?: string;
  percentage?: number;
  sublabel?: string;
}

interface ProgressBarListProps {
  items: ProgressBarItem[];
  maxVal?: number;
  showPercentage?: boolean;
}

export const ProgressBarList: React.FC<ProgressBarListProps> = ({
  items,
  maxVal,
  showPercentage = true
}) => {
  const calculatedMax = maxVal || Math.max(...items.map(i => i.value)) || 1;

  return (
    <div className="space-y-2">
      {items.map((item, index) => {
        const pct = item.percentage !== undefined ? item.percentage : Math.round((item.value / calculatedMax) * 100);
        return (
          <div key={index} className="text-xs">
            <div className="flex justify-between items-center mb-0.5">
              <span className="font-medium text-slate-700 truncate">{item.label}</span>
              <div className="flex items-center gap-1.5 shrink-0 font-mono">
                <span className="font-bold text-slate-900">{item.value.toLocaleString()}</span>
                {showPercentage && (
                  <span className="text-slate-500 text-[10px] w-9 text-right">({pct}%)</span>
                )}
              </div>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${Math.min(100, (item.value / calculatedMax) * 100)}%`,
                  backgroundColor: item.color || '#2563eb'
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
