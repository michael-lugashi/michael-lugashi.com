const Success: React.FC<{ className?: string }> = ({ className = 'h-3.5 w-3.5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M9 16.2 4.8 12 3.4 13.4 9 19 21 7 19.6 5.6z" />
  </svg>
);

export default Success;
