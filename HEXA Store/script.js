/**
 * HEXA Store - Core Application Script
 * Features: Product Catalogue, Cart Drawer, Wishlist, Theme Toggle,
 * Search, Filters, Quick View Modal, Toast Notifications, Mobile Menu,
 * and Form Handlers.
 */

// ==========================================
// 1. PRODUCT DATABASE
// ==========================================
const PRODUCTS_DATA = [
    {
        id: "prod-1",
        name: "HEXA Pro Smartwatch Ultra",
        category: "wearables",
        categoryName: "Wearables",
        price: 1999,
        originalPrice: 3499,
        discount: "43% OFF",
        rating: 4.8,
        reviewsCount: 342,
        image: "HEXA Watch3.png",
        badge: "Bestseller",
        badgeColor: "badge-hot",
        inStock: true,
        tagline: "Always-on AMOLED display & advanced fitness analytics",
        description: "The HEXA Pro Smartwatch Ultra combines military-grade durability with high-precision health monitoring. Track heart rate, blood oxygen, sleep quality, and over 100 sports modes with up to 10 days of battery life.",
        features: ["1.96\" AMOLED Retina Display", "Bluetooth 5.3 Calling", "10-Day Battery Life", "IP68 Water & Dust Resistant"]
    },
    {
        id: "prod-2",
        name: "HEXA True Wireless Pods",
        category: "audio",
        categoryName: "Audio",
        price: 1499,
        originalPrice: 2999,
        discount: "50% OFF",
        rating: 4.9,
        reviewsCount: 520,
        image: "HEXA EarBuds.png",
        badge: "Popular",
        badgeColor: "badge-blue",
        inStock: true,
        tagline: "Active noise cancellation with 36h playback",
        description: "Immerse yourself in pure studio sound with deep bass and crystal-clear highs. Equipped with quad-microphone environmental noise cancellation for seamless voice calls anywhere.",
        features: ["Active Noise Cancellation (32dB)", "36 Hours Total Playback", "Ultra-low 45ms Gaming Latency", "Wireless & Type-C Fast Charge"]
    },
    {
        id: "prod-3",
        name: "HEXA Trail Pro Hiking Shoes",
        category: "footwear",
        categoryName: "Footwear",
        price: 2199,
        originalPrice: 3999,
        discount: "45% OFF",
        rating: 4.7,
        reviewsCount: 198,
        image: "HEXA Shoes.png",
        badge: "Trending",
        badgeColor: "badge-purple",
        inStock: true,
        tagline: "All-terrain grip with waterproof breathable mesh",
        description: "Conquer any trail with maximum comfort and stability. Built with slip-resistant multi-directional rubber lugs, responsive cloud-cushion foam, and waterproof breathable knit upper.",
        features: ["Anti-Slip Vibram-Style Outsole", "Water-Repellent Outer Layer", "Ergonomic Arch Support Insoles", "Reinforced Protective Toe Cap"]
    },
    {
        id: "prod-4",
        name: "HEXA Studio ANC Headphones",
        category: "audio",
        categoryName: "Audio",
        price: 2399,
        originalPrice: 4499,
        discount: "47% OFF",
        rating: 4.9,
        reviewsCount: 284,
        image: "Wireless Headphone.jpg",
        badge: "Top Rated",
        badgeColor: "badge-hot",
        inStock: true,
        tagline: "Hi-Res Audio with 40mm neodymium dynamic drivers",
        description: "Engineered for audiophiles. Features ultra-plush memory foam earcups, active hybrid noise cancellation, and up to 50 hours of wireless listening on a single charge.",
        features: ["Hybrid Active Noise Cancellation", "50 Hours Battery with Fast Fuel", "Hi-Res Wireless Audio Certified", "Plush Memory Foam Cushioning"]
    },
    {
        id: "prod-5",
        name: "HEXA Vortex High-Speed Blender",
        category: "home",
        categoryName: "Home & Tech",
        price: 999,
        originalPrice: 1799,
        discount: "44% OFF",
        rating: 4.6,
        reviewsCount: 145,
        image: "HEXA Blender.png",
        badge: "Kitchen Pick",
        badgeColor: "badge-green",
        inStock: true,
        tagline: "1200W commercial-grade pulverizing blades",
        description: "Effortlessly blend smoothies, crush ice, grind spices, and puree hot soups in seconds. Features BPA-free tritan jar, 6 pre-programmed pulse modes, and self-cleaning cycle.",
        features: ["1200W Copper Pure Motor", "6 Surgical Stainless Steel Blades", "BPA-Free Shatterproof Pitcher", "One-Touch Auto Clean Cycle"]
    },
    {
        id: "prod-6",
        name: "HEXA 4K Pocket Mini Camera",
        category: "home",
        categoryName: "Home & Tech",
        price: 799,
        originalPrice: 1499,
        discount: "46% OFF",
        rating: 4.5,
        reviewsCount: 112,
        image: "Mini Camera.jpg",
        badge: "New",
        badgeColor: "badge-blue",
        inStock: true,
        tagline: "Compact vlog cam with 140° wide-angle lens",
        description: "Capture life's spontaneous moments in crisp 4K Ultra HD. Magnetic body mount, infrared night vision, and instant WiFi pairing to export videos directly to your phone.",
        features: ["4K Ultra HD Video Recording", "140° Ultra-Wide Angle Lens", "Magnetic Mount & Clip Included", "Night Vision & Motion Detection"]
    },
    {
        id: "prod-7",
        name: "HEXA Boom Portable Speaker",
        category: "audio",
        categoryName: "Audio",
        price: 899,
        originalPrice: 1699,
        discount: "47% OFF",
        rating: 4.7,
        reviewsCount: 231,
        image: "Portable speakers.jpg",
        badge: "Outdoor",
        badgeColor: "badge-purple",
        inStock: true,
        tagline: "360° surround bass with IPX7 waterproof rating",
        description: "Take the party anywhere from poolside to mountain summits. Dual passive radiators deliver deep bass, while RGB dynamic lighting pulses to your favorite tracks.",
        features: ["20W Immersive 360° Sound", "IPX7 Fully Waterproof & Dustproof", "18-Hour Long-Lasting Battery", "TWS Stereo Pairing Compatible"]
    },
    {
        id: "prod-8",
        name: "HEXA Ambient Smart LED Lamp",
        category: "home",
        categoryName: "Home & Tech",
        price: 499,
        originalPrice: 999,
        discount: "50% OFF",
        rating: 4.8,
        reviewsCount: 310,
        image: "LED desk lamp.jpg",
        badge: "Smart Home",
        badgeColor: "badge-green",
        inStock: true,
        tagline: "Stepless dimming with 5 eye-care color modes",
        description: "Transform your workspace with flicker-free, non-glare illumination. Features sensitive touch slider controls, flexible multi-angle gooseneck, and built-in USB device charging port.",
        features: ["Eye-Care Zero Blue Light Hazard", "5 Color Temperatures & Dimmer", "Adjustable Multi-Angle Arm", "USB Output for Phone Charging"]
    },
    {
        id: "prod-9",
        name: "HEXA 3-in-1 Wireless Charging Stand",
        category: "accessories",
        categoryName: "Accessories",
        price: 299,
        originalPrice: 699,
        discount: "57% OFF",
        rating: 4.6,
        reviewsCount: 420,
        image: "Wireless Charger.jpg",
        badge: "Value Pack",
        badgeColor: "badge-hot",
        inStock: true,
        tagline: "Simultaneous fast charging for Phone, Watch & Buds",
        description: "Declutter your nightstand with a single sleek charging station. Smart safety chips prevent over-heating, short circuits, and over-charging with intelligent LED indicators.",
        features: ["15W Qi Fast Wireless Charging", "Charges 3 Devices Simultaneously", "Foldable Travel-Friendly Design", "Foreign Object Detection Safety"]
    },
    {
        id: "prod-10",
        name: "HEXA MagSafe Fast Charging Pad",
        category: "accessories",
        categoryName: "Accessories",
        price: 199,
        originalPrice: 499,
        discount: "60% OFF",
        rating: 4.5,
        reviewsCount: 388,
        image: "Charging Pad.jpg",
        badge: "Steal Deal",
        badgeColor: "badge-blue",
        inStock: true,
        tagline: "Ultra-slim aerospace aluminum magnetic disc",
        description: "Snaps firmly into place with strong neodymium magnets for efficient magnetic charging. Braided durable cable ensures long-lasting everyday reliability.",
        features: ["Strong Magnetic Snap Alignment", "Ultra-Slim 5.5mm Profile", "Aerospace Aluminum Shell", "Braided 1.2m Durable Cable"]
    },
    {
        id: "prod-11",
        name: "HEXA Rugged Armor Phone Case",
        category: "accessories",
        categoryName: "Accessories",
        price: 99,
        originalPrice: 299,
        discount: "67% OFF",
        rating: 4.7,
        reviewsCount: 890,
        image: "Phone Case.jpg",
        badge: "Best Value",
        badgeColor: "badge-green",
        inStock: true,
        tagline: "10ft drop tested military-grade shockproof bumper",
        description: "Heavy-duty shock absorption with raised camera lip and tactile responsive buttons. Matte carbon fiber texture provides anti-fingerprint grip.",
        features: ["10ft Military-Grade Drop Protection", "Raised Bezels for Screen & Lens", "Anti-Slip Textured Matte Finish", "Wireless Charging Compatible"]
    }
];

