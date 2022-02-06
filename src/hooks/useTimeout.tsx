import { useEffect, useRef } from "react";

export const useTimeout = (callback: () => void) => {
  const savedCallback = useRef(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    const id = setTimeout(tick, 3000);
    return () => clearTimeout(id);
  }, []);
};
