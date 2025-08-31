import "../index.css";
import Header from "./Header";

export default function Home() {
  return (
    <div>
      <Header />

      {/* 바디 */}
      <div className="body">
        <div className="home__container">
          <div className="home__carousel">
            <div className="home__carousel-inner">
              <div className="flicking-viewport" style={{ userSelect: 'none', WebkitUserDrag: 'none' as any, touchAction: 'pan-y' }}>
                <div className="flicking-camera" style={{ transform: 'translate(0px)' }}>
                  <div className="home__carousel-list">
                    <div role="button" tabIndex={0} className="home__carousel-card" style={{ backgroundImage: 'url("https://weverse-phinf.pstatic.net/MjAyNTA4MjJfMzkg/MDAxNzU1NzkzODU5NzQz.V7u4AQKC9m71mYQwuowkC1grFaCgAevbtgeza61JeWYg.LSb5RwXn6vQ2hIfmXtDd4mfU-Uj3AVCZz9pMZlu0uxMg.PNG/1726830548758090754ac3eb33-79df-4bba-b13a-a6e0023db892.png?type=f1070_600")', color: 'rgb(255, 255, 255)' }}>
                      <em className="home__carousel-artist-name">
                        <a href="/EXO/artistpedia" style={{ color: 'inherit', textDecoration: 'none' }}>EXO</a>
                      </em>
                      <div className="home__carousel-title-area">
                        <strong className="home__carousel-title">CHANYEOL <br />'Upside Down'</strong>
                        <p className="home__carousel-sub-title">Countdown Live <br />August 25, 5PM(KST)</p>
                      </div>
                    </div>
                    <div role="button" tabIndex={0} className="home__carousel-card" style={{ backgroundImage: 'url("https://weverse-phinf.pstatic.net/MjAyNTA4MjJfMzkg/MDAxNzU1NzkzODU5NzQz.V7u4AQKC9m71mYQwuowkC1grFaCgAevbtgeza61JeWYg.LSb5RwXn6vQ2hIfmXtDd4mfU-Uj3AVCZz9pMZlu0uxMg.PNG/1726830548758090754ac3eb33-79df-4bba-b13a-a6e0023db892.png?type=f1070_600")', color: 'rgb(255, 255, 255)' }}>
                      <em className="home__carousel-artist-name">
                        <a href="/EXO/artistpedia" style={{ color: 'inherit', textDecoration: 'none' }}>EXO</a>
                      </em>
                      <div className="home__carousel-title-area">
                        <strong className="home__carousel-title">CHANYEOL <br />'Upside Down'</strong>
                        <p className="home__carousel-sub-title">Countdown Live <br />August 25, 5PM(KST)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home__carousel-pagination">
                <span className="home__carousel-page" style={{ left: '33.3333%', width: '16.6667%' }}>
                  <span className="blind">3 / 6</span>
                </span>
              </div>
              <button type="button" className="home__carousel-prev-btn">
                <span className="blind">prev</span>
              </button>
              <button type="button" className="home__carousel-next-btn">
                <span className="blind">next</span>
              </button>

            </div>
          </div>
          <div className="home__dm">
            <div className="home__dm_container">
              <div className="home__inner">
                <h2 className="home__dm-title">DM with your Artist!</h2>
                <div className="home__dm-content">
                  <ul className="home__dm-list">
                    <li className="home__dm-item">
                      <button className="home__dm-item-wrap" type="button">
                        <span className="home__dm-item-img">
                          <img src="https://phinf.wevpstatic.net/MjAyNTAyMTdfMjcx/MDAxNzM5NzU3NDUyNzM5.gD6O4HKPWsIiaajDbTfBXpyFRMPv7IUpMbW2rwfiJOAg.u5pM8fV0pnhZCyNSEsQS-c6v5Y1leq-RjbUGt4gyOGgg.JPEG/1a87be58-da5a-4a1a-8c9e-5b51e6a6978f.jpeg?type=s128" className="DirectMessageWeverseHomeView_image__OXMed" width="64" height="64" alt="andteam" />
                        </span>
                        <span className="home__dm-item-name">
                          <a href="/&amp;TEAM/artistpedia" style={{ color: 'inherit', textDecoration: 'none' }}>&amp;TEAM</a>
                        </span>
                      </button>
                    </li>
                    <li className="home__dm-item">
                      <button className="home__dm-item-wrap" type="button">
                        <span className="home__dm-item-img">
                          <img src="https://phinf.wevpstatic.net/MjAyNTA0MTBfMTYz/MDAxNzQ0Mjc2NzIzMzAz.06dOvTWGYcOOSDSFZ1SI84Cvc7JOnXSUiHGOGkpmrog.LDkL0XtpNz9PejAC6tp-6OgGpmY_NJBug7Nu2ERcKB8g.PNG/7d15cb52-3525-40d7-8ed6-0d53d6edf187.png?type=s128" className="DirectMessageWeverseHomeView_image__OXMed" width="64" height="64" alt="choisooho" />
                        </span>
                        <span className="home__dm-item-name">CHOI SOO HO</span>
                      </button>
                    </li>
                    <li className="home__dm-item">
                      <button className="home__dm-item-wrap" type="button">
                        <span className="home__dm-item-img">
                          <img src="https://phinf.wevpstatic.net/MjAyNDExMTNfNDUg/MDAxNzMxNTAzMzAwNjg0.ballu3_1KGOgiVa0Q_r_gzWXrwW7QnjJlAvxyFWb1F4g.uIIzrG_bZmEbwfXg9Uz9nbT4zRmdK6sY53vv94DJOpcg.JPEG/adcc1307-bc75-4169-930e-2c60171884ba.jpeg?type=s128" className="DirectMessageWeverseHomeView_image__OXMed" width="64" height="64" alt="kyuhyun" />
                        </span>
                        <span className="home__dm-item-name">KYUHYUN</span>
                      </button>
                    </li>
                    <li className="home__dm-item">
                      <button className="home__dm-item-wrap" type="button">
                        <span className="home__dm-item-img">
                          <img src="https://phinf.wevpstatic.net/MjAyNDEwMjZfMjI5/MDAxNzI5OTQ4MjIxNjAy.dXgfGUpxQsFxJ-dNS8g20xbd_HYwz9llPS1tPYj9PxQg.ssrm7KF14EQRsHniIH4iGK15TVjv0Mie2kjAUQJyvvIg.JPEG/259a3a5a-ca26-46b9-b069-a926e3ac81de.jpeg?type=s128" className="DirectMessageWeverseHomeView_image__OXMed" width="64" height="64" alt="classy" />
                        </span>
                        <span className="home__dm-item-name">CLASS:y</span>
                      </button>
                    </li>
                    <li className="home__dm-item">
                      <button className="home__dm-item-wrap" type="button">
                        <span className="home__dm-item-img">
                          <img src="https://phinf.wevpstatic.net/MjAyNTA3MjFfMjk2/MDAxNzUzMDg3ODk2Njgz.aG01bqnH3r55MgN9QfdOXfeSn3O1bWN2zXRGCh731tcg.YehqcwZGjAOzPD1ZMhXpcaaFpPXaBMa7a1eY85KqRgkg.JPEG/7e70c9a4-213a-4dd7-af66-b47c22d9e907.jpeg?type=s128" className="DirectMessageWeverseHomeView_image__OXMed" width="64" height="64" alt="sonnaeun" />
                        </span>
                        <span className="home__dm-item-name">SON NA EUN</span>
                      </button>
                    </li>
                    <li className="home__dm-item">
                      <button className="home__dm-item-wrap" type="button">
                        <span className="home__dm-item-img">
                          <img src="https://phinf.wevpstatic.net/MjAyNTA1MDJfMjc2/MDAxNzQ2MTc2NTU0ODA4.NeWru2VYhk1CwJy9915plBUNMlKHqb0X8GwawmBVvxUg.2S1aq9E6gXhm_d-eoI_ltbfyu-mxEiMxFtBpW_aqjaIg.PNG/365745ea-ea81-44c8-b3f2-7293e6e9700b.png?type=s128" className="DirectMessageWeverseHomeView_image__OXMed" width="64" height="64" alt="dazbee" />
                        </span>
                        <span className="home__dm-item-name">DAZBEE</span>
                      </button>
                    </li>
                    <li className="home__dm-item">
                      <button className="DirectMessageWeverseHomeResetButtonView_reset__E+KmU" type="button">
                        <span className="blind">Reset</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="home__artist-slot">
              <div className="home__artist-area">
                <div className="home__inner">
                  <h2 className="home__artist-title">Looking for new artists?</h2>
                  <div className="home__artist-body">
                    <ul className="home__artist-list">
                      <li className="home__artist-item">
                        <a className="home__artist-link" href="/">
                          <div className="home__artist-cover-wrap">
                            <img
                              src="https://phinf.wevpstatic.net/MjAyMjExMzBfMjQx/MDAxNjY5Nzk4NzgzODIw.MArshwx42VZAp1IRPzJlklUoYK8sSRcD0p-JijkW4qAg.vkEIVFSt3wZxFWRrRV36j2obE-YkzzQyqW4OGFNZ5WQg.PNG/58664962789720092493d5ab0-a12f-4f74-bb27-99eae698c467.png?type=f416_354"
                              width="208"
                              height="177"
                              className="HomeArtistListSlotView_cover_img__a2krk"
                              alt=""
                            ></img>
                          </div>
                          <div className="home__artist-thumb-wrap">
                            <div className="home__artist-thumb-area">
                              <img
                                className="home__artist-thumb-img"
                                src="https://phinf.wevpstatic.net/MjAyNDAzMjFfMTI4/MDAxNzEwOTk2NjE4OTQ3.pXrfj-rgBTxmYg6iR5Lm5JklltCrryboW44AKayfTKQg.SiiGWfT6MEzcZC0huWXJicArWxkIkwzvWHbWixvKivUg.JPEG/43632476398883003e3740686-8110-4084-b943-fbf323114c1e.jpg?type=s86"
                                width="43"
                                height="43"
                                alt=""
                              ></img>
                            </div>
                          </div>
                          <div className="home__artist-text-wrap">
                            <div>
                              <strong className="home__artist-name">
                                Artist Name
                              </strong>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="home__artist-item">
                        <a className="home__artist-link" href="/">
                          <div className="home__artist-cover-wrap">
                            <img
                              src="https://phinf.wevpstatic.net/MjAyMjExMzBfMjQx/MDAxNjY5Nzk4NzgzODIw.MArshwx42VZAp1IRPzJlklUoYK8sSRcD0p-JijkW4qAg.vkEIVFSt3wZxFWRrRV36j2obE-YkzzQyqW4OGFNZ5WQg.PNG/58664962789720092493d5ab0-a12f-4f74-bb27-99eae698c467.png?type=f416_354"
                              width="208"
                              height="177"
                              className="HomeArtistListSlotView_cover_img__a2krk"
                              alt=""
                            ></img>
                          </div>
                          <div className="home__artist-thumb-wrap">
                            <div className="home__artist-thumb-area">
                              <img
                                className="home__artist-thumb-img"
                                src="https://phinf.wevpstatic.net/MjAyNDAzMjFfMTI4/MDAxNzEwOTk2NjE4OTQ3.pXrfj-rgBTxmYg6iR5Lm5JklltCrryboW44AKayfTKQg.SiiGWfT6MEzcZC0huWXJicArWxkIkwzvWHbWixvKivUg.JPEG/43632476398883003e3740686-8110-4084-b943-fbf323114c1e.jpg?type=s86"
                                width="43"
                                height="43"
                                alt=""
                              ></img>
                            </div>
                          </div>
                          <div className="home__artist-text-wrap">
                            <div>
                              <strong className="home__artist-name">
                                Artist Name
                              </strong>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="home__artist-item">
                        <a className="home__artist-link" href="/">
                          <div className="home__artist-cover-wrap">
                            <img
                              src="https://phinf.wevpstatic.net/MjAyMjExMzBfMjQx/MDAxNjY5Nzk4NzgzODIw.MArshwx42VZAp1IRPzJlklUoYK8sSRcD0p-JijkW4qAg.vkEIVFSt3wZxFWRrRV36j2obE-YkzzQyqW4OGFNZ5WQg.PNG/58664962789720092493d5ab0-a12f-4f74-bb27-99eae698c467.png?type=f416_354"
                              width="208"
                              height="177"
                              className="HomeArtistListSlotView_cover_img__a2krk"
                              alt=""
                            ></img>
                          </div>
                          <div className="home__artist-thumb-wrap">
                            <div className="home__artist-thumb-area">
                              <img
                                className="home__artist-thumb-img"
                                src="https://phinf.wevpstatic.net/MjAyNDAzMjFfMTI4/MDAxNzEwOTk2NjE4OTQ3.pXrfj-rgBTxmYg6iR5Lm5JklltCrryboW44AKayfTKQg.SiiGWfT6MEzcZC0huWXJicArWxkIkwzvWHbWixvKivUg.JPEG/43632476398883003e3740686-8110-4084-b943-fbf323114c1e.jpg?type=s86"
                                width="43"
                                height="43"
                                alt=""
                              ></img>
                            </div>
                          </div>
                          <div className="home__artist-text-wrap">
                            <div>
                              <strong className="home__artist-name">
                                Artist Name
                              </strong>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="home__artist-item">
                        <a className="home__artist-link" href="/">
                          <div className="home__artist-cover-wrap">
                            <img
                              src="https://phinf.wevpstatic.net/MjAyMjExMzBfMjQx/MDAxNjY5Nzk4NzgzODIw.MArshwx42VZAp1IRPzJlklUoYK8sSRcD0p-JijkW4qAg.vkEIVFSt3wZxFWRrRV36j2obE-YkzzQyqW4OGFNZ5WQg.PNG/58664962789720092493d5ab0-a12f-4f74-bb27-99eae698c467.png?type=f416_354"
                              width="208"
                              height="177"
                              className="HomeArtistListSlotView_cover_img__a2krk"
                              alt=""
                            ></img>
                          </div>
                          <div className="home__artist-thumb-wrap">
                            <div className="home__artist-thumb-area">
                              <img
                                className="home__artist-thumb-img"
                                src="https://phinf.wevpstatic.net/MjAyNDAzMjFfMTI4/MDAxNzEwOTk2NjE4OTQ3.pXrfj-rgBTxmYg6iR5Lm5JklltCrryboW44AKayfTKQg.SiiGWfT6MEzcZC0huWXJicArWxkIkwzvWHbWixvKivUg.JPEG/43632476398883003e3740686-8110-4084-b943-fbf323114c1e.jpg?type=s86"
                                width="43"
                                height="43"
                                alt=""
                              ></img>
                            </div>
                          </div>
                          <div className="home__artist-text-wrap">
                            <div>
                              <strong className="home__artist-name">
                                Artist Name
                              </strong>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="home__artist-item">
                        <a className="home__artist-link" href="/">
                          <div className="home__artist-cover-wrap">
                            <img
                              src="https://phinf.wevpstatic.net/MjAyMjExMzBfMjQx/MDAxNjY5Nzk4NzgzODIw.MArshwx42VZAp1IRPzJlklUoYK8sSRcD0p-JijkW4qAg.vkEIVFSt3wZxFWRrRV36j2obE-YkzzQyqW4OGFNZ5WQg.PNG/58664962789720092493d5ab0-a12f-4f74-bb27-99eae698c467.png?type=f416_354"
                              width="208"
                              height="177"
                              className="HomeArtistListSlotView_cover_img__a2krk"
                              alt=""
                            ></img>
                          </div>
                          <div className="home__artist-thumb-wrap">
                            <div className="home__artist-thumb-area">
                              <img
                                className="home__artist-thumb-img"
                                src="https://phinf.wevpstatic.net/MjAyNDAzMjFfMTI4/MDAxNzEwOTk2NjE4OTQ3.pXrfj-rgBTxmYg6iR5Lm5JklltCrryboW44AKayfTKQg.SiiGWfT6MEzcZC0huWXJicArWxkIkwzvWHbWixvKivUg.JPEG/43632476398883003e3740686-8110-4084-b943-fbf323114c1e.jpg?type=s86"
                                width="43"
                                height="43"
                                alt=""
                              ></img>
                            </div>
                          </div>
                          <div className="home__artist-text-wrap">
                            <div>
                              <strong className="home__artist-name">
                                Artist Name
                              </strong>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="home__artist-item">
                        <a className="home__artist-link" href="/">
                          <div className="home__artist-cover-wrap">
                            <img
                              src="https://phinf.wevpstatic.net/MjAyMjExMzBfMjQx/MDAxNjY5Nzk4NzgzODIw.MArshwx42VZAp1IRPzJlklUoYK8sSRcD0p-JijkW4qAg.vkEIVFSt3wZxFWRrRV36j2obE-YkzzQyqW4OGFNZ5WQg.PNG/58664962789720092493d5ab0-a12f-4f74-bb27-99eae698c467.png?type=f416_354"
                              width="208"
                              height="177"
                              className="HomeArtistListSlotView_cover_img__a2krk"
                              alt=""
                            ></img>
                          </div>
                          <div className="home__artist-thumb-wrap">
                            <div className="home__artist-thumb-area">
                              <img
                                className="home__artist-thumb-img"
                                src="https://phinf.wevpstatic.net/MjAyNDAzMjFfMTI4/MDAxNzEwOTk2NjE4OTQ3.pXrfj-rgBTxmYg6iR5Lm5JklltCrryboW44AKayfTKQg.SiiGWfT6MEzcZC0huWXJicArWxkIkwzvWHbWixvKivUg.JPEG/43632476398883003e3740686-8110-4084-b943-fbf323114c1e.jpg?type=s86"
                                width="43"
                                height="43"
                                alt=""
                              ></img>
                            </div>
                          </div>
                          <div className="home__artist-text-wrap">
                            <div>
                              <strong className="home__artist-name">
                                Artist Name
                              </strong>
                            </div>
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
                <address className="home__footer-info">
                  <dl>
                    <div className="home__footer-info-item">
                      <dt className="home__footer-info-title">Company Name</dt>
                      <dd className="home__footer-info-text">Weverse Company Inc.</dd>
                    </div>
                    <div className="home__footer-info-item">
                      <dt className="home__footer-info-title">CEO</dt>
                      <dd className="home__footer-info-text">Joon Won Choi</dd>
                    </div>
                    <div className="home__footer-info-item">
                      <dt className="home__footer-info-title">Call Center</dt>
                      <dd className="home__footer-info-text">1544-0790 (only available in South Korea)</dd>
                    </div>
                    <div className="home__footer-info-item">
                      <dt className="home__footer-info-title">FAX</dt>
                      <dd className="home__footer-info-text">+82 2-2144-9399</dd>
                    </div>
                    <div className="home__footer-info-item">
                      <dt className="home__footer-info-title">Address</dt>
                      <dd className="home__footer-info-text">C, 6F, PangyoTech-one Tower, 131, Bundangnaegok-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, Republic of Korea</dd>
                    </div>
                    <div className="home__footer-info-item">
                      <dt className="home__footer-info-title">Business Registration Number</dt>
                      <dd className="home__footer-info-text">716-87-01158
                        <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=7168701158"
                          className="home__footer-info-link"
                          target="_blank"
                          rel="noreferrer noopener"> Business Registration</a></dd>
                    </div>
                    <div className="home__footer-info-item">
                      <dt className="home__footer-info-title">Mail Order Business Registration Number</dt>
                      <dd className="home__footer-info-text">2022-Seongnam Bundang A-0557</dd>
                    </div>
                    <div className="home__footer-info-item">
                      <dt className="home__footer-info-title">Hosted by</dt>
                      <dd className="home__footer-info-text">Amazon Web Services, Inc., Naver Cloud</dd>
                    </div>
                  </dl>
                </address>
                <div className="home__footer-copyright">
                  <span className="home__footer-copyright-text">© WEVERSE COMPANY Inc.</span>
                  <em className="home__footer-copyright-version">Ver 2.37.0</em>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div >
  );
}
