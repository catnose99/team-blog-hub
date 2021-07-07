import Link from 'next/link';
import { members } from '@members';
import { getMemberPath } from '@src/utils/helper';
import { avatorEmoji, scrollableMemberLink } from '@src/shared/styles';

// eslint-disable-next-line import/prefer-default-export
export const ScrollableMembers: React.FC = () => {
  return (
    <div className="scrollable-members">
      {members.map((member, i) => (
        <Link
          // eslint-disable-next-line react/no-array-index-key
          key={`scrollable-member-${i}`}
          href={getMemberPath(member.name)}
          passHref
        >
          <a className={scrollableMemberLink}>
            <span className="scrollable-member__image">
              <div className={avatorEmoji}>{member.avatarEmoji}</div>
            </span>
            <span className="scrollable-member__name">{member.name}</span>
            <span className="scrollable-member__role">{member.role}</span>
          </a>
        </Link>
      ))}
    </div>
  );
};
