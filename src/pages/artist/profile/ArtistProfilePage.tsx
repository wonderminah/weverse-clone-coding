import React from "react";
import { useParams } from "react-router-dom";

export default function ArtistProfilePage(): JSX.Element {
  const { artistName } = useParams();
  return (
    <main>
      <h1>Artist Profile</h1>
      <p>Profile overview for: <strong>{artistName}</strong></p>
    </main>
  );
}


