import svgPaths from "./svg-bgm71nccij";

function Frame51() {
  return (
    <div className="content-stretch flex gap-[60px] h-[500px] items-center relative shrink-0">
      <div className="h-[500.001px] relative shrink-0 w-[1659.96px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1660 500">
          <g id="Union">
            <path d={svgPaths.p23747000} fill="url(#paint0_linear_31_354)" />
            <path d={svgPaths.p23747000} fill="url(#paint1_linear_31_354)" fillOpacity="0.8" />
            <path d={svgPaths.p23747000} fill="url(#paint2_linear_31_354)" fillOpacity="0.8" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_31_354" x1="0" x2="1659.96" y1="250" y2="250">
              <stop stopColor="#00BC7D" />
              <stop offset="0.5" stopColor="#2B7FFF" />
              <stop offset="1" stopColor="#8E51FF" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_31_354" x1="0" x2="829.961" y1="250.001" y2="250">
              <stop stopColor="#00CA86" />
              <stop offset="1" stopColor="#00BC7D" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_31_354" x1="829.961" x2="1659.96" y1="250" y2="250.001">
              <stop stopColor="#8E51FF" stopOpacity="0" />
              <stop offset="1" stopColor="#9B65FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame5485() {
  return (
    <div className="content-stretch flex gap-[120px] items-center justify-end relative shrink-0">
      <Frame51 />
      <div className="flex flex-col font-['Clash_Grotesk_Variable:Semibold',_sans-serif] font-[550] justify-center leading-[0] relative shrink-0 text-[#1f1f1f] text-[660px] text-nowrap tracking-[-13.2px]">
        <p className="leading-[660px] whitespace-pre">MYP</p>
      </div>
    </div>
  );
}

function Frame5492() {
  return (
    <div className="bg-white h-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(31,31,31,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function Frame5497() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative size-full">
      <Frame5485 />
      <Frame5492 />
      <div className="flex flex-col font-['Clash_Grotesk_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#a1a1a1] text-[520px] text-nowrap text-right tracking-[-26px]">
        <p className="leading-[500px] whitespace-pre">merchant_yield_pool</p>
      </div>
    </div>
  );
}