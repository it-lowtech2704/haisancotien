import { X, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) {
  if (!isOpen) return null;

  const totalAmount = items.reduce(
    (sum, item) => sum + item.priceRaw * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#040A10]/75 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Slide-over Drawer */}
      <div className="relative z-10 w-full max-w-md bg-[#07131D] text-[#FAF8F5] border-l border-white/10 h-full flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#2DD4BF] block font-light">
              ĐƠN HÀNG HẢI SẢN
            </span>
            <h3 className="font-display text-2xl font-normal text-white">
              Giỏ hàng ({items.reduce((c, i) => c + i.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Đóng giỏ hàng"
            className="p-2 text-[#EAE4DC]/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <p className="font-serif italic text-lg text-[#EAE4DC]/50 mb-3">
                Chưa có hải sản nào trong giỏ.
              </p>
              <p className="text-xs text-[#EAE4DC]/40 font-light max-w-xs">
                Hãy khám phá các sản vật tươi ngon từ biển đảo Phú Quý và chọn món bạn yêu thích.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex space-x-4 pb-6 border-b border-white/10"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover bg-[#0C1E2C] shrink-0"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-display text-base font-normal text-white">
                        {item.name}
                      </h4>
                      <span className="font-price text-xs text-[#2DD4BF]">
                        {item.price}
                      </span>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-white/40 hover:text-red-400 p-1 transition-colors"
                      title="Xoá món"
                    >
                      <Trash2 className="w-4 h-4 stroke-[1.5]" />
                    </button>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center justify-between mt-2 pt-2">
                    <div className="flex items-center border border-white/20">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="px-2.5 py-1 text-white/70 hover:text-white hover:bg-white/10 text-xs"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 py-1 text-xs text-white font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="px-2.5 py-1 text-white/70 hover:text-white hover:bg-white/10 text-xs"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="font-price text-xs text-[#FAF8F5]">
                      {(item.priceRaw * item.quantity).toLocaleString('vi-VN')}₫
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Section */}
        {items.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-[#050E17]">
            <div className="flex justify-between items-baseline mb-2 text-xs text-[#EAE4DC]/60 uppercase tracking-widest">
              <span>Tạm tính</span>
              <span className="font-price text-xl text-[#2DD4BF] tracking-normal">
                {totalAmount.toLocaleString('vi-VN')}₫
              </span>
            </div>
            <p className="text-[11px] text-[#EAE4DC]/40 mb-5 font-light">
              * Tiệm có nhận giao hàng tại Phan Thiết hoặc đóng thùng xốp gửi đi theo yêu cầu.
            </p>

            <button
              onClick={() => {
                onClose();
                onProceedToCheckout();
              }}
              className="w-full py-4 bg-[#2DD4BF] text-[#07131D] hover:bg-white text-xs uppercase tracking-[0.22em] font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <span>Xác nhận đặt hải sản</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:0908689314"
              className="mt-3 block text-center text-xs text-[#EAE4DC]/70 hover:text-[#2DD4BF] py-1 transition-colors"
            >
              Hoặc gọi ngay: <strong className="font-medium">0908 689 314</strong>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
