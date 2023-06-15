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
    if (settings.darkMode) {
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", "#0a0a0a");
    } else {
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", "#ffffff");
    }
  }, [settings.darkMode]);

  function updateSettings(newValue: UserSettings) {
    setSettings((prev) => {
      return { ...newValue };
    });
  }

  return [settings, updateSettings] as const;
}
