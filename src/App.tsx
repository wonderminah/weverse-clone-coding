import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";

function Stub({ name }: { name: string }) {
  const { artistName, fanPostId, artistPostId, momentId, artistMomentId, memberId } = useParams(); // URL에서 아티스트명 추출
  console.log(`${name} rendered for artist: ${artistName}`);
  return (
    <div>
      <h1>
        {name} 
      </h1>
      <h2>(artistName: {artistName})</h2>
      <h2>(fanPostId: {fanPostId})</h2>
      <h2>(artistPostId: {artistPostId})</h2>
      <h2>(momentId: {momentId})</h2>
      <h2>(artistMomentId: {artistMomentId})</h2>
      <h2>(memberId: {memberId})</h2>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 홈 */}
        <Route path="/" element={<h1>Home</h1>} />

        {/* 아티스트 공통 */}
        <Route path=":artistName">
          <Route index element={<Navigate to="feed" replace />} />

          {/* Artistpedia */}
          <Route path="artistpedia" element={<Stub name="ArtistPediaPage" />} />
          <Route path="artistpedia/artistinfo" element={<Stub name="ArtistInfoModal" />} />

          {/* Fan */}
          <Route path="feed" element={<Stub name="FeedPage" />} />
          <Route path="fanpost/:fanPostId" element={<Stub name="FanPostModal" />} />

          {/* Artist */}
          <Route path="artist" element={<Stub name="ArtistPage" />} />
          <Route path="artist/:artistPostId" element={<Stub name="ArtistPostModal" />} />
          
          {/* 그 외 */}
          <Route path="moment/:momentId/post/:artistMomentId" element={<Stub name="MomentPostPage" />}/>
          <Route path="profile" element={<Stub name="ArtistProfilePage" />} />
          <Route path="profile/:memberId" element={<Stub name="ArtistProfileMemberPage" />}/>

          {/* Digital Membership */}
          <Route path="digitalmembership" element={<Stub name="DigitalMembershipModal" />}
          />

          {/* Media */}
          <Route path="media">
            <Route index element={<Stub name="MediaAllPage" />} />
            <Route path="cont" element={<Stub name="MediaContPage" />} />
            <Route path="new" element={<Stub name="MediaNewPage" />} />
            <Route path="recommend" element={<Stub name="MediaRecommendPage" />} />
            <Route path="membership" element={<Stub name="MediaMembershipPage" />} />
            <Route path="all" element={<Stub name="MediaAllPage" />} />
            <Route path=":mediaId" element={<Stub name="MediaDetailPage" />} />
          </Route>

          {/* Live */}
          <Route path="live">
            <Route index element={<Stub name="LiveIndexPage" />} />
            <Route path=":liveId" element={<Stub name="LiveDetailPage" />} />
          </Route>

          {/* Notice */}
          <Route path="notice/:noticeId" element={<Stub name="NoticePage" />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
