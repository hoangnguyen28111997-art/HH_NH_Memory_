document.addEventListener("DOMContentLoaded", () => {
  applySiteConfig();
  renderTimeline();
  renderGallery();
  renderVideos();
  startCounter();
  setupReveal();
  setupMenu();
  setupMusic();
  setupLightbox();
  setupBackToTop();
  setupHeroSlideshow();
  setupAutoMusic();
  setupVideoMusicControl();

  window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("page-loader")?.classList.add("hidden");
    }, 350);
  });
});

function applySiteConfig() {
  document.getElementById("heroTitle").textContent = siteConfig.heroTitle;
  document.getElementById("heroSubtitle").textContent = siteConfig.heroSubtitle;
  document.getElementById("anniversaryText").textContent = siteConfig.anniversaryText;
  document.getElementById("letterContent").textContent = siteConfig.letter;
  document.getElementById("letterSignature").textContent = siteConfig.signature;
  document.title = siteConfig.heroTitle;
}

function formatDate(dateString) {
  const d = new Date(dateString + "T00:00:00");
  return d.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}

function renderTimeline() {
  const root = document.getElementById("timeline");
  root.innerHTML = "";

  memories
    .slice()
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .forEach(memory => {
      const item = document.createElement("article");
      item.className = "timeline-item reveal";

      item.innerHTML = `
        <span class="timeline-dot"></span>
        <div class="timeline-date">${formatDate(memory.date)}</div>
        <div class="timeline-card">
          ${memory.image ? `<img class="timeline-cover" src="${memory.image}" alt="${memory.title}" loading="lazy">` : ""}
          <h3>${memory.title}</h3>
          <p>${memory.description}</p>
        </div>
      `;

      root.appendChild(item);
    });
}

/*
function renderGallery() {
  const root = document.getElementById("galleryGrid");
  root.innerHTML = "";

  galleryImages.forEach((image, index) => {
    const item = document.createElement("figure");
    item.className = "gallery-item reveal";
    item.dataset.index = index;

    item.innerHTML = `
      <img src="${image.src}" alt="${image.caption || "Memory"}" loading="lazy">
      <figcaption class="gallery-caption">${image.caption || ""}</figcaption>
    `;

    root.appendChild(item);
  });
}
*/

////////////////////////////
////////////////////////////
////////////////////////////Huy Hoàng đã sửa đoạn này hehe
let currentAlbum = null;
let currentPhotos = [];

function renderGallery() {

  const root = document.getElementById("galleryGrid");

  // Trở về chế độ danh sách album kéo ngang
  root.classList.remove("album-open");

  root.innerHTML = "";

  albums.forEach((album, index) => {

    const item = document.createElement("div");
    item.className = "album-card reveal";

    const coverIndexes = album.coverPhotos || [1, 2, 3];

	const photos = coverIndexes
	  .map(number => album.photos[number - 1])
	  .filter(Boolean);

    item.innerHTML = `

      <div class="album-collage">

        ${photos.map((photo, photoIndex) => `
          <img
            src="${photo}"
            class="album-cover-photo photo-${photoIndex + 1}"
            loading="lazy"
            alt="${album.title}"
          >
        `).join("")}

      </div>


      <div class="album-overlay">

        <div class="album-info">

          <span class="album-date">
            ${album.date ? formatDate(album.date) : ""}
          </span>

          <h3>
            ${album.title}
          </h3>

          <p>
            ${album.description || ""}
          </p>

          <span class="album-count">
            ${album.photos.length} ảnh
          </span>

        </div>

      </div>
    `;

    item.addEventListener("click", () => {
      openAlbum(index);
    });

    root.appendChild(item);

  });

  setupReveal();
}

