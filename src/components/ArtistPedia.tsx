import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "../index.css";
import "./ArtistPedia.css";
import artistpediaData from "../data/artistpedia.json";

// ArtistPedia 데이터 타입 정의
interface ArtistProfile {
  memberId: string;
  artistOfficialProfile: {
    officialImageUrl: string;
    officialName: string;
    birthday: {
      dateString: string;
      bday: boolean;
    };
  };
  profileSpace: string[];
  profileSpaceStatus: string;
}

interface LiveItem {
  title: string;
  publishedAt: number;
  postId: string;
  summary: {
    thumbnails: Array<{
      url: string;
      playTime: number;
    }>;
  };
}

interface MediaItem {
  title: string;
  publishedAt: number;
  postId: string;
  summary: {
    thumbnails: Array<{
      url: string;
      width: number;
      height: number;
    }>;
  };
}

interface MerchItem {
  saleId: number;
  name: string;
  thumbnailImageUrl: string;
  icons: string[];
  currencyCode: string;
  originalPrice: number;
  salePrice: number;
  status: string;
  saleDetailWebLink: string;
}

interface ArtistPediaData {
  basicInfo: {
    shareUrl: string;
    coverInfo: {
      type: string;
      data: {
        width: number;
        height: number;
        url: string;
      };
    };
    logoImage: {
      width: number;
      height: number;
      url: string;
    };
    community: {
      communityId: number;
      communityName: string;
      homeHeaderImage: string;
      logoImage: string;
      urlPath: string;
      memberCount: number;
    };
    hasArtistInfo: boolean;
    artistProfiles: ArtistProfile[];
    siteInfos: Array<{
      site: string;
      appLink: {
        type: string;
        url: string;
      };
      webLink: {
        type: string;
        url: string;
      };
    }>;
  };
  cards: Array<{
    viewType: string;
    title: string;
    data: {
      items?: LiveItem[] | MediaItem[] | MerchItem[];
      shopUrl?: string;
    };
  }>;
}

