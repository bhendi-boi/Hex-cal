"use client";
import { useState, useEffect } from "react";
import { UserSettings } from "@/types";
import { useLocalStorage } from "usehooks-ts";

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
  const [settings, setSettings] = useLocalStorage<UserSettings>(
    "settings",
    DEFAULT_SETTINGS
  );

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

  return [settings, updateSettings] as const;
}
