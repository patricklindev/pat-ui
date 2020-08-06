import React from 'react';
import { Card } from '../Card/Card';
import { CardSize, CardType } from './Card';
export function RenderCard() {
  return (
    <>
      <h2>Card Component</h2>
      <div>
        <h2>Size</h2>
        <Card cardSize={CardSize.Small}></Card>
        <Card cardType={CardType.Default}></Card>
        <Card cardSize={CardSize.Large}></Card>
      </div>

      <h2>Type</h2>
      <div>
        <Card cardType={CardType.Horizontal}></Card>
        <Card cardType={CardType.CircledImage}></Card>
        <Card cardType={CardType.NoImage}></Card>
      </div>
      <h2>ColorTheme</h2>
      <div>
        <Card cardType={CardType.Dark}></Card>
      </div>
    </>
  );
}
