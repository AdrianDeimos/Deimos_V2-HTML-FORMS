// Function to scroll to section
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Function to add item to cart
function addToCart(item) {
    var cartItems = document.getElementById('cart-items');
    var newItem = document.createElement('li');
    newItem.textContent = item;
    cartItems.appendChild(newItem);

    alert(item + ' added to cart.');
}


document.getElementById('JapaneseHeader').addEventListener('click', function() {
    scrollToSection('Japanese');
});

document.getElementById('ItalianHeader').addEventListener('click', function() {
    scrollToSection('Italian');
});

document.getElementById('IndianHeader').addEventListener('click', function() {
    scrollToSection('Indian');
});

document.getElementById('FilipinoHeader').addEventListener('click', function() {
    scrollToSection('Filipino');
});

function goBack() {
    window.history.back();
}

