document.addEventListener("DOMContentLoaded", () => {
  //Event listener for the Carousel
  //3 query seletors for our buttons and our slide
  const product_container = document.querySelector(".featured_container");
  const next_btn = document.querySelector(".next_btn");
  const prev_btn = document.querySelector(".prev_btn");

  // variable that stores the width of the screen so we can make the scrolling responsive depending on the screen size
  let itemWidth = product_container.querySelector(".img_card").offsetWidth;

  //event for clicking the next button
  next_btn.addEventListener("click", () => {
    product_container.scrollBy({
      //scroll by the images
      left: itemWidth,
      behavior: "smooth",
    });
  });
  //same logic as with the next button
  prev_btn.addEventListener("click", () => {
    product_container.scrollBy({
      left: -itemWidth,
      behavior: "smooth",
    });
  });

  // Update itemWidth dynamically on resize
  window.addEventListener("resize", () => {
    itemWidth = product_container.querySelector(".img_card").offsetWidth;
  });
});
