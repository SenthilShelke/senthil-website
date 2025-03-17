import { useState } from "react";
import Project from "./Project";
import OrgoImg2 from "./assets/OrgoImg2.jpg";
import Sort from "./assets/Sort.png";
import SmartWater from "./assets/SmartWater.jpg";
import FractalImg from "./assets/FractalImg.jpg";
import Capsule from "./assets/Capsule.jpg";
import AnimatedSVG from "./AnimatedSVG";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

function Website() {
  const [currentPage, setCurrentPage] = useState<"main" | "projects">("main");
  const [fade, setFade] = useState(true);

  function handlePageChange(page: "main" | "projects") {
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
            Hello! My name is Senthil Shelke, and I am a first-year Computer Engineering student at the University of Waterloo. I’m passionate about software development, especially React & React Native. In my spare time, I enjoy building projects, watching TV, and spending time with friends. I’m always eager to learn, grow, and explore entrepreneurial opportunities. Check out my projects below or connect with me through my socials!
            </p>
            <div className="projects-button">
              <button onClick={() => handlePageChange("projects")}>
                Projects
              </button>
            </div>
            <div className="social-icons">
              <a href="https://github.com/SenthilShelke" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/senthil-shelke-3446722a1/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/senthil.shelke/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="mailto:senthil.shelke@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="my-image">
            <AnimatedSVG></AnimatedSVG>
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
            description="This project is a React Native app that allows the user to track events in the form of a horizontal timeline with events laid on top of it. The events are customizable, allowing the user to add a title, description, and date. The app also allows the user to add images to their events and view them in a gallery. I have been actively developing this app and it is something that I am very passionate about."
            image={Capsule}
          ></Project>
          <Project
            title="Mandelbrot Visualization App"
            link="https://github.com/SenthilShelke/React-Native-Fractal-App"
            language="TypeScript"
            reverse={true}
            description="This project uses React Native to be able to visualize the Mandelbrot Set on your phone or a mobile simulator. It leverages the Skia library for its 2D graphics and the React Native Reanimated library to allow for smooth zooming in and out of the screen."
            image={FractalImg}
          ></Project>
          <Project
            title="Quick Bit Sort - Sorting Algorithm"
            link="https://github.com/SenthilShelke/QuickBitSort"
            language="C++"
            reverse={false}
            description="This is a sorting algorithm I developed  that is similar to Quick Sort but uses bitwise operators as it's way of sorting. It parritions the array into two based its most significant bit, then repeats the process with each partitioned array but this time looking at the next bit."
            image={Sort}
          ></Project>
          <Project
            title="Smart Water - Automated Plant Waterng System"
            link="https://github.com/SenthilShelke/ECE198-Project"
            language="C"
            reverse={true}
            description="This project is an automated plant watering system based off of two STM32 microcontrollers. Attatched to the microcontrollers are various pieces of equipment, such as moisture and ultrasonic sensors which send data to the microcontroller to be used in calculations. An LCD display is also incorporated to display important measurments such as the current temperature of the room and the depth of the water in the tank that is used to water the plant."
            image={SmartWater}
          ></Project>
          <Project
            title="Organic Chemistry Reaction Simulator"
            link="https://github.com/SenthilShelke/Organic-Chemistry-Reaction-Simulator"
            language="Processing"
            reverse={false}
            description="This project allows the user to display simple organic chemical reactions through line structures. It uses the G4P GUI builder to allow the user to pick a type of reaction to display from a list. The program reads data from files to choose which specific compounds will be displayed in which reaction. Default files with data are provided but the user is given the liberty of inputting their own files as well."
            image={OrgoImg2}
          ></Project>
          
          
          
        </div>
      ) : null}
    </div>
  );
}

export default Website;
