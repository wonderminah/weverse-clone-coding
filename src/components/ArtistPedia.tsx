import { useParams } from 'react-router-dom';
import "../index.css";

export default function ArtistPedia() {
  const { artistName } = useParams();

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
        <div className="artistpedia__container">
          <div className="artistpedia__content">
            <h1 className="artistpedia__title">
              {artistName} ArtistPedia
            </h1>
            <div className="artistpedia__info">
              <p>Welcome to {artistName}'s ArtistPedia page!</p>
              <p>This is where you can find detailed information about {artistName}.</p>
            </div>
            
            {/* 아티스트 정보 섹션 */}
            <div className="artistpedia__section">
              <h2>Artist Information</h2>
              <div className="artistpedia__details">
                <div className="artistpedia__detail-item">
                  <strong>Name:</strong> {artistName}
                </div>
                <div className="artistpedia__detail-item">
                  <strong>Category:</strong> K-Pop Artist
                </div>
                <div className="artistpedia__detail-item">
                  <strong>Status:</strong> Active
                </div>
              </div>
            </div>

            {/* 아티스트 갤러리 섹션 */}
            <div className="artistpedia__section">
              <h2>Gallery</h2>
              <div className="artistpedia__gallery">
                <div className="artistpedia__gallery-item">
                  <img 
                    src="https://phinf.wevpstatic.net/MjAyMjExMzBfMjQx/MDAxNjY5Nzk4NzgzODIw.MArshwx42VZAp1IRPzJlklUoYK8sSRcD0p-JijkW4qAg.vkEIVFSt3wZxFWRrRV36j2obE-YkzzQyqW4OGFNZ5WQg.PNG/58664962789720092493d5ab0-a12f-4f74-bb27-99eae698c467.png?type=f416_354"
                    alt={`${artistName} image 1`}
                    className="artistpedia__gallery-img"
                  />
                </div>
                <div className="artistpedia__gallery-item">
                  <img 
                    src="https://phinf.wevpstatic.net/MjAyNDAzMjFfMTI4/MDAxNzEwOTk2NjE4OTQ3.pXrfj-rgBTxmYg6iR5Lm5JklltCrryboW44AKayfTKQg.SiiGWfT6MEzcZC0huWXJicArWxkIkwzvWHbWixvKivUg.JPEG/43632476398883003e3740686-8110-4084-b943-fbf323114c1e.jpg?type=s86"
                    alt={`${artistName} image 2`}
                    className="artistpedia__gallery-img"
                  />
                </div>
              </div>
            </div>

            {/* 아티스트 소개 섹션 */}
            <div className="artistpedia__section">
              <h2>About {artistName}</h2>
              <p>
                {artistName} is a talented artist who has made significant contributions to the music industry. 
                Their unique style and dedication to their craft have earned them a loyal fanbase worldwide.
              </p>
              <p>
                Stay tuned for more updates about {artistName}'s latest projects and activities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
