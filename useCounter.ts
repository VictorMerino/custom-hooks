import { useState } from "react";

export const useCounter = ({
  initialValue = 10,
  minValue = 0,
  maxValue = 20,
  step = 1,
}) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = step) => {
    setCounter((current) => {
      if (current + value >= maxValue) return maxValue;
      return current + value;
    });
  };

  const decrement = (value = step) => {
    setCounter((current) => {
      if (current - value <= minValue) return minValue;
      return current - value;
    });
  };

  const reset = () => {
    setCounter(initialValue);
  };
  return { counter, increment, decrement, reset, step };
};
