import HeroText from "../components/HeroText";
import { useMediaQuery } from "react-responsive";
import BackgroundGradientAnimation from "../components/BackgroundGradientAnimation";
import DigitalPass from "../components/DigitalPass.jsx";  

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <>
     
      <section className="relative flex items-start justify-center min-h-screen md:items-start md:justify-start c-space">
        <BackgroundGradientAnimation containerClassName="fixed inset-0 -z-10" />
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

      </section>
    </>
  );
};

export default Hero