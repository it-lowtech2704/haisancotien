import { useState } from 'react';
import { ArrowUpRight, Waves, Sparkles } from 'lucide-react';

const catalogItems = [
  {
    id: 'muc-la',
    category: 'Mực & Bạch tuộc',
    name: 'Mực lá Phú Quý',
    sub: 'Mực câu đêm bến đảo',
    season: 'Đang vào mùa',
    seasonType: 'in-season',
    harvest: 'Câu tay ban đêm',
    notes: 'Thịt dày giòn, độ ngọt đậm đà, thích hợp hấp gừng xả, nướng muối ớt',
    price: '340.000₫ – 380.000₫ / kg',
  },
  {
    id: 'muc-ong',
    category: 'Mực & Bạch tuộc',
    name: 'Mực ống nhấp nháy',
    sub: 'Mực tươi da óng ánh',
    season: 'Có hàng hôm nay',
    seasonType: 'available',
    harvest: 'Cập bến rạng sáng',
    notes: 'Thân trong suốt, giòn sần sật, ăn sống sashimi hoặc xào chua ngọt',
    price: '290.000₫ – 330.000₫ / kg',
  },
  {
    id: 'muc-mot-nang',
    category: 'Đặc sản phơi nắng',
    name: 'Mực một nắng chuẩn đảo',
    sub: 'Phơi duy nhất một nắng giòn',
    season: 'Sản vật quanh năm',
    seasonType: 'available',
    harvest: 'Phơi phên tre ven biển',
    notes: 'Bên ngoài ráo mịn, bên trong mọng nước dẻo thơm, nướng than hoa',
    price: '480.000₫ / túi 500g',
  },
  {
    id: 'ca-mu-do',
    category: 'Cá biển tự nhiên',
    name: 'Cá mú đỏ rạn san hô',
    sub: 'Cá câu rạn đá tự nhiên',
    season: 'Theo con nước',
    seasonType: 'tide',
    harvest: 'Câu rạn Hòn Tranh',
    notes: 'Thịt trắng phau, dai ngọt tự nhiên, ngon nhất khi hấp xì dầu hoặc nấu canh chua',
    price: '450.000₫ – 520.000₫ / kg',
  },
  {
    id: 'ca-thu',
    category: 'Cá biển tự nhiên',
    name: 'Cá thu tươi / Cá thu 1 nắng',
    sub: 'Cá thu câu tay thân tròn',
    season: 'Có hàng hôm nay',
    seasonType: 'available',
    harvest: 'Thuyền câu trong ngày',
    notes: 'Cắt khoanh nạc thịt béo ngậy, chiên nước mắm tỏi ớt hoặc sốt cà chua',
    price: '280.000₫ – 320.000₫ / kg',
  },
  {
    id: 'ca-bo-hom',
    category: 'Cá biển tự nhiên',
    name: 'Cá bò hòm Phú Quý',
    sub: '“Gà biển” trứ danh',
    season: 'Hiếm • Theo mẻ câu',
    seasonType: 'rare',
    harvest: 'Rạn đá ngầm nước trong',
    notes: 'Thịt trắng từng thớ như thịt gà, vị ngọt béo ngậy khi nướng mọi chấm muối tiêu chanh',
    price: '380.000₫ – 420.000₫ / kg',
  },
  {
    id: 'cua-huynh-de',
    category: 'Tôm & Cua đảo',
    name: 'Cua Huỳnh Đế đảo Phú Quý',
    sub: 'Đặc sản trứ danh đảo Phú Quý',
    season: 'Chính vụ tháng 12 - tháng 4',
    seasonType: 'in-season',
    harvest: 'Lặn bẫy rạn nước sâu',
    notes: 'Thịt chắc thơm, gạch béo bùi đậm đà, rất ngon khi hấp sả gừng hoặc nấu cháo nóng',
    price: '750.000₫ – 950.000₫ / kg',
  },
  {
    id: 'tom-hum-do',
    category: 'Tôm & Cua đảo',
    name: 'Tôm hùm đỏ thiên nhiên',
    sub: 'Tôm rạn đá đáy sâu',
    season: 'Có hàng theo chuyến',
    seasonType: 'available',
    harvest: 'Lặn biển đêm',
    notes: 'Vỏ mỏng, thịt săn chắc mọng ngọt nước, nướng bơ tỏi hoặc hấp bia',
    price: '620.000₫ – 780.000₫ / kg',
  },
  {
    id: 'nhum-bien',
    category: 'Đặc sản phơi nắng',
    name: 'Nhum biển / Cầu gai Phú Quý',
    sub: 'Đặc sản bổ dưỡng vùng đảo',
    season: 'Đang vào mùa',
    seasonType: 'in-season',
    harvest: 'Bắt bãi rạn triều rút',
    notes: 'Trứng nhum vàng ươm béo bùi, nướng mỡ hành trứng cút hoặc nấu cháo ấm bụng',
    price: '28.000₫ – 35.000₫ / con',
  },
];

