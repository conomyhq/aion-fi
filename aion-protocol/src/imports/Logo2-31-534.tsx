import svgPaths from "./svg-2w9oh2neu2";

function Frame51() {
  return (
    <div className="content-stretch flex gap-[1.589px] h-[13.245px] items-center relative shrink-0">
      <div
        className="h-[13.245px] relative shrink-0 w-[43.972px]"
        data-name="Union"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 44 14"
        >
          <g id="Union">
            <path
              d={svgPaths.p34811f80}
              fill="url(#paint0_linear_31_544)"
            />
            <path
              d={svgPaths.p34811f80}
              fill="url(#paint1_linear_31_544)"
              fillOpacity="0.8"
            />
            <path
              d={svgPaths.p34811f80}
              fill="url(#paint2_linear_31_544)"
              fillOpacity="0.8"
            />
          </g>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_31_544"
              x1="0"
              x2="43.9717"
              y1="6.62256"
              y2="6.62256"
            >
              <stop stopColor="#00BC7D" />
              <stop offset="0.5" stopColor="#2B7FFF" />
              <stop offset="1" stopColor="#8E51FF" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_31_544"
              x1="0"
              x2="21.9853"
              y1="6.62256"
              y2="6.62255"
            >
              <stop stopColor="#00CA86" />
              <stop
                offset="1"
                stopColor="#00BC7D"
                stopOpacity="0"
              />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint2_linear_31_544"
              x1="21.9853"
              x2="43.9717"
              y1="6.62255"
              y2="6.62256"
            >
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
    <div className="content-stretch flex gap-[3.179px] items-center justify-end relative shrink-0">
      <Frame51 />
      <div className="flex flex-col font-['Clash_Grotesk_Variable:Semibold',_sans-serif] font-[550] justify-center leading-[0] relative shrink-0 text-[#1f1f1f] text-[17.483px] text-nowrap tracking-[-0.3497px]">
        <p className="leading-[17.483px] whitespace-pre">MYP</p>
      </div>
    </div>
  );
}

function Frame5492() {
  return (
    <div className="bg-white h-[0.212px] relative shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[0px] border-[rgba(31,31,31,0.1)] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

export default function Logo2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[0.212px] items-end relative size-full"
      data-name="logo-2"
    >
      <Frame5485 />
      <Frame5492 />
      <div className="flex flex-col font-['Clash_Grotesk_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#a1a1a1] text-[13.775px] text-nowrap text-right tracking-[-0.6887px]">
        <p className="leading-[13.245px] whitespace-pre">
          merchant_yield_pool
        </p>
      </div>
    </div>
  );
}