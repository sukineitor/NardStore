const products = [
    {
        name: "Ebook Postres en vasos",
        description: "Deliciosas recetas de postres en vasos fáciles de preparar.",
        price: "$19.99",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/F96884962F?ap=7fe9",
        category: "Cocina",
        reviews: [
            { rating: 5, comment: "¡Excelentes recetas! Fáciles de seguir y deliciosas." },
            { rating: 4, comment: "Buena variedad de postres. Recomendado." }
        ]
    },
    {
        name: "Desarrollo Personal",
        description: "Curso completo para mejorar tus habilidades y alcanzar tus metas.",
        price: "$49.99",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/Q96901756H?dp=1",
        category: "Desarrollo Personal",
        reviews: [
            { rating: 5, comment: "Este curso cambió mi vida. Altamente recomendado." },
            { rating: 4, comment: "Muy buen contenido y ejercicios prácticos." }
        ]
    },
    {
        name: "Desarrollo Estoico",
        description: "Aprende los principios del estoicismo y cómo aplicarlos en tu vida diaria.",
        price: "$39.99",
        image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/E96901806J?dp=1",
        category: "Desarrollo Personal",
        reviews: [
            { rating: 5, comment: "Una perspectiva refrescante sobre la filosofía estoica." },
            { rating: 4, comment: "Buenas técnicas para manejar el estrés y las emociones." }
        ]
    },
    {
        name: "Meditaciones",
        description: "Guía completa de meditación para principiantes y avanzados.",
        price: "$29.99",
        image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/G96901855U?dp=1",
        category: "Bienestar",
        reviews: [
            { rating: 5, comment: "Excelente recurso para comenzar con la meditación." },
            { rating: 4, comment: "Las técnicas son fáciles de seguir y muy efectivas." }
        ]
    },
    {
        name: "Curso de Mindfulness",
        description: "Aprende a vivir en el presente y reducir el estrés con mindfulness.",
        price: "$59.99",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/Y96901879J?dp=1",
        category: "Bienestar",
        reviews: [
            { rating: 5, comment: "Este curso ha transformado mi forma de ver la vida." },
            { rating: 4, comment: "Muy útil para manejar la ansiedad y el estrés diario." }
        ]
    },
    {
        name: "Curso de Mindfulness y Gestión de Emociones",
        description: "Aprende a manejar tus emociones y vivir con mayor conciencia.",
        price: "$69.99",
        image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/X96901910W",
        category: "Bienestar",
        reviews: [
            { rating: 5, comment: "Increíble curso, muy completo y práctico." },
            { rating: 4, comment: "Me ha ayudado mucho a manejar mis emociones." }
        ]
    },
    {
        name: "Productividad Legendaria",
        description: "Maximiza tu productividad y alcanza tus metas más rápido.",
        price: "$79.99",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/X96901930W",
        category: "Desarrollo Personal",
        reviews: [
            { rating: 5, comment: "Este curso ha revolucionado mi forma de trabajar." },
            { rating: 4, comment: "Excelentes técnicas para mejorar la productividad." }
        ]
    },
    {
        name: "Guía Paso a Paso para Montar tu Negocio de Catering Industrial",
        description: "Aprende a iniciar y gestionar un negocio exitoso de catering industrial.",
        price: "$99.99",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/M96901939V?dp=1",
        category: "Negocios",
        reviews: [
            { rating: 5, comment: "Guía completa y detallada. Muy útil para emprendedores." },
            { rating: 4, comment: "Buenas ideas y consejos prácticos para el negocio." }
        ]
    },
    {
        name: "Marketing Digital",
        description: "Domina las estrategias de marketing digital para hacer crecer tu negocio.",
        price: "$89.99",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/F96901990L?dp=1",
        category: "Marketing",
        reviews: [
            { rating: 5, comment: "Curso muy completo y actualizado. Altamente recomendado." },
            { rating: 4, comment: "Excelente contenido sobre SEO y redes sociales." }
        ]
    },
    {
        name: "Finanzas Personales",
        description: "Aprende a manejar tus finanzas y alcanzar la libertad financiera.",
        price: "$69.99",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/K96902015T?dp=1",
        category: "Finanzas",
        reviews: [
            { rating: 5, comment: "Este curso cambió mi relación con el dinero." },
            { rating: 4, comment: "Muy útil para aprender a ahorrar e invertir." }
        ]
    },
    {
        name: "Manual Cejas Radiantes",
        description: "Aprende técnicas profesionales para tener cejas perfectas.",
        price: "$29.99",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/X96902033K?dp=1",
        category: "Belleza",
        reviews: [
            { rating: 5, comment: "Excelentes técnicas y fáciles de seguir." },
            { rating: 4, comment: "Muy útil para mejorar el aspecto de las cejas." }
        ]
    },
    {
        name: "Método cejas PRO - 7D",
        description: "Domina el arte del diseño de cejas en 7 días.",
        price: "$79.99",
        image: "https://images.unsplash.com/photo-1560283277-c198b19f30e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/Y96902046E?dp=1",
        category: "Belleza",
        reviews: [
            { rating: 5, comment: "Curso muy completo y profesional." },
            { rating: 4, comment: "Aprendí mucho en poco tiempo. Recomendado." }
        ]
    },
    {
        name: "Método cejas PRO - 7D Oferta CUPON Lanzamiento",
        description: "Oferta especial: Domina el arte del diseño de cejas en 7 días.",
        price: "$59.99",
        image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/Y96902046E?ap=063f",
        category: "Belleza",
        reviews: [
            { rating: 5, comment: "Excelente oferta. El curso vale cada centavo." },
            { rating: 4, comment: "Muy buen contenido a un precio accesible." }
        ]
    },
    {
        name: "Te vas a Transformar",
        description: "Programa de transformación personal para una vida más plena.",
        price: "$89.99",
        image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/L96902064J",
        category: "Desarrollo Personal",
        reviews: [
            { rating: 5, comment: "Este programa cambió mi vida por completo." },
            { rating: 4, comment: "Muy inspirador y lleno de herramientas útiles." }
        ]
    },
    {
        name: "Edita tus vídeos como Videópatas",
        description: "Aprende a editar videos como un profesional.",
        price: "$69.99",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/N96903231N",
        category: "Tecnología",
        reviews: [
            { rating: 5, comment: "Excelente curso para principiantes en edición de video." },
            { rating: 4, comment: "Muy completo y con buenos ejemplos prácticos." }
        ]
    },
    {
        name: "Programa FENIX",
        description: "Programa de transformación física y mental para una vida saludable.",
        price: "$99.99",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/U96903241I",
        category: "Salud y Fitness",
        reviews: [
            { rating: 5, comment: "Increíble programa. Resultados visibles en pocas semanas." },
            { rating: 4, comment: "Muy motivador y con excelentes rutinas de ejercicio." }
        ]
    },
    {
        name: "Comidas Fitness",
        description: "Recetas saludables y deliciosas para mantener tu forma física.",
        price: "$39.99",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/P96903251P?dp=1",
        category: "Salud y Fitness",
        reviews: [
            { rating: 5, comment: "Recetas fáciles y muy sabrosas. Altamente recomendado." },
            { rating: 4, comment: "Buena variedad de opciones para una dieta equilibrada." }
        ]
    },
    {
        name: "Fitness para Principiantes",
        description: "Guía completa para comenzar tu viaje fitness desde cero.",
        price: "$49.99",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/I96903262P?dp=1",
        category: "Salud y Fitness",
        reviews: [
            { rating: 5, comment: "Perfecto para quienes recién comienzan. Muy motivador." },
            { rating: 4, comment: "Buenas rutinas y consejos para novatos en el fitness." }
        ]
    },
    {
        name: "10 Recetas Fitness",
        description: "Colección de 10 recetas fitness fáciles y deliciosas.",
        price: "$19.99",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/J96903270L?dp=1",
        category: "Salud y Fitness",
        reviews: [
            { rating: 5, comment: "Recetas rápidas y sabrosas. Perfectas para el día a día." },
            { rating: 4, comment: "Buena variedad de opciones saludables." }
        ]
    },
    {
        name: "Fitness para Madres Ocupadas",
        description: "Programa de ejercicios y nutrición para madres con poco tiempo libre.",
        price: "$59.99",
        image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/C96903273V?dp=1",
        category: "Salud y Fitness",
        reviews: [
            { rating: 5, comment: "Perfecto para madres que quieren mantenerse en forma." },
            { rating: 4, comment: "Rutinas cortas pero efectivas. Muy práctico." }
        ]
    },
    {
        name: "Introducción a la Esferodinamia para Adultos",
        description: "Aprende los fundamentos de la esferodinamia para mejorar tu salud.",
        price: "$39.99",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/G96903280D?dp=1",
        category: "Salud y Fitness",
        reviews: [
            { rating: 5, comment: "Excelente introducción a la esferodinamia." },
            { rating: 4, comment: "Muy útil para mejorar la postura y flexibilidad." }
        ]
    },
    {
        name: "La dieta de la luna",
        description: "Descubre cómo sincronizar tu alimentación con las fases lunares.",
        price: "$29.99",
        image: "https://images.unsplash.com/photo-1532767153582-b1a0e5145009?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/B96903289W?dp=1",
        category: "Salud y Fitness",
        reviews: [
            { rating: 5, comment: "Enfoque interesante sobre la alimentación. Muy efectivo para perder peso." },
            { rating: 4, comment: "Conceptos innovadores y fáciles de seguir." }
        ]
    },
    {
        name: "Profesorado de Yoga",
        description: "Formación completa para convertirte en profesor de yoga certificado.",
        price: "$199.99",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/V96903295D?dp=1",
        category: "Salud y Fitness",
        reviews: [
            { rating: 5, comment: "Curso muy completo y profesional. Altamente recomendado." },
            { rating: 4, comment: "Excelente formación para futuros instructores de yoga." }
        ]
    },
    {
        name: "YOGA CONTRA IBUPROFENO",
        description: "Aprende técnicas de yoga para aliviar el dolor de forma natural.",
        price: "$49.99",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/F96903313E?dp=1",
        category: "Salud y Fitness",
        reviews: [
            { rating: 5, comment: "Increíble alternativa natural para el manejo del dolor." },
            { rating: 4, comment: "Posturas efectivas y fáciles de practicar en casa." }
        ]
    },
    {
        name: "GlowFlow Yoga",
        description: "Descubre el poder transformador del yoga para tu cuerpo y mente.",
        price: "$69.99",
        image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/B96903321K?dp=1",
        category: "Salud y Fitness",
        reviews: [
            { rating: 5, comment: "Excelente programa de yoga. Me siento renovada." },
            { rating: 4, comment: "Clases bien estructuradas y fáciles de seguir." }
        ]
    },
    {
        name: "Instructor de Yoga Kids",
        description: "Aprende a enseñar yoga a niños de forma divertida y efectiva.",
        price: "$89.99",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/E96903335O?dp=1",
        category: "Educación",
        reviews: [
            { rating: 5, comment: "Curso muy completo. Perfecto para trabajar con niños." },
            { rating: 4, comment: "Buenas técnicas para mantener a los niños interesados." }
        ]
    },
    {
        name: "NUTRICION",
        description: "Curso completo de nutrición para una vida saludable.",
        price: "$79.99",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/M96903366L?dp=1",
        category: "Salud y Fitness",
        reviews: [
            { rating: 5, comment: "Excelente curso. Aprendí mucho sobre alimentación saludable." },
            { rating: 4, comment: "Información muy útil y bien explicada." }
        ]
    },
    {
        name: "NUTRICION DEPORTISTA",
        description: "Aprende a alimentarte como un atleta profesional.",
        price: "$89.99",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/H96903379P?dp=1",
        category: "Salud y Fitness",
        reviews: [
            { rating: 5, comment: "Perfecto para deportistas. Mejoré mi rendimiento." },
            { rating: 4, comment: "Buenas recomendaciones para la nutrición pre y post entrenamiento." }
        ]
    },
    {
        name: "PACK BIENESTAR",
        description: "Conjunto completo de recursos para mejorar tu bienestar físico y mental.",
        price: "$129.99",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/O96903389U",
        category: "Salud y Fitness",
        reviews: [
            { rating: 5, comment: "Pack muy completo. Vale cada centavo." },
            { rating: 4, comment: "Excelente variedad de recursos para el bienestar integral." }
        ]
    },
    {
        name: "Bienestar Delgado",
        description: "Programa holístico para perder peso de forma saludable y sostenible.",
        price: "$99.99",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/B96903398P?dp=1",
        category: "Salud y Fitness",
        reviews: [
            { rating: 5, comment: "Increíble programa. Perdí peso y gané energía." },
            { rating: 4, comment: "Enfoque muy equilibrado para el control de peso." }
        ]
    },
    {
        name: "Curso de Idioma Corporal",
        description: "Aprende a leer y utilizar el lenguaje corporal de manera efectiva.",
        price: "$69.99",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        link: "https://go.hotmart.com/F96903407Y?dp=1",
        category: "Desarrollo Personal",
        reviews: [
            { rating: 5, comment: "Fascinante curso. Muy útil en mi vida personal y profesional." },
            { rating: 4, comment: "Buenas técnicas para mejorar la comunicación no verbal." }
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

