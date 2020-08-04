import React from "react";
import { classNames } from "../../utils/classNames";

export enum CardSize {
  Large = "lg",
  Small = "sm",
}
export enum CardLayout {
  Vertical = "vertical",
  Horizontal = "horizontal",
}
export enum CardImageType {
  Default = "default",
  CircledImage = "circledImage",
  NoImage = "noImage",
}

export enum CardTheme {
  Light = "light",
  Dark = "dark",
}

export interface IButtonProps {
  className?: string;
  cardSize?: CardSize;
  cardLayout?: CardLayout;
  children?: React.ReactNode;
  cardImageType?: CardImageType;
}

export const Card = () => {
  return (
    <div className="card">
      <img className="card-img-top" src="https://via.placeholder.com/150" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
