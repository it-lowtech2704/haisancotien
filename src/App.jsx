import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PhuQuyIntro from './components/PhuQuyIntro';
import SeafoodShowcase from './components/SeafoodShowcase';
import FeaturedProduct from './components/FeaturedProduct';
import SeafoodCatalog from './components/SeafoodCatalog';
import StorySection from './components/StorySection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import ContactModal from './components/ContactModal';
import MobileStickyBar from './components/MobileStickyBar';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactContextProduct, setContactContextProduct] = useState(null);

  const openContactWithProduct = (product) => {
    setContactContextProduct(product);
    setIsContactOpen(true);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#07131D] text-[#EAE4DC] selection:bg-[#1E7582] selection:text-white">
      {/* Navigation */}
      <Navbar onOpenContact={() => openContactWithProduct(null)} />

      {/* Main Content */}
      <main>
        {/* 1. Hero with underwater video background */}
        <Hero
          onExploreClick={() => scrollToSection('hai-san')}
          onStoryClick={() => scrollToSection('cau-chuyen')}
        />

        {/* 2. Brand Introduction (Phú Quý — Việt Nam) */}
        <PhuQuyIntro />

        {/* 3. Seafood Showcase (Mực, Cá, Tôm with asymmetric layout) */}
        <SeafoodShowcase onSelectProduct={(prod) => setSelectedProduct(prod)} />

        {/* 4. Featured Product (Mực một nắng Phú Quý) */}
        <FeaturedProduct
          onContactProduct={(prod) => openContactWithProduct(prod)}
        />

        {/* 5. Comprehensive Seasonal Seafood Catalog (Bảng sản vật bến đảo Phú Quý) */}
        <SeafoodCatalog onSelectItem={(item) => openContactWithProduct(item)} />

        {/* 6. The Story of Cô Tiến */}
        <StorySection />

        {/* 7. Final CTA */}
        <FinalCTA onOpenContact={() => openContactWithProduct(null)} />
      </main>

      {/* 8. Footer */}
      <Footer onOpenContact={() => openContactWithProduct(null)} />

      {/* Product Detail Lightbox */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onContact={(prod) => openContactWithProduct(prod)}
      />

      {/* Direct Contact Modal (Zalo, Phone, Facebook) */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => {
          setIsContactOpen(false);
          setContactContextProduct(null);
        }}
        selectedProduct={contactContextProduct}
      />

      {/* Mobile Sticky Quick Action Bar (Call, Zalo, Order) */}
      <MobileStickyBar onOpenContact={() => openContactWithProduct(null)} />
    </div>
  );
}
