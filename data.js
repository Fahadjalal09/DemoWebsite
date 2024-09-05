// Array of slider images for a carousel or banner
const sliderImages = [
    {
        src: "./Public/banner-1920x700.jpg",  // Path to the image file
        alt: "Slider Image 1"                 // Alternative text for accessibility and SEO
    },
    {
        src: "./Public/bannner-1.png",        // Path to the second image file
        alt: "Slider Image 2"                 // Alternative text for the second image
    }
    // more images can be added following the same structure
];

// Array of testimonials for displaying user feedback
const testimonials = [
    {
        imgSrc: './Public/testi2.png',        // Path to the testimonial image or avatar
        name: 'John Doe',                     // Name of the person giving the testimonial
        text: 'Aenean In Vestibulum Nibh. Sed Eget Felis Nunc. Proin Et Convallis Leo, Id Luctus Odio. Sed Eget Felis In Tortor Dignissim Facilisis.', // Testimonial content
        role: 'Web Developer'                 // Role or job title of the person giving the testimonial
    },
    {
        imgSrc: './Public/testi3.png',        // Path to another testimonial image
        name: 'Jane Smith',                   // Name of the second person giving feedback
        text: 'Vestibulum Facilisis Lacinia Eros Eu Finibus. Sed Vel Varius Nunc. Suspendisse Potenti.', // Testimonial content for the second person
        role: 'UI/UX Designer'                // Role of the second person
    },
    {
        imgSrc: 'https://via.placeholder.com/100', // Placeholder image for the testimonial avatar
        name: 'David Miller',                 // Name of the third person giving feedback
        text: 'Pellentesque Habitant Morbi Tristique Senectus Et Netus Et Malesuada Fames Ac Turpis Egestas.', // Feedback text from the third person
        role: 'Software Engineer'             // Role of the third person
    }
];

// Array of products for an e-commerce product grid
const products = [
    {
        id: 1,                                // Unique identifier for the product
        name: 'Apple Cinema 30"',             // Name or title of the product
        isOnSale: true,                       // Boolean indicating if the product is on sale
        images: [                             // Array of product images
            { 
                src: './Public/temp-2.jpg',   // Path to the first product image
                alt: 'product-img'            // Alternative text for the first image
            }, 
            { 
                src: './Public/temp.png',     // Path to the second product image
                alt: 'img'                    // Alternative text for the second image
            }
        ],
        rating: 5,                            // Rating of the product (out of 5)
        price: 122,                           // Price of the product
        salePercentage: 10                    // Discount percentage (if any)
    },
    {
        id: 2,                                // Unique identifier for the second product
        name: 'Apple Cinema 30"',             // Name of the second product
        isOnSale: true,                       // Boolean indicating if the second product is on sale
        images: [                             // Array of images for the second product
            { 
                src: './Public/temp.png',     // Path to the product image
                alt: 'img'                    // Alternative text for the image
            },
            { 
                src: './Public/temp-2.jpg',   // Path to the second product image
                alt: 'img'                    // Alternative text for the second image
            }
        ],
        rating: 3,                            // Rating for the second product
        price: 122,                           // Price of the second product
        salePercentage: 15                    // Discount percentage (15% off)
    },
    {
        id: 3,                                // Identifier for the third product
        name: 'Apple Cinema 30"',             
        isOnSale: true,                       
        images: [                             
            { 
                src: './Public/temp-2.jpg',   
                alt: 'img'                    
            }, 
            { 
                src: './Public/temp.png',     
                alt: 'img'                    
            }
        ],
        rating: 3,                            
        price: 122,                           
        salePercentage: 20                    
    },
    {
        id: 4,                                
        name: 'Apple Cinema 30"',             
        isOnSale: false,                      // This product is not on sale
        images: [                             
            { 
                src: './Public/temp.png',     
                alt: 'img'                    
            },
            { 
                src: './Public/temp-2.jpg',   
                alt: 'img'                    
            }
        ],
        rating: 3,                            
        price: 122,                           
        salePercentage: 0                     // No discount for this product
    },
    {
        id: 5,                                
        name: 'Apple Cinema 30"',             
        isOnSale: true,                       
        images: [                             
            { 
                src: './Public/temp.png',     
                alt: 'img'                    
            },
            { 
                src: './Public/temp-2.jpg',   
                alt: 'img'                    
            }
        ],
        rating: 3,                            
        price: 122,                           
        salePercentage: 25                    
    },
    {
        id: 6,                                
        name: 'Apple Cinema 30"',             
        isOnSale: false,                      
        images: [                             
            { 
                src: './Public/temp.png',     
                alt: 'img'                    
            },
            { 
                src: './Public/temp-2.jpg',   
                alt: 'img'                    
            }
        ],
        rating: 0,                            // Product has no rating
        price: 122,                           
        salePercentage: 0                     // No discount for this product
    }
];


