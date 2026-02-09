import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();

  return (
    <section
      className="container mx-auto max-w-7xl px-6 c-space section-spacing"
      id="about"
    >
      <h2 className="text-heading py-10">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-hero-default grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-20 -top-4 md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
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
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-linear-to-t from-indigo/80 to-transparent" />
        </div>

        {/* Grid 2 */}
        <div className="grid-hero-default grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl">
              <strong>CODE IS CRAFT</strong>
            </p>

            <Card style={{ rotate: "-10deg", top: "30%", left: "20%" }} text="RestAPIs" containerRef={grid2Container} />
            <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="Transformers" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} text="Artificial Intelligence" containerRef={grid2Container} />
            <Card style={{ rotate: "20deg", top: "10%", left: "38%" }} text="FastAPI" containerRef={grid2Container} />
            <Card style={{ rotate: "40deg", top: "40%", left: "28%" }} text="DSA" containerRef={grid2Container} />
            <Card style={{ rotate: "30deg", top: "70%", left: "70%" }} image="assets/logos/docker.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "45deg", top: "5%", left: "10%" }} image="assets/logos/github.png" containerRef={grid2Container} />
            <Card style={{ rotate: "-30deg", top: "70%", left: "25%" }} image="assets/logos/TensorFlow.svg" containerRef={grid2Container} />

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
        <div className="grid-hero-special grid-4">
          <div className="flex flex-col justify-end gap-1 size-full px-1 pb-4">
            <p className="headtext text-white">
              Education
            </p>

            <p className="text-white/80 text-sm md:text-base max-w-md">
              Pursuing B.Tech in Computer & Communication Engineering with a CGPA of 9.1 at Manipal University Jaipur (2022-2026).
            </p>
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-hero-default-reverse grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext text-white">Tech Stack</p>
            <p className=" subtext text-white/70">
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
