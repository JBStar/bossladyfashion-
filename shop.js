



// Filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product-item');
let currentFilter = 'all';
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentFilter = button.getAttribute('data-filter');
        filterProducts();
    });
});

// Search functionality
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', filterProducts);

function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    products.forEach(product => {
        const title = product.querySelector('.product-title').textContent.toLowerCase();
        const matchesSearch = title.includes(searchTerm);
        let matchesCategory = false;
        if (currentFilter === 'all') {
            matchesCategory = true;
        } else if (currentFilter === 'boys') {
            matchesCategory = product.getAttribute('data-gender') === 'boys';
        } else if (currentFilter === 'girls') {
            matchesCategory = product.getAttribute('data-gender') === 'girls';
        } else if (currentFilter === 'shoes') {
            matchesCategory = product.getAttribute('data-category') === 'shoes';
        }
        if (matchesSearch && matchesCategory) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
}

// Shopping cart functionality
const cart = document.getElementById('cart');
const cartCount = document.getElementById('cart-count');
const cartDropdown = document.getElementById('cart-dropdown');
const cartItemsContainer = document.getElementById('cart-items');
let cartItems = [];

// Toggle cart dropdown
cart.addEventListener('click', () => {
    cartDropdown.classList.toggle('active');
});

// Add to cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productItem = button.closest('.product-item');
        const title = productItem.querySelector('.product-title').textContent;
        const price = productItem.querySelector('.product-price').textContent;
        // Add item to cart
        cartItems.push({ title, price });
        updateCartUI();
    });
});

function updateCartUI() {
    // Update cart count
    cartCount.textContent = cartItems.length;
    // Clear previous items
    cartItemsContainer.innerHTML = '';
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>No items in cart.</p>';
    } else {
        cartItems.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('cart-item');
            div.innerHTML = `<span>${item.title}</span><span>${item.price}</span>`;
            cartItemsContainer.appendChild(div);
        });
    }
}


