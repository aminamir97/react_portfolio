import React from "react";

export const OneListTree = ({ data }) => {
  console.log("my list size " + data.length);
  return (
    <div className="tab-content" id="myTabContent">
      <div
        className="tab-pane fade show active"
        // id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <ul className="list">
          {data.map((item) => {
            return (
              <li key={item.title}>
                <span></span>
                <div className="media animate__animated animate__fadeInRightBig">
                  <div className="d-flex">
                    <p>{item.date}</p>
                  </div>
                  <div className="media-body">
                    <h4>{item.title}</h4>
                    <div>
                      {item.desc.map((pp) => (
                        <div key={pp}>
                          <p>{pp + "\n"}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
          {/* <li>
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
        </li> */}
        </ul>
      </div>
    </div>
  );
};
