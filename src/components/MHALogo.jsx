export default function MHALogo({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer hexagon */}
      <polygon
        points="22,2 40,12 40,32 22,42 4,32 4,12"
        fill="none"
        stroke="#00e676"
        strokeWidth="1.2"
        opacity="0.8"
      />
      {/* Inner hexagon */}
      <polygon
        points="22,7 36,15 36,29 22,37 8,29 8,15"
        fill="rgba(0,230,118,0.06)"
        stroke="#00e676"
        strokeWidth="0.5"
        opacity="0.4"
      />
      {/* MHA text */}
      <text
        x="22" y="26"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="11"
        fontWeight="700"
        fill="#00e676"
        letterSpacing="0.5"
      >
        MHA
      </text>
      {/* Corner accents */}
      <circle cx="22" cy="2" r="1.5" fill="#00e676" opacity="0.6"/>
      <circle cx="40" cy="12" r="1.5" fill="#00e676" opacity="0.4"/>
      <circle cx="40" cy="32" r="1.5" fill="#00e676" opacity="0.4"/>
      <circle cx="22" cy="42" r="1.5" fill="#00e676" opacity="0.6"/>
      <circle cx="4" cy="32" r="1.5" fill="#00e676" opacity="0.4"/>
      <circle cx="4" cy="12" r="1.5" fill="#00e676" opacity="0.4"/>
    </svg>
  )
}
