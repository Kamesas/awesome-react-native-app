import { useState } from "react";
import * as Clipboard from "expo-clipboard";

export const useFetchCopiedText = () => {
  const [copiedText, setCopiedText] = useState("");

  const fetchCopiedText = async () => {
    const text = await Clipboard?.getStringAsync();
    setCopiedText(text);
  };

  return { fetchCopiedText, copiedText };
};
