import React, { useState } from "react";
import Rating from "./components/Rating";

const App = () => {
  const [starValue, setStarValue] = useState<number | null>(null);
  const [disable, setDisable] = useState<boolean>(false);

  function handleChange(newStarValue: number | null) {
    setStarValue(newStarValue);
  }

  function handleSelect(event: React.ChangeEvent<HTMLInputElement>) {
    setStarValue(+event.target.value ?? null);
  }

  function toggleDisable() {
    setDisable(!disable);
  }

  return (
    <>
      <Rating
        max={10}
        precision={0.25}
        size="large"
        value={starValue}
        onChange={handleChange}
        disabled={disable}
      />
      <label htmlFor="star-selector">Choose a star value:</label>
      <input
        type="number"
        id="star-selector"
        value={starValue ?? 0}
        onChange={handleSelect}
      />
      <button onClick={toggleDisable}>
        {disable ? "TO ABLE" : "TO DISABLE"}
      </button>
    </>
  );
};

export default App;
