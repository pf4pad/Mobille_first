$('.top-slider').slick({
  dots: true,
  speed: 500,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/next.svg" alt="Next arrow"></button>',
  prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/prev.svg" alt="Prev arrow"></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        
      }
    },
    {
      breakpoint: 640,
      settings: {
       arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        
      }
    }
    
  ]
});