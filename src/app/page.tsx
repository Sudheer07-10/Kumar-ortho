"use client";

import content from "@/tier3-content/content.json";
import StandardPageTemplate from "@/tier2-layouts/StandardPageTemplate";

export default function Home() {
  return <StandardPageTemplate content={content} />;
}
