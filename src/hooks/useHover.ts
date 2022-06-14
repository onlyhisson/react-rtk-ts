import { useEffect, useRef } from "react";

export const useHover = (onHover: any) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof onHover !== "function") {
      return;
    }
    const element: any = ref.current;
    if (element) {
      element.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (element) {
        element.removeEventListener("mouseenter", onHover);
      }
    };
  }, [onHover]);

  return ref;
};