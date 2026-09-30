import React, { useEffect, useRef, useState } from 'react';

export default function Hero({ onExploreClick, onStoryClick }) {
  const heroRef = useRef(null);
  const videoContainerRef = useRef(null);
  const textRef = useRef(null);
  const glowRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  const targetMouse = useRef({ x: 0, y: 0 });
  const currentMouse = useRef({ x: 0, y: 0 });
  const targetScroll = useRef(0);
  const currentScroll = useRef(0);
  const animFrameId = useRef(null);

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    let isRunning = true;

    // Lắng nghe sự kiện cuộn trang để tính toán độ sâu lao vào cảnh (Fly-through dive)
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroHeight = heroRef.current.offsetHeight || window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;
      const ratio = Math.min(1, Math.max(0, scrollY / (heroHeight * 0.85)));
      targetScroll.current = ratio;

      if (ratio > 0.05 && !hasScrolled) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Vòng lặp Render 60-120 FPS kết hợp nội suy (Dual Lerp: Mouse Tilt + Scroll Dive)
    const updateMotion = () => {
      // 1. Làm mượt chuột theo quán tính
      const mouseEase = 0.06;
      currentMouse.current.x += (targetMouse.current.x - currentMouse.current.x) * mouseEase;
      currentMouse.current.y += (targetMouse.current.y - currentMouse.current.y) * mouseEase;

      // 2. Làm mượt tiến trình cuộn đâm sâu vào cảnh
      const scrollEase = 0.085;
      currentScroll.current += (targetScroll.current.x !== undefined ? 0 : (targetScroll.current - currentScroll.current)) * scrollEase;

      const { x, y } = currentMouse.current;
      const s = currentScroll.current; // 0 (đỉnh trang) -> 1 (đáy Hero)

      // Càng cuộn sâu, camera càng phóng thẳng vào bến đảo Phú Quý
      // Zoom từ 1.08x lên đến 1.78x (phóng sâu 70% vào tâm cảnh)
      const zoomScale = 1.08 + s * 0.70;
      const pushZ = s * 240; // Tiến sâu vào trục Z 240px
      const diveY = s * 70;  // Hạ dần góc máy xuống mặt biển

      // Góc nghiêng theo chuột (giảm nhẹ biên độ khi đang lao nhanh)
      const mouseDamp = Math.max(0.2, 1 - s * 0.7);
      const rotY = x * 11.0 * mouseDamp;
      const rotX = -y * 8.5 * mouseDamp;
      const transX = -x * 40 * mouseDamp;
      const transY = -y * 28 * mouseDamp + diveY;

      // Áp dụng biến đổi 3D lên Video nền
      if (videoContainerRef.current) {
        videoContainerRef.current.style.transform =
          `scale(${zoomScale.toFixed(3)}) translate3d(${transX.toFixed(2)}px, ${transY.toFixed(2)}px, ${pushZ.toFixed(2)}px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
      }

      // Lớp chữ tiêu đề: Khi cuộn chuột, chữ phóng to nhẹ và mờ dần như camera bay xuyên qua
      if (textRef.current) {
        const textOpacity = Math.max(0, 1 - s * 1.6);
        const textLiftY = -s * 85 + y * 14 * mouseDamp;
        const textShiftX = x * 20 * mouseDamp;
        const textScale = 1 + s * 0.12;
        const textBlur = s * 5;

        textRef.current.style.opacity = textOpacity.toFixed(3);
        textRef.current.style.transform =
          `translate3d(${textShiftX.toFixed(2)}px, ${textLiftY.toFixed(2)}px, ${(s * 100).toFixed(1)}px) scale(${textScale.toFixed(3)})`;
        textRef.current.style.filter = `blur(${textBlur.toFixed(1)}px)`;

        // Khi chữ đã mờ hẳn thì ẩn pointer events để không cản trở
        textRef.current.style.pointerEvents = textOpacity < 0.1 ? 'none' : 'auto';
      }

      // Luồng ánh nắng khúc xạ mặt nước (Caustics shimmer) trôi theo chuột
      if (glowRef.current) {
        const lightX = 50 + x * 28;
        const lightY = 45 + y * 24;
        const lightAlpha = 0.18 + s * 0.12;
        glowRef.current.style.background =
          `radial-gradient(circle at ${lightX.toFixed(1)}% ${lightY.toFixed(1)}%, rgba(45, 212, 191, ${lightAlpha.toFixed(2)}) 0%, transparent 60%)`;
      }

      // Mờ dần nút cuộn khi bắt đầu cuộn
      if (scrollIndicatorRef.current) {
        scrollIndicatorRef.current.style.opacity = Math.max(0, 1 - s * 2.5).toFixed(2);
      }

      if (isRunning) {
        animFrameId.current = requestAnimationFrame(updateMotion);
      }
    };

    animFrameId.current = requestAnimationFrame(updateMotion);

    return () => {
      isRunning = false;
      window.removeEventListener('scroll', handleScroll);
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [hasScrolled]);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    targetMouse.current = {
      x: Math.max(-1, Math.min(1, normX)),
      y: Math.max(-1, Math.min(1, normY)),
    };
  };

  const handleMouseLeave = () => {
    targetMouse.current = { x: 0, y: 0 };
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[100dvh] min-h-[580px] sm:min-h-[700px] w-full flex flex-col justify-between overflow-hidden bg-[#07131D] cursor-default pt-20 sm:pt-28 pb-24 sm:pb-10"
      style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
    >
      {/* Background Video Container with 3D Fly-through & Mouse Parallax */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div
          ref={videoContainerRef}
          className="w-full h-full absolute inset-0 transform-gpu"
          style={{
            transform: 'scale(1.08) translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg)',
            transformOrigin: 'center center',
            willChange: 'transform',
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/phu_quy_coastline.jpg"
            className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05]"
          >
            <source src="/videos/hero_phu_quy.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Dynamic Ocean Ambient Sunlight Shimmer follows cursor */}
        <div
          ref={glowRef}
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(45, 212, 191, 0.18) 0%, transparent 60%)',
          }}
        />

        {/* Cinematic Vignette Overlay - Seamlessly blends into the next dark navy section */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07131D] via-black/20 to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/15 to-black/55 pointer-events-none" />
      </div>

      {/* Island Coordinates Viewfinder Accent (Hidden on mobile) */}
      <div className="absolute top-24 sm:top-28 right-6 sm:right-10 z-20 pointer-events-none hidden md:flex items-center space-x-2 text-[11px] font-mono tracking-widest text-[#2DD4BF]/90 bg-[#07131D]/65 backdrop-blur-md px-3.5 py-1.5 rounded border border-[#2DD4BF]/25 shadow-lg shadow-black/30">
        <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-ping" />
        <span>ĐẢO PHÚ QUÝ • 10°31' N 108°56' E</span>
      </div>

      {/* Main Editorial Hero Content with Fly-through Separation */}
      <div
        ref={textRef}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto flex flex-col justify-center transform-gpu"
        style={{ willChange: 'transform, opacity, filter' }}
      >
        <div className="max-w-2xl">
          {/* Eyebrow - informative island origin badge instead of repeating shop name */}
          <div className="inline-flex items-center space-x-2.5 mb-3 sm:mb-5">
            <span className="w-5 sm:w-6 h-px bg-[#2DD4BF]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.28em] text-[#2DD4BF] font-medium drop-shadow">
              ĐÓN MUA TẬN BẾN ĐẢO PHÚ QUÝ
            </span>
          </div>

          {/* Large Headline */}
          <h1 className="font-display text-[32px] xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[#FAF8F5] leading-[1.14] tracking-tight font-normal mb-3.5 sm:mb-6 drop-shadow-md">
            Tươi từ biển.
            <br />
            <span className="italic font-light text-[#EAE4DC]">Đậm vị quê nhà.</span>
          </h1>

          {/* Supporting Text */}
          <p className="font-body text-[13.5px] sm:text-base md:text-xl text-[#EAE4DC]/85 font-light leading-relaxed max-w-xl mb-6 sm:mb-10 drop-shadow">
            Hải sản tươi ngon từ biển đảo Phú Quý, được Cô Tiến đón mua trực tiếp từ ngư dân trên đảo và mang vào Phan Thiết bày bán phục vụ bà con mỗi ngày.
          </p>

          {/* Actions - Primary CTA with elegant secondary text link */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-6 pt-1">
            <a
              href="#hai-san"
              onClick={(e) => {
                if (onExploreClick) {
                  e.preventDefault();
                  onExploreClick();
                }
              }}
              className="inline-flex items-center justify-center px-7 py-3.5 sm:py-4 bg-[#2DD4BF] hover:bg-white text-[#07131D] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-xl shadow-black/40 rounded-sm cursor-pointer min-h-[46px] group"
            >
              <span>Xem các món hải sản</span>
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <a
              href="#cau-chuyen"
              onClick={(e) => {
                if (onStoryClick) {
                  e.preventDefault();
                  onStoryClick();
                }
              }}
              className="inline-flex items-center justify-start py-2 px-1 text-xs sm:text-sm text-[#FAF8F5]/80 hover:text-[#2DD4BF] font-light tracking-wide transition-colors group cursor-pointer"
            >
              <span className="border-b border-white/20 group-hover:border-[#2DD4BF] pb-0.5 transition-colors">
                Chuyện tiệm Cô Tiến
              </span>
              <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform text-[#2DD4BF]">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Subtle Animated Scroll Indicator - Sits safely above the mobile sticky bar */}
      <div
        ref={scrollIndicatorRef}
        className="relative z-10 w-full flex flex-col items-center justify-center pointer-events-none transition-opacity duration-300 pt-3"
      >
        <span className="text-[10px] uppercase tracking-[0.24em] text-[#EAE4DC]/50 mb-1.5 font-light drop-shadow">
          Cuộn xuống khám phá
        </span>
        <div className="w-px h-5 sm:h-7 bg-white/20 relative overflow-hidden">
          <div className="w-full h-2 sm:h-2.5 bg-[#2DD4BF] animate-delicate-scroll absolute top-0" />
        </div>
      </div>
    </section>
  );
}
