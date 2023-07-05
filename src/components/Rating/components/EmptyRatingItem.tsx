import React, { Dispatch, useEffect, useState } from "react";

export interface EmptyRatingItemProps {
  name: string;
  hoverRating: number | null;
  disabled: boolean;
  rating: number | null;
  emptyLabelText: string;
  handleRatingChange: (newRating: number | null) => void;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EmptyRatingItem(props: EmptyRatingItemProps) {
  const {
    name,
    hoverRating,
    disabled,
    rating,
    handleRatingChange,
    emptyLabelText,
    setIsFocused
  } = props;

  useEffect(() => {
    if (hoverRating) setIsFocused(false);
  }, [hoverRating, setIsFocused]);

  function handleRadioChange(event: React.ChangeEvent<HTMLInputElement>) {
    // event.stopPropagation();

    if (event.target.value === "null") {
      handleRatingChange(null);
    }
  }

  function handleRadioFocus() {
    console.log("focus hidden input");
    setIsFocused(true);
  }

  function handleRadioBlur() {
    setIsFocused(false);
  }

  const classNames = ["pui-rating__item", "pui-rating__item--visually-hidden"];

  return (
    <span className={classNames.join(" ")}>
      <label>
        <input
          disabled={disabled}
          name={name}
          type="radio"
          value="null"
          checked={rating === null}
          onChange={handleRadioChange}
          onFocus={handleRadioFocus}
          onBlur={handleRadioBlur}
        />
        <span className="pui-rating__label-text">{emptyLabelText}</span>
      </label>
    </span>
  );
}
