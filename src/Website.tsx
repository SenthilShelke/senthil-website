import Project from "./Project";
import Experience from "./Experience";
import OrgoImg2 from "./assets/OrgoImg2.jpg";
import Sort from "./assets/Sort.png";
import SmartWater from "./assets/SmartWater.jpg";
import FractalImg from "./assets/FractalImg.jpg";
import CapsuleImg from "./assets/CapsuleImage.jpg";
import pic from "./assets/pic.jpg";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaJava, FaPlay } from "react-icons/fa";
import { 
  SiJavascript, SiTypescript, SiHtml5, SiCss3, SiPostgresql, 
  SiKotlin, SiCplusplus, SiC, SiPython, SiSpringboot, SiKubernetes, 
  SiDocker, SiPostman, SiGithubactions, SiReact, SiNextdotjs, 
  SiNodedotjs
} from "react-icons/si";

const skillsList = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "SQL", icon: <SiPostgresql /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Kotlin", icon: <SiKotlin /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "C", icon: <SiC /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "GitHub Actions", icon: <SiGithubactions /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Playwright", icon: <FaPlay /> },
];

function Website() {
  return (
    <div className="container">
      <div className="layout-wrapper">
        <div className="top-row">
          <div className="intro-section">
            <div className="intro-header-row">
              <div className="intro-titles">
                <h1 className="main-title">Hi, I'm Senthil!</h1>
                <h3 className="sub-title">Computer Engineering @UWaterloo</h3>
              </div>
              <img src={pic} alt="Senthil Shelke" className="profile-pic" />
            </div>
            
            <div className="text-container">
              <p className="paragraph">
                I design and ship end-to-end software systems across backend services, data infrastructure, and modern frontends. My work spans scalable microservices, high-performance dashboard reports, and automated testing frameworks that improve reliability and release velocity.
              </p>

              <div className="social-icons">
                <span className="find-me-text">Find me on:</span>
                <a href="https://github.com/SenthilShelke" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/senthil-shelke-3446722a1/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/senthilshelke/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="mailto:senthil.shelke@gmail.com">
                  <FaEnvelope />
                </a>
              </div>
            </div>

            <div className="skills-carousel-container">
              <div className="skills-track">
                {[...skillsList, ...skillsList].map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <span className="skill-icon">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="experience-section">
            <h2 className="section-title">Experience</h2>

            <Experience
              title="Software Developer Intern"
              company="RBC"
              dates="Jan 2026 — Apr 2026"
              bullets={[
                "Modernized a large set of Spring Boot microservices and built an AI system that automatically fixes software vulnerabilities."
              ]}
            />
            
            <Experience
              title="Data Engineer"
              company="PandoPartner"
              dates="Sep 2025 — Present"
              bullets={[
                "Built and optimized a company-wide financial dashboard platform, making reports load in seconds instead of minutes."
              ]}
            />

            <Experience
              title="Software QA Intern"
              company="PandoPartner"
              dates="May 2025 — Aug 2025"
              bullets={[
                "Created a large automated testing system with Playwright that reduced manual QA work and sped up releases."
              ]}
            />
          </div>
        </div>

        <div className="projects-section">
          <h2 className="section-title">Projects</h2>
          <div className="projects-list">
            <Project
              title="Capsule - Event Tracker App"
              link="https://github.com/SenthilShelke/Capsule"
              language="TypeScript, React Native"
              reverse={false}
              description="This app lets you create your own timelines by adding events with titles, dates, descriptions, and photos. You can sign up for an account so your timelines are saved just for you, edit them anytime or view them in a slideshow with a rotating image carousel."
              image={CapsuleImg}
            />
            <Project
              title="Mandelbrot Visualization App"
              link="https://github.com/SenthilShelke/React-Native-Fractal-App"
              language="TypeScript, React Native"
              reverse={true}
              description="Visualizes the Mandelbrot Set on your phone or a mobile simulator. It leverages the Skia library for its 2D graphics and the React Native Reanimated library to allow for smooth 60 FPS zooming in and out of the screen."
              image={FractalImg}
            />
            <Project
              title="Quick Bit Sort - Sorting Algorithm"
              link="https://github.com/SenthilShelke/QuickBitSort"
              language="C++"
              reverse={false}
              description="A custom sorting algorithm similar to Quick Sort but relies on low-level bitwise operations. It partitions the array into two based on its most significant bit, recursively sorting the partitions to improve execution speed."
              image={Sort}
            />
            <Project
              title="Smart Water - Automated Watering System"
              link="https://github.com/SenthilShelke/ECE198-Project"
              language="C, Microcontrollers"
              reverse={true}
              description="An automated plant watering system built with two STM32 microcontrollers. Sensors feed data to the microcontrollers for control logic, and an LCD displays key metrics like room temperature and tank water depth."
              image={SmartWater}
            />
            <Project
              title="Organic Chemistry Reaction Simulator"
              link="https://github.com/SenthilShelke/Organic-Chemistry-Reaction-Simulator"
              language="Processing"
              reverse={false}
              description="Displays simple organic reactions via line structures using G4P GUI. Users can select reaction types and load default or custom data files to visualize compounds and chemical reactions in real-time."
              image={OrgoImg2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Website;