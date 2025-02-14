  $(document).ready(function() {
    const photoCarousel = $(".owl-carousel");
    photoCarousel.owlCarousel({
        items: 1,
        loop: true,
    });

   const arrowPrev = $(".test-arrow-left"); 
   const arrowNext = $(".test-arrow-right"); 

   arrowPrev.click(function () {
    photoCarousel.trigger("prev.owl.carousel");
   });

   arrowNext.click(function () {
    photoCarousel.trigger("next.owl.carousel");
   });
  });

const Finsweet = document.querySelectorAll(".faq");

Finsweet.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});