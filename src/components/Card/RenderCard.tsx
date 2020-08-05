import React from "react";
import { Card } from "../Card/Card";
import { CardSize, CardType } from "./Card";
export function RenderCard() {
  return <Card cardType={CardType.Default}></Card>;
}
