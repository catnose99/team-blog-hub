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
  title: string;
  username?: string;
  avatar: string;
  url: string;
  profileUrl: string;
  contents: string;
}

export type PostItem = {
  authorName: string;
  title: string;
  link: string;
  contentSnippet?: string;
  isoDate?: string;
  dateMiliSeconds: number;
};
