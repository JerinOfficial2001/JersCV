interface Skills {
  technical: string[];
  soft: string[];
  language: string[];
}

export interface InputData {
  _id: string;
  name: string;
  last_name: string;
  role: string;
  mail: string;
  portfolio_link: string;
  linkedIn: string;
  phone: string;
  git: string;
  state: string;
  district: string;
  country: string;
  about: string;
  education: string[];
  skills: Skills;
  experience: string[];
  isVisible: boolean;
}