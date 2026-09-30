# Hải sản Cô Tiến — Phú Quý • Phan Thiết

> Trang thông tin và giới thiệu sản vật biển đảo Phú Quý được đón mua trực tiếp tại bến cảng đảo và bày bán phục vụ bà con tại TP. Phan Thiết.

---

## 🌊 Công nghệ sử dụng

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **3D / Canvas:** [Three.js](https://threejs.org/)
- **Linter & Code Quality:** [Oxlint](https://oxc.rs/)

---

## 🚀 Khởi chạy dự án tại máy (Local Development)

```bash
# 1. Cài đặt các thư viện phụ thuộc
npm install

# 2. Khởi chạy dev server
npm run dev

# 3. Kiểm tra lỗi cú pháp và lint
npm run lint

# 4. Đóng gói bản Production
npm run build
```

---

## 🚢 Hướng dẫn Triển khai (Deploy)

Dự án là ứng dụng Single Page Application (SPA) chuẩn Vite, có thể triển khai miễn phí và tức thì trên:

### 1. Vercel
- Kết nối GitHub Repository với [Vercel](https://vercel.com).
- Cấu hình tự động nhận diện:
  - **Framework Preset:** `Vite`
  - **Build Command:** `npm run build`
  - **Output Directory:** `dist`

### 2. Netlify
- Kết nối GitHub Repository với [Netlify](https://www.netlify.com).
  - **Build Command:** `npm run build`
  - **Publish Directory:** `dist`

### 3. Cloudflare Pages / GitHub Pages
- Đặt thư mục xuất file build là `dist`.