function openAlbum(albumIndex) {

  currentAlbum = albums[albumIndex];
  currentPhotos = currentAlbum.photos;

  const root = document.getElementById("galleryGrid");
  // Chuyển sang chế độ xem ảnh bên trong album
  root.classList.add("album-open");
  root.innerHTML = `
    <button id="backToAlbums" class="back-albums-btn">
	  <span class="back-icon">←</span>
	  <span>Quay lại Photobook</span>
	</button>

      <h2>${currentAlbum.title}</h2>

      <p>${currentAlbum.description || ""}</p>

      <span>
        ${currentAlbum.photos.length} ảnh
      </span>
    </div>

    <div
      id="albumPhotos"
      class="album-photo-grid">
    </div>
  `;

  const photoRoot =
    document.getElementById("albumPhotos");

  currentPhotos.forEach((photo, index) => {

    const item = document.createElement("div");

    item.className = "gallery-item";

    item.innerHTML = `
      <img
        src="${photo}"
        loading="lazy"
        alt="${currentAlbum.title}">
    `;

    item.addEventListener("click", () => {
      openAlbumLightbox(index);
    });

    photoRoot.appendChild(item);
  });

  document
    .getElementById("backToAlbums")
    .addEventListener("click", () => {
      renderGallery();
    });
}
////////////////////////////
////////////////////////////
////////////////////////////


function renderVideos() {
  const root = document.getElementById("videoGrid");
  root.innerHTML = "";

  memoryVideos.forEach(video => {
    const card = document.createElement("article");
    card.className = "video-card reveal";

    card.innerHTML = `
      <video controls preload="metadata" ${video.poster ? `poster="${video.poster}"` : ""}>
        <source src="${video.src}" type="video/mp4">
        Trình duyệt của bạn không hỗ trợ video.
      </video>
      <div class="video-copy">
        <h3>${video.title || "Memory video"}</h3>
        <p>${video.description || ""}</p>
      </div>
    `;

    root.appendChild(card);
  });
}

function startCounter() {
  const start = new Date(siteConfig.relationshipStart);

  const update = () => {
    let diff = Date.now() - start.getTime();
    if (diff < 0) diff = 0;

    const days = Math.floor(diff / 86400000);
    diff %= 86400000;
    const hours = Math.floor(diff / 3600000);
    diff %= 3600000;
    const minutes = Math.floor(diff / 60000);
    diff %= 60000;
    const seconds = Math.floor(diff / 1000);

    document.getElementById("daysCount").textContent = days.toLocaleString("vi-VN");
    document.getElementById("hoursCount").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutesCount").textContent = String(minutes).padStart(2, "0");
    document.getElementById("secondsCount").textContent = String(seconds).padStart(2, "0");
  };

  update();
  setInterval(update, 1000);
}

function setupReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

function setupMenu() {
  const button = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");

  // Bấm 3 gạch -> mở / đóng menu
  button.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Bấm vào một mục -> đóng menu
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });

  // Cuộn trang -> tự động đóng menu
  window.addEventListener("scroll", () => {
    nav.classList.remove("open");
  });
}

function setupMusic() {
  const audio = document.getElementById("backgroundMusic");
  const button = document.getElementById("musicButton");
  const label = document.getElementById("musicLabel");

  button.addEventListener("click", async () => {
    try {
      if (audio.paused) {
        await audio.play();
        button.classList.add("playing");
        label.textContent = "Pause music";
      } else {
        audio.pause();
        button.classList.remove("playing");
        label.textContent = "Play music";
      }
    } catch (error) {
      alert("Hãy thêm file assets/music/background.mp3 trước.");
    }
  });
}

