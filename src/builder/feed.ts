import { Feed } from 'feed';
import fs from 'fs';
import { config } from '../../site.config';
import posts from '../../.contents/posts.json';

const feed = new Feed({
  title: config.siteMeta.title,
  description: config.siteMeta.description,
  id: config.siteRoot,
  link: config.siteRoot,
  language: 'ja',
  image: 'https://blog.3-shake.com/og.png',
  copyright: config.siteMeta.teamName,
});

for (const post of posts.slice(0, 32)) {
  feed.addItem({
    title: post.title,
    id: post.link,
    link: post.link,
    author: [{ name: post.authorName }],
    date: new Date(post.isoDate),
    content: post.contentSnippet,
  });
}

fs.writeFileSync('./public/feed.xml', feed.rss2());
