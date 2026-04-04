import FooterAboutListLink from "./footerAboutListLink";
import IconButton from "./iconButton";
const Footer= () => {
  return (
    <footer className="footer">
      <div className="info">
        <div className="about">
          <div className="name">SpaceHub</div>
          <p className="text">Premium environments for global creators.We curate, you create. 40+ citiesworldwide.</p>
          <div className="linkLine">
            <IconButton href="#"></IconButton>
            <IconButton href="#"></IconButton>
            <IconButton href="#"></IconButton>
          </div>
        </div>
        <div className="company">
          <div className="title">Company</div>
          <div className="list">
            <FooterAboutListLink href="#">About Our Vision</FooterAboutListLink>
            <FooterAboutListLink href="#">Global Locations</FooterAboutListLink>
            <FooterAboutListLink href="#">Enterprise Partners</FooterAboutListLink>
            <FooterAboutListLink href="#">Careers</FooterAboutListLink>
          </div>
        </div>
        <div className="community">
          <div className="title">Community</div>
          <div className="list">
            <FooterAboutListLink href="#">The Loft Blog</FooterAboutListLink>
            <FooterAboutListLink href="#">Member Events</FooterAboutListLink>
            <FooterAboutListLink href="#">Design Guidelines</FooterAboutListLink>
            <FooterAboutListLink href="#">Referral Program</FooterAboutListLink>
          </div>
        </div>
        <div className="support">
          <div className="title">Support</div>
          <div className="list">
            <FooterAboutListLink href="#">Help Center</FooterAboutListLink>
            <FooterAboutListLink href="#">Trust & Safety</FooterAboutListLink>
            <FooterAboutListLink href="#">Privacy Policy</FooterAboutListLink>
            <FooterAboutListLink href="#">Terms of Service</FooterAboutListLink>
          </div>
        </div>
      </div>
      <div className="license">
        <p className="licenseText">© 2024 SpaceHub Inc. All rights reserved.</p>
        <div className="options">
          <div className="languageSelect">English (US)</div>
          <div className="usd">USD ($)</div>
        </div>
      </div>
    </footer>
  );
};

export { Footer }; 