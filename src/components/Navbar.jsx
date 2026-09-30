import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Hải sản', href: '#hai-san' },
    { name: 'Bảng sản vật', href: '#danh-sach-san-vat' },
    { name: 'Phú Quý', href: '#phu-quy' },
    { name: 'Câu chuyện', href: '#cau-chuyen' },
    { name: 'Liên hệ', href: '#lien-he' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#07131D]/90 backdrop-blur-md border-b border-white/5 py-4 shadow-xl shadow-black/20'
          : 'bg-transparent py-6 lg:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#"
          className="group flex flex-col items-start focus:outline-none"
        >
          <span className="font-display text-xl sm:text-2xl tracking-tight text-[#FAF8F5] group-hover:text-[#2DD4BF] transition-colors duration-300 font-medium">
            Hải sản Cô Tiến
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#2DD4BF]/80 font-normal">
            Hải sản Phú Quý tại Phan Thiết
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-9 text-sm tracking-wide">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[#EAE4DC]/80 hover:text-white transition-colors duration-200 link-editorial-underline font-light"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="tel:0908816814"
            className="flex items-center space-x-2 text-xs tracking-wider text-[#EAE4DC]/80 hover:text-[#2DD4BF] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 stroke-[1.5] text-[#2DD4BF]" />
            <span>0908 816 814</span>
          </a>

          <a
            href="https://zalo.me/0908816814"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 text-xs tracking-wider text-[#EAE4DC]/70 hover:text-[#2DD4BF] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 stroke-[1.5]" />
            <span>Zalo</span>
          </a>

          <button
            onClick={onOpenContact}
            className="text-xs uppercase tracking-[0.18em] px-4 py-2 border border-white/20 text-[#FAF8F5] hover:border-[#2DD4BF] hover:text-[#2DD4BF] transition-all duration-300 rounded-none bg-transparent"
          >
            Hỏi mẻ hàng hôm nay
          </button>
        </div>

        {/* Mobile Menu button */}
        <div className="flex md:hidden items-center space-x-3">
          <a
            href="tel:0908816814"
            className="p-2 text-[#2DD4BF] focus:outline-none"
            aria-label="Gọi điện"
          >
            <Phone className="w-5 h-5" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#FAF8F5] focus:outline-none"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[72px] bottom-0 z-50 md:hidden bg-[#07131D]/98 border-t border-white/10 px-6 py-8 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
          <div className="flex flex-col space-y-5">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-serif text-[#FAF8F5] hover:text-[#2DD4BF] transition-colors py-1 border-b border-white/5"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col space-y-3 pb-8">
            <a
              href="tel:0908816814"
              className="flex items-center space-x-3 py-3 px-4 rounded-lg bg-white/5 text-sm text-[#EAE4DC] hover:text-[#2DD4BF] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#2DD4BF]" />
              <span>Hotline: 0908 816 814</span>
            </a>
            <a
              href="https://zalo.me/0908816814"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 py-3 px-4 rounded-lg bg-[#1E7582]/20 text-sm text-[#2DD4BF] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#2DD4BF]" />
              <span>Chat Zalo mẻ hôm nay</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3.5 text-xs uppercase tracking-[0.2em] bg-[#FAF8F5] text-[#07131D] font-semibold text-center mt-2 shadow-lg"
            >
              Hỏi giá mẻ hàng hôm nay
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