// ==========================================
// 2. GLOBAL STATE MANAGEMENT (Cart, Wishlist, Theme)
// ==========================================
const AppState = {
    cart: JSON.parse(localStorage.getItem("hexa_cart")) || [],
    wishlist: JSON.parse(localStorage.getItem("hexa_wishlist")) || [],
    discountApplied: null,
    discountCode: "",

    saveCart() {
        localStorage.setItem("hexa_cart", JSON.stringify(this.cart));
        updateCartBadges();
        renderCartDrawer();
    },

    saveWishlist() {
        localStorage.setItem("hexa_wishlist", JSON.stringify(this.wishlist));
        updateWishlistBadges();
    }
};

// ==========================================
// 3. THEME TOGGLE (Persistent Dark / Light)
// ==========================================
function initTheme() {
    let savedTheme = localStorage.getItem("hexa_theme");
    // Ensure light theme is set by default
    if (!savedTheme || savedTheme === "dark") {
        savedTheme = "light";
        localStorage.setItem("hexa_theme", "light");
    }
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcons(savedTheme);

    const toggles = document.querySelectorAll(".theme-toggle-btn");
    toggles.forEach(btn => {
        btn.addEventListener("click", () => {
            const current = document.documentElement.getAttribute("data-theme") || "light";
            const next = current === "light" ? "dark" : "light";
            document.documentElement.setAttribute("data-theme", next);
            localStorage.setItem("hexa_theme", next);
            updateThemeIcons(next);
            showToast(`Switched to ${next.toUpperCase()} mode`, "info");
        });
    });
}

