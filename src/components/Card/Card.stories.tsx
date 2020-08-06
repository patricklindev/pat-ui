import React from "react";
import { action } from "@storybook/addon-actions";
import Card, { CardType, CardSize } from "./Card";

export default {
  title: "Card",
  component: Card,
};

export const DefaultCard = () => (
  <Card onClick={action("Default Button clicked")} cardType={CardType.Default}>
    Default Card
  </Card>
);
export const DiffSizeCard = () => (
  <div>
    <Card onClick={action("Default Button clicked")} cardSize={CardSize.Small}>
      Small Card
    </Card>
    <Card cardSize={CardSize.Large}>Large Card</Card>
  </div>
);
export const DiffTypeCard = () => (
  <div>
    <Card cardType={CardType.Horizontal}>Horizontal Card</Card>
    <Card cardType={CardType.CircledImage}>Circled Image Card</Card>
    <Card cardType={CardType.NoImage}>No Image Card</Card>
  </div>
);
export const DiffThemeCard = () => (
  <div>
    <Card cardType={CardType.Dark}>No Image Card</Card>
  </div>
);
