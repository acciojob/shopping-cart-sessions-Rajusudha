// This is the boilerplate code given for you
// You can modify this code
// Product data
// Sample product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// Function to render the list of products
function renderProducts() {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';
  products.forEach(product => {
    const li = document.createElement('li');
    li.textContent = `${product.name} - $${product.price}`;
    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.onclick = () => addToCart(product);
    li.appendChild(button);
    productList.appendChild(li);
  });
}

// Function to render the shopping cart
function renderCart() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = '';
  const cart = getCart();
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}

// Function to get the cart from session storage
function getCart() {
  const cart = sessionStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

// Function to save the cart to session storage
function saveCart(cart) {
  sessionStorage.setItem('cart', JSON.stringify(cart));
}

// Function to add a product to the cart
function addToCart(product) {
  const cart = getCart();
  cart.push(product);
  saveCart(cart);
  renderCart();
}

// Function to clear the cart
function clearCart() {
  sessionStorage.removeItem('cart');
  renderCart();
}

// Initialize the page by rendering products and cart
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderCart();

  // Attach event listener to the clear cart button
  document.getElementById('clear-cart-btn').addEventListener('click', clearCart);
});
