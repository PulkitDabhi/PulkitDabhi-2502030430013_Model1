const productCatalog = {
    Khakhra: {
        title: 'Khakhra',
        description: 'Crunchy baked khakhra made from traditional spices.',
        price: 130,
        quantity: 1,
    },
    Chips: {
        title: 'Chips',
        description: 'Light and crispy potato chips with a zesty flavour.',
        price: 150,
        quantity: 1,
    },
    Samosa: {
        title: 'Samosa',
        description: 'Golden fried samosas filled with spiced potato and peas.',
        price: 100,
        quantity: 1,
    },
    Biscuits: {
        title: 'Biscuits',
        description: 'Sweet and buttery biscuits perfect with tea.',
        price: 200,
        quantity: 1,
    },
};

function getCart() {
    try {
        return JSON.parse(localStorage.getItem('snackifyCart') || '{}');
    } catch (error) {
        return {};
    }
}

function saveCart(cart) {
    localStorage.setItem('snackifyCart', JSON.stringify(cart));
}

function addCart(productName) {
    const cart = getCart();
    if (!cart[productName]) {
        cart[productName] = { ...productCatalog[productName], quantity: 0 };
    }
    cart[productName].quantity += 1;
    saveCart(cart);
    window.location.href = 'cart.html';
}

function updateQuantity(productName, change) {
    const cart = getCart();
    if (!cart[productName]) return;
    cart[productName].quantity += change;
    if (cart[productName].quantity <= 0) {
        delete cart[productName];
    }
    saveCart(cart);
    renderCart();
}

function formatCurrency(amount) {
    return '₹' + amount.toFixed(2);
}

function completeOrder() {
    const cart = getCart();
    const itemCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    const total = Object.values(cart).reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    if (itemCount === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    alert('Order Completed!\nTotal Items: ' + itemCount + '\nTotal Amount: ' + formatCurrency(total));
    localStorage.removeItem('snackifyCart');
    renderCart();
}

function renderCart() {
    const cartContainer = document.getElementById('cartContainer');
    if (!cartContainer) return;
    const cart = getCart();
    const items = Object.values(cart);
    if (!items.length) {
        cartContainer.innerHTML =
            '<div class="empty-cart">' +
            '<p>Your cart is empty.</p>' +
            '<a class="button button-primary" href="index.html">Shop Snacks</a>' +
            '</div>';
        return;
    }
    const rows = items.map(item => {
        const imageFile = item.title.toLowerCase() === 'chips' ? 'bananachips.webp' : item.title.toLowerCase() + '.jpg';
        const itemTotal = item.price * item.quantity;
        return (
            '<div class="cart-item">' +
            '<div class="item-image">' +
            '<img src="images/' + imageFile + '" alt="' + item.title + '">' +
            '</div>' +
            '<div class="item-details">' +
            '<h2>' + item.title + '</h2>' +
            '<p>' + item.description + '</p>' +
            '<div class="item-meta">' +
            '<span>Price: ' + formatCurrency(item.price) + ' / 500g</span>' +
            '<span>Subtotal: ' + formatCurrency(itemTotal) + '</span>' +
            '</div>' +
            '<div class="quantity-control">' +
            '<button type="button" onclick="updateQuantity(\'' + item.title + '\', -1)">-</button>' +
            '<span>' + item.quantity + '</span>' +
            '<button type="button" onclick="updateQuantity(\'' + item.title + '\', 1)">+</button>' +
            '</div>' +
            '</div>' +
            '</div>'
        );
    }).join('');
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    cartContainer.innerHTML =
        '<div class="cart-items">' + rows + '</div>' +
        '<div class="cart-summary-card">' +
        '<h2>Order Summary</h2>' +
        '<p>Total items: ' + itemCount + '</p>' +
        '<p class="cart-total-price">Total: ' + formatCurrency(total) + '</p>' +
        '<button type="button" onclick="completeOrder()" class="button button-primary">Order Complete</button>' +
        '</div>';
}

window.addEventListener('DOMContentLoaded', renderCart);
