import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-hook-inview";

export const AboutMe = () => {
  const [re, isVisible] = useInView({
    threshold: 0,
  });
  const [shown, setShown] = useState(false);
  const [classy, setClassy] = useState("welcome_area p_120 ");
  useEffect(() => {
    if (!shown)
      if (isVisible) {
        console.log("is visible now " + isVisible);
        setClassy(
          "welcome_area p_120  animate__animated animate__fadeInLeftBig"
        );

        setShown(true);
      } else {
        setClassy("welcome_area p_120");
      }
  }, [isVisible]);
  return (
    <section id="about" ref={re} className={classy}>
      <div className="container">
        <div className="row welcome_inner">
          <div className="col-lg-6">
            <div className="welcome_text">
              <h4>About Myself</h4>
              <p>
                Always dream about creating big things , to achieve as must as
                possible and to be able to build any size of the software
                project , always passionate about being able to work on any part
                of a software project to be able to fit in alot of positions in
                any team.
              </p>
              <div className="row">
                <div className="col-md-4">
                  <div className="wel_item">
                    <i className="lnr lnr-users"></i>
                    <h4>10+</h4>
                    <p>Happy clients</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="wel_item">
                    <i className="lnr lnr-book"></i>
                    <h4>10+</h4>
                    <p>Total Projects</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="wel_item">
                    <i className="lnr lnr-code"></i>
                    <h4>5</h4>
                    <p>Years Experiance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tools_expert">
              <div className="skill_main" style={{}}>
                <div className="skill_item">
                  <h4>
                    React JS <span className="counter">70</span>%
                  </h4>
                  <div className="progress_br">
                    <div
                      className="progress"
                      style={{
                        width: "70%",
                        background: "linear-gradient(#314755 0%, #26a0da 100%)",
                      }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="skill_item">
                  <h4>
                    Flutter <span className="counter">90</span>%
                  </h4>
                  <div className="progress_br">
                    <div
                      className="progress"
                      style={{
                        width: "90%",
                        background: "linear-gradient(#314755 0%, #26a0da 100%)",
                      }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="skill_item">
                  <h4>
                    Android-Java <span className="counter">75</span>%
                  </h4>
                  <div className="progress_br">
                    <div
                      className="progress"
                      style={{
                        width: "75%",
                        background: "linear-gradient(#314755 0%, #26a0da 100%)",
                      }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="skill_item">
                  <h4>
                    Next JS <span className="counter">80</span>%
                  </h4>
                  <div className="progress_br">
                    <div
                      className="progress"
                      style={{
                        width: "80%",
                        background: "linear-gradient(#314755 0%, #26a0da 100%)",
                      }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="skill_item">
                  <h4>
                    Agile Scrum <span className="counter">70</span>%
                  </h4>
                  <div className="progress_br">
                    <div
                      className="progress"
                      style={{
                        width: "70%",
                        background: "linear-gradient(#314755 0%, #26a0da 100%)",
                      }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="skill_item">
                  <h4>
                    PHP <span className="counter">50</span>%
                  </h4>
                  <div className="progress_br">
                    <div
                      className="progress"
                      style={{
                        width: "50%",
                        background: "linear-gradient(#314755 0%, #26a0da 100%)",
                      }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
