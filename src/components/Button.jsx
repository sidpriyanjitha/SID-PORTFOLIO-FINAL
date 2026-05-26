export const Button = ({
  className = "",
  size = "default",
  variant = "primary",
  children,
  href,
  ...props
}) => {
  const baseClasses =
    "relative inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-5 py-3 text-sm",
    lg: "px-7 py-4 text-base",
  };

  const variantClasses = {
    primary:
      "bg-primary text-primary-foreground shadow-[0_18px_40px_rgba(49,87,213,0.25)] hover:-translate-y-0.5 hover:bg-secondary",
    secondary:
      "bg-secondary text-secondary-foreground hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground shadow-[0_18px_40px_rgba(16,24,32,0.16)]",
    ghost:
      "border border-border bg-card/70 text-foreground hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
