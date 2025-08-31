import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <header className="header__container">
        <div className="header__service">
          <h1 className="header__logo-wrap">
            <a className="header__logo-link" href="/">
              <span className="blind">weverse</span>
            </a>
          </h1>
        </div>
        <div className="header__action">
          <button className="header__sign-in-btn" type="button">
            Sign in
          </button>
          <div className="header__shop-wrap">
            <button className="header__jelly-shop-btn" type="button">
              <span className="blind">Jelly Shop</span>
            </button>
            <a className="header__weverse-shop-link">
              <span className="blind">Weverse Shop</span>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
