import { ClinicConfig, ServiceItem, GalleryItem, TestimonialItem } from '../types/clinic';

// Imagens geradas de alta fidelidade
import heroImg from '../assets/images/hero_aurea_clinic_1791892905436.jpg';
import facialImg from '../assets/images/service_facial_skincare_1791892904829.jpg';
import bodyImg from '../assets/images/service_body_massage_1791892906472.jpg';
import laserImg from '../assets/images/service_laser_tech_1791892907092.jpg';
import loungeImg from '../assets/images/gallery_tea_lounge_1791892907857.jpg';
import consultImg from '../assets/images/gallery_consult_desk_1791892998696.jpg';
import ritualImg from '../assets/images/gallery_skincare_ritual_1791892999113.jpg';
import hygieneImg from '../assets/images/gallery_hygiene_station_1791893000719.jpg';

export const initialClinicConfig: ClinicConfig = {
  name: "Clínica Auréa Estética",
  tagline: "Clínica de estética em Moema - SP · Cuidados Faciais e Corporais Integrados",
  city: "Moema, São Paulo",
  state: "SP",
  neighborhood: "Moema",
  specialty: "Cuidados Faciais e Corporais Integrados",
  whatsappNumber: "5511999999999", // Altere para o número real com DDI (55) + DDD + Telefone
  whatsappDefaultMessage: "Olá! Vi o site e gostaria de agendar uma avaliação.",
  phoneDisplay: "(11) 99999-9999",
  addressFull: "Alameda dos Maracatins, 1217 · Conjunto 42, Moema, São Paulo - SP",
  addressShort: "Alameda dos Maracatins, 1217 - Moema, SP",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.052601700684!2d-46.664414023773175!3d-23.602444978772807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a07204eeef7%3A0xe54d6d6715f3ec6!2sAlameda%20dos%20Maracatins%2C%201217%20-%20Moema%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
  googleMapsDirectionsUrl: "https://maps.google.com/?q=Alameda+dos+Maracatins+1217+Moema+Sao+Paulo",
  openingHoursWeekday: "Segunda a Sexta: 09h às 19h",
  openingHoursSaturday: "Sábado: 09h às 14h",
  openingHoursSunday: "Domingo: Fechado",
  practitionerName: "Dra. Camila Auréa",
  practitionerTitle: "Biomédica Esteta",
  practitionerCouncil: "CRBM 28.419",
  cnpj: "00.000.000/0001-00",
};

export const clinicServices: ServiceItem[] = [
  {
    id: "limpeza-pele",
    name: "Limpeza de Pele Profunda",
    description: "Higienização minuciosa com desobstrução suave dos poros e dermocosméticos selecionados para o seu tipo de pele.",
    image: facialImg,
    alt: "Ambiente privativo para procedimento de limpeza de pele profunda e cuidados faciais",
    badge: "Facial"
  },
  {
    id: "drenagem-linfatica",
    name: "Drenagem Linfática Manual",
    description: "Manobras manuais suaves e compassadas que estimulam a circulação linfática e auxiliam no alívio de edemas.",
    image: bodyImg,
    alt: "Maca de atendimento para drenagem linfática corporal e massoterapia",
    badge: "Corporal"
  },
  {
    id: "massagem-modeladora",
    name: "Massagem Modeladora & Relaxante",
    description: "Técnicas manuais individualizadas para alívio de pontos de tensão muscular e tônus dos tecidos corporais.",
    image: loungeImg,
    alt: "Espaço de relaxamento e acolhimento da clínica de estética",
    badge: "Corporal"
  },
  {
    id: "depilacao-laser",
    name: "Depilação a Laser de Alta Precisão",
    description: "Tecnologia com ponteira refrigerada desenvolvida para a redução progressiva dos pelos com conforto e segurança.",
    image: laserImg,
    alt: "Aparelho tecnológico para depilação a laser com ponteira resfriada",
    badge: "Tecnologia"
  },
  {
    id: "harmonizacao-sutil",
    name: "Avaliação para Harmonização Facial",
    description: "Mapeamento anatômico personalizado para realçar a harmonia e o frescor natural dos traços com total discrição.",
    image: consultImg,
    alt: "Consultório da profissional responsável para avaliação estética facial",
    badge: "Facial"
  },
  {
    id: "peeling-renovador",
    name: "Revitalização e Peeling Suave",
    description: "Aplicação controlada de ativos biocompatíveis para renovação gradual da textura e luminosidade natural da derme.",
    image: ritualImg,
    alt: "Bandeja com elixires dermatológicos e máscara facial suave",
    badge: "Renovação"
  }
];

export const galleryPhotos: GalleryItem[] = [
  {
    id: "recepcao",
    title: "Recepção e Acolhimento",
    category: "Espaço",
    image: heroImg,
    alt: "Recepção ampla da clínica em mármore travertino e iluminação suave"
  },
  {
    id: "consultorio-avaliacao",
    title: "Consultório de Avaliação",
    category: "Atendimento",
    image: consultImg,
    alt: "Mesa de atendimento clínico e consulta individualizada"
  },
  {
    id: "suite-facial",
    title: "Cabine de Tratamento Facial",
    category: "Espaço",
    image: facialImg,
    alt: "Cadeira ergonômica clínica com luz natural e produtos estéreis"
  },
  {
    id: "suite-corporal",
    title: "Suíte de Massoterapia",
    category: "Espaço",
    image: bodyImg,
    alt: "Maca com lençóis de linho natural e aromaterapia acolhedora"
  },
  {
    id: "estacao-biosseguranca",
    title: "Estação de Biossegurança",
    category: "Normas Técnicas",
    image: hygieneImg,
    alt: "Bancada de higienização com toalhas esterilizadas e insumos certificados"
  },
  {
    id: "equipamentos-certificados",
    title: "Tecnologia Certificada",
    category: "Tecnologia",
    image: laserImg,
    alt: "Equipamentos com registro na Anvisa e manutenção periódica"
  },
  {
    id: "ritual-produtos",
    title: "Cosméticos Biocompatíveis",
    category: "Insumos",
    image: ritualImg,
    alt: "Insumos dermocosméticos hipoalergênicos selecionados"
  },
  {
    id: "lounge-cha",
    title: "Lounge de Descompressão",
    category: "Espaço",
    image: loungeImg,
    alt: "Ambiente reservado com infusão de ervas naturais para relaxar antes e após as sessões"
  }
];

export const googleReviews: TestimonialItem[] = [
  {
    id: "rev-1",
    author: "Juliana Mendes",
    rating: 5,
    timeAgo: "há 3 semanas",
    text: "Espaço impecável, super acolhedor e sem aquela sensação impessoal de grandes redes. A avaliação prévia fez toda a diferença para o meu cuidado facial.",
    verified: true
  },
  {
    id: "rev-2",
    author: "Renata F. Albuquerque",
    rating: 5,
    timeAgo: "há 1 mês",
    text: "Atendimento pontual, sala privativa silenciosa e um cuidado incrível na biossegurança. Faço drenagem linfática regularmente e a atenção da equipe é exemplar.",
    verified: true
  },
  {
    id: "rev-3",
    author: "Patrícia Nogueira",
    rating: 5,
    timeAgo: "há 2 meses",
    text: "Profissional extremamente ética e atenciosa, que explica cada etapa com calma. É um alívio encontrar uma clínica que respeita a naturalidade do rosto.",
    verified: true
  }
];
