import type {
  Article,
  AiAdvisorConfig,
  CategoryItem,
  CompanyInfo,
  ConsultationRequestItem,
  HeroCmsContent,
  MediaItem,
  Product,
  Project,
  QuoteRequestItem,
  Service,
} from '../types';

/**
 * Seed data used by the client before records are added through the admin panel.
 * Keep these exports in one module so browser and server builds resolve the same
 * case-sensitive path on Linux and on case-insensitive local filesystems.
 */
export const PRODUCTS: Product[] = [];
export const PROJECTS: Project[] = [];
export const SERVICES: Service[] = [];
export const ARTICLES: Article[] = [];
export const CATEGORIES_DATA: CategoryItem[] = [];

export const COMPANY_INFO: CompanyInfo = {
  nameFa: 'شرکت طیوران صنعت پویا',
  nameEn: 'Toyooran Sanat Pouya',
  tagline: 'طراحی و تجهیز تخصصی صنعت طیور',
  phone: '',
  email: '',
  address: '',
  factoryAddress: '',
  workingHours: '',
  locations: [],
};

export const DEFAULT_HERO_CMS: HeroCmsContent = {
  title: 'طیوران صنعت پویا',
  subtitle: 'راهکارهای تخصصی طراحی و تجهیز واحدهای پرورش طیور',
  pillText: 'طراحی، ساخت و تجهیز',
  ctaPrimaryText: 'مشاهده محصولات',
  ctaSecondaryText: 'درخواست مشاوره',
};

export const DEFAULT_AI_CONFIG: AiAdvisorConfig = {
  systemPrompt: 'شما مشاور تخصصی تجهیزات و پروژه‌های صنعت طیور هستید.',
  welcomeMessage: 'سلام، برای انتخاب تجهیزات مناسب در خدمت شما هستم.',
  suggestedQuestions: [],
};

export const INITIAL_QUOTES: QuoteRequestItem[] = [];
export const INITIAL_CONSULTATIONS: ConsultationRequestItem[] = [];
export const INITIAL_MEDIA: MediaItem[] = [];
