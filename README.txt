OUR MEMORIES - HTML TEMPLATE
============================

1. MỞ WEB
---------
Double click file:
    index.html

2. ĐỔI ẢNH COVER
----------------
Thay file:
    assets/images/cover.jpg

3. CHỈNH NỘI DUNG
-----------------
Mở:
    data/memories.js

Bạn có thể sửa:
- Tên website
- Ngày bắt đầu
- Timeline
- Gallery
- Video
- Letter

4. THÊM ẢNH GALLERY
-------------------
Copy ảnh vào:
    assets/images/

Sau đó thêm trong galleryImages:

    { src: "assets/images/ten-anh.jpg", caption: "Nội dung ảnh" },

5. THÊM TIMELINE
----------------
Thêm vào memories:

    {
      date: "2026-08-07",
      title: "Đà Lạt",
      description: "Một chuyến đi đáng nhớ.",
      image: "assets/images/dalat.jpg"
    },

6. THÊM VIDEO
-------------
Copy MP4 vào:
    assets/videos/

Thêm vào memoryVideos:

    {
      src: "assets/videos/dalat.mp4",
      poster: "assets/images/dalat-cover.jpg",
      title: "Da Lat",
      description: "Chuyến đi Đà Lạt"
    }

7. THÊM NHẠC
------------
Copy file MP3 vào:
    assets/music/

Đổi tên thành:
    background.mp3

LƯU Ý:
Trình duyệt điện thoại thường không cho nhạc tự chạy.
Người xem cần bấm nút ♪ một lần để phát nhạc.

8. ĐƯA LÊN INTERNET
-------------------
Source này có thể deploy bằng:
- GitHub Pages
- Netlify
- Cloudflare Pages

Không cần Node.js, không cần build.
