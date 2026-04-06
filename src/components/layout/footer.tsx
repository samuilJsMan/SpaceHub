import FooterAboutListLink from "../sharable/footerAboutListLink";
import IconButton from "../sharable/iconButton";
import { useTranslation } from "react-i18next";
import urls from "../../constants/urls.json";
import Select from "../sharable/select";
import IntenetSVG from "../SVGs/IntenetSVG";
import ShareSVG from "../SVGs/ShareSVG";
import LanguageSVG from "../SVGs/LanguageSVG";
const Footer = () => {
  const { t } = useTranslation();
  const footerBlocks = {
    company: {
      title: t("footer.company.title"),
      list: [
        { title: t("footer.company.list.0"), href: urls.footer.AboutOurVision },
        { title: t("footer.company.list.1"), href: urls.footer.GlobalLocations },
        { title: t("footer.company.list.2"), href: urls.footer.EnterprisePartners },
        { title: t("footer.company.list.3"), href: urls.footer.Careers },
      ],
    },
    community: {
      title: t("footer.community.title"),
      list: [
        { title: t("footer.community.list.0"), href: urls.footer.TheLoftBlog },
        { title: t("footer.community.list.1"), href: urls.footer.MemberEvents },
        { title: t("footer.community.list.2"), href: urls.footer.DesignGuidelines },
        { title: t("footer.community.list.3"), href: urls.footer.ReferralProgram },
      ],
    },
    support: {
      title: t("footer.support.title"),
      list: [
        { title: t("footer.support.list.0"), href: urls.footer.HelpCenter },
        { title: t("footer.support.list.1"), href: urls.footer.TrustAndSafety },
        { title: t("footer.support.list.2"), href: urls.footer.PrivacyPolicy },
        { title: t("footer.support.list.3"), href: urls.footer.TermsOfService },
      ],
    },
  };
  return (
    <footer className="footer">
      <div className="info">
        <div className="about">
          <div className="name">{t("PageName")}</div>
          <p className="text">
            {t("footer.about.info")}
          </p>
          <div className="linkLine">
            <IconButton href={urls.footer.share}>
              <ShareSVG></ShareSVG>
            </IconButton>
            <IconButton href={urls.footer.internet}>
              <IntenetSVG></IntenetSVG> 
            </IconButton>
            <IconButton href={urls.footer.language}>
              <LanguageSVG></LanguageSVG> 
            </IconButton>
          </div>
        </div>
        {Object.values(footerBlocks).map((block) => (
          <div className={block.title.toLocaleLowerCase()} key={block.title}>
            <div className="title">{block.title}</div>
            <div className="list">
              {block.list.map((link) => (
                <FooterAboutListLink key={link.title} href={link.href}>
                  {link.title}
                </FooterAboutListLink>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="license">
        <p className="licenseText">{t("footer.license")}</p>
        <div className="options">
          <Select selectClass="languageSelect" optionClass="optionsList" optionList={[
            { label: t("footer.languages.0"), value: "en"},
            { label: t("footer.languages.1"), value: "ua"},
          ]}></Select>
          <div className="usd">{t("footer.currency")}</div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
