import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();

  return (
    <section
      className="container mx-auto max-w-7xl px-6 c-space section-spacing"
      id="about"
    >
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-hero-default grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext text-white">
              Hi, I'm Supriya Srivastava
            </p>
            <p className="subtext text-white/70">
              I’m passionate about software and machine learning, and I enjoy
              working at the intersection of AI, data, and real-world challenges.
              I’m always curious, always learning, and focused on building
              solutions that make a real difference.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo/80 to-transparent" />
        </div>

        {/* Grid 2 */}
        <div className="grid-hero-default grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-[rgb(var(--color-cyan))]">
              <strong>CODE IS CRAFT</strong>
            </p>

            <Card style={{ rotate: "-10deg", top: "30%", left: "20%" }} text="RestAPIs" containerRef={grid2Container} />
            <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="Transformers" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} text="Artificial Intelligence" containerRef={grid2Container} />
            <Card style={{ rotate: "20deg", top: "10%", left: "38%" }} text="FastAPI" containerRef={grid2Container} />
            <Card style={{ rotate: "40deg", top: "40%", left: "28%" }} text="DSA" containerRef={grid2Container} />
            <Card style={{ rotate: "30deg", top: "70%", left: "70%" }} image="assets/logos/docker.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "45deg", top: "5%", left: "10%" }} image="assets/logos/github.png" containerRef={grid2Container} />
            <Card style={{ rotate: "-30deg", top: "70%", left: "25%" }} image="assets/logos/PyTorch.svg" containerRef={grid2Container} />

          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Prayagraj, India
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-hero-special grid-4 bg-custom-gradient">
  <div className="flex flex-col items-center justify-center gap-4 size-full">
    <p className="text-center headtext text-white">
      Collaboration starts with conversation, I’d love to hear your thoughts
    </p>
    <a
      href="https://www.linkedin.com/in/supriyasrivas/"
      target="_blank"
      rel="noopener noreferrer"
      className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-transform duration-200 hover:scale-105"
    >
      Connect on LinkedIn
    </a>
  </div>
</div>

        {/* Grid 5 */}
        <div className="grid-hero-default grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext text-white">Tech Stack</p>
            <p className="subtext text-white/70">
              I leverage a broad tech stack to build applications that balance innovation, scalability, and long‑term stability.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
