import Link from 'next/link';
import { members } from '@members';
import { getMemberPath } from '@src/utils/helper';

export const ScrollableMembers: React.FC = () => {
  return (
    <div className="scrollable-members">
      {members.map((member, i) => (
        <Link key={`scrollable-member-${i}`} href={getMemberPath(member.id)} passHref>
          <a className="scrollable-member__link">
            <span className="scrollable-member__image">
              <img
                src={member.avatarSrc}
                alt={member.nickname}
                className="scrollable-member__img"
                width={80}
                height={80}
              />
            </span>
            <span className="scrollable-member__nickname">{member.nickname}</span>
            <span className="scrollable-member__real-name">{member.realName}</span>
          </a>
        </Link>
      ))}
    </div>
  );
};
