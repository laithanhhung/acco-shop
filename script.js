// Product Data
const products = [
  {
    id: 1,
    name: "Spotify Premium - 1 năm",
    category: "Giải trí",
    price: 99000,
    originalPrice: 99000,
    service: "Hỗ trợ xác thực sinh viên",
    description:
      "Tự mua gói Premium quốc gia VN 29.5k/tháng thay vì 59k/tháng - save 50%",
    image: "./img/spotify_premium_1nam.png",
  },
  {
    id: 2,
    name: "1 Slot Spotify Premium Family - 1 năm",
    category: "Giải trí",
    price: 199000,
    originalPrice: 199000,
    service: "",
    description:
      "Gói Premium Family, nhạc chất lượng cao 320kbps, Podcast, nghe Offline...",
    image: "./img/spotify_premium_family_1nam.png",
  },
  {
    id: 3,
    name: "Youtube Premium - 1 năm",
    category: "Giải trí",
    price: 69000,
    originalPrice: 69000,
    service: "Hỗ trợ xác thực sinh viên",
    description:
      "Tự mua gói Premium quốc gia VN 49.5k/tháng thay vì 79k/tháng - save 38%",
    image: "./img/youtube_premium_1nam.png",
  },
  {
    id: 4,
    name: "1 Slot Youtube Premium Family - 6 tháng",
    category: "Giải trí",
    price: 169000,
    originalPrice: 169000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "Không quảng cáo, tắt màn hình,... free Youtube Music, không giới hạn thiết bị",
    image: "./img/youtube_premium_family_6thang.png",
  },
  {
    id: 5,
    name: "Youtube Premium Family - 1 năm",
    category: "Giải trí",
    price: 299000,
    originalPrice: 299000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "Không quảng cáo, tắt màn hình,... free Youtube Music, không giới hạn thiết bị",
    image: "./img/youtube_premium_family_1nam.png",
  },
  {
    id: 6,
    name: "Apple Music + Apple TV+ - 1 năm",
    category: "Giải trí",
    price: 90000,
    originalPrice: 90000,
    service: "Hỗ trợ xác thực sinh viên",
    description:
      "Các bác tự gia hạn 35k/tháng thay vì 65k/tháng, nhạc chất lượng Lossless",
    image: "./img/apple_music_apple_tv_1nam.png",
  },
  {
    id: 7,
    name: "Discord Nitro Basic - 1 năm",
    category: "Giải trí",
    price: 499000,
    originalPrice: 499000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "Gói Nitro Basic bao gồm một số tính năng Nitro được yêu thích nhất giúp bạn thể hiện bản thân tốt hơn với chi phí thấp.",
    image: "./img/discord_nitro_basic_1nam.png",
  },
  {
    id: 8,
    name: "Discord Nitro - 1 năm",
    category: "Giải trí",
    price: 999000,
    originalPrice: 999000,
    service: "Nâng cấp trên tk chính chủ",
    description: "Mở khóa quyền truy cập vào tất cả các đặc quyền",
    image: "./img/discord_nitro_1nam.png",
  },
  {
    id: 9,
    name: "VIEON VIP - 3 tháng",
    category: "Truyền hình",
    price: 69000,
    originalPrice: 69000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "Hơn 150 kênh, full HD + 4K, VTV Cab, K+ CINE, K+ ACTION, K+ KIDS,...",
    image: "./img/vieon_vip_3thang.png",
  },
  {
    id: 10,
    name: "VIEON VIP - 6 tháng",
    category: "Truyền hình",
    price: 150000,
    originalPrice: 150000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "Hơn 150 kênh, full HD + 4K, VTV Cab, K+ CINE, K+ ACTION, K+ KIDS,...",
    image: "./img/vieon_vip_6thang.png",
  },
  {
    id: 11,
    name: "VIEON VIP - 1 năm",
    category: "Truyền hình",
    price: 290000,
    originalPrice: 290000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "Hơn 150 kênh, full HD + 4K, VTV Cab, K+ CINE, K+ ACTION, K+ KIDS,...",
    image: "./img/vieon_vip_1nam.png",
  },
  {
    id: 12,
    name: "VIEON VIP HBO GO - 6 tháng",
    category: "Truyền hình",
    price: 399000,
    originalPrice: 399000,
    service: "Nâng cấp trên tk chính chủ",
    description: "Đặc quyền gói VIP + Trọn vẹn kho phim HBO GO mới nhất",
    image: "./img/vieon_vip_hbo_go_6thang.png",
  },
  {
    id: 13,
    name: "VIEON All Acess - 3 tháng",
    category: "Truyền hình",
    price: 350000,
    originalPrice: 350000,
    service: "Nâng cấp trên tk chính chủ",
    description: `
      Không giới hạn tất cả nội dung trên VIEON: Đặc quyền gói VIP, Trọn vẹn kho phim HBO GO mới nhất, Giải Ngoại hạng Anh với 5 kênh K+ ( thêm K+ Sport 1, K+ Sport 2)
    `,
    image: "./img/vieon_all_access_3thang.png",
  },
  {
    id: 14,
    name: "VIEON All Acess - 6 tháng",
    category: "Truyền hình",
    price: 650000,
    originalPrice: 650000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "Không giới hạn tất cả nội dung trên VIEON: Đặc quyền gói VIP, Trọn vẹn kho phim HBO GO mới nhất, Giải Ngoại hạng Anh với 5 kênh K+ ( thêm K+ Sport 1, K+ Sport 2)",
    image: "./img/vieon_all_access_6thang.png",
  },
  {
    id: 15,
    name: "FPT PLAY IZI - 1 năm",
    category: "Truyền hình",
    price: 450000,
    originalPrice: 450000,
    service: "",
    description: "",
    image: "./img/fpt_play_izi_1nam.png",
  },
  {
    id: 16,
    name: "FPT PLAY SMAX - 6 tháng",
    category: "Truyền hình",
    price: 250000,
    originalPrice: 250000,
    service: "",
    description: "Cần CCCD 2 mặt",
    image: "./img/fpt_play_smax_6thang.png",
  },
  {
    id: 17,
    name: "FPT PLAY SMAX - 3 tháng",
    category: "Truyền hình",
    price: 150000,
    originalPrice: 150000,
    service: "",
    description: "Không cần CCCD",
    image: "./img/fpt_play_smax_3thang.png",
  },
  {
    id: 18,
    name: "FPT PLAY SVIP HBO - 6 tháng",
    category: "Truyền hình",
    price: 449000,
    originalPrice: 449000,
    service: "",
    description:
      "5 thiết bị cùng lúc, gồm gói Max + Sport, VOD không quảng cáo, HBO GO",
    image: "./img/fpt_play_svip hbo_6thang.png",
  },
  {
    id: 19,
    name: "K+ Trọn vẹn - 1 tháng",
    category: "Truyền hình",
    price: 199000,
    originalPrice: 199000,
    service: "Nâng cấp trên tk chính chủ",
    description: "Xem được K+ trên 2 thiết bị cùng lúc",
    image: "./img/kplus_1thang.png",
  },
  {
    id: 20,
    name: "K+ Trọn vẹn - 3 tháng",
    category: "Truyền hình",
    price: 449000,
    originalPrice: 449000,
    service: "Nâng cấp trên tk chính chủ",
    description: "Xem được K+ trên 2 thiết bị cùng lúc",
    image: "./img/kplus_3thang.png",
  },
  {
    id: 21,
    name: "K+ Trọn vẹn - 6 tháng",
    category: "Truyền hình",
    price: 769000,
    originalPrice: 769000,
    service: "Nâng cấp trên tk chính chủ",
    description: "Xem được K+ trên 2 thiết bị cùng lúc",
    image: "./img/kplus_6thang.png",
  },
  {
    id: 22,
    name: "K+ Trọn vẹn - 1 năm",
    category: "Truyền hình",
    price: 1299000,
    originalPrice: 1299000,
    service: "Nâng cấp trên tk chính chủ",
    description: "Xem được K+ trên 2 thiết bị cùng lúc",
    image: "./img/kplus_1nam.png",
  },
  {
    id: 23,
    name: "Office 365 Family - 1 năm",
    category: "Microsoft",
    price: 350000,
    originalPrice: 350000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "1 TB Onedrive riêng tư, active 5 thiết bị cùng lúc ( Windows/Mac/Ipad,...)",
    image: "./img/office_365_family_1nam.png",
  },
  {
    id: 24,
    name: "Free Google Meet",
    category: "Lưu trữ",
    price: 0,
    originalPrice: 0,
    service: "",
    description:
      "Cuộc họp 100 người/24h, khử tạp âm, ghi lại cuộc gọi khi đăng kí gói dung lượng Google > 512GB, bảo hành 1 năm",
    image: "./img/free_google_meet.png",
  },
  {
    id: 25,
    name: "Google One, Google Drive, Gmail, Google Photo - 6 tháng",
    category: "Lưu trữ",
    price: 560000,
    originalPrice: 560000,
    service: "Nâng cấp trên tk chính chủ (chủ family)",
    description: "5 TB, share dc thêm 4 thành viên, bảo hành 6 tháng",
    image: "./img/google_one_google_drive_gmail_google_photo_6thang.png",
  },
  {
    id: 26,
    name: "Google One, Google Drive, Gmail, Google Photo - 18 tháng",
    category: "Lưu trữ",
    price: 450000,
    originalPrice: 450000,
    service: "Nâng cấp trên tk chính chủ (chủ family)",
    description: "2 TB, share dc thêm 4 thành viên",
    image: "./img/google_one_google_drive_gmail_google_photo_18thang.png",
  },
  {
    id: 27,
    name: "Google One, Google Drive, Gmail, Google Photo - 18 tháng",
    category: "Lưu trữ",
    price: 300000,
    originalPrice: 300000,
    service: "Nâng cấp trên tk chính chủ (add family)",
    description: "1 TB",
    image: "./img/google_one_google_drive_gmail_google_photo_1nam.png",
  },
  {
    id: 28,
    name: "Google One, Google Drive, Gmail, Google Photo - 18 tháng",
    category: "Lưu trữ",
    price: 180000,
    originalPrice: 180000,
    service: "Nâng cấp trên tk chính chủ (add family)",
    description: "512 GB",
    image: "./img/google_one_google_drive_gmail_google_photo_1nam.png",
  },
  {
    id: 29,
    name: "Google One, Google Drive, Gmail, Google Photo - 1 năm",
    category: "Lưu trữ",
    price: 350000,
    originalPrice: 350000,
    service: "Nâng cấp trên tk chính chủ (gói cá nhân)",
    description: "100 GB, share dc thêm 5 thành viên",
    image: "./img/google_one_google_drive_gmail_google_photo_1nam.png",
  },
  {
    id: 30,
    name: "Google One, Google Drive, Gmail, Google Photo - 1 năm",
    category: "Lưu trữ",
    price: 499000,
    originalPrice: 499000,
    service: "Nâng cấp trên tk chính chủ (gói cá nhân)",
    description: "200 GB, share dc thêm 5 thành viên",
    image: "./img/google_one_google_drive_gmail_google_photo_1nam.png",
  },
  {
    id: 31,
    name: "Google One, Google Drive, Gmail, Google Photo - 1 năm",
    category: "Lưu trữ",
    price: 999000,
    originalPrice: 999000,
    service: "Nâng cấp trên tk chính chủ (gói cá nhân)",
    description: "2 TB, share dc thêm 5 thành viên",
    image: "./img/google_one_google_drive_gmail_google_photo_1nam.png",
  },
  {
    id: 32,
    name: "Adobe All Apps - 1 năm",
    category: "Thiết kế / Đồ họa",
    price: 899000,
    originalPrice: 899000,
    service: "Tài khoản riêng tư",
    description:
      "80GB Cloud, 250 credit A.I /tháng, đổi dc pass + add mail kp, ổn định không lỗi",
    image: "./img/adobe_all_apps_1nam.png",
  },
  {
    id: 33,
    name: "Adobe All Apps - 1 tháng",
    category: "Thiết kế / Đồ họa",
    price: 99000,
    originalPrice: 99000,
    service: "Nâng cấp trên tk chính chủ",
    description: "1TB Cloud, 1000 credit A.I /tháng, có thể gia hạn hàng tháng",
    image: "./img/adobe_all_apps_1thang.png",
  },
  {
    id: 34,
    name: "Adobe 3D Substance - 1 năm",
    category: "Thiết kế / Đồ họa",
    price: 899000,
    originalPrice: 899000,
    service: "Nâng cấp trên tk chính chủ",
    description: "",
    image: "./img/adobe_3d_substance_1nam.png",
  },
  {
    id: 35,
    name: "Canva Pro - 1 năm",
    category: "Thiết kế / Đồ họa",
    price: 199000,
    originalPrice: 199000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "Role Brand Designer, full tính năng bao gồm upload font chữ custom, logo,...",
    image: "./img/canva_pro_1nam.png",
  },
  {
    id: 36,
    name: "CapCUT PRO - 14.5 tháng",
    category: "Thiết kế / Đồ họa",
    price: 899000,
    originalPrice: 899000,
    service: "Tài khoản riêng tư",
    description:
      "Max 10 thiết bị cùng lúc (PC, Mobile, Web,...), link được vào tài khoản cá nhân",
    image: "./img/capcut_pro_14thang.png",
  },
  {
    id: 37,
    name: "CapCUT PRO - 70 ngày",
    category: "Thiết kế / Đồ họa",
    price: 150000,
    originalPrice: 150000,
    service: "Tài khoản riêng tư",
    description:
      "Max 10 thiết bị cùng lúc (PC, Mobile, Web,...), link được vào tài khoản cá nhân",
    image: "./img/capcut_pro_70ngay.png",
  },
  {
    id: 38,
    name: "CapCUT PRO - 35 ngày",
    category: "Thiết kế / Đồ họa",
    price: 99000,
    originalPrice: 99000,
    service: "Tài khoản riêng tư",
    description: "Original shows and movies streaming",
    image: "./img/capcut_pro_35ngay.png",
  },
  {
    id: 39,
    name: "ChatGPT PLUS - 1 tháng",
    category: "AI",
    price: 390000,
    originalPrice: 390000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "OpenAI o1-preview + o1-mini, GPT-4 + 4o + 4o mini, upload file, tạo ảnh DALL E, voice",
    image: "./img/chatgpt_plus_1thang.png",
  },
  {
    id: 40,
    name: "Perplexity PRO - 1 tháng",
    category: "AI",
    price: 379000,
    originalPrice: 379000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "GPT 4o, Claude 3.5 Sonet Claude 3,5 Haiku, Sonar Large, Sonar Hugo , upload file, DALL-E,.. AI research real-time tốt nhấtn",
    image: "./img/perplexity_pro_1thang.png",
  },
  {
    id: 41,
    name: "Leonardo.ai - 1 tháng",
    category: "AI",
    price: 399000,
    originalPrice: 399000,
    service: "Tài khoản riêng tư",
    description: "Gói Artisan Unlimited 30$",
    image: "./img/leonardo_ai_1thang.png",
  },
  {
    id: 42,
    name: "Copy.ai - 1 tháng",
    category: "AI",
    price: 250000,
    originalPrice: 250000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "Tạo ra các bài văn bản, tiêu đề, mô tả sản phẩm, email marketing,... gói 49$/tháng",
    image: "./img/copy_ai_1thang.png",
  },
  {
    id: 43,
    name: "Express VPN - 1 tháng",
    category: "VPN / Antivirus",
    price: 69000,
    originalPrice: 69000,
    service: "Key + Account",
    description: "8 thiết bị cùng lúc, Windows/ Mac / Android / iOS,... ",
    image: "./img/express_vpn_1thang.png",
  },
  {
    id: 44,
    name: "Express VPN - 1 tháng",
    category: "VPN / Antivirus",
    price: 55000,
    originalPrice: 55000,
    service: "Key + Account",
    description: "4 thiết bị cùng lúc, Windows/ Mac / Android / iOS,... ",
    image: "./img/express_vpn_1thang.png",
  },
  {
    id: 45,
    name: "VPN China - 1 tháng",
    category: "VPN / Antivirus",
    price: 60000,
    originalPrice: 60000,
    service: "QR code / Ultraview",
    description:
      "Không gới hạn thiết bị, 500GB / tháng, vượt tường lửa Trung Quốc, block ads",
    image: "./img/vpn_china_1thang.png",
  },
  {
    id: 46,
    name: "HMA VPN - 1 năm",
    category: "VPN / Antivirus",
    price: 499000,
    originalPrice: 499000,
    service: "Nâng cấp trên tk chính chủ",
    description: "Dùng đươc cho cả PC / Android / iOS",
    image: "./img/hma_vpn_1nam.png",
  },
  {
    id: 47,
    name: "HMA VPN - 1 tháng",
    category: "VPN / Antivirus",
    price: 99000,
    originalPrice: 99000,
    service: "Key + Account",
    description: "Dùng đươc cho cả PC / Android / iOS",
    image: "./img/hma_vpn_1thang.png",
  },
  {
    id: 48,
    name: "HMA VPN - 1 tháng",
    category: "VPN / Antivirus",
    price: 69000,
    originalPrice: 69000,
    service: "Key",
    description: "Chỉ dùng dc PC / Android",
    image: "./img/hma_vpn_1thang.png",
  },
  {
    id: 49,
    name: "Nord VPN - 1 năm",
    category: "VPN / Antivirus",
    price: 899000,
    originalPrice: 899000,
    service: "Nâng cấp trên tk chính chủ",
    description: "10 thiết bị cùng lúc, hỗ trợ config nhiều loại Router",
    image: "./img/nord_vpn_1nam.png",
  },
];

