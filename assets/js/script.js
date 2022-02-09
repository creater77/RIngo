//dark
const dark = document.querySelector('.dark');

// header
const html = document.querySelector("html");
const body = document.querySelector("body");

function scrollPage(activeElement) {
  if (activeElement.classList.contains("active")) {
    html.style.overflow = "hidden";
  } else {
    html.style.overflow = "scroll";
  }
}

const navToggle = document.querySelector('.nav__toggle');
const darkActive = document.querySelector('.dark');
const navContainerItem = document.querySelector('.nav__container__item');

// slider
const images = document.querySelectorAll('.slider .slider__line img');
const indicatorsParents = document.querySelector('.slider__menu ul');
const sliderLine = document.querySelector('.slider__line');
const nextSlideBtn = document.querySelector('#nextSlide');
let count = 0;

// animation img
const main4Img = document.querySelectorAll('.main4--img');

// agreement
const radioBtn = document.querySelectorAll('.square-radio');

//popup
const popupBg = document.querySelector('.popup--bg');
const popupGif = document.querySelector('.popup--gif');
const popupCross = document.querySelectorAll('.popup--cross');
const popupPartner = document.querySelector('.popup--partner');
const gifBtn = document.querySelector('#gif__btn');
const partnerBtn = document.querySelectorAll('#partner__btn');


navToggle.addEventListener("click", function(){
  this.classList.toggle("active");
  darkActive.classList.toggle("active");
  navContainerItem.classList.toggle("active");

  scrollPage(navToggle);
});

//remove active, navToggle, navContainerItem, dark
dark.addEventListener("click", function() {
  this.classList.remove("active");
  navContainerItem.classList.remove("active");
  navToggle.classList.remove("active");
  html.style.overflow = "scroll";
})

//sizing img to slider
function init() {
  width = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = width * images.length + 'px';
  images.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });

  rollSlider();
}

window.addEventListener('resize', init);
init();

// prevSlide
document.querySelector('#prevSlide').addEventListener("click", function() {
  count--;
  if(count < 0) {
    count = images.length - 1;
  }
  rollSlider();
})

// nextSlide
nextSlideBtn.addEventListener("click", nextSlide);

function nextSlide() {
  count++;
  if(count >= images.length) {
    count = 0;
  }
  rollSlider();
}

// scrolling slider
function rollSlider() {
  sliderLine.style.transform = 'translate(-'+count * width +'px)';
  document.querySelector('.slider__options__navigation .active').classList.remove('active');
  indicatorsParents.children[count].classList.add("active");
}

// autoplay slider
setInterval(nextSlide , 6000);

// animation img
function changeWidthImg() {
  for (let i = 0; i < main4Img.length; i++) {
    main4Img[i].classList.add("active");
  }
}

window.addEventListener("scroll", function() {
  if(window.pageYOffset >= 2168) {
    changeWidthImg();
  }
})

window.removeEventListener("scroll", function() {
  if(window.pageYOffset >= 2168) {
    changeWidthImg();
  }
})

// agreement
for (let i = 0; i < radioBtn.length; i++) {
  radioBtn[i].addEventListener("click", function() {
    this.classList.toggle("square-radio__clicked");
  })
}

//popup
for (let i = 0; i < popupCross.length; i++) {
  popupCross[i].addEventListener('click', () => {
    popupBg.classList.remove('active');
    popupGif.classList.remove('active');
    popupPartner.classList.remove('active');

    html.style.overflow = "scroll";
  })
}

// visible gifPopup
function openGifPopup() {
  popupBg.classList.toggle('active');
  popupGif.classList.toggle('active');

  scrollPage(popupGif);
}

gifBtn.addEventListener("click", openGifPopup);

// visible partnerPopup
function openPartnerPopup() {
  popupBg.classList.toggle('active');
  popupPartner.classList.toggle('active');

  scrollPage(popupPartner);
}

for (let i = 0; i < partnerBtn.length; i++) {
  partnerBtn[i].addEventListener("click", openPartnerPopup);
}
