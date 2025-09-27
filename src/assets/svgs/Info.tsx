const Info: React.FC<{ className?: string }> = ({ className = 'h-3.5 w-3.5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <circle cx="12" cy="7" r="1.6" />
    <rect x="11" y="10" width="2" height="8" rx="1" />
  </svg>
);

export default Info;
