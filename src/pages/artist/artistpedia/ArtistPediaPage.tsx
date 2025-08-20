import React from "react";
import { useParams } from "react-router-dom";

export default function ArtistPediaPage(): JSX.Element {
  const { artistName } = useParams();
  return (
    <main>
      <h1>ArtistPedia</h1>
      <p>Overview for artist: <strong>{artistName}</strong></p>
    </main>
  );
}


