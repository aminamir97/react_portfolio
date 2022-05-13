import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-hook-inview";

export const TabsSection = () => {
  const [re, isVisible] = useInView({
    threshold: 0,
  });
  const [shown, setShown] = useState(false);
  const [classy, setClassy] = useState("mytabs_area p_120 ");
  useEffect(() => {
    if (!shown)
      if (isVisible) {
        console.log("is visible now " + isVisible);
        setClassy("mytabs_area p_120  animate__animated animate__zoomInUp");

        setShown(true);
      } else {
        setClassy("mytabs_area p_120");
      }
  }, [isVisible]);
  return (
    //   <!--================My Tabs Area =================-->
    <section ref={re} className={classy}>
      <div className="container">
        <div className="tabs_inner">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                My Experiences
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                My Education
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <ul className="list">
                <li>
                  <span></span>
                  <div className="media animate__animated animate__fadeInRightBig">
                    <div className="d-flex">
                      <p>March 2017 to present</p>
                    </div>
                    <div className="media-body">
                      <h4>Colorlib</h4>
                      <p>
                        Senior Web Developer <br />
                        Santa monica, Los angeles
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <span></span>
                  <div className="media">
                    <div className="d-flex">
                      <p>March 2017 to present</p>
                    </div>
                    <div className="media-body">
                      <h4>Colorlib</h4>
                      <p>
                        Senior Web Developer <br />
                        Santa monica, Los angeles
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <span></span>
                  <div className="media">
                    <div className="d-flex">
                      <p>March 2017 to present</p>
                    </div>
                    <div className="media-body">
                      <h4>Colorlib</h4>
                      <p>
                        Senior Web Developer <br />
                        Santa monica, Los angeles
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <ul className="list">
                <li>
                  <span></span>
                  <div className="media">
                    <div className="d-flex">
                      <p>March 2017 to present</p>
                    </div>
                    <div className="media-body">
                      <h4>Colorlib</h4>
                      <p>
                        Senior Web Developer <br />
                        Santa monica, Los angeles
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <span></span>
                  <div className="media">
                    <div className="d-flex">
                      <p>March 2017 to present</p>
                    </div>
                    <div className="media-body">
                      <h4>Colorlib</h4>
                      <p>
                        Senior Web Developer <br />
                        Santa monica, Los angeles
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <span></span>
                  <div className="media">
                    <div className="d-flex">
                      <p>March 2017 to present</p>
                    </div>
                    <div className="media-body">
                      <h4>Colorlib</h4>
                      <p>
                        Senior Web Developer <br />
                        Santa monica, Los angeles
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
