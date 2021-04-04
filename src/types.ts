export type Author = {
  name: string;
  avatarSrc: string;
  role?: string;
  bio: string;
  sources: Source[];
  githubUsername: string;
  twitterUsername: string;
  websiteUrl?: string;
};

export type Source = {
  username?: string;
  avatar: string;
  url: string;
  profileUrl: string;
}

export type PostItem = {
  authorName: string;
  title: string;
  link: string;
  contentSnippet?: string;
  isoDate?: string;
  dateMiliSeconds: number;
};