const loadSliderImages = () => {
    const carouselInner = document.getElementById('carouselInner');
    let isFirstItem = true;

    sliderImages.forEach((image, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (isFirstItem) {
            carouselItem.classList.add('active');
            isFirstItem = false;
        }

        const img = document.createElement('img');
        img.src = image.src;
        img.className = 'd-block w-100';
        img.alt = image.alt;

        carouselItem.appendChild(img);
        carouselInner.appendChild(carouselItem);
    });
}

// Function to render products
function renderProducts() {
    const productContainer = document.getElementById('product-container'); // Assuming this is the container for your products

    products.forEach(product => {
        // Calculate the sale price
        const salePrice = product.price - (product.price * (product.salePercentage / 100));

        // Create product card div
        const productCard = document.createElement('div');
        productCard.classList.add('col');
        productCard.innerHTML = `
            <div class="card text-center border-0">
                ${product.isOnSale ? `
                <div class="position-absolute top-0 start-0 m-2">
                    <span class="badge bg-danger" style="font-size: 12px;">${product.salePercentage}% SALE</span>
                </div>` : ''}
                <img src="${product.images[0].src}" class="card-img-top main-image" alt="${product.images[0].alt}">
                <div class="card-body">
                    <p class="card-title text-muted mb-2" style="font-size: 16px;">${product.name}</p>
                    <div class="mb-2">
                        ${renderRating(product.rating)}
                    </div>
                    ${product.isOnSale ? `<p class="card-text fw-bold" style="font-size: 18px; color: #000;">$${salePrice.toFixed(2)}
                        <span class="text-muted text-decoration-line-through" style="font-size: 14px;">$${product.price.toFixed(2)}</span>
                    </p>` : `<p class="card-text fw-bold" style="font-size: 18px; color: #000;">$${salePrice.toFixed(2)}</p>`}
                    <button class="btn" style="margin-top: -25px; font-size: 18px; color: #1fc0a0;"
                                onclick="sendWhatsAppMessage()">Order Now</button>
                </div>
            </div>
        `;

        // Add hover functionality
        productCard.addEventListener('mouseenter', () => startImageSlider(productCard, product.images));
        productCard.addEventListener('mouseleave', () => stopImageSlider(productCard, product.images[0].src));

        // Append the card to the container
        productContainer.appendChild(productCard);
    });
}

let intervalId;

// Function to start the image slider
function startImageSlider(productCard, images) {
    productCard.classList.add('transform-scale')
    const imgElement = productCard.querySelector('.main-image');
    let currentIndex = 0;

    // Start the interval to switch images
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex].src;
    }, 1000); // Change image every 1 second
}

// Function to stop the image slider and reset to the first image
function stopImageSlider(productCard, originalSrc) {
    productCard.classList.remove('transform-scale')
    clearInterval(intervalId);
    const imgElement = productCard.querySelector('.main-image');
    imgElement.src = originalSrc;
}

// Function to render rating stars
function renderRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<span class= ${i <= rating ? "text-warning" : "text-muted"}>${i <= rating ? '★' : '☆'}</span>`;
    }
    return stars;
}

// Call the renderProducts function to render the products on the page
renderProducts();


loadSliderImages()

// Function to render carousel dynamically
function renderTestimonials() {
    const carouselInner = document.getElementById('feedbackInner');
    const carouselIndicators = document.getElementById('carouselIndicators');

    testimonials.forEach((testimonial, index) => {
        // Create carousel item
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (index === 0) carouselItem.classList.add('active'); // Add active class to the first item

        carouselItem.innerHTML = `
            <div class="d-flex align-items-center justify-content-center flex-column flex-md-row">
                <img src="${testimonial.imgSrc}" class="rounded-circle img-fluid border border-4 mb-3 mb-md-0"
                    alt="Profile Image" style="width: 100px; height: 100px; border-color: #1fc0a0 !important;">
                <div class="text-start text-center text-md-start ms-md-3">
                    <h5 class="fw-bold text-dark">${testimonial.name}</h5>
                    <p class="text-muted mb-1">${testimonial.text}</p>
                    <p class="text-secondary mb-0">- ${testimonial.role}</p>
                </div>
            </div>
        `;

        // Append the carousel item to the carousel inner
        carouselInner.appendChild(carouselItem);

        // Create carousel indicator
        const indicator = document.createElement('li');
        indicator.setAttribute('data-bs-target', '#testimonialCarousel');
        indicator.setAttribute('data-bs-slide-to', index);
        if (index === 0) indicator.classList.add('active'); // Set first indicator as active
        carouselIndicators.appendChild(indicator);
    });
}

// Call the function to render testimonials
renderTestimonials();