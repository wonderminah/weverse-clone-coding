import './index.css';

export default function App() {
  return (

    <div>
      {/* 헤더 */}
      <div className="header">
        <header className="header__container">
          <div className="header__service">
            <h1 className="header__logo-wrap">
              <a className="header__logo-link" href="/" >
                <span className="blind">weverse</span>
              </a>
            </h1>
          </div>
          <div className="header__action">
            <button className="header__sign-in-btn" type="button">Sign in</button>
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

      {/* 바디 */}
      <div className="body">
        <div className="home__carousel">
          <div className="home__carousel-area">
            <div className="home__carousel-inner">
              <div className="home__carousel-list flicking-viewport">
                <div className="home__carousel-item flicking-camera">
                  <div className="home__carousel-item-wrap">
                    <div className="home__carousel-content" role="button">
                      <em className="home__carousel-em">KATSEYE</em>
                      <div className="home__carousel-title-area">
                        <strong className="home__carousel-title">Available now <br />on Weverse Shop!</strong>
                        <p className="home__carousel-sub-title">KATSEYE'S VIEWFINDER in Seoul <br /></p>
                      </div>
                    </div>
                    <div className="home__carousel-content" role="button">
                      <em className="home__carousel-em">2hollis</em>
                      <div className="home__carousel-title-area">
                        <strong className="home__carousel-title">2hollis<br />Community Open</strong>
                        <p className="home__carousel-sub-title">Get closer with him <br />on Weverse!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home__carousel-pagination">
            <span className="home__carousel-page">
              <span className="blind">1 / 7</span>
            </span>
          </div>
          <button className="home__carousel-prev-btn" type="button">
            <span className="blind">prev</span>
          </button>
          <button className="home__carousel-next-btn" type="button">
            <span className="blind">next</span>
          </button>
        </div>
        <div className="home__artist">
          <div className="home__dm">
            <div className="home__dm-inner">
              <h2 className="home__dm-title">DM with your Artist!</h2>
              <div className="home__dm-list">
                <ul>
                  <li>
                    <button className="home__dm-img-btn" type="button">
                      <span className="home__dm-img-wrap">
                        <img>
                        </img>
                      </span>
                      <span className="home__dm-artist-name">KATSEYE</span>
                    </button>
                  </li>
                </ul>
                <ul>
                  <li>
                    <button className="home__dm-img-btn" type="button">
                      <span className="home__dm-img-wrap">
                        <img>
                        </img>
                      </span>
                      <span className="home__dm-artist-name">KATSEYE</span>
                    </button>
                  </li>
                </ul>
                <ul>
                  <li>
                    <button className="home__dm-img-btn" type="button">
                      <span className="home__dm-img-wrap">
                        <img>
                        </img>
                      </span>
                      <span className="home__dm-artist-name">KATSEYE</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="home__artist-slot">
            <div className="home_-artist-area">
              <div className="home__artist-inner">
                <h2 className="home__artist-title">Looking for new artists?</h2>
                <div className="home__artist-body">
                  <ul className="home__artist-list">
                    <li className="home__artist-item">
                      <a className="home__artist-link" href="/">
                        <div className="home__artist-cover-wrap"></div>
                        <div className="home__artist-thumb-wrap"></div>
                        <div className="home__artist-text-wrap"></div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home__footer">
          <ul className="home__footer-link-list">
            <li className="home__footer-link-item">
              <a href="/policies/terms">Terms of use</a>
            </li>
            <li className="home__footer-link-item">
              <a href="/policies/service">Service operation policy</a>
            </li>
            <li>
              <a href="/policies/paid">Premium service terms of use</a>
            </li>
            <li>
              <a href="/policies/youth-protection">Child and Youth Protection Policy</a>
            </li>
            <li>
              <a href="/policies/privacy">Privacy policy</a>
            </li>
            <li>
              <a href="/policies/cookie">Cookie policy</a>
            </li>
            <li>
              <button className="home__footer-btn" type="button">Cookie settings</button>
            </li>
            <li>
              <button className="home__footer-btn" type="button">Join Weverse as an artist</button>
            </li>
            <li>
              <button className="home__footer-btn" type="button">Help</button>
            </li>
          </ul>
          <address className="home__footer-company-info">
            <p className="home__footer-company-info-text">
              <span className="home__footer-company-info-text-company">Weverse</span>
            </p>
          </address>
          <div className="home__footer-copyright"></div>
        </div>
      </div>

    </div>
  );
}