const bestsellerProducts = [
  products[0], // Windows 11 Pro
  products[2], // Office 2021 Pro
  products[4], // Photoshop 2024
  products[7], // Norton 360
  products[11], // Visual Studio 2022
  products[13], // Netflix Premium
  products[16], // NordVPN
  products[19], // Adobe Creative Cloud
  products[1], // Windows 11 Home
  products[5], // Illustrator 2024
  products[8], // Kaspersky
  products[14], // Spotify Premium
];
//Start Slider
document.addEventListener("DOMContentLoaded", function () {
  // Kiểm tra nếu màn hình có chiều rộng nhỏ hơn 450px
  const mediaQuery = window.matchMedia("(max-width: 450px)");

  // Hàm để khởi tạo Splide với cấu hình phù hợp
  function initializeSplide() {
    const perPage = mediaQuery.matches ? 1 : 3; // Nếu màn hình nhỏ hơn 450px, perPage = 1, ngược lại perPage = 3

    var splide = new Splide(".splide", {
      type: "loop",
      perPage: perPage,
      focus: "center",
    });

    splide.mount();
  }

  // Lắng nghe sự thay đổi kích thước màn hình
  mediaQuery.addListener(initializeSplide);

  // Khởi tạo Splide ban đầu
  initializeSplide();
});

