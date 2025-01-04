import Header from "./Header";
import SectionIntro from "./SectionIntro";
import SectionFaq from "./SectionFaq";
import SectionFeaturesParallax from "./SectionFeaturesParallax";
import style from "@/app/page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SectionIntro />
        <SectionFaq />
        <SectionFeaturesParallax />
      </main>
    </>
  );
}
