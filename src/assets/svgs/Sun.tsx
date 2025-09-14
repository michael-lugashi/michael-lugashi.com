const Sun = ({ className = '' }) => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className={className}>
    <circle cx="12" cy="12" r="4" className="fill-current" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v1.5m0 15V21M4.22 4.22l1.06 1.06m13.44 13.44 1.06 1.06M3 12h1.5m15 0H21M4.22 19.78l1.06-1.06m13.44-13.44 1.06-1.06"
    />
  </svg>
);

export default Sun;
