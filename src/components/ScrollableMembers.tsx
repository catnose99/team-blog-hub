import Link from "next/link";
import members from "@/members.json";

export const ScrollableMembers: React.FC = () => {
  return (
    <div className="scrollable-members">
      {members.map((member, i) => (
        <Link
          key={`scrollable-member-${i}`}
          href={`/members/${member.name}`}
          passHref
        >
          <a className="scrollable-member__link">
            <span className="scrollable-member__image">
              <img
                src={`/avatars/${member.avatarFileName}`}
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