export default function ArtistPedia() {
  const { artistName } = useParams();
  const [artistData, setArtistData] = useState<ArtistPediaData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // artistpedia.json 데이터 로드
    try {
      setArtistData(artistpediaData as ArtistPediaData);
      setLoading(false);
    } catch (error) {
      console.error("아티스트 데이터를 불러오는 중 오류가 발생했습니다:", error);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div className="loading">아티스트 정보를 불러오는 중...</div>;
  }

  if (!artistData) {
    return <div className="error">아티스트 정보를 찾을 수 없습니다.</div>;
  }

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
                    <img src={artistData.basicInfo.coverInfo.data.url} className="PcArtistPediaJumboImageView_image__fLqoW" width="1100" height="1280" alt={artistData.basicInfo.community.communityName}>
                    </img>
                  </div>
                </div>
              </div>
              <div className="PcArtistPediaJumboIntro_description__+Aprn">
                <div>
                  <img src={artistData.basicInfo.logoImage.url} height="74" alt={artistData.basicInfo.community.communityName}>
                  </img>
                </div>
              </div>
            </div>
            <div className="ArtistPediaMemberProfiles_pc_profile__f6POE">
              <h3 className="PcArtistPediaTitleView_title__5VRG9">Profile</h3>
              <div className="PcArtistPediaMemberProfiles_flicking_wrap__XJDDY">
                <div className="flicking-viewport PcArtistPediaMemberProfiles_flicking__aUn+I" style={{ userSelect: 'none', touchAction: 'pan-y;' }}>
                  <div className="flicking-camera" style={{ transform: 'translate(-10px)' }}>
                    {artistData.basicInfo.artistProfiles.map((profile) => (
                      <a 
                        key={profile.memberId}
                        className="PcArtistPediaMemberProfiles_flicking_item__IFEfV" 
                        href={`/${artistData.basicInfo.community.urlPath}/profile/${profile.memberId}`}
                      >
                        <div style={{ aspectRatio: 'auto 120 / 120', overflow: 'hidden', borderRadius: '30px' }}>
                          <img 
                            src={profile.artistOfficialProfile.officialImageUrl} 
                            className="ArtistPediaProfileImageView_image__8aUhn" 
                            width="120" 
                            height="120" 
                            alt={profile.artistOfficialProfile.officialName}
                          />
                        </div>
                        <div className="PcArtistPediaMemberProfilesView_artist__AnKzo">
                          {profile.artistOfficialProfile.officialName}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="ArtistPediaFanPickedLive_pc_fan_picked__Yj05g">
              <h3 className="PcArtistPediaTitleView_title__5VRG9">LIVE</h3>
              <ul className="PcArtistPediaFanPickedLive_live_list__nwpzt">
                {artistData.cards
                  .find(card => card.title === "LIVE")
                  ?.data.items.map((liveItem) => {
                    const date = new Date(liveItem.publishedAt);
                    const formattedDate = `${String(date.getMonth() + 1).padStart(2, '0')}. ${String(date.getDate()).padStart(2, '0')}. ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
                    const playTime = liveItem.summary.thumbnails[0]?.playTime || 0;
                    const minutes = Math.floor(playTime / 60);
                    const seconds = playTime % 60;
                    const formattedTime = `${minutes}:${String(seconds).padStart(2, '0')}`;
                    
                    return (
                      <li key={liveItem.postId}>
                        <a className="PcArtistPediaFanPickedLiveItemView_thumbnail_link__exZJV" href={`/${artistData.basicInfo.community.urlPath}/media/${liveItem.postId}`}>
                          <div className="PcArtistPediaFanPickedLiveItemView_thumbnail_wrap__cKKNC">
                            <div style={{ aspectRatio: 'auto 351 / 220' }}>
                              <img 
                                src={liveItem.summary.thumbnails[0]?.url} 
                                className="PcArtistPediaFanPickedLiveItemView_thumbnail__VpXIq" 
                                width="351" 
                                height="220" 
                                alt={liveItem.title}
                              />
                            </div>
                            <em className="PcArtistPediaFanPickedLiveItemView_play_time__Pchic">{formattedTime}</em>
                          </div>
                          <div className="PcArtistPediaFanPickedLiveItemView_date__TbrnU">{formattedDate}</div>
                          <strong className="PcArtistPediaFanPickedLiveItemView_title__bFyLq">{liveItem.title}</strong>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="ArtistPediaMediaOfMonth_pc_media_of_month__sMeRA">
              <h3 className="PcArtistPediaTitleView_title__5VRG9">Media</h3>
              <ul className="PcArtistPediaMediaOfMonth_list__B9LNZ">
                {artistData.cards
                  .find(card => card.title === "Media")
                  ?.data.items.map((mediaItem: MediaItem) => {
                    const date = new Date(mediaItem.publishedAt);
                    const formattedDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
                    
                    return (
                      <li key={mediaItem.postId} className="PcArtistPediaMediaOfMonth_item__p5R7Y">
                        <a href={`/${artistData.basicInfo.community.urlPath}/media/${mediaItem.postId}`} className="PcArtistPediaMediaOfMonthItemView_container__26enP">
                          <div className="PcArtistPediaMediaOfMonthItemView_preview_area__GIrG7">
                            <div style={{ aspectRatio: 'auto 260 / 146' }}>
                              <img 
                                src={mediaItem.summary.thumbnails[0]?.url} 
                                className="PcArtistPediaMediaOfMonthItemView_preview__UC+OZ" 
                                width="260" 
                                height="146" 
                                alt={mediaItem.title}
                              />
                            </div>
                          </div>
                          <strong className="PcArtistPediaMediaOfMonthItemView_title__hNMjk">{mediaItem.title}</strong>
                          <div className="PcArtistPediaMediaOfMonthItemView_date__BirsF">{formattedDate}</div>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="ArtistPediaWeverseShopArrivals_pc_new_arrivals__MrrPG">
              <div className="PcArtistPediaWeverseShopArrivals_title_wrap__H0VU-">
                <h3 className="PcArtistPediaTitleView_title__5VRG9">Merch</h3>
                <button type="button" className="PcArtistPediaWeverseShopArrivals_shop__mEZsR">Artist Shop</button>
              </div>
              <ul className="PcArtistPediaWeverseShopArrivals_list__b24tr">
                {artistData.cards
                  .find(card => card.title === "Merch")
                  ?.data.items?.map((merchItem: MerchItem) => {
                    return (
                      <li key={merchItem.saleId} className="item">
                        <div role="button" tabIndex={0} className="DivAsButtonView_div_as_button__jl7Xf PcWeverseShopArrivalItemView_arrival__brlxG PcWeverseShopArrivalItemView_-home__9Ox4o PcWeverseShopArrivalItemView_-dark__cbtG6">
                          <div className="PcWeverseShopArrivalItemView_image_wrapper__68vpb">
                            <img 
                              className="PcWeverseShopArrivalItemView_image__Kt6Sl" 
                              src={merchItem.thumbnailImageUrl} 
                              alt={merchItem.name} 
                              loading="lazy"
                            />
                          </div>
                          {merchItem.icons.length > 0 && (
                            <div className="PcWeverseShopArrivalItemView_label_wrapper__9vTcb">
                              {merchItem.icons.includes("ONLY") && (
                                <span className="PcWeverseShopArrivalItemView_label__FlsbE PcWeverseShopArrivalItemView_-only__FAIUl">Only</span>
                              )}
                              {merchItem.icons.includes("MEMBERSHIP_ONLY") && (
                                <span className="PcWeverseShopArrivalItemView_label__FlsbE PcWeverseShopArrivalItemView_-exclusive__c-T6F">EXCLUSIVE</span>
                              )}
                            </div>
                          )}
                          <em className="PcWeverseShopArrivalItemView_product__gnn7H">{merchItem.name}</em>
                          <div className="PcWeverseShopArrivalItemView_price_wrapper__05mXU">
                            <strong className="PcWeverseShopArrivalItemView_price__nQrit">${merchItem.salePrice}</strong>
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="ArtistPediaOfficialRelatedLinks_pc_official_links__6nG6u">
              <div className="PcArtistPediaOfficialRelatedLinks_wrapper__rITTG">
                {artistData.basicInfo.siteInfos.map((siteInfo) => (
                  <a 
                    key={siteInfo.site}
                    href={siteInfo.webLink.url} 
                    className={`PcArtistPediaProfileCarouselDetailView_link__gUg8q PcArtistPediaProfileCarouselDetailView_-${siteInfo.site}__ff+oa`}
                  >
                    <span className="blind">{siteInfo.site}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="ArtistPediaGoToCommunityButton_wrapper__9QHTw ArtistPediaGoToCommunityButton_-pc__VZ1mx" data-is-mobile="false">
              <a className="PcArtistPediaGoToCommunityButtonView_link__SrrYQ" href={`/${artistData.basicInfo.community.urlPath}/feed`}>
                Go to community
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
