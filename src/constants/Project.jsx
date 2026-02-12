const cards = [
  {
    description: "FastAPI • React • PostgreSQL • JWT • Mapbox",
    title: "TableScout: AI-powered personalized discovery & booking platform",
    src: "./assets/projects/tablescout.jpeg",
    ctaText: "Read More",
    ctaLink: "https://github.com/Supriyasus/TableScout",
    showCTA: true,
    content: () => {
      return (
        <p>
          A modular AI-agent powered platform for personalized location-based discovery and booking. <br /><br />
          TableScout is a developer-friendly system that blends real-time signals like traffic, popularity, and user preferences
          to generate explainable recommendations and seamless booking flows. It uses an agent-based backend architecture where
          specialized agents handle intent extraction, planning, scoring, explanations, and contextual signals. MCP servers wrap
          external APIs such as maps and booking services, keeping integrations isolated and testable. The FastAPI backend and
          React frontend make it scalable, extensible, and ideal for building intelligent location-based experiences.
        </p>
      );
    },
  },
  {
    description: "FastAPI • React • Cohere • Gemini • OpenAlex • Docker",
    title: "Vesper: AI toolkit for research, writing, and coding",
    src: "./assets/projects/Vesper.png",
    ctaText: "Read More",
    ctaLink: "https://github.com/Supriyasus/Vesper",
    showCTA: true,
    content: () => {
      return (
        <p>
          An AI research and writing assistant for generating, refining, and interacting with content and code. <br /><br />
          Vesper helps researchers, students, and creators summarize PDFs, debug code, generate text, and perform literature
          reviews through a clean React interface powered by FastAPI. It integrates Cohere and Google Generative AI for text
          generation, OpenAlex for semantic academic search, and PyMuPDF for document parsing. The platform focuses on usability,
          intelligent automation, and productivity enhancement for knowledge-intensive workflows.
        </p>
      );
    },
  },
  {
    description: "BERT • BiLSTM • Wav2Vec2 • ResNet • Fusion AI",
    title: "Multimodal Multilingual Sentiment Model: Emotion AI across text, speech, and images",
    src: "./assets/projects/multimodal.png",
    ctaText: "Read More",
    ctaLink: "https://github.com/Supriyasus/Multimodal-Sentiment-Model",
    showCTA: false,
    content: () => {
      return (
        <p>
          A multimodal emotion recognition system combining text, audio, and image intelligence. <br /><br />
          This research project evaluates performance across benchmark datasets including AffectNet (image), TESS (audio),
          and a multilingual text corpus. The system achieved strong individual accuracies (Text 96.34%, Audio 100%, Image 77.67%)
          with an overall fused accuracy of 92.21%. It is designed to remain robust even with missing or distorted modalities and
          generalizes across languages. The framework demonstrates scalable, culturally adaptive emotion recognition suitable for
          applications in healthcare, education, assistive tech, and human-computer interaction.
        </p>
      );
    },
  },
  {
    description: "Flask • Gemini API • Tailwind • PyPDF2",
    title: "Jobique: Intelligent job application assistant for personalized cold emails and cover letters",
    src: "./assets/projects/jobique.png",
    ctaText: "Read More",
    ctaLink: "https://github.com/Supriyasus/Jobique",
    showCTA: true,
    content: () => {
      return (
        <p>
          An AI tool that generates personalized cold emails and cover letters for job applications. <br /><br />
          Jobique allows users to upload a job posting link and their resume PDF to automatically generate tailored
          application emails and cover letters. Built with a Flask backend and Tailwind frontend, it uses the Google Gemini API
          for intelligent content generation and PyPDF2 for resume parsing. Deployed on Render, the application focuses on
          usability, personalization, and real-world job search automation.
        </p>
      );
    },
  },
  {
    description: "OpenCV • Flask • cvzone • pyttsx3",
    title: "HandyAI: Gesture-controlled automation system",
    src: "./assets/projects/HandyAi.png",
    ctaText: "Read More",
    ctaLink: "https://github.com/Supriyasus/HandyAI",
    showCTA: true,
    content: () => {
      return (
        <p>
          A gesture-controlled automation system that performs real-world tasks using computer vision. <br /><br />
          HandyAI detects hand gestures through a webcam and triggers predefined actions such as opening websites,
          fetching weather, retrieving news, or telling jokes. It also includes text-to-speech feedback to announce actions,
          making interaction intuitive and accessible. Built using Flask, OpenCV, cvzone, and pyttsx3, the system demonstrates
          real-time vision processing combined with automation logic inside a responsive web interface.
        </p>
      );
    },
  },
];

export default cards;
