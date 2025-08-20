import React from "react";
import { useParams } from "react-router-dom";

export default function ArtistPostModal(): JSX.Element {
  const { artistName, artistPostId } = useParams();
  return (
    <section>
      <h1>Artist Post</h1>
      <p>Artist: <strong>{artistName}</strong></p>
      <p>Post ID: <strong>{artistPostId}</strong></p>
    </section>
  );
}


