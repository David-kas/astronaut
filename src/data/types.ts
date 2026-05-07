export type FAQItem = { question: string; answer: string };

export type ContentSection = {
  title: string;
  html: string;
};

export type PageContent = {
  title: string;
  description: string;
  h1: string;
  /** Short intro under H1 (and home hero lead) */
  lead?: string;
  keywords: string;
  sections: ContentSection[];
  faq: FAQItem[];
  /** For Review schema on reviews page */
  review?: {
    ratingValue: string;
    bestRating: string;
    ratingCount: string;
    author: string;
  };
};

export type BlogContent = PageContent & {
  datePublished: string;
  dateModified: string;
};
