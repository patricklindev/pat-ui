import React, { useEffect, useState } from "react";
import StarIcon from "./StarIcon";
import StarBorderIcon from "./StarBorderIcon";

export interface RatingItemProps {
  disabled: boolean;
  hoverRating: number | null;
  rating: number | null;
  handleRatingChange: (value: number | null) => void;
  start: number;
  max: number;
  precision: number;
  getLabelText: (value: number, max?: number) => string;
}

// Control the radio button inside this rating item
export default function RatingItem(props: RatingItemProps) {
  const {
    disabled,
    hoverRating,
    rating,
    handleRatingChange,
    start,
    max,
    precision,
    getLabelText
  } = props;

  const [focused, setFocused] = useState<boolean>(false);
  const iconCount = Math.max(1, 1 / precision);
  const classNames = [
    "pui-rating__item",
    hoverRating && hoverRating > start && hoverRating <= start + 1
      ? "pui-rating__item--hover"
      : "",
    focused ? "pui-rating__item--focused" : ""
  ];

  useEffect(() => {
    if (hoverRating) setFocused(false);
  }, [hoverRating]);

  return (
    <span className={classNames.join(" ")}>
      {new Array(iconCount).fill(null).map((_, index) => {
        const value = start + precision * (index + 1);
        const labelText = getLabelText(value, max);

        // if we have hoverRating, then render the hoverRating
        const viewRating = hoverRating ?? rating ?? 0;
        // This logic is a little complicated, comment later
        const width =
          viewRating === value
            ? precision * (index + 1) * 100
            : viewRating > value && value === start + 1
            ? 100
            : 0;

        const handleRadioChange = (
          event: React.ChangeEvent<HTMLInputElement>
        ) => {
          // console.log("onChange Fired");
          if (Number(event.target.value) === value) {
            handleRatingChange(value);
          }
        };

        // this is only for
        const handleRadioClick = (
          event: React.MouseEvent<HTMLInputElement>
        ) => {
          // console.log("onclick fired");
          event.preventDefault();

          const target = event.target as HTMLInputElement;

          // if value change, then let onChange handle
          if (Number(target.value) === rating) {
            handleRatingChange(null);
          }
        };

        const handleRadioFocus = () => {
          if (hoverRating === null) {
            setFocused(true);
          }
        };

        const handleRadioBlur = () => {
          setFocused(false);
        };

        const labelStyle: React.CSSProperties = {
          position: "absolute",
          overflow: "hidden",
          width: `${width}%`
        };

        return (
          <label key={value} style={labelStyle}>
            <input
              disabled={disabled}
              className="pui-rating__radio-button"
              name="pui-rating"
              type="radio"
              value={value}
              checked={rating === value}
              onChange={handleRadioChange}
              onClick={handleRadioClick}
              onFocus={handleRadioFocus}
              onBlur={handleRadioBlur}
            />
            <StarIcon color="rgb(250,175,0)" />
            <span className="pui-rating__label-text">{labelText}</span>
          </label>
        );
      })}
      <StarBorderIcon color="grey" />
    </span>
  );
}
