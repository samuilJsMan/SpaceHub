import NavButton from "../sharable/navButton";
import PrimaryButton from "../sharable/primaryButton";
import { useTranslation } from "react-i18next";
import urls from "../../constants/urls.json";
const Header= () => {
  const { t } = useTranslation();
  return (
    <header className="header">
        <nav className="navigation">
          <a href={urls.header.Explore} className="logo">{t("PageName")}</a>
        <div className="navButtons">
          <NavButton href={urls.header.Explore}>{t("header.Explore")}</NavButton>
          <NavButton href={urls.header.MyBookings}>{t("header.MyBookings")}</NavButton>
          <NavButton href={urls.header.Help}>{t("header.Help")}</NavButton>
        </div>
      </nav>
      <div className="auth">
        <PrimaryButton href={urls.header.SignIn}>{t("header.SignIn")}</PrimaryButton>  
        <PrimaryButton href={urls.header.login}>{t("header.SignUp")}</PrimaryButton>
      </div>
    </header>
  );
};

export { Header };