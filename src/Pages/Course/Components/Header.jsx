import React from "react";

const CoursesHeader = () => {
  return (
    <div className="container-fluid bg-primary py-5 mb-5 page-header1">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <h1
              className="display-3 text-white animated slideInDown"
              style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 0.9)" }}
            >
              Courses
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a className="text-white" href="/">
                    Home
                  </a>
                </li>

                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Courses
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesHeader;
