import React from 'react';

interface StatusIndicatorProps {
  label: string;
  value: string;
  variant?: 'normal' | 'alert' | 'highlight';
  onDark?: boolean;
  className?: string;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  label,
  value,
  variant = 'normal',
  onDark = false,
  className = '',
}) => {
  const isAlert = variant === 'alert';
  const isHighlight = variant === 'highlight';

  const dotColor = isAlert 
    ? 'bg-official-red' 
    : isHighlight 
      ? 'bg-ink-primary dark:bg-paper-raised' 
      : 'bg-emerald-600';

  const labelColor = onDark ? 'text-paper-secondary/70' : 'text-ink-muted';
  const valueColor = onDark 
    ? isAlert ? 'text-official-red' : 'text-paper-raised' 
    : isAlert ? 'text-official-red' : 'text-ink-primary';

  return (
    <div className={`inline-flex items-center gap-2 font-mono text-[11px] uppercase ${className}`}>
      <span className={`w-2 h-2 rounded-full ${dotColor} ${isAlert ? 'animate-ping' : ''}`} />
      <span className={labelColor}>{label}:</span>
      <span className={`font-semibold tracking-wide ${valueColor}`}>{value}</span>
    </div>
  );
};