function setupLightbox() {

  const box = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImage");
  const caption = document.getElementById("lightboxCaption");

  let currentIndex = 0;


  // Hàm được gọi khi click một ảnh trong Album
  window.openAlbumLightbox = function(index) {

    if (!currentPhotos || currentPhotos.length === 0) {
      return;
    }

    currentIndex = index;

    show(currentIndex);

    box.classList.add("open");

    box.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "lightbox-open"
    );
  };


  function show(index) {

    if (!currentPhotos || currentPhotos.length === 0) {
      return;
    }

    currentIndex =
      (index + currentPhotos.length)
      % currentPhotos.length;

    img.src =
      currentPhotos[currentIndex];

    caption.textContent =
      `${currentAlbum.title} • ${currentIndex + 1}/${currentPhotos.length}`;
  }


  function close() {

    box.classList.remove("open");

    box.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove(
      "lightbox-open"
    );
  }


  // Close
  document
    .getElementById("lightboxClose")
    .addEventListener(
      "click",
      close
    );


  // Previous
  document
    .getElementById("lightboxPrev")
    .addEventListener(
      "click",
      () => show(currentIndex - 1)
    );


  // Next
  document
    .getElementById("lightboxNext")
    .addEventListener(
      "click",
      () => show(currentIndex + 1)
    );


  // Click ra ngoài ảnh để đóng
  box.addEventListener(
    "click",
    e => {

      if (e.target === box) {
        close();
      }

    }
  );


  // Keyboard
  document.addEventListener(
    "keydown",
    e => {

      if (!box.classList.contains("open")) {
        return;
      }

      if (e.key === "Escape") {
        close();
      }

      if (e.key === "ArrowLeft") {
        show(currentIndex - 1);
      }

      if (e.key === "ArrowRight") {
        show(currentIndex + 1);
      }

    }
  );

}

function setupBackToTop() {
  const btn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 500);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
function setupHeroSlideshow() {

  const slides = document.querySelectorAll(".hero-slide");

  if (!slides.length || !heroImages.length) {
    return;
  }

  let imageIndex = 0;
  let slideIndex = 0;

  // Hiện ảnh đầu tiên ngay lập tức
  slides[0].style.backgroundImage =
    `url("${heroImages[0]}")`;

  slides[0].classList.add("active");

  setInterval(() => {

    const currentSlide = slides[slideIndex];

    imageIndex =
      (imageIndex + 1) % heroImages.length;

    slideIndex =
      (slideIndex + 1) % slides.length;

    const nextSlide = slides[slideIndex];

    nextSlide.style.backgroundImage =
      `url("${heroImages[imageIndex]}")`;

    nextSlide.classList.add("active");

    currentSlide.classList.remove("active");

  }, 6000);
}

function setupAutoMusic() {
  const music = document.getElementById("backgroundMusic");

  if (!music) return;

  music.volume = 0.5;

  // Thử autoplay khi mở trang
  music.play().catch(() => {
    console.log("Autoplay bị trình duyệt chặn");
  });

  async function startMusic() {
    try {
      await music.play();

      // Chỉ xóa listener khi phát thành công
      document.removeEventListener("pointerdown", startMusic);
      document.removeEventListener("touchend", startMusic);
      document.removeEventListener("click", startMusic);

    } catch (error) {
      console.log("Chưa thể phát nhạc");
    }
  }

  document.addEventListener("pointerdown", startMusic);
  document.addEventListener("touchend", startMusic);
  document.addEventListener("click", startMusic);
}

function setupVideoMusicControl() {
  const music = document.getElementById("backgroundMusic");
  const videos = document.querySelectorAll(".video-card video");

  if (!music || videos.length === 0) return;

  videos.forEach(video => {

    // Khi video bắt đầu chạy
    video.addEventListener("play", () => {

      // Dừng các video khác nếu đang chạy
      videos.forEach(otherVideo => {
        if (otherVideo !== video && !otherVideo.paused) {
          otherVideo.pause();
        }
      });

      // Tạm dừng nhạc nền
      if (!music.paused) {
        music.pause();
      }
    });

    // Khi pause video
    video.addEventListener("pause", () => {
      resumeMusic();
    });

    // Khi video chạy hết
    video.addEventListener("ended", () => {
      resumeMusic();
    });
  });

  function resumeMusic() {

    // Kiểm tra còn video nào đang phát không
    const videoStillPlaying =
      [...videos].some(video => !video.paused && !video.ended);

    if (!videoStillPlaying) {
      music.play().catch(() => {
        console.log("Không thể tự phát lại nhạc");
      });
    }
  }
}
