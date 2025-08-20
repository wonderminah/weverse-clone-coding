import React from "react";
import { useParams } from "react-router-dom";

export default function NoticePage(): JSX.Element {
  const { artistName, noticeId } = useParams();
  return (
    <main>
      <h1>Notice</h1>
      <p>Artist: <strong>{artistName}</strong></p>
      <p>Notice ID: <strong>{noticeId}</strong></p>
    </main>
  );
}
