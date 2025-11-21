export default function ImpexLogoEnhanced({ className = "h-20", variant = "dark" }: { className?: string, variant?: "dark" | "light" }) {
  const textColor = variant === "dark" ? "#0A1A2F" : "#FFFFFF"
  const goldColor = "#D4AF37"
  
  return (
    <svg
      viewBox="0 0 320 90"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle (optional) */}
      <circle cx="40" cy="45" r="35" fill={goldColor} opacity="0.1" />
      
      {/* Burj Khalifa Stylized Icon */}
      <g transform="translate(15, 15)">
        {/* Main tower structure */}
        <path
          d="M 25 65 L 28 30 L 32 20 L 35 10 L 38 20 L 42 30 L 45 65 Z"
          fill={goldColor}
          stroke={goldColor}
          strokeWidth="0.5"
        />
        
        {/* Tower tiers */}
        <path
          d="M 27 50 L 30 35 L 35 25 L 40 35 L 43 50 Z"
          fill={goldColor}
          opacity="0.8"
        />
        
        <path
          d="M 30 35 L 33 25 L 35 15 L 37 25 L 40 35 Z"
          fill={goldColor}
          opacity="0.9"
        />
        
        {/* Spire */}
        <path
          d="M 33 20 L 35 5 L 37 20 Z"
          fill={goldColor}
        />
        
        {/* Architectural details */}
        <line x1="35" y1="65" x2="35" y2="5" stroke="#0A1A2F" strokeWidth="0.4" opacity="0.2" />
        <line x1="30" y1="55" x2="40" y2="55" stroke="#0A1A2F" strokeWidth="0.3" opacity="0.15" />
        <line x1="31" y1="45" x2="39" y2="45" stroke="#0A1A2F" strokeWidth="0.3" opacity="0.15" />
        <line x1="32" y1="35" x2="38" y2="35" stroke="#0A1A2F" strokeWidth="0.3" opacity="0.15" />
        <line x1="33" y1="25" x2="37" y2="25" stroke="#0A1A2F" strokeWidth="0.3" opacity="0.15" />
        
        {/* Base platform */}
        <rect x="23" y="65" width="24" height="2" fill={goldColor} opacity="0.6" />
      </g>

      {/* Vertical separator line */}
      <line x1="70" y1="25" x2="70" y2="65" stroke={goldColor} strokeWidth="2" opacity="0.3" />

      {/* Company Name - IMPEX */}
      <text
        x="85"
        y="45"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontSize="28"
        fontWeight="900"
        fill={textColor}
        letterSpacing="2"
      >
        IMPEX
      </text>
      
      {/* Company Name - CAPITAL */}
      <text
        x="85"
        y="68"
        fontFamily="Arial, sans-serif"
        fontSize="18"
        fontWeight="700"
        fill={goldColor}
        letterSpacing="3"
      >
        CAPITAL
      </text>

      {/* Tagline */}
      <text
        x="220"
        y="50"
        fontFamily="Arial, sans-serif"
        fontSize="9"
        fontWeight="500"
        fill={variant === "dark" ? "#666" : "#CCC"}
        letterSpacing="0.5"
      >
        BRANDING & MEDIA
      </text>
      
      <text
        x="235"
        y="62"
        fontFamily="Arial, sans-serif"
        fontSize="8"
        fontWeight="400"
        fill={goldColor}
        letterSpacing="1"
      >
        DUBAI, UAE
      </text>
    </svg>
  )
}
