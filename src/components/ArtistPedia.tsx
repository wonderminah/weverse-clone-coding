import { useParams } from 'react-router-dom';
import "./ArtistPedia.css";

export default function ArtistPedia() {
  const { artistName } = useParams();

  return (
    <>
      {/* 바디 */}
      <div className="body">
        <div className="ArtistPediaHomePage_container__aQN82">
          <div className="ArtistPediaHomePage_wrapper__bOugz">
            <div className="PcArtistPediaJumboIntro_intro__BOVBM">
              <div className="PcArtistPediaJumboIntro_cover__JcGS8" data-cover-type="IMAGE" data-shape-type="HORIZONTAL">
                <div className="PcArtistPediaJumboImageView_image_wrap__pAIwS" data-shape-type="HORIZONTAL">
                  <div style={{ aspectRatio: 'auto 1500 / 1280' }}>
                    <img src="https://phinf.wevpstatic.net/MjAyMzA4MTBfMTE1/MDAxNjkxNjQxNzU4MjQ2.I2282NTtCbYSMFrSM-qlVe9e7o0mQZlydcLj-fiqnRYg.LMBmyUmWfdB2wvwlBgtcemk2aNRdUfnbg-uImBNb37Mg.JPEG/image.jpg?type=w2200" className="PcArtistPediaJumboImageView_image__fLqoW" width="1500" height="1280" alt=""></img>
                  </div>
                </div>
              </div>
              <div className="PcArtistPediaJumboIntro_description__+Aprn">
                <div>
                </div>
              </div>
            </div>
            <div className="ArtistPediaMemberProfiles_pc_profile__f6POE">
              <h3 className="PcArtistPediaTitleView_title__5VRG9">Profile</h3>
              <div className="PcArtistPediaMemberProfiles_flicking_wrap__XJDDY">
                <div className="flicRng-viewport PcArtistPediaMemberProfiles_flicking__aUn+I" style={{ userSelect: 'none', webkitUserDrag: 'none', touchAction: 'pan-y' }}>
                  <div className="flicRng-camera" style={{ transform: 'translate(-10px)' }}>
                    <a className="PcArtistPediaMemberProfiles_flicking_item__IFEfV" href="/winner/profile/3ae9cc877db32203257f21329499164d">
                      <div style={{ aspectRatio: 'auto 120 / 120', overflow: 'hidden', borderRadius: '30px' }}>
                      </div>
                      <div className="PcArtistPediaMemberProfilesView_artist__AnKzo">YOON</div>
                    </a>
                    <a className="PcArtistPediaMemberProfiles_flicking_item__IFEfV" href="/winner/profile/57c0567ae4599e186215875b6f4c6136">
                      <div style={{ aspectRatio: 'auto 120 / 120', overflow: 'hidden', borderRadius: '30px' }}>
                      </div>
                      <div className="PcArtistPediaMemberProfilesView_artist__AnKzo">JINU</div>
                    </a>
                    <a className="PcArtistPediaMemberProfiles_flicking_item__IFEfV" href="/winner/profile/9f20d36dfcd653f5b108a5de45ebeedc">
                      <div style={{ aspectRatio: 'auto 120 / 120', overflow: 'hidden', borderRadius: '30px' }}>
                      </div>
                      <div className="PcArtistPediaMemberProfilesView_artist__AnKzo">MINO</div>
                    </a>
                    <a className="PcArtistPediaMemberProfiles_flicking_item__IFEfV" href="/winner/profile/eae442f350fa798856eba453b8476f24">
                      <div style={{ aspectRatio: 'auto 120 / 120', overflow: 'hidden', borderRadius: '30px' }}>
                      </div>
                      <div className="PcArtistPediaMemberProfilesView_artist__AnKzo">HOONY</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="ArtistPediaFanPickedLive_pc_fan_picked__Yj05g">
              <h3 className="PcArtistPediaTitleView_title__5VRG9">LIVE</h3>
              <ul className="PcArtistPediaFanPickedLive_live_list__nwpzt">
                <li>
                  <a className="PcArtistPediaFanPickedLiveItemView_thumbnail_link__exZJV" href="/winner/media/0-155788625">
                    <div className="PcArtistPediaFanPickedLiveItemView_thumbnail_wrap__cKKNC">
                      <div style={{ aspectRatio: 'auto 351 / 220' }}>
                      </div>
                      <em className="PcArtistPediaFanPickedLiveItemView_play_time__Pchic">49:42</em>
                    </div>
                    <div className="PcArtistPediaFanPickedLiveItemView_date__TbrnU">02. 12. 20:00</div>
                    <strong className="PcArtistPediaFanPickedLiveItemView_title__bFyLq">오랜만이야</strong>
                  </a>
                </li>
                <li>
                  <a className="PcArtistPediaFanPickedLiveItemView_thumbnail_link__exZJV" href="/winner/media/4-195356918">
                    <div className="PcArtistPediaFanPickedLiveItemView_thumbnail_wrap__cKKNC">
                      <div style={{ aspectRatio: 'auto 351 / 220' }}>
                      </div>
                      <em className="PcArtistPediaFanPickedLiveItemView_play_time__Pchic">01:50:38</em>
                    </div>
                    <div className="PcArtistPediaFanPickedLiveItemView_date__TbrnU">03. 24. 20:10</div>
                    <strong className="PcArtistPediaFanPickedLiveItemView_title__bFyLq">Hi</strong>
                  </a>
                </li>
                <li>
                  <a className="PcArtistPediaFanPickedLiveItemView_thumbnail_link__exZJV" href="/winner/media/1-159638774">
                    <div className="PcArtistPediaFanPickedLiveItemView_thumbnail_wrap__cKKNC">
                      <div style={{ aspectRatio: 'auto 351 / 220' }}>
                      </div>
                      <em className="PcArtistPediaFanPickedLiveItemView_play_time__Pchic">51:23</em>
                    </div>
                    <div className="PcArtistPediaFanPickedLiveItemView_date__TbrnU">05. 27. 19:01</div>
                    <strong className="PcArtistPediaFanPickedLiveItemView_title__bFyLq">승승TV 시즌2 Ep.0 &lt;제작 발표회&gt;</strong>
                  </a>
                </li>
                <li>
                  <a className="PcArtistPediaFanPickedLiveItemView_thumbnail_link__exZJV" href="/winner/media/1-156438971">
                    <div className="PcArtistPediaFanPickedLiveItemView_thumbnail_wrap__cKKNC">
                      <div style={{ aspectRatio: 'auto 351 / 220' }}>
                      </div>
                      <em className="PcArtistPediaFanPickedLiveItemView_play_time__Pchic">50:29</em>
                    </div>
                    <div className="PcArtistPediaFanPickedLiveItemView_date__TbrnU">02. 28. 18:15</div>
                    <strong className="PcArtistPediaFanPickedLiveItemView_title__bFyLq">쇼쇽 라이브</strong>
                  </a>
                </li>
                <li>
                  <a className="PcArtistPediaFanPickedLiveItemView_thumbnail_link__exZJV" href="/winner/media/4-202599390">
                    <div className="PcArtistPediaFanPickedLiveItemView_thumbnail_wrap__cKKNC">
                      <div style={{ aspectRatio: 'auto 351 / 220' }}>
                      </div>
                      <em className="PcArtistPediaFanPickedLiveItemView_play_time__Pchic">01:05:18</em>
                    </div>
                    <div className="PcArtistPediaFanPickedLiveItemView_date__TbrnU">06. 24. 18:55</div>
                    <strong className="PcArtistPediaFanPickedLiveItemView_title__bFyLq">승승TV 시즌2 Ep.1 &lt;연습 전 입풀기 방송&gt;</strong>
                  </a>
                </li>
                <li>
                  <a className="PcArtistPediaFanPickedLiveItemView_thumbnail_link__exZJV" href="/winner/media/1-163042512">
                    <div className="PcArtistPediaFanPickedLiveItemView_thumbnail_wrap__cKKNC">
                      <div style={{ aspectRatio: 'auto 351 / 220' }}>
                      </div>
                      <em className="PcArtistPediaFanPickedLiveItemView_play_time__Pchic">01:17:58</em>
                    </div>
                    <div className="PcArtistPediaFanPickedLiveItemView_date__TbrnU">08. 17. 17:00</div>
                    <strong className="PcArtistPediaFanPickedLiveItemView_title__bFyLq">승승TV 시즌2 Ep.3 &lt;위너는 열한 살&gt;</strong>
                  </a>
                </li>
              </ul>
            </div>
            <div className="ArtistPediaMediaOfMonth_pc_media_of_month__sMeRA">
              <h3 className="PcArtistPediaTitleView_title__5VRG9">Media</h3>
              <ul className="PcArtistPediaMediaOfMonth_list__B9LNZ">
                <li className="PcArtistPediaMediaOfMonth_item__p5R7Y">
                  <a href="/winner/media/3-204957412" className="PcArtistPediaMediaOfMonthItemView_container__26enP">
                    <div className="PcArtistPediaMediaOfMonthItemView_preview_area__GIrG7">
                      <div style={{ aspectRatio: 'auto 260 / 146' }}>
                      </div>
                    </div>
                    <strong className="PcArtistPediaMediaOfMonthItemView_title__hNMjk">2025 WINNER CONCERT [IN OUR CIRCLE] DAY 1 💙</strong>
                    <div className="PcArtistPediaMediaOfMonthItemView_date__BirsF">2025.07.26</div>
                  </a>
                </li>
                <li className="PcArtistPediaMediaOfMonth_item__p5R7Y">
                  <a href="/winner/media/4-205007818" className="PcArtistPediaMediaOfMonthItemView_container__26enP">
                    <div className="PcArtistPediaMediaOfMonthItemView_preview_area__GIrG7">
                      <div style={{ aspectRatio: 'auto 260 / 146' }}>
                      </div>
                    </div>
                    <strong className="PcArtistPediaMediaOfMonthItemView_title__hNMjk">2025 WINNER CONCERT [IN OUR CIRCLE] DAY 2 💙</strong>
                    <div className="PcArtistPediaMediaOfMonthItemView_date__BirsF">2025.07.26</div>
                  </a>
                </li>
                <li className="PcArtistPediaMediaOfMonth_item__p5R7Y">
                  <a href="/winner/media/4-205069772" className="PcArtistPediaMediaOfMonthItemView_container__26enP">
                    <div className="PcArtistPediaMediaOfMonthItemView_preview_area__GIrG7">
                      <div style={{ aspectRatio: 'auto 260 / 146' }}>
                      </div>
                    </div>
                    <strong className="PcArtistPediaMediaOfMonthItemView_title__hNMjk">2025 WINNER CONCERT [IN OUR CIRCLE] DAY 3 💙</strong>
                    <div className="PcArtistPediaMediaOfMonthItemView_date__BirsF">2025.07.27</div>
                  </a>
                </li>
                <li className="PcArtistPediaMediaOfMonth_item__p5R7Y">
                  <a href="/winner/media/0-162936022" className="PcArtistPediaMediaOfMonthItemView_container__26enP">
                    <div className="PcArtistPediaMediaOfMonthItemView_preview_area__GIrG7">
                      <div style={{ aspectRatio: 'auto 260 / 146' }}>
                      </div>
                    </div>
                    <strong className="PcArtistPediaMediaOfMonthItemView_title__hNMjk">WINNER 11th Anniversary</strong>
                    <div className="PcArtistPediaMediaOfMonthItemView_date__BirsF">2025.08.17</div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="ArtistPediaWeverseShopArrivals_pc_new_arrivals__MrrPG">
              <div className="PcArtistPediaWeverseShopArrivals_title_wrap__H0VU-">
                <h3 className="PcArtistPediaTitleView_title__5VRG9">Merch</h3>
                <button type="button" className="PcArtistPediaWeverseShopArrivals_shop__mEZsR">Artist Shop</button>
              </div>
              <ul className="PcArtistPediaWeverseShopArrivals_list__b24tr">
                <li className="item">
                  <div role="button" tabindex="0" className="DivAsButtonView_div_as_button__jl7Xf PcWeverseShopArrivalItemView_arrival__brlxG PcWeverseShopArrivalItemView_-home__9Ox4o PcWeverseShopArrivalItemView_-dark__cbtG6">
                    <div className="PcWeverseShopArrivalItemView_image_wrapper__68vpb">
                      <img className="PcWeverseShopArrivalItemView_image__Kt6Sl" src="https://cdn-contents.weverseshop.io/public/shop/f88cb19a128fb6c28f39fecde222d99c.png" alt="" loading="lazy"></img>
                    </div>
                    <em className="PcWeverseShopArrivalItemView_product__gnn7H">INNER CIRCLE MEMBERSHIP</em>
                    <div className="PcWeverseShopArrivalItemView_price_wrapper__05mXU">
                      <strong className="PcWeverseShopArrivalItemView_price__nQrit">$19.67</strong>
                    </div>
                  </div>
                </li>
                <li className="item">
                  <div role="button" tabindex="0" className="DivAsButtonView_div_as_button__jl7Xf PcWeverseShopArrivalItemView_arrival__brlxG PcWeverseShopArrivalItemView_-home__9Ox4o PcWeverseShopArrivalItemView_-dark__cbtG6">
                    <div className="PcWeverseShopArrivalItemView_image_wrapper__68vpb">
                      <img className="PcWeverseShopArrivalItemView_image__Kt6Sl" src="https://cdn-contents.weverseshop.io/public/shop/834f660785b97cb20901109defa59e2e.png" alt="" loading="lazy"></img>
                    </div>
                    <div className="PcWeverseShopArrivalItemView_label_wrapper__9vTcb">
                      <span className="PcWeverseShopArrivalItemView_label__FlsbE PcWeverseShopArrivalItemView_-only__FAIUl">Only</span>
                      <span className="PcWeverseShopArrivalItemView_label__FlsbE PcWeverseShopArrivalItemView_-exclusive__c-T6F">EXCLUSIVE</span>
                    </div>
                    <em className="PcWeverseShopArrivalItemView_product__gnn7H">INNER CIRCLE MEMBERSHIP KIT</em>
                    <div className="PcWeverseShopArrivalItemView_price_wrapper__05mXU">
                      <strong className="PcWeverseShopArrivalItemView_price__nQrit">$16.52</strong>
                    </div>
                  </div>
                </li>
                <li className="item">
                  <div role="button" tabindex="0" className="DivAsButtonView_div_as_button__jl7Xf PcWeverseShopArrivalItemView_arrival__brlxG PcWeverseShopArrivalItemView_-home__9Ox4o PcWeverseShopArrivalItemView_-dark__cbtG6">
                    <div className="PcWeverseShopArrivalItemView_image_wrapper__68vpb">
                      <img className="PcWeverseShopArrivalItemView_image__Kt6Sl" src="https://cdn-contents.weverseshop.io/public/shop/3f5f0c37fb88eb2f22a66c709b7ef054.png" alt="" loading="lazy"></img>
                    </div>
                    <div className="PcWeverseShopArrivalItemView_label_wrapper__9vTcb">
                      <span className="PcWeverseShopArrivalItemView_label__FlsbE PcWeverseShopArrivalItemView_-exclusive__c-T6F">EXCLUSIVE</span>
                    </div>
                    <em className="PcWeverseShopArrivalItemView_product__gnn7H">[YOURGREEN] WINNER RE-CYCLED DIY PEN POUCH</em>
                    <div className="PcWeverseShopArrivalItemView_price_wrapper__05mXU">
                      <strong className="PcWeverseShopArrivalItemView_price__nQrit">$28.33</strong>
                    </div>
                  </div>
                </li>
                <li className="item">
                  <div role="button" tabindex="0" className="DivAsButtonView_div_as_button__jl7Xf PcWeverseShopArrivalItemView_arrival__brlxG PcWeverseShopArrivalItemView_-home__9Ox4o PcWeverseShopArrivalItemView_-dark__cbtG6">
                    <div className="PcWeverseShopArrivalItemView_image_wrapper__68vpb">
                      <img className="PcWeverseShopArrivalItemView_image__Kt6Sl" src="https://cdn-contents.weverseshop.io/public/shop/d2725f5d8253e9bdbd0ad9e6bba521af.png" alt="" loading="lazy"></img>
                    </div>
                    <em className="PcWeverseShopArrivalItemView_product__gnn7H">単品[HOLIDAY](DIGIPACK ver.)</em>
                    <div className="PcWeverseShopArrivalItemView_price_wrapper__05mXU">
                      <strong className="PcWeverseShopArrivalItemView_price__nQrit">$11.61</strong>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="ArtistPediaOfficialRelatedLinks_pc_official_links__6nG6u">
              <div className="PcArtistPediaOfficialRelatedLinks_wrapper__rITTG">
                <a href="https://www.youtube.com/OfficialYGWINNER" className="PcArtistPediaProfileCarouselDetailView_link__gUg8q PcArtistPediaProfileCarouselDetailView_-YOUTUBE__ff+oa">
                  <span className="blind">YOUTUBE</span>
                </a>
                <a href="https://www.instagram.com/winnercity/" className="PcArtistPediaProfileCarouselDetailView_link__gUg8q PcArtistPediaProfileCarouselDetailView_-INSTAGRAM__qvztf">
                  <span className="blind">INSTAGRAM</span>
                </a>
                <a href="https://twitter.com/yginnercircle" className="PcArtistPediaProfileCarouselDetailView_link__gUg8q PcArtistPediaProfileCarouselDetailView_-X__CD8u-">
                  <span className="blind">X</span>
                </a>
                <a href="https://www.tiktok.com/@wn_tiktok" className="PcArtistPediaProfileCarouselDetailView_link__gUg8q PcArtistPediaProfileCarouselDetailView_-TIKTOK__GtmtR">
                  <span className="blind">TIKTOK</span>
                </a>
                <a href="https://www.ygfamily.com/ko/artists/winner/main" className="PcArtistPediaProfileCarouselDetailView_link__gUg8q PcArtistPediaProfileCarouselDetailView_-WEB__5VF3u">
                  <span className="blind">OFFICIAL_SITE</span>
                </a>
              </div>
            </div>
            <div className="ArtistPediaGoToCommunityButton_wrapper__9QHTw ArtistPediaGoToCommunityButton_-pc__VZ1mx" data-is-mobile="false">
              <a className="PcArtistPediaGoToCommunityButtonView_link__SrrYQ" href="/winner/feed">Go to community</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
