import React from "react";
import { useParams } from "react-router-dom";

export default function MediaContPage(): JSX.Element {
  const { artistName } = useParams();
  return (
    <main>
      <h1>Media - Continue Watching</h1>
      <p>Continue watching for: <strong>{artistName}</strong></p>
    </main>
  );
}


