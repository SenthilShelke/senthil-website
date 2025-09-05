// Website.tsx
import { useState } from "react";
import Project from "./Project";
import Experience from "./Experience"; // NEW
import OrgoImg2 from "./assets/OrgoImg2.jpg";
import Sort from "./assets/Sort.png";
import SmartWater from "./assets/SmartWater.jpg";
import FractalImg from "./assets/FractalImg.jpg";
import CapsuleImg from "./assets/CapsuleImage.jpg";
import AnimatedSVG from "./AnimatedSVG";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

function Website() {
  const [currentPage, setCurrentPage] = useState<"main" | "projects" | "experience">("main");
  const [fade, setFade] = useState(true);

  function handlePageChange(page: "main" | "projects" | "experience") {
    setFade(false);
    setTimeout(() => {
      setCurrentPage(page);
      setFade(true);
    }, 500);
  }

  return (
    <div className={`container ${fade ? "fade-in" : "fade-out"}`}>
      {currentPage === "main" ? (
        <div className="main-page-container">
          <div className="text-container">
            <p className="paragraph">
              Hi! I’m Senthil Shelke, a second-year Computer Engineering student at the University of Waterloo. I’ve had the chance to explore both software testing and data engineering through internships, and I enjoy turning what I learn into projects of my own. Recently, I’ve been building mobile apps with React Native and creating interactive dashboards powered by data. I’m always curious, eager to take on new challenges, and excited to keep growing as a developer. Feel free to explore my projects below or connect with me!
            </p>

            {/* Buttons row */}
            <div className="buttons-row">
              <div className="experience-button">
                <button onClick={() => handlePageChange("experience")}>Experience</button>
              </div>
              <div className="projects-button">
                <button onClick={() => handlePageChange("projects")}>Projects</button>
              </div>

            </div>

            <div className="social-icons">
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

          <div className="my-image">
            <AnimatedSVG />
          </div>
        </div>
      ) : currentPage === "projects" ? (
        <div className="projects-container">
            <button onClick={() => handlePageChange("main")}>Back</button>

          <Project
            title="Capsule - Event Tracker App"
            link="https://github.com/SenthilShelke/Capsule"
            language="TypeScript"
            reverse={false}
            description="This app lets you create your own timelines by adding events with titles, dates, descriptions, and photos. You can sign up for an account so your timelines are saved just for you, edit them anytime or view them in a slideshow with a rotating image carousel, and everything will still be there when you come back."
            image={CapsuleImg}
          />
          <Project
            title="Mandelbrot Visualization App"
            link="https://github.com/SenthilShelke/React-Native-Fractal-App"
            language="TypeScript"
            reverse={true}
            description="This project uses React Native to be able to visualize the Mandelbrot Set on your phone or a mobile simulator. It leverages the Skia library for its 2D graphics and the React Native Reanimated library to allow for smooth zooming in and out of the screen."
            image={FractalImg}
          />
          <Project
            title="Quick Bit Sort - Sorting Algorithm"
            link="https://github.com/SenthilShelke/QuickBitSort"
            language="C++"
            reverse={false}
            description="This is a sorting algorithm I developed that is similar to Quick Sort but uses bitwise operators as its way of sorting. It partitions the array into two based on its most significant bit, then repeats the process with each partitioned array while checking the next bit."
            image={Sort}
          />
          <Project
            title="Smart Water - Automated Plant Watering System"
            link="https://github.com/SenthilShelke/ECE198-Project"
            language="C"
            reverse={true}
            description="An automated plant watering system built with two STM32 microcontrollers. Sensors (moisture, ultrasonic) feed data to the microcontrollers for control logic, and an LCD displays key metrics like room temperature and tank water depth."
            image={SmartWater}
          />
          <Project
            title="Organic Chemistry Reaction Simulator"
            link="https://github.com/SenthilShelke/Organic-Chemistry-Reaction-Simulator"
            language="Processing"
            reverse={false}
            description="Displays simple organic reactions via line structures using G4P GUI. Users can select reaction types and load default or custom data files to visualize compounds and reactions."
            image={OrgoImg2}
          />
        </div>
      ) : currentPage === "experience" ? (
        <div className="projects-container">
            <button onClick={() => handlePageChange("main")}>Back</button>

          {/* Data Engineering Intern */}
          <Experience
            title="Data Engineering Intern"
            company="PandoPartner"
            location="Waterloo, ON"
            dates="Sep 2025 — Dec 2025"
            bullets={[
              "Designed and implemented complex SQL queries on a large relational database with 50+ tables to retrieve and transform data, powering interactive dashboards used by clients to track revenue and monitor deal performance.",
              "Developed interactive dashboards in Evidence Studio, mapping user-selected filters to dynamic query parameters and implementing visualizations to generate financial reports that reduced manual reporting time by 30%."
            ]}
          />

          {/* Software QA Intern */}
          <Experience
            title="Software QA Intern"
            company="PandoPartner"
            location="Waterloo, ON"
            dates="May 2025 — Aug 2025"
            bullets={[
              "Developed 130+ modular end-to-end tests in JavaScript with Playwright, leveraging page objects and fixtures to improve code reusability, prevent critical bugs across core features, and increase release confidence.",
              "Designed reusable test flows for complex UIs, including virtualized tables and recursive tree structures, to validate nested data integrity and ensure stable locators for dynamic elements, reducing the need for manual QA by 70%.",
              "Enhanced CI/CD pipelines by refining GitHub Actions YAML configurations to streamline automated testing, resulting in a 60% reduction in execution time and increasing the frequency of release cycles by 30%.",
              "Created and reviewed 40+ unit tests in Jest using the Gemini CLI to accelerate test generation, then refined cases manually to improve accuracy, expand coverage of core features, and catch edge-case defects."
            ]}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Website;