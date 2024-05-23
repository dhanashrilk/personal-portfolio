import { MdWavingHand } from "react-icons/md";

const About = () => {
  return (
    <div className="container position-relative" id="about">
      <div className="about-content">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Hi there, I am Dhanashri
              <span>
                <MdWavingHand />
              </span>
              ,
            </h2>

            <h5 className="">
              {" "}
              I am a Creative UI/Frontend Developer experienced in HTML, CSS,
              JavaScript and ReactJS, passionate about creating great user
              experiences and have a strong understanding of usability and
              accessibility standards.
            </h5>
          </div>
          <div className="col-sm-6">
            <img src="./img/7.png" alt="" className="h-auto w-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
