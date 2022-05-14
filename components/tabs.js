import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-hook-inview";
import { OneListTree } from "./tabsCompnents/oneTabTree";
import { OneListTree2 } from "./tabsCompnents/oneTabTree2";
const experiances = [
  {
    date: "March 2022 to present ",
    title: "Ascot Tech / Jordan",
    desc: ["Web dev Full stack", "Flutter dev"],
  },
  {
    date: "May 2021 to Feb 2022 ",
    title: "SOFYA software ltd / Istanbul",
    desc: ["React Front-end", "Flutter dev", "Android-Java"],
  },
  {
    date: "Aug 2020 to May 2021 ",
    title: "CSI teknoloji / Istanbul",
    desc: ["Flutter dev", "PHP api-dev"],
  },
  {
    date: "Oct 2019 to Jul 2020 ",
    title: "Alkabbash group",
    desc: ["Flutter dev", "Front-end", "Wordpress"],
  },
  {
    date: "May 2019 to Oct 2020 ",
    title: "Koc University / Istanbul",
    desc: [
      "Research Assistant",
      "Flutter dev",
      "researching on data cryptography and security",
      "Java dev",
    ],
  },
  {
    date: "May 2018 to Apr 2019 ",
    title: "Mobile & web Freelancing",
    desc: ["Flutter dev", "Android dev", "Web full stack", "Database mng"],
  },
];
const education = [
  {
    date: "Sept 2015 to May 2019 ",
    title: "University of Jordan",
    desc: "BS Computer information systems",
  },
  {
    date: "Sept 2013 to May 2015 ",
    title: "High school",
    desc: "Information technologies",
  },
];

export const TabsSection = () => {
  const eduTab = useRef();
  const ExpTab = useRef();

  function onChangeSelection(newdata) {
    if (newdata === 1) {
      //show exp
      setType(1);
      // setType(experiances);
    } else {
      //show edu
      setType(2);

      // setType(education);
    }
  }

  const [re, isVisible] = useInView({
    threshold: 0,
  });
  const [type, setType] = useState(1);

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
                className={type === 1 ? "nav-link active" : "nav-link"}
                id="home-tab"
                data-toggle="tab"
                // href="#home"
                onClick={() => onChangeSelection(1)}
                role="tab"
                aria-controls="home"
                aria-selected={type === 1 ? "true" : "false"}
              >
                My Experiences
              </a>
            </li>
            <li className="nav-item">
              <a
                className={type === 2 ? "nav-link active" : "nav-link"}
                id="profile-tab"
                data-toggle="tab"
                // href="#profile"
                onClick={() => onChangeSelection(2)}
                role="tab"
                aria-controls="profile"
                aria-selected="true"
              >
                My Education
              </a>
            </li>
          </ul>

          {type === 1 ? (
            <OneListTree data={experiances} />
          ) : (
            <OneListTree2 data={education} />
          )}
        </div>
      </div>
    </section>
  );
};
