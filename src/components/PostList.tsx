import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { PostItem } from "@src/types";
import { getMemberByName, getHostFromURL } from "@src/utils/helper";

dayjs.extend(relativeTime);

const PostLink: React.FC<{ item: PostItem }> = (props) => {
  const { authorName, title, isoDate, link } = props.item;
  const member = getMemberByName(authorName);
  if (!member) return null;

  return (
    <article className="post-link">
      <Link href={`/members/${member.name}`} passHref>
        <a className="post-link__author">
          <img
            src={member.avatarSrc}
            className="post-link__author-img"
            width={35}
            height={35}
          />
          <div className="post-link__author-name">
            <div className="post-link__author-name">{member.name}</div>
            <time dateTime={isoDate} className="post-link__date">
              {dayjs(isoDate).fromNow()}
            </time>
          </div>
        </a>
      </Link>
      <a href={link}>
        <h2 className="post-link__title">{title}</h2>
        <div className="post-link__host">{getHostFromURL(link)}</div>
      </a>
    </article>
  );
};

export const PostList: React.FC<{ items: PostItem[] }> = (props) => {
  return (
    <div className="post-list">
      {props.items.map((item, i) => (
        <PostLink key={`post-item-${i}`} item={item} />
      ))}
    </div>
  );
};
