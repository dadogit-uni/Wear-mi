// Toggle burger menu for mobile
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});



// Search bar functionality
const searchBar = document.getElementById('searchBar');
const productCards = document.querySelectorAll('.product-card');

searchBar.addEventListener('keyup', (e) => {
    const searchValue = e.target.value.toLowerCase();
    
    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        // const productDescription = card.querySelector('p').textContent.toLowerCase();        //these 2 lines check for 'name' and 'desc'
        // if (productName.includes(searchValue) || productDescription.includes(searchValue)) {

        if(productName.includes(searchValue)){
            card.style.display = 'block'; // Show matching products
        } else {
            card.style.display = 'none'; // Hide non-matching products
        }
    });
});



// Favorite functionality
const favoriteButtons = document.querySelectorAll('.favorite-btn');
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Function to update favorites
function updateFavorites() {
    favoriteButtons.forEach(button => {
        const productId = button.getAttribute('data-id');

        // Check if the product is in favorites
        if (favorites.includes(productId)) {
            button.classList.add('favorited');
            button.innerHTML = `<i class="fas fa-heart"></i> Favorited`; // Change text/icon when favorited
        } else {
            button.classList.remove('favorited');
            button.innerHTML = `<i class="fas fa-heart"></i> Add to Favorite`;
        }
    });
}

// Add event listeners to favorite buttons
favoriteButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-id');

        // Toggle favorite status
        if (favorites.includes(productId)) {
            favorites = favorites.filter(id => id !== productId); // Remove from favorites
        } else {
            favorites.push(productId); // Add to favorites
        }

        // Save updated favorites to localStorage
        localStorage.setItem('favorites', JSON.stringify(favorites));
        updateFavorites(); // Update the UI
    });
});

// Initial update to reflect saved favorites
updateFavorites();