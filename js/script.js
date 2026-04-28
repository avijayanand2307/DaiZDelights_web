// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Active Navigation Link Highlighting
function highlightActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const href = link.getAttribute('href');
        if ((currentPage === '' && href === 'home.html') || href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', highlightActiveLink);

// Scroll Animation with Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.section, .product-card, .feature-card').forEach(el => {
    observer.observe(el);
});

// Toast Notification
function createNotification(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('remove');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add to Cart (for products page)
function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    createNotification(`${productName} added to cart!`, 'success');
}

// ====== ORDER NOW PAGE FUNCTIONS ======

// Product prices for Order Now
const orderProducts = {
    brownies: [
        { id: 'fudgy', name: 'Fudgy Brownie', price: 4.99 },
        { id: 'chip', name: 'Chocolate Chip Brownie', price: 4.49 },
        { id: 'espresso', name: 'Espresso Brownie', price: 5.99 },
        { id: 'mint', name: 'Mint Brownie', price: 5.49 },
        { id: 'triple', name: 'Triple Chocolate Brownie', price: 7.99 }
    ],
    blondies: [
        { id: 'walnut', name: 'Walnut Blondie', price: 5.49 },
        { id: 'caramel', name: 'Caramel Blondie', price: 5.99 },
        { id: 'macadamia', name: 'Macadamia Blondie', price: 6.49 },
        { id: 'vanilla', name: 'Classic Vanilla Blondie', price: 4.99 }
    ]
};

// Delivery costs
const deliveryCosts = {
    'same-day': 5.99,
    'next-day': 3.99,
    'standard': 0
};

// Promo codes
const promoCodes = {
    'DAIZ15': 0.15,
    'DAIZ20': 0.20
};

// Initialize Order Summary
function initializeOrderForm() {
    const form = document.getElementById('orderForm');
    if (!form) return;

    // Add event listeners to products
    document.querySelectorAll('input[name="product"]').forEach(checkbox => {
        checkbox.addEventListener('change', updateOrderSummary);
    });

    // Add event listeners to delivery options
    document.querySelectorAll('input[name="delivery"]').forEach(radio => {
        radio.addEventListener('change', updateOrderSummary);
    });

    // Promo code button
    const applyPromoBtn = document.querySelector('.apply-promo-btn');
    if (applyPromoBtn) {
        applyPromoBtn.addEventListener('click', applyPromo);
    }

    // Form submission
    form.addEventListener('submit', handleOrderSubmit);

    // Initial summary update
    updateOrderSummary();
}

