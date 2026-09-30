import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, ZoomIn, ZoomOut, Play, Pause, Compass } from 'lucide-react';

export default function PanoramaSphere() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  // Trạng thái điều khiển giao diện HUD
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(75); // FOV: 35 (zoom sâu nhất) đến 95 (góc siêu rộng)
  const [hasInteracted, setHasInteracted] = useState(false);

  // Refs lưu trữ các thông số 3D động
  const stateRef = useRef({
    lon: 0,
    lat: 0,
    targetLon: 0,
    targetLat: 0,
    hoverLon: 0,
    hoverLat: 0,
    fov: 75,
    targetFov: 75,
    isUserInteracting: false,
    onPointerDownPointerX: 0,
    onPointerDownPointerY: 0,
    onPointerDownLon: 0,
    onPointerDownLat: 0,
    autoRotate: true,
  });

  useEffect(() => {
    stateRef.current.autoRotate = isAutoRotate;
  }, [isAutoRotate]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Khởi tạo Three.js Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1200);
    camera.position.set(0, 0, 0);

    // 2. Khởi tạo Renderer WebGL
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // 3. Khởi tạo Quả cầu 3D (360° Sphere Geometry)
    // Bán kính 500, lật mặt trong (scale -1, 1, 1) để camera đứng ở tâm quả cầu nhìn ra
    const geometry = new THREE.SphereGeometry(500, 64, 40);
    geometry.scale(-1, 1, 1);

    // 4. Khởi tạo Texture: Dùng Video hải đảo Phú Quý kết hợp Texture hình ảnh làm nền
    let videoTexture = null;

    const video = document.createElement('video');
    video.src = '/videos/hero_phu_quy.mp4';
    video.crossOrigin = 'anonymous';
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;
    videoRef.current = video;

    // Fallback texture ảnh bờ biển đảo Phú Quý
    const textureLoader = new THREE.TextureLoader();
    const fallbackTexture = textureLoader.load(
      '/images/phu_quy_coastline.jpg',
      () => {
        renderer.render(scene, camera);
      }
    );
    fallbackTexture.colorSpace = THREE.SRGBColorSpace;

    const material = new THREE.MeshBasicMaterial({
      map: fallbackTexture,
    });

    const sphereMesh = new THREE.Mesh(geometry, material);
    scene.add(sphereMesh);

    // Khi video bắt đầu phát, chuyển sang VideoTexture mượt mà
    const handleVideoCanPlay = () => {
      videoTexture = new THREE.VideoTexture(video);
      videoTexture.colorSpace = THREE.SRGBColorSpace;
      videoTexture.minFilter = THREE.LinearFilter;
      videoTexture.magFilter = THREE.LinearFilter;
      sphereMesh.material.map = videoTexture;
      sphereMesh.material.needsUpdate = true;
    };

    video.addEventListener('canplay', handleVideoCanPlay);
    video.play().catch(() => {
      // Autoplay chính sách trình duyệt, texture ảnh vẫn hiển thị mượt mà
    });

    // 5. Xử lý tương tác Kéo chuột xoay 360° & Rê chuột theo góc quay
    const onPointerDown = (event) => {
      if (event.isPrimary === false) return;
      stateRef.current.isUserInteracting = true;
      setHasInteracted(true);

      stateRef.current.onPointerDownPointerX = event.clientX;
      stateRef.current.onPointerDownPointerY = event.clientY;
      stateRef.current.onPointerDownLon = stateRef.current.lon;
      stateRef.current.onPointerDownLat = stateRef.current.lat;

      container.style.cursor = 'grabbing';
    };

    const onPointerMove = (event) => {
      const rect = container.getBoundingClientRect();
      const normX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = ((event.clientY - rect.top) / rect.height) * 2 - 1;

      if (stateRef.current.isUserInteracting) {
        // Khi đang nhấn giữ & kéo chuột: Xoay tự do toàn cảnh 360 độ
        const deltaX = (event.clientX - stateRef.current.onPointerDownPointerX) * 0.18;
        const deltaY = (event.clientY - stateRef.current.onPointerDownPointerY) * 0.18;

        stateRef.current.targetLon = stateRef.current.onPointerDownLon - deltaX;
        stateRef.current.targetLat = Math.max(
          -80,
          Math.min(80, stateRef.current.onPointerDownLat + deltaY)
        );
      } else {
        // Khi rê chuột thông thường: camera chuyển góc lượn theo vị trí con trỏ
        stateRef.current.hoverLon = normX * 16;
        stateRef.current.hoverLat = -normY * 11;
      }
    };

    const onPointerUp = () => {
      stateRef.current.isUserInteracting = false;
      container.style.cursor = 'grab';
    };

    // 6. Xử lý Cuộn chuột phóng to/nhỏ để "đi sâu vào" khung cảnh
    const onWheel = (event) => {
      event.preventDefault();
      setHasInteracted(true);
      // Giảm FOV = Phóng to (Zoom sâu vào cảnh), Tăng FOV = Thu nhỏ (Góc siêu rộng)
      const newFov = Math.max(
        32,
        Math.min(92, stateRef.current.targetFov + event.deltaY * 0.05)
      );
      stateRef.current.targetFov = newFov;
      setZoomLevel(Math.round(newFov));
    };

    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    container.addEventListener('wheel', onWheel, { passive: false });

    // 7. Xử lý Resize màn hình
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    // 8. Animation Loop 60-120 FPS
    let animId = null;
    const lookTarget = new THREE.Vector3();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Nếu không tương tác và đang bật tự quay: camera trôi nhẹ nhàng ngắm biển
      if (!stateRef.current.isUserInteracting && stateRef.current.autoRotate) {
        stateRef.current.targetLon += 0.045;
      }

      // Làm mượt góc xoay bằng thuật toán nội suy Lerp
      stateRef.current.lon +=
        (stateRef.current.targetLon + stateRef.current.hoverLon - stateRef.current.lon) *
        0.065;
      stateRef.current.lat +=
        (stateRef.current.targetLat + stateRef.current.hoverLat - stateRef.current.lat) *
        0.065;

      // Giới hạn góc ngẩng / chúc để không bị lộn ngược cực
      stateRef.current.lat = Math.max(-82, Math.min(82, stateRef.current.lat));

      // Làm mượt độ zoom (FOV)
      stateRef.current.fov +=
        (stateRef.current.targetFov - stateRef.current.fov) * 0.08;
      camera.fov = stateRef.current.fov;
      camera.updateProjectionMatrix();

      // Chuyển đổi tọa độ cầu (Spherical) sang vector Descartes (Cartesian Vector)
      const phi = THREE.MathUtils.degToRad(90 - stateRef.current.lat);
      const theta = THREE.MathUtils.degToRad(stateRef.current.lon);

      lookTarget.x = 500 * Math.sin(phi) * Math.cos(theta);
      lookTarget.y = 500 * Math.cos(phi);
      lookTarget.z = 500 * Math.sin(phi) * Math.sin(theta);

      camera.lookAt(lookTarget);
      renderer.render(scene, camera);
    };

    animate();

    // 9. Dọn dẹp bộ nhớ khi Unmount
    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      container.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', handleResize);
      video.removeEventListener('canplay', handleVideoCanPlay);
      video.pause();

      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      if (videoTexture) videoTexture.dispose();
      fallbackTexture.dispose();
      renderer.dispose();
    };
  }, []);

  // Các hàm tương tác qua nút bấm HUD
  const handleResetView = (e) => {
    e.stopPropagation();
    stateRef.current.targetLon = 0;
    stateRef.current.targetLat = 0;
    stateRef.current.hoverLon = 0;
    stateRef.current.hoverLat = 0;
    stateRef.current.targetFov = 75;
    setZoomLevel(75);
  };

  const handleZoomIn = (e) => {
    e.stopPropagation();
    const newFov = Math.max(32, stateRef.current.targetFov - 12);
    stateRef.current.targetFov = newFov;
    setZoomLevel(Math.round(newFov));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    const newFov = Math.min(92, stateRef.current.targetFov + 12);
    stateRef.current.targetFov = newFov;
    setZoomLevel(Math.round(newFov));
  };

  const toggleAutoRotate = (e) => {
    e.stopPropagation();
    setIsAutoRotate((prev) => !prev);
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden select-none cursor-grab"
      style={{ touchAction: 'none' }}
    >
      {/* Dynamic Cinematic Gradient Overlays to preserve legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07131D] via-black/20 to-black/40 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/15 to-black/55 pointer-events-none z-10" />

      {/* Floating 360 HUD Controls Panel */}
      <div className="absolute top-24 right-6 sm:top-28 sm:right-10 z-30 flex flex-col items-end space-y-2 pointer-events-auto">
        {/* Badge Indicator */}
        <div className="flex items-center space-x-2 text-[11px] font-mono tracking-widest text-[#2DD4BF] bg-[#07131D]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#2DD4BF]/30 shadow-lg shadow-black/40">
          <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-ping" />
          <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '10s' }} />
          <span>VÒM TOÀN CẢNH 360° PHÚ QUÝ</span>
        </div>

        {/* Quick Viewport Buttons */}
        <div className="flex items-center bg-[#07131D]/85 backdrop-blur-md border border-white/10 rounded-full p-1 shadow-xl space-x-1">
          <button
            type="button"
            onClick={handleZoomIn}
            title="Phóng to / Đi sâu vào cảnh (Zoom In)"
            className="p-2 text-white/80 hover:text-[#2DD4BF] hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleZoomOut}
            title="Thu nhỏ / Mở rộng góc nhìn (Zoom Out)"
            className="p-2 text-white/80 hover:text-[#2DD4BF] hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={toggleAutoRotate}
            title={isAutoRotate ? 'Tạm dừng tự xoay' : 'Bật tự động xoay 360°'}
            className="p-2 text-white/80 hover:text-[#2DD4BF] hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          >
            {isAutoRotate ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={handleResetView}
            title="Về lại góc nhìn chính diện"
            className="p-2 text-white/80 hover:text-[#2DD4BF] hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          >
            <RotateCw className="w-4 h-4" />
          </button>
        </div>

        {/* Interactive Helper Hint */}
        {!hasInteracted && (
          <div className="text-[11px] text-white/75 bg-black/70 backdrop-blur-sm px-3.5 py-1.5 rounded-md border border-[#2DD4BF]/30 animate-pulse pointer-events-none shadow-lg">
            🖱️ Nhấn giữ & kéo để xoay 360° • Cuộn chuột để đi sâu vào
          </div>
        )}
      </div>

      {/* Subtle Bottom Horizon Compass Guide */}
      <div className="absolute bottom-16 sm:bottom-20 right-6 sm:right-10 z-20 pointer-events-none hidden md:flex items-center space-x-2 text-[10px] text-white/40 font-mono tracking-widest">
        <span>GÓC NHÌN FOV: {zoomLevel}°</span>
        <span className="w-1 h-1 rounded-full bg-[#2DD4BF]/50" />
        <span>TIÊU CỰ: {zoomLevel < 50 ? 'CẬN CẢNH' : zoomLevel < 70 ? 'TRUNG TÂM' : 'TOÀN CẢNH'}</span>
      </div>
    </div>
  );
}
