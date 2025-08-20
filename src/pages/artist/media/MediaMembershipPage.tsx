import React from "react";
import { useParams } from "react-router-dom";

export default function MediaMembershipPage(): JSX.Element {
  const { artistName } = useParams();
  return (
    <main>
      <h1>Media - Membership</h1>
      <p>Membership media for: <strong>{artistName}</strong></p>
    </main>
  );
}


