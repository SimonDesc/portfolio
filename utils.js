document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the date for the footer
	const footer = document.getElementById('footer');
	const content = document.createTextNode(new Date().getFullYear().toString());
	footer.prepend(content);
	footer.prepend('©');
	
    // Burger menu
    const btn = document.querySelector(".mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");

    if (btn) {
        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });
	}
	

});

// Carousel
function carouselData() {
	return {
		activeSlide: 1,
		slides: [
			{ index: 1, content: '<div class="carousel-slide">Order Nest</div>' },
			{ index: 2, content: '<div class="carousel-slide">Switch 2 Electric</div>' },
			{ index: 3, content: '<div class="carousel-slide">Art Galerie</div>' }
		]
	};
}
