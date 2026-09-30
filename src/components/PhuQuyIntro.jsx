import React, { useEffect, useState, useRef } from 'react';

export default function PhuQuyIntro() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle parallax translation calculation
  const parallaxOffset = (scrollY * 0.04) % 30;

  return (
    <section
      id="phu-quy"
      ref={sectionRef}
      className="relative bg-[#F7F4EE] text-[#14171C] py-16 sm:py-28 lg:py-40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Editorial Two-Column Header & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start mb-12 sm:mb-16 lg:mb-24">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#1E7582] font-semibold mb-3 sm:mb-4">
                <span>PHÚ QUÝ — VIỆT NAM</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal text-[#14171C] leading-[1.15] tracking-tight">
                Biển là nơi
                <br />
                <span className="italic font-light">câu chuyện bắt đầu.</span>
              </h2>
            </div>

            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[#14171C]/10 text-xs tracking-widest text-[#545F6D] uppercase flex flex-wrap items-center gap-2.5 sm:gap-4">
              <span>10°31′ BẮC</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E7582]" />
              <span>108°56′ ĐÔNG</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E7582]" />
              <span>VÙNG BIỂN HOANG SƠ</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:pl-6">
            <p className="font-body text-base sm:text-xl text-[#2B343D] leading-relaxed font-light mb-4 sm:mb-6">
              Nằm giữa trùng khơi cách đất liền hơn 56 hải lý, đảo Phú Quý đón nhận những ngọn gió biển tinh khiết và dòng hải lưu trong lành. Với người dân nơi đây, biển không chỉ là nguồn sống, mà là nhịp thở, là ký ức và là thước đo lòng chân thật qua từng chuyến ghe câu cập bến lúc rạng đông.
            </p>
            <p className="font-body text-sm sm:text-lg text-[#545F6D] leading-relaxed font-light">
              Để có được nguồn hải sản tươi ngon, Cô Tiến trực tiếp liên hệ và đón các chuyến ghe câu đêm cập bến cảng đảo Phú Quý từ sáng sớm. Từng mẻ cá bơi, mực chớp được tuyển chọn kỹ rồi đưa vào Phan Thiết để bày bán tại cửa hàng. Hải sản lấy tận gốc từ thuyền câu của bà con ngư dân địa phương, không qua thương lái trung gian, không tẩm ướp hay ngâm giữ nước, giữ trọn vị ngọt thanh tự nhiên của biển khơi gửi đến bữa cơm gia đình.
            </p>
          </div>
        </div>

        {/* Large Authentic Editorial Photograph of Phú Quý Coastline */}
        <div className="relative mt-6 sm:mt-8 lg:mt-12">
          <div
            className="w-full h-[260px] sm:h-[450px] lg:h-[640px] overflow-hidden bg-[#E2DAD0] relative shadow-2xl shadow-[#14171C]/10"
            style={{
              transform: `translateY(${parallaxOffset * 0.5}px)`,
              transition: 'transform 0.1s linear',
            }}
          >
            <img
              src="/images/phu_quy_coastline.jpg"
              alt="Bờ biển đá bazan hoang sơ và làn nước ngọc bích của Đảo Phú Quý"
              loading="lazy"
              className="w-full h-full object-cover object-center scale-[1.05] hover:scale-[1.08] transition-transform duration-1000 ease-out"
            />
            {/* Subtle photographic vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

            {/* Editorial Caption Bar */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between text-white/90">
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#2DD4BF] font-medium mb-0.5 sm:mb-1">
                  Vịnh Triều Dương & Mũi Doi Thầy
                </p>
                <p className="font-display text-base sm:text-2xl font-light">
                  Nơi sóng vỗ vào vách đá núi lửa hàng triệu năm
                </p>
              </div>
              <div className="mt-2 sm:mt-0 text-[10px] sm:text-[11px] tracking-widest uppercase text-white/60">
                Lưu giữ phong vị biển nguyên sơ
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
