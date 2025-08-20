import React from "react";
import { useParams } from "react-router-dom";

export default function MomentPostPage(): JSX.Element {
  const { artistName, momentId, artistMomentId } = useParams();
  return (
    <main>
      <h1>Moment Post</h1>
      <p>Artist: <strong>{artistName}</strong></p>
      <p>Moment ID: <strong>{momentId}</strong></p>
      <p>Post ID: <strong>{artistMomentId}</strong></p>
    </main>
  );
}
