export type Member = {
  name: string;
  avatarSrc: string;
  role?: string;
  bio?: string;
  sources?: string[];
  excludeUrlRegex?: string;
  githubUsername?: string;
  twitterUsername?: string;
  websiteUrl?: string;
};

export type PostItem = {
  authorName: string;
  title: string;
  link: string;
  contentSnippet?: string;
  isoDate?: string;
  dateMiliSeconds: number;
};