function updateThemeIcons(theme) {
    const sunIcons = document.querySelectorAll(".theme-icon-sun");
    const moonIcons = document.querySelectorAll(".theme-icon-moon");

    if (theme === "dark") {
        sunIcons.forEach(i => i.style.display = "inline-block");
        moonIcons.forEach(i => i.style.display = "none");
    } else {
        sunIcons.forEach(i => i.style.display = "none");
        moonIcons.forEach(i => i.style.display = "inline-block");
    }
}

// ==========================================
// 4. TOAST NOTIFICATION ENGINE
// ==========================================
function showToast(message, type = "success") {
    let container = document.getElementById("toast-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "toast-container";
        container.className = "toast-container";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast-item toast-${type}`;
    
    let iconSvg = "";
    if (type === "success") {
        iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
    } else if (type === "error") {
        iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
    } else {
        iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
    }

    toast.innerHTML = `
        <span class="toast-icon">${iconSvg}</span>
        <span class="toast-msg">${message}</span>
        <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("toast-show");
    }, 10);

    setTimeout(() => {
        toast.classList.remove("toast-show");
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// ==========================================
// 5. CART SYSTEM
// ==========================================
function addToCart(productId, quantity = 1, showDrawer = true) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = AppState.cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
        AppState.cart[existingIndex].quantity += quantity;
    } else {
        AppState.cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.image,
            category: product.categoryName,
            quantity: quantity
        });
    }

    AppState.saveCart();
    showToast(`Added <strong>${product.name}</strong> to cart!`, "success");

    // Trigger cart button bounce animation
    const cartBtns = document.querySelectorAll(".cart-btn-trigger");
    cartBtns.forEach(btn => {
        btn.classList.add("cart-bounce");
        setTimeout(() => btn.classList.remove("cart-bounce"), 400);
    });

    if (showDrawer) {
        openCartDrawer();
    }
}

function updateCartQuantity(productId, delta) {
    const item = AppState.cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    AppState.saveCart();
}

function removeFromCart(productId) {
    const item = AppState.cart.find(i => i.id === productId);
    const itemName = item ? item.name : "Item";
    AppState.cart = AppState.cart.filter(i => i.id !== productId);
    AppState.saveCart();
    showToast(`Removed <strong>${itemName}</strong> from cart`, "info");
}

function updateCartBadges() {
    const totalItems = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
    const badges = document.querySelectorAll(".cart-count-badge");
    badges.forEach(b => {
        b.textContent = totalItems;
        b.style.display = totalItems > 0 ? "inline-flex" : "none";
    });
}

