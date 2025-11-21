export function BurjKhalifaLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Burj Khalifa inspired design */}
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E0C158" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8941F" />
        </linearGradient>
      </defs>
      
      {/* Main tower - central spire */}
      <path
        d="M 50 5 L 52 15 L 51 25 L 50 35 L 49 25 L 48 15 Z"
        fill="url(#goldGradient)"
        opacity="0.9"
      />
      
      {/* Upper section - tier 1 */}
      <path
        d="M 48 35 L 52 35 L 54 45 L 53 55 L 47 55 L 46 45 Z"
        fill="url(#goldGradient)"
      />
      
      {/* Middle section - tier 2 */}
      <path
        d="M 46 55 L 54 55 L 56 65 L 55 75 L 45 75 L 44 65 Z"
        fill="url(#goldGradient)"
      />
      
      {/* Lower section - tier 3 */}
      <path
        d="M 44 75 L 56 75 L 58 85 L 57 95 L 43 95 L 42 85 Z"
        fill="url(#goldGradient)"
      />
      
      {/* Accent lines - left */}
      <line x1="46" y1="45" x2="44" y2="65" stroke="#0A1A2F" strokeWidth="0.5" opacity="0.3" />
      <line x1="44" y1="65" x2="42" y2="85" stroke="#0A1A2F" strokeWidth="0.5" opacity="0.3" />
      
      {/* Accent lines - right */}
      <line x1="54" y1="45" x2="56" y2="65" stroke="#0A1A2F" strokeWidth="0.5" opacity="0.3" />
      <line x1="56" y1="65" x2="58" y2="85" stroke="#0A1A2F" strokeWidth="0.5" opacity="0.3" />
      
      {/* Horizontal details */}
      <line x1="46" y1="55" x2="54" y2="55" stroke="#0A1A2F" strokeWidth="0.5" opacity="0.2" />
      <line x1="44" y1="75" x2="56" y2="75" stroke="#0A1A2F" strokeWidth="0.5" opacity="0.2" />
      
      {/* Company initials */}
      <text
        x="50"
        y="92"
        fontSize="14"
        fontWeight="bold"
        fill="#0A1A2F"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
      >
        IC
      </text>
    </svg>
  )
}

export function BurjKhalifaLogoWithText({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      <BurjKhalifaLogo className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0" />
      <div className="flex flex-col">
        <span className="text-base sm:text-lg md:text-xl font-bold text-gold leading-tight whitespace-nowrap">
          IMPEX CAPITAL
        </span>
        <span className="text-[10px] sm:text-xs text-gray-400 leading-tight whitespace-nowrap">
          Branding & Media House
        </span>
      </div>
    </div>
  )
}
