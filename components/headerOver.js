import React from "react";
import { useRef, useEffect } from "react";
import { useInView } from "react-hook-inview";

export const HeaderOver = () => {
  const sec = useRef();
  const [ef, isVisible] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    console.log("header is useEffect");
  });

  return (
    <section ref={ef} className="home_banner_area">
      <div className="container box_1620">
        <div className="banner_inner d-flex align-items-center">
          <div className="banner_content">
            <div className="media">
              <div className="d-flex anima animate__animated animate__fadeInRightBig">
                <img
                  src="img/amin.jpg"
                  alt=""
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="media-body">
                <div className="personal_text">
                  <h6>Hello Everybody, this is</h6>
                  <h3>Amin Alameer</h3>
                  <h4>Intermediate Software Developer</h4>
                  <p>
                    Always believing that the key of success is being passionate
                    , working in Web full-stack & Mobile developement including
                    Android and IOS
                  </p>
                  <ul className="list basic_info">
                    <li>
                      <a href="">
                        <i className="lnr lnr-calendar-full"></i> 13th
                        September, 1997
                      </a>
                    </li>
                    <li>
                      <a href="tel:+962796638930">
                        <i className="lnr lnr-phone-handset"></i> +962796638930
                      </a>
                    </li>
                    <li>
                      <a href="mailto:amin.alameer9@gmail.com">
                        <i className="lnr lnr-envelope"></i>{" "}
                        amin.alameer9@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="https://goo.gl/maps/JyLk8Q4HUfZaVoDw9">
                        <i className="lnr lnr-home"></i> Amman / Jordan
                      </a>
                    </li>
                  </ul>
                  <ul className="list personal_social">
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=100008950745508">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    {/* <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li> */}
                    <li>
                      <a href="https://www.linkedin.com/in/amin-alameer-ab866b11a/">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
