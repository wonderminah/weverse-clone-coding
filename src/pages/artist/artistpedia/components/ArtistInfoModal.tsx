import React from "react";
import { useParams } from "react-router-dom";

export default function ArtistInfoModal(): JSX.Element {
  const { artistName } = useParams();
  return (
    <section>
      <h1>Artist Info</h1>
      <p>Modal for artist: <strong>{artistName}</strong></p>
    </section>
  );
}


