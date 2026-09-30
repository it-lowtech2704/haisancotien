import React from 'react';

export default function StorySection() {
  return (
    <section
      id="cau-chuyen"
      className="bg-[#F7F4EE] text-[#14171C] py-16 sm:py-28 lg:py-44 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetric Double Imagery */}
          <div className="lg:col-span-7 relative">
            {/* Large Main Photograph: Dawn Harbor with Wooden Boat */}
            <div className="w-full h-[260px] sm:h-[420px] lg:h-[520px] overflow-hidden bg-[#E2DAD0] shadow-xl">
              <img
                src="/images/phu_quy_story_boat.jpg"
                alt="Thuyền đánh cá gỗ truyền thống cập bến lúc bình minh đảo Phú Quý"
                loading="lazy"
                className="w-full h-full object-cover object-center scale-100 hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
            </div>

            {/* Smaller Secondary Photograph: Seafood Preparation */}
            <div className="relative -mt-12 sm:-mt-24 ml-auto w-[170px] sm:w-[280px] md:w-[340px] aspect-square overflow-hidden bg-[#D8D0C5] border-4 sm:border-8 border-[#F7F4EE] shadow-2xl z-10">
              <img
                src="/images/phu_quy_seafood_prep.jpg"
                alt="Đôi bàn tay tỉ mỉ chuẩn bị hải sản tươi cùng hạt muối biển Phú Quý"
                loading="lazy"
                className="w-full h-full object-cover object-center scale-100 hover:scale-[1.04] transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 text-[9px] sm:text-[10px] uppercase tracking-widest text-white/90 bg-black/60 px-2 py-0.5 sm:py-1 backdrop-blur-xs">
                Sơ chế thủ công tại bến
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Editorial Storytelling */}
          <div className="lg:col-span-5 lg:pl-4">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#1E7582] font-semibold mb-3 sm:mb-4">
              <span>HẢI SẢN CÔ TIẾN • PHAN THIẾT</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal text-[#14171C] leading-[1.12] mb-4 sm:mb-6">
              Chuyện tiệm
              <br />
              <span className="italic font-light">Cô Tiến</span>
            </h2>

            <blockquote className="font-serif italic text-lg sm:text-2xl text-[#1E7582] font-normal leading-snug mb-5 sm:mb-8 border-l-2 border-[#1E7582] pl-4 sm:pl-6">
              “Có những hương vị không cần cầu kỳ để nhớ.”
            </blockquote>

            <div className="space-y-4 sm:space-y-5 font-body text-sm sm:text-base lg:text-lg text-[#3E4854] font-light leading-relaxed">
              <p>
                Hải sản Cô Tiến bắt đầu từ những sớm mai bến cảng Phú Quý rộn rã tiếng máy nổ khi các ghe câu đêm rẽ sóng trở về. Ở hòn đảo này, hải sản ngon nhất là khi đón mua ngay lúc ghe vừa cập bến — con mực lá óng ánh chớp sáng, con cá mú rạn mang còn đỏ au.
              </p>
              <p>
                Gắn bó với bến cảng và bà con ngư dân ngoài đảo, Cô Tiến thấu hiểu: hải sản ngoài đảo tươi ngọt bao nhiêu thì khi vào đất liền qua nhiều khâu trung gian lại dễ bị giảm sút do ngâm nước hay trữ lâu. Vì vậy, Cô Tiến trực tiếp đón mua các mẻ hải sản câu đêm cập cảng Phú Quý, rồi chuyển vào Phan Thiết mở cửa hàng bày bán cho bà con địa phương và thực khách ghé mua.
              </p>
              <p>
                Không phô trương hay dùng những lời lẽ hoa mỹ, cửa hàng Cô Tiến tại Phan Thiết giữ trọn sự mộc mạc và chữ tín của người buôn bán xứ biển: lấy tận gốc bến đảo, bán đúng giá trị, để khách hàng khi thưởng thức đều cảm nhận được trọn vẹn vị tươi ngọt nguyên bản từ biển đảo quê nhà.
              </p>
            </div>

            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#14171C]/10 flex flex-wrap items-center gap-4 sm:gap-6">
              <div>
                <span className="block font-display text-base sm:text-lg text-[#14171C] font-medium">
                  Cô Tiến
                </span>
                <span className="text-xs uppercase tracking-widest text-[#1E7582] font-medium">
                  Hải sản Phú Quý tại Phan Thiết
                </span>
              </div>
              <div className="hidden sm:block h-6 w-px bg-[#14171C]/15" />
              <div className="text-xs text-[#545F6D] font-light leading-snug">
                Thu mua tận bến đảo • Bày bán tại Phan Thiết
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
