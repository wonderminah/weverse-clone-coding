import React from "react";
import { useParams } from "react-router-dom";

export default function LiveDetailPage(): JSX.Element {
  const { artistName, liveId } = useParams();
  return (
    <main>
      <h1>Live - Detail</h1>
      <p>Artist: <strong>{artistName}</strong></p>
      <p>Live ID: <strong>{liveId}</strong></p>
    </main>
  );
}


