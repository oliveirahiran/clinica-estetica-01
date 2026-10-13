export interface ClinicConfig {
  name: string;
  tagline: string;
  city: string;
  state: string;
  neighborhood: string;
  specialty: string;
  whatsappNumber: string; // E.g. "5511999999999" (only numbers with country code)
  whatsappDefaultMessage: string;
  phoneDisplay: string; // E.g. "(11) 99999-9999"
  addressFull: string;
  addressShort: string;
  googleMapsEmbedUrl: string;
  googleMapsDirectionsUrl: string;
  openingHoursWeekday: string;
  openingHoursSaturday: string;
  openingHoursSunday: string;
  practitionerName: string;
  practitionerTitle: string;
  practitionerCouncil: string;
  cnpj: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  badge: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  text: string;
  verified: boolean;
}