const splideList = document.querySelector(".splide__list");

bestsellerProducts.forEach((product) => {
  const slide = document.createElement("li");
  slide.className = "splide__slide";

  // Định dạng giá tiền VND
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  // Kiểm tra nếu price bằng originalPrice
  const priceHTML =
    product.price === product.originalPrice
      ? `<span class="bs_price">${formatCurrency(product.price)}</span>`
      : `
      <span class="bs_price">${formatCurrency(product.price)}</span>
      <span class="bs_original-price">${formatCurrency(
        product.originalPrice
      )}</span>
    `;

  // Tính toán phần trăm giảm giá
  const discountPercentage =
    ((product.originalPrice - product.price) / product.originalPrice) * 100;
  const discountTag =
    product.price !== product.originalPrice
      ? `<span class="bs_discount-tag">-${discountPercentage.toFixed(
          0
        )}%</span>`
      : "";

  slide.innerHTML = `
    <div class="bs_product-card">
      <div class="bs_product-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="bs_product-info">
        <h3>${product.name}</h3>
        <p class="bs_product-description">${product.service}</p>
        <p class="bs_product-description">${product.description}</p>
        <div class="bs_product-price">
          ${priceHTML}
          ${discountTag}
        </div>
      </div>
    </div>
  `;

  splideList.appendChild(slide);
});
// End của Slider

