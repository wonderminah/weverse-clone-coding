import React from "react";
import { useParams } from "react-router-dom";

export default function MediaRecommendPage(): JSX.Element {
  const { artistName } = useParams();
  return (
    <main>
      <h1>Media - Recommended</h1>
      <p>Recommended media for: <strong>{artistName}</strong></p>
    </main>
  );
}


