import HeroText from "../components/HeroText";
import { useMediaQuery } from "react-responsive";
import BackgroundGradientAnimation from "../components/BackgroundGradientAnimation";
import DigitalPass from "../components/DigitalPass.jsx";  

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <>
     
      <section className="relative w-full min-h-screen overflow-hidden py-24 sm:py-28 lg:py-0">
        <BackgroundGradientAnimation containerClassName="absolute inset-0 -z-10 w-full h-full" />
        <div
            className="
              relative z-10
              mx-auto
              max-w-7xl
              min-h-screen
              flex flex-col lg:flex-row
              items-center
              gap-12 lg:gap-24
              px-6 sm:px-10 lg:px-16
            "
          >          
          <HeroText className="lg:mt-6" />
          <DigitalPass />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-5
        bg-gradient-to-b from-transparent to-[#030412]" />
      </section>
    </>
  );
};

export default Hero