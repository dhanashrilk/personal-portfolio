import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { DiFirebase } from "react-icons/di";
import { IoLogoSass } from "react-icons/io5";
import { SiJquery } from "react-icons/si";

const skillsData = [
  {
    skillIcon: <FaHtml5 />,
    skillName: "HTML5",
    percentage: "80%",
  },
  {
    skillIcon: <IoLogoCss3 />,
    skillName: "CSS3",
    percentage: "80%",
  },
  {
    skillIcon: <IoLogoJavascript />,
    skillName: "JavaScript",
    percentage: "60%",
  },
  {
    skillIcon: <FaBootstrap />,
    skillName: "Bootstrap",
    percentage: "80%",
  },
  {
    skillIcon: <RiTailwindCssFill />,
    skillName: "Tailwind CSS",
    percentage: "80%",
  },
  {
    skillIcon: <GrReactjs />,
    skillName: "ReactJS",
    percentage: "80%",
  },
  {
    skillIcon: <SiRedux />,
    skillName: "Redux",
    percentage: "80%",
  },
  {
    skillIcon: <BsFiletypeScss />,
    skillName: "SCSS",
    percentage: "80%",
  },
  {
    skillIcon: <DiFirebase />,
    skillName: "FireBase",
    percentage: "80%",
  },
  {
    skillIcon: <IoLogoSass />,
    skillName: "Sass",
    percentage: "80%",
  },
  {
    skillIcon: <SiJquery />,
    skillName: "jQuery",
    percentage: "80%",
  },
];

function Skills() {
  return (
    <div className="container" id="skills">
      <h4 className="skills">My Skills</h4>
      <div className="skills">
        {skillsData.map((skill) => (
          <div className="skill-1" key={skill.IconDetails}>
            <p className="" key={skill.skilldet}>
              {" "}
              <span className="icon-size" key={skill.IconName}>
                {skill.skillIcon}
              </span>
              <span>{skill.skillName}</span>
              {/* <span>{skill.percentage}</span> */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
