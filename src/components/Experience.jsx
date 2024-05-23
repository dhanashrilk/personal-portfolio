const Experience = () => {
  return (
    <div id="experience" className="container experience">
      <div className="row mb-3" style={{ paddingRight: "27px" }}>
        <h4 className="heading py-3">Experiences</h4>

        <div className="card my-2 mx-3">
          <h6 className="card-header title d-flex justify-content-between">
            <div className="">
              <p>Software Engineer(UI)</p>
              <p>Healthsignz Technologies</p>
            </div>
            <div>
              <p>06/2022-02/2024</p>
              <p>Bengaluru, Karnataka</p>
            </div>
          </h6>
          <div className="card-body">
            <p className="card-text">
              Crafting seamless user experiences through clean, efficient code
              and innovative design solutions as a front-end developer.
            </p>
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn btn-dark"
            >
              Details...
            </a>
          </div>
        </div>
        <div className="card my-3 mx-3">
          <h6 className="card-header title d-flex justify-content-between">
            <div className="">
              <p>MERN Stack Trainee(Apprenticeship)</p>
              <p>Be-practical</p>
            </div>
            <div>
              <p>09/2021-01/2022</p>
              <p>Bengaluru, Karnataka</p>
            </div>
          </h6>
          <div className="card-body">
            <p className="card-text">Training in MERN Stack Course</p>
            <a
              href="#"
              className="btn btn-dark"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal1"
            >
              Details...
            </a>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="card my-2">
                  <h6 className="card-header title d-flex justify-content-between">
                    <div className="">
                      <p>Software Engineer(UI)</p>
                      <p>Healthsignz Technologies</p>
                    </div>
                    <div>
                      <p>06/2022-02/2024</p>
                      <p>Bengaluru, Karnataka</p>
                    </div>
                  </h6>
                  <div className="card-body">
                    <ul className="card-text list-disc">
                      VDC is Vijaya Diagnostic Centre is front-end delivery
                      interface for consumers to get a wide range of diagnostic
                      services including pathology, radiology, cardiology and
                      imaging services etc. Slot from the application, book
                      various Health packages and purchase Medicines based on
                      advice. •Interacted closely with UX team about
                      requirements.
                      <li>
                        Developed fully Responsive Web Design from figma files.
                      </li>{" "}
                      <li>
                        Developed fully Responsive Web Design from figma files.
                      </li>{" "}
                      <li>
                        Added CSS media queries for mobile screens. •Worked on
                        Navigation menu using React-Router.
                      </li>{" "}
                      <li>
                        Worked with API calls to fetch data and Display
                        available appointment slots for date and time.
                      </li>{" "}
                      <li>
                        Worked on Redux for enhancing scalability and
                        maintainability.
                      </li>{" "}
                      <li>
                        Improved application performance by optimizing images,
                        reducing rendering time and implementing lazy loading
                        techniques.
                      </li>{" "}
                      <li>
                        Worked with API calls to fetch data and Display
                        available appointment slots for date and time.
                      </li>{" "}
                      <li>
                        Worked on Redux for enhancing scalability and
                        maintainability.
                      </li>{" "}
                      <li>
                        Added Hooks to allow function components to have access
                        to state and other React features.
                      </li>{" "}
                      <li>
                        Worked on NEXT JS migration project from version 9 to
                        Next JS version 13 in with Tailwind CSS
                      </li>{" "}
                      <li>Verified components with unit testing.</li>
                    </ul>

                    <h6>Skills Used</h6>

                    <p className="p-2">
                      HTML5, CSS3, Bootstrap,Material UI, Tailwind CSS,
                      JavaScript, ReactJS,{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModal1"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="card my-2">
                  <h6 className="card-header title d-flex justify-content-between">
                    <div className="">
                      <p>MERN Stack Trainee(Apprenticeship)</p>
                      <p>Be-practical</p>
                    </div>
                    <div>
                      <p>09/2021-01/2022</p>
                      <p>Bengaluru, Karnataka</p>
                    </div>
                  </h6>
                  <div className="card-body">
                    <ul className="card-text list-disc">
                      <li>
                        Strong knowledge of basic web tech such as HTML, CSS,
                        Bootstrap.
                      </li>{" "}
                      <li>
                        In-depth knowledge of JavaScript, ReactJS, NodeJS,
                        MongoDB.
                      </li>{" "}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
