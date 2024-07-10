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
			{ index: 1, content: '<a href="https://github.com/SimonDesc/order_nest"><div class="carousel-slide"><img src="./assets/order_nest.png" alt="Order Nest" />Order Nest</div></a>' },
			{ index: 2, content: '<a href="https://github.com/SimonDesc/LiDAR_EldaTechnology"><div class="carousel-slide"><img src="./assets/elda_snow_depth1.gif" alt="Snow Depth" />Snow Depth</div></a>' },
			{ index: 3, content: '<a href="https://galerielibrecours.fr/"><div class="carousel-slide"><img src="./assets/art_gallery.png" alt="Art Gallery" />Art Gallery</div></a>' }
		]
	};
}
