export const clinic = {
  name: "Clínica Estética ELISABET",
  logo: "/images/logo.png",
  tagline: "Tu belleza natural en Puertollano, Ciudad Real",
  description: "Clínica Estética ELISABET es tu centro de confianza en Puertollano para tratamientos faciales, corporales, depilación láser y micropigmentación. Con 5 estrellas en Google y 29 reseñas, Elisabeth y su equipo te ofrecen asesoramiento personalizado, productos premium y resultados visibles. Un amplio abanico de servicios adaptados a tus necesidades para que te veas mejor por fuera y te sientas increíble por dentro.",
  colors: {
    primary: "#5b6339",
    secondary: "#56482f",
    accent: "#56482f",
    neutral: "#f2f3ef"
  },
  phone: "626 94 15 07",
  whatsapp: "+34626941507",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de estética.",
  email: "",
  address: {
    street: "Paseo de San Gregorio, 69, Edificio Europa Principal D, 13500 Puertollano, Ciudad Real, España",
    city: "Puertollano",
    province: "Ciudad Real",
    postalCode: "13500",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=16207516751622071963&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Cl%C3%ADnica%20Est%C3%A9tica%20ELISABET%20%4038.6909%2C-4.10902&z=16&output=embed",
  coordinates: {
    lat: 38.6909,
    lng: -4.10902
  },
  schedule: [
    {
      days: "lunes - viernes",
      hours: "9:00–14:00, 16:00–20:00"
    },
    {
      days: "sábado - domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 29,
    url: "https://maps.google.com/?cid=16207516751622071963&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    featured: [
      {
        author: "Inés Maria Sánchez Muñoz",
        rating: 5,
        text: "Llegué un poco perdida y sin saber muy bien ue quería,pero cuando te atiende un profesional como Elisabeth todo es fácil,reconoce lo que te hace falta y es un acierto.\nMe he hecho varias cosas ,el abanico del centro es amplio y se adapta a todo lo que necesites,además el trato es inmejorable y los resultados excelentes,para mí es un imprescindible,me hace verme mejor por fuera y eso se nota también por dentro.\nGracias por tus consejos,tú profesionalidad y el cariño con el qué nos tratas.",
        date: "Hace 6 meses"
      },
      {
        author: "TEM LR",
        rating: 5,
        text: "Excelente! La experiencia única vivida en este centro tiene base en sus profesionales. En las ocasiones que paro en Puertollano aprovecho para hacerme un pequeño regalo estético ya que siempre encuentro los mejores productos utilizados por las mejores manos y la más sincera sonrisa que acompaña algún consejito-secreto para seguir cuidándome en casa. Sin duda, un centro para volver.",
        date: "Hace 3 años"
      },
      {
        author: "MarioLCYT",
        rating: 5,
        text: "Muy buen trato. Y muy profesionales. Voy todos los meses a hacerme algún tratamiento. Pq hacen muchas cosas.",
        date: "Hace un año"
      },
      {
        author: "Almudena Notario",
        rating: 5,
        text: "Magnífico centro!! Tiene muchos tipos de tratamientos y sobre todo una atención excelente. Muy profesional",
        date: "Hace 6 meses"
      },
      {
        author: "Laura Expósito",
        rating: 5,
        text: "Trato muy cercano y muy profesional. Se lo recomiendo a todo el mundo!",
        date: "Hace 6 meses"
      }
    ]
  },
  services: [
    {
      id: "tratamientos-faciales",
      name: "Tratamientos Faciales",
      description: "Cuidados personalizados que se adaptan a tu tipo de piel y necesidades específicas. Desde hidratación profunda hasta tratamientos antiedad y luminosidad. Elisabeth analiza tu piel y te recomienda el tratamiento perfecto para que luzcas radiante.",
      benefits: [
        "Análisis personalizado de tu piel",
        "Productos premium de alta calidad",
        "Resultados visibles desde la primera sesión"
      ],
      icon: "Sparkles"
    },
    {
      id: "depilacion-laser",
      name: "Depilación Láser",
      description: "Eliminación definitiva del vello con tecnología láser de última generación. Olvídate de la cuchilla y la cera para siempre. Tratamientos seguros, efectivos y adaptados a tu fototipo de piel para una depilación permanente y sin dolor.",
      benefits: [
        "Tecnología láser de última generación",
        "Resultados permanentes y duraderos",
        "Tratamiento rápido y prácticamente indoloro"
      ],
      icon: "Zap"
    },
    {
      id: "tratamientos-corporales",
      name: "Tratamientos Corporales",
      description: "Tratamientos reductores, reafirmantes y anticelulíticos diseñados para esculpir tu figura. Combinamos técnicas avanzadas con productos de alta gama para ayudarte a conseguir el cuerpo que deseas. Resultados reales que se notan.",
      benefits: [
        "Reducción de medidas y celulitis",
        "Reafirmación y tonificación corporal",
        "Seguimiento personalizado de tu evolución"
      ],
      icon: "Heart"
    },
    {
      id: "micropigmentacion",
      name: "Micropigmentación",
      description: "Maquillaje semipermanente para cejas, labios y ojos con resultados naturales y armoniosos. Despierta perfecta cada mañana sin necesidad de maquillarte. Técnicas precisas que realzan tu belleza natural respetando tus rasgos.",
      benefits: [
        "Resultados naturales y personalizados",
        "Ahorra tiempo en tu rutina diaria",
        "Pigmentos de máxima calidad y seguridad"
      ],
      icon: "Eye"
    },
    {
      id: "extensiones-pestanas",
      name: "Extensiones de Pestañas",
      description: "Consigue una mirada impactante con extensiones pelo a pelo aplicadas con precisión. Pestañas largas, voluminosas y naturales que realzan tu mirada sin necesidad de máscara. Duración prolongada con un mantenimiento sencillo.",
      benefits: [
        "Mirada más expresiva e intensa",
        "Aplicación pelo a pelo para efecto natural",
        "Larga duración con cuidados mínimos"
      ],
      icon: "Eye"
    },
    {
      id: "manicura-pedicura",
      name: "Manicura y Pedicura",
      description: "Cuidado completo de manos y pies con esmaltes de alta calidad y técnicas profesionales. Desde manicuras clásicas hasta tratamientos de belleza avanzados. Tus manos y pies merecen el mejor cuidado y atención.",
      benefits: [
        "Esmaltes premium de larga duración",
        "Cuidado integral de uñas y cutículas",
        "Acabado impecable y profesional"
      ],
      icon: "Hand"
    },
    {
      id: "asesoramiento-personalizado",
      name: "Asesoramiento Personalizado",
      description: "Si llegas sin saber qué necesitas, no te preocupes. Elisabeth reconoce lo que te hace falta y te guía hacia el tratamiento ideal. Amplio abanico de opciones que se adaptan a tus objetivos, con consejos para seguir cuidándote en casa.",
      benefits: [
        "Diagnóstico profesional de tus necesidades",
        "Recomendaciones adaptadas a tu presupuesto",
        "Consejos para mantener resultados en casa"
      ],
      icon: "Sparkles"
    },
    {
      id: "tratamientos-regulares",
      name: "Programas de Mantenimiento",
      description: "Tratamientos mensuales diseñados para mantener tu belleza constante. Muchos de nuestros clientes vienen cada mes porque ofrecemos variedad, calidad y resultados continuos. Un regalo estético que te mereces de forma regular.",
      benefits: [
        "Resultados acumulativos y duraderos",
        "Variedad de tratamientos cada mes",
        "Relación de confianza con tu esteticista"
      ],
      icon: "Flower2"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta con Nosotros",
      description: "Llámanos al 626 94 15 07 o escríbenos por WhatsApp para solicitar tu cita. Te atendemos con la sonrisa más sincera y te ayudamos a elegir el mejor momento para ti."
    },
    {
      step: 2,
      title: "Análisis Personalizado",
      description: "Elisabeth analiza tus necesidades y reconoce lo que realmente te hace falta. Te explicamos las opciones disponibles y diseñamos juntos el tratamiento ideal adaptado a tus objetivos y presupuesto."
    },
    {
      step: 3,
      title: "Tratamiento Profesional",
      description: "Realizamos tu tratamiento con las mejores manos, productos premium de alta calidad y tecnología avanzada. Disfrutas de una experiencia única en un ambiente profesional y acogedor."
    },
    {
      step: 4,
      title: "Resultados y Seguimiento",
      description: "Consigues resultados excelentes y visibles que te hacen verte mejor por fuera y sentirte increíble por dentro. Te damos consejos-secreto para cuidarte en casa y seguimos tu evolución en cada visita."
    }
  ],
  whyUs: [
    {
      title: "5 Estrellas en Google",
      description: "Nuestros 29 clientes nos avalan con la máxima puntuación. Destacan nuestra profesionalidad, el trato cercano y cariñoso, y los resultados excelentes que conseguimos. Una prueba real de la calidad de nuestro trabajo.",
      icon: "Sparkles"
    },
    {
      title: "Asesoramiento Profesional",
      description: "Elisabeth reconoce lo que realmente necesitas aunque llegues sin saber qué quieres. Te guiamos con honestidad y profesionalidad para encontrar el tratamiento ideal adaptado a tus objetivos y presupuesto.",
      icon: "Heart"
    },
    {
      title: "Productos y Tecnología Premium",
      description: "Trabajamos con los mejores productos del mercado y tecnología de última generación. Nuestros clientes destacan que siempre encuentran productos de máxima calidad aplicados por las mejores manos profesionales.",
      icon: "Zap"
    },
    {
      title: "Amplio Abanico de Servicios",
      description: "Ofrecemos múltiples tratamientos faciales, corporales, depilación láser, micropigmentación y más. Todo lo que necesitas en un solo centro, con la posibilidad de combinar servicios y venir mensualmente para cuidarte de forma integral.",
      icon: "Flower2"
    }
  ],
  team: [
    {
      name: "Elisabeth",
      role: "Directora y Esteticista Profesional",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionadas por la belleza y el cuidado personal. En Clínica Estética ELISABET nos dedicamos a realzar la belleza natural de cada clienta con tratamientos de calidad."
    }
  ],
  gallery: [
    {
      src: "/images/hero.webp",
      alt: "Clínica Estética ELISABET - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "Clínica Estética ELISABET - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "Clínica Estética ELISABET - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "Clínica Estética ELISABET - Imagen 4"
    },
    {
      src: "/images/gallery/5.webp",
      alt: "Clínica Estética ELISABET - Imagen 5"
    }
  ],
  faq: [
    {
      question: "¿Qué tratamientos ofrece Clínica Estética ELISABET?",
      answer: "En Clínica Estética ELISABET ofrecemos un amplio abanico de servicios: tratamientos faciales personalizados, depilación láser, tratamientos corporales reductores y reafirmantes, micropigmentación, extensiones de pestañas, manicura y pedicura. Si no tienes claro qué necesitas, Elisabeth te asesora profesionalmente para encontrar el tratamiento perfecto para ti."
    },
    {
      question: "¿Cómo puedo solicitar una cita?",
      answer: "Puedes llamarnos directamente al 626 94 15 07 o escribirnos por WhatsApp al mismo número. Te atendemos de forma personalizada y buscamos el horario que mejor se adapte a tu disponibilidad. Muchos de nuestros clientes vienen mensualmente, así que te recomendamos reservar con antelación."
    },
    {
      question: "¿Por qué los clientes recomiendan Clínica Estética ELISABET?",
      answer: "Nuestros clientes nos valoran con 5 estrellas en Google gracias a la profesionalidad, el trato cercano y cariñoso, y los resultados excelentes que conseguimos. Destacan que reconocemos lo que realmente necesitan, utilizamos los mejores productos, y ofrecemos consejos personalizados para el cuidado en casa. La experiencia única y la atención profesional hacen que nuestros clientes vuelvan y nos recomienden."
    },
    {
      question: "¿Cuánto tiempo duran los resultados de los tratamientos?",
      answer: "La duración depende del tipo de tratamiento. La depilación láser ofrece resultados permanentes tras completar las sesiones necesarias. La micropigmentación dura entre 1 y 3 años. Los tratamientos faciales y corporales ofrecen resultados inmediatos que se potencian con sesiones regulares. En tu consulta personalizada, Elisabeth te explicará la duración específica del tratamiento que elijas y te dará consejos para mantener los resultados."
    },
    {
      question: "¿Qué productos utilizan en los tratamientos?",
      answer: "En Clínica Estética ELISABET trabajamos exclusivamente con productos premium de alta calidad y tecnología de última generación. Nuestros clientes destacan que siempre encuentran los mejores productos utilizados por las mejores manos. Seleccionamos cuidadosamente cada producto para garantizar seguridad, eficacia y resultados visibles desde la primera sesión."
    },
    {
      question: "¿Necesito experiencia previa o saber qué tratamiento quiero?",
      answer: "Para nada. Muchos clientes llegan sin saber muy bien qué necesitan, y es completamente normal. Elisabeth es una profesional que reconoce lo que te hace falta y te guía en todo el proceso. Te explicamos todas las opciones disponibles, te aconsejamos según tus necesidades y objetivos, y juntos decidimos el tratamiento ideal para ti."
    },
    {
      question: "¿Con qué frecuencia debería acudir a la clínica?",
      answer: "Depende del tratamiento y de tus objetivos personales. Muchos de nuestros clientes vienen todos los meses a hacerse algún tratamiento porque ofrecemos mucha variedad y resultados continuos. En tu primera consulta, Elisabeth te diseñará un plan personalizado con la frecuencia recomendada para conseguir y mantener los resultados que deseas."
    },
    {
      question: "¿Dónde está ubicada Clínica Estética ELISABET?",
      answer: "Estamos en Puertollano, Ciudad Real. Somos un centro de referencia en estética en la zona, con 5 estrellas en Google y 29 reseñas de clientes satisfechos. Incluso personas que paran ocasionalmente en Puertollano aprovechan para hacerse un regalo estético en nuestro centro. Llámanos al 626 94 15 07 y te indicamos cómo llegar."
    }
  ],
  seo: {
    titleTemplate: "%s | Clínica Estética ELISABET",
    defaultTitle: "Clínica Estética ELISABET - Puertollano, Ciudad Real",
    defaultDescription: "Centro de estética en Puertollano con 5★ en Google. Tratamientos faciales, depilación láser, micropigmentación y más. Asesoramiento personalizado. ☎ 626 94 15 07",
    keywords: [
      "clínica estética Puertollano",
      "Clínica Estética ELISABET",
      "tratamientos faciales Puertollano",
      "depilación láser Puertollano",
      "micropigmentación Puertollano",
      "centro estética Ciudad Real",
      "tratamientos corporales Puertollano",
      "extensiones pestañas Puertollano",
      "esteticista profesional Puertollano",
      "manicura pedicura Puertollano",
      "belleza Puertollano",
      "estética Ciudad Real"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Clínica Estética ELISABET",
    cif: "",
    registeredAddress: "Paseo de San Gregorio, 69, Edificio Europa Principal D, 13500 Puertollano, Ciudad Real, España, Puertollano, Ciudad Real"
  },
  heroHeadline: [
    "Tu Centro de",
    "Belleza",
    "en Puertollano"
  ],
  heroDescription: "En Clínica Estética ELISABET encontrarás profesionales que reconocen lo que realmente necesitas. Ofrecemos tratamientos faciales, corporales, depilación láser, micropigmentación y mucho más, con un trato cercano y resultados excelentes que nuestros clientes avalan con 5 estrellas.",
  specialty: "Tratamientos Personalizados",
  ctaLabel: "Realza tu Belleza",
  ctaHeadline: "¿Lista para verte y sentirte mejor?",
  ctaDescription: "Solicita tu cita en Clínica Estética ELISABET y descubre el tratamiento perfecto para ti. Te asesoramos con profesionalidad y cariño para que consigas los resultados que deseas.",
  statsLabel: "Clientas",
  schemaType: "BeautySalon",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Técnicas avanzadas de estética y belleza para realzar tu imagen y cuidar de ti.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la belleza en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu belleza, nuestra pasión",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para realzar tu belleza natural.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestras clientas",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestro centro",
    galleryDescription: "Un espacio diseñado para tu bienestar y relajación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestras clientas.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializadas",
    teamDescription: "Experiencia y pasión al servicio de tu belleza"
  }
}

export type Clinic = typeof clinic
