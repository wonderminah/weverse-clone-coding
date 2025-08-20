import React from "react";
import { useParams } from "react-router-dom";

export default function DigitalMembershipModal(): JSX.Element {
  const { artistName } = useParams();
  return (
    <section>
      <h1>Digital Membership</h1>
      <p>Join membership for: <strong>{artistName}</strong></p>
    </section>
  );
}
