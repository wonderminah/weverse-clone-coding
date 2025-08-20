import React from "react";
import { useParams } from "react-router-dom";

export default function MediaNewPage(): JSX.Element {
  const { artistName } = useParams();
  return (
    <main>
      <h1>Media - Latest</h1>
      <p>Latest media for: <strong>{artistName}</strong></p>
    </main>
  );
}


