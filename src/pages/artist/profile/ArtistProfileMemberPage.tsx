import React from "react";
import { useParams } from "react-router-dom";

export default function ArtistProfileMemberPage(): JSX.Element {
  const { artistName, memberId } = useParams();
  return (
    <main>
      <h1>Member Profile</h1>
      <p>Artist: <strong>{artistName}</strong></p>
      <p>Member ID: <strong>{memberId}</strong></p>
    </main>
  );
}


