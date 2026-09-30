import React from 'react';

const seafoodProducts = [
  {
    id: 'muc',
    category: 'MỰC',
    name: 'Mực lá & Mực ống Phú Quý',
    vietnameseName: 'Mực tươi Phú Quý',
    tagline: 'Thịt dày cơm, dai giòn ngọt lịm',
    description: 'Được câu tay trong đêm tại vùng biển đảo Phú Quý. Thịt mực dày, giòn ngọt tự nhiên và giữ nguyên độ tươi của mẻ câu sớm.',
    specs: 'Làm sạch, đóng gói bảo quản lạnh đem vào Phan Thiết trong ngày',
    price: 'Thời giá theo mùa',
    seasonNote: 'Thay đổi theo từng con nước & chuyến ghe hôm nay',
    unit: '1 kg',
    image: '/images/phu_quy_squid.jpg',
    origin: 'Đảo Phú Quý, Bình Thuận',
    harvest: 'Câu đêm thủ công',
  },
  {
    id: 'ca',
    category: 'CÁ',
    name: 'Cá mú đỏ rạn Phú Quý',
    vietnameseName: 'Cá mú đỏ tự nhiên',
    tagline: 'Cá rạn biển sâu, thịt thơm ngọt thanh',
    description: 'Loài cá rạn sống tự nhiên quanh đảo Phú Quý. Thịt cá trắng phau, săn chắc từng thớ và thơm ngọt khi hấp xì dầu hoặc nấu canh chua.',
    specs: 'Làm sạch, ướp đá lạnh chuyển vào tiệm Phan Thiết',
    price: 'Thời giá theo mùa',
    seasonNote: 'Phụ thuộc vào kích cỡ cá & mẻ câu rạn hôm nay',
    unit: '1 kg',
    image: '/images/phu_quy_fish.jpg',
    origin: 'Rạn đá đảo Phú Quý',
    harvest: 'Câu dây rạn truyền thống',
  },
  {
    id: 'tom',
    category: 'TÔM',
    name: 'Tôm hùm đỏ & Tôm biển đảo',
    vietnameseName: 'Tôm hùm đỏ Phú Quý',
    tagline: 'Thịt chắc giòn, gạch thơm béo ngậy',
    description: 'Tôm sinh trưởng tự nhiên nơi rạn đá biển sâu đảo Phú Quý. Thớ thịt chắc ngọt, vỏ mỏng và phần gạch đỏ au giàu dinh dưỡng.',
    specs: 'Giao tươi sống hoặc ướp đá lạnh chuyển về tiệm',
    price: 'Thời giá theo mùa',
    seasonNote: 'Phụ thuộc vào mùa lặn & kích cỡ tôm',
    unit: '1 kg',
    image: '/images/phu_quy_shrimp.jpg',
    origin: 'Vùng biển đảo Phú Quý',
    harvest: 'Lặn bắt thủ công',
  },
];

