import { useEffect, useRef, useState } from "react";
import { AppState, AppStateStatus } from "react-native";

export const useIsActiveApp = () => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", isActiveAppListener); // prettier-ignore

    return () => {
      subscription.remove();
    };
  }, []);

  function isActiveAppListener(nextAppState: AppStateStatus) {
    appState.current = nextAppState;
    setAppStateVisible(appState.current);
  }

  return { appStateVisible };
};