function renderCartDrawer() {
    const drawerBody = document.getElementById("cart-drawer-items");
    const subtotalEl = document.getElementById("cart-drawer-subtotal");
    const totalEl = document.getElementById("cart-drawer-total");
    const shippingEl = document.getElementById("cart-drawer-shipping");
    const discountRow = document.getElementById("cart-discount-row");
    const discountEl = document.getElementById("cart-drawer-discount");
    const checkoutBtn = document.getElementById("cart-checkout-btn");
    const emptyState = document.getElementById("cart-empty-state");

    if (!drawerBody) return;

    if (AppState.cart.length === 0) {
        drawerBody.innerHTML = "";
        if (emptyState) emptyState.style.display = "flex";
        if (subtotalEl) subtotalEl.textContent = "₹0";
        if (shippingEl) shippingEl.textContent = "₹0";
        if (totalEl) totalEl.textContent = "₹0";
        if (discountRow) discountRow.style.display = "none";
        if (checkoutBtn) checkoutBtn.disabled = true;
        return;
    }

    if (emptyState) emptyState.style.display = "none";
    if (checkoutBtn) checkoutBtn.disabled = false;

    let subtotal = 0;
    drawerBody.innerHTML = AppState.cart.map(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        return `
            <div class="cart-item-row" data-id="${item.id}">
                <div class="cart-item-thumb">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <div class="cart-item-meta">₹${item.price.toLocaleString("en-IN")}</div>
                    <div class="cart-item-controls">
                        <div class="qty-stepper">
                            <button onclick="updateCartQuantity('${item.id}', -1)" aria-label="Decrease">&minus;</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateCartQuantity('${item.id}', 1)" aria-label="Increase">&plus;</button>
                        </div>
                        <button class="cart-item-delete" onclick="removeFromCart('${item.id}')" title="Remove item">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                        </button>
                    </div>
                </div>
                <div class="cart-item-price">
                    ₹${itemTotal.toLocaleString("en-IN")}
                </div>
            </div>
        `;
    }).join("");

    const shipping = subtotal >= 999 || subtotal === 0 ? 0 : 99;
    let discountAmount = 0;
    if (AppState.discountApplied && AppState.discountApplied > 0) {
        discountAmount = Math.round(subtotal * AppState.discountApplied);
        if (discountRow) {
            discountRow.style.display = "flex";
            discountEl.textContent = `-₹${discountAmount.toLocaleString("en-IN")} (${AppState.discountCode})`;
        }
    } else {
        if (discountRow) discountRow.style.display = "none";
    }

    const grandTotal = Math.max(0, subtotal + shipping - discountAmount);

    if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString("en-IN")}`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? "FREE" : `₹${shipping}`;
    if (totalEl) totalEl.textContent = `₹${grandTotal.toLocaleString("en-IN")}`;
}

function applyCoupon() {
    const input = document.getElementById("coupon-input");
    if (!input) return;

    const code = input.value.trim().toUpperCase();
    if (!code) {
        showToast("Please enter a coupon code", "error");
        return;
    }

    if (code === "HEXA10" || code === "WELCOME10") {
        AppState.discountApplied = 0.10; // 10%
        AppState.discountCode = code;
        renderCartDrawer();
        showToast(`Promo <strong>${code}</strong> applied! 10% Discount saved.`, "success");
    } else if (code === "HEXA50" || code === "SUPER50") {
        if (AppState.cart.reduce((s, i) => s + (i.price * i.quantity), 0) >= 3000) {
            AppState.discountApplied = 0.20; // 20%
            AppState.discountCode = code;
            renderCartDrawer();
            showToast(`Promo <strong>${code}</strong> applied! 20% Mega Discount saved.`, "success");
        } else {
            showToast(`Code ${code} requires minimum cart value of ₹3,000`, "error");
        }
    } else {
        showToast("Invalid promo code. Try <strong>HEXA10</strong>!", "error");
    }
}

function openCartDrawer() {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-drawer-overlay");
    if (drawer && overlay) {
        drawer.classList.add("drawer-open");
        overlay.classList.add("overlay-active");
        document.body.style.overflow = "hidden";
    }
}

function closeCartDrawer() {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-drawer-overlay");
    if (drawer && overlay) {
        drawer.classList.remove("drawer-open");
        overlay.classList.remove("overlay-active");
        document.body.style.overflow = "";
    }
}

// Checkout simulation modal
function openCheckoutModal() {
    if (AppState.cart.length === 0) return;
    closeCartDrawer();

    let modal = document.getElementById("checkout-modal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "checkout-modal";
        modal.className = "modal-overlay";
        modal.innerHTML = `
            <div class="modal-card checkout-modal-card">
                <button class="modal-close-btn" onclick="closeCheckoutModal()">&times;</button>
                <div class="checkout-success-icon">
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#22c55e" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                </div>
                <h3>Order Confirmed!</h3>
                <p>Thank you for shopping with HEXA Store. Your mock order has been placed successfully.</p>
                <div class="order-id-box">
                    <span>Order Reference:</span>
                    <strong>HEXA-${Math.floor(100000 + Math.random() * 900000)}</strong>
                </div>
                <div class="order-summary-box" id="checkout-summary-details"></div>
                <button class="btn btn-primary btn-block" onclick="completeCheckout()">Continue Shopping</button>
            </div>
        `;
        document.body.appendChild(modal);
    }

    const details = document.getElementById("checkout-summary-details");
    const totalItems = AppState.cart.reduce((s, i) => s + i.quantity, 0);
    const subtotal = AppState.cart.reduce((s, i) => s + (i.price * i.quantity), 0);
    const total = document.getElementById("cart-drawer-total") ? document.getElementById("cart-drawer-total").textContent : `₹${subtotal}`;
    if (details) {
        details.innerHTML = `
            <div class="order-sum-line"><span>Total Items:</span> <span>${totalItems}</span></div>
            <div class="order-sum-line"><span>Estimated Delivery:</span> <span>3 Business Days</span></div>
            <div class="order-sum-line font-bold"><span>Amount Paid:</span> <span class="text-accent">${total}</span></div>
        `;
    }

    modal.classList.add("modal-open");
    document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
    const modal = document.getElementById("checkout-modal");
    if (modal) {
        modal.classList.remove("modal-open");
        document.body.style.overflow = "";
    }
}

function completeCheckout() {
    closeCheckoutModal();
    AppState.cart = [];
    AppState.discountApplied = null;
    AppState.discountCode = "";
    AppState.saveCart();
    showToast("Cart cleared. We hope to see you again soon!", "info");
}

// ==========================================
// 6. WISHLIST SYSTEM
// ==========================================
function toggleWishlist(productId) {
    const idx = AppState.wishlist.indexOf(productId);
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    const name = product ? product.name : "Product";

    if (idx > -1) {
        AppState.wishlist.splice(idx, 1);
        showToast(`Removed <strong>${name}</strong> from wishlist`, "info");
    } else {
        AppState.wishlist.push(productId);
        showToast(`Added <strong>${name}</strong> to wishlist!`, "success");
    }

    AppState.saveWishlist();
    syncWishlistButtons();
}

function updateWishlistBadges() {
    const count = AppState.wishlist.length;
    const badges = document.querySelectorAll(".wishlist-count-badge");
    badges.forEach(b => {
        b.textContent = count;
        b.style.display = count > 0 ? "inline-flex" : "none";
    });
}

function syncWishlistButtons() {
    document.querySelectorAll(".wishlist-btn-toggle").forEach(btn => {
        const id = btn.getAttribute("data-id");
        if (AppState.wishlist.includes(id)) {
            btn.classList.add("in-wishlist");
            btn.setAttribute("title", "Remove from wishlist");
        } else {
            btn.classList.remove("in-wishlist");
            btn.setAttribute("title", "Add to wishlist");
        }
    });
}

// ==========================================
// 7. QUICK VIEW MODAL
// ==========================================
function openQuickView(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    let modal = document.getElementById("quickview-modal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "quickview-modal";
        modal.className = "modal-overlay";
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="modal-card quickview-modal-card">
            <button class="modal-close-btn" onclick="closeQuickView()">&times;</button>
            <div class="quickview-grid">
                <div class="quickview-image-wrap">
                    <img src="${product.image}" alt="${product.name}" class="quickview-img">
                    <span class="product-badge ${product.badgeColor}">${product.badge}</span>
                </div>
                <div class="quickview-details">
                    <span class="product-category-label">${product.categoryName}</span>
                    <h2 class="quickview-title">${product.name}</h2>
                    <div class="product-rating-row">
                        <div class="stars">★★★★★</div>
                        <span class="rating-num">${product.rating}</span>
                        <span class="rating-count">(${product.reviewsCount} customer reviews)</span>
                    </div>
                    <div class="product-price-row">
                        <span class="current-price">₹${product.price.toLocaleString("en-IN")}</span>
                        <span class="original-price">₹${product.originalPrice.toLocaleString("en-IN")}</span>
                        <span class="discount-pill">${product.discount}</span>
                    </div>
                    <p class="quickview-desc">${product.description}</p>
                    <div class="quickview-features">
                        ${product.features.map(f => `<div class="qv-feature-item"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> ${f}</div>`).join("")}
                    </div>
                    <div class="quickview-actions">
                        <div class="qv-qty-selector">
                            <button onclick="decrementQvQty()">-</button>
                            <input type="number" id="qv-qty-input" value="1" min="1" max="10" readonly>
                            <button onclick="incrementQvQty()">+</button>
                        </div>
                        <button class="btn btn-primary btn-icon" onclick="addQvToCart('${product.id}')">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                            Add to Cart
                        </button>
                        <button class="btn btn-secondary btn-square wishlist-btn-toggle ${AppState.wishlist.includes(product.id) ? 'in-wishlist' : ''}" data-id="${product.id}" onclick="toggleWishlist('${product.id}')">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.classList.add("modal-open");
    document.body.style.overflow = "hidden";
}

function incrementQvQty() {
    const input = document.getElementById("qv-qty-input");
    if (input && parseInt(input.value) < 10) {
        input.value = parseInt(input.value) + 1;
    }
}

function decrementQvQty() {
    const input = document.getElementById("qv-qty-input");
    if (input && parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

function addQvToCart(productId) {
    const input = document.getElementById("qv-qty-input");
    const qty = input ? parseInt(input.value) || 1 : 1;
    addToCart(productId, qty, true);
    closeQuickView();
}

function closeQuickView() {
    const modal = document.getElementById("quickview-modal");
    if (modal) {
        modal.classList.remove("modal-open");
        document.body.style.overflow = "";
    }
}

// ==========================================
// 8. PRODUCT RENDERING & FILTER ENGINE (For PRODUCT.html)
// ==========================================
let currentFilter = {
    category: "all",
    search: "",
    sort: "featured",
    maxPrice: 5000,
    under1000: false
};

function initProductGrid() {
    const grid = document.getElementById("products-catalog-grid");
    if (!grid) return;

    renderFilteredProducts();
    initFilterControls();
}

function renderFilteredProducts() {
    const grid = document.getElementById("products-catalog-grid");
    const countEl = document.getElementById("product-results-count");
    if (!grid) return;

    let items = [...PRODUCTS_DATA];

    // Filter by Category
    if (currentFilter.category !== "all") {
        items = items.filter(p => p.category === currentFilter.category);
    }

    // Filter by Search Query
    if (currentFilter.search.trim() !== "") {
        const query = currentFilter.search.toLowerCase().trim();
        items = items.filter(p => 
            p.name.toLowerCase().includes(query) ||
            p.categoryName.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );
    }

    // Filter by Under 1000
    if (currentFilter.under1000) {
        items = items.filter(p => p.price <= 1000);
    }

    // Sort
    if (currentFilter.sort === "price-low") {
        items.sort((a, b) => a.price - b.price);
    } else if (currentFilter.sort === "price-high") {
        items.sort((a, b) => b.price - a.price);
    } else if (currentFilter.sort === "rating") {
        items.sort((a, b) => b.rating - a.rating);
    }

    // Update Counter
    if (countEl) {
        countEl.textContent = `Showing ${items.length} of ${PRODUCTS_DATA.length} products`;
    }

    // Empty state
    if (items.length === 0) {
        grid.innerHTML = `
            <div class="empty-results-box">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <h3>No products found</h3>
                <p>We couldn't find any products matching "${currentFilter.search || currentFilter.category}".</p>
                <button class="btn btn-secondary" onclick="resetProductFilters()">Reset All Filters</button>
            </div>
        `;
        return;
    }

    grid.innerHTML = items.map(product => {
        const isWishlisted = AppState.wishlist.includes(product.id);
        return `
            <div class="product-card" data-id="${product.id}" data-category="${product.category}">
                <div class="product-card-header">
                    <span class="product-badge ${product.badgeColor}">${product.badge}</span>
                    <button class="wishlist-btn-toggle ${isWishlisted ? 'in-wishlist' : ''}" data-id="${product.id}" onclick="toggleWishlist('${product.id}')" title="Add to wishlist">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </button>
                </div>
                <div class="product-image-container" onclick="openQuickView('${product.id}')">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <div class="quick-view-overlay">
                        <button class="btn-quickview">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            Quick View
                        </button>
                    </div>
                </div>
                <div class="product-card-body">
                    <span class="product-category-label">${product.categoryName}</span>
                    <h3 class="product-title" onclick="openQuickView('${product.id}')" title="${product.name}">${product.name}</h3>
                    <div class="product-rating-row">
                        <span class="star-icon">★</span>
                        <span class="rating-score">${product.rating}</span>
                        <span class="reviews-count">(${product.reviewsCount})</span>
                    </div>
                    <div class="product-pricing">
                        <span class="price-current">₹${product.price.toLocaleString("en-IN")}</span>
                        <span class="price-original">₹${product.originalPrice.toLocaleString("en-IN")}</span>
                        <span class="discount-tag">${product.discount}</span>
                    </div>
                    <button class="btn btn-primary btn-block btn-add-cart" onclick="addToCart('${product.id}', 1)">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
    }).join("");
}

