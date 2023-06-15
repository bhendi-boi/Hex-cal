"use client";
import { useState, useEffect } from "react";
import { UserSettings } from "@/types";

const DEFAULT_SETTINGS: UserSettings = {
  defaultFromBase: "hex",
  defaultToBase: "dec",
  showCopyToClipboard: true,
  allowNegativeNumbers: false,
  darkMode: false,
  showFullText: false,
  addPrefixToResult: false,
  defaultOperand1Base: "hex",
  defaultOperand2Base: "hex",
  defaultOperation: "add",
};

export function useSettings() {
  const [settings, setSettings] = useState<UserSettings>(getStoredSettings);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  // darkmode
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", settings.darkMode);
  }, [settings.darkMode]);

  function updateSettings(newValue: UserSettings) {
    setSettings((prev) => {
      return { ...newValue };
    });
  }

  function getStoredSettings() {
    if (typeof window === "undefined") {
      return;
    }
    const storedSettings = JSON.parse(
      window.localStorage.getItem("settings") ??
        JSON.stringify(DEFAULT_SETTINGS)
    );
    return storedSettings;
  }

  return [settings, updateSettings] as const;
}
