import { useEffect } from "react";

const useScrollListener = (action: (event: any) => void) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", action, true);
    }
    return () => window.removeEventListener("scroll", action, true);
  }, []);
};

export default useScrollListener;
