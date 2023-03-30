import ImageCarousel from "./components/ImageCarousel";
import NoticeBoard from "./components/NoticeBoard";
import CallToAction from "./components/CallToAction";
import WhySection from "./components/WhySection";
import Directors from "./components/Directors";
import Teams from "./components/Teams";
import Testimonilas from "./components/Testimonilas";
import Stats from "./components/Stats";
// import BlogSection from "./components/BlogSection";

export default function Home() {
  return (
    <main>
       <div className="flex flex-col md:flex-row w-full mt-2 px-4 rounded-md">
        <div className="w-full md:w-[60%]">
          <ImageCarousel />
        </div>
        <div className="w-full md:w-[40%]">
          <NoticeBoard />
        </div>
      </div>
      <CallToAction />
      <WhySection />
      <Directors />
      <Teams />
      <Testimonilas />
      <Stats />
      {/* <BlogSection /> */}
    </main>
  );
}
