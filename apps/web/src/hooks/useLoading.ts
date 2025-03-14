import { useState, useEffect } from "react";

export const useLoading = (initialState = true, delay = 2000) => {
  const [isLoading, setIsLoading] = useState(initialState);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isLoading;
};