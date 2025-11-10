import svgPaths from "./svg-dkvkjv6oq";
import newIllustration from 'figma:asset/3186e0fe776cf19065524800f8a303a2479ae84f.png';

export default function Illustrations() {
  return (
    <div className="relative size-full" data-name="Illustrations">
      <img 
        src={newIllustration} 
        alt="Investment illustration" 
        className="block size-full object-cover rounded-2xl shadow-lg shadow-gray-900/5 border border-gray-100/60"
        style={{ 
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        }}
      />
      {/* Subtle overlay for better integration */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/20 via-blue-50/20 to-violet-50/20 rounded-2xl" />
    </div>
  );
}