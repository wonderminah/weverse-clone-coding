import "../index.css";
import { useState, useEffect, useRef, useCallback } from "react";
import communityData from "../data/communities.json";
import recommendCommunitiesData from "../data/recommend-communities.json";

// 커뮤니티 데이터 타입 정의
interface Community {
  communityId: number;
  communityName: string;
  communityAlias: string;
  urlPath: string;
  logoImage: string;
  homeHeaderImage: string;
  memberCount: number;
  lastArtistContentPublishedAt: number;
}

// 이미지 로딩 상태를 관리하는 컴포넌트
function OptimizedImage({ 
  src, 
  alt, 
  className, 
  width, 
  height,
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA4IiBoZWlnaHQ9IjE3NyIgdmlld0JveD0iMCAwIDIwOCAxNzciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDgiIGhlaWdodD0iMTc3IiBmaWxsPSIjR0ZGRkZGIi8+Cjwvc3ZnPgo="
}: { 
  src: string; 
  alt: string; 
  className: string; 
  width: number; 
  height: number;
  placeholder?: string;
}) {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };
    
    img.onerror = () => {
      setError(true);
      setIsLoading(false);
    };
  }, [src]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`${className} ${isLoading ? 'image-loading' : ''} ${error ? 'image-error' : ''}`}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
    />
  );
}

export default function Home() {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [recommendCommunities, setRecommendCommunities] = useState<Community[]>([]);
  const [communitiesLoading, setCommunitiesLoading] = useState(true);
  const [communitiesPage, setCommunitiesPage] = useState(1);
  const [communitiesHasMore, setCommunitiesHasMore] = useState(true);
  const [communitiesLoadingMore, setCommunitiesLoadingMore] = useState(false);
  const observer = useRef<IntersectionObserver>();
  const itemsPerPage = 12; // 한 번에 로드할 아이템 수

  // 추가 데이터 로드 함수
  const loadMoreCommunitiesData = useCallback(() => {
    if (communitiesLoadingMore || !communitiesHasMore) return;
    
    setCommunitiesLoadingMore(true);
    
    // 실제 API에서는 여기서 서버에 요청
    setTimeout(() => {
      const startIndex = (communitiesPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const newCommunities = communityData.slice(startIndex, endIndex) as Community[];
      
      if (newCommunities.length > 0) {
        setCommunities(prev => [...prev, ...newCommunities]);
        setCommunitiesPage(prev => prev + 1);
      } else {
        setCommunitiesHasMore(false);
      }
      
      setCommunitiesLoadingMore(false);
    }, 500); // 실제 API 호출 시에는 이 setTimeout 제거
  }, [communitiesPage, communitiesLoadingMore, communitiesHasMore]);

  // 마지막 요소를 관찰하는 ref
  const lastElementRef = useCallback((node: HTMLLIElement) => {
    if (communitiesLoadingMore) return;
    
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && communitiesHasMore) {
        loadMoreCommunitiesData();
      }
    });
    
    if (node) observer.current.observe(node);
  }, [communitiesLoadingMore, communitiesHasMore, loadMoreCommunitiesData]);

  useEffect(() => {
    // 초기 데이터 로드
    try {
      const initialCommunities = communityData.slice(0, itemsPerPage);
      setCommunities(initialCommunities as Community[]);
      setRecommendCommunities(recommendCommunitiesData as Community[]);
      setCommunitiesLoading(false);
      setCommunitiesHasMore(communityData.length > itemsPerPage);
    } catch (error) {
      console.error("커뮤니티 데이터를 불러오는 중 오류가 발생했습니다:", error);
      setCommunitiesLoading(false);
    }
  }, []);

  if (communitiesLoading) {
    return <div className="loading">커뮤니티를 불러오는 중...</div>;
  }

  return (
    <>
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
                                         {recommendCommunities.map((community, index) => (
                       <li className="home__dm-item" key={community.communityId}>
                         <button className="home__dm-item-wrap" type="button">
                           <span className="home__dm-item-img">
                             <img src={community.logoImage} className="DirectMessageWeverseHomeView_image__OXMed" width="64" height="64" alt={community.communityName} />
                           </span>
                           <span className="home__dm-item-name">
                             <a href={`/${community.urlPath}/artistpedia`} style={{ color: 'inherit', textDecoration: 'none' }}>
                               {community.communityName}
                             </a>
                           </span>
                         </button>
                       </li>
                     ))}
                     <li className="home__dm-item">
                       <button className="DirectMessageWeverseHomeResetButtonView_reset__E+KmU" type="button">
                         <span className="blind">Reset</span>
                       </button>
                     </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="home__community-slot">
                            <div className="home__community-area">
                <div className="home__inner">
                  <h2 className="home__community-title">Looking for new artists?</h2>
                  <div className="home__community-body">
                    <ul className="home__community-list">
                       {communities.map((community, index) => (
                         <li
                           key={community.communityId}
                           className="home__community-item"
                           ref={index === communities.length - 1 ? lastElementRef : undefined}
                         >
                           <a className="home__community-link" href={`/${community.urlPath}/artistpedia`}>
                             <div className="home__community-cover-wrap">
                               <OptimizedImage
                                 src={community.homeHeaderImage}
                                 alt={community.communityName}
                                 width={208}
                                 height={177}
                                 className="HomeCommunityListSlotView_cover_img__a2krk"
                               />
                             </div>
                             <div className="home__community-thumb-wrap">
                               <div className="home__community-thumb-area">
                                 <OptimizedImage
                                   src={community.logoImage}
                                   alt={community.communityName}
                                   width={43}
                                   height={43}
                                   className="home__community-thumb-img"
                                 />
                               </div>
                             </div>
                             <div className="home__community-text-wrap">
                               <div>
                                 <strong className="home__community-name">
                                   {community.communityName}
                                 </strong>
                               </div>
                             </div>
                           </a>
                         </li>
                       ))}
                       {communitiesLoadingMore && (
                         <li className="home__community-item home__loading-item">
                           <div className="home__loading">
                             <p>더 많은 커뮤니티를 불러오는 중...</p>
                           </div>
                         </li>
                       )}
                       
                       {!communitiesHasMore && communities.length > 0 && (
                         <li className="home__community-item home__no-more-item">
                           <div className="home__no-more">
                             <p>모든 커뮤니티를 불러왔습니다.</p>
                           </div>
                         </li>
                       )}
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
     </>
   );
 }