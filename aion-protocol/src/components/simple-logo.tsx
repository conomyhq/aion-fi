export function SimpleLogo() {
  return (
    <div className="flex items-center gap-2">
      {/* Geometric elements similar to the original design */}
      <div className="flex items-center gap-1">
        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500"></div>
        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 transform rotate-45"></div>
        <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 transform rotate-12"></div>
      </div>
      
      {/* MYP text */}
      <div className="flex flex-col">
        <span className="text-xl font-semibold text-[#1f1f1f] leading-none tracking-tight">
          MYP
        </span>
        <span className="text-xs text-gray-400 leading-none tracking-wider">
          merchant_yield_pool
        </span>
      </div>
    </div>
  );
}