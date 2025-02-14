const pricing = document.querySelectorAll(".faq");

pricing.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});