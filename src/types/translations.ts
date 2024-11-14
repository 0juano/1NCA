export interface Translations {
  nav: {
    whyChooseUs: string;
    ourPhilosophy: string;
    services: string;
    contact: string;
  };
  hero: {
    subtitle: string;
    title: {
      line1: string;
      line2: string;
      line3: string;
      line4: string;
    };
    description: string;
    cta: string;
  };
  whyChooseUs: {
    title: string;
    subtitle: string;
    relevantExperience: {
      title: string;
      items: string[];
    };
    clearPhilosophy: {
      title: string;
      items: string[];
    };
  };
  ourPhilosophy: {
    title: string;
    subtitle: string;
    personalAttention: {
      title: string;
      items: string[];
    };
    provenMethodology: {
      title: string;
      items: string[];
    };
  };
  services: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    cta: string;
  };
  footer: {
    quote: string;
    author: string;
  };
}