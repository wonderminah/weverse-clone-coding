import React from "react";
import { useParams } from "react-router-dom";

export default function LiveIndexPage(): JSX.Element {
  const { artistName } = useParams();
  return (
    <main>
      <h1>Live</h1>
      <p>Live list for: <strong>{artistName}</strong></p>
    </main>
  );
}


