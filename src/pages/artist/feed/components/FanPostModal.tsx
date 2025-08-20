import React from "react";
import { useParams } from "react-router-dom";

export default function FanPostModal(): JSX.Element {
  const { artistName, fanPostId } = useParams();
  return (
    <section>
      <h1>Fan Post</h1>
      <p>Artist: <strong>{artistName}</strong></p>
      <p>Post ID: <strong>{fanPostId}</strong></p>
    </section>
  );
}


