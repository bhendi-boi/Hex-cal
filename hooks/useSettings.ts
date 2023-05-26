"use client";
import { useState, useEffect } from "react";
import { UserSettings } from "@/types";

const DEFAULT_SETTINGS: UserSettings = {
  defaultFromBase: "hex",
  defaultToBase: "dec",
  showCopyToClipBoard: true,
  allowNegativeNumbers: false,
};

export function useSettings() {
  const [settings, setSettings] = useState<UserSettings>(getStoredSettings);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  function updateSettings(key: any, newValue: any) {
    setSettings((prev) => {
      return { ...prev, key: newValue };
    });
  }

  function getStoredSettings() {
    if (typeof window === "undefined") {
      return DEFAULT_SETTINGS;
    }
    const storedSettings = JSON.parse(
      window.localStorage.getItem("settings") ??
        JSON.stringify(DEFAULT_SETTINGS)
    );
    return storedSettings;
  }

  return [settings, updateSettings] as const;
}
