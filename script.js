let cart = [];
const cartButton = document.getElementById("cart-button");
const cartModal = document.getElementById("cart-modal");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");

function addToCart(item, price) {
    cart.push({ item, price });
    updateCartUI();
}

function updateCartUI() {
    cartItems.innerHTML = cart.map(cartItem => `<li>${cartItem.item} - $${cartItem.price}</li>`).join('');
    const total = cart.reduce((sum, cartItem) => sum + cartItem.price, 0);
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    cartCount.textContent = cart.length;
}

cartButton.addEventListener('click', () => {
    cartModal.classList.toggle("hidden");
});

function closeCart() {
    cartModal.classList.add("hidden");
}

function checkout() {
    if (cart.length > 0) {
        alert("Proceeding to checkout...");
        // Add payment logic here
    } else {
        alert("Your cart is empty.");
    }
}
