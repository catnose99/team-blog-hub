export type Member = {
  id: string; // urlに使用するユニークな英数字
  nickname: string;
  avatarSrc: string; // 自分のアイコン画像。正方形の画像を指定して下さい！
  realName?: string;
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
