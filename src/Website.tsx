import { useState } from "react";
import myImage from "./assets/myImage.webp";
import Project from "./Project";
import orgo from "./assets/orgo.jpg";
import bits from "./assets/bits.jpeg";
import plant from "./assets/plant.jpeg";

function Website() {
  const [currentPage, setCurrentPage] = useState<"main" | "projects">(
    "main"
  );
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
      <div className="particle-container">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="particle"></div>
      ))}
    </div>
      {currentPage === "main" ? (
        <div className="main-page-container">
          <div className="text-container">
            <h2 className="name">Senthil Shelke</h2>
            <p className="paragraph">
              Hello, my name is Senthil and I am a first-year computer
              engineering student at the University Of Waterloo
            </p>
            <div className="buttons">
              <button onClick={() => handlePageChange("projects")}>
                Projects
              </button>
            </div>
          </div>
          <img className="my-image" src={myImage} alt="Profile"></img>
        </div>
      ) : currentPage === "projects" ? (
        <div className="projects-container">
          <button onClick={() => handlePageChange("main")}>Back</button>
          <Project title="Organic Chemistry Reaction Simulator"link="https://github.com/SenthilShelke/Organic-Chemistry-Reaction-Simulator" language="Processing" reverse = {false} description="This project allows the user to display simple organic chemical reactions through line structures. It uses the G4P GUI builder to allow the user to pick a type of reaction to display from a list. The program reads data from files to choose which specific compounds will be displayed in which reaction. Default files with data are provided but the user is given the liberty of inputting their own files as well." image={orgo}></Project>
          <Project title="Smart Water" link="https://github.com/SenthilShelke/ECE198-Project" language="C" reverse={true} description="This project is an automated plant watering system based off of two STM32 microcontrollers. Attatched to the microcontrollers are various pieces of equipment, such as moisture and ultrasonic sensors which send data to the microcontroller to be used in calculations. An LCD display is also incorporated to display important measurments such as the current temperature of the room and the depth of the water in the tank that is used to water the plant." image={plant}></Project>
          <Project title="Quick Bit Sort" link="https://github.com/SenthilShelke/QuickBitSort" language="C++" reverse={false} description="This is a sorting algorithm I developed  that is similar to Quick Sort but uses bitwise operators as it's way of sorting. It parritions the array into two based its most significant bit, then repeats the process with each partitioned array but this time looking at the next bit." image={bits}></Project>


        </div>
      ) : null}
    </div>
  );
}

export default Website;
