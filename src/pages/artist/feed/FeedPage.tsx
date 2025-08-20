import React from "react";
import { useParams } from "react-router-dom";

export default function FeedPage(): JSX.Element {
  const { artistName } = useParams();
  return (
    <main>
      <h1>Fan Feed</h1>
      <p>Fan posts for artist: <strong>{artistName}</strong></p>
    </main>
  );
}


