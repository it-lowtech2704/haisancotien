import React from 'react';
import { X, Phone, MessageCircle, ExternalLink, MapPin, Clock, ShieldCheck } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, selectedProduct = null }) {
  if (!isOpen) return null;

  const phone = "0908816814";
  const zaloUrl = `https://zalo.me/${phone}`;
  const facebookUrl = "https://www.facebook.com/tran.tien.52643821";

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#040A10]/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container: Bottom sheet on mobile, centered modal on desktop */}
      <div className="relative z-10 w-full max-w-lg bg-[#07131D] border-t sm:border border-white/15 p-5 sm:p-10 shadow-2xl rounded-t-2xl sm:rounded-none max-h-[92dvh] overflow-y-auto text-[#FAF8F5] animate-in fade-in slide-in-from-bottom-6 sm:zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Đóng"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 text-[#FAF8F5]/80 hover:text-white bg-white/5 rounded-full sm:rounded-none transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#2DD4BF] block font-light mb-1">
            KẾT NỐI TRỰC TIẾP
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-normal text-white">
            Liên hệ Hải sản Cô Tiến
          </h3>
          <p className="text-xs text-[#EAE4DC]/70 font-light mt-1.5 leading-relaxed">
            {selectedProduct ? (
              <>
                Bạn đang quan tâm đến <strong className="text-[#2DD4BF] font-normal">{selectedProduct.name}</strong>. Hãy liên hệ để Cô Tiến kiểm tra mẻ vừa chuyển từ bến đảo Phú Quý vào tiệm Phan Thiết hôm nay nhé.
              </>
            ) : (
              'Hải sản tại tiệm phụ thuộc từng chuyến ghe câu cập bến đảo Phú Quý mang vào Phan Thiết. Mời bạn liên hệ để Cô Tiến báo mẻ hàng tươi ngon nhất vừa về tiệm hôm nay.'
            )}
          </p>
        </div>

        {/* Direct Contact Channels */}
        <div className="space-y-3.5 mb-8">
          {/* 1. Gọi điện thoại trực tiếp */}
          <a
            href={`tel:${phone}`}
            className="group flex items-center justify-between p-4 bg-[#0C1E2C] border border-white/10 hover:border-[#2DD4BF] transition-all duration-300"
          >
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-full bg-[#1E7582]/30 flex items-center justify-center text-[#2DD4BF] group-hover:bg-[#2DD4BF] group-hover:text-[#07131D] transition-colors">
                <Phone className="w-4 h-4 stroke-[1.8]" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#EAE4DC]/60 block font-light">
                  Gọi điện thoại trực tiếp
                </span>
                <span className="font-display text-lg text-white font-medium group-hover:text-[#2DD4BF] transition-colors">
                  0908 816 814
                </span>
              </div>
            </div>
            <span className="text-xs text-[#2DD4BF] font-light group-hover:translate-x-1 transition-transform">
              Gọi ngay →
            </span>
          </a>

          {/* 2. Nhắn tin Zalo */}
          <a
            href={zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 bg-[#0C1E2C] border border-white/10 hover:border-[#2DD4BF] transition-all duration-300"
          >
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-full bg-[#1E7582]/30 flex items-center justify-center text-[#2DD4BF] group-hover:bg-[#2DD4BF] group-hover:text-[#07131D] transition-colors">
                <MessageCircle className="w-4 h-4 stroke-[1.8]" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#EAE4DC]/60 block font-light">
                  Chat tư vấn qua Zalo
                </span>
                <span className="text-sm text-white font-medium group-hover:text-[#2DD4BF] transition-colors">
                  Zalo Cô Tiến (0908 816 814)
                </span>
              </div>
            </div>
            <span className="text-xs text-[#2DD4BF] font-light group-hover:translate-x-1 transition-transform flex items-center space-x-1">
              <span>Mở Zalo</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          </a>

          {/* 3. Facebook Fanpage / Messenger */}
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 bg-[#0C1E2C] border border-white/10 hover:border-[#2DD4BF] transition-all duration-300"
          >
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-full bg-[#1E7582]/30 flex items-center justify-center text-[#2DD4BF] group-hover:bg-[#2DD4BF] group-hover:text-[#07131D] transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#EAE4DC]/60 block font-light">
                  Nhắn tin Facebook Fanpage
                </span>
                <span className="text-sm text-white font-medium group-hover:text-[#2DD4BF] transition-colors">
                  Hải sản Cô Tiến — Phan Thiết
                </span>
              </div>
            </div>
            <span className="text-xs text-[#2DD4BF] font-light group-hover:translate-x-1 transition-transform flex items-center space-x-1">
              <span>Nhắn tin</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          </a>
        </div>

        {/* Reassurance notes */}
        <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-[#EAE4DC]/60 font-light">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2DD4BF] shrink-0" />
            <span>Hải sản tự nhiên tươi sạch, không hóa chất ngâm ướp</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-3.5 h-3.5 text-[#2DD4BF] shrink-0" />
            <span>Thời gian mở cửa đón khách & trực máy: 06:00 – 21:00 hàng ngày</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-3.5 h-3.5 text-[#2DD4BF] shrink-0" />
            <span>Cửa hàng tại Phan Thiết • Nguồn hàng thu mua tận bến đảo Phú Quý</span>
          </div>
        </div>
      </div>
    </div>
  );
}
