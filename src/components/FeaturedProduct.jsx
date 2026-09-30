import { Check, ShieldCheck } from 'lucide-react';

export default function FeaturedProduct({ onContactProduct }) {
  const featured = {
    id: 'muc-mot-nang',
    name: 'Mực một nắng Phú Quý',
    vietnameseName: 'Mực lá một nắng nguyên con',
    subtitle: 'Đậm vị biển, dẻo thơm tự nhiên.',
    description: 'Cô Tiến trực tiếp đón mua từng mẻ mực lá dày cơm vừa cập cảng đảo lúc rạng sáng, đem xẻ phơi trên phên tre đón đúng một con nắng giòn của biển Phú Quý. Bên ngoài ráo mịn màng, bên trong giữ trọn vị ngọt dẻo tự nhiên, mang vào tiệm tại Phan Thiết đóng gói bán cho khách làm quà hoặc dùng trong bữa cơm gia đình.',
    price: '480.000₫',
    unit: 'túi 500g',
    image: '/images/muc_mot_nang_featured.jpg',
    features: [
      'Đón mua trực tiếp từ các thuyền câu đêm trên đảo',
      'Phơi 1 nắng tự nhiên trên phên tre ngoài đảo',
      'Không hóa chất, không ngâm nước, vị ngọt đậm đà',
    ],
  };

  return (
    <section className="relative bg-[#050E17] text-[#FAF8F5] py-16 sm:py-28 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Editorial Eyebrow & Headline */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-12 border-b border-white/10 pb-4 sm:pb-6">
          <div>
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.24em] sm:tracking-[0.28em] text-[#2DD4BF] font-light">
              ĐẶC SẢN NỔI BẬT TẠI CỬA HÀNG
            </span>
            <h2 className="font-display text-2xl sm:text-4xl text-[#FAF8F5] font-normal mt-1.5 sm:mt-2">
              Món quà từ nắng và gió biển
            </h2>
          </div>
          <span className="text-[11px] sm:text-xs tracking-widest text-[#EAE4DC]/50 uppercase mt-2 sm:mt-0 font-light">
            Phú Quý • Bày bán tại Phan Thiết
          </span>
        </div>

        {/* Dramatic Full-Width Visual with Overlapping Product Information */}
        <div className="relative">
          {/* Extremely Large High-Quality Seafood Image */}
          <div className="w-full h-[240px] sm:h-[450px] lg:h-[680px] overflow-hidden bg-[#0C1E2C] relative">
            <img
              src={featured.image}
              alt="Mực một nắng Phú Quý phơi trên phên tre bờ biển"
              loading="lazy"
              className="w-full h-full object-cover object-center scale-100 hover:scale-[1.02] transition-transform duration-1000 ease-out"
            />
            {/* Cinematic Gradient overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050E17] via-black/25 to-transparent lg:bg-gradient-to-r lg:from-[#050E17]/85 lg:via-[#050E17]/30 lg:to-transparent pointer-events-none" />
          </div>

          {/* Partially Overlapping Product Information Card */}
          <div className="relative lg:absolute lg:bottom-8 lg:left-8 max-w-lg bg-[#07131D]/98 lg:bg-[#07131D]/90 backdrop-blur-md border border-white/10 p-5 sm:p-8 lg:p-9 mt-4 sm:mt-6 lg:mt-0 shadow-2xl shadow-black/70">
            <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#2DD4BF] mb-2 font-light">
              <ShieldCheck className="w-3.5 h-3.5 stroke-[1.5]" />
              <span>Mực câu đảo Phú Quý</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#FAF8F5] font-normal leading-tight mb-2">
              {featured.name}
            </h3>

            <p className="font-serif italic text-base sm:text-lg text-[#2DD4BF]/90 font-light mb-3">
              “{featured.subtitle}”
            </p>

            <p className="font-body text-xs sm:text-sm text-[#EAE4DC]/80 font-light leading-relaxed mb-4 sm:mb-5">
              {featured.description}
            </p>

            {/* Quality Checklist */}
            <ul className="space-y-2 mb-5 sm:mb-6 border-t border-white/10 pt-3 sm:pt-4">
              {featured.features.map((item, idx) => (
                <li key={idx} className="flex items-center space-x-2.5 text-xs text-[#EAE4DC]/85 font-light">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#1E7582]/30 flex items-center justify-center text-[#2DD4BF] shrink-0">
                    <Check className="w-2 h-2 stroke-[2.5]" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Price & Primary Action */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pt-4 border-t border-white/10 gap-3 sm:gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#EAE4DC]/50 block">
                  Giá niêm yết
                </span>
                <div className="flex items-baseline space-x-2 mt-0.5">
                  <span className="font-price text-2xl sm:text-3xl text-[#2DD4BF]">
                    {featured.price}
                  </span>
                  <span className="text-xs text-[#EAE4DC]/60 font-light">
                    / {featured.unit}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onContactProduct(featured)}
                className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 bg-[#2DD4BF] text-[#07131D] hover:bg-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-md flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Hỏi mua mẻ mực này</span>
                <span className="text-sm">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
