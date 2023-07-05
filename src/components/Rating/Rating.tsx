import React, { useState, useRef } from "react";
import RatingItem from "./components/RatingItem";
import EmptyRatingItem from "./components/EmptyRatingItem";

export interface RatingProps {
  name: string;
  defaultValue?: number | null;
  value?: number | null;
  onChange?: (value: number | null) => void;
  size?: "small" | "medium" | "large";
  precision?: number;
  max?: number;
  disabled?: boolean;
  emptyLabelText?: string;
  getLabelText?: (value: number, max?: number) => string;
}

export default function Rating(props: RatingProps) {
  const {
    name, // name has to be unique for each rating
    defaultValue = null,
    value,
    onChange,
    size = "medium",
    precision = 1,
    max = 5,
    disabled = false,
    emptyLabelText = "empty star",
    getLabelText = (value: number, max = 5): string => {
      return `${value} out of ${max} star`;
    }
  } = props;

  // localRating is only for uncontrolled component
  const [localRating, setLocalRating] = useState<number | null>(defaultValue);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  // Only when empty Rating Item is focused, then this whole rating is focuses
  const [isFocused, setIsFocused] = useState<boolean>(false);

  // if controlled or not controlled, we use rating as our internal rating
  const isControlled = value !== undefined;
  const rating = (isControlled ? value : localRating) as number|null ;

  function handleRatingChange(newRating: number | null) {
    if (!isControlled) setLocalRating(newRating);
    else if (onChange) onChange(newRating); // make sure onChange is defined when controlling component
    setHoverRating(null);
  }

  function handleMouseMove(event: React.MouseEvent) {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const mouseOffset = event.clientX - containerRect.left;
    const iconWidth = containerRect.width / max;
    const rawHoverRating = mouseOffset / iconWidth;
    const factor = 1 / precision;
    const hoverRating = Math.ceil(rawHoverRating * factor) / factor;
    setHoverRating(Math.min(max, Math.max(precision, hoverRating)));
  }

  function handleMouseLeave() {
    setHoverRating(null);
  }

  const classNames = [
    "pui-rating",
    `pui-rating--size-${size}`,
    disabled ? "pui-rating--disabled" : "",
    isFocused ? "pui-rating--focused" : ""
  ];

  return (
    <span
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className={classNames.join(" ")}
      ref={containerRef}
      role='radiogroup'
    >
      <EmptyRatingItem
        name={name}
        hoverRating={hoverRating}
        disabled={disabled}
        rating={rating}
        handleRatingChange={handleRatingChange}
        emptyLabelText={emptyLabelText}
        setIsFocused={setIsFocused}
      />
      {new Array(max).fill(null).map((_, index) => (
        <RatingItem
          name={name}
          key={index + 1}
          disabled={disabled}
          hoverRating={hoverRating}
          rating={rating}
          handleRatingChange={handleRatingChange}
          start={index}
          max={max}
          precision={precision}
          getLabelText={getLabelText}
        />
      ))}
    </span>
  );
}
