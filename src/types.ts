export type Language = 'en' | 'fa';

export type Theme = 'dark' | 'light';

export type HistoricalCategory = 'architectural' | 'literary' | 'philosophy' | 'statecraft' | 'culture';

export type EraCategory = 'pre-islamic' | 'islamic-golden' | 'medieval' | 'modern';

export interface ProminentRuler {
  nameEn: string;
  nameFa: string;
  titleEn: string;
  titleFa: string;
  reignEn: string;
  reignFa: string;
  achievementEn: string;
  achievementFa: string;
}

export interface Dynasty {
  id: string;
  nameEn: string;
  nameFa: string;
  periodEn: string;
  periodFa: string;
  startYear: number; // For chronological sorting (-550 = 550 BCE)
  endYear: number;
  emblem: string;
  eraCategory?: EraCategory;
  category?: EraCategory;
  capitalEn: string;
  capitalFa: string;
  territorySqKm: string;
  descriptionEn: string;
  descriptionFa: string;
  rulers: ProminentRuler[];
  achievementsEn: string[];
  achievementsFa: string[];
  culturalLegacyEn: string;
  culturalLegacyFa: string;
}

export interface TimelineEvent {
  id: string;
  year: number;
  dateDisplayEn: string;
  dateDisplayFa: string;
  eraId: string;
  category: HistoricalCategory;
  titleEn: string;
  titleFa: string;
  summaryEn: string;
  summaryFa: string;
  fullDescriptionEn: string;
  fullDescriptionFa: string;
  locationEn: string;
  locationFa: string;
  quoteEn?: string;
  quoteFa?: string;
  quoteAuthorEn?: string;
  quoteAuthorFa?: string;
}

export interface HeritageSite {
  id: string;
  nameEn: string;
  nameFa: string;
  provinceEn: string;
  provinceFa: string;
  type: 'monument' | 'palace' | 'hydraulic' | 'spiritual' | 'archaeological';
  unescoYear?: number;
  eraEn: string;
  eraFa: string;
  coordinates: {
    // Relative coordinates on the historic plateau map (0-100%)
    x: number;
    y: number;
  };
  summaryEn: string;
  summaryFa: string;
  highlightsEn: string[];
  highlightsFa: string[];
  imageUrl: string;
}

export interface CulturalArtifact {
  id: string;
  titleEn: string;
  titleFa: string;
  categoryEn: string;
  categoryFa: string;
  eraEn: string;
  eraFa: string;
  currentHoldingEn: string;
  currentHoldingFa: string;
  descriptionEn: string;
  descriptionFa: string;
  significanceEn: string;
  significanceFa: string;
  quoteEn?: string;
  quoteFa?: string;
}
