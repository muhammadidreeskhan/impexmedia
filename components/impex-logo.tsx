export default function ImpexLogo({ className = "h-20" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 80"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Burj Khalifa Icon */}
      <g transform="translate(10, 10)">
        {/* Base */}
        <path
          d="M 30 60 L 35 20 L 40 60 Z"
          fill="#D4AF37"
          stroke="#D4AF37"
          strokeWidth="0.5"
        />
        {/* Middle section */}
        <path
          d="M 32 40 L 35 10 L 38 40 Z"
          fill="#D4AF37"
          opacity="0.9"
        />
        {/* Top spire */}
        <path
          d="M 34 20 L 35 5 L 36 20 Z"
          fill="#D4AF37"
        />
        {/* Details */}
        <line x1="35" y1="60" x2="35" y2="5" stroke="#0A1A2F" strokeWidth="0.3" opacity="0.3" />
        <line x1="33" y1="50" x2="37" y2="50" stroke="#0A1A2F" strokeWidth="0.2" opacity="0.2" />
        <line x1="33" y1="40" x2="37" y2="40" stroke="#0A1A2F" strokeWidth="0.2" opacity="0.2" />
        <line x1="33" y1="30" x2="37" y2="30" stroke="#0A1A2F" strokeWidth="0.2" opacity="0.2" />
      </g>

      {/* Company Name */}
      <text
        x="75"
        y="35"
        fontFamily="Arial, sans-serif"
        fontSize="24"
        fontWeight="bold"
        fill="#0A1A2F"
      >
        IMPEX
      </text>
      
      <text
        x="75"
        y="55"
        fontFamily="Arial, sans-serif"
        fontSize="16"
        fontWeight="600"
        fill="#D4AF37"
      >
        CAPITAL
      </text>

      {/* Tagline */}
      <text
        x="180"
        y="45"
        fontFamily="Arial, sans-serif"
        fontSize="8"
        fill="#666"
      >
        Branding & Media House
      </text>
    </svg>
  )
}
