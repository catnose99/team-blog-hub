const roles = [
  "Official",
  "Lead Engineer",
  "Frontend dev",
  "Backend dev",
  "CRE",
  "Designer",
  "Intern",
] as const;

export type Member = {
  id: string;
  name: string;
  avatarSrc: string;
  role?: typeof roles[number];
  bio?: string;
  sources?: string[];
  includeUrlRegex?: string;
  excludeUrlRegex?: string;
  githubUsername?: string;
  twitterUsername?: string;
  websiteUrl?: string;
};

export type PostItem = {
  authorId: string;
  authorName: string;
  title: string;
  link: string;
  contentSnippet?: string;
  isoDate?: string;
  dateMiliSeconds: number;
};
