// menu nav oprn-close toggle button
const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");

const menuNav = document.querySelector(".menu-nav");
const menuList = document.querySelector(".menu-nav__list");
const signupBtn = document.querySelector(".signup__btn");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (showMenu === false) {
    hamburger.classList.add("open");
    document.body.style.overflowY = "hidden";
    signupBtn.classList.add("open");
    menuNav.classList.add("open");
    menuList.classList.add("open");

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    document.body.style.overflowY = "auto";
    signupBtn.classList.remove("open");
    menuNav.classList.remove("open");
    menuList.classList.remove("open");

    showMenu = false;
  }
}

// accordion main page
const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);
accordionItemHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    header.classList.toggle("active");
    const itemBody = header.nextElementSibling;
    if (header.classList.contains("active")) {
      itemBody.style.maxHeight = itemBody.scrollHeight + "px";
    } else {
      itemBody.style.maxHeight = 0;
    }
  });
});

// swiper
const swiper = new Swiper(".swiper", {
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});
