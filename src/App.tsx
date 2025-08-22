import "./index.css";

export default function App() {
  return (
    <div>
      {/* 헤더 */}
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
                        <strong className="home__carousel-title">
                          Available now <br />
                          on Weverse Shop!
                        </strong>
                        <p className="home__carousel-sub-title">
                          KATSEYE'S VIEWFINDER in Seoul <br />
                        </p>
                      </div>
                    </div>
                    <div className="home__carousel-content" role="button">
                      <em className="home__carousel-em">2hollis</em>
                      <div className="home__carousel-title-area">
                        <strong className="home__carousel-title">
                          2hollis
                          <br />
                          Community Open
                        </strong>
                        <p className="home__carousel-sub-title">
                          Get closer with him <br />
                          on Weverse!
                        </p>
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
        <div className="home__dm">
          <div className="home__dm_container">
            <div className="home__inner">
              <h2 className="home__dm-title">DM with your Artist!</h2>
              <div className="home__dm-list">
                <ul>
                  <li>
                    <button className="home__dm-img-btn" type="button">
                      <span className="home__dm-img-wrap">
                        <img></img>
                      </span>
                      <span className="home__dm-artist-name">KATSEYE</span>
                    </button>
                  </li>
                </ul>
                <ul>
                  <li>
                    <button className="home__dm-img-btn" type="button">
                      <span className="home__dm-img-wrap">
                        <img></img>
                      </span>
                      <span className="home__dm-artist-name">KATSEYE</span>
                    </button>
                  </li>
                </ul>
                <ul>
                  <li>
                    <button className="home__dm-img-btn" type="button">
                      <span className="home__dm-img-wrap">
                        <img></img>
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
              <div className="home__inner">
                <h2 className="home__artist-title">Looking for new artists?</h2>
                <div className="home__artist-body">
                  <ul className="home__artist-list">
                    <li className="home__artist-item">
                      <a className="home__artist-link" href="/">
                        <div className="home__artist-cover-wrap">
                          <img src="https://phinf.wevpstatic.net/MjAyMjExMzBfMjQx/MDAxNjY5Nzk4NzgzODIw.MArshwx42VZAp1IRPzJlklUoYK8sSRcD0p-JijkW4qAg.vkEIVFSt3wZxFWRrRV36j2obE-YkzzQyqW4OGFNZ5WQg.PNG/58664962789720092493d5ab0-a12f-4f74-bb27-99eae698c467.png?type=f416_354"
                            width="208" height="177" className="HomeArtistListSlotView_cover_img__a2krk" alt=""></img>
                        </div>
                        <div className="home__artist-thumb-wrap">

                        </div>
                        <div className="home__artist-text-wrap">

                        </div>
                      </a>
                    </li>
                    <li className="home__artist-item">
                      <a className="home__artist-link" href="/">
                        <div className="home__artist-cover-wrap">
                          <img
                            src="https://phinf.wevpstatic.net/MjAyNTA4MTlfMjk5/MDAxNzU1NTQ0MjI1MjA4.jkBcSfX0rHdpV00Km6boqgQIOyqCehIx6u8TskTiDUcg.GnzKrf4YoEZsguTgl7QNvWCMuaq_kVB9dseN3PEuSSkg.JPEG/b7022d79-68a4-45a0-9b12-07358b77ab68.jpg?type=f416_354"
                            width="208" height="177" className="HomeArtistListSlotView_cover_img__a2krk" alt=""></img>
                        </div>
                        <div className="home__artist-thumb-wrap">

                        </div>
                        <div className="home__artist-text-wrap">

                        </div>
                      </a>
                    </li>
                    <li className="home__artist-item">
                      <a className="home__artist-link" href="/">
                        <div className="home__artist-cover-wrap">
                          <img
                            src="https://phinf.wevpstatic.net/MjAyNTA3MTdfMjYw/MDAxNzUyNjk0MzM0MjI5.0G8sTIlaogHRbQRRqZbaK2wpLnrOCxRetnyHVlZXqPUg.TdrqD8biBQ-QMjacM3_huTM1QbUdNkZ8i1pcyUXKuGgg.PNG/73782565-9887-43de-b973-355c25a4aada.png?type=f416_354"
                            width="208" height="177" className="HomeArtistListSlotView_cover_img__a2krk" alt=""></img>
                        </div>
                        <div className="home__artist-thumb-wrap">

                        </div>
                        <div className="home__artist-text-wrap">

                        </div>
                      </a>
                    </li>
                    <li className="home__artist-item">
                      <a className="home__artist-link" href="/">
                        <div className="home__artist-cover-wrap">
                          <img
                            src="https://phinf.wevpstatic.net/MjAyNTA2MjdfMTg0/MDAxNzUwOTk3NzY3OTkx.7zZ_Qiv-diuYyA6eMBZ9gvsP_rEi3Av9RsYi9RFjomUg.Mi3jkONk6vCS8_lKBb9OB11zwMtUffuXmAsm1gsCh3Qg.PNG/27824086-3987-40e5-9334-46d0fc003eef.png?type=f416_354"
                            width="208" height="177" className="HomeArtistListSlotView_cover_img__a2krk" alt=""></img>
                        </div>
                        <div className="home__artist-thumb-wrap">

                        </div>
                        <div className="home__artist-text-wrap">

                        </div>
                      </a>
                    </li>
                    <li className="home__artist-item">
                      <a className="home__artist-link" href="/">
                        <div className="home__artist-cover-wrap">
                          <img
                            src="https://phinf.wevpstatic.net/MjAyNTA4MTBfMTYy/MDAxNzU0ODM3ODE2Mjgx.nVYcbE9Jmlt5HPESIeg4qt_lN20fnQVtyjTWl25Z5lAg.eqaQlnglidXILgT3BtlDRmSFUBbRePlj8g2lLIGMhMYg.JPEG/7153b67b-ee66-4114-b57f-0b6d329c502b.jpeg?type=f416_354"
                            width="208" height="177" class="HomeArtistListSlotView_cover_img__a2krk" alt=""></img>
                        </div>
                        <div className="home__artist-thumb-wrap">

                        </div>
                        <div className="home__artist-text-wrap">

                        </div>
                      </a>
                    </li>
                    <li className="home__artist-item">
                      <a className="home__artist-link" href="/">
                        <div className="home__artist-cover-wrap">
                          <img
                            src="https://phinf.wevpstatic.net/MjAyNTA3MjVfMTMy/MDAxNzUzNDE1NzEwMzA1.M8SIT17H2pd_JBICs98qO43rUgRUagSbG6y9RviXFR0g.7Zdkj4_u5TxCOw_uAdwsOTwe5nLQy7abJ5kuvBMxEtEg.PNG/e769c7c0-7483-45b5-892d-8f921f5db828.png?type=f416_354"
                            width="208" height="177" className="HomeArtistListSlotView_cover_img__a2krk" alt=""></img>
                        </div>
                        <div className="home__artist-thumb-wrap">

                        </div>
                        <div className="home__artist-text-wrap">

                        </div>
                      </a>
                    </li>
                    <li className="home__artist-item">
                      <a className="home__artist-link" href="/">
                        <div className="home__artist-cover-wrap">
                          <img
                            src="https://phinf.wevpstatic.net/MjAyNTA1MDhfMTE4/MDAxNzQ2NzA5MjI2NjM2.gLJBeA27ybDTpvoBvxpbNwJ6vxfGcv6XvfxYhmrxVdQg.PBTWPYfEMAYFRaEMoOiXLw0cRFh9fHF3iIihMlYswtgg.JPEG/50ac0926-8ce6-45be-bc9f-2d5f3403c7ad.jpeg?type=f416_354"
                            width="208" height="177" className="HomeArtistListSlotView_cover_img__a2krk" alt=""></img>
                        </div>
                        <div className="home__artist-thumb-wrap">

                        </div>
                        <div className="home__artist-text-wrap">

                        </div>
                      </a>
                    </li>
                    <li className="home__artist-item">
                      <a className="home__artist-link" href="/">
                        <div className="home__artist-cover-wrap">
                          <img
                            src="https://phinf.wevpstatic.net/MjAyNTAzMTZfMTc0/MDAxNzQyMDUyNjc3MTMw.cWekarkvEnXrvLCP51hwsaEHPKCW9fbQt4ffwxbyPyIg.u1euDZFQcCKcN09S7PrnPrUDNs2fGAU4s4LC6K6iD8wg.JPEG/dd319f2d-a2d1-4fbf-a0af-a9b6292f1afe.jpeg?type=f416_354"
                            width="208" height="177" className="HomeArtistListSlotView_cover_img__a2krk" alt=""></img>
                        </div>
                        <div className="home__artist-thumb-wrap">

                        </div>
                        <div className="home__artist-text-wrap">

                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home__footer">
          <footer className="home__footer-container">
            <div className="home__inner">
              <ul className="home__footer-link-list">
                <li className="home__footer-link-item">
                  <a href="/policies/terms">Terms of use</a>
                </li>
                <li className="home__footer-link-item">
                  <a href="/policies/service">Service operation policy</a>
                </li>
                <li className="home__footer-link-item">
                  <a href="/policies/paid">Premium service terms of use</a>
                </li>
                <li className="home__footer-link-item">
                  <a href="/policies/youth-protection">
                    Child and Youth Protection Policy
                  </a>
                </li>
                <li className="home__footer-link-item home__footer-link-item-privacy">
                  <a href="/policies/privacy">Privacy policy</a>
                </li>
                <li className="home__footer-link-item">
                  <a href="/policies/cookie">Cookie policy</a>
                </li>
                <li className="home__footer-link-item">
                  <button className="home__footer-btn" type="button">
                    Cookie Settings
                  </button>
                </li>
                <li className="home__footer-link-item">
                  <button className="home__footer-btn" type="button">
                    Join Weverse as an artist
                  </button>
                </li>
                <li className="home__footer-link-item">
                  <button className="home__footer-btn" type="button">
                    Help
                  </button>
                </li>
              </ul>
              <address className="home__footer-company-info">
                <p className="home__footer-company-info-text">
                  <span className="home__footer-company-info-text-company">
                    Weverse
                  </span>
                </p>
              </address>
              <div className="home__footer-copyright"></div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
