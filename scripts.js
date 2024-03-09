const toggleMode = document.getElementById("toggle-mode");
const notDark = document.querySelectorAll(".not-dark");

let toggle = false;

toggleMode.addEventListener("click", () => {
  if (toggle) {
    toggleMode.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    toggle = false;
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
    notDark.forEach((element) => {
      element.classList.add("light-mode");
      element.classList.remove("dark-mode");
    });
  } else {
    toggleMode.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    toggle = true;
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
    notDark.forEach((element) => {
      element.classList.add("dark-mode");
      element.classList.remove("light-mode");
    });
  }
});

// slider
const slider = document.getElementById("slider");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const countItem = document.getElementById("count-item");

let images = ["1.jpeg", "2.jpg", "3.jpg", "4.webp", "5.jpg", "6.jpg", "7.webp"];
let sliderNo = 0;

next.addEventListener("click", () => {
  if (sliderNo < images.length - 1) {
    sliderNo++;
  } else {
    sliderNo = 0;
  }
  slider.style.backgroundImage = `url('imgs/${images[sliderNo]}')`;
  countItem.textContent = `${sliderNo + 1} / ${images.length}`;
});

prev.addEventListener("click", () => {
  if (sliderNo >= 1) {
    sliderNo--;
  } else {
    sliderNo = images.length - 1;
  }
  slider.style.backgroundImage = `url('imgs/${images[sliderNo]}')`;
  countItem.textContent = `${sliderNo + 1} / ${images.length}`;
});

countItem.textContent = `${sliderNo + 1} / ${images.length}`;

// show / hide effects
const effectsBtn = document.getElementById("effects-btn");
const paragraph = document.getElementById("paragraph");

let isParagraph = true;

effectsBtn.addEventListener("click", () => {
  if (isParagraph) {
    paragraph.style.display = "none";
    isParagraph = false;
    effectsBtn.innerHTML = `Show More`;
  } else if (!isParagraph) {
    paragraph.style.display = "block";
    isParagraph = true;
    effectsBtn.innerHTML = `Show Less`;
  }
});

// burger menu
const burgerMenu = document.getElementsByClassName("fa-bars")[0];
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementsByClassName("fa-xmark")[0];
const headerLogo = document.getElementById("logo");

burgerMenu.addEventListener("click", () => {
  mobileMenu.style.cssText = "display: block !important";
  burgerMenu.style.cssText = "display: none !important";
  headerLogo.style.cssText = "display: none";

  closeMenu.addEventListener("click", () => {
    mobileMenu.style.cssText = "display: none !important";
    burgerMenu.style.cssText = "display: block !important";
    headerLogo.style.cssText = "display: block";
  });
});
