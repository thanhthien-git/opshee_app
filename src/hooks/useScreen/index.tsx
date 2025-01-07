import { useState, useEffect, useCallback } from "react";

const size = () => (typeof window !== "undefined" ? window.innerWidth : 0);
export default function useScreen() {
  const [screenSize, setScreenSize] = useState(size);

  const handleResize = useCallback(() => {
    setScreenSize(window.innerWidth);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
}