function initFilterControls() {
    // Category pills
    const pills = document.querySelectorAll(".filter-pill");
    pills.forEach(pill => {
        pill.addEventListener("click", () => {
            pills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            currentFilter.category = pill.getAttribute("data-category") || "all";
            renderFilteredProducts();
        });
    });

    // Search input
    const searchInput = document.getElementById("product-search-input");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentFilter.search = e.target.value;
            renderFilteredProducts();
        });
    }

    // Sort select
    const sortSelect = document.getElementById("product-sort-select");
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            currentFilter.sort = e.target.value;
            renderFilteredProducts();
        });
    }

    // Under 1000 checkbox / button
    const under1000Btn = document.getElementById("filter-under-1000");
    if (under1000Btn) {
        under1000Btn.addEventListener("click", () => {
            currentFilter.under1000 = !currentFilter.under1000;
            under1000Btn.classList.toggle("active", currentFilter.under1000);
            renderFilteredProducts();
        });
    }
}

function resetProductFilters() {
    currentFilter = {
        category: "all",
        search: "",
        sort: "featured",
        maxPrice: 5000,
        under1000: false
    };

    const pills = document.querySelectorAll(".filter-pill");
    pills.forEach(p => p.classList.remove("active"));
    const allPill = document.querySelector(".filter-pill[data-category='all']");
    if (allPill) allPill.classList.add("active");

    const searchInput = document.getElementById("product-search-input");
    if (searchInput) searchInput.value = "";

    const sortSelect = document.getElementById("product-sort-select");
    if (sortSelect) sortSelect.value = "featured";

    const under1000Btn = document.getElementById("filter-under-1000");
    if (under1000Btn) under1000Btn.classList.remove("active");

    renderFilteredProducts();
}

