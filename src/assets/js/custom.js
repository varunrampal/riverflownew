const ClinicMaster = (function () {
  "use strict";

  const handlePricingTabs = () => {
    const toggleTabs = document.querySelector(".toggle-tabs");

    if (!toggleTabs) return;

    const priceYear = document.querySelectorAll(".pricingtable-price.year");
    const priceMonth = document.querySelectorAll(".pricingtable-price.month");

    priceYear.forEach((el) => (el.style.display = "none"));

    const toggleTabsMonthly = toggleTabs.querySelector(".monthly");
    const toggleTabsYearly = toggleTabs.querySelector(".yearly");

    if (toggleTabsMonthly) {
      toggleTabsMonthly.addEventListener("click", () => {
        toggleTabs.classList.add("monthly");
        toggleTabs.classList.remove("yearly");

        priceMonth.forEach((el) => (el.style.display = "block"));
        priceYear.forEach((el) => (el.style.display = "none"));
      });
    }

    if (toggleTabsYearly) {
      toggleTabsYearly.addEventListener("click", () => {
        toggleTabs.classList.add("yearly");
        toggleTabs.classList.remove("monthly");

        priceMonth.forEach((el) => (el.style.display = "none"));
        priceYear.forEach((el) => (el.style.display = "block"));
      });
    }
  };

  const handleTouchSpin = () => {
    function incrementValue(e) {
      e.preventDefault();
      const button = e.target.closest("[data-field]");
      const fieldName = button.getAttribute("data-field");

      const parent = button.closest("div") || button.closest("td");
      const input = parent.querySelector(`input[name="${fieldName}"]`);

      let currentVal = parseInt(input.value, 10);
      input.value = !isNaN(currentVal) ? currentVal + 1 : 0;
    }

    function decrementValue(e) {
      e.preventDefault();
      const button = e.target.closest("[data-field]");
      const fieldName = button.getAttribute("data-field");

      const parent = button.closest("div") || button.closest("td");
      const input = parent.querySelector(`input[name="${fieldName}"]`);

      let currentVal = parseInt(input.value, 10);
      input.value = !isNaN(currentVal) && currentVal > 0 ? currentVal - 1 : 0;
    }

    document.querySelectorAll(".input-group").forEach((group) => {
      group.addEventListener("click", function (e) {
        const target = e.target.closest(".button-plus, .button-minus");
        if (!target) return;

        if (target.classList.contains("button-plus")) {
          incrementValue(e);
        } else if (target.classList.contains("button-minus")) {
          decrementValue(e);
        }
      });
    });
  };

  const handleSetCurrentYear = () => {
    const currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let elements = document.getElementsByClassName("current-year");

    for (const element of elements) {
      element.innerHTML = currentYear;
    }
  };

  const handledzNumber = () => {
    const dzNumber = document.querySelectorAll(".dz-number");

    if (dzNumber) {
      dzNumber.forEach(function (element) {
        element.addEventListener("input", function () {
          const inputVal = element.value;
          const numericVal = inputVal.replace(/\D/g, "");

          if (numericVal.length > 10) {
            element.value = numericVal.slice(0, 10);
          } else {
            element.value = numericVal;
          }
        });
      });
    }
  };

  const handleLightGallery = () => {
    const lightGallery1 = document.getElementById("lightgallery");

    if (lightGallery1) {
      lightGallery(lightGallery1, {
        plugins: [lgThumbnail, lgZoom],
        selector: ".lg-item",
        thumbnail: true,
        exThumbImage: "data-src",
      });
    }
  };

  const handleBoxHover = () => {
    const wrappers = document.querySelectorAll(".box-hover-wrapper");
    if (!wrappers.length) return;

    wrappers.forEach((wrapper) => {
      wrapper.addEventListener("mouseover", (e) => {
        const card = e.target.closest(".box-hover");
        if (!card || !wrapper.contains(card)) return;

        wrapper
          .querySelectorAll(".box-hover.active")
          .forEach((c) => c.classList.remove("active"));

        card.classList.add("active");
      });
    });
  };

  const handleCounterJS = function () {
    const counters = document.querySelectorAll(".value");
    const speed = 200;

    const runCounter = (counter) => {
      const target = +counter.getAttribute("data-value");
      let current = 0;
      const increment = target / speed;

      const update = () => {
        current += increment;
        if (current < target) {
          counter.innerText = Math.ceil(current);
          requestAnimationFrame(update);
        } else {
          counter.innerText = target;
        }
      };

      update();
    };

    const isInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    const handleScroll = () => {
      counters.forEach((counter) => {
        if (!counter.classList.contains("counted") && isInViewport(counter)) {
          counter.classList.add("counted");
          runCounter(counter);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
  };

  const handleNavScroller = () => {
    let previousScroll = 0;

    window.addEventListener("scroll", () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        const body = document.body;
        const extraNav = document.querySelector(".extra-nav");
        if (!extraNav) return;

        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const innerHeight = window.innerHeight;
        const scrollHeight = body.scrollHeight;

        if (scrollTop + innerHeight >= scrollHeight) {
          extraNav.classList.add("bottom-end");
        } else {
          extraNav.classList.remove("bottom-end");
        }

        if (scrollTop > previousScroll) {
          extraNav.classList.add("active");
        } else {
          extraNav.classList.remove("active");
        }

        previousScroll = scrollTop;
      }
    });
  };

  const handleSupport = () => {
    const script = document.createElement("script");
    script.id = "DZScript";
    script.src = "https://dzassets.s3.amazonaws.com/w3-global.js";
    document.body.appendChild(script);
  };

  const handleCustomSelects = () => {
    document.querySelectorAll(".dynamic-select").forEach((selectElement) => {
      createCustomSelectFromSelect(selectElement);
    });
  };

  const createCustomSelectFromSelect = (selectElement) => {
    const selectId =
      selectElement.id || `select-${Math.random().toString(36).substr(2, 9)}`;
    const customSelectDiv = document.createElement("div");
    customSelectDiv.id = `custom-${selectId}`;
    customSelectDiv.className = "custom-select";

    const selectedDiv = document.createElement("div");
    selectedDiv.className = "select-selected";
    selectedDiv.textContent = (
      selectElement.querySelector("option[selected]") ||
      selectElement.options[0]
    ).textContent;

    const labelText = selectElement.parentElement?.dataset?.label || "";
    if (labelText) {
      const label = document.createElement("span");
      label.textContent = labelText;
      selectedDiv.appendChild(label);
    }

    customSelectDiv.appendChild(selectedDiv);

    const itemsDiv = document.createElement("div");
    itemsDiv.className = "select-items select-hide";
    customSelectDiv.appendChild(itemsDiv);

    Array.from(selectElement.options).forEach((option) => {
      const customOptionDiv = document.createElement("div");
      customOptionDiv.className = "select-item";
      customOptionDiv.setAttribute("data-value", option.value);
      customOptionDiv.textContent = option.textContent;
      if (option.selected) customOptionDiv.classList.add("active");

      customOptionDiv.addEventListener("click", function () {
        selectedDiv.childNodes[0].textContent = this.textContent;
        selectElement.value = this.getAttribute("data-value");
        selectElement.dispatchEvent(new Event("change"));
        selectElement.dispatchEvent(new Event("click"));

        itemsDiv.classList.add("select-hide");
        selectedDiv.classList.remove("select-active");

        itemsDiv
          .querySelectorAll(".select-item")
          .forEach((item) => item.classList.remove("active"));
        this.classList.add("active");
      });

      itemsDiv.appendChild(customOptionDiv);
    });

    selectElement.style.display = "none";
    selectElement.parentNode.insertBefore(
      customSelectDiv,
      selectElement.nextSibling
    );

    selectedDiv.addEventListener("click", function (e) {
      e.stopPropagation();
      itemsDiv.classList.toggle("select-hide");
      selectedDiv.classList.toggle("select-active");
    });

    document.addEventListener("click", function (e) {
      if (!customSelectDiv.contains(e.target)) {
        itemsDiv.classList.add("select-hide");
        selectedDiv.classList.remove("select-active");
      }
    });
  };

  const handleAccordion = (container = document) => {
    const accordionContainers = container.querySelectorAll(".myAccordion");

    accordionContainers.forEach((accordion) => {
      if (accordion.dataset.bound === "true") return;
      accordion.dataset.bound = "true";

      accordion.addEventListener("click", function (e) {
        const header = e.target.closest(".accordion-header");
        if (!header || !accordion.contains(header)) return;

        const item = header.parentElement;
        const content = item.querySelector(".accordion-content");
        const arrow = header.querySelector(".arrow");
        const isOpen = header.classList.contains("open");

        accordion.querySelectorAll(".accordion-header").forEach((h) => {
          if (h !== header) {
            h.classList.remove("open");
            h.querySelector(".arrow")?.classList.remove("active");
            const c = h.parentElement.querySelector(".accordion-content");
            if (c) c.style.maxHeight = null;
          }
        });

        if (!isOpen) {
          header.classList.add("open");
          content.style.maxHeight = content.scrollHeight + "px";
          arrow?.classList.add("active");
        } else {
          header.classList.remove("open");
          content.style.maxHeight = null;
          arrow?.classList.remove("active");
        }
      });
    });

    container.querySelectorAll(".accordion-header.open").forEach((header) => {
      const content = header.parentElement.querySelector(".accordion-content");
      const arrow = header.querySelector(".arrow");
      if (content) {
        content.style.maxHeight = content.scrollHeight + "px";
        arrow?.classList.add("active");
      }
    });
  };

  const handleVideoPopupJS = function () {
    const dialog = document.getElementById("videoDialog");
    const container = document.getElementById("videoContainer");
    const closeBtn = document.getElementById("closeBtn");
    const videoWrapper = document.body;

    if (!dialog || !container || !closeBtn) return;

    const onOpenVideo = (e) => {
      const button = e.target.closest("button[data-type]");
      if (!button) return;

      const type = button.getAttribute("data-type");
      const src = button.getAttribute("data-src");

      if (!type || !src) return;

      openVideo(type, src);
    };

    const openVideo = (type, src) => {
      let videoHTML = "";

      if (type === "youtube" || type === "vimeo") {
        const sanitizedSrc = encodeURI(src);
        videoHTML = `<iframe src="${sanitizedSrc}?autoplay=1" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>`;
      } else if (type === "mp4") {
        videoHTML = `<video controls autoplay><source src="${src}" type="video/mp4">Your browser does not support the video tag.</video>`;
      }

      container.innerHTML = videoHTML;
      dialog.style.display = "flex";
    };

    const closeVideo = () => {
      container.innerHTML = "";
      dialog.style.display = "none";
    };

    videoWrapper.addEventListener("click", onOpenVideo);
    closeBtn.addEventListener("click", closeVideo);

    return () => {
      videoWrapper.removeEventListener("click", onOpenVideo);
      closeBtn.removeEventListener("click", closeVideo);
    };
  };

  const handleTabs = () => {
    const tabContainers = document.querySelectorAll(".custom-tab");

    tabContainers.forEach((container) => {
      const titles = container.querySelectorAll(".tab-title");
      const contents = container.querySelectorAll(".tab-content");

      titles[0]?.classList.add("active");
      contents[0]?.classList.add("active");
      handleAccordion(contents[0]);

      container.addEventListener("click", (e) => {
        const clicked = e.target.closest(".tab-title");
        if (!clicked || !container.contains(clicked)) return;

        titles.forEach((t, i) => {
          const isActive = t === clicked;
          t.classList.toggle("active", isActive);
          contents[i].classList.toggle("active", isActive);

          if (isActive) {
            handleAccordion(contents[i]);
          }
        });
      });
    });
  };

  const handleStarRating = () => {
    const starRatingElements = document.querySelectorAll(".star-rating-old");
    if (starRatingElements.length > 0) {
      new StarRating(".star-rating-old");
    }
  };

  const handleMasonryBox = () => {
    const masonryEl = document.querySelector("#masonry, .masonry");
    const filters = document.querySelector(".filters");

    if (!masonryEl) return;

    // read gutter + columnWidth from data attributes
    const gutter = parseInt(masonryEl.dataset.gutter || 0, 10);
    const columnWidth = masonryEl.dataset.columnWidth
      ? parseInt(masonryEl.dataset.columnWidth, 10)
      : ".card-container";

    imagesLoaded(masonryEl, () => {
      // init isotope with masonry layout
      const iso = new Isotope(masonryEl, {
        itemSelector: ".card-container",
        layoutMode: "masonry",
        masonry: {
          gutter: gutter,
          columnWidth: columnWidth,
        },
        transitionDuration: "0.4s",
      });

      // setup filters if exist
      if (filters) {
        const first = filters.querySelector("li:first-child");
        if (first) first.classList.add("active");

        filters.addEventListener("click", (e) => {
          const li = e.target.closest("li");
          if (!li) return;

          // toggle active class
          filters
            .querySelectorAll("li")
            .forEach((el) => el.classList.remove("active"));
          li.classList.add("active");

          // get filter value
          let filterValue = li.dataset.filter || "*";
          if (filterValue === "all") filterValue = "*";

          iso.arrange({ filter: filterValue });
        });
      }
    });
  };

  const handleCountdown = () => {
    const counter = document.querySelector("#countdown");
    if (!counter) return;

    const countDownClock = (number = 100, format = "seconds") => {
      const d = document;
      const daysElement = d.querySelector("#countdown .days");
      const hoursElement = d.querySelector("#countdown .hours");
      const minutesElement = d.querySelector("#countdown .minutes");
      const secondsElement = d.querySelector("#countdown .seconds");
      let countdown;
      convertFormat(format);

      function convertFormat(format) {
        switch (format) {
          case "seconds":
            return timer(number);
          case "minutes":
            return timer(number * 60);
          case "hours":
            return timer(number * 60 * 60);
          case "days":
            return timer(number * 60 * 60 * 24);
        }
      }

      function timer(seconds) {
        const now = Date.now();
        const then = now + seconds * 1000;

        countdown = setInterval(() => {
          const secondsLeft = Math.round((then - Date.now()) / 1000);

          if (secondsLeft <= 0) {
            clearInterval(countdown);
            return;
          }

          displayTimeLeft(secondsLeft);
        }, 1000);
      }

      function displayTimeLeft(seconds) {
        daysElement.textContent = Math.floor(seconds / 86400);
        hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
        minutesElement.textContent = Math.floor(
          ((seconds % 86400) % 3600) / 60
        );
        secondsElement.textContent =
          seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
      }
    };
    countDownClock(20, "days");
  };

  const handleBeforeAfterSlider = () => {
    document.querySelectorAll(".before-after-slider").forEach((container) => {
      const slider = container.querySelector(".slider");
      if (!slider) return;

      slider.addEventListener("input", (e) => {
        container.style.setProperty("--position", `${e.target.value}%`);
      });
    });
  };

  const handleTextChar = () => {
    document.querySelectorAll(".word-rotate").forEach((el) => {
      const chars = el.textContent.split("");
      const step = 360 / chars.length;

      const container = el.closest(".word-rotate-box, .word-rotate-box2");
      if (!container) return;

      chars.forEach((char, i) => {
        const span = document.createElement("span");
        span.className = "text-char";
        span.style.setProperty("--char-rotate", `${i * step}deg`);
        span.textContent = char;
        container.appendChild(span);
      });

      el.remove();
    });
  };

  var handleFlexWrapper = function () {
    const flexItem = document.querySelectorAll(
      ".dz-flex-wrapper .dz-flex-item"
    );

    if (flexItem) {
      flexItem.forEach(function (element) {
        element.addEventListener("click", function () {
          flexItem.forEach(function (item) {
            item.classList.remove("active");
          });
          element.classList.add("active");
        });
      });
    }
  };

  /* Function ============ */
  return {
    init() {
      handlePricingTabs();
      handleTouchSpin();
      handleStarRating();
      handleSetCurrentYear();
      handledzNumber();
      handleLightGallery();
      handleBoxHover();
      handleCounterJS();
      handleNavScroller();
      // handleSupport();
      handleCustomSelects();
      handleAccordion();
      handleVideoPopupJS();
      handleTabs();
      handleMasonryBox();
      handleCountdown();
      handleBeforeAfterSlider();
      handleTextChar();
      handleFlexWrapper();
    },

    load() {},

    resize() {},
  };
})();

document.addEventListener("DOMContentLoaded", function () {
  ClinicMaster.init();
});

window.addEventListener("load", function () {
  ClinicMaster.load();
  const dzPreloader = document.getElementById("dzPreloader");
  setTimeout(function () {
    if (dzPreloader) {
      dzPreloader.remove();
    }
  }, 1000);
  document.body.addEventListener("keydown", function () {
    document.body.classList.add("show-focus-outline");
  });
  document.body.addEventListener("mousedown", function () {
    document.body.classList.remove("show-focus-outline");
  });
});

window.addEventListener("resize", function () {
  ClinicMaster.resize();
});
