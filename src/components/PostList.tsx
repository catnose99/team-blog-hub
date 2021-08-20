import { useState } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { PostItem } from "@src/types";
import {
  getMemberByName,
  getHostFromURL,
  getFaviconSrcFromHostname,
  getMemberPath,
  getMemberById,
} from "@src/utils/helper";

dayjs.extend(relativeTime);

const PostLink: React.FC<{ item: PostItem }> = (props) => {
  const { authorId, title, isoDate, link, dateMiliSeconds } = props.item;
  const member = getMemberById(authorId);
  if (!member) return null;

  const hostname = getHostFromURL(link);

  return (
    <article className="post-link">
      <Link href={getMemberPath(member.id)} passHref>
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
      <a href={link} className="post-link__main-link">
        <h2 className="post-link__title">{title}</h2>
        {hostname && (
          <div className="post-link__site">
            <img
              src={getFaviconSrcFromHostname(hostname)}
              width={14}
              height={14}
              className="post-link__site-favicon"
            />
            {hostname}
          </div>
        )}
      </a>
      {dateMiliSeconds && dateMiliSeconds > Date.now() - 86400000 * 3 && (
        <div className="post-link__new-label">NEW</div>
      )}
    </article>
  );
};

export const PostList: React.FC<{ items: PostItem[] }> = (props) => {
  const [displayItemsCount, setDisplayItemsCount] = useState<number>(32);
  const totalItemsCount = props.items?.length || 0;
  const canLoadMore = totalItemsCount - displayItemsCount > 0;

  if (!totalItemsCount) {
    return <div className="post-list-empty">No posts yet</div>;
  }

  return (
    <>
      <div className="post-list">
        {props.items.slice(0, displayItemsCount).map((item, i) => (
          <PostLink key={`post-item-${i}`} item={item} />
        ))}
      </div>
      {canLoadMore && (
        <div className="post-list-load">
          <button
            onClick={() => setDisplayItemsCount(displayItemsCount + 32)}
            className="post-list-load__button"
          >
            LOAD MORE
          </button>
        </div>
      )}
    </>
  );
};
