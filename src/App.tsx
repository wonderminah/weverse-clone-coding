import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArtistPediaPage from "./pages/artist-name/artistpedia/ArtistPediaPage";
import ArtistInfoModal from "./pages/artist-name/artistpedia/ArtistInfoModal";
import FeedPage from "./pages/artist-name/feed/FeedPage";
import FanPostModal from "./pages/artist-name/feed/FanPostModal";
import ArtistPage from "./pages/artist-name/artist/ArtistPage";
import ArtistPostModal from "./pages/artist-name/artist/ArtistPostModal";
import MomentPostPage from "./pages/artist-name/moment/MomentPostPage";
import ArtistProfilePage from "./pages/artist-name/profile/ArtistProfilePage";
import ArtistProfileMemberPage from "./pages/artist-name/profile/ArtistProfileMemberPage";
import DigitalMembershipModal from "./pages/artist-name/digitalmembership/DigitalMembershipModal";
import MediaAllPage from "./pages/artist-name/media/MediaAllPage";
import MediaContPage from "./pages/artist-name/media/MediaContPage";
import MediaNewPage from "./pages/artist-name/media/MediaNewPage";
import MediaRecommendPage from "./pages/artist-name/media/MediaRecommendPage";
import MediaMembershipPage from "./pages/artist-name/media/MediaMembershipPage";
import MediaDetailPage from "./pages/artist-name/media/MediaDetailPage";
import LiveIndexPage from "./pages/artist-name/live/LiveIndexPage";
import LiveDetailPage from "./pages/artist-name/live/LiveDetailPage";
import NoticePage from "./pages/artist-name/notice/NoticePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 홈 */}
        <Route path="/" element={<HomePage />} />

        {/* 아티스트 공통 */}
        <Route path=":artistName">
          <Route index element={<Navigate to="feed" replace />} />

          {/* Artistpedia */}
          <Route path="artistpedia" element={<ArtistPediaPage />} />
          <Route path="artistpedia/artistinfo" element={<ArtistInfoModal />} />

          {/* Fan */}
          <Route path="feed" element={<FeedPage />} />
          <Route path="fanpost/:fanPostId" element={<FanPostModal />} />

          {/* Artist */}
          <Route path="artist" element={<ArtistPage />} />
          <Route path="artist/:artistPostId" element={<ArtistPostModal />} />
          
          {/* 그 외 */}
          <Route path="moment/:momentId/post/:artistMomentId" element={<MomentPostPage />}/>
          <Route path="profile" element={<ArtistProfilePage />} />
          <Route path="profile/:memberId" element={<ArtistProfileMemberPage />}/>

          {/* Digital Membership */}
          <Route path="digitalmembership" element={<DigitalMembershipModal />}
          />

          {/* Media */}
          <Route path="media">
            <Route index element={<MediaAllPage />} />
            <Route path="cont" element={<MediaContPage />} />
            <Route path="new" element={<MediaNewPage />} />
            <Route path="recommend" element={<MediaRecommendPage />} />
            <Route path="membership" element={<MediaMembershipPage />} />
            <Route path="all" element={<MediaAllPage />} />
            <Route path=":mediaId" element={<MediaDetailPage />} />
          </Route>

          {/* Live */}
          <Route path="live">
            <Route index element={<LiveIndexPage />} />
            <Route path=":liveId" element={<LiveDetailPage />} />
          </Route>

          {/* Notice */}
          <Route path="notice/:noticeId" element={<NoticePage />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
