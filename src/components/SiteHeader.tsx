import Link from "next/link";
import { siteMeta, headerLinks } from "@/site-config.json";
import { ContentWrapper } from "@src/components/ContentWrapper";

export const SiteHeader: React.FC = () => (
  <header className="site-header">
    <ContentWrapper>
      <div className="site-header__inner">
        <Link href="/" passHref>
          <a className="site-header__logo-link">
            <img
              src="/logo.svg"
              alt={siteMeta.title}
              className="site-header__logo-img"
            />
            <h1 className="site-header__logo-text">{siteMeta.title}</h1>
          </a>
        </Link>
        <div className="site-header__links">
          {headerLinks.map((link, i) => {
            const key = `header-link-${i}`;
            if (link.href.startsWith("/")) {
              return (
                <Link key={key} href={link.href} passHref>
                  <a className="site-header__link">{link.title}</a>
                </Link>
              );
            }
            return (
              <a key={key} href={link.href} className="site-header__link">
                {link.title}
              </a>
            );
          })}
        </div>
      </div>
    </ContentWrapper>
  </header>
);
