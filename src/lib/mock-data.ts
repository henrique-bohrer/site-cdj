export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "Remoto" | "Híbrido" | "Presencial";
  level: "Estágio" | "Júnior" | "Trainee" | "Transição";
  contract: "CLT" | "PJ" | "Estágio" | "Freelance";
  salary?: string;
  postedAt: string;
  tags: string[];
  description: string;
}

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Desenvolvedor Frontend Júnior",
    company: "TechNova Solutions",
    location: "São Paulo, SP",
    type: "Híbrido",
    level: "Júnior",
    contract: "CLT",
    salary: "R$ 3.500 - R$ 4.500",
    postedAt: "2 dias atrás",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    description: "Estamos buscando um Desenvolvedor Frontend Júnior apaixonado por criar interfaces incríveis. Você trabalhará junto com nossa equipe de design para implementar novas features em nossa plataforma principal."
  },
  {
    id: "2",
    title: "Estágio em Engenharia de Software",
    company: "FinCloud",
    location: "Brasil",
    type: "Remoto",
    level: "Estágio",
    contract: "Estágio",
    postedAt: "5 horas atrás",
    tags: ["Node.js", "Python", "SQL"],
    description: "Venha aprender e crescer com a gente! Procuramos estudantes de tecnologia a partir do 3º semestre para atuar no desenvolvimento de microsserviços financeiros."
  },
  {
    id: "3",
    title: "Desenvolvedor Fullstack Trainee",
    company: "StartupZ",
    location: "Curitiba, PR",
    type: "Presencial",
    level: "Trainee",
    contract: "CLT",
    salary: "R$ 4.000",
    postedAt: "1 semana atrás",
    tags: ["Vue.js", "Ruby on Rails", "PostgreSQL"],
    description: "Programa de Trainee intensivo de 6 meses. Buscamos pessoas com muita vontade de aprender e resolver problemas complexos em um ambiente de ritmo acelerado."
  },
  {
    id: "4",
    title: "Analista de Dados Júnior (Transição de Carreira)",
    company: "DataMinds",
    location: "Brasil",
    type: "Remoto",
    level: "Transição",
    contract: "PJ",
    postedAt: "1 dia atrás",
    tags: ["Python", "Pandas", "PowerBI"],
    description: "Vaga exclusiva para pessoas em transição de carreira. Se você estudou análise de dados recentemente e busca sua primeira oportunidade na área, essa vaga é para você!"
  }
];
