import svgPaths from "./svg-apfbutelu2";

export default function LogoDesktop() {
  return (
    <div className="relative size-full" data-name="logo-desktop">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 115 33">
        <g id="logo-desktop">
          <path d={svgPaths.p28400400} fill="url(#paint0_linear_37_25)" id="Vector" />
          <path d={svgPaths.p28400400} fill="url(#paint1_linear_37_25)" fillOpacity="0.8" id="Vector_2" />
          <path d={svgPaths.p28400400} fill="url(#paint2_linear_37_25)" fillOpacity="0.8" id="Vector_3" />
          <path d={svgPaths.p15ad7b80} fill="var(--fill-0, #1F1F1F)" id="Vector_4" />
          <g id="Mask group">
            <mask height="14" id="mask0_37_25" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="37" x="78" y="2">
              <g id="Group">
                <path d={svgPaths.pfacfa00} fill="var(--fill-0, white)" id="Vector_5" />
                <path d={svgPaths.p15ad7b80} fill="var(--fill-0, black)" id="Vector_6" />
              </g>
            </mask>
            <g mask="url(#mask0_37_25)">
              <path d={svgPaths.pd214000} fill="var(--fill-0, #CDCDCD)" id="Vector_7" />
            </g>
          </g>
          <path d={svgPaths.p1384440} fill="var(--fill-0, #A1A1A1)" id="Vector_8" />
          <g id="Mask group_2">
            <mask height="14" id="mask1_37_25" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="115" x="0" y="19">
              <g id="Group_2">
                <path d={svgPaths.p39499c80} fill="var(--fill-0, white)" id="Vector_9" />
                <path d={svgPaths.p1384440} fill="var(--fill-0, black)" id="Vector_10" />
              </g>
            </mask>
            <g mask="url(#mask1_37_25)">
              <path d={svgPaths.p36cbc180} fill="var(--fill-0, #CDCDCD)" id="Vector_11" />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_37_25" x1="31.0781" x2="75.0498" y1="9.56787" y2="9.56787">
            <stop stopColor="#00BC7D" />
            <stop offset="0.5" stopColor="#2B7FFF" />
            <stop offset="1" stopColor="#8E51FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_37_25" x1="31.0781" x2="53.0634" y1="9.56787" y2="9.56786">
            <stop stopColor="#00CA86" />
            <stop offset="1" stopColor="#00BC7D" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_37_25" x1="53.0634" x2="75.0498" y1="9.56786" y2="9.56787">
            <stop stopColor="#8E51FF" stopOpacity="0" />
            <stop offset="1" stopColor="#9B65FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}