import Image from "next/image";
import React from "react";
import reactImg from "../assets/react.png";
import flutter from "../assets/flutter.png";
import agile from "../assets/agile.png";

export const FeatureSection = (props) => {
  return (
    <section ref={props.ref} className="feature_area p_120">
      <div className="container">
        <div className="main_title">
          <h2>My Skills</h2>
          <p>
            I am always working on gaining alot of skills in development and
            managerial fields , always working on myself to learn more , here
            are some of my skills
          </p>
        </div>
        <div className="feature_inner row">
          <div className="col-lg-4 col-md-6">
            <div className="feature_item">
              {/* <i className="flaticon-react"></i> */}
              <i>
                <Image src={reactImg} height={50} width={50} style={{}} />
              </i>

              <h4>Web full-stack Developer</h4>
              <p>
                React, next js,node js and php made me able to handle large
                scope of software projects and some server deployment skills
                plus database management.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature_item">
              <i>
                <Image src={flutter} height={50} width={50} style={{}} />
              </i>{" "}
              <h4>Mobile Developer</h4>
              <p>
                Working with native and cross-platform by using Android-Java and
                flutter with full customization for targeted platforms and
                handling the APIs related
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature_item">
              <i>
                <Image src={agile} height={50} width={60} style={{}} />
              </i>
              <h4>Team Management</h4>
              <p>
                when working in different software teams , i had gained good
                experiance for being a team leader using the most useful
                patterns and methodlogies like Agile Scrum...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
