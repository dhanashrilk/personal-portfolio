/* eslint-disable react/jsx-key */
const projectDetails = [
  {
    projectImage: "./img/Video-editor.png",
    projectTitle: "Video Editor",
    projectButton: "https://dhanashrilk.github.io/Video-Edit/",
  },
  {
    projectImage: "./img/photo-portfolio.png",
    projectTitle: "Photography Portfolio",
    projectButton: "https://dhanashrilk.github.io/Photography-portfolio/",
  },
  {
    projectImage: "./img/Food Site.png",
    projectTitle: "Food Site",
    projectButton: "https://dhanashrilk.github.io/Food-site/Index.html",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="container projects">
      <div className="row py-3 mb-3">
        <h4 className="py-3 heading">Featured Projects</h4>
        {projectDetails &&
          projectDetails.map((item) => (
            <div className="col-sm-6">
              <div className="card my-3" key={item.id}>
                <img
                  key={item.img}
                  src={item.projectImage}
                  className="w-100 h-100 overflow-hidden"
                />
                <div className="card-body mb-2">
                  <h5 className="card-title" key={item.title}>
                    {item.projectTitle}
                  </h5>

                  <a
                    href={item.projectButton}
                    className="btn btn-secondary"
                    key={item.website}
                  >
                    Check Website
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
