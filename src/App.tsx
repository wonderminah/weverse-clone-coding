import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";
import Home from './components/Home';
import ArtistPedia from './components/ArtistPedia';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:artistName/artistpedia" element={<ArtistPedia />} />
      </Routes>
    </Router>
  );
}
