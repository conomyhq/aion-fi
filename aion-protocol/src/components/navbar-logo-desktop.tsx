import svgPaths from "../imports/svg-0u8xixtymn";

export default function NavbarLogoDesktop() {
  return (
    <div className="h-6 w-auto flex items-center">
      <svg 
        className="h-full w-auto" 
        fill="none" 
        preserveAspectRatio="xMidYMid meet" 
        viewBox="0 0 3697 571"
      >
        <defs>
          <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDBA74" />
            <stop offset="100%" stopColor="#FB923C" />
          </linearGradient>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="violetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C4B5FD" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>
          <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
        <g>
          <path d={svgPaths.p4cb0a00} fill="#1F1F1F" />
          <path d={svgPaths.p2d209580} fill="#1F1F1F" />
          <path clipRule="evenodd" d={svgPaths.p24b0b000} fill="url(#orangeGradient)" fillRule="evenodd" />
          <path d={svgPaths.p150c1b70} fill="#1F1F1F" />
          <path d={svgPaths.pa5cb180} fill="#1F1F1F" />
          <path d={svgPaths.pad27b80} fill="#1F1F1F" />
          <path d={svgPaths.p3f324200} fill="#1F1F1F" />
          <path d={svgPaths.p4c79380} fill="url(#blueGradient)" />
          <path d={svgPaths.p6da380} fill="#1F1F1F" />
          <path clipRule="evenodd" d={svgPaths.p3c77f900} fill="url(#violetGradient)" fillRule="evenodd" />
          <path d={svgPaths.p8c5fbb0} fill="#1F1F1F" />
          <path d={svgPaths.p3aadb00} fill="url(#emeraldGradient)" />
          <path d={svgPaths.pf9dc700} fill="#1F1F1F" />
        </g>
      </svg>
    </div>
  );
}