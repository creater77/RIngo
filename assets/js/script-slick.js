$(document).ready(function() {
  $('.slider2').slick({
    centerMode: true,
    infinite: true,
    variableWidth: true,
    adaptiveHeight: true,
    arrows: true,
    draggable: false,
    speed: 900,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 501,
        settings: {
          arrows: false,
          dots: true,
          touchMove: true,
        }
      },
    ]
  });
});
