"use client"

import { useState } from "react"

// Translation object - you can expand this with more languages and content
const translations = {
  en: {
    // Header
    services: "Services",
    about: "About",
    credentials: "Credentials",
    testimonials: "Testimonials",
    contact: "Contact",
    scheduleConsultation: "Schedule Consultation",
    freeConsultation: "Free Consultation",

    // Hero Section
    heroTitle: "Expert Immigration Forms Assistance",
    heroSubtitle:
      "We help individuals and families navigate the complex immigration forms process with confidence. Our detailed form preparation services ensure accuracy and completeness for your immigration journey.",
    requestConsultation: "Request Consultation",
    learnAboutServices: "Learn About Our Services",

    // Disclaimer
    importantDisclaimer: "Important Disclaimer",
    disclaimerText:
      "DG Immigration Support provides immigration forms preparation services only. We are not attorneys and do not provide legal advice, legal representation, or legal services. For legal advice, please consult with a licensed immigration attorney.",

    // Services
    ourServices: "Our Immigration Forms Services",
    servicesDescription:
      "We provide comprehensive immigration forms preparation assistance to help you navigate the complex documentation requirements of the U.S. immigration system.",

    // Contact
    contactUs: "Contact Us",
    phone: "Phone",
    email: "Email",
    office: "Office",

    // Footer
    footerDescription:
      "Dedicated to providing professional immigration forms preparation services with accuracy and attention to detail.",
  },
  es: {
    // Header - More natural Spanish
    services: "Servicios",
    about: "Nosotros",
    credentials: "Credenciales",
    testimonials: "Testimonios",
    contact: "Contacto",
    scheduleConsultation: "Agendar Consulta",
    freeConsultation: "Consulta Gratuita",

    // Hero Section - More engaging Spanish
    heroTitle: "Asistencia Experta en Formularios de Inmigración",
    heroSubtitle:
      "Ayudamos a personas y familias a navegar el complejo proceso de formularios de inmigración con confianza. Nuestros servicios especializados de preparación de formularios garantizan precisión y completitud en su proceso migratorio.",
    requestConsultation: "Solicitar Consulta",
    learnAboutServices: "Conoce Nuestros Servicios",

    // Disclaimer - Legal Spanish terminology
    importantDisclaimer: "Aviso Importante",
    disclaimerText:
      "DG Immigration Support únicamente proporciona servicios de preparación de formularios de inmigración. No somos abogados y no brindamos asesoría legal, representación legal, ni servicios legales. Para asesoría legal, consulte con un abogado de inmigración licenciado.",

    // Services - Professional Spanish
    ourServices: "Nuestros Servicios de Formularios de Inmigración",
    servicesDescription:
      "Ofrecemos asistencia integral en la preparación de formularios de inmigración para ayudarle a navegar los complejos requisitos de documentación del sistema migratorio estadounidense.",

    // Contact - Standard Spanish
    contactUs: "Contáctanos",
    phone: "Teléfono",
    email: "Correo Electrónico",
    office: "Oficina",

    // Footer - Professional tone
    footerDescription:
      "Comprometidos a brindar servicios profesionales de preparación de formularios de inmigración con precisión y atención al detalle.",
  },
  fr: {
    // Header - Proper French
    services: "Services",
    about: "À Propos",
    credentials: "Qualifications",
    testimonials: "Témoignages",
    contact: "Contact",
    scheduleConsultation: "Planifier une Consultation",
    freeConsultation: "Consultation Gratuite",

    // Hero Section - Natural French
    heroTitle: "Assistance Experte pour les Formulaires d'Immigration",
    heroSubtitle:
      "Nous aidons les particuliers et les familles à naviguer dans le processus complexe des formulaires d'immigration en toute confiance. Nos services spécialisés de préparation de formulaires garantissent précision et exhaustivité pour votre parcours d'immigration.",
    requestConsultation: "Demander une Consultation",
    learnAboutServices: "Découvrir Nos Services",

    // Disclaimer - French legal terminology
    importantDisclaimer: "Avis Important",
    disclaimerText:
      "DG Immigration Support fournit uniquement des services de préparation de formulaires d'immigration. Nous ne sommes pas des avocats et ne fournissons pas de conseils juridiques, de représentation légale ou de services juridiques. Pour des conseils juridiques, veuillez consulter un avocat d'immigration agréé.",

    // Services - Professional French
    ourServices: "Nos Services de Formulaires d'Immigration",
    servicesDescription:
      "Nous offrons une assistance complète dans la préparation des formulaires d'immigration pour vous aider à naviguer dans les exigences complexes de documentation du système d'immigration américain.",

    // Contact - Standard French
    contactUs: "Nous Contacter",
    phone: "Téléphone",
    email: "Courriel",
    office: "Bureau",

    // Footer - Professional French
    footerDescription:
      "Dédiés à fournir des services professionnels de préparation de formulaires d'immigration avec précision et attention aux détails.",
  },
  pt: {
    // Header - Brazilian Portuguese
    services: "Serviços",
    about: "Sobre Nós",
    credentials: "Credenciais",
    testimonials: "Depoimentos",
    contact: "Contato",
    scheduleConsultation: "Agendar Consulta",
    freeConsultation: "Consulta Gratuita",

    // Hero Section - Natural Brazilian Portuguese
    heroTitle: "Assistência Especializada em Formulários de Imigração",
    heroSubtitle:
      "Ajudamos indivíduos e famílias a navegar pelo complexo processo de formulários de imigração com confiança. Nossos serviços especializados de preparação de formulários garantem precisão e completude para sua jornada imigratória.",
    requestConsultation: "Solicitar Consulta",
    learnAboutServices: "Conheça Nossos Serviços",

    // Disclaimer - Brazilian legal terminology
    importantDisclaimer: "Aviso Importante",
    disclaimerText:
      "A DG Immigration Support fornece apenas serviços de preparação de formulários de imigração. Não somos advogados e não fornecemos consultoria jurídica, representação legal ou serviços jurídicos. Para consultoria jurídica, consulte um advogado de imigração licenciado.",

    // Services - Professional Portuguese
    ourServices: "Nossos Serviços de Formulários de Imigração",
    servicesDescription:
      "Oferecemos assistência abrangente na preparação de formulários de imigração para ajudá-lo a navegar pelos complexos requisitos de documentação do sistema imigratório americano.",

    // Contact - Brazilian Portuguese
    contactUs: "Entre em Contato",
    phone: "Telefone",
    email: "E-mail",
    office: "Escritório",

    // Footer - Professional tone
    footerDescription:
      "Dedicados a fornecer serviços profissionais de preparação de formulários de imigração com precisão e atenção aos detalhes.",
  },
}

export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState<string>("en")

  const t = (key: string): string => {
    const languageTranslations = translations[currentLanguage as keyof typeof translations] || translations.en
    return languageTranslations[key as keyof typeof languageTranslations] || key
  }

  const changeLanguage = (language: string) => {
    setCurrentLanguage(language)
  }

  return {
    currentLanguage,
    changeLanguage,
    t,
  }
}
