// ===============================
// CHỈNH NỘI DUNG WEBSITE Ở FILE NÀY
// ===============================

const siteConfig = {
  heroTitle: "Huy Hoàng ♥ Ngọc Huyền",
  heroSubtitle: "Cùng xem lại những khoảnh khắc tuyệt vời nhất của chúng ta",

  // Format: YYYY-MM-DDTHH:mm:ss
  relationshipStart: "2023-08-19T00:00:00",

  anniversaryText: "Mỗi ngày bên nhau của chúng ta là một món quà.",

  letter: `Bà chả hơm ơiiiiii,
  
  Cảm ơn iem đã đến bên anh, từ ngày em đến đã làm anh thay đổi rất nhiều, không còn tâm trạng ủ rủ, lúc nào cũng vui tươi, không còn xề xòa nữa, biết chăm chút bản thân, nhưng thay đổi lớn nhất là không còn cô đơn nữa hí hí híiiii
  Em thấy anh giỏi hăm, tự làm nguyên trang web này luôn ó, mà cũng có chút giúp sức của AI, bữa nay AI giỏi lắm luôn á, có thể làm được mọi thứ luôn, nhưng có một thứ AI không thể làm được, đó là tình cảm anh dành cho em, từng dòng tâm sự, từng dòng tin nhắn anh đều do tự tay viết ra, có thể nó không hay, không văn chương bằng, nhưng tất cả đều là những tình cảm chân thành mà anh muốn dành cho em. Mong là chúng ta luôn dành cho nhau những tình cảm chân thành nhất cho dù cuộc sống này vẫn còn nhiều bộn bề, vẫn còn nhiều khó khăn, có đôi lúc mình không hiểu nhau, có đôi lúc mình mâu thuẫn, có đôi lúc cãi vả, nhưng chân thành là thứ giữ chúng ta ở lại, vượt qua khó khăn để có thể cùng nhau đồng hành trên con đường phía trước.
  Con đường phía trước còn nhiều khó khăn, còn nhiều rào cản. Anh hy vọng chúng ta sẽ luôn bên cạnh nhau, cùng nhau nắm tay vượt qua và đón nhận những món quà mà cuộc sống giành cho mình.
  
  Thương em nèeeeeee ♥♥♥`,

  signature: "Huy Hoàng ♥ Ngọc Huyền"
};

// Muốn thêm timeline: copy một block { ... } rồi sửa nội dung.
// image có thể để "" nếu chưa muốn dùng ảnh.

const heroImages = [  
  "assets/images/1st_anni.jpg",
  "assets/images/2nd_anni.jpg",
  "assets/images/anni.jpg",
  "assets/images/anni.jpg"
];


