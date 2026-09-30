import { useState } from 'react';
import { X, CheckCircle, Phone, Truck } from 'lucide-react';

export default function OrderModal({ isOpen, onClose, cartItems = [] }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    note: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.phone) return;
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setFormData({ name: '', phone: '', address: '', note: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#040A10]/85 backdrop-blur-md transition-opacity duration-300"
        onClick={resetAndClose}
      />

      {/* Modal Box */}
      <div className="relative z-10 w-full max-w-lg bg-[#07131D] border border-white/15 p-6 sm:p-10 shadow-2xl text-[#FAF8F5] animate-in fade-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          aria-label="Đóng"
          className="absolute top-4 right-4 p-2 text-[#FAF8F5]/70 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#1E7582]/30 text-[#2DD4BF] flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 stroke-[1.5]" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-white font-normal mb-3">
              Cảm ơn bạn đã tin chọn Cô Tiến
            </h3>
            <p className="font-body text-sm text-[#EAE4DC]/80 font-light leading-relaxed max-w-sm mx-auto mb-6">
              Cô Tiến đã nhận thông tin và sẽ liên hệ lại qua số <strong>{formData.phone}</strong> để xác nhận mẻ cá tươi ngon hôm nay và thời gian nhận hàng.
            </p>
            <div className="bg-[#0C1E2C] p-4 text-xs text-[#EAE4DC]/70 mb-8 border border-white/10 text-left space-y-1.5">
              <div className="flex items-center space-x-2 text-[#2DD4BF]">
                <Truck className="w-4 h-4" />
                <span className="font-medium">Cách thức nhận hàng:</span>
              </div>
              <p>• Nhận trực tiếp tại tiệm ở Phan Thiết hoặc giao nhanh nội thành Phan Thiết.</p>
              <p>• Đóng thùng xốp ướp đá lạnh gửi xe cho khách quen ở các tỉnh lân cận.</p>
            </div>
            <button
              onClick={resetAndClose}
              className="px-8 py-3 bg-[#2DD4BF] text-[#07131D] text-xs uppercase tracking-widest font-medium hover:bg-white transition-colors"
            >
              Hoàn tất
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#2DD4BF] block font-light mb-1">
                HẢI SẢN PHÚ QUÝ TẠI PHAN THIẾT
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-normal text-white">
                Đặt mua hải sản
              </h3>
              <p className="text-xs text-[#EAE4DC]/60 font-light mt-1">
                Chọn món tươi ngon, Cô Tiến chuẩn bị chu đáo gửi đến mâm cơm gia đình bạn.
              </p>
            </div>

            {cartItems.length > 0 && (
              <div className="mb-6 p-3.5 bg-[#0C1E2C] border border-white/10 text-xs">
                <span className="text-[#2DD4BF] uppercase tracking-wider block text-[10px] mb-1">
                  Đơn hàng hiện tại:
                </span>
                <div className="space-y-1 text-white/90">
                  {cartItems.map((i) => (
                    <div key={i.id} className="flex justify-between">
                      <span>• {i.name} (x{i.quantity})</span>
                      <span className="font-price text-[#EAE4DC]/85">
                        {(i.priceRaw * i.quantity).toLocaleString('vi-VN')}₫
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#EAE4DC]/70 mb-1.5 font-light">
                  Họ và tên
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Văn An"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#0C1E2C] border border-white/15 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#2DD4BF] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-[#EAE4DC]/70 mb-1.5 font-light">
                  Số điện thoại <span className="text-[#2DD4BF]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ví dụ: 0908 xxx xxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#0C1E2C] border border-white/15 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#2DD4BF] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-[#EAE4DC]/70 mb-1.5 font-light">
                  Địa chỉ giao nhận
                </label>
                <input
                  type="text"
                  placeholder="Số nhà, tên đường, quận/huyện, tỉnh thành..."
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-[#0C1E2C] border border-white/15 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#2DD4BF] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-[#EAE4DC]/70 mb-1.5 font-light">
                  Yêu cầu sơ chế hoặc ghi chú
                </label>
                <textarea
                  rows="2"
                  placeholder="Ví dụ: Làm sạch ruột mực, cá cắt khúc hay để nguyên con..."
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full bg-[#0C1E2C] border border-white/15 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#2DD4BF] focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#2DD4BF] text-[#07131D] hover:bg-white text-xs uppercase tracking-[0.22em] font-medium transition-colors"
                >
                  Gửi yêu cầu đặt hàng
                </button>
              </div>
            </form>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#EAE4DC]/60 font-light">
              <span>Hỗ trợ nhanh qua Zalo:</span>
              <a
                href="https://zalo.me"
                target="_blank"
                rel="noreferrer"
                className="text-[#2DD4BF] hover:underline flex items-center space-x-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>0908 689 314</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
