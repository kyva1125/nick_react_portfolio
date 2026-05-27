export interface TranslationDict {
  navbar: {
    hero: string;
    about: string;
    skills: string;
    experience: string;
    portfolio: string;
  };
  hero: {
    greeting: string;
    name: string;
    rolePrefix: string;
    roles: string[];
    description: string;
    cell: string;
    email: string;
    location: string;
    locationValue: string;
  };
  about: {
    titleStart: string;
    titleEnd: string;
    subtitle: string;
    bioParagraph1: string;
    bioParagraph2: string;
    educationTitle: string;
    educationDegree1: string;
    educationDegree2: string;
    languagesTitle: string;
    languagesNative: string;
    languagesEnglish: string;
    languagesEnglishDetails: string;
    softSkillsTitle: string;
    softSkillsList: string[];
  };
  skills: {
    titleStart: string;
    titleEnd: string;
  };
  experience: {
    titleStart: string;
    titleEnd: string;
    list: {
      period: string;
      company: string;
      role: string;
      description: string;
    }[];
  };
  services: {
    titleStart: string;
    titleEnd: string;
    list: {
      title: string;
      content: string;
    }[];
  };
  portfolio: {
    titleStart: string;
    titleEnd: string;
    viewGallery: string;
  };
  footer: {
    rights: string;
  };
}