const memories = [
  {
    date: "2023-08-18",
    title: "Đây là ngày cuối cuộc đời độc thân của mình",
    description: "Hôm nay khó làm mình mới hẹn được em đi coi kịch, lúc chở em về trong người cứ bồn chồn, muốn bày tỏ tình cảm của mình với em, nhưng cuối cùng cũng không dám thổ lộ.",
    image: "assets/images/before_.jpg"
  },
  {
    date: "2023-08-19",
    title: "Ngày tụi mình chính thức hẹn hò",
    description: "Hôm qua về mình cứ bồn chồn khó chịu trong người, nên hôm nay mình nhất định phải thổ lộ tình cảm với em. Hơn 10h, mình đứng trước cửa đợi em đi làm thêm về, mình đứng cùng em rất lâu, bối rối không dám nói ra tình cảm của mình. Gần 12h đêm, em không đủ kiên nhẫn nữa, định bỏ vào nhà, lúc đó mình mới dám lấy hết dũng khí để thổ lộ tình cảm của mình với em. Cảm ơn em đã đến với anh.",
    image: "assets/images/anni.jpg"
  },
  {
    date: "2024-08-19",
    title: "Kỷ niệm 1 năm ngày chúng ta bắt đầu hẹn hò",
    description: "Hôm nay là ngày mình tròn 1 năm bên nhau. Lúc mới bắt đầu, anh sợ đủ thứ, sợ không biết mình sẽ yêu nhau như thế nào, không biết có thể làm được 1 người yêu tốt không, không biết mình sẽ yêu nhau bao lâu. Một năm tuy không phải là quãng thời gian quá dài, nhưng giúp mình biết được mình bên nhau vì điều gì, có thể vì nhau mà bỏ qua, thông cảm cho khiếm khuyết của đối phương. Một năm chỉ mới là bước khởi đầu, hy vọng vào ngày này mỗi năm, chúng ta vẫn còn được ngồi lại bên nhau, cùng xem lại những kỷ niệm và nhắc cho nhau lý do mình bên nhau vì điều gì.",
    image: "assets/images/1st_anni.jpg"
  },
  {
    date: "2025-08-19",
    title: "Vậy là chúng ta đã ở bên nhau được 2 năm rồi hý hý",
    description: "Chúng ta đã bên nhau được 2 năm rồi nè. Hai năm với nhiều sự vui buồn, có lúc cãi vả nhưng mình đã cùng nhau vượt qua. Quãng thời gian 2 năm đủ để anh nhận ra chúng ta quan trọng với nhau, anh nhận ra nếu không có nhau bên cạnh sẽ đáng sợ như nào cho dù có nhiều lúc mình vẫn còn bất đồng quan điểm, vẫn còn có những trận cãi vả lớn, nhưng đó là lúc mình hiểu nhau nhiều hơn và muốn gắn bó với nhau lâu hơn.",
    image: "assets/images/2nd_anni.jpg"
  },
  {
    date: "2026-05-14",
    title: "Đây là ngày thứ 999 chúng mình yêu nhau",
    description: "Lúc mới yêu nhau, mọi người hay trêu đùa, là mình yêu đủ 1000 ngày thì mới được cưới. Lúc đó anh không dám nghĩ mình có thể yêu nhau đến ngày đó không, nhưng rồi mình cũng đã chạm được tới cột mốc đó. Dù con đường phía trước không còn dễ dàng, nhưng anh sẽ cố gắng cố gắng từng ngày để sớm có thể đón em về làm cô dâu của anh. Yêu em ♥",
    image: "assets/images/999days_anni.jpg"
  },
  {
    date: "2026-08-19",
    title: "Hôm nay là ngày chúng ta yêu nhau tròn 3 năm",
    description: "Vậy là chúng ta đã bên nhau được 3 năm rồi, quãng thời gian tuy không quá dài nhưng cũng không phải ngắn. Cảm ơn em đã ở lại bên cạnh anh dù anh còn nhiều điểm chưa tốt, nhiều lúc còn làm em buồn, em khóc nữa. Anh hy vọng, chặng đường tiếp theo của chúng ta dù còn nhiều khó khăn, thử thách nhưng chúng ta vẫn luôn ở đây, cùng nhau viết tiếp những ngày tháng sau này.",
    image: "assets/images/box_gift.png"
  }
];

// Gallery: có thể thêm bao nhiêu ảnh cũng được.
//const galleryImages = [
//  { src: "assets/images/gallery-01.jpg", caption: "Memory #1" },
//  { src: "assets/images/gallery-02.jpg", caption: "Memory #2" },
//  { src: "assets/images/gallery-03.jpg", caption: "Memory #3" },
//  { src: "assets/images/gallery-04.jpg", caption: "Memory #4" },
//  { src: "assets/images/gallery-05.jpg", caption: "Memory #5" },
//  { src: "assets/images/gallery-06.jpg", caption: "Memory #6" }
//];

