import { useState } from "react";

export function useAuth() {
  const [state, setState] = useState(null);
  return { state, setState };
};