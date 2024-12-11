import { useState, useEffect } from "react";

const size = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth;
  }
  return 0;
};
export default function useScreen() {
  const [screenSize, setScreenSize] = useState(size);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
  }, []);

  return screenSize;
}
