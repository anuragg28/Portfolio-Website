import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaGithub } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    num: "01",
    name: "Curalink",
    category: "AI Medical Research Assistant",
    tools: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Hugging Face",
      "Pinecone (RAG)",
      "JWT",
      "Vercel",
      "Render",
    ],
    description:
      "Full-stack AI medical research assistant on the MERN stack with secure JWT auth. Integrates Hugging Face LLM with a Pinecone vector database for context-aware Retrieval-Augmented Generation (RAG).",
    image: "/images/curalink.jpg",
    github: "https://github.com/anuragg28/",
    live: "https://github.com/anuragg28/",
  },
  {
    num: "02",
    name: "PersonaAI",
    category: "AI Audience & Persona Generator",
    tools: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Gemini API",
      "REST APIs",
      "Vercel",
    ],
    description:
      "AI platform generating detailed customer personas from minimal input via Gemini API. Includes pain-point analysis, customer query simulation, and competitor benchmarking (50% research time reduction).",
    image: "/images/personaai.jpg",
    github: "https://github.com/anuragg28/",
    live: "https://github.com/anuragg28/",
  },
  {
    num: "03",
    name: "Vaultmeet",
    category: "2D Gamified Virtual Venue & Networking",
    tools: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "Redis",
      "Zustand",
      "Socket.io",
      "Agora",
      "AWS",
      "Phaser.js",
      "Docker",
    ],
    description:
      "2D virtual event platform featuring real-time chat, proximity-based video calling, and collaborative whiteboard via Socket.io, Redis, and Agora with gamified event flows.",
    image: "/images/vaultmeet.jpg",
    github: "https://github.com/anuragg28/",
    live: "https://github.com/anuragg28/",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (box.length === 0) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
      if (translateX < 0) {
        translateX = 0;
      }
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <p className="work-desc">{project.description}</p>
                <div className="work-tags-container">
                  {project.tools.map((tool, tIdx) => (
                    <span className="work-tag" key={tIdx}>
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="work-links-row">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-action-btn"
                      data-cursor="disable"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-action-btn"
                      data-cursor="disable"
                    >
                      <MdArrowOutward /> Live Demo
                    </a>
                  )}
                </div>
              </div>
              <WorkImage image={project.image} alt={project.name} link={project.live} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

