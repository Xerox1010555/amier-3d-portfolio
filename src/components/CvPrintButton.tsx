"use client";

import { useLang } from "@/i18n/lang";
import { bi } from "@/i18n/lang";

export default function CvPrintButton() {
  const { t } = useLang();
  return (
    <button type="button" className="btn btn-solo cv-print" onClick={() => window.print()}>
      {t(bi("Print / Save as PDF", "اطبع / احفظ كـ PDF"))}
    </button>
  );
}