// ==========================================
// 9. FLASH SALE COUNTDOWN (For HOME.html)
// ==========================================
function initCountdown() {
    const hoursEl = document.getElementById("cd-hours");
    const minsEl = document.getElementById("cd-minutes");
    const secsEl = document.getElementById("cd-seconds");
    if (!hoursEl || !minsEl || !secsEl) return;

    // Fixed 12-hour repeating cycle
    function update() {
        const now = new Date();
        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);
        const diff = endOfDay - now;

        if (diff <= 0) {
            hoursEl.textContent = "12";
            minsEl.textContent = "00";
            secsEl.textContent = "00";
            return;
        }

        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / 1000 / 60) % 60);
        const s = Math.floor((diff / 1000) % 60);

        hoursEl.textContent = String(h).padStart(2, "0");
        minsEl.textContent = String(m).padStart(2, "0");
        secsEl.textContent = String(s).padStart(2, "0");
    }

    update();
    setInterval(update, 1000);
}

// ==========================================
// 10. MOBILE MENU & NAVBAR SCROLL
// ==========================================
function initNavbar() {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 30) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    }

    const hamburger = document.getElementById("mobile-menu-toggle");
    const mobileDrawer = document.getElementById("mobile-menu-drawer");
    const mobileOverlay = document.getElementById("mobile-menu-overlay");

    if (hamburger && mobileDrawer && mobileOverlay) {
        hamburger.addEventListener("click", () => {
            mobileDrawer.classList.toggle("open");
            mobileOverlay.classList.toggle("active");
            document.body.style.overflow = mobileDrawer.classList.contains("open") ? "hidden" : "";
        });

        mobileOverlay.addEventListener("click", () => {
            mobileDrawer.classList.remove("open");
            mobileOverlay.classList.remove("active");
            document.body.style.overflow = "";
        });
    }

    // Highlight current active link
    const path = window.location.pathname.split("/").pop() || "HOME.html";
    document.querySelectorAll(".nav-links a, .mobile-nav-links a").forEach(link => {
        const href = link.getAttribute("href");
        if (href === path || (path === "" && href === "HOME.html")) {
            link.classList.add("active");
        }
    });
}

