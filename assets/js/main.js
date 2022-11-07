
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// about
(function () {
  "use strict";

  // Vertical Slider object
  const vertical_slider = {

      // Slide class name
      slider_class: ".slider",

      // Show slide
      show_slide: function (slide_id, context_item) {
          const slide_container = context_item.closest(this.slider_class).querySelector(".slides");
          if (slide_container) {
              const slides = slide_container.querySelectorAll(".slide");
              if (slides && slides[slide_id]) {

                  // Scroll to active slide
                  slide_container.scrollTo({
                      top: slides[slide_id].offsetTop,
                      behavior: "smooth"
                  });


                  // Set active context item
                  const active_context_item = context_item.closest(".slide_navigation").querySelector(".active");
                  if (active_context_item) {
                      active_context_item.classList.remove("active");
                  }

                  context_item.classList.add("active");
              }
          }
      },

      // Initialize slide
      init_slider: function (slider) {

          const navigation_items = slider.querySelectorAll(".slide_navigation a");

          if (navigation_items) {
              Object.keys(navigation_items).forEach(function (key) {
                  navigation_items[key].onclick = function (e) {
                      e.preventDefault();

                      vertical_slider.show_slide(key, navigation_items[key]);
                  };
              });
          }

      },

      // Initialize sliders
      init: function () {

          // Iterate over each slider
          document.querySelectorAll(this.slider_class).forEach((slider) => this.init_slider(slider));

      }
  };

  // Initialize sliders
  vertical_slider.init();
}());
// clients
 
// featured
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})