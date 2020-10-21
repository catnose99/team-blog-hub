export type Member = {
  name: string;
  avatarFileName: string;
  role?: string;
  bio?: string;
  sources?: string[];
};

export type PostItem = {
  authorName: string;
  title?: string;
  contentSnippet?: string;
  link?: string;
  isoDate?: string;
};
