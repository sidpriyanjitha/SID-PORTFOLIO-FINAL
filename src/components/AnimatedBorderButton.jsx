export const AnimatedBorderButton = ({
  children,
  href,
  className = "",
  ...props
}) => {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/70 px-7 py-4 text-base font-bold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-highlight/70 hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${className}`;

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
