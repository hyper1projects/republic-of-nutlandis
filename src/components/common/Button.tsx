import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'treasury';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  asAnchor = false,
  href,
  target,
  rel,
  ...props
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-3 py-1.5 tracking-wider',
    md: 'text-[13px] px-4 py-2 tracking-wide font-medium',
    lg: 'text-[14px] px-6 py-2.5 tracking-wide font-semibold',
  };

  const variantStyles = {
    // Primary: muted red background (#AD4032) with cream text (#F2E9D7)
    primary:
      'bg-official-red hover:bg-official-darkRed text-paper-raised active:translate-y-[1px] border border-official-red transition-colors',
    // Secondary: transparent background with red border (#AD4032)
    secondary:
      'bg-transparent hover:bg-official-red/5 text-official-red border border-official-red active:translate-y-[1px] transition-colors',
    // Ghost: subtle border with ink text
    ghost:
      'bg-transparent hover:bg-paper-raised text-ink-primary border border-grid-line active:translate-y-[1px] transition-colors',
    // Treasury button on dark charcoal surface:
    treasury:
      'bg-official-red hover:bg-official-darkRed text-paper-raised border border-official-red shadow-sm active:translate-y-[1px] transition-colors',
  };

  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-sans select-none rounded-[2px] uppercase text-center cursor-pointer transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed';

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (asAnchor && href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
