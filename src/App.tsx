import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";
import Home from './components/Home';
import ArtistPedia from './components/ArtistPedia';
import MediaPost from './components/MediaPost';
import Header from './components/Header';

export default function App() {
  return (
    <div className="App">
      <div className="GlobalLayoutView_layout_container__kUnkV" data-is-responsive-mode="false">
        <div className="GlobalLayoutView_header__1UkFL">
          <Header />
        </div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:artistName/artistpedia" element={<ArtistPedia />} />
            <Route path="/:artistName/media/:postId" element={<MediaPost />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