export const translations: Record<'es' | 'en', TranslationDict> = {
  es: {
    navbar: {
      hero: 'Inicio',
      about: 'Sobre mí',
      skills: 'Habilidades',
      experience: 'Experiencia',
      portfolio: 'Portafolio',
    },
    hero: {
      greeting: 'Hola, Yo Soy',
      name: 'Nick Ledesma',
      rolePrefix: 'Y Soy ',
      roles: ['Flutter Senior Developer', 'React Developer', 'Node.js Developer', 'Desarrollador Mobile & Web'],
      description: 'Desarrollador de aplicaciones móviles, web y desktop con experiencia en el desarrollo de soluciones tecnológicas escalables y enfocadas en el usuario. Especializado en Flutter, con sólidos conocimientos en arquitectura de software, servicios BaaS/SaaS, UI/UX y bases de datos relacionales y NoSQL.',
      cell: 'Celular',
      email: 'Correo',
      location: 'Ubicación',
      locationValue: 'Ayacucho, Perú',
    },
    about: {
      titleStart: 'Acerca de',
      titleEnd: 'Mi!',
      subtitle: 'Nick Bryan Ledesma Corilloclla',
      bioParagraph1: 'Desarrollador de aplicaciones móviles, web y desktop con experiencia en el desarrollo de soluciones tecnológicas escalables y enfocadas en el usuario. Especializado en Flutter, con sólidos conocimientos en arquitectura de software, integración con servicios BaaS/SaaS, diseño UI/UX y gestión de bases de datos relacionales y NoSQL.',
      bioParagraph2: 'Me caracterizo por ser una persona proactiva, autodidacta, responsable y orientada a resultados, con capacidad para adaptarme rápidamente a nuevos retos tecnológicos y trabajar eficientemente en equipo. Además, cuento con conocimientos en tecnologías web modernas como React y Node.js, ampliando mi perfil hacia el desarrollo full stack.',
      educationTitle: 'Educación',
      educationDegree1: 'Ingeniería de Sistemas',
      educationDegree2: 'Técnico en Hardware Informático',
      languagesTitle: 'Idiomas',
      languagesNative: 'Español: Nativo',
      languagesEnglish: 'Inglés:',
      languagesEnglishDetails: 'Lectura y escritura: Intermedio / Hablado: Básico',
      softSkillsTitle: 'Habilidades Blandas',
      softSkillsList: [
        'Trabajo en equipo',
        'Autogestión',
        'Comunicación efectiva',
        'Resolución de problemas',
        'Adaptabilidad',
        'Responsabilidad',
        'Aprendizaje continuo'
      ],
    },
    skills: {
      titleStart: 'Mis',
      titleEnd: 'Habilidades',
    },
    experience: {
      titleStart: 'Mi',
      titleEnd: 'Experiencia',
      list: [
        {
          period: 'Julio 2024 - Enero 2026',
          company: 'ANDES EXPRESS S.A.C',
          role: 'Desarrollador y mantenedor de Andytrack (Flutter)',
          description: 'Encargado del desarrollo, funcionamiento y mantenimiento de la aplicación central Andytrack. Implementación de mejoras continuas en rendimiento, estabilidad y experiencia de usuario. Desarrollo de soluciones para la gestión logística utilizada por más de 500 couriers a nivel nacional.'
        },
        {
          period: 'Junio 2025 - Diciembre 2025',
          company: 'DEVIDA',
          role: 'Desarrollador React',
          description: 'Participación en el desarrollo y mantenimiento de soluciones tecnológicas orientadas a optimizar procesos de gestión. Implementación de mejoras funcionales en aplicaciones web con React, Node.js y SQL Server, siguiendo buenas prácticas de arquitectura.'
        },
        {
          period: 'Octubre 2023 - Junio 2024',
          company: 'XTend SAC',
          role: 'Jefe de Proyecto - App Flutter / COMSATEL',
          description: 'Responsable del desarrollo y mantenimiento de una aplicación de gestión de citas para instalación, mantenimiento y retiro de dispositivos de rastreo. Coordinación de requerimientos y optimización técnica de campo.'
        },
        {
          period: 'Octubre 2022 - Octubre 2023',
          company: 'PECANO SOFTWARE SAC',
          role: 'Desarrollador de aplicaciones Flutter',
          description: 'Encargado de desarrollar el aplicativo STARTUP para comercios que premian a usuarios por recargar gasolina acumulando puntos. Creación de la versión web de comercio en Flutter y desarrollo del POS de Tankea.'
        },
        {
          period: 'Marzo 2022 - Septiembre 2022',
          company: 'FREELANCER',
          role: 'Desarrollador Móvil y Web - Seguridad Ciudadana',
          description: 'Diseño en Figma y desarrollo/mantenimiento del aplicativo móvil y web para Seguridad Ciudadana. Implementación de rastreo en tiempo real a través de mapas y GPS para alertar de delincuencia.'
        },
        {
          period: 'Marzo 2022 - Agosto 2022',
          company: 'FREELANCER',
          role: 'Desarrollador de App Desktop - Gestión de O2',
          description: 'Diseño en Figma y desarrollo del aplicativo de escritorio para control de almacén e inventario de botellas de O2, Co2, etc. Generación de reportes de inventarios en formato PDF.'
        },
        {
          period: 'Enero 2021 - Octubre 2021',
          company: 'FREELANCER',
          role: 'Desarrollador Móvil - Delivery de Comida',
          description: 'Desarrollo de aplicativo STARTUP diseñado en AdobeXD. Creación de franquicias dentro del app para comercios y sucursales con seguimiento de pedidos de entrega.'
        },
        {
          period: 'Febrero 2020 - Noviembre 2020',
          company: 'FREELANCER',
          role: 'Desarrollador Móvil - Búsqueda de Enfermeras',
          description: 'Desarrollo de aplicativo con seguimiento de GPS para búsqueda de enfermeras para atender pacientes a domicilio durante la pandemia.'
        }
      ]
    },
    services: {
      titleStart: 'Mis',
      titleEnd: 'Servicios',
      list: [
        {
          title: 'Desarrollo Móvil',
          content: 'Creación de aplicaciones nativas y multiplataforma con Flutter y React Native, de alto rendimiento y excelente UX/UI.',
        },
        {
          title: 'Desarrollo Web',
          content: 'Interfaces web dinámicas y modernas utilizando React, optimizadas para SEO y velocidad.',
        },
        {
          title: 'Backend Node.js',
          content: 'APIs RESTful seguras y escalables con Node.js y Express, con integración de bases de datos PostgreSQL.',
        }
      ]
    },
    portfolio: {
      titleStart: 'Últimos',
      titleEnd: 'Proyectos',
      viewGallery: 'Ver Galería',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    }
  },
  en: {
    navbar: {
      hero: 'Home',
      about: 'About Me',
      skills: 'Skills',
      experience: 'Experience',
      portfolio: 'Portfolio',
    },
    hero: {
      greeting: 'Hello, I Am',
      name: 'Nick Ledesma',
      rolePrefix: 'And I Am ',
      roles: ['Flutter Senior Developer', 'React Developer', 'Node.js Developer', 'Mobile & Web Developer'],
      description: 'Mobile, web, and desktop application developer with experience in creating scalable, user-centric technology solutions. Specialized in Flutter, with solid knowledge in software architecture, BaaS/SaaS integration, UI/UX design, and relational and NoSQL database management.',
      cell: 'Phone',
      email: 'Email',
      location: 'Location',
      locationValue: 'Ayacucho, Peru',
    },
    about: {
      titleStart: 'About',
      titleEnd: 'Me!',
      subtitle: 'Nick Bryan Ledesma Corilloclla',
      bioParagraph1: 'Mobile, web, and desktop application developer with experience in creating scalable, user-centric technology solutions. Specialized in Flutter, with solid knowledge in software architecture, BaaS/SaaS integration, UI/UX design, and relational and NoSQL database management.',
      bioParagraph2: 'I am characterized by being a proactive, self-taught, responsible, and results-oriented individual, with the ability to adapt quickly to new technological challenges and work efficiently in teams. Additionally, I possess knowledge in modern web technologies such as React and Node.js, expanding my profile towards full stack development.',
      educationTitle: 'Education',
      educationDegree1: 'Systems Engineering',
      educationDegree2: 'Computer Hardware Technician',
      languagesTitle: 'Languages',
      languagesNative: 'Spanish: Native',
      languagesEnglish: 'English:',
      languagesEnglishDetails: 'Reading & Writing: Intermediate / Speaking: Basic',
      softSkillsTitle: 'Soft Skills',
      softSkillsList: [
        'Teamwork',
        'Self-management',
        'Effective Communication',
        'Problem Solving',
        'Adaptability',
        'Responsibility',
        'Continuous Learning'
      ],
    },
    skills: {
      titleStart: 'My',
      titleEnd: 'Skills',
    },
    experience: {
      titleStart: 'My',
      titleEnd: 'Experience',
      list: [
        {
          period: 'July 2024 - January 2026',
          company: 'ANDES EXPRESS S.A.C',
          role: 'Andytrack Developer & Maintainer (Flutter)',
          description: 'Responsible for the development, operation, and maintenance of the central Andytrack application. Implementation of continuous improvements in performance, stability, and user experience. Developed logistics management solutions used by over 500 couriers nationwide.'
        },
        {
          period: 'June 2025 - December 2025',
          company: 'DEVIDA',
          role: 'React Developer',
          description: 'Participated in the development and maintenance of technological solutions aimed at optimizing management processes. Implemented functional improvements in web applications using React, Node.js, and SQL Server, following best architectural practices.'
        },
        {
          period: 'October 2023 - June 2024',
          company: 'XTend SAC',
          role: 'Project Manager - Flutter App / COMSATEL',
          description: 'Responsible for the development and maintenance of a scheduling management application for tracking device installation, maintenance, and removal. Requirement coordination and field technical operation optimization.'
        },
        {
          period: 'October 2022 - October 2023',
          company: 'PECANO SOFTWARE SAC',
          role: 'Flutter Application Developer',
          description: 'In charge of developing a STARTUP app for businesses that reward users with points for refueling. Created the business web version in Flutter and developed the Tankea POS.'
        },
        {
          period: 'March 2022 - September 2022',
          company: 'FREELANCER',
          role: 'Mobile & Web Developer - Public Safety',
          description: 'Designed in Figma and developed/maintained the mobile and web application for Public Safety. Implemented real-time GPS tracking on maps to alert against crime.'
        },
        {
          period: 'March 2022 - August 2022',
          company: 'FREELANCER',
          role: 'Desktop App Developer - O2 Management',
          description: 'Figma design and desktop application development for warehouse control and inventory of O2, Co2, etc. cylinders. Generation of detailed inventory reports in PDF format.'
        },
        {
          period: 'January 2021 - October 2021',
          company: 'FREELANCER',
          role: 'Mobile Developer - Food Delivery',
          description: 'Development of a STARTUP application designed in AdobeXD. Franchise creation within the app for businesses and branches, featuring full delivery tracking.'
        },
        {
          period: 'February 2020 - November 2020',
          company: 'FREELANCER',
          role: 'Mobile Developer - Nurse Finder',
          description: 'Development of an application with GPS tracking for nurse search to serve patients at home during the pandemic.'
        }
      ]
    },
    services: {
      titleStart: 'My',
      titleEnd: 'Services',
      list: [
        {
          title: 'Mobile Development',
          content: 'Creation of high-performance native and cross-platform mobile apps using Flutter and React Native with excellent UX/UI.',
        },
        {
          title: 'Web Development',
          content: 'Dynamic and modern web interfaces using React, optimized for speed and SEO.',
        },
        {
          title: 'Backend Development',
          content: 'Secure and scalable RESTful APIs with Node.js and Express, integrated with PostgreSQL databases.',
        }
      ]
    },
    portfolio: {
      titleStart: 'Latest',
      titleEnd: 'Projects',
      viewGallery: 'View Gallery',
    },
    footer: {
      rights: 'All rights reserved.',
    }
  }
};
