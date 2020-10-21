export type Member = {
  name: string;
  avatarSrc: string;
  role?: string;
  bio?: string;
  sources?: string[];
};

export type PostItem = {
  authorName: string;
  title: string;
  link: string;
  contentSnippet?: string;
  isoDate?: string;
};