// Start Product
const mainContainer = document.querySelector(".main-container");

// Nhóm sản phẩm theo category
const productsByCategory = products.reduce((acc, product) => {
  // Normalize category names by trimming whitespace and replacing slashes with a space
  const category = product.category
    .trim()
    .toLowerCase()
    .replace(/\s*\/\s*/g, " ");

  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(product);
  return acc;
}, {});
console.log(productsByCategory);

// Tạo HTML cho từng category và sản phẩm
Object.keys(productsByCategory).forEach((category) => {
  // Tạo container cho category
  const categoryContainer = document.createElement("div");
  categoryContainer.className = "category-container";

  // Tạo thẻ h2 cho category
  const categoryHeader = document.createElement("h2");
  categoryHeader.textContent =
    category.charAt(0).toUpperCase() + category.slice(1);
  categoryContainer.appendChild(categoryHeader);

  // Tạo grid cho các sản phẩm
  const productGrid = document.createElement("div");
  productGrid.className = "product-grid";

  // Biến để theo dõi số lượng sản phẩm hiện tại
  let currentProductCount = 0;
  const productsToShow = 8;

  // Hàm để hiển thị sản phẩm
  const showProducts = () => {
    const products = productsByCategory[category].slice(
      currentProductCount,
      currentProductCount + productsToShow
    );
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";

      // Định dạng giá tiền VND
      const formatCurrency = (value) => {
        return new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(value);
      };

      // Kiểm tra nếu price bằng originalPrice
      const priceHTML =
        product.price === product.originalPrice
          ? `<span class="price">${formatCurrency(product.price)}</span>`
          : `
          <span class="price">${formatCurrency(product.price)}</span>
          <span class="original-price">${formatCurrency(
            product.originalPrice
          )}</span>
        `;

      // Tính toán phần trăm giảm giá
      const discountPercentage =
        ((product.originalPrice - product.price) / product.originalPrice) * 100;
      const discountTag =
        product.price !== product.originalPrice
          ? `<span class="discount-tag">-${discountPercentage.toFixed(
              0
            )}%</span>`
          : "";

      productCard.innerHTML = `
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">
          <h3>${product.name}</h3>
          <p class="product-description">${product.service}</p>
          <p class="product-description">${product.description}</p>
          <div class="product-price">
            ${priceHTML}
            ${discountTag}
          </div>
        </div>
      `;

      productGrid.appendChild(productCard);
    });

    currentProductCount += productsToShow;
    if (currentProductCount >= productsByCategory[category].length) {
      viewMoreButton.disabled = true; // Vô hiệu hóa nút nếu không còn sản phẩm
      viewMoreButton.style.cursor = "not-allowed"; // Thay đổi con trỏ chuột
      viewMoreButton.style.opacity = "0.5"; // Giảm độ mờ để chỉ rõ không thể nhấn
    }
  };

  // Thêm nút "Xem thêm"
  const viewMoreButton = document.createElement("button");
  viewMoreButton.className = "view-more-button";
  viewMoreButton.textContent = "Xem thêm";
  viewMoreButton.addEventListener("click", showProducts);

  // Hiển thị sản phẩm ban đầu
  showProducts();

  categoryContainer.appendChild(productGrid);
  categoryContainer.appendChild(viewMoreButton);

  // Thêm thanh ngang phân chia
  const divider = document.createElement("hr");
  divider.className = "category-divider";
  categoryContainer.appendChild(divider);

  mainContainer.appendChild(categoryContainer);
});
// End Product
document.addEventListener("DOMContentLoaded", function () {
  const contactButton = document.querySelector(".contact-button");

  // Kiểm tra nếu màn hình có chiều rộng nhỏ hơn 450px
  const mediaQuery = window.matchMedia("(max-width: 450px)");

  function updateButtonContent() {
    if (mediaQuery.matches) {
      // Nếu màn hình nhỏ hơn 450px, đổi nội dung thành "Zalo"
      contactButton.textContent = "Zalo";
    } else {
      // Nếu màn hình lớn hơn 450px, đổi nội dung thành "Contact me"
      contactButton.textContent = "Liên hệ";
    }
  }

  // Lắng nghe sự thay đổi kích thước màn hình
  mediaQuery.addListener(updateButtonContent);

  // Cập nhật nội dung nút ban đầu
  updateButtonContent();
});
