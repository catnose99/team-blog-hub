import Link from "next/link";
import { members } from "@members";

export const ScrollableMembers: React.FC = () => {
  return (
    <div className="scrollable-members">
      {members.map((member, i) => (
        <Link
          key={`scrollable-member-${i}`}
          href={`/members/${encodeURIComponent(member.name)}`}
          passHref
        >
          <a className="scrollable-member__link">
            <span className="scrollable-member__image">
              <img
                src={member.avatarSrc}
                alt={member.name}
                className="scrollable-member__img"
                width={80}
                height={80}
              />
            </span>
            <span className="scrollable-member__name">{member.name}</span>
            <span className="scrollable-member__role">{member.role}</span>
          </a>
        </Link>
      ))}
    </div>
  );
};
