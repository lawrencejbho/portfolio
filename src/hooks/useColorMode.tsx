import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

export default function useColorMode() {
  const [colorMode, setColorMode] = useLocalStorage("color-mode", "light");

  // Grab the main element and add/remove dark class
  //*  type checking is because of Next.js giving hydration errors because window doesn't exist on server side

  useEffect(() => {
    const className = "dark";
    const bodyClasses =
      typeof window !== "undefined"
        ? window.document.getElementById("main").classList
        : null;

    if (colorMode === "dark") {
      bodyClasses.add(className);
    } else {
      bodyClasses.remove(className);
    }
  }, [colorMode]);

  return [colorMode, setColorMode];
}
