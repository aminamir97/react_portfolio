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
                <img src="img/amin.png" alt="" />
              </div>
              <div className="media-body">
                <div className="personal_text">
                  <h6>Hello Everybody, i am</h6>
                  <h3>Amin Alameer</h3>
                  <h4>Intermediate Software Developer</h4>
                  <p>
                    You will begin to realise why this exercise is called the
                    Dickens Pattern (with reference to the ghost showing Scrooge
                    some different futures)
                  </p>
                  <ul className="list basic_info">
                    <li>
                      <a href="#">
                        <i className="lnr lnr-calendar-full"></i> 31st December,
                        1992
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lnr lnr-phone-handset"></i> 44 (012) 6954
                        783
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lnr lnr-envelope"></i> businessplan@donald
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lnr lnr-home"></i> Santa monica bullevard
                      </a>
                    </li>
                  </ul>
                  <ul className="list personal_social">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
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
