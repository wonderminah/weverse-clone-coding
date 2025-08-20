import React from "react";
import { useParams } from "react-router-dom";

export default function ArtistPage(): JSX.Element {
  const { artistName } = useParams();
  return (
    <main>
      <h1>Artist</h1>
      <p>Artist posts for: <strong>{artistName}</strong></p>
    </main>
  );
}


