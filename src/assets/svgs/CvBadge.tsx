const CvBadge = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 256 256" fill="none" aria-hidden="true">
    <defs>
      <mask id="cvBadgeMask" x="0" y="0" width="256" height="256" maskUnits="userSpaceOnUse">
        <rect x="16" y="16" width="224" height="224" rx="28" fill="#ffffff" />
        <text
          x="128"
          y="146"
          fontSize="120"
          fontWeight="800"
          fontFamily="sans-serif"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#000000"
        >
          CV
        </text>
      </mask>
    </defs>
    <rect x="16" y="16" width="224" height="224" rx="28" fill="currentColor" mask="url(#cvBadgeMask)" />
  </svg>
);

export default CvBadge;
