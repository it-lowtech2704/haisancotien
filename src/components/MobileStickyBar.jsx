import React from 'react';
import { Phone, MessageCircle, ShoppingBag } from 'lucide-react';

export default function MobileStickyBar({ onOpenContact }) {
  const phone = '0908816814';
  const zaloUrl = `https://zalo.me/${phone}`;

  return (
    <aside
      aria-label="Thanh liên hệ nhanh di động"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#07131D]/95 backdrop-blur-lg border-t border-white/10 px-4 py-2.5 shadow-2xl shadow-black"
      style={{ paddingBottom: 'max(0.625rem, env(safe-area-inset-bottom))' }}
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Nút Gọi điện */}
        <a
          href={`tel:${phone}`}
          className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 px-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[#FAF8F5] text-xs font-medium transition-colors"
        >
          <Phone className="w-4 h-4 text-[#2DD4BF]" />
          <span>Gọi tiệm</span>
        </a>

        {/* Nút Zalo */}
        <a
          href={zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 px-2 rounded-lg bg-[#1E7582]/20 hover:bg-[#1E7582]/30 border border-[#2DD4BF]/30 text-[#2DD4BF] text-xs font-medium transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-[#2DD4BF]" />
          <span>Nhắn Zalo</span>
        </a>

        {/* Nút Hỏi mẻ cá hôm nay */}
        <button
          type="button"
          onClick={onOpenContact}
          className="flex-[1.4] flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-lg bg-[#FAF8F5] hover:bg-[#2DD4BF] text-[#07131D] text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Hỏi mẻ cá</span>
        </button>
      </div>
    </aside>
  );
}
