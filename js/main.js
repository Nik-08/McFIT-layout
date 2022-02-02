let burger = document.querySelector(".header__burger"),
  navBar = document.querySelector(".header__nav"),
  politics = document.querySelector(".politics"),
  header = document.querySelector(".header");

burger.addEventListener("click", () => {
  navBar.classList.toggle("active__nav");
  burger.classList.toggle("active__burger");
  header.classList.toggle("active__header");
  if (politics) {
    politics.classList.toggle("active__page");
  }
});

window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width: 1024px)").matches) {
    navBar.classList.remove("active__nav");
    burger.classList.remove("active__burger");
    header.classList.remove("active__header");
    if (politics) {
      politics.classList.remove("active__page");
    }
  }
});

$(".single-item").slick({
  dots: true,
  slidesToScroll: 1,
  arrows: false,
});

let flippers = document.querySelectorAll(".flipper");

flippers.forEach((flipper) => {
  flipper.addEventListener("click", () => {
    flipper.classList.toggle("active__flipper");
  });
});

$(".responsive").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  arrows: false,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1441,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
});

let cookies = document.querySelector(".cookies"),
  cookies__btn = document.querySelectorAll(".cookies__btn");

cookies__btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    localStorage.setItem("accepted", 1);
    if (localStorage.accepted === "1") {
      cookies.style.display = "none";
    }
  });
});

if (localStorage.accepted === "1") {
  cookies.style.display = "none";
}
