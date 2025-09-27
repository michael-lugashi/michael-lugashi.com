const Error: React.FC<{ className?: string }> = ({ className = 'h-3.5 w-3.5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 2 1 21h22L12 2zm1 15h-2v-2h2v2zm0-4h-2V8h2v5z" />
  </svg>
);

export default Error;
