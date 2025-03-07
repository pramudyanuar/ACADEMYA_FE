import { useState } from "react";

export function useCore() {
  const [state, setState] = useState(null);
  return { state, setState };
};