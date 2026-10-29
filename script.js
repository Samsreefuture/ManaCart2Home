/* =========================================================
   MANACART2HOME — COMPLETE WEBSITE JAVASCRIPT
   Products | Images | Search | Filters | Cart | Checkout
   Cart Count | Plus | Minus | Remove | Icon Animation
========================================================= */

(() => {
    "use strict";

    /* =====================================================
       SETTINGS
    ===================================================== */

    const CONFIG = {
        whatsappNumber: "918125024046",
        currency: "₹"
    };

    /* =====================================================
       PRODUCT DATA — FIRST 15 PRODUCTS
    ===================================================== */

    /* =========================================================
       MANACART2HOME — FULL PRODUCT LIST
    ========================================================= */

    const makePacks = (rate, sizes) =>
        sizes.map(({ label, qty, price }) => ({
            label,
            price: price !== undefined
                ? price
                : Math.round(rate * qty * 100) / 100
        }));

    const kgPacks = rate => makePacks(rate, [
        { label: "500 GRAM", qty: 0.5 },
        { label: "1 KG", qty: 1 },
        { label: "2 KG", qty: 2 },
        { label: "5 KG", qty: 5 }
    ]);

    const largeRicePacks = rate => makePacks(rate, [
        { label: "1 KG", qty: 1, price: rate === 112 ? 112.32 : rate },
        { label: "5 KG", qty: 5, price: rate === 112 ? 561.60 : rate * 5 },
        { label: "25 KG Bag", qty: 25, price: rate === 112 ? 2808 : rate * 25 },
        { label: "50 KG Bag", qty: 50, price: rate === 112 ? 5616 : rate * 50 }
    ]);

    const products = [
        // RICE — 14 PRODUCTS
        ...[
            ["rice-regular", "BASMATI RICE REGULAR", "regular-basmati.jpg"],
            ["rice-india-gate", "BASMATI RICE INDIA GATE", "india-gate.jpg"],
            ["rice-daawat", "BASMATI RICE DAAWAT", "daawat.jpg"],
            ["rice-kohinoor", "BASMATI RICE KOHINOOR", "kohinoor.jpg"],
            ["rice-zeeba", "BASMATI RICE ZEEBA", "zeeba.jpg"]
        ].map(([id, name, image]) => ({
            id, name, category: "Rice", rate: 112,
            folder: "Rice", image, packs: largeRicePacks(112)
        })),

        ...[
            ["brown-rice", "BROWN RICE", "brown-rice.jpg", 60],
            ["sonamasoori-regular", "RICE SONAMASOORI REGULAR", "sonamasoori-regular.jpg", 48],
            ["karnool-rice", "RICE SONAMASOORI KARNOOL RICE", "karnool-rice.jpg", 48],
            ["cow-brand", "RICE SONAMASOORI COW BRAND", "cow-brand.jpg", 48],
            ["surya-rice", "RICE SONAMASOORI SURYA", "surya.jpg", 48],
            ["mateja-rice", "RICE SONAMASOORI MATEJA", "mateja.jpg", 48],
            ["hmt-rice", "RICE SONAMASOORI HMT RICE", "hmt.jpg", 48],
            ["sri-lalitha-rice", "RICE SONAMASOORI SRILALITHA", "sri-lalitha.jpg", 48],
            ["jai-sriram-rice", "RICE SONAMASOORI JAI SRIRAM", "jai-sriram.jpg", 48]
        ].map(([id, name, image, rate]) => ({
            id, name, category: "Rice", rate,
            folder: "Rice", image, packs: largeRicePacks(rate)
        })),

        // OIL — 10 PRODUCTS
        ...[
            ["gold-winner-oil", "GOLD WINNER SUNFLOWER OIL", "gold winner.jpg",
                [{ label: "1 Litre", qty: 1 }, { label: "5 Litre Can", qty: 5 }, { label: "15 KG Tin", qty: 15 }]],
            ["freedom-sunflower", "FREEDOM SUNFLOWER OIL", "freedom refined sunflower oil.jpg",
                [{ label: "1 Litre", qty: 1 }, { label: "15 KG Tin", qty: 15 }]],
            ["good-life-oil", "GOOD LIFE REFINED SUNFLOWER OIL", "good life oil.jpg",
                [{ label: "1 Litre", qty: 1 }, { label: "15 KG Tin", qty: 15 }]],
            ["gold-drop-oil", "GOLD DROP SUNFLOWER OIL", "gold drop sunflower oil.jpg",
                [{ label: "1 Litre", qty: 1 }, { label: "15 KG Tin", qty: 15 }]],
            ["vijaya-groundnut", "VIJAYA GROUNDNUT OIL", "vijaya groundnut oil.jpg",
                [{ label: "1 Litre", qty: 1 }, { label: "15 KG Tin", qty: 15 }]],
            ["777-groundnut", "777 GROUNDNUT OIL", "oil 777 groundnut oil.jpg",
                [{ label: "1 Litre", qty: 1 }, { label: "15 KG Tin", qty: 15 }]],
            ["freedom-groundnut", "FREEDOM GROUNDNUT OIL", "freedom groundnut oil.jpg",
                [{ label: "1 Litre", qty: 1 }, { label: "15 KG Tin", qty: 15 }]],
            ["fortune-mustard", "FORTUNE MUSTARD OIL", "foutune mustard oil.jpg",
                [{ label: "1 KG", qty: 1 }, { label: "1 Litre", qty: 1 }]],
            ["fortune-refined-1l", "FORTUNE REFINED OIL 1 LITRE PACKET", "fortune sunlite refined 1Lit pkt oil.jpg",
                [{ label: "1 Litre", qty: 1 }]],
            ["fortune-refined-5l", "FORTUNE REFINED OIL 5 LITRE CAN", "foutune OIL 5Lit Can.jpg",
                [{ label: "5 Litre Can", qty: 5 }]]
        ].map(([id, name, image, sizes]) => ({
            id, name, category: "Oil", rate: 185,
            folder: "oil", image,
            packs: makePacks(185, sizes)
        })),

        // FLOURS — 10 PRODUCTS
        ...[
            ["besan", "BESAN FLOUR", "besan regular.jpg", 65],
            ["atta-aashirvaad", "CHAKKI ATTA AASHIRVAAD", "aashirvaad chakki atta.jpg", 35],
            ["atta-shalimar", "CHAKKI ATTA SHALIMAR", "shalimar chakki atta.jpg", 35],
            ["atta-regular", "CHAKKI ATTA REGULAR", "chakki atta regular.jpg", 35],
            ["atta-annapurna", "CHAKKI ATTA ANNAPURNA", "chakki atta annapurna.jpg", 35],
            ["corn-flour", "CORN FLOUR REGULAR", "corn flour regular.jpg", 50],
            ["maida-shalimar", "MAIDA SHALIMAR", "shalimar maida.jpg", 39],
            ["maida-regular", "MAIDA REGULAR", "maida regular.jpg", 39],
            ["maida-surya", "MAIDA SURYA", "maida surya roxy maida.jpg", 39],
            ["maida-suprabhat", "MAIDA SUPRABHAT", "maida suprabhat.jpg", 39]
        ].map(([id, name, image, rate]) => ({
            id, name, category: "Flours", rate,
            folder: "Flours", image, packs: kgPacks(rate)
        })),

        // DRY FRUITS — PLACEHOLDER UNTIL IMAGES ARE ADDED
        ...[
            ["badam", "BADAM", 700],
            ["cashew-2-piece", "KAJU CASHEW NUT 2 PIECES", 700],
            ["cashew-4-piece", "KAJU CASHEW NUT 4 PIECES", 650],
            ["cashew-whole", "KAJU CASHEW NUT WHOLE", 650],
            ["kiss-miss", "KISS MISS", 240]
        ].map(([id, name, rate]) => ({
            id, name, category: "Dry Fruits", rate,
            folder: "DryFruits", image: "placeholder.jpg",
            packs: makePacks(rate, [
                { label: "100 GRAM", qty: 0.1 },
                { label: "250 GRAM", qty: 0.25 },
                { label: "500 GRAM", qty: 0.5 },
                { label: "1 KG", qty: 1 },
                { label: "2 KG", qty: 2 },
                { label: "5 KG", qty: 5 }
            ])
        })),

        // WHOLE SPICES — PLACEHOLDER WHERE NO MATCHING IMAGE EXISTS
        ...[
            ["black-pepper", "BLACK PEPPER WHOLE", 720, "placeholder.jpg"],
            ["dalchini", "DALCHINI", 300, "placeholder.jpg"],
            ["green-cardamom", "ELACHI GREEN (CARDAMOM)", 2200, "placeholder.jpg"],
            ["jaifal", "JAIFAL", 760, "placeholder.jpg"],
            ["japatri", "JAPATRI", 2100, "placeholder.jpg"],
            ["lavanga", "LAVANGA", 1100, "placeholder.jpg"],
            ["black-cardamom", "BLACK ELACHI", 800, "placeholder.jpg"],
            ["star-pool", "STAR POOL", 1000, "placeholder.jpg"],
            ["shajeera", "SHAJEERA", 600, "placeholder.jpg"],
            ["pattar-ka-pool", "PATTAR KA POOL", 600, "placeholder.jpg"],
            ["tez-patta", "TEZ PATTA (BAY LEAVES)", 135, "placeholder.jpg"]
        ].map(([id, name, rate, image]) => ({
            id, name, category: "Whole Spices", rate,
            folder: "WholeSpices", image,
            packs: makePacks(rate, [
                { label: "100 GRAM", qty: 0.1 },
                { label: "250 GRAM", qty: 0.25 },
                { label: "500 GRAM", qty: 0.5 },
                { label: "1 KG", qty: 1 },
                { label: "2 KG", qty: 2 },
                { label: "5 KG", qty: 5 }
            ])
        })),

        // DALS & RAWA — PLACEHOLDER UNTIL IMAGES ARE ADDED
        ...[
            ["black-chana", "BLACK CHANA", 65],
            ["bombay-rawa", "BOMBAY RAWA REGULAR", 38],
            ["idly-rawa", "IDLY RAWA REGULAR", 38],
            ["chana-dal", "CHANA DAL REGULAR", 80],
            ["putana-dal", "PUTANA DAL", 80],
            ["green-moong", "GREEN MOONG DAL WHOLE", 110],
            ["masoor-dal", "MASOOR DAL", 86],
            ["toor-dal", "TOOR DAL", 150],
            ["urad-black", "URAD DAL BLACK WHOLE", 115],
            ["yellow-moong", "YELLOW MOONG DAL", 114]
        ].map(([id, name, rate]) => ({
            id, name, category: "Dals & Rawa", rate,
            folder: "DalsRawa", image: "placeholder.jpg",
            packs: kgPacks(rate)
        })),

        // POWDERS AND WHOLE ITEMS — MATCHING IMAGE FILENAMES
        ...[
            ["chilli-regular", "CHILLI POWDER REGULAR", "Chilli Powder Regular.jpg", 310],
            ["chilli-aashirvaad", "AASHIRVAAD CHILLI POWDER", "Aashirvaad Chilli powder.jpg", 310],
            ["chilli-surya", "CHILLI POWDER SURYA", "Chilli Powder Surya.jpg", 310],
            ["chilli-mtr", "MTR CHILLI POWDER", "MTR Chilli Powder.jpg", 310],
            ["chilli-swastik", "SWASTIK CHILLI POWDER", "Swastik Chilli Powder.jpg", 310],
            ["dhaniya-aashirvaad", "AASHIRVAAD DHANIYA POWDER", "Aashirvaad Dhaniya powder.jpg", 310],
            ["dhaniya-surya", "DHANIYA POWDER SURYA", "Dhaniya Powder Surya.jpg", 310],
            ["dhaniya-mtr", "MTR DHANIYA POWDER", "MTR Dhaniya Powder.jpg", 310],
            ["dhaniya-swastik", "SWASTIK DHANIYA POWDER", "Swastik Dhaniya Powder.jpg", 310],
            ["dhaniya-regular-brand", "DHANIYA POWDER REGULAR — ₹310 RATE", "Dhaniya powder Regular.jpg", 310],
            ["turmeric-aashirvaad", "AASHIRVAAD TURMERIC POWDER", "Aashirvaad Turmeric powder.jpg", 310],
            ["turmeric-surya", "TURMERIC POWDER SURYA", "Turmeric Powder Surya", 310],
            ["turmeric-mtr", "MTR TURMERIC POWDER", "MTR Turmeric Powder.jpg", 310],
            ["turmeric-swastik", "SWASTIK TURMERIC POWDER", "Swastik Turmeric Powder.jpg", 310],
            ["turmeric-regular", "TURMERIC POWDER REGULAR", "Turmeric powder Regular.jpg", 310],
            ["coconut-powder", "COCONUT POWDER", "Coconut Powder Regular.jpg", 200],
            ["everest-kashmiri", "EVEREST KASHMIRI CHILLI POWDER", "Everest Kashmiri Chilli Powder 100grm.jpg", 800],
            ["dhaniya-regular-230", "DHANIYA POWDER REGULAR — ₹230 RATE", "Dhaniya powder Regular.jpg", 230],
            ["dhaniya-whole", "DHANIYA WHOLE REGULAR", "Dhaniya Whole Regular.jpg", 180],
            ["dry-chilli-whole", "DRY CHILLI WHOLE REGULAR", "Dry Chilli Whole Regular.jpg", 260],
            ["kashmiri-chilli", "KASHMIRI CHILLI POWDER", "MTR Kashimiri Chilli Powder.jpg", 110],
            ["salt-regular", "SALT POWDER REGULAR", "Salt Powder Regular.jpg", 25],
            ["salt-tata", "TATA SALT POWDER", "TATA Salt Powder.jpg", 25],
            ["salt-aashirvaad", "AASHIRVAAD SALT POWDER", "Salt Powder Aashirvaad.jpg", 25],
            ["sambar-mtr", "MTR SAMBAR POWDER", "MTR Samber Powder 100Grm Pkt.jpg", 500]
        ].map(([id, name, image, rate]) => ({
            id, name, category: "Powders", rate,
            folder: "Powders", image,
            packs: kgPacks(rate)
        }))
    ];

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const $ = (selector, root = document) =>
        root.querySelector(selector);

    const $$ = (selector, root = document) =>
        Array.from(root.querySelectorAll(selector));

    const productContainer = $("#products");
    const cartButton = $("#cartButton");
    const cartDrawer = $("#cartDrawer");
    const closeCartButton = $("#closeCart");
    const cartOverlay = $("#cartOverlay");
    const cartBody = $("#cartBody");
    const cartCount = $("#cartCount");
    const cartTotal = $("#cartTotal");
    const checkoutButton = $("#checkoutBtn");
    const mobileMenuButton = $("#mobileMenuBtn");
    const mainNav = $("#mainNav");

    if (!productContainer) {
        console.error(
            "ManaCart2Home: #products element not found. Check index.html."
        );
        return;
    }

    /* =====================================================
       STATE
    ===================================================== */

    const cart = new Map();

    let searchTerm = "";
    let productCategory = "All";

    /* =====================================================
       HELPERS
    ===================================================== */

    function money(value) {
        return CONFIG.currency +
            Number(value).toLocaleString("en-IN", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
    }

    function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, character => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        })[character]);
    }

    function getImagePath(product) {
        return `./images/${product.folder}/${product.image}`;
    }

    function findProduct(productId) {
        return products.find(product => product.id === productId);
    }

    function showMessage(message) {
        let messageBox = $("#searchMessage");
        let messageText = $("#searchMessageText");

        if (!messageBox) {
            messageBox = document.createElement("div");
            messageBox.id = "searchMessage";
            messageBox.className = "search-message";

            messageText = document.createElement("span");
            messageText.id = "searchMessageText";

            messageBox.appendChild(messageText);
            document.body.appendChild(messageBox);
        }

        if (!messageText) {
            messageText = messageBox.querySelector("span");

            if (!messageText) {
                messageText = document.createElement("span");
                messageBox.appendChild(messageText);
            }
        }

        messageText.textContent = message;
        messageBox.classList.add("show");

        clearTimeout(showMessage.timer);

        showMessage.timer = setTimeout(() => {
            messageBox.classList.remove("show");
        }, 2800);
    }

    /* =====================================================
       CART ICON ANIMATION
    ===================================================== */

    function setupCartAnimation() {
        if (!cartButton) return;

        if (!$("#mc2h-cart-animation-style")) {
            const style = document.createElement("style");
            style.id = "mc2h-cart-animation-style";

            style.textContent = `
                @keyframes mc2hCartBounce {
                    0%   { transform: scale(1); }
                    30%  { transform: scale(1.28) rotate(-8deg); }
                    60%  { transform: scale(0.92) rotate(6deg); }
                    100% { transform: scale(1) rotate(0); }
                }

                #cartButton.mc2h-cart-bounce {
                    animation: mc2hCartBounce 0.48s ease;
                }

                #cartCount.mc2h-count-updated {
                    animation: mc2hCartBounce 0.48s ease;
                }
            `;

            document.head.appendChild(style);
        }
    }

    function animateCartIcon() {
        if (!cartButton) return;

        setupCartAnimation();

        cartButton.classList.remove("mc2h-cart-bounce");

        if (cartCount) {
            cartCount.classList.remove("mc2h-count-updated");
        }

        // Restart the CSS animation.
        void cartButton.offsetWidth;

        cartButton.classList.add("mc2h-cart-bounce");

        if (cartCount) {
            cartCount.classList.add("mc2h-count-updated");
        }

        setTimeout(() => {
            cartButton.classList.remove("mc2h-cart-bounce");

            if (cartCount) {
                cartCount.classList.remove("mc2h-count-updated");
            }
        }, 550);
    }

    /* =====================================================
       PRODUCT TOOLBAR
    ===================================================== */

    function createToolbar() {
        let toolbar = $("#mc2h-toolbar");

        if (!toolbar) {
            toolbar = document.createElement("div");
            toolbar.id = "mc2h-toolbar";

            toolbar.innerHTML = `
                <input
                    type="search"
                    id="mc2h-search"
                    placeholder="Search rice, oil and products..."
                    aria-label="Search products"
                >

                <select id="mc2h-category" aria-label="Filter products">
                    <option value="All">All all Products</option>
                    <option value="Rice">Rice Products</option>
                    <option value="Oil">Oil Products</option>
                    <option value="Flours">Flours & Maida</option>
                    <option value="Dry Fruits">Dry Fruits</option>
                    <option value="Whole Spices">Whole Spices</option>
                    <option value="Dals & Rawa">Dals &amp; Rawa</option>
                    <option value="Powders">Powders & Salt</option>
                </select>

                <span id="mc2h-count" aria-live="polite"></span>
            `;

            productContainer.parentNode.insertBefore(
                toolbar,
                productContainer
            );
        }

        const searchInput = $("#mc2h-search");
        const categorySelect = $("#mc2h-category");

        if (searchInput) {
            searchInput.addEventListener("input", () => {
                searchTerm = searchInput.value.trim().toLowerCase();
                syncSearchInputs(searchInput);
                renderProducts();
            });
        }

        if (categorySelect) {
            categorySelect.addEventListener("change", () => {
                productCategory = categorySelect.value;
                renderProducts();
            });
        }
    }

    function syncSearchInputs(sourceInput) {
        [
            $("#searchInput"),
            $("#mobileSearchInput"),
            $("#mc2h-search")
        ].forEach(input => {
            if (input && input !== sourceInput) {
                input.value = sourceInput.value;
            }
        });
    }

    /* =====================================================
       RENDER PRODUCTS
    ===================================================== */

    function renderProducts() {
        const filteredProducts = products.filter(product => {
            const matchesSearch =
                product.name.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm) ||
                product.packs.some(pack =>
                    pack.label.toLowerCase().includes(searchTerm)
                );

            const matchesCategory =
                productCategory === "All" ||
                product.category === productCategory;

            return matchesSearch && matchesCategory;
        });

        const countElement = $("#mc2h-count");

        if (countElement) {
            countElement.textContent =
                `${filteredProducts.length} product${filteredProducts.length === 1 ? "" : "s"}`;
        }

        if (!filteredProducts.length) {
            productContainer.innerHTML = `
                <div class="mc2h-no-results"
                     style="grid-column:1/-1;text-align:center;padding:35px 12px;">
                    <div style="font-size:38px;margin-bottom:8px;">🔎</div>
                    <h3>No products found</h3>
                    <p style="color:#68766d;margin-top:6px;font-size:13px;">
                        Try another product name or change the category.
                    </p>
                    <button type="button" data-action="clear-search"
                        style="margin-top:14px;padding:10px 16px;border:0;border-radius:7px;background:#087b3b;color:white;font-weight:700;">
                        Show All Products
                    </button>
                </div>
            `;
            return;
        }

        productContainer.innerHTML = filteredProducts.map(product => `
            <article class="mc2h-card" data-product-id="${escapeHTML(product.id)}">
                <img
                    src="${escapeHTML(getImagePath(product))}"
                    alt="${escapeHTML(product.name)}"
                    loading="lazy"
                    data-product-image
                >

                <div class="mc2h-info">
                    <h3>${escapeHTML(product.name)}</h3>

                    <div class="mc2h-rate">
                        ${money(product.rate)}
                        <span style="font-size:10px;font-weight:500;color:#68766d;">
                            / kg or litre rate
                        </span>
                    </div>

                    <label style="font-size:10px;color:#68766d;font-weight:700;">
                        Choose pack size
                    </label>

                    <select data-pack-select
                        aria-label="Choose pack size for ${escapeHTML(product.name)}">
                        ${product.packs.map((pack, index) => `
                            <option value="${index}">
                                ${escapeHTML(pack.label)} — ${money(pack.price)}
                            </option>
                        `).join("")}
                    </select>

                    <div class="mc2h-selected-price" data-selected-price>
                        Price: ${money(product.packs[0].price)}
                    </div>

                    <button type="button" data-action="add-to-cart">
                        🛒 Add to Cart
                    </button>
                </div>
            </article>
        `).join("");

        productContainer.querySelectorAll("[data-product-image]").forEach(image => {
            image.addEventListener("error", () => {
                image.style.display = "none";

                const placeholder = document.createElement("div");
                placeholder.textContent = "🛍️";
                placeholder.setAttribute(
                    "aria-label",
                    "Product image unavailable"
                );
                placeholder.style.cssText =
                    "height:125px;display:grid;place-items:center;font-size:42px;background:#f7f9f6;";

                image.parentElement.insertBefore(placeholder, image);
            }, { once: true });
        });
    }

    /* =====================================================
       SEARCH
    ===================================================== */

    function runSearch(value) {
        searchTerm = String(value || "").trim().toLowerCase();

        [
            $("#searchInput"),
            $("#mobileSearchInput"),
            $("#mc2h-search")
        ].forEach(input => {
            if (input) input.value = value || "";
        });

        renderProducts();

        const productSection = $(".products-section");

        if (productSection) {
            productSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        if (!products.some(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        )) {
            showMessage("No matching products found.");
        }
    }

    function bindSearch() {
        const searchPairs = [
            ["#searchInput", "#searchBtn"],
            ["#mobileSearchInput", "#mobileSearchBtn"]
        ];

        searchPairs.forEach(([inputSelector, buttonSelector]) => {
            const input = $(inputSelector);
            const button = $(buttonSelector);

            if (input) {
                input.addEventListener("keydown", event => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        runSearch(input.value);
                    }
                });
            }

            if (button) {
                button.addEventListener("click", () => {
                    runSearch(input ? input.value : "");
                });
            }
        });
    }

    /* =====================================================
       CATEGORY LINKS
    ===================================================== */

    function bindCategoryCards() {
        $$(".category-card").forEach(card => {
            card.addEventListener("click", event => {
                const category = card.dataset.category;

                if (!category) return;

                event.preventDefault();

                if (/oil/i.test(category)) {
                    productCategory = "Oil";
                } else if (/rice/i.test(category)) {
                    productCategory = "Rice";
                } else {
                    productCategory = "All";
                }

                const categorySelect = $("#mc2h-category");

                if (categorySelect) {
                    categorySelect.value = productCategory;
                }

                renderProducts();

                const productSection = $(".products-section");

                if (productSection) {
                    productSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            });
        });
    }

    /* =====================================================
       CART QUANTITY AND TOTAL
    ===================================================== */

    function getCartQuantity() {
        let totalQuantity = 0;

        cart.forEach(item => {
            totalQuantity += item.quantity;
        });

        return totalQuantity;
    }

    function getCartTotal() {
        let total = 0;

        cart.forEach(item => {
            total += item.price * item.quantity;
        });

        return total;
    }
    /* =====================================================
   PRODUCT CARD QUANTITY CONTROLS
===================================================== */

    function getProductPackCartItem(product, packIndex) {
        const pack = product.packs[packIndex];
        if (!pack) return null;

        const cartKey = `${product.id}::${pack.label}`;

        return cart.get(cartKey) || null;
    }

    function productCartControlHTML(product, packIndex) {
        const pack = product.packs[packIndex];
        if (!pack) return "";

        const item = getProductPackCartItem(product, packIndex);

        // Product cartలో లేకపోతే Add to Cart చూపించాలి.
        if (!item) {
            return `
            <button type="button"
                class="mc2h-add-cart"
                data-action="add-to-cart">
                🛒 Add to Cart
            </button>
        `;
        }

        // Product cartలో ఉంటే Delete | Quantity | Plus చూపించాలి.
        return `
        <div class="mc2h-product-quantity">
            <button type="button"
                class="mc2h-qty-delete"
                data-action="product-remove"
                aria-label="Remove ${escapeHTML(product.name)} from cart"
                title="Remove item">
                🗑️
            </button>

            <span class="mc2h-qty-number">${item.quantity}</span>

            <button type="button"
                class="mc2h-qty-plus"
                data-action="product-plus"
                aria-label="Increase ${escapeHTML(product.name)} quantity"
                title="Increase quantity">
                +
            </button>
        </div>
    `;
    }

    function syncProductCartControls() {
        $$(".mc2h-card").forEach(card => {
            const product = findProduct(card.dataset.productId);
            if (!product) return;

            const packSelect = card.querySelector("[data-pack-select]");
            const control = card.querySelector("[data-product-cart-control]");

            if (!control) return;

            const packIndex = packSelect ? Number(packSelect.value) : 0;

            control.innerHTML = productCartControlHTML(product, packIndex);
        });
    }

    /* =====================================================
       CART OPERATIONS
    ===================================================== */

    function addToCart(product, packIndex) {
        const pack = product.packs[packIndex];

        if (!pack) return;

        const cartKey = `${product.id}::${pack.label}`;
        const existingItem = cart.get(cartKey);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.set(cartKey, {
                key: cartKey,
                productId: product.id,
                name: product.name,
                packLabel: pack.label,
                price: pack.price,
                quantity: 1
            });
        }

        renderCart();
        animateCartIcon();

        showMessage(`${product.name} added to cart.`);
    }

    function changeQuantity(cartKey, change) {
        const item = cart.get(cartKey);

        if (!item) return;

        item.quantity += change;

        if (item.quantity <= 0) {
            cart.delete(cartKey);
            showMessage("Item removed from cart.");
        } else {
            showMessage("Cart quantity updated.");
        }

        renderCart();
    }

    function removeFromCart(cartKey) {
        if (!cart.has(cartKey)) return;

        cart.delete(cartKey);

        renderCart();
        showMessage("Item removed from cart.");
    }

    /* =====================================================
       RENDER CART
    ===================================================== */

    function renderCart() {
        // Update the cart icon count.
        if (cartCount) {
            cartCount.textContent = getCartQuantity();
            cartCount.setAttribute(
                "aria-label",
                `${getCartQuantity()} items in cart`
            );
        }

        // Update total amount.
        if (cartTotal) {
            cartTotal.textContent = money(getCartTotal());
        }

        if (!cartBody) {
            if (checkoutButton) {
                checkoutButton.disabled = cart.size === 0;
            }
            return;
        }

        // Empty cart view.
        if (cart.size === 0) {
            cartBody.innerHTML = `
                <div class="empty-cart">
                    <div class="empty-cart-icon">🛒</div>
                    <h3>Your cart is empty</h3>
                    <p>Add products to start your order.</p>
                    <button type="button" data-action="continue-shopping"
                        style="margin-top:15px;padding:10px 15px;border:0;border-radius:7px;background:#087b3b;color:white;font-weight:700;">
                        Continue Shopping
                    </button>
                </div>
            `;

            if (checkoutButton) checkoutButton.disabled = true;
            return;
        }

        if (checkoutButton) checkoutButton.disabled = false;

        // Cart item rows, quantity controls and remove button.
        cartBody.innerHTML = Array.from(cart.values()).map(item => `
            <div class="cart-item" data-cart-key="${escapeHTML(item.key)}">
                <div style="flex:1;min-width:0;">
                    <h3>${escapeHTML(item.name)}</h3>

                    <p>
                        ${escapeHTML(item.packLabel)} × ${item.quantity}
                    </p>

                    <strong style="display:block;margin-top:5px;color:#087b3b;font-size:13px;">
                        ${money(item.price * item.quantity)}
                    </strong>

                    <div style="display:flex;align-items:center;gap:8px;margin-top:9px;">
                        <button
                            type="button"
                            data-action=data-action="cart-minus"
                            aria-label="Decrease quantity"
                            style="width:30px;height:30px;border:1px solid #d6ded8;border-radius:6px;background:#fff;font-size:18px;cursor:pointer;">
                            −
                        </button>

                        <span style="min-width:22px;text-align:center;font-size:13px;font-weight:800;"
                              aria-label="Quantity">
                            ${item.quantity}
                        </span>

                        <button
                            type="button"
                            data-action="cart-plus"
                            aria-label="Increase quantity"
                            style="width:30px;height:30px;border:1px solid #d6ded8;border-radius:6px;background:#fff;font-size:18px;cursor:pointer;">
                            +
                        </button>

                        <button
                            type="button"
                            data-action="cart-remove"
                            aria-label="Remove ${escapeHTML(item.name)} from cart"
                            style="margin-left:auto;padding:6px 9px;border:0;border-radius:5px;background:#fff0ef;color:#d93025;cursor:pointer;font-weight:700;">
                            🗑 Remove
                        </button>
                    </div>
                </div>
            </div>
        `).join("") + `
            <div style="padding-top:15px;color:#68766d;font-size:11px;">
                Delivery: Free (current offer)
            </div>
        `;
    }

    /* =====================================================
       CART DRAWER
    ===================================================== */

    function openCart() {
        if (cartDrawer) {
            cartDrawer.classList.add("open");
            cartDrawer.setAttribute("aria-hidden", "false");
        }

        if (cartOverlay) {
            cartOverlay.classList.add("show");
        }

        document.body.style.overflow = "hidden";

        if (closeCartButton) closeCartButton.focus();
    }

    function closeCart() {
        if (cartDrawer) {
            cartDrawer.classList.remove("open");
            cartDrawer.setAttribute("aria-hidden", "true");
        }

        if (cartOverlay) {
            cartOverlay.classList.remove("show");
        }

        document.body.style.overflow = "";

        if (cartButton) cartButton.focus();
    }

    if (cartButton) {
        cartButton.addEventListener("click", openCart);
    }

    if (closeCartButton) {
        closeCartButton.addEventListener("click", closeCart);
    }

    if (cartOverlay) {
        cartOverlay.addEventListener("click", closeCart);
    }

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeCart();

            if (mainNav) mainNav.classList.remove("open");
        }
    });

    /* =====================================================
       CHECKOUT
    ===================================================== */

    function createOrderSummary(customer) {
        const lines = Array.from(cart.values()).map((item, index) => {
            return `${index + 1}. ${item.name}\n` +
                `   Pack: ${item.packLabel}\n` +
                `   Quantity: ${item.quantity}\n` +
                `   Price: ${money(item.price * item.quantity)}`;
        });

        return [
            "MANACART2HOME — ORDER REQUEST",
            "",
            `Customer: ${customer.name}`,
            `Phone: ${customer.phone}`,
            `Address: ${customer.address}`,
            "",
            ...lines,
            "",
            `Total: ${money(getCartTotal())}`,
            "Delivery: Free (current offer)",
            "",
            "Please confirm availability and final order details."
        ].join("\n");
    }

    function checkout() {
        if (cart.size === 0) {
            showMessage("Your cart is empty.");
            return;
        }

        const name = prompt("Enter your full name:");

        if (name === null) return;

        if (!name.trim()) {
            showMessage("Please enter your name.");
            return;
        }

        const phone = prompt("Enter your contact phone number:");

        if (phone === null) return;

        const cleanPhone = phone.replace(/[\s\-()+]/g, "");

        if (!/^\d{10,15}$/.test(cleanPhone)) {
            showMessage("Please enter a valid phone number.");
            return;
        }

        const address = prompt("Enter your full delivery address:");

        if (address === null) return;

        if (!address.trim()) {
            showMessage("Please enter your delivery address.");
            return;
        }

        const customer = {
            name: name.trim(),
            phone: cleanPhone,
            address: address.trim()
        };

        const orderSummary = createOrderSummary(customer);

        if (CONFIG.whatsappNumber) {
            const whatsappNumber =
                CONFIG.whatsappNumber.replace(/\D/g, "");

            if (!/^\d{10,15}$/.test(whatsappNumber)) {
                showMessage(
                    "Please check the WhatsApp number in script.js."
                );
                return;
            }

            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderSummary)}`;

            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );

            showMessage(
                "Order summary opened in WhatsApp. Send the message to submit your request."
            );
        } else {
            window.alert(
                "Your order summary is ready, but your order has NOT been submitted.\n\n" +
                orderSummary +
                "\n\nTo receive orders, configure your real WhatsApp number in script.js " +
                "or connect a secure order backend."
            );
        }
    }

    if (checkoutButton) {
        checkoutButton.addEventListener("click", checkout);
    }

    /* =====================================================
       PACK SELECTION
    ===================================================== */

    document.addEventListener("change", event => {
        const select = event.target.closest("[data-pack-select]");

        if (!select) return;

        const card = select.closest("[data-product-id]");
        if (!card) return;

        const product = findProduct(card.dataset.productId);
        if (!product) return;

        const pack = product.packs[Number(select.value)];
        const priceElement = card.querySelector("[data-selected-price]");

        if (pack && priceElement) {
            priceElement.textContent = `Price: ${money(pack.price)}`;
        }
    });

    /* =====================================================
       DELEGATED PRODUCT AND CART EVENTS
    ===================================================== */

    document.addEventListener("click", event => {
        const actionElement = event.target.closest("[data-action]");

        if (!actionElement) return;

        const action = actionElement.dataset.action;

        // Add selected product and pack to cart.
        if (action === "add-to-cart") {
            const card = actionElement.closest("[data-product-id]");
            if (!card) return;

            const product = findProduct(card.dataset.productId);
            if (!product) return;

            const packSelect = card.querySelector("[data-pack-select]");
            const packIndex = packSelect
                ? Number(packSelect.value)
                : 0;

            addToCart(product, packIndex);
            return;
        }

        // Clear product search.
        if (action === "clear-search") {
            searchTerm = "";
            productCategory = "All";

            const searchInput = $("#mc2h-search");
            const categorySelect = $("#mc2h-category");

            if (searchInput) searchInput.value = "";
            if (categorySelect) categorySelect.value = "All";

            syncSearchInputs(searchInput);
            renderProducts();
            return;
        }

        // Close cart and return to products.
        if (action === "continue-shopping") {
            closeCart();

            const productSection = $(".products-section");

            if (productSection) {
                productSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

            return;
        }

        // Handle quantity and remove controls.
        const cartItem = actionElement.closest("[data-cart-key]");

        if (!cartItem) return;

        const cartKey = cartItem.dataset.cartKey;

        if (action === "increase") {
            changeQuantity(cartKey, 1);
        } else if (action === "decrease") {
            changeQuantity(cartKey, -1);
        } else if (action === "remove") {
            removeFromCart(cartKey);
        }
    });

    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    if (mobileMenuButton && mainNav) {
        mobileMenuButton.setAttribute("aria-expanded", "false");

        mobileMenuButton.addEventListener("click", () => {
            const isOpen = mainNav.classList.toggle("open");

            mobileMenuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );
        });

        $$(".nav-inner a", mainNav).forEach(link => {
            link.addEventListener("click", () => {
                mainNav.classList.remove("open");

                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );
            });
        });
    }

    /* =====================================================
       NAVIGATION — SMOOTH SCROLL
    ===================================================== */

    $$('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const targetID = link.getAttribute("href");

            if (!targetID || targetID === "#") return;

            const target = document.querySelector(targetID);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                if (mainNav) mainNav.classList.remove("open");

                if (mobileMenuButton) {
                    mobileMenuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }
            }
        });
    });

    /* =====================================================
       FOOTER YEAR
    ===================================================== */

    const yearElement = $("#currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    /* =====================================================
       INITIALISE WEBSITE
    ===================================================== */

    setupCartAnimation();
    createToolbar();
    bindSearch();
    bindCategoryCards();
    renderProducts();
    renderCart();

    console.info(
        `ManaCart2Home ready: ${products.length} products loaded.`
    );

})();

/* =========================================================
   MANACART2HOME — CONTINUOUS INFINITE BANNER SLIDER
========================================================= */
(() => {
    "use strict";

    function initContinuousBanner() {
        const slider = document.querySelector("#mcBannerSlider");
        if (!slider || slider.dataset.loopReady === "true") return;

        const track = slider.querySelector(".mc-banner-track");
        if (!track) return;

        const originalSlides = Array.from(
            track.querySelectorAll(".mc-banner-slide")
        );
        const prevBtn = slider.querySelector(".mc-banner-prev");
        const nextBtn = slider.querySelector(".mc-banner-next");
        const dots = Array.from(
            slider.querySelectorAll(".mc-banner-dots button")
        );

        const total = originalSlides.length;
        if (total < 2) return;

        slider.dataset.loopReady = "true";

        // Duplicate all five banners to create a seamless loop.
        originalSlides.forEach(slide => {
            const clone = slide.cloneNode(true);
            clone.setAttribute("aria-hidden", "true");
            track.appendChild(clone);
        });

        let index = 0;
        let timer = null;
        let touchStartX = 0;

        track.style.display = "flex";
        track.style.flexDirection = "row";
        track.style.flexWrap = "nowrap";
        track.style.transition = "transform 0.6s ease";
        track.style.willChange = "transform";

        Array.from(track.children).forEach(slide => {
            slide.style.flex = "0 0 100%";
            slide.style.width = "100%";
            slide.style.minWidth = "100%";
            slide.style.maxWidth = "100%";
        });

        function updateDots() {
            const activeIndex = index % total;

            dots.forEach((dot, i) => {
                dot.classList.toggle("active", i === activeIndex);
                dot.setAttribute(
                    "aria-current",
                    i === activeIndex ? "true" : "false"
                );
            });
        }

        function moveTo(newIndex) {
            index = newIndex;
            track.style.transition = "transform 0.6s ease";
            track.style.transform = `translateX(-${index * 100}%)`;
            updateDots();
        }

        // When the duplicate set begins, jump back invisibly.
        track.addEventListener("transitionend", () => {
            if (index >= total) {
                track.style.transition = "none";
                index = 0;
                track.style.transform = "translateX(0%)";
                updateDots();

                // Apply the invisible reset before restoring animation.
                void track.offsetWidth;
                track.style.transition = "transform 0.6s ease";
            }
        });

        function next() {
            moveTo(index + 1);
        }

        function previous() {
            if (index === 0) {
                // Move to the equivalent duplicated position invisibly.
                track.style.transition = "none";
                index = total;
                track.style.transform = `translateX(-${index * 100}%)`;
                void track.offsetWidth;
            }

            moveTo(index - 1);
        }

        function stopAuto() {
            if (timer) {
                clearInterval(timer);
                timer = null;
            }
        }

        function startAuto() {
            stopAuto();
            timer = setInterval(next, 4000);
        }

        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                next();
                startAuto();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener("click", () => {
                previous();
                startAuto();
            });
        }

        dots.forEach((dot, i) => {
            dot.addEventListener("click", () => {
                moveTo(i);
                startAuto();
            });
        });

        slider.addEventListener("mouseenter", stopAuto);
        slider.addEventListener("mouseleave", startAuto);

        slider.addEventListener("touchstart", event => {
            touchStartX = event.changedTouches[0].clientX;
            stopAuto();
        }, { passive: true });

        slider.addEventListener("touchend", event => {
            const difference =
                event.changedTouches[0].clientX - touchStartX;

            if (Math.abs(difference) > 45) {
                if (difference < 0) {
                    next();
                } else {
                    previous();
                }
            }

            startAuto();
        }, { passive: true });

        moveTo(0);
        startAuto();
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initContinuousBanner
        );
    } else {
        initContinuousBanner();
    }
})();