export default function SeafoodShowcase({ onSelectProduct }) {
  const [squid, fish, shrimp] = seafoodProducts;

  return (
    <section id="hai-san" className="bg-[#07131D] text-[#EAE4DC] py-16 sm:py-24 lg:py-44">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-20 lg:mb-28">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#2DD4BF] font-light mb-3 sm:mb-4">
            <span className="w-4 h-px bg-[#2DD4BF]" />
            <span>HẢI SẢN BÀY BÁN TẠI CỬA HÀNG</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#FAF8F5] font-normal leading-[1.1] mb-3 sm:mb-4">
            Mặt hàng hôm nay
          </h2>
          <p className="font-body text-sm sm:text-lg text-[#EAE4DC]/70 font-light leading-relaxed">
            Những mẻ cá, mẻ mực tươi ngon được Cô Tiến đón mua trực tiếp từ các chuyến thuyền câu đảo Phú Quý và mang về Phan Thiết bày bán mỗi ngày. Hải sản tự nhiên giá cả thay đổi theo con nước và mùa vụ — mời quý khách liên hệ để nhận báo giá mẻ tươi ngon nhất.
          </p>
        </div>

        {/* Asymmetrical Editorial Product Layout */}
        <div className="space-y-14 sm:space-y-24 lg:space-y-36">
          {/* Row 1: Large Squid (Left, 7 cols) & Medium Fish (Right, 5 cols, offset) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* ITEM 1: MỰC - Large on the left */}
            <div
              onClick={() => onSelectProduct(squid)}
              className="lg:col-span-7 group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-[#0C1E2C] aspect-[4/3] sm:aspect-[16/11] mb-4 sm:mb-8">
                <img
                  src={squid.image}
                  alt={squid.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center scale-100 group-hover:scale-[1.035] transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#FAF8F5]/90 bg-[#07131D]/80 px-2.5 py-1 sm:px-3 sm:py-1.5 backdrop-blur-sm border border-white/10">
                  {squid.category}
                </div>
              </div>

              <div className="max-w-xl transition-transform duration-500 group-hover:-translate-y-1">
                <h3 className="font-display text-2xl sm:text-3xl text-[#FAF8F5] font-normal mb-2 sm:mb-3">
                  {squid.name}
                </h3>
                <p className="font-body text-sm sm:text-base text-[#EAE4DC]/75 font-light leading-relaxed mb-3 sm:mb-4">
                  {squid.description}
                </p>
                <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-[#2DD4BF] font-medium tracking-wide mb-3 sm:mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                  <span>Thời giá theo mùa</span>
                  <span className="text-[#EAE4DC]/50 font-light text-xs">• Báo giá theo mẻ hôm nay</span>
                </div>
                <div className="inline-flex w-full sm:w-auto items-center justify-center sm:justify-start text-xs uppercase tracking-[0.2em] text-[#FAF8F5] sm:text-[#FAF8F5]/80 group-hover:text-[#2DD4BF] bg-white/5 sm:bg-transparent py-2.5 sm:py-1 px-4 sm:px-0 rounded sm:rounded-none border border-white/10 sm:border-0 transition-colors relative">
                  <span>Xem mẻ hàng & hỏi giá</span>
                  <span className="ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300">
                    →
                  </span>
                  <span className="hidden sm:block absolute bottom-0 left-0 w-0 h-px bg-[#2DD4BF] group-hover:w-full transition-all duration-300" />
                </div>
              </div>
            </div>

            {/* ITEM 2: CÁ - Medium on the right with vertical offset */}
            <div
              onClick={() => onSelectProduct(fish)}
              className="lg:col-span-5 group cursor-pointer lg:pt-16"
            >
              <div className="relative overflow-hidden bg-[#0C1E2C] aspect-[4/3] mb-4 sm:mb-8">
                <img
                  src={fish.image}
                  alt={fish.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center scale-100 group-hover:scale-[1.035] transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#FAF8F5]/90 bg-[#07131D]/80 px-2.5 py-1 sm:px-3 sm:py-1.5 backdrop-blur-sm border border-white/10">
                  {fish.category}
                </div>
              </div>

              <div className="max-w-md transition-transform duration-500 group-hover:-translate-y-1">
                <h3 className="font-display text-2xl sm:text-3xl text-[#FAF8F5] font-normal mb-2 sm:mb-3">
                  {fish.name}
                </h3>
                <p className="font-body text-sm sm:text-base text-[#EAE4DC]/75 font-light leading-relaxed mb-3 sm:mb-4">
                  {fish.description}
                </p>
                <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-[#2DD4BF] font-medium tracking-wide mb-3 sm:mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                  <span>Thời giá theo mùa</span>
                  <span className="text-[#EAE4DC]/50 font-light text-xs">• Báo giá theo mẻ hôm nay</span>
                </div>
                <div className="inline-flex w-full sm:w-auto items-center justify-center sm:justify-start text-xs uppercase tracking-[0.2em] text-[#FAF8F5] sm:text-[#FAF8F5]/80 group-hover:text-[#2DD4BF] bg-white/5 sm:bg-transparent py-2.5 sm:py-1 px-4 sm:px-0 rounded sm:rounded-none border border-white/10 sm:border-0 transition-colors relative">
                  <span>Xem mẻ hàng & hỏi giá</span>
                  <span className="ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300">
                    →
                  </span>
                  <span className="hidden sm:block absolute bottom-0 left-0 w-0 h-px bg-[#2DD4BF] group-hover:w-full transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Smaller/Offset Shrimp Below with deliberate asymmetrical rhythm */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* Whitespace spacer / quote column on desktop */}
            <div className="hidden lg:block lg:col-span-4 pr-8">
              <div className="border-l border-white/10 pl-6 py-2">
                <p className="font-serif italic text-lg text-[#EAE4DC]/70 leading-relaxed">
                  “Muốn có hải sản ngon bán cho khách, Cô Tiến phải ra bến từ lúc trời còn tờ mờ sáng, đón từng mẻ cá câu đêm cập cảng Phú Quý để chọn những con tươi rói đem vào Phan Thiết.”
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#2DD4BF] mt-3 font-light">
                  — Chuyện nghề tiệm Cô Tiến
                </p>
              </div>
            </div>

            {/* ITEM 3: TÔM - Offset lower right */}
            <div
              onClick={() => onSelectProduct(shrimp)}
              className="lg:col-span-8 group cursor-pointer"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
                <div className="md:col-span-7 relative overflow-hidden bg-[#0C1E2C] aspect-[4/3] sm:aspect-[16/11]">
                  <img
                    src={shrimp.image}
                    alt={shrimp.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center scale-100 group-hover:scale-[1.035] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#FAF8F5]/90 bg-[#07131D]/80 px-2.5 py-1 sm:px-3 sm:py-1.5 backdrop-blur-sm border border-white/10">
                    {shrimp.category}
                  </div>
                </div>

                <div className="md:col-span-5 transition-transform duration-500 group-hover:-translate-y-1">
                  <h3 className="font-display text-2xl sm:text-3xl text-[#FAF8F5] font-normal mb-2 sm:mb-3">
                    {shrimp.name}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-[#EAE4DC]/75 font-light leading-relaxed mb-3 sm:mb-4">
                    {shrimp.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-[#2DD4BF] font-medium tracking-wide mb-3 sm:mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                    <span>Thời giá theo mùa</span>
                    <span className="text-[#EAE4DC]/50 font-light text-xs">• Báo giá theo mẻ hôm nay</span>
                  </div>
                  <div className="inline-flex w-full sm:w-auto items-center justify-center sm:justify-start text-xs uppercase tracking-[0.2em] text-[#FAF8F5] sm:text-[#FAF8F5]/80 group-hover:text-[#2DD4BF] bg-white/5 sm:bg-transparent py-2.5 sm:py-1 px-4 sm:px-0 rounded sm:rounded-none border border-white/10 sm:border-0 transition-colors relative">
                    <span>Xem mẻ hàng & hỏi giá</span>
                    <span className="ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300">
                      →
                    </span>
                    <span className="hidden sm:block absolute bottom-0 left-0 w-0 h-px bg-[#2DD4BF] group-hover:w-full transition-all duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
