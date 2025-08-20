import React from "react";
import { useParams } from "react-router-dom";

export default function MediaDetailPage(): JSX.Element {
  const { artistName, mediaId } = useParams();
  return (
    <main>
      <h1>Media - Detail</h1>
      <p>Artist: <strong>{artistName}</strong></p>
      <p>Media ID: <strong>{mediaId}</strong></p>
    </main>
  );
}


