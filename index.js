const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".order__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".event__content", {
  duration: 1000,
});

document.addEventListener("DOMContentLoaded", function() {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const slideWidth = slides[0].getBoundingClientRect().width;

  // Arrange slides next to each other
  const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
  };
  slides.forEach(setSlidePosition);

  // Function to move slides
  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
  };

  // Next/Prev Slide Buttons
  const nextButton = document.querySelector('.carousel-next');
  const prevButton = document.querySelector('.carousel-prev');

  let currentSlide = track.querySelector('.current-slide');
  nextButton.addEventListener('click', e => {
    const currentIndex = slides.findIndex(slide => slide === currentSlide);
    const nextSlide = slides[currentIndex + 1];
    moveToSlide(track, currentSlide, nextSlide);
    currentSlide = nextSlide;
  });

  prevButton.addEventListener('click', e => {
    const currentIndex = slides.findIndex(slide => slide === currentSlide);
    const prevSlide = slides[currentIndex - 1];
    moveToSlide(track, currentSlide, prevSlide);
    currentSlide = prevSlide;
  });
});

$(document).ready(function() {
  // Activate the carousel with custom interval
  $('.carousel').carousel({
    interval: 2000 // Adjust the interval to 3000 milliseconds (3 seconds)
  });
});

$(document).ready(function() {
  // Initialize cart count
  var cartCount = 0;
  
  // Function to handle adding to cart
  $('.add-to-cart').click(function() {
    // Get item name
    var itemName = $(this).data('item');
    
    // Increment cart count
    cartCount++;
    
    // Update cart count display
    $('.cart-count').text(cartCount);
    
    // Example: Display a confirmation message
    alert('Added ' + itemName + ' to cart!');
  });
});

var orderButton = document.querySelector('.order');

        // Function to redirect to another link
        function redirectToLink() {
            // Get the link from the 'data-link' attribute of the button
            var link = orderButton.getAttribute('data-link');
            // Check if the link is not empty
            if (link) {
                // Redirect to the specified link
                window.location.href = link;
            } else {
                console.error("No link specified.");
            }
        }

        // Attach click event listener to the button
        orderButton.addEventListener('click', redirectToLink);