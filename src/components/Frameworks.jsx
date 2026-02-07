import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skillsOuter = [
    "python", "JavaScript", "React", "Node.js", "HTML5", "PyTorch"
  ];
  const skillsInner = [
    "java", "MongoDB", "PostgresSQL", "docker", "Bootstrap", "FastAPI"
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40} radius={160}>
        {skillsOuter.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={80} reverse speed={2}>
        {[...skillsInner].map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);