export interface NavItem {
  label: string;
  target: string;
}

export interface ProfileLink {
  label: string;
  value?: string;
  href?: string;
  tone?: 'amber' | 'teal' | 'coral' | 'blue';
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  photo: string;
  summary: string;
  links: ProfileLink[];
}

export interface Experience {
  role: string;
  company: string;
  href: string;
  period: string;
  summary: string;
  tags: string[];
}

export interface PortfolioCard {
  title: string;
  eyebrow: string;
  description: string;
  href?: string;
  tags: string[];
}

export interface LinkCard {
  title: string;
  meta: string;
  href?: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface PortfolioData {
  nav: NavItem[];
  profile: Profile;
  highlights: PortfolioCard[];
  experience: Experience[];
  projects: PortfolioCard[];
  skillGroups: SkillGroup[];
  education: LinkCard[];
  practice: LinkCard[];
  certificates: LinkCard[];
  activities: LinkCard[];
  writing: PortfolioCard[];
}
