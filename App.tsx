import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useIsActiveApp } from "./components/hooks/useIsActiveApp";
import { useFetchCopiedText } from "./components/hooks/useFetchCopiedText";

export default function App() {
  const { appStateVisible } = useIsActiveApp();
  const { copiedText, fetchCopiedText } = useFetchCopiedText();

  useEffect(() => {
    fetchCopiedText();
  }, [appStateVisible]);

  return (
    <View style={styles.container}>
      <Text style={styles.copiedText}>{copiedText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  copiedText: {
    marginTop: 10,
    color: "black",
    padding: 10,
  },
});