// Gallery: có thể thêm bao nhiêu albums ảnh cũng được.
const albums = [
  {
    title: "First Date",
    //date: "  ",
    //cover: "assets/images/vungtau-2025/cover.jpg",
	//coverPhotos: [1, 2, 4]
    description: "Buổi hẹn hò đầu tiên sau khi mình chính thức yêu nhauuuu",
    photos: [
      "assets/images/1st_date/01.jpg",
      "assets/images/1st_date/02.jpg",
	  "assets/images/1st_date/10.jpg",
	  "assets/images/1st_date/03.jpg",
	  "assets/images/1st_date/04.jpg",
	  "assets/images/1st_date/05.jpg",
	  "assets/images/1st_date/06.jpg",
	  "assets/images/1st_date/07.jpg",
	  "assets/images/1st_date/08.jpg",
	  "assets/images/1st_date/09.jpg"
    ]
  },
  {
    title: "Sinh nhật Huy Hoàng",
    date: "2023-11-28",
    //cover: "assets/images/vungtau-2025/cover.jpg",
	//coverPhotos: [1, 2, 4]
    description: "Ngọc Huyền tổ chức sinh nhật cho Huy Hoàng nèeeee",
    photos: [
      "assets/images/SN_HH_2023/01.jpg",
      "assets/images/SN_HH_2023/02.jpg",
      "assets/images/SN_HH_2023/03.jpg",
      "assets/images/SN_HH_2023/04.jpg",
	  "assets/images/SN_HH_2023/05.jpg",
	  "assets/images/SN_HH_2023/06.jpg",
      "assets/images/SN_HH_2023/07.jpg",
      "assets/images/SN_HH_2023/08.jpg",
      "assets/images/SN_HH_2023/09.jpg",
	  "assets/images/SN_HH_2023/10.jpg"
    ]
  },
  {
    title: "Sinh Nhật Ngọc Huyền",
    date: "2024-04-04",
    //cover: "assets/images/vungtau-2025/cover.jpg",
	//coverPhotos: [1, 2, 4]
    description: "Ghen tỵ với Ngọc Huyền quá, được đón sinh nhật 21 tuổi với trai đẹppppp",
    photos: [
      "assets/images/SN_NH_2024/01.jpg",
      "assets/images/SN_NH_2024/02.jpg",
      "assets/images/SN_NH_2024/03.jpg",
      "assets/images/SN_NH_2024/04.jpg",
	  "assets/images/SN_NH_2024/05.jpg",
	  "assets/images/SN_NH_2024/06.jpg",
      "assets/images/SN_NH_2024/07.jpg",
      "assets/images/SN_NH_2024/08.jpg",
      "assets/images/SN_NH_2024/09.jpg",
	  "assets/images/SN_NH_2024/10.jpg"
    ]
  },
  {
    title: "Về quê Ngọc Huyền",
    //date: "2024",
    //cover: "assets/images/vungtau-2025/cover.jpg",
	//coverPhotos: [1, 2, 4]
    description: "Lần đầu Ngọc Huyền dẫn Huy Hoàng về nhà ba mẹ",
    photos: [
      "assets/images/1st_Ve_Que/01.jpg",
      "assets/images/1st_Ve_Que/02.jpg",
      "assets/images/1st_Ve_Que/03.jpg",
      "assets/images/1st_Ve_Que/04.jpg",
	  "assets/images/1st_Ve_Que/05.jpg",
	  "assets/images/1st_Ve_Que/06.jpg",
    ]
  },
  {
    title: "Đi chụp hình Noellll",
    //date: "2024",
    //cover: "assets/images/vungtau-2025/cover.jpg",
	//coverPhotos: [1, 2, 4]
    description: "Huy dẫn Ngọc Huyền đi chụp hình Noellll",
    photos: [
      "assets/images/Noel/01.jpg",
      "assets/images/Noel/02.jpg",
      "assets/images/Noel/03.jpg",
      "assets/images/Noel/04.jpg",
	  "assets/images/Noel/05.jpg",
	  "assets/images/Noel/06.jpg",
    ]
  },
  {
    title: "Thảo Cầm Viên",
    //date: "2024",
    //cover: "assets/images/vungtau-2025/cover.jpg",
	//coverPhotos: [1, 2, 4]
    description: "Đi Thảo Cầm Viên chụp hình hôngggg",
    photos: [
      "assets/images/ThaoCamVien/01.jpg",
      "assets/images/ThaoCamVien/02.jpg",
      "assets/images/ThaoCamVien/03.jpg",
      "assets/images/ThaoCamVien/04.jpg",
	  "assets/images/ThaoCamVien/05.jpg",
	  "assets/images/ThaoCamVien/06.jpg",
      "assets/images/ThaoCamVien/07.jpg",
      "assets/images/ThaoCamVien/08.jpg",
      "assets/images/ThaoCamVien/09.jpg",
	  "assets/images/ThaoCamVien/10.jpg"
    ]
  },
  {
    title: "Đà Lạt 2025",
    //date: "2024",
    //cover: "assets/images/vungtau-2025/cover.jpg",
	//coverPhotos: [1, 2, 4]
    description: "Chuyến đi Đà Lạt đầu tiên của tụi mình nèeee",
    photos: [
      "assets/images/2024_DaLat/01.jpg",
      "assets/images/2024_DaLat/02.jpg",
      "assets/images/2024_DaLat/03.jpg",
      "assets/images/2024_DaLat/04.jpg",
	  "assets/images/2024_DaLat/05.jpg",
	  "assets/images/2024_DaLat/06.jpg",
      "assets/images/2024_DaLat/07.jpg",
      "assets/images/2024_DaLat/08.jpg",
      "assets/images/2024_DaLat/09.jpg",
	  "assets/images/2024_DaLat/10.jpg"
    ]
  },
  {
    title: "Hồ Tràm 2025",
    //date: "2024",
    //cover: "assets/images/vungtau-2025/cover.jpg",
	//coverPhotos: [1, 2, 4]
    description: "Đi Hồ Tràm hông zui lắm nèeee",
    photos: [
      "assets/images/Ho_Tram/10.jpg",
      "assets/images/Ho_Tram/04.jpg",
      "assets/images/Ho_Tram/03.jpg",
      "assets/images/Ho_Tram/06.jpg",
	  "assets/images/Ho_Tram/05.jpg",
	  "assets/images/Ho_Tram/02.jpg",
      "assets/images/Ho_Tram/07.jpg",
      "assets/images/Ho_Tram/08.jpg",
      "assets/images/Ho_Tram/09.jpg",
	  "assets/images/Ho_Tram/01.jpg"
    ]
  }  
];

