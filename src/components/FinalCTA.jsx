import { MessageCircle } from 'lucide-react';

export default function FinalCTA({ onOpenContact }) {
  const phone = "0908689314";
  const zaloUrl = `https://zalo.me/${phone}`;

  return (
    <section className="relative bg-[#07131D] text-[#FAF8F5] py-20 sm:py-36 lg:py-52 overflow-hidden border-t border-white/5">
      {/* Subtle ocean depth ambient glow in center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] rounded-full bg-[#1E7582]/20 blur-[100px] sm:blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center">
        {/* Large Centered Editorial Typography */}
        <h2 className="font-display text-4xl sm:text-7xl md:text-8xl font-normal leading-[1.08] tracking-tight mb-5 sm:mb-8">
          Mang vị biển
          <br />
          <span className="italic font-light text-[#2DD4BF]">về nhà.</span>
        </h2>

        {/* Small Supporting Text */}
        <p className="font-body text-sm sm:text-lg md:text-xl text-[#EAE4DC]/80 font-light max-w-xl mx-auto mb-8 sm:mb-12 leading-relaxed">
          Hải sản Cô Tiến — Hải sản tươi ngon từ đảo Phú Quý mang vào bày bán tại Phan Thiết, thơm ngọt trong từng bữa cơm.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-6">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-10 py-3.5 sm:py-4 bg-[#FAF8F5] text-[#07131D] hover:bg-[#2DD4BF] hover:text-[#07131D] text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 shadow-xl shadow-black/30 cursor-pointer min-h-[46px]"
          >
            Liên hệ hỏi mẻ cá hôm nay
          </button>

          <a
            href={zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 border border-white/20 text-[#FAF8F5] hover:border-[#2DD4BF] hover:text-[#2DD4BF] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 space-x-2 min-h-[46px]"
          >
            <MessageCircle className="w-4 h-4 stroke-[1.8]" />
            <span>Nhắn Zalo trực tiếp</span>
          </a>
        </div>

        {/* Subtle reassurance */}
        <div className="mt-8 sm:mt-12 text-[11px] sm:text-xs tracking-widest text-[#EAE4DC]/40 uppercase font-light">
          Hải sản tươi đón mua tận bến đảo Phú Quý • Bán tại tiệm Phan Thiết
        </div>
      </div>
    </section>
  );
}