export default function SeafoodCatalog({ onSelectItem }) {
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  const categories = [
    'Tất cả',
    'Mực & Bạch tuộc',
    'Cá biển tự nhiên',
    'Tôm & Cua đảo',
    'Đặc sản phơi nắng',
  ];

  const filteredItems =
    activeCategory === 'Tất cả'
      ? catalogItems
      : catalogItems.filter((item) => item.category === activeCategory);

  const getBadgeStyle = (type) => {
    switch (type) {
      case 'in-season':
        return 'text-[#2DD4BF] border-[#2DD4BF]/30 bg-[#1E7582]/15';
      case 'available':
        return 'text-[#EAE4DC] border-white/20 bg-white/5';
      case 'rare':
        return 'text-amber-300 border-amber-400/30 bg-amber-400/10';
      case 'tide':
      default:
        return 'text-[#87B4BD] border-[#87B4BD]/30 bg-[#87B4BD]/10';
    }
  };

  return (
    <section id="danh-sach-san-vat" className="bg-[#050E17] text-[#FAF8F5] py-16 sm:py-28 lg:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-16 lg:mb-20 gap-6 sm:gap-8">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.28em] text-[#2DD4BF] font-light mb-2.5 sm:mb-3">
              <Waves className="w-3.5 h-3.5 stroke-[1.5]" />
              <span>CÁC MẶT HÀNG TẠI CỬA HÀNG</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
              Bảng mặt hàng hải sản của tiệm
            </h2>
            <p className="text-sm sm:text-base text-[#EAE4DC]/70 font-light mt-2.5 sm:mt-3 max-w-xl leading-relaxed">
              Hải sản tại tiệm phụ thuộc vào từng chuyến ghe cập bến đảo Phú Quý và mang vào Phan Thiết mỗi ngày. Cô Tiến chọn lọc những mẻ cá, mẻ mực tươi ngon từ các thuyền câu sớm để mang vào phục vụ bà con với giá cả phải chăng, rõ ràng nguồn gốc.
            </p>
          </div>

          <div className="text-xs text-[#EAE4DC]/50 font-light tracking-wide lg:text-right">
            <span>Cập nhật theo từng chuyến hàng vào Phan Thiết</span>
            <span className="block text-[#2DD4BF] font-normal mt-0.5 sm:mt-1">
              Ghé tiệm hoặc nhắn Zalo kiểm tra mẻ cá hôm nay
            </span>
          </div>
        </div>

        {/* Filter Tabs with mobile edge-to-edge touch horizontal scroll */}
        <div className="flex items-center space-x-2 sm:space-x-4 overflow-x-auto pb-3 mb-8 sm:mb-12 border-b border-white/10 scrollbar-none -mx-5 px-5 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs uppercase tracking-[0.18em] px-3.5 sm:px-4 py-2 sm:py-2.5 transition-all duration-200 whitespace-nowrap focus:outline-none cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#2DD4BF] text-[#07131D] font-semibold shadow-md'
                  : 'text-[#EAE4DC]/70 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Product List / Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="group cursor-pointer bg-[#07131D] border border-white/10 hover:border-[#2DD4BF]/50 p-5 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 relative"
            >
              <div>
                {/* Status and Category */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#EAE4DC]/50 font-light">
                    {item.category}
                  </span>
                  <span
                    className={`text-[10px] uppercase tracking-wider px-2 py-0.5 border ${getBadgeStyle(
                      item.seasonType
                    )}`}
                  >
                    {item.season}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-display text-lg sm:text-2xl font-normal text-white group-hover:text-[#2DD4BF] transition-colors mb-0.5 sm:mb-1">
                  {item.name}
                </h3>
                <p className="font-serif italic text-xs sm:text-sm text-[#2DD4BF]/80 mb-3 sm:mb-4">
                  {item.sub}
                </p>

                {/* Harvesting & Preparation */}
                <p className="font-body text-xs sm:text-sm text-[#EAE4DC]/70 font-light leading-relaxed mb-5 sm:mb-6">
                  {item.notes}
                </p>
              </div>

              {/* Price & Action */}
              <div className="pt-3.5 sm:pt-4 border-t border-white/10 flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#EAE4DC]/40 block">
                    Tham khảo giá
                  </span>
                  <span className="font-price text-sm sm:text-base text-[#2DD4BF] block mt-0.5">
                    {item.price}
                  </span>
                </div>

                <div className="inline-flex items-center space-x-1 text-xs text-[#2DD4BF] font-medium group-hover:translate-x-1 transition-transform">
                  <span>Hỏi món này</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Catalog Footer Note */}
        <div className="mt-8 sm:mt-14 p-5 sm:p-6 bg-[#0C1E2C]/50 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EAE4DC]/70 font-light">
          <div className="flex items-start sm:items-center space-x-3 text-left">
            <Sparkles className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5 sm:mt-0" />
            <span>
              Cần tìm các loại cá hiếm hoặc đặt hải sản cho tiệc gia đình, đám tiệc? Bạn hãy nhắn trước để Cô Tiến dặn bà con ngư dân ngoài đảo Phú Quý giữ riêng những con tươi ngon nhất mang vào Phan Thiết.
            </span>
          </div>
          <button
            onClick={() => onSelectItem(null)}
            className="w-full sm:w-auto shrink-0 px-5 py-2.5 bg-transparent border border-[#2DD4BF] text-[#2DD4BF] hover:bg-[#2DD4BF] hover:text-[#07131D] uppercase tracking-widest text-[11px] font-medium transition-colors text-center cursor-pointer"
          >
            Nhắn tin yêu cầu
          </button>
        </div>
      </div>
    </section>
  );
}
