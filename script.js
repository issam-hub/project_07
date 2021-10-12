// Scroll To Top
let btn = document.querySelector(".scroll-btn");

window.onscroll = function () {
  if (window.scrollY >= 900) {
    btn.style.opacity = "1";
  } else {
    btn.style.opacity = "0";
  }
};
btn.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

// Scroll To Services
let scrolll = document.querySelector(".scroll");
let services = document.querySelector(".services");
scrolll.addEventListener("click", function () {
  services.scrollIntoView({ behavior: "smooth" });
});

// when you click on the logo it opens the Main Page
let logo = document.querySelector(".header img");
let logo2 = document.querySelector(".footer img");
logo.addEventListener("click", function () {
  window.open("https://issam-hub.github.io/project_07/", "_self");
});
logo2.addEventListener("click", function () {
  window.open("https://issam-hub.github.io/project_07/", "_self");
});

// autoplay the video
let video = document.querySelector(".video video");
let videoBtn = document.querySelector(".video .btn");

videoBtn.onmouseenter = function () {
  video.play();
};
videoBtn.onmouseout = function () {
  video.pause();
};