// Video: đặt file MP4 vào assets/videos rồi khai báo ở đây.
const memoryVideos = [
  {
    src: "assets/videos/Xem_Kich.mp4",
    //poster: "assets/videos/Poster_HA_HD.png",
    title: "Lần đầu đi coi kịch với iempeiuuuu",
    description: " "
  },
  {
    src: "assets/videos/1st_anni.mp4",
    //poster: "assets/videos/Poster_HA_HD.png",
    title: "Kỷ niệm 1 năm của tụi mìnhhhhhh",
    description: " "
  },
  {
    src: "assets/videos/2nd_anni.mp4",
    //poster: "assets/videos/Poster_HA_HD.png",
    title: "Mình yêu nhao được 2 năm gòi nèeeee",
    description: " "
  },
  {
    src: "assets/videos/Hahaha.mp4",
    //poster: "assets/videos/Poster_2nd_DL.png",
    title: "Hahaha mắc cừi quáaaa",
    description: " "
  },
  {
    src: "assets/videos/1st_DaLat.mp4",
    //poster: "assets/videos/Poster_2nd_DL.png",
    title: "Lần đầu tụi mình đi Đà Lạt",
    description: " "
  },
  {
    src: "assets/videos/DN_BaNa.mp4",
    //poster: "assets/videos/Poster_2nd_DL.png",
    title: "Đi Bà Nà Hill hoyyyyy",
    description: " "
  },
  {
    src: "assets/videos/Bien_Hong.mp4",
    poster: "assets/videos/Poster_DN.png",
    title: "Biển Đà Nẵng nữa nèeee",
    description: " "
  },
  {
    src: "assets/videos/HoiAn_HoaDang.mp4",
    poster: "assets/videos/Poster_HA_HD.png",
    title: "Thả hoa đăng ở Hội An",
    description: " "
  },
  {
    src: "assets/videos/Sieu_Thi.mp4",
    //poster: "assets/videos/Poster_2nd_DL.png",
    title: "Đi siu thị hônggggg",
    description: " "
  },
  {
    src: "assets/videos/Cho_Que.mp4",
    //poster: "assets/videos/Poster_2nd_DL.png",
    title: "Đi chợ quê ăn vặt hônggggg",
    description: " "
  },
  {
    src: "assets/videos/2nd_DaLat.mp4",
    poster: "assets/videos/Poster_2nd_DL.png",
    title: "Lần thứ 2 mình đi Đà Lạt",
    description: " "
  },
  {
    src: "assets/videos/Binh_Minh_VT.mp4",
    //poster: "assets/videos/Poster_HB.png",
    title: "Bình minh Vũng Tàu thật yên bình",
    description: " "
  },
  {
    src: "assets/videos/Danh_Dan.mp4",
    //poster: "assets/videos/Poster_HB.png",
    title: "Mãi như vậy nhaaaaa",
    description: " "
  },
  {
    src: "assets/videos/CountDown_2025.mp4",
    //poster: "assets/videos/Poster_HB.png",
    title: "Đi Countdown hônggggg",
    description: " "
  },
  {
    src: "assets/videos/Di_Bao.mp4",
    //poster: "assets/videos/Poster_HB.png",
    title: "Việt Nam vô địch",
    description: " "
  },
    {
    src: "assets/videos/Thao_Cam_Vien.mp4",
    poster: "assets/videos/Poster_TCV.png",
    title: "Đi Thảo Cầm Viên ngắm thú",
    description: " "
  },
  {
    src: "assets/videos/Nha_Trang.mp4",
    poster: "assets/videos/Poster_NT.png",
    title: "Đi Nha Trang nèeee",
    description: " "
  },
  {
    src: "assets/videos/Ho_Tram.mp4",
    poster: "assets/videos/Poster_HT.png",
    title: "Kỷ niệm Hồ Tràm",
    description: " "
  },  
  {
    src: "assets/videos/Hoc_Bai.mp4",
    poster: "assets/videos/Poster_HB.png",
    title: "Đang làm cái gì vậy taaaa",
    description: " "
  },
];
