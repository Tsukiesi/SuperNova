import { useEffect } from "react";
import type { RefObject } from "react";

export function closeElement(
  isActive: boolean,
  elementRef: RefObject<HTMLElement | null>,
  id: string,
  closeCallback: () => void,
  isCloseProhibited?: boolean,
) {
  useEffect(() => {
    if (!elementRef.current || !isActive) return;
    if (isCloseProhibited) return;
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target) return;
      if (target.id === id) return;
      if (!elementRef.current?.contains(target) && elementRef.current)
        closeCallback();
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeCallback();
      }
    };

    if (isActive) {
      document.addEventListener("click", handleClick);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isActive, isCloseProhibited]);
}
