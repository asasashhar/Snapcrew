export interface PortfolioItem {
  id: number;
  title: string;
  category: 'weddings' | 'portraits' | 'events' | 'pre-wedding' | 'commercial';
  categoryLabel: string;
  subtitle: string;
  subcategory: string;
  description: string;
  location: string;
  archiveTag: string;
  aspect: string;
  colSpan: string;
  image: string;
  highResImage?: string;
  alt: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  deliverables: string[];
}

export interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  category: string;
  location: string;
}

export interface BookingEnquiry {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  shootType: string;
  preferredDate?: string;
  message: string;
  createdAt: string;
}
