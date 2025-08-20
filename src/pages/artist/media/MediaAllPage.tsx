import React from "react";
import { useParams } from "react-router-dom";

export default function MediaAllPage(): JSX.Element {
  const { artistName } = useParams();
  return (
    <main>
      <h1>Media - All</h1>
      <p>All media for: <strong>{artistName}</strong></p>
    </main>
  );
}


