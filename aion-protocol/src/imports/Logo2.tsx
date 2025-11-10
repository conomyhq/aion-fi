import svgPaths from "./svg-tbfs2hnz8";

function Frame51() {
  return (
    <div className="content-stretch flex gap-[2.838px] h-[23.649px] items-center relative shrink-0">
      <div className="h-[23.648px] relative shrink-0 w-[78.511px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 24">
          <g id="Union">
            <path d={svgPaths.p4438f80} fill="url(#paint0_linear_31_485)" />
            <path d={svgPaths.p4438f80} fill="url(#paint1_linear_31_485)" fillOpacity="0.8" />
            <path d={svgPaths.p4438f80} fill="url(#paint2_linear_31_485)" fillOpacity="0.8" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_31_485" x1="0" x2="78.5107" y1="11.8242" y2="11.8242">
              <stop stopColor="#00BC7D" />
              <stop offset="0.5" stopColor="#2B7FFF" />
              <stop offset="1" stopColor="#8E51FF" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_31_485" x1="0" x2="39.2544" y1="11.8242" y2="11.8242">
              <stop stopColor="#00CA86" />
              <stop offset="1" stopColor="#00BC7D" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_31_485" x1="39.2544" x2="78.5107" y1="11.8242" y2="11.8242">
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
    <div className="content-stretch flex gap-[5.676px] items-center justify-end relative shrink-0">
      <Frame51 />
      <div className="flex flex-col font-['Clash_Grotesk_Variable:Semibold',_sans-serif] font-[550] justify-center leading-[0] relative shrink-0 text-[#1f1f1f] text-[31.216px] text-nowrap tracking-[-0.6243px]">
        <p className="leading-[31.216px] whitespace-pre">MYP</p>
      </div>
    </div>
  );
}

function Frame5492() {
  return (
    <div className="bg-white h-[0.378px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0.047px] border-[rgba(31,31,31,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function Logo2() {
  return (
    <div className="content-stretch flex flex-col gap-[0.378px] items-end relative size-full" data-name="logo-2">
      <Frame5485 />
      <Frame5492 />
      <div className="flex flex-col font-['Clash_Grotesk_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#a1a1a1] text-[24.595px] text-nowrap text-right tracking-[-1.2297px]">
        <p className="leading-[23.649px] whitespace-pre">merchant_yield_pool</p>
      </div>
    </div>
  );
}