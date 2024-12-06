const products = [
    {
        name: "Ebook Desserts in Cups",
        description: "Delicious dessert recipes in cups that are easy to prepare.",
        price: "$5.00",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/F96884962F?ap=7fe9",
        category: "Cooking",
        reviews: [
            { rating: 5, comment: "Excellent recipes! Easy to follow and delicious." }
        ]
    },
    {
        name: "Personal Development",
        description: "Complete course to improve your skills and achieve your goals.",
        price: "$7.00",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/Q96901756H?dp=1",
        category: "Personal Development",
        reviews: [
            { rating: 5, comment: "This course changed my life. Highly recommended." },
            { rating: 4, comment: "Very good content and practical exercises." }
        ]
    },
    {
        name: "Stoic Development",
        description: "Learn the principles of Stoicism and how to apply them in your daily life.",
        price: "$4.58",
        image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/E96901806J?dp=1",
        category: "Personal Development",
        reviews: [
            { rating: 5, comment: "A refreshing perspective on Stoic philosophy." },
            { rating: 4, comment: "Good techniques for managing stress and emotions." }
        ]
    },
    {
        name: "Mindfulness Course",
        description: "Learn to live in the present and reduce stress with mindfulness.",
        price: "$19.75",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/Y96901879J?dp=1",
        category: "Wellness",
        reviews: [
            { rating: 5, comment: "This course has transformed my view of life." },
            { rating: 4, comment: "Very useful for managing daily anxiety and stress." }
        ]
    },
    {
        name: "Legendary Productivity",
        description: "Maximize your productivity and reach your goals faster.",
        price: "$16.17",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/X96901930W",
        category: "Personal Development",
        reviews: [
            { rating: 5, comment: "This course has revolutionized my way of working." },
            { rating: 4, comment: "Excellent techniques to improve productivity." }
        ]
    },
    {
        name: "Step-by-Step Guide to Starting Your Industrial Catering Business",
        description: "Learn how to start and manage a successful industrial catering business.",
        price: "65.83",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/M96901939V?dp=1",
        category: "Business",
        reviews: [
            { rating: 5, comment: "Complete and detailed guide. Very useful for entrepreneurs." },
            { rating: 4, comment: "Good ideas and practical business advice." }
        ]
    },
    {
        name: "Digital Marketing",
        description: "Master digital marketing strategies to grow your business.",
        price: "$6.58",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/F96901990L?dp=1",
        category: "Marketing",
        reviews: [
            { rating: 5, comment: "Very complete and up-to-date course. Highly recommended." },
            { rating: 4, comment: "Excellent content on SEO and social media." }
        ]
    },
    {
        name: "Personal Finance",
        description: "Learn how to manage your finances and achieve financial freedom.",
        price: "$3.33",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/K96902015T?dp=1",
        category: "Finance",
        reviews: [
            { rating: 5, comment: "This course changed my relationship with money." },
            { rating: 4, comment: "Very useful for learning to save and invest." }
        ]
    },
    {
        name: "Radiant Eyebrows Manual",
        description: "Learn professional techniques for perfect eyebrows.",
        price: "$5.00",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/X96902033K?dp=1",
        category: "Beauty",
        reviews: [
            { rating: 5, comment: "Excellent techniques and easy to follow." },
            { rating: 4, comment: "Very useful for improving the look of eyebrows." }
        ]
    },
    {
        name: "PRO Eyebrows Method - 7D",
        description: "Master the art of eyebrow design in 7 days.",
        price: "$115.17",
        image: "https://static-media.hotmart.com/PDiAmYj6T7jA7T_zngjiW5OBAS0=/300x300/smart/filters:format(webp):background_color(white)/hotmart/product_pictures/878de3fc-e830-4bfd-94c2-a598b606ed8e/Portadahotmar600x600px1.png?w=920",
        link: "https://go.hotmart.com/Y96902046E?dp=1",
        category: "Beauty",
        reviews: [
            { rating: 5, comment: "Very complete and professional course." },
            { rating: 4, comment: "I learned a lot in a short time. Recommended." }
        ]
    },
    {
        name: "PRO Eyebrows Method - 7D Launch Coupon Offer",
        description: "Special offer: Master the art of eyebrow design in 7 days.",
        price: "$115.17",
        image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/Y96902046E?ap=063f",
        category: "Beauty",
        reviews: [
            { rating: 5, comment: "Excellent offer. The course is worth every penny." },
            { rating: 4, comment: "Very good content at an affordable price." }
        ]
    },
    {
        name: "Fitness Meals",
        description: "Healthy and delicious recipes to maintain your physical shape.",
        price: "$12.25",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/P96903251P?dp=1",
        category: "Health and Fitness",
        reviews: [
            { rating: 5, comment: "Easy and very tasty recipes. Highly recommended." },
            { rating: 4, comment: "Good variety of options for a balanced diet." }
        ]
    },
    {
        name: "Fitness for Beginners",
        description: "Complete guide to start your fitness journey from scratch.",
        price: "$54.00",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/I96903262P?dp=1",
        category: "Health and Fitness",
        reviews: [
            { rating: 5, comment: "This course helped me get started with fitness." },
            { rating: 4, comment: "Clear instructions and motivating." }
        ]
    },

    {
        
            name: "10 Fitness Recipes",
            description: "A collection of 10 easy and delicious fitness recipes.",
            price: "$3.50",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
            link: "https://go.hotmart.com/J96903270L?dp=1",
            category: "Health and Fitness",
            reviews: [
                { rating: 5, comment: "Quick and tasty recipes. Perfect for everyday." },
                { rating: 4, comment: "Good variety of healthy options." }
            ]
        },
        {
            name: "Fitness for Busy Moms",
            description: "Exercise and nutrition program for moms with little free time.",
            price: "$3.40",
            image: "https://static-media.hotmart.com/HF-cAKA8_mAzNtsRRWFWpQWJi3A=/300x300/smart/filters:format(webp):background_color(white)/hotmart/product_pictures/853ddf01-fe6a-49c7-aa7f-e38136f9ea3d/FITNESPARAMADRESOCUPADAS1.png?w=920",
            link: "https://go.hotmart.com/C96903273V?dp=1",
            category: "Health and Fitness",
            reviews: [
                { rating: 5, comment: "Perfect for moms who want to stay fit." },
                { rating: 4, comment: "Short but effective routines. Very practical." }
            ]
        },
        {
            name: "Introduction to Sphero-dynamics for Adults",
            description: "Learn the basics of sphero-dynamics to improve your health.",
            price: "$67.95",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
            link: "https://go.hotmart.com/G96903280D?dp=1",
            category: "Health and Fitness",
            reviews: [
                { rating: 5, comment: "Excellent introduction to sphero-dynamics." },
                { rating: 4, comment: "Very useful for improving posture and flexibility." }
            ]
        },
        {
            name: "The Moon Diet",
            description: "Discover how to sync your diet with the lunar phases.",
            price: "$6.58",
            image: "https://images.unsplash.com/photo-1532767153582-b1a0e5145009?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
            link: "https://go.hotmart.com/B96903289W?dp=1",
            category: "Health and Fitness",
            reviews: [
                { rating: 5, comment: "Interesting approach to nutrition. Very effective for weight loss." },
                { rating: 4, comment: "Innovative and easy-to-follow concepts." }
            ]
        },
        {
            name: "Yoga Teacher Training",
            description: "Complete training to become a certified yoga teacher.",
            price: "$220.20",
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
            link: "https://go.hotmart.com/V96903295D?dp=1",
            category: "Health and Fitness",
            reviews: [
                { rating: 5, comment: "Very complete and professional course. Highly recommended." },
                { rating: 4, comment: "Excellent training for future yoga instructors." }
            ]
        },
        {
            name: "GlowFlow Yoga",
            description: "Discover the transformative power of yoga for your body and mind.",
            price: "$4.50",
            image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
            link: "https://go.hotmart.com/B96903321K?dp=1",
            category: "Health and Fitness",
            reviews: [
                { rating: 5, comment: "Excellent yoga program. I feel rejuvenated." },
                { rating: 4, comment: "Well-structured and easy-to-follow classes." }
            ]
        },
        {
            name: "Kids Yoga Instructor",
            description: "Learn how to teach yoga to children in a fun and effective way.",
            price: "$9.58",
            image: "https://static-media.hotmart.com/Pj46V7RaXSuMs0p3xN_kyQZMt4o=/300x300/smart/filters:format(webp):background_color(white)/hotmart/product_pictures/97e0448a-07f1-47c4-b1ee-8742a1d9ae3f/INSTRUCTORDEYOGAKIDS.png?w=920",
            link: "https://go.hotmart.com/E96903335O?dp=1",
            category: "Education",
            reviews: [
                { rating: 5, comment: "Very complete course. Perfect for working with kids." },
                { rating: 4, comment: "Good techniques to keep kids engaged." }
            ]
        },
        {
            name: "NUTRITION",
            description: "Complete nutrition course for a healthy life.",
            price: "$16.58",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
            link: "https://go.hotmart.com/M96903366L?dp=1",
            category: "Health and Fitness",
            reviews: [
                { rating: 5, comment: "Excellent course. I learned a lot about healthy eating." },
                { rating: 4, comment: "Very useful information, well explained." }
            ]
        },
        {
            name: "SPORTS NUTRITION",
            description: "Learn how to eat like a professional athlete.",
            price: "$3.40",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
            link: "https://go.hotmart.com/H96903379P?dp=1",
            category: "Health and Fitness",
            reviews: [
                { rating: 5, comment: "Perfect for athletes. I improved my performance." },
                { rating: 4, comment: "Good recommendations for pre- and post-training nutrition." }
            ]
        },
        {
            name: "WELLNESS PACK",
            description: "Complete set of resources to improve your physical and mental well-being.",
            price: "$33.92",
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
            link: "https://go.hotmart.com/O96903389U",
            category: "Health and Fitness",
            reviews: [
                { rating: 5, comment: "Very complete pack. Worth every penny." },
                { rating: 4, comment: "Excellent variety of resources for overall well-being." }
            ]
        },
        {
            name: "Slim Wellness",
            description: "Holistic program for healthy and sustainable weight loss.",
            price: "$3.22",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
            link: "https://go.hotmart.com/B96903398P?dp=1",
            category: "Health and Fitness",
            reviews: [
                { rating: 5, comment: "Amazing program. I lost weight and gained energy." },
                { rating: 4, comment: "Very balanced approach to weight control." }
            ]
        },
        {
            name: "Body Language Course",
            description: "Learn to read and use body language effectively.",
            price: "$3.50",
            image: "https://static-media.hotmart.com/chESvcTp5T-NkF5WvE5qaqjfANE=/300x300/smart/filters:format(webp):background_color(white)/hotmart/product_contents/5de2aea3-df0f-4dca-9f3a-c8babb60b5c4/cursoonline.png?w=920",
            link: "https://go.hotmart.com/F96903407Y?dp=1",
            category: "Personal Development",
            reviews: [
                { rating: 5, comment: "Fascinating course. Very useful in my personal and professional life." },
                { rating: 4, comment: "Good techniques to improve non-verbal communication." }
            ]
    }
];

function displayProducts(productsToShow = products) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="category">${product.category}</p>
                <p class="price">${product.price}</p>
            </div>
        `;
        productCard.addEventListener('click', () => openModal(product));
        productGrid.appendChild(productCard);
    });
}

function openModal(product) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');
    const modalLink = document.getElementById('modal-link');
    const modalReviews = document.getElementById('modal-reviews');

    modalTitle.textContent = product.name;
    modalDescription.textContent = product.description;
    modalPrice.textContent = product.price;
    modalLink.href = product.link;

    modalReviews.innerHTML = '';
    product.reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.innerHTML = `
            <p>Rating: ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</p>
            <p>${review.comment}</p>
        `;
        modalReviews.appendChild(reviewElement);
    });

    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

document.querySelector('.close').addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
});

document.getElementById('search-button').addEventListener('click', () => {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});

displayProducts();

