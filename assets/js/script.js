$(document).ready(function () {
  // Hero Slick
  $('.innovate-hero__slick-parent').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    arrows: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  });

  //Tab Bar
  $(document).ready(function () {
    $('.innovate-tab').click(function () {
      $(".tab").removeClass('tab-active');
      $(".tab[data-id='" + $(this).attr('data-id') + "']").addClass("tab-active");
      $(".innovate-tab").removeClass('active-a');
      $(this).parent().find(".innovate-tab").addClass('active-a');
    });
  });
});