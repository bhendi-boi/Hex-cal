"use client";
import { ConverterHistoryItem } from "@/types";
import { useState, useEffect } from "react";

export function useHistory() {
  const [converterHistory, setConverterHistory] = useState<
    ConverterHistoryItem[]
  >(getStoredConverterHistory);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.localStorage.setItem(
      "converter-history",
      JSON.stringify(converterHistory)
    );
  }, [converterHistory]);

  function getStoredConverterHistory() {
    if (typeof window === "undefined") {
      return [];
    }
    const storedSettings = JSON.parse(
      window.localStorage.getItem("converter-history") ?? JSON.stringify([])
    );
    return storedSettings;
  }

  function updateConverterHistory(newEntry: ConverterHistoryItem) {
    setConverterHistory((prev) => {
      prev.push(newEntry);
      if (prev.length === 11) {
        prev.shift();
      }
      return [...prev];
    });
  }

  function clearHistory() {
    setConverterHistory([]);
  }

  return [converterHistory, updateConverterHistory, clearHistory] as const;
}
