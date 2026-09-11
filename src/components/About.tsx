import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          AI-focused full-stack developer who builds and ships production applications end-to-end, with three live, publicly accessible products spanning AI/RAG pipelines, real-time systems, and SaaS platforms. Experienced integrating LLM APIs (Hugging Face, Gemini) and vector databases (Pinecone) into full-stack products using React/Next.js, Node/Express, MongoDB, and Redis, and deploying them on AWS, Vercel, and Render. Recognized in two hackathons for building working products under time pressure.
        </p>
      </div>
    </div>
  );
};

export default About;
