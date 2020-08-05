import React from "react";
import { Card } from "../Card/Card";
import { CardSize, CardType } from "./Card";
export function RenderCard() {
  return (
    <>
      <h2>Card Component</h2>
      <h2>Default</h2>
      <Card cardType={CardType.Default}></Card>
      <h2>Horizontal</h2>
      <Card cardType={CardType.Horizontal}></Card>
      <h2>CircledImage</h2>
      <Card cardType={CardType.CircledImage}></Card>
      <h2>NoImage</h2>
      <Card cardType={CardType.NoImage}></Card>
      <h2>Dark</h2>
      <Card cardType={CardType.Dark}></Card>
    </>
  );
}
