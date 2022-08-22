import { useContext } from "react";
import ThemeBotton from "./ThemeBotton";
import { ThemeContext } from "./ThemeContext";

function Theme() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={darkMode ? "canvas-dark" : "canvas"}>
      {/* Top Hero Image */}
      <div className="hero-image">
        <div className={darkMode ? "overlay-dark" : "overlay"}>
          <h2>about . developer</h2>
        </div>
      </div>
      {/* About Details */}
      <center>
        <div className={darkMode ? "about-details-dark" : "about-details"}>
          <div className="text-left">
            <img
              className="img-fluid"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="..."
            />
            <h3>Rachit Tandon</h3>
            <h6>COMPUTER PROGRAMMER</h6>
            <hr />
            <p>
              Tr laborum incididunt nulla
              duis enim. Occaecat proident mollit laboris dolor fugiat
              consectetur tempor nisi aliqua culpa quis Lorem dolore ut. Dolor
              commodo excepteur minim id qui non laboris sint deserunt anim
              mollit cillum proident est. Pariatur proident in mollit laborum.
              Cillum mollit nulla veniam fugiat minim elit mollit cupidatat
              commodo reprehenderit dolore.
            </p>
          </div>
          <p>
            "Amet excepteur anim velit reprehenderit incididunt nisi ad. Eiusmod
            ipsum qui dolor occaecat adipisicing."
          </p>
          <div className="icons">
            <span className="fa fa-github"></span>
            <span className="fa fa-instagram"></span>
            <span className="fa fa-linkedin-square"></span>
          </div>
        </div>
      </center>
      {/* Floating Button  */}
      <ThemeBotton />
    </div>
  );
}

export default Theme;