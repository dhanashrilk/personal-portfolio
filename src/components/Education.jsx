import React from "react";

const Education = () => {
  return (
    <div className="container education" id="education">
      <h4 className="heading">Education</h4>
      <div className="card my-3">
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <h6>
              <p>Master in Computer Application</p>
              <p>Dept. of Computer Science, Gulbarga University</p>
            </h6>
            <h6>
              <p>06/2016-06/2018</p>
              <p>Kalaburagi, Karnataka</p>
            </h6>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <h6>
              <p>Bachelor in Computer Application</p>
              <p>Solapur University</p>
            </h6>
            <h6>
              <p>06/2013-06/2016</p>
              <p>Solapur, Maharashtra</p>
            </h6>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <h6>
              <p>
                XII<sup>th</sup> (Science)-HSC
              </p>
            </h6>
            <h6>
              <p>06/2011-06/2013</p>
              <p>Solapur, Maharashtra</p>
            </h6>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <h6>
              <p>
                X<sup>th</sup>SSC
              </p>
            </h6>
            <h6>
              <p>06/2011</p>
              <p>Solapur, Maharashtra</p>
            </h6>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
