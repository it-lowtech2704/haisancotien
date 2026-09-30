import React from 'react';
import { ArrowUp, MapPin, Phone, MessageCircle, Clock, ExternalLink } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const phone = "0908816814";
  const zaloUrl = `https://zalo.me/${phone}`;
  const facebookUrl = "https://www.facebook.com/tran.tien.52643821";

  return (
    <footer id="lien-he" className="bg-[#050E17] text-[#EAE4DC] border-t border-white/5 pt-14 sm:pt-20 pb-28 sm:pb-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 pb-12 sm:pb-16 border-b border-white/10">
          {/* Brand & Mission (Col 1-5) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl text-[#FAF8F5] font-normal mb-3">
                Hải sản Cô Tiến
              </h3>
              <p className="font-serif italic text-base text-[#2DD4BF] font-light mb-6">
                “Vị tươi đảo Phú Quý — Bán tại tiệm Phan Thiết.”
              </p>
              <p className="font-body text-sm text-[#EAE4DC]/70 font-light leading-relaxed max-w-sm">
                Cửa hàng Cô Tiến chuyên đón mua trực tiếp các mẻ cá, mẻ mực tươi ngon từ thuyền câu đảo Phú Quý và mang vào Phan Thiết bày bán, mang lại nguồn hải sản thật chất lượng và an tâm cho bữa cơm gia đình bạn.
              </p>
            </div>

            <div className="mt-8 text-xs tracking-widest text-[#EAE4DC]/40 uppercase font-light">
              Thu mua tại cảng Phú Quý • Cửa hàng tại Phan Thiết
            </div>
          </div>

          {/* Quick Navigation (Col 6-8) */}
          <div className="md:col-span-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#2DD4BF] block mb-6 font-light">
              ĐIỀU HƯỚNG
            </span>
            <ul className="space-y-4 text-sm font-light">
              <li>
                <a href="#hai-san" className="text-[#EAE4DC]/80 hover:text-white transition-colors link-editorial-underline">
                  Mặt hàng hôm nay
                </a>
              </li>
              <li>
                <a href="#danh-sach-san-vat" className="text-[#EAE4DC]/80 hover:text-white transition-colors link-editorial-underline">
                  Bảng mặt hàng hải sản
                </a>
              </li>
              <li>
                <a href="#phu-quy" className="text-[#EAE4DC]/80 hover:text-white transition-colors link-editorial-underline">
                  Vùng biển Phú Quý
                </a>
              </li>
              <li>
                <a href="#cau-chuyen" className="text-[#EAE4DC]/80 hover:text-white transition-colors link-editorial-underline">
                  Chuyện tiệm Cô Tiến
                </a>
              </li>
              <li className="pt-1">
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="text-[#2DD4BF] hover:text-white transition-colors cursor-pointer text-left font-normal flex items-center space-x-1"
                >
                  <span>Hỏi mẻ cá hôm nay</span>
                  <span>→</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details (Col 9-12) */}
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#2DD4BF] block mb-6 font-light">
              KẾT NỐI TRỰC TIẾP
            </span>
            <div className="space-y-4 text-sm font-light text-[#EAE4DC]/80">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#2DD4BF] mt-1 shrink-0 stroke-[1.5]" />
                <div>
                  <p className="text-white font-normal">Cửa hàng Hải sản Cô Tiến</p>
                  <p className="text-xs text-[#EAE4DC]/60">Phan Thiết, Tỉnh Bình Thuận</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#2DD4BF] mt-1 shrink-0 stroke-[1.5]" />
                <div>
                  <p className="text-white font-normal">Nguồn hàng thu mua</p>
                  <p className="text-xs text-[#EAE4DC]/60">Bến cảng Huyện đảo Phú Quý, Tỉnh Bình Thuận</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3 pt-2">
                <Phone className="w-4 h-4 text-[#2DD4BF] shrink-0 stroke-[1.5]" />
                <a href={`tel:${phone}`} className="hover:text-[#2DD4BF] transition-colors text-white font-normal">
                  Hotline: 0908 816 814
                </a>
              </div>

              {/* Zalo */}
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-[#2DD4BF] shrink-0 stroke-[1.5]" />
                <a href={zaloUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#2DD4BF] transition-colors text-white font-normal flex items-center space-x-1">
                  <span>Zalo Cô Tiến</span>
                  <ExternalLink className="w-3 h-3 text-[#2DD4BF]" />
                </a>
              </div>

              {/* Facebook Fanpage */}
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-[#2DD4BF] fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#2DD4BF] transition-colors text-white font-normal flex items-center space-x-1">
                  <span>Facebook: Hải sản Cô Tiến</span>
                  <ExternalLink className="w-3 h-3 text-[#2DD4BF]" />
                </a>
              </div>

              <div className="flex items-center space-x-3 pt-1">
                <Clock className="w-4 h-4 text-[#2DD4BF] shrink-0 stroke-[1.5]" />
                <span className="text-xs text-[#EAE4DC]/60">Mở cửa đón khách & trực máy: 06:00 – 21:00 hàng ngày</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EAE4DC]/40 font-light gap-4">
          <p>© {new Date().getFullYear()} Cửa hàng Hải sản Cô Tiến — Hải sản tươi thu mua từ Đảo Phú Quý bán tại Phan Thiết.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 text-[#EAE4DC]/60 hover:text-[#2DD4BF] transition-colors uppercase tracking-widest text-[11px]"
          >
            <span>Lên đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
