import svgPaths from "../imports/svg-0u8xixtymn";

export default function NavbarLogoMobile() {
  return (
    <div className="h-5 w-auto flex items-center">
      <svg 
        className="h-full w-auto" 
        fill="none" 
        preserveAspectRatio="xMidYMid meet" 
        viewBox="0 0 3697 571"
      >
        <defs>
          <linearGradient id="orangeGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDBA74" />
            <stop offset="100%" stopColor="#FB923C" />
          </linearGradient>
          <linearGradient id="blueGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="violetGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C4B5FD" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>
          <linearGradient id="emeraldGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
        <g>
          <path d={svgPaths.p4cb0a00} fill="#1F1F1F" />
          <path d={svgPaths.p2d209580} fill="#1F1F1F" />
          <path clipRule="evenodd" d={svgPaths.p24b0b000} fill="url(#orangeGradientMobile)" fillRule="evenodd" />
          <path d={svgPaths.p150c1b70} fill="#1F1F1F" />
          <path d={svgPaths.pa5cb180} fill="#1F1F1F" />
          <path d={svgPaths.pad27b80} fill="#1F1F1F" />
          <path d={svgPaths.p3f324200} fill="#1F1F1F" />
          <path d={svgPaths.p4c79380} fill="url(#blueGradientMobile)" />
          <path d={svgPaths.p6da380} fill="#1F1F1F" />
          <path clipRule="evenodd" d={svgPaths.p3c77f900} fill="url(#violetGradientMobile)" fillRule="evenodd" />
          <path d={svgPaths.p8c5fbb0} fill="#1F1F1F" />
          <path d={svgPaths.p3aadb00} fill="url(#emeraldGradientMobile)" />
          <path d={svgPaths.pf9dc700} fill="#1F1F1F" />
        </g>
      </svg>
    </div>
  );
}