// Update Order Summary
function updateOrderSummary() {
    const selectedProducts = Array.from(document.querySelectorAll('input[name="product"]:checked'));
    const deliveryOption = document.querySelector('input[name="delivery"]:checked');

    // Clear previous items
    const summaryItems = document.getElementById('summaryItems');
    if (summaryItems) {
        summaryItems.innerHTML = '';

        // Add selected products to summary
        selectedProducts.forEach(checkbox => {
            const productName = checkbox.parentElement.textContent.trim();
            const priceMatch = productName.match(/₹([\d.]+)/);
            const price = priceMatch ? parseFloat(priceMatch[1]) : 0;

            const itemEl = document.createElement('div');
            itemEl.className = 'summary-item';
            itemEl.innerHTML = `
                <span class="summary-item-name">${productName.split(' - ')[0]}</span>
                <span class="summary-item-price">₹${price.toFixed(2)}</span>
            `;
            summaryItems.appendChild(itemEl);
        });
    }

    // Calculate subtotal
    let subtotal = 0;
    selectedProducts.forEach(checkbox => {
        const productName = checkbox.parentElement.textContent.trim();
        const priceMatch = productName.match(/₹([\d.]+)/);
        const price = priceMatch ? parseFloat(priceMatch[1]) : 0;
        subtotal += price;
    });

    // Get delivery cost
    const deliveryValue = deliveryOption.value;
    const deliveryCost = deliveryCosts[deliveryValue];
    let finalDeliveryText = 'FREE';
    let finalDeliveryCost = 0;

    if (deliveryValue === 'same-day') {
        finalDeliveryText = '₹5.99';
        finalDeliveryCost = 5.99;
    } else if (deliveryValue === 'next-day') {
        finalDeliveryText = '₹3.99';
        finalDeliveryCost = 3.99;
    } else if (deliveryValue === 'standard') {
        if (subtotal >= 50) {
            finalDeliveryText = 'FREE';
            finalDeliveryCost = 0;
        } else {
            finalDeliveryText = '₹2.99';
            finalDeliveryCost = 2.99;
        }
    }

    // Update summary display
    const subtotalEl = document.getElementById('subtotal');
    if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toFixed(2)}`;

    const deliveryEl = document.getElementById('deliveryCost');
    if (deliveryEl) deliveryEl.textContent = finalDeliveryText;

    // Calculate total
    let total = subtotal + finalDeliveryCost;

    // Check for active promo code
    const promoCode = document.getElementById('promoCode');
    let discount = 0;
    if (promoCode && promoCode.dataset.applied === 'true') {
        const code = promoCode.value.toUpperCase();
        if (promoCodes[code]) {
            discount = subtotal * promoCodes[code];
            total = subtotal - discount + finalDeliveryCost;

            const discountEl = document.getElementById('discount');
            if (discountEl) {
                discountEl.parentElement.style.display = 'flex';
                discountEl.textContent = `-₹${discount.toFixed(2)}`;
            }
        }
    } else {
        const discountEl = document.getElementById('discount');
        if (discountEl) {
            discountEl.parentElement.style.display = 'none';
        }
    }

    // Update total
    const totalEl = document.getElementById('total');
    if (totalEl) totalEl.textContent = `₹${total.toFixed(2)}`;
}

// Apply Promo Code
function applyPromo() {
    const promoInput = document.getElementById('promoCode');
    const code = promoInput.value.toUpperCase().trim();

    if (!code) {
        createNotification('Please enter a promo code', 'error');
        return;
    }

    if (promoCodes[code]) {
        promoInput.dataset.applied = 'true';
        createNotification(`Promo code "${code}" applied! Discount: ${(promoCodes[code] * 100).toFixed(0)}% off`, 'success');
        updateOrderSummary();
    } else {
        createNotification('Invalid promo code', 'error');
        promoInput.dataset.applied = 'false';
    }
}

// Handle Order Form Submission
function handleOrderSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('fullName')?.value;
    const email = document.getElementById('email')?.value;
    const phone = document.getElementById('phone')?.value;
    const address = document.getElementById('address')?.value;
    const selectedProducts = Array.from(document.querySelectorAll('input[name="product"]:checked')).map(cb => cb.parentElement.textContent.trim());

    // Validation
    if (!name || !email || !phone || !address || selectedProducts.length === 0) {
        createNotification('Please fill in all required fields and select at least one product', 'error');
        return;
    }

    // Order data
    const orderData = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        products: selectedProducts,
        delivery: document.querySelector('input[name="delivery"]:checked').value,
        specialRequests: document.getElementById('specialRequests')?.value || '',
        promoCode: document.getElementById('promoCode')?.value || '',
        total: document.getElementById('total')?.textContent || '₹0.00',
        timestamp: new Date().toLocaleString()
    };

    // Store order in localStorage
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(orderData);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Show success message
    createNotification('Order placed successfully! Proceeding to payment...', 'success');

    // Reset form
    document.getElementById('orderForm').reset();
    document.getElementById('promoCode').dataset.applied = 'false';
    updateOrderSummary();

    // In a real application, this would redirect to a payment gateway
    console.log('Order Data:', orderData);
}

// Contact Form Submission
function handleContactSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('contactName')?.value;
    const email = document.getElementById('contactEmail')?.value;
    const message = document.getElementById('message')?.value;

    if (!name || !email || !message) {
        createNotification('Please fill in all fields', 'error');
        return;
    }

    // Store contact message
    let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    messages.push({
        name: name,
        email: email,
        message: message,
        timestamp: new Date().toLocaleString()
    });
    localStorage.setItem('contactMessages', JSON.stringify(messages));

    createNotification('Thank you for your message! We will contact you soon.', 'success');
    document.getElementById('contactForm').reset();

    console.log('Contact Message:', { name, email, message });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set dynamic year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    initializeOrderForm();

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
});
