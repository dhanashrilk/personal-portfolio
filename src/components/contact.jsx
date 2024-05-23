import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="container contact" id="contact">
      <h4 className="heading py-3">Contact</h4>
      <div className="row">
        <div className="col-sm-6">
          <img src="./img/8.png" alt="" className="h-auto w-100 py-3 px-5" />
        </div>
        <div className="col-sm-6">
          <a href="dhanashrik2110@gmail.com" className="first">
            <CiMail className="mx-1" />
            dhanashrik2110@gmail.com
          </a>
          <a href="#+917019929317" className="">
            <IoCallOutline className="mx-1" />
            +91 7019929317
          </a>
          <a href="https://github.com/dhanashrilk" className="">
            <FaGithub className="mx-1" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/dhanashri-kashegaon-2b5587163/"
            className=""
          >
            <FaLinkedin className="mx-1" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
