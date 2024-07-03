export const metadata = {
  title: "schola waitlist",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import MarqueeTextComp from "@/components/marqueeText";
import { SpeedInsights } from "@vercel/speed-insights/react"


export default function Home() {
  return (
    <>
      <Hero />
      {/* <BusinessCategories /> */}
      <MarqueeTextComp />
      <SpeedInsights />
      
    </>
  );
}
