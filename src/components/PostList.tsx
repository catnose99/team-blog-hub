import { useState } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { PostItem } from "@src/types";
import {
  getHostFromURL,
  getFaviconSrcFromHostname,
  getAuthorData
} from "@src/utils/helper";

dayjs.extend(relativeTime);

const PostLink: React.FC<{ item: PostItem }> = (props) => {
  const { title, isoDate, link, dateMiliSeconds } = props.item;
  const author = getAuthorData();

  const hostname = getHostFromURL(link);
  const source = author.sources.filter((source) => {
    return source.url.includes(hostname)
  })[0];

  return (
    <article className="post-link">
      <Link href={source.profileUrl} passHref>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="post-link__author"
        >
          <img
            src={source.avatar}
            className="post-link__author-img"
            width={35}
            height={35}
          />
          <div className="post-link__author-name">
            <div className="post-link__author-name">{source.username || author.name}</div>
            <time dateTime={isoDate} className="post-link__date">
              {dayjs(isoDate).fromNow()}
            </time>
          </div>
        </a>
      </Link>
      <a
        className="post-link__main"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <h2 className="post-link__title">{title}</h2>
        </div>
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
  const [displayItemsCount, setDisplayItemsCount] = useState<number>(10);
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
            onClick={() => setDisplayItemsCount(displayItemsCount + 10)}
            className="post-list-load__button"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};