// ==========================================
// 11. FAQ ACCORDION (For CONTACT.html)
// ==========================================
function initFaqAccordion() {
    const items = document.querySelectorAll(".faq-item");
    items.forEach(item => {
        const header = item.querySelector(".faq-question");
        if (header) {
            header.addEventListener("click", () => {
                const isOpen = item.classList.contains("open");
                items.forEach(i => i.classList.remove("open"));
                if (!isOpen) {
                    item.classList.add("open");
                }
            });
        }
    });
}

// ==========================================
// 12. FORMS HANDLERS (Contact, Login, Signup, Newsletter)
// ==========================================
function initFormHandlers() {
    // Contact Form
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("contact-name").value.trim();
            const email = document.getElementById("contact-email").value.trim();
            const message = document.getElementById("contact-message").value.trim();

            if (!name || !email || !message) {
                showToast("Please fill in all required fields", "error");
                return;
            }

            const btn = contactForm.querySelector("button[type='submit']");
            const originalText = btn.innerHTML;
            btn.innerHTML = `Sending...`;
            btn.disabled = true;

            setTimeout(() => {
                showToast(`Thank you, ${name}! Your message has been received. Our team will contact you within 24 hours.`, "success");
                contactForm.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1000);
        });
    }

    // Newsletter Form
    document.querySelectorAll(".newsletter-form").forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const input = form.querySelector("input[type='email']");
            if (input && input.value.trim()) {
                showToast("🎉 Thank you for subscribing! Check your email for your 10% coupon.", "success");
                input.value = "";
            } else {
                showToast("Please enter a valid email address.", "error");
            }
        });
    });

    // Password visibility toggle
    document.querySelectorAll(".password-toggle-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.getAttribute("data-target");
            const target = document.getElementById(targetId);
            if (target) {
                const isPassword = target.type === "password";
                target.type = isPassword ? "text" : "password";
                btn.innerHTML = isPassword ? `
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                ` : `
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                `;
            }
        });
    });

    // Login Form
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("login-email").value.trim();
            const pass = document.getElementById("login-password").value.trim();

            if (!email || !pass) {
                showToast("Please fill in both email and password.", "error");
                return;
            }

            const btn = loginForm.querySelector("button[type='submit']");
            const originalText = btn.innerHTML;
            btn.innerHTML = `Signing In...`;
            btn.disabled = true;

            setTimeout(() => {
                localStorage.setItem("hexa_user", JSON.stringify({ email: email, name: email.split("@")[0] }));
                showToast(`Welcome back, ${email.split("@")[0]}! Logged in successfully.`, "success");
                btn.innerHTML = originalText;
                btn.disabled = false;
                setTimeout(() => {
                    window.location.href = "HOME.html";
                }, 1200);
            }, 1000);
        });
    }

    // Signup Form
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("signup-name").value.trim();
            const email = document.getElementById("signup-email").value.trim();
            const pass = document.getElementById("signup-password").value.trim();

            if (!name || !email || !pass) {
                showToast("Please complete all required fields.", "error");
                return;
            }

            if (pass.length < 6) {
                showToast("Password must be at least 6 characters.", "error");
                return;
            }

            const btn = signupForm.querySelector("button[type='submit']");
            const originalText = btn.innerHTML;
            btn.innerHTML = `Creating Account...`;
            btn.disabled = true;

            setTimeout(() => {
                localStorage.setItem("hexa_user", JSON.stringify({ email: email, name: name }));
                showToast(`🎉 Account created for ${name}! Welcome to HEXA Store.`, "success");
                btn.innerHTML = originalText;
                btn.disabled = false;
                setTimeout(() => {
                    window.location.href = "HOME.html";
                }, 1200);
            }, 1000);
        });

        // Live Password Strength Indicator
        const passInput = document.getElementById("signup-password");
        const strengthBar = document.getElementById("password-strength-fill");
        const strengthText = document.getElementById("password-strength-text");

        if (passInput && strengthBar && strengthText) {
            passInput.addEventListener("input", () => {
                const val = passInput.value;
                let score = 0;
                if (val.length >= 6) score++;
                if (val.length >= 10) score++;
                if (/[0-9]/.test(val)) score++;
                if (/[^A-Za-z0-9]/.test(val)) score++;

                if (val.length === 0) {
                    strengthBar.style.width = "0%";
                    strengthBar.style.background = "#e5e7eb";
                    strengthText.textContent = "";
                } else if (score <= 1) {
                    strengthBar.style.width = "25%";
                    strengthBar.style.background = "#ef4444";
                    strengthText.textContent = "Weak";
                    strengthText.style.color = "#ef4444";
                } else if (score === 2) {
                    strengthBar.style.width = "50%";
                    strengthBar.style.background = "#f59e0b";
                    strengthText.textContent = "Fair";
                    strengthText.style.color = "#f59e0b";
                } else if (score === 3) {
                    strengthBar.style.width = "75%";
                    strengthBar.style.background = "#3b82f6";
                    strengthText.textContent = "Good";
                    strengthText.style.color = "#3b82f6";
                } else {
                    strengthBar.style.width = "100%";
                    strengthBar.style.background = "#10b981";
                    strengthText.textContent = "Strong";
                    strengthText.style.color = "#10b981";
                }
            });
        }
    }
}

