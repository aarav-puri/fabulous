import React from "react";
import { createRoot } from "react-dom/client";
import {
  Box,
  CheckCircle2,
  Command,
  Eye,
  Grid3X3,
  Image,
  Layers,
  Layout,
  Palette,
  PenTool,
  Sparkles,
} from "lucide-react";

const icons = {
  Box,
  CheckCircle2,
  Command,
  Eye,
  Grid3X3,
  Image,
  Layers,
  Layout,
  Palette,
  PenTool,
  Sparkles,
};

document.querySelectorAll("[data-icon]").forEach((slot) => {
  const Icon = icons[slot.dataset.icon];
  if (Icon) {
    createRoot(slot).render(<Icon aria-hidden="true" focusable="false" />);
  }
});
