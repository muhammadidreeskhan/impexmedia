export function BurjKhalifaLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8C547" />
          <stop offset="30%" stopColor="#D4AF37" />
          <stop offset="70%" stopColor="#C5A028" />
          <stop offset="100%" stopColor="#B8941E" />
        </linearGradient>
        <linearGradient id="darkGold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B7220" />
          <stop offset="100%" stopColor="#6B5616" />
        </linearGradient>
      </defs>
      
      {/* Base platform - curved */}
      <ellipse cx="50" cy="235" rx="45" ry="4" fill="url(#goldGradient)" opacity="0.9" />
      <path d="M 10 235 Q 50 232 90 235" stroke="url(#darkGold)" strokeWidth="0.8" fill="none" opacity="0.6" />
      
      {/* Foundation base */}
      <path d="M 30 230 L 28 225 L 72 225 L 70 230 Z" fill="url(#goldGradient)" stroke="url(#darkGold)" strokeWidth="0.8" />
      <line x1="28" y1="227" x2="72" y2="227" stroke="url(#darkGold)" strokeWidth="0.5" opacity="0.7" />
      
      {/* Lower base section */}
      <path d="M 28 225 L 25 210 L 75 210 L 72 225 Z" fill="url(#goldGradient)" stroke="url(#darkGold)" strokeWidth="0.8" />
      {[222, 219, 216, 213].map((y, i) => (
        <line key={`base-${i}`} x1={28 - i * 0.3} y1={y} x2={72 + i * 0.3} y2={y} stroke="url(#darkGold)" strokeWidth="0.5" opacity="0.7" />
      ))}
      
      {/* Lower-mid section */}
      <path d="M 25 210 L 23 185 L 77 185 L 75 210 Z" fill="url(#goldGradient)" stroke="url(#darkGold)" strokeWidth="0.8" />
      {[207, 204, 201, 198, 195, 192, 189, 186].map((y, i) => (
        <line key={`lower-mid-${i}`} x1={25 - i * 0.25} y1={y} x2={75 + i * 0.25} y2={y} stroke="url(#darkGold)" strokeWidth="0.5" opacity="0.7" />
      ))}
      
      {/* Mid section */}
      <path d="M 23 185 L 21 155 L 79 155 L 77 185 Z" fill="url(#goldGradient)" stroke="url(#darkGold)" strokeWidth="0.8" />
      {[182, 179, 176, 173, 170, 167, 164, 161, 158].map((y, i) => (
        <line key={`mid-${i}`} x1={23 - i * 0.2} y1={y} x2={77 + i * 0.2} y2={y} stroke="url(#darkGold)" strokeWidth="0.5" opacity="0.7" />
      ))}
      
      {/* Upper-mid section */}
      <path d="M 21 155 L 24 120 L 76 120 L 79 155 Z" fill="url(#goldGradient)" stroke="url(#darkGold)" strokeWidth="0.8" />
      {[152, 149, 146, 143, 140, 137, 134, 131, 128, 125, 122].map((y, i) => (
        <line key={`upper-mid-${i}`} x1={21 + i * 0.25} y1={y} x2={79 - i * 0.25} y2={y} stroke="url(#darkGold)" strokeWidth="0.5" opacity="0.7" />
      ))}
      
      {/* Upper section */}
      <path d="M 24 120 L 30 85 L 70 85 L 76 120 Z" fill="url(#goldGradient)" stroke="url(#darkGold)" strokeWidth="0.8" />
      {[117, 114, 111, 108, 105, 102, 99, 96, 93, 90, 87].map((y, i) => (
        <line key={`upper-${i}`} x1={24 + i * 0.4} y1={y} x2={76 - i * 0.4} y2={y} stroke="url(#darkGold)" strokeWidth="0.5" opacity="0.7" />
      ))}
      
      {/* Top section */}
      <path d="M 30 85 L 36 55 L 64 55 L 70 85 Z" fill="url(#goldGradient)" stroke="url(#darkGold)" strokeWidth="0.8" />
      {[82, 79, 76, 73, 70, 67, 64, 61, 58].map((y, i) => (
        <line key={`top-${i}`} x1={30 + i * 0.6} y1={y} x2={70 - i * 0.6} y2={y} stroke="url(#darkGold)" strokeWidth="0.5" opacity="0.7" />
      ))}
      
      {/* Spire base */}
      <path d="M 36 55 L 40 35 L 60 35 L 64 55 Z" fill="url(#goldGradient)" stroke="url(#darkGold)" strokeWidth="0.8" />
      {[52, 49, 46, 43, 40, 37].map((y, i) => (
        <line key={`spire-base-${i}`} x1={36 + i * 0.6} y1={y} x2={64 - i * 0.6} y2={y} stroke="url(#darkGold)" strokeWidth="0.5" opacity="0.7" />
      ))}
      
      {/* Spire middle */}
      <path d="M 40 35 L 44 20 L 56 20 L 60 35 Z" fill="url(#goldGradient)" stroke="url(#darkGold)" strokeWidth="0.7" />
      {[32, 29, 26, 23].map((y, i) => (
        <line key={`spire-mid-${i}`} x1={40 + i * 0.8} y1={y} x2={60 - i * 0.8} y2={y} stroke="url(#darkGold)" strokeWidth="0.4" opacity="0.7" />
      ))}
      
      {/* Spire top */}
      <path d="M 44 20 L 47 10 L 53 10 L 56 20 Z" fill="url(#goldGradient)" stroke="url(#darkGold)" strokeWidth="0.6" />
      {[17, 14, 12].map((y, i) => (
        <line key={`spire-top-${i}`} x1={44 + i} y1={y} x2={56 - i} y2={y} stroke="url(#darkGold)" strokeWidth="0.3" opacity="0.7" />
      ))}
      
      {/* Antenna */}
      <line x1="50" y1="10" x2="50" y2="2" stroke="url(#goldGradient)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="50" y1="6" x2="50" y2="4" stroke="url(#goldGradient)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="50" cy="2" r="1.5" fill="url(#goldGradient)" />
      
      {/* Vertical structural lines */}
      <line x1="30" y1="230" x2="36" y2="55" stroke="url(#darkGold)" strokeWidth="0.6" opacity="0.5" />
      <line x1="38" y1="230" x2="42" y2="35" stroke="url(#darkGold)" strokeWidth="0.5" opacity="0.4" />
      <line x1="50" y1="235" x2="50" y2="10" stroke="url(#darkGold)" strokeWidth="0.7" opacity="0.6" />
      <line x1="62" y1="230" x2="58" y2="35" stroke="url(#darkGold)" strokeWidth="0.5" opacity="0.4" />
      <line x1="70" y1="230" x2="64" y2="55" stroke="url(#darkGold)" strokeWidth="0.6" opacity="0.5" />
    </svg>
  )
}

export function BurjKhalifaLogoWithText({ className = "" }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <img 
        src="/Impexlogo-removebg-preview.png" 
        alt="Impex Capital & Media House" 
        className="h-24 sm:h-28 md:h-32 lg:h-40 w-auto"
      />
    </div>
  )
}
