"use client";

import { useEffect } from "react";

export default function MainScript() {
  useEffect(() => {
    // jQuery dependency check
    if (typeof window !== "undefined" && window.jQuery) {
      const $ = window.jQuery;
      const $body = $("body");

      // Play initial animations on page load
      $(window).on("load", function () {
        setTimeout(() => {
          $body.removeClass("is-preload");
        }, 100);
      });
    }

    // Feather Icons Replacement (if present)
    if (window.feather) {
      window.feather.replace();
    }
  }, []);

  return null;
}