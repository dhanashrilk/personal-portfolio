import { FaLinkedin } from "react-icons/fa6";
import { RxGithubLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text- text-decoration-none lh-1"
          >
            <svg className="bi text-light" width="30" height="24">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <span className="mb-3 mb-md-0 text-light">
            © 2024 Dhanashri Kashegaon , Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-light"
              href="https://www.linkedin.com/in/dhanashri-kashegaon-2b5587163/"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-light" href="https://github.com/dhanashrilk">
              <RxGithubLogo />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-light"
              href="https://drive.google.com/file/d/1ZZN1i0ndpaIs1KbdcdJauSmU2Ypet5hp/view?usp=sharing"
            >
              <button className="btn btn-dark">Check CV</button>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
