const ClinicMasterCarousel = function () {
  const handleClientSwiper = () => {
    const swiperEl = document.querySelector(".client-swiper");
    if (!swiperEl) return;

    new Swiper(".client-swiper", {
      loop: true,
      slidesPerView: 5,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        1200: {
          slidesPerView: 6,
        },
        991: {
          slidesPerView: 4,
        },
        575: {
          slidesPerView: 3,
        },
        320: {
          slidesPerView: 2,
        },
      },
    });
  };

  const BlogSlideshowSwiper = () => {
    const swiperEl = document.querySelector(".blog-slideshow");
    if (!swiperEl) return;

    new Swiper(".blog-slideshow", {
      loop: true,
      spaceBetween: 0,
      slidesPerView: "auto",
      speed: 1500,
      autoplay: {
        delay: 2000,
      },
      pagination: {
        el: ".swiper-pagination-two",
        clickable: true,
      },
    });
  };

  if (
    document.querySelector(".galley-thumb-swiper") &&
    document.querySelector(".galley-swiper")
  ) {
    const swiperThumbs = new Swiper(".galley-thumb-swiper", {
      loop: false,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });

    new Swiper(".galley-swiper", {
      loop: true,
      spaceBetween: 10,
      thumbs: {
        swiper: swiperThumbs,
      },
    });
  }


  const handleVerticalSwiper = () => {
    const blogVerticalSwiper = document.querySelector(".blog-vertical-swiper");

    if (blogVerticalSwiper) {
      const teamSwiperThumb = new Swiper(".blog-vertical-swiper-thumb", {
        direction: "vertical",
        slidesPerView: 3,
        mousewheel: false,
        spaceBetween: 10,
        autoplay: {
          delay: 3000,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            direction: "horizontal",
          },
          767: {
            slidesPerView: 2,
            direction: "vertical",
          },
          1191: {
            slidesPerView: 3,
          },
        },
      });

      new Swiper(".blog-vertical-swiper", {
        slidesPerView: 1,
        effect: "fade",
        grabCursor: true,
        thumbs: {
          swiper: teamSwiperThumb,
        },
        navigation: {
          nextEl: ".blog-swiper-next",
          prevEl: ".blog-swiper-prev",
        },
      });
    }
  };

  const handleTestimonialSwiper3 = () => {
    const swiperEl = document.querySelector(".testimonial-swiper3");
    if (!swiperEl) return;

    new Swiper(".testimonial-swiper3", {
      loop: true,
      spaceBetween: 0,
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".testimonial-pagination-swiper3",
        clickable: true,
      },
    });
  };

  const handleCompareSwiper = () => {
    const compareSwiperEl = document.querySelector(".compare-swiper");

    if (!compareSwiperEl) return;

    const compareSwiper = new Swiper(".compare-swiper", {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 20,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: ".compare-swiper-next",
        prevEl: ".compare-swiper-prev",
      },
      pagination: {
        el: ".compare-pagination-swiper",
        type: "progressbar",
      },
      breakpoints: {
        1481: {
          slidesPerView: 4.4,
        },
        1280: {
          slidesPerView: 4,
        },
        991: {
          slidesPerView: 3.5,
        },
        320: {
          slidesPerView: 2,
        },
      },
    });

    const paginationContainer = document.querySelector(
      ".compare-slider__pagination"
    );
    if (paginationContainer) {
      const currentEl = document.querySelector(".compare-slider__current");
      const totalEl = document.querySelector(".compare-slider__total");

      const updatePagination = () => {
        const totalSlides =
          compareSwiperEl.querySelectorAll(".swiper-slide").length;
        let current = compareSwiper.realIndex + 1;

        if (current > totalSlides) current = 1;

        const idx = current < 10 ? "0" + current : current;
        const tdx = totalSlides < 10 ? "0" + totalSlides : totalSlides;

        if (currentEl) currentEl.textContent = idx;
        if (totalEl) totalEl.textContent = tdx;
      };

      updatePagination();
      compareSwiper.on("slideChange", updatePagination);
    }
  };

  return {
    load() {
      handleClientSwiper();
      BlogSlideshowSwiper();
      handleVerticalSwiper();
      handleTestimonialSwiper3();
      handleCompareSwiper();
    },
  };
};

window.addEventListener("load", function () {
  ClinicMasterCarousel().load();
});
