import React from "react";
import TimeLine from "../components/TimeLine";
import Data from "../constants/Data";

export function Experiences() {
  return (
    <section
      className="container mx-auto max-w-7xl px-6 c-space section-spacing"
      id="experience"
    >
      <h2 className="text-heading py-10">Experience</h2>
    <div className="relative w-full overflow-clip">
      <TimeLine data={Data} />
    </div>
    </section>
  );
}

export default Experiences;