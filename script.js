// Product Data
const products = [
  {
    id: 1,
    name: "Xác thực sinh viên Spotify Premium - 1 năm",
    category: "Giải trí",
    price: 99000,
    originalPrice: 99000,
    service: "Hỗ trợ xác thực tk cá nhân thành tk sinh viên",
    description: "Tự mua gói Premium quốc gia VN 29.5k/tháng - save 50%",
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
    name: "Xác thực sinh viên Youtube Premium - 1 năm",
    category: "Giải trí",
    price: 69000,
    originalPrice: 69000,
    service: "Hỗ trợ xác thực tk cá nhân thành tk sinh viên",
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
    originalPrice: 350000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "Không quảng cáo, tắt màn hình,... free Youtube Music, không giới hạn thiết bị",
    image: "./img/youtube_premium_family_1nam.png",
  },
  {
    id: 6,
    name: "Netflix Premium Extra - 1 tháng",
    category: "Giải trí",
    price: 69000,
    originalPrice: 99000,
    service: "Tài khoản riêng tư",
    description: "Ultra HD 4K",
    image: "./img/netflix_1thang.png",
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
  // {
  //   id: 9,
  //   name: "VIEON VIP - 3 tháng",
  //   category: "Truyền hình",
  //   price: 69000,
  //   originalPrice: 69000,
  //   service: "Nâng cấp trên tk chính chủ",
  //   description:
  //     "Hơn 150 kênh, full HD + 4K, VTV Cab, K+ CINE, K+ ACTION, K+ KIDS,...",
  //   image: "./img/vieon_vip_3thang.png",
  // },
  // {
  //   id: 10,
  //   name: "VIEON VIP - 6 tháng",
  //   category: "Truyền hình",
  //   price: 150000,
  //   originalPrice: 150000,
  //   service: "Nâng cấp trên tk chính chủ",
  //   description:
  //     "Hơn 150 kênh, full HD + 4K, VTV Cab, K+ CINE, K+ ACTION, K+ KIDS,...",
  //   image: "./img/vieon_vip_6thang.png",
  // },
  // {
  //   id: 11,
  //   name: "VIEON VIP - 1 năm",
  //   category: "Truyền hình",
  //   price: 299000,
  //   originalPrice: 299000,
  //   service: "Nâng cấp trên tk chính chủ",
  //   description:
  //     "Hơn 150 kênh, full HD + 4K, VTV Cab, K+ CINE, K+ ACTION, K+ KIDS,...",
  //   image: "./img/vieon_vip_1nam.png",
  // },
  // {
  //   id: 12,
  //   name: "VIEON VIP HBO GO - 6 tháng",
  //   category: "Truyền hình",
  //   price: 399000,
  //   originalPrice: 399000,
  //   service: "Nâng cấp trên tk chính chủ",
  //   description: "Đặc quyền gói VIP + Trọn vẹn kho phim HBO GO mới nhất",
  //   image: "./img/vieon_vip_hbo_go_6thang.png",
  // },
  // {
  //   id: 13,
  //   name: "VIEON All Acess - 3 tháng",
  //   category: "Truyền hình",
  //   price: 350000,
  //   originalPrice: 350000,
  //   service: "Nâng cấp trên tk chính chủ",
  //   description: `
  //     Không giới hạn tất cả nội dung trên VIEON: Đặc quyền gói VIP, Trọn vẹn kho phim HBO GO mới nhất, Giải Ngoại hạng Anh với 5 kênh K+ ( thêm K+ Sport 1, K+ Sport 2)
  //   `,
  //   image: "./img/vieon_all_access_3thang.png",
  // },
  // {
  //   id: 14,
  //   name: "VIEON All Acess - 6 tháng",
  //   category: "Truyền hình",
  //   price: 650000,
  //   originalPrice: 650000,
  //   service: "Nâng cấp trên tk chính chủ",
  //   description:
  //     "Không giới hạn tất cả nội dung trên VIEON: Đặc quyền gói VIP, Trọn vẹn kho phim HBO GO mới nhất, Giải Ngoại hạng Anh với 5 kênh K+ ( thêm K+ Sport 1, K+ Sport 2)",
  //   image: "./img/vieon_all_access_6thang.png",
  // },
  // {
  //   id: 15,
  //   name: "FPT PLAY IZI - 1 năm",
  //   category: "Truyền hình",
  //   price: 450000,
  //   originalPrice: 450000,
  //   service: "",
  //   description: "",
  //   image: "./img/fpt_play_izi_1nam.png",
  // },
  // {
  //   id: 16,
  //   name: "FPT PLAY SMAX - 6 tháng",
  //   category: "Truyền hình",
  //   price: 250000,
  //   originalPrice: 250000,
  //   service: "",
  //   description: "Cần CCCD 2 mặt",
  //   image: "./img/fpt_play_smax_6thang.png",
  // },
  // {
  //   id: 17,
  //   name: "FPT PLAY SMAX - 3 tháng",
  //   category: "Truyền hình",
  //   price: 150000,
  //   originalPrice: 150000,
  //   service: "",
  //   description: "Không cần CCCD",
  //   image: "./img/fpt_play_smax_3thang.png",
  // },
  // {
  //   id: 18,
  //   name: "FPT PLAY SVIP HBO - 6 tháng",
  //   category: "Truyền hình",
  //   price: 449000,
  //   originalPrice: 449000,
  //   service: "",
  //   description:
  //     "5 thiết bị cùng lúc, gồm gói Max + Sport, VOD không quảng cáo, HBO GO",
  //   image: "./img/fpt_play_svip hbo_6thang.png",
  // },
  // {
  //   id: 19,
  //   name: "K+ Trọn vẹn - 1 tháng",
  //   category: "Truyền hình",
  //   price: 199000,
  //   originalPrice: 199000,
  //   service: "Nâng cấp trên tk chính chủ",
  //   description: "Xem được K+ trên 2 thiết bị cùng lúc",
  //   image: "./img/kplus_1thang.png",
  // },
  // {
  //   id: 20,
  //   name: "K+ Trọn vẹn - 3 tháng",
  //   category: "Truyền hình",
  //   price: 449000,
  //   originalPrice: 449000,
  //   service: "Nâng cấp trên tk chính chủ",
  //   description: "Xem được K+ trên 2 thiết bị cùng lúc",
  //   image: "./img/kplus_3thang.png",
  // },
  // {
  //   id: 21,
  //   name: "K+ Trọn vẹn - 6 tháng",
  //   category: "Truyền hình",
  //   price: 769000,
  //   originalPrice: 769000,
  //   service: "Nâng cấp trên tk chính chủ",
  //   description: "Xem được K+ trên 2 thiết bị cùng lúc",
  //   image: "./img/kplus_6thang.png",
  // },
  // {
  //   id: 22,
  //   name: "K+ Trọn vẹn - 1 năm",
  //   category: "Truyền hình",
  //   price: 1299000,
  //   originalPrice: 1299000,
  //   service: "Nâng cấp trên tk chính chủ",
  //   description: "Xem được K+ trên 2 thiết bị cùng lúc",
  //   image: "./img/kplus_1nam.png",
  // },
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
    name: "Google One, Google Drive, Gmail, Google Photo - 1 năm",
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
    originalPrice: 120000,
    service: "Tài khoản riêng tư",
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
    originalPrice: 250000,
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
    price: 399000,
    originalPrice: 450000,
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
  {
    id: 50,
    name: "Jetbrains Full 17 Apps - 1 năm",
    category: "IT",
    price: 99000,
    originalPrice: 130000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "Chỉ dùng ở VN, đổi thiết bị thoải mái, free Plugin paid*: Laravel Idea, jetClient...",
    image: "./img/jetbrains_full_17_apps_1nam.png",
  },

  {
    id: 51,
    name: "Tabnine PRO - 1 tháng",
    category: "IT",
    price: 49000,
    originalPrice: 49000,
    service: "Nâng cấp trên tk chính chủ",
    description: "AI code assistant",
    image: "./img/tabnine_pro_1thang.png",
  },
  {
    id: 52,
    name: "Navicat Premium + Cloud - 1 năm",
    category: "IT",
    price: 99000,
    originalPrice: 99000,
    service: "Nâng cấp trên tk chính chủ",
    description: "Navicat Premium, Cloud Pro Plan, ...",
    image: "./img/navicat_premium_plus_cloud_1nam.png",
  },
  {
    id: 53,
    name: "Dbeaver Enterprise / Cloud - 1 năm",
    category: "IT",
    price: 99000,
    originalPrice: 99000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "Team collaboration, data management, and role-based access control...",
    image: "./img/dbeaver_enterprise_plus_cloud_1nam.png",
  },
  {
    id: 54,
    name: "Tableau Desktop + Prep - 1 năm",
    category: "IT",
    price: 99000,
    originalPrice: 99000,
    service: "Key",
    description:
      "Active 2 thiết bị, xài dc cho Tableau Prep Builder, free eLearning",
    image: "./img/tableau_desktop_plus_prep_1nam.png",
  },
  {
    id: 55,
    name: "LinkedIn Premium Business - 1 năm",
    category: "IT",
    price: 1500000,
    originalPrice: 1500000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "Nâng cấp gói trên tài khoản cá nhân, extra 2 months for friend",
    image: "./img/linkedin_premium_business_1nam.png",
  },
  {
    id: 56,
    name: "Tryhackme PREMIUM - 1 tháng",
    category: "IT",
    price: 150000,
    originalPrice: 150000,
    service: "Nâng cấp trên tk chính chủ",
    description: "Gia hạn hàng tháng",
    image: "./img/try_hack_me_premium_1thang.png",
  },
  {
    id: 57,
    name: "Datacamp - 6 tháng",
    category: "IT",
    price: 99000,
    originalPrice: 99000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "1 slot gói Teams, full courses, đầy đủ tính năng bao gồm chứng chỉ",
    image: "./img/datacamp_6thang.png",
  },
  {
    id: 58,
    name: "SmartGit - 1 năm",
    category: "IT",
    price: 99000,
    originalPrice: 99000,
    service: "Key",
    description: "",
    image: "./img/smartgit_1nam.png",
  },
  {
    id: 59,
    name: "Figma PRO - 1 năm",
    category: "IT",
    price: 99000,
    originalPrice: 99000,
    service: "Nâng cấp trên tk chính chủ",
    description: "Đầy đủ tính năng bao gồm Dev Mode",
    image: "./img/figma_pro_1nam.png",
  },
  {
    id: 60,
    name: "Tinkerwell - 1 năm",
    category: "IT",
    price: 50000,
    originalPrice: 50000,
    service: "Nâng cấp trên tk chính chủ",
    description: "Active 2 thiết bị",
    image: "./img/tinkerwell_1nam.png",
  },
  {
    id: 61,
    name: "Hackthebox academy - 1 năm",
    category: "IT",
    price: 50000,
    originalPrice: 50000,
    service: "Nâng cấp trên tk chính chủ",
    description: "",
    image: "./img/hack_the_box_academy_1nam.png",
  },
  {
    id: 62,
    name: "Coursera Business - 3 tháng",
    category: "Học tập / Giáo dục",
    price: 299000,
    originalPrice: 299000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "Hơn 12000 courses, học có chứng chỉ, link cert được vào Linkedin",
    image: "./img/coursera_business_3thang.png",
  },
  {
    id: 63,
    name: "Coursera Business - 6 tháng",
    category: "Học tập / Giáo dục",
    price: 499000,
    originalPrice: 499000,
    service: "Nâng cấp trên tk chính chủ",
    description: `
      Hơn 12000 courses, học có chứng chỉ, link cert được vào Linkedin
    `,
    image: "./img/coursera_business_6thang.png",
  },
  {
    id: 64,
    name: "Quizlet PLUS - 1 năm",
    category: "Học tập / Giáo dục",
    price: 150000,
    originalPrice: 150000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "Không quảng cáo, học ko giới hạn, ghi chú, tạo flashcard, quét văn bản,...",
    image: "./img/quizlet_plus_1nam.png",
  },
  // {
  //   id: 65,
  //   name: "Elsa PREMIUM - 1 năm",
  //   category: "Học tập / Giáo dục",
  //   price: 599000,
  //   originalPrice: 700000,
  //   service: "Nâng cấp trên tk chính chủ",
  //   description:
  //     "Elsa Pro + Elsa AI + Elsa Speech Analyzer, thêm 6 gói học toàn diện, bảo hành full",
  //   image: "./img/elsa_premium_bao_hanh_1nam.png",
  // },
  {
    id: 66,
    name: "LingoKids PLUS - 1 năm",
    category: "Học tập / Giáo dục",
    price: 450000,
    originalPrice: 450000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "App học tiếng anh qua game cho bé dưới 10 tuổi, pay sạch có bill",
    image: "./img/lingokids_plus_1nam.png",
  },
  {
    id: 67,
    name: "LingoKids PLUS - 1 tháng",
    category: "Học tập / Giáo dục",
    price: 49000,
    originalPrice: 49000,
    service: "Tài khoản riêng tư",
    description:
      "App học tiếng anh qua game cho bé dưới 10 tuổi, pay sạch có bill",
    image: "./img/lingokids_plus_1thang.png",
  },
  {
    id: 69,
    name: "Grammarly - 1 năm",
    category: "Học tập / Giáo dục",
    price: 99000,
    originalPrice: 99000,
    service: "Tài khoản dùng chung",
    description: "Grammarly GO + AI, account dùng chung 1/5 slot",
    image: "./img/grammarly_tk_dung_chung_1nam.png",
  },
  {
    id: 70,
    name: "Grammarly - 1 tháng",
    category: "Học tập / Giáo dục",
    price: 99000,
    originalPrice: 99000,
    service: "Tài khoản chính chủ",
    description: "",
    image: "./img/grammarly_30ngay.png",
  },
  {
    id: 71,
    name: "Grammarly - 1 năm",
    category: "Học tập / Giáo dục",
    price: 450000,
    originalPrice: 450000,
    service: "Tài khoản riêng tư",
    description: "Có Grammarly Go + AI",
    image: "./img/grammarly_go_plus_ai_1nam.png",
  },
  // {
  //   id: 72,
  //   name: "Grammarly - 1 năm",
  //   category: "Học tập / Giáo dục",
  //   price: 299000,
  //   originalPrice: 299000,
  //   service: "Tài khoản riêng tư",
  //   description: "Không có GO, không có AI ",
  //   image: "./img/grammarly_khong_go_plus_ai_1nam.png",
  // },
  {
    id: 73,
    name: "Quillbot PREMIUM - 6 tháng",
    category: "Học tập / Giáo dục",
    price: 199000,
    originalPrice: 199000,
    service: "Tài khoản dùng chung",
    description:
      "Kiểm tra ngữ pháp, viết lại đoạn văn bản, check đạo văn, tạo trích dẫn,...Tài khoản dùng riêng, 1 thiết bị cùng lúc",
    image: "./img/quillbot_premium_6thang.png",
  },
  {
    id: 74,
    name: "Quillbot PREMIUM - 1 năm",
    category: "Học tập / Giáo dục",
    price: 350000,
    originalPrice: 350000,
    service: "Tài khoản dùng chung",
    description:
      "Kiểm tra ngữ pháp, viết lại đoạn văn bản, check đạo văn, tạo trích dẫn,...Tài khoản dùng riêng, 1 thiết bị cùng lúc",
    image: "./img/quillbot_premium_1nam.png",
  },
  {
    id: 75,
    name: "Quillbot PREMIUM - 1 tháng",
    category: "Học tập / Giáo dục",
    price: 69000,
    originalPrice: 69000,
    service: "Tài khoản riêng tư",
    description: "Account riêng tư đổi được pass, gia hạn hàng tháng",
    image: "./img/quillbot_premium_1thang.png",
  },
  {
    id: 76,
    name: "4English PRO - Lifetime",
    category: "Học tập / Giáo dục",
    price: 599000,
    originalPrice: 599000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "Tự học tiếng Anh hiệu quả: từ điển đa dạng, video có sub, luyện nghe,...",
    image: "./img/4english_pro.png",
  },
  {
    id: 77,
    name: "Busuu Premium - 1 năm",
    category: "Học tập / Giáo dục",
    price: 250000,
    originalPrice: 250000,
    service: "Nâng cấp trên tk chính chủ",
    description: "",
    image: "./img/busuu_premium_1nam.png",
  },
  {
    id: 78,
    name: "LingQ PREMIUM - 3 tháng",
    category: "Học tập / Giáo dục",
    price: 119000,
    originalPrice: 119000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "App học ngoại ngữ Tiếng Anh, Pháp, Trung Quốc, Tây Ban Nha, Đức, Ý, Nga,...qua podcast, sách nói, bài phỏng vấn",
    image: "./img/lingq_premium_3thang.png",
  },
  {
    id: 79,
    name: "LingQ PREMIUM - 6 tháng",
    category: "Học tập / Giáo dục",
    price: 250000,
    originalPrice: 250000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "App học ngoại ngữ Tiếng Anh, Pháp, Trung Quốc, Tây Ban Nha, Đức, Ý, Nga,...qua podcast, sách nói, bài phỏng vấn",
    image: "./img/lingq_premium_6thang.png",
  },
  {
    id: 80,
    name: "LingQ PREMIUM - 1 năm",
    category: "Học tập / Giáo dục",
    price: 350000,
    originalPrice: 350000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "App học ngoại ngữ Tiếng Anh, Pháp, Trung Quốc, Tây Ban Nha, Đức, Ý, Nga,...qua podcast, sách nói, bài phỏng vấn",
    image: "./img/lingq_premium_1nam.png",
  },
  {
    id: 81,
    name: "Prowritingaid Premium - 1 tháng",
    category: "Học tập / Giáo dục",
    price: 330000,
    originalPrice: 330000,
    service: "Tài khoản riêng tư",
    description: "",
    image: "./img/prowritingaid_premium_1thang.png",
  },
  {
    id: 82,
    name: "Prowritingaid Premium Pro - 1 tháng",
    category: "Học tập / Giáo dục",
    price: 399000,
    originalPrice: 399000,
    service: "Tài khoản riêng tư",
    description: "",
    image: "./img/prowritingaid_premium_pro_1thang.png",
  },
  {
    id: 83,
    name: "Turnitin Student - 3 tháng",
    category: "Học tập / Giáo dục",
    price: 139000,
    originalPrice: 139000,
    service: "Nâng cấp trên tk chính chủ",
    description: "30 lượt check/ ngày, không lưu lại data",
    image: "./img/turnitin_student_3thang.png",
  },
  {
    id: 84,
    name: "Turnitin Student - 6 tháng",
    category: "Học tập / Giáo dục",
    price: 189000,
    originalPrice: 189000,
    service: "Nâng cấp trên tk chính chủ",
    description: "30 lượt check/ ngày, không lưu lại data",
    image: "./img/turnitin_student_6thang.png",
  },
  {
    id: 85,
    name: "Turnitin Student - 1 năm",
    category: "Học tập / Giáo dục",
    price: 299000,
    originalPrice: 299000,
    service: "Nâng cấp trên tk chính chủ",
    description: "30 lượt check/ ngày, không lưu lại data",
    image: "./img/turnitin_student_1nam.png",
  },
  {
    id: 86,
    name: "Quizizz Individual (Super) - 1 năm",
    category: "Học tập / Giáo dục",
    price: 350000,
    originalPrice: 350000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "Max 10 thiết bị cùng lúc (PC, Mobile, Web,...), link được vào tài khoản cá nhân",
    image: "./img/quizizz_individual_super_1nam.png",
  },
  {
    id: 87,
    name: "Quizizz Individual (Super) - 1 tháng",
    category: "Học tập / Giáo dục",
    price: 20000,
    originalPrice: 20000,
    service: "Tài khoản riêng tư",
    description: "",
    image: "./img/quizizz_individual_super_1thang.png",
  },
  {
    id: 88,
    name: "Quizizz Individual (Super) - 1 năm",
    category: "Học tập / Giáo dục",
    price: 250000,
    originalPrice: 250000,
    service: "Key",
    description: "",
    image: "./img/quizizz_individual_key_1nam.png",
  },
  {
    id: 89,
    name: "Wordwall Standard - 1 năm",
    category: "Học tập / Giáo dục",
    price: 499000,
    originalPrice: 499000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "Giúp giáo viên thiết kế các dạng bài tập, trò chơi thú vị phục vụ quá trình giảng dạy Gói tháng Standard: 55k, Pro 79k",
    image: "./img/wordwall_standard_1nam.png",
  },
  {
    id: 90,
    name: "Wordwall Pro - 1 năm",
    category: "Học tập / Giáo dục",
    price: 699000,
    originalPrice: 699000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "Giúp giáo viên thiết kế các dạng bài tập, trò chơi thú vị phục vụ quá trình giảng dạy Gói tháng Standard: 55k, Pro 79k",
    image: "./img/wordwall_pro_1nam.png",
  },
  {
    id: 91,
    name: "Onedrive - Outlook - 1 tháng",
    category: "Lưu Trữ",
    price: 250000,
    originalPrice: 250000,
    service: "Nâng cấp trên tk chính chủ",
    description: "1 TB bộ nhớ riêng tư + Office 365 bản quyền 1 năm",
    image: "./img/onedrive_outlook_1nam.png",
  },
  {
    id: 92,
    name: "Mega.nz - 1 tháng",
    category: "Lưu Trữ",
    price: 90000,
    originalPrice: 90000,
    service: "Nâng cấp trên tk chính chủ",
    description: "Hoặc 630k/năm [ gói Pro Lite ]",
    image: "./img/mega_nz_pro_lite_1thang.png",
  },
  {
    id: 93,
    name: "Mega.nz - 1 tháng",
    category: "Lưu Trữ",
    price: 169000,
    originalPrice: 169000,
    service: "Nâng cấp trên tk chính chủ",
    description: "Hoặc 899k/năm [ Gói Pro I ]",
    image: "./img/mega_nz_pro_i_1thang.png",
  },
  {
    id: 68,
    name: "Mega.nz - 1 tháng",
    category: "Lưu Trữ",
    price: 299000,
    originalPrice: 299000,
    service: "Nâng cấp trên tk chính chủ",
    description: "Hoặc 1799/năm [ Gói Pro II ]",
    image: "./img/mega_nz_pro_ii_1thang.png",
  },
  {
    id: 94,
    name: "Mega.nz - 1 tháng",
    category: "Lưu Trữ",
    price: 450000,
    originalPrice: 450000,
    service: "Nâng cấp trên tk chính chủ",
    description: "Hoặc 2799k/năm [ Gói Pro III ]",
    image: "./img/mega_nz_pro_iii_1thang.png",
  },
  {
    id: 95,
    name: "Photoroom PRO - 1 năm",
    category: "Thiết kế / Đồ họa",
    price: 450000,
    originalPrice: 450000,
    service: "Nâng cấp trên tk chính chủ",
    description: "",
    image: "./img/photoroom_pro_1nam.png",
  },
  {
    id: 96,
    name: "CorelDraw - 1 năm",
    category: "Thiết kế / Đồ họa",
    price: 550000,
    originalPrice: 550000,
    service: "License account",
    description: "Version 2022/2023",
    image: "./img/coreldraw_1nam.png",
  },
  {
    id: 97,
    name: "CapCUT PRO - 1 năm",
    category: "Thiết kế / Đồ họa",
    price: 899000,
    originalPrice: 1000000,
    service: "Nâng cấp trên tk chính chủ",
    description: "",
    image: "./img/capcut_pro_1nam.png",
  },
  {
    id: 98,
    name: "Perplexity PRO - 1 tháng",
    category: "VPN / Antivirus",
    price: 299000,
    originalPrice: 299000,
    service: "Tài khoản riêng tư",
    description:
      "GPT 4o, Claude 3.5 Sonet Claude 3,5 Haiku, Sonar Large, Sonar Hugo , upload file, DALL-E,.. AI research real-time tốt nhất",
    image: "./img/perplexity_tk_rieng_tu_1thang.png",
  },
  {
    id: 99,
    name: "1minAI PRO - 1 năm",
    category: "VPN / Antivirus",
    price: 650000,
    originalPrice: 650000,
    service: "Tài khoản riêng tư",
    description:
      "1,265,000 credit / tháng, GPT -o1 preview, GPT 4 Turbo, Claude3 Opus, LLMA 3.1,...",
    image: "./img/1minai_pro.png",
  },

  {
    id: 100,
    name: "Gemini Advance - 1 năm",
    category: "AI",
    price: 499000,
    originalPrice: 499000,
    service: "Tài khoản riêng tư",
    description:
      "Tặng kèm 2TB dung lượng Google One, share Gemini +  Google one cho 5 thành viên",
    image: "./img/gemini_advanced_1nam.png",
  },

  {
    id: 101,
    name: "Gemini Advance - 6 tháng",
    category: "AI",
    price: 179000,
    originalPrice: 179000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "conver image to Video, text to Video, AI Image,... gói Standard",
    image: "./img/gemini_advanced_6thang.png",
  },
  {
    id: 102,
    name: "Leonardo.ai - 1 tháng",
    category: "AI",
    price: 179000,
    originalPrice: 179000,
    service: "Tài khoản riêng tư",
    description: "Gói Apprentice 12$",
    image: "./img/leonardo_ai_artisan_unlinited_1thang.png",
  },
  // {
  //   id: 104,
  //   name: "Gamma.app Plus - 1 tháng",
  //   category: "AI",
  //   price: 199000,
  //   originalPrice: 199000,
  //   service: "Tài khoản riêng tư",
  //   description: "Gói Plus 10$",
  //   image: "./img/gamma_app_plus_1thang.png",
  // },
  // {
  //   id: 106,
  //   name: "Gamma.app Pro - 1 tháng",
  //   category: "AI",
  //   price: 350000,
  //   originalPrice: 350000,
  //   service: "Tài khoản riêng tư",
  //   description: "Gói PRO 20$",
  //   image: "./img/gamma_app_pro_1thang.png",
  // },
  {
    id: 107,
    name: "Kling AI Standard - 1 tháng",
    category: "AI",
    price: 169000,
    originalPrice: 169000,
    service: "Tài khoản riêng tư",
    description:
      "Conver image to Video, text to Video, AI Image,... gói Standard",
    image: "./img/kling_ai_standard_1thang.png",
  },
  {
    id: 108,
    name: "Beautiful AI Pro - 1 năm",
    category: "AI",
    price: 199000,
    originalPrice: 199000,
    service: "Tài khoản riêng tư",
    description: "Gói Pro, tạo Slide Powerpoint thuyết trình",
    image: "./img/beautiful_ai_1nam.png",
  },
  {
    id: 109,
    name: "Question AI - 1 tháng",
    category: "AI",
    price: 150000,
    originalPrice: 150000,
    service: "Tài khoản riêng tư",
    description: "Giải bài tập chỉ bằng cách chụp ảnh",
    image: "./img/question_ai_1thang.png",
  },
  {
    id: 110,
    name: "Zoom Pro - 1 tháng",
    category: "Công việc",
    price: 150000,
    originalPrice: 150000,
    service: "Tài khoản riêng tư",
    description: "100 người/room/ 30 tiếng, 5GB Cloud",
    image: "./img/zoom_pro_tk_rieng_tu_1thang.png",
  },
  {
    id: 111,
    name: "Zoom Pro - 1 tháng",
    category: "Công việc",
    price: 169000,
    originalPrice: 169000,
    service: "Nâng cấp trên tk chính chủ",
    description: "100 người/room/ 30 tiếng, 5GB Cloud",
    image: "./img/zoom_pro_tk_chinh_chu_1thang.png",
  },
  {
    id: 112,
    name: "Google Meet - 18 tháng",
    category: "Công việc",
    price: 175000,
    originalPrice: 175000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "100 người/24h, khử tạp âm, ghi lại cuộc gọi + 512GB Google One, bh 1 năm",
    image: "./img/google_meet_18thang.png",
  },
  {
    id: 113,
    name: "Microsoft Copilot PRO - 1 tháng",
    category: "Công việc",
    price: 89000,
    originalPrice: 89000,
    service: "Tài khoản riêng tư",
    description: `
      GPT-4 và GPT-4 Turbo, DALL-E 3 tạo ảnh với AI,.. tích hợp trong Office 365
    `,
    image: "./img/microsoft_copilot_pro_tk_rieng_tu_1thang.png",
  },
  {
    id: 114,
    name: "Microsoft Copilot PRO - 1 tháng",
    category: "Công việc",
    price: 499000,
    originalPrice: 499000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "GPT-4 và GPT-4 Turbo, DALL-E 3 tạo ảnh với AI,.. tích hợp trong Office 365",
    image: "./img/microsoft_copilot_pro_tk_chinh_chu_1thang.png",
  },
  {
    id: 115,
    name: "Miro - 2 năm",
    category: "Công việc",
    price: 199000,
    originalPrice: 199000,
    service: "Nâng cấp trên tk chính chủ",
    description: "Team 10 members, private board, unlimited boards,...",
    image: "./img/miro_2nam.png",
  },
  {
    id: 116,
    name: "Miro - 100 năm",
    category: "Công việc",
    price: 350000,
    originalPrice: 350000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "Team 100 members, private board, unlimited boards,... bảo hành 2 năm",
    image: "./img/miro_100nam.png",
  },
  {
    id: 103,
    name: "Edraw Mind / Max - 1 năm",
    category: "Công việc",
    price: 449000,
    originalPrice: 449000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "Gói Individuals, 10GB Cloud,... update thoải mái; Gói Lifetime bh 2 năm, gói 1-3 năm bh 1 năm",
    image: "./img/fpt_play_smax_3thang.png",
  },
  {
    id: 117,
    name: "Edraw Mind / Max - Lifetime",
    category: "Công việc",
    price: 699000,
    originalPrice: 699000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "Gói Individuals, 10GB Cloud,... update thoải mái; Gói Lifetime bh 2 năm, gói 1-3 năm bh 1 năm",
    image: "./img/edraw_mind_max_lifetime.png",
  },
  {
    id: 118,
    name: "Edraw Mind / Max - 3 năm",
    category: "Công việc",
    price: 649000,
    originalPrice: 649000,
    service: "Nâng cấp trên tk chính chủ",
    description:
      "Gói Individuals, 10GB Cloud,... update thoải mái; Gói Lifetime bh 2 năm, gói 1-3 năm bh 1 năm",
    image: "./img/edraw_mind_max_3nam.png",
  },
  {
    id: 119,
    name: "Notion Plus Edu - 1 năm",
    category: "Công việc",
    price: 150000,
    originalPrice: 150000,
    service: "Tài khoản riêng tư",
    description:
      "Không giới hạn Dung lượng tải lên tệp, lịch sử 30 ngày, invite member,...",
    image: "./img/notion_plus_edu_1nam.png",
  },
  {
    id: 120,
    name: "Notion Plus - 1 tháng",
    category: "Công việc",
    price: 120000,
    originalPrice: 120000,
    service: "Nâng cấp trên tk chính chủ",
    description: "",
    image: "./img/notion_plus_1thang.png",
  },
  {
    id: 121,
    name: "Notion Business - 1 tháng",
    category: "Công việc",
    price: 199000,
    originalPrice: 199000,
    service: "Nâng cấp trên tk chính chủ",
    description: "",
    image: "./img/notion_business_1thang.png",
  },
  {
    id: 122,
    name: "Notion Plus + AI - 1 tháng",
    category: "Công việc",
    price: 299000,
    originalPrice: 299000,
    service: "Nâng cấp trên tk chính chủ",
    description: "",
    image: "./img/notion_plus_ai_1thang.png",
  },
  {
    id: 123,
    name: "Air Explorer PRO - Lifetime",
    category: "Công việc",
    price: 750000,
    originalPrice: 750000,
    service: "Nâng cấp trên tk chính chủ",
    description: "Tạo ổ đĩa lưu trữ Cloud trên máy tính, nâng cấp chính chủ",
    image: "./img/air_explorer_pro.png",
  },
  {
    id: 124,
    name: "Camscanner Edu - 1 năm",
    category: "Công việc",
    price: 75000,
    originalPrice: 75000,
    service: "Nâng cấp trên tk chính chủ",
    description: "Không quảng cáo, không Watermark, 2GB Cloud",
    image: "./img/camscanner_edu_1nam.png",
  },
  {
    id: 125,
    name: "Windscribe - 1 năm",
    category: "VPN / Antivirus",
    price: 899000,
    originalPrice: 899000,
    service: "Nâng cấp trên tk chính chủ",
    description: "Full tính năng",
    image: "./img/windscribe_1nam.png",
  },
  {
    id: 126,
    name: "PIA VPN - 1 tháng",
    category: "Học tập / Giáo dục",
    price: 150000,
    originalPrice: 150000,
    service: "VPN / Antivirus",
    description: "Unlimited Devices",
    image: "./img/pia_vpn_1thang.png",
  },
  {
    id: 127,
    name: "PIA VPN - 1 năm",
    category: "VPN / Antivirus",
    price: 950000,
    originalPrice: 950000,
    service: "Nâng cấp trên tk chính chủ",
    description: "Unlimited Devices",
    image: "./img/pia_vpn_1nam.png",
  },
  {
    id: 128,
    name: "Surfshark VPN - 3 tháng",
    category: "VPN / Antivirus",
    price: 150000,
    originalPrice: 150000,
    service: "Code",
    description: "Code 3 tháng hoặc nâng cấp tk chính chủ ( acc mới tạo )",
    image: "./img/surfshark_3thang.png",
  },
  {
    id: 129,
    name: "Surfshark VPN - 1 năm",
    category: "VPN / Antivirus",
    price: 999000,
    originalPrice: 999000,
    service: "Nâng cấp trên tk chính chủ",
    description: "",
    image: "./img/surfshark_1nam.png",
  },
  {
    id: 130,
    name: "Surfshark VPN - 2 năm",
    category: "VPN / Antivirus",
    price: 1399000,
    originalPrice: 1399000,
    service: "Nâng cấp trên tk chính chủ",
    description: "",
    image: "./img/surfshark_2nam.png",
  },
  {
    id: 131,
    name: "Pure VPN - 1 năm",
    category: "VPN / Antivirus",
    price: 330000,
    originalPrice: 330000,
    service: "Tài khoản riêng tư",
    description: "Account private, đổi pass thoải mái",
    image: "./img/pure_vpn_1nam.png",
  },
];

const bestsellerProducts = [
  products[2],
  products[4],
  products[5],
  products[6],
  products[27],
  products[32],
  products[35],
  products[37],
  products[39],
  products[50],
  products[55],
  products[59],
  products[64],
  products[69],
  products[95],
  products[100],
  products[111],
  products[113],
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
    product.price == product.originalPrice
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
