import Link from "next/link";

export const LinkBackHome: React.FC = () => (
  <Link href="/" passHref>
    <a className="about__home-button">Back Home</a>
  </Link>
);
