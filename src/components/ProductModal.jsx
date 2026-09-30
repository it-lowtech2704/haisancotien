import React from 'react';
import { X, Check, ShieldCheck, MapPin, Anchor, Phone, MessageCircle } from 'lucide-react';

export default function ProductModal({ product, onClose, onContact }) {
  if (!product) return null;

  const phone = "0908816814";

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#040A10]/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container: Bottom sheet on mobile, centered modal on desktop */}
      <div className="relative z-10 w-full max-w-4xl bg-[#07131D] border-t sm:border border-white/15 overflow-hidden shadow-2xl rounded-t-2xl sm:rounded-none max-h-[92dvh] sm:max-h-[90vh] flex flex-col animate-in fade-in slide-in-from-bottom-6 sm:zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Đóng"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 text-[#FAF8F5]/90 hover:text-white bg-black/60 rounded-full sm:rounded-none backdrop-blur-sm transition-colors focus:outline-none cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 overflow-y-auto">
          {/* Product Image Column */}
          <div className="md:col-span-6 relative bg-[#0C1E2C] h-[220px] sm:h-auto min-h-[220px] sm:min-h-[320px] md:min-h-[460px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.25em] text-white bg-[#07131D]/80 px-3 py-1 backdrop-blur-xs">
              {product.category}
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/70 to-transparent p-4 text-xs text-white/80">
              <span className="text-[#2DD4BF] font-medium block uppercase tracking-wider text-[10px] mb-1">
                Phương thức đánh bắt
              </span>
              <span>{product.harvest || 'Đánh bắt tự nhiên trong ngày quanh đảo'}</span>
            </div>
          </div>

          {/* Product Info Column */}
          <div className="md:col-span-6 p-6 sm:p-8 md:p-10 flex flex-col justify-between text-[#FAF8F5]">
            <div>
              <div className="flex items-center space-x-2 text-[11px] uppercase tracking-widest text-[#2DD4BF] mb-2 font-light">
                <MapPin className="w-3.5 h-3.5 stroke-[1.5]" />
                <span>{product.origin || 'Vùng biển Phú Quý'}</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-normal mb-2 text-white">
                {product.name}
              </h3>

              <p className="font-serif italic text-sm sm:text-base text-[#2DD4BF]/90 mb-4 font-light">
                {product.tagline}
              </p>

              <p className="font-body text-sm text-[#EAE4DC]/80 font-light leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Quality & Packing Specs */}
              <div className="space-y-2.5 py-4 border-t border-b border-white/10 mb-6 text-xs text-[#EAE4DC]/90 font-light">
                <div className="flex items-center space-x-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#2DD4BF] shrink-0 stroke-[1.5]" />
                  <span>100% tự nhiên, không ngâm chất tạo giòn hay bảo quản</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Anchor className="w-4 h-4 text-[#2DD4BF] shrink-0 stroke-[1.5]" />
                  <span>Ướp đá lạnh chuyển về tiệm Phan Thiết ngay khi ghe cập bến</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#2DD4BF] shrink-0 stroke-[1.5]" />
                  <span>{product.specs || 'Bảo quản tươi sạch, mang về tiệm trong ngày'}</span>
                </div>
              </div>
            </div>

            {/* Price and Direct Contact CTAs */}
            <div>
              <div className="mb-5 p-3.5 bg-[#0C1E2C] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#EAE4DC]/50 block">
                    {product.price?.includes('₫') ? 'Giá tham khảo' : 'Tình trạng giá'}
                  </span>
                  <span className="font-price text-xl sm:text-2xl text-[#2DD4BF] font-medium mt-0.5 block">
                    {product.price}
                  </span>
                </div>
                {product.seasonNote && (
                  <span className="text-xs text-[#EAE4DC]/60 font-light sm:text-right max-w-[220px]">
                    {product.seasonNote}
                  </span>
                )}
              </div>

              <div className="flex flex-col sm:flex-row space-y-2.5 sm:space-y-0 sm:space-x-3">
                <button
                  onClick={() => {
                    onClose();
                    onContact(product);
                  }}
                  className="flex-1 py-3.5 bg-[#2DD4BF] text-[#07131D] hover:bg-white text-xs uppercase tracking-[0.2em] font-medium transition-colors text-center flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4 stroke-[2]" />
                  <span>Hỏi giá mẻ này</span>
                </button>

                <a
                  href={`tel:${phone}`}
                  className="px-5 py-3.5 border border-white/20 hover:border-[#2DD4BF] hover:text-[#2DD4BF] text-xs uppercase tracking-widest text-[#FAF8F5] transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>0908 816 814</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