// ==========================================
// 13. BACK TO TOP BUTTON
// ==========================================
function initBackToTop() {
    const btn = document.getElementById("back-to-top-btn");
    if (!btn) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            btn.classList.add("visible");
        } else {
            btn.classList.remove("visible");
        }
    });

    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Check logged in user badge
function checkUserSession() {
    const userStr = localStorage.getItem("hexa_user");
    if (userStr) {
        try {
            const user = JSON.parse(userStr);
            const userBtns = document.querySelectorAll(".nav-user-badge");
            userBtns.forEach(btn => {
                btn.innerHTML = `<span class="user-avatar-circle">${user.name.charAt(0).toUpperCase()}</span> <span class="user-name-text">${user.name}</span>`;
                btn.setAttribute("href", "#");
                btn.setAttribute("title", `Signed in as ${user.email} (Click to Logout)`);
                btn.onclick = (e) => {
                    e.preventDefault();
                    if (confirm(`Do you want to log out, ${user.name}?`)) {
                        localStorage.removeItem("hexa_user");
                        showToast("Logged out successfully", "info");
                        setTimeout(() => window.location.reload(), 600);
                    }
                };
            });
        } catch(e) {}
    }
}

// ==========================================
// 14. INITIALIZE APP ON DOM READY
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initNavbar();
    updateCartBadges();
    updateWishlistBadges();
    renderCartDrawer();
    initProductGrid();
    initCountdown();
    initFaqAccordion();
    initFormHandlers();
    initBackToTop();
    checkUserSession();

    // Drawer close on backdrop click & ESC key
    const cartOverlay = document.getElementById("cart-drawer-overlay");
    if (cartOverlay) {
        cartOverlay.addEventListener("click", closeCartDrawer);
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeCartDrawer();
            closeQuickView();
            closeCheckoutModal();
        }
    });
});
