import NavButton from "./navButton";
import PrimaryButton from "./primaryButton";
const Header= () => {
  return (
    <header className="header">
        <nav className="navigation">
          <a href="/explore" className="logo">SpaceHub</a>
        <div className="navButtons">
          <NavButton href="/explore">Explore</NavButton>
          <NavButton href="/mybookings">My Bookings</NavButton>
          <NavButton href="/help">Help</NavButton>
        </div>
      </nav>
      <div className="auth">
        <PrimaryButton href="/login">Log in</PrimaryButton>  
        <PrimaryButton href="/signup">Sign Up</PrimaryButton>
      </div>
    </header>
  );
};

export { Header };