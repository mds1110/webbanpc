// data.js

export const products = [
    {
      id: 1,
      name: 'PC FASTER GAMING 10400F - RTX 3050 6GB',
      price: 9990000,
      oldPrice: 11990000,
      discount: 17,
      desc: '+2 RAM',
      img: '../img/pc1.png',
      images: ['../img/pc1.png', '../img/pc1.png', '../img/pc1.png'],
      ramOptions: ['16GB', '32GB'],
      ssdOptions: ['256GB', '512GB'],
      description: 'Cấu hình mạnh mẽ cho game thủ với CPU Intel Core i5 và card đồ họa RTX 3050.'
    },
    {
      id: 2,
      name: 'PC GAMING i5 12400F - GTX 1660',
      price: 8900000,
      oldPrice: 10500000,
      discount: 15,
      desc: '+ SSD 512GB',
      img: '../img/pc2.png',
      images: ['../img/pc1.png', '../img/b.jpg', '../img/pc1.png'],
      ramOptions: ['8GB', '16GB'],
      ssdOptions: ['256GB', '512GB'],
      description: 'Máy tính gaming tầm trung với hiệu năng ổn định và giá hợp lý.'
    },
    {
      id: 3,
      name: 'PC GAMING RTX 3060 12GB - 12400F',
      price: 10900000,
      oldPrice: 12900000,
      discount: 15,
      desc: '+16GB RAM',
      img: '../img/pc3.png',
      images: ['../img/pc1.png', '../img/b.jpg', '../img/pc1.png'],
      ramOptions: ['16GB', '32GB'],
      ssdOptions: ['512GB', '1TB'],
      description: 'PC mạnh mẽ cho cả chơi game và làm việc với chip Ryzen 5 và RTX 3060.'
    },
    {
      id: 4,
      name: 'PC GAMING RYZEN 5 5600X - RTX 3060',
      price: 10900000,
      oldPrice: 12900000,
      discount: 15,
      desc: '+16GB RAM',
      img: '../img/pc5.png',
      images: ['../img/pc4.png', '../img/b.jpg', '../img/pc1.png'],
      ramOptions: ['16GB', '32GB'],
      ssdOptions: ['512GB', '1TB'],
      description: 'PC mạnh mẽ cho cả chơi game và làm việc với chip Ryzen 5 và RTX 3060.'
    },
    {
      id: 5,
      name: 'PC GAMING RYZEN 5 5600X - RTX 3060',
      price: 10900000,
      oldPrice: 12900000,
      discount: 15,
      desc: '+16GB RAM',
      img: '../img/pc1.png',
      images: ['../img/pc1.png', '../img/b.jpg', '../img/pc1.png'],
      ramOptions: ['16GB', '32GB'],
      ssdOptions: ['512GB', '1TB'],
      description: 'PC mạnh mẽ cho cả chơi game và làm việc với chip Ryzen 5 và RTX 3060.'
    }
  ];
  
  // Lưu vào LocalStorage để trang chi tiết có thể truy cập được
  localStorage.setItem("products", JSON.stringify(products));
  
  // Tin tức (nếu bạn dùng)
  export const news = [
    {
      id: 1,
      title: 'Ra mắt dòng PC Gaming 2025',
      short: 'Khám phá hiệu năng đỉnh cao với CPU Intel mới nhất.',
      content: `Dòng PC Gaming 2025 được trang bị vi xử lý Intel thế hệ 14, kết hợp với GPU RTX 5090. Đây là lựa chọn tối ưu cho game thủ và streamer chuyên nghiệp.`,
      img: '../img/news1.jpg'
    },
    {
      id: 2,
      title: 'Khuyến mãi mùa hè lên đến 50%',
      short: 'Chương trình giảm giá khủng cho tất cả các sản phẩm PC.',
      content: `Chúng tôi triển khai chương trình "Hè rực cháy - Giá bốc hơi" với mức giảm giá lên tới 50% từ 1/6 - 30/6. Cơ hội vàng để nâng cấp máy tính.`,
      img: '../img/news2.jpg'
    },
    {
      id: 3,
      title: 'Cập nhật linh kiện AMD Ryzen 9000',
      short: 'Bộ xử lý mới nhất từ AMD đã có mặt tại cửa hàng.',
      content: `AMD vừa công bố dòng chip Ryzen 9000 với kiến trúc Zen 5, mang lại hiệu suất cao hơn đến 35%. Bạn đã sẵn sàng nâng cấp?`,
      img: '../img/news3.jpg'
    }
  ];
  localStorage.setItem("news", JSON.stringify(news));
  