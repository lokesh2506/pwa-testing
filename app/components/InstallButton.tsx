"use client";

import { useInstallPrompt } from "../hooks/useInstallPrompt";

export default function InstallButton() {
  const { canInstall, isInstalled, install } = useInstallPrompt();

  if (isInstalled) {
    return (
      <button disabled className="px-4 py-2 border border-green-500 text-green-500 rounded-lg">
        ✅ App Installed
      </button>
    );
  }

  if (!canInstall) return null; // hides button if not installable

  return (
    <button
      onClick={install}
      className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
    >
      Install App
    </button>
  );
}