import {useEffect, useState} from "../web_modules/react.js";
export function useHistoryState() {
  const [state, setState] = useState(history.state);
  const onPopstate = () => setState(history.state);
  useEffect(() => {
    addEventListener("popstate", onPopstate);
    return () => removeEventListener("popstate", onPopstate);
  });
  return [state, (state2, hash) => {
    history.pushState(state2, "", hash);
    onPopstate();
  }];
}
