import { Modal, Box, Dialog, Button } from "@mui/material";
import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-hook-inview";
import { Slider } from "./gallery/slider";
import CloseIcon from "@mui/icons-material/Close";
import { ProjectItem } from "./gallery/projecItem";
import { ControlCameraTwoTone } from "@mui/icons-material";
import kabbashcover from "../assets/kabbashcover.jpg";
import spellmewebcover from "../assets/spellmeappweb.jpg";
import familycover from "../assets/familycover.jpg";
import spellmeapp from "../assets/spellmecover.jpg";
import suppliercover from "../assets/suppliercover.jpg";
import customer from "../assets/customercover.jpg";

import newsicover from "../assets/newsicover.png";

import k1 from "../assets/kabbashweb/s1.png";
import k2 from "../assets/kabbashweb/s2.png";
import k3 from "../assets/kabbashweb/s3.png";

import sw1 from "../assets/spellmewewb/sweb1.png";
import sw2 from "../assets/spellmewewb/sweb2.png";
import sw3 from "../assets/spellmewewb/sweb3.png";

import sm1 from "../assets/spellmemobile/s1.png";
import sm2 from "../assets/spellmemobile/s2.png";
import sm3 from "../assets/spellmemobile/s3.png";

import ss1 from "../assets/servicesupplier/s1.png";
import ss2 from "../assets/servicesupplier/s2.png";
import ss3 from "../assets/servicesupplier/s3.png";
import ss4 from "../assets/servicesupplier/s5.png";

import ssc1 from "../assets/servicecustomer/s1.png";
import ssc2 from "../assets/servicecustomer/s2.png";
import ssc3 from "../assets/servicecustomer/s3.png";
import ssc4 from "../assets/servicecustomer/s4.png";
import ssc5 from "../assets/servicecustomer/s5.png";

import nw1 from "../assets/newsi/newsi1.png";
import nw2 from "../assets/newsi/newsi2.png";
import nw3 from "../assets/newsi/newsi3.png";
import nw4 from "../assets/newsi/newsi4.png";

import f1 from "../assets/familymarket/s1.png";
import f2 from "../assets/familymarket/s2.png";
import f3 from "../assets/familymarket/s3.png";












const webList = [
  {
    title: "alkabbash website",
    desc: "real-estate business website",
    img: kabbashcover.src,
    slides: [k1.src, k2.src, k3.src],
    key: 1,
  },
  {
    title: "SpellMe dashboard",
    desc: "dashboard website for spell-me game app",
    img: spellmewebcover.src,
    slides: [sw1.src, sw2.src, sw3.src],
    key: 2,

  },
  // {
  //   title: "amin web",
  //   desc: "web wordpress website",
  //   img: "",
  //   key: 3,
  // },
  // {
  //   title: "sofya web",
  //   desc: "web wordpress website",
  //   img: "",
  //   key: 4,
  // },
];
const mobileList = [
  {
    title: "Newsi app",
    desc: "international news app accross the world",
    img: newsicover.src,
    key: 9,
    slides: [nw1.src, nw2.src, nw3.src, nw4.src],
  },
  {
    title: "Service supplier app",
    desc: "multi platform flutter app for delivering services indoor",
    img: suppliercover.src,
    key: 5,
    slides: [ss1.src, ss2.src, ss3.src, ss4.src],

  },
  {
    title: "SpellMe app",
    desc: "real-time challenging quiz game for imporving spelling skills",
    img: spellmeapp.src,
    key: 6,
    slides: [sm1.src, sm2.src, sm3.src],

  },
  {
    title: "Family market app",
    desc: "android & ios mobile app for groceries daily shopping ",
    img: familycover.src,
    key: 7,
    slides: [f1.src, f2.src, f3.src],

  },
  {
    title: "Service customer app",
    desc: "multi platform flutter app for delivering services indoor",
    img: customer.src,
    key: 8,
    slides: [ssc1.src, ssc2.src, ssc3.src, ssc4.src, ssc5.src],

  },

];

export const Gallery = () => {
  const [funky, setFunky] = useState("");
  const [re, isVisible] = useInView({
    threshold: 0,
  });
  const activeList = [];
  const [showModal, setShowModal] = useState(true);
  const [selectedMenu, setMenu] = useState({
    indx: 0,
    val: [].concat(webList).concat(mobileList),
  });
  //0 all , 1 web 2 mobile
  const [shown, setShown] = useState(false);
  const [classy, setClassy] = useState("home_gallery_area p_120 ");
  useEffect(() => {
    if (!shown)
      if (isVisible) {
        console.log("is visible now " + isVisible);
        setClassy(
          "home_gallery_area p_120  animate__animated animate__fadeInRightBig"
        );

        setShown(true);
      } else {
        setClassy("home_gallery_area p_120");
      }
  }, [isVisible]);
  function menuChanged(selected) {
    if (selected === 0) {
      setMenu({ indx: 0, val: [].concat(webList).concat(mobileList) });
    } else if (selected == 1) {
      setMenu({ indx: 1, val: webList });
    } else {
      setMenu({ indx: 2, val: mobileList });
    }
  }
  useEffect(() => {
    console.log("use effect started");
    setFunky(
      "gallery_f_inner row imageGallery1 animate__animated animate__zoomIn"
    );
    const timer = setTimeout(() => {
      setFunky("gallery_f_inner row imageGallery1");

      console.log("This will run after 1 second!");
    }, 900);

    return () => {
      clearTimeout(timer);
    };
  }, [selectedMenu]);
  return (
    <section id="projects" ref={re} className={classy}>
      <div className="container">
        <div className="main_title">
          <h2>Our Latest Featured Projects</h2>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="isotope_fillter">
          <ul className="gallery_filter list">
            <li
              className={selectedMenu.indx === 0 ? "active" : ""}
              data-filter="*"
            >
              <a onClick={() => menuChanged(0)}>All</a>
            </li>
            <li className={selectedMenu.indx === 1 ? "active" : ""}>
              <a onClick={() => menuChanged(1)}>Web</a>
            </li>
            <li className={selectedMenu.indx === 2 ? "active" : ""}>
              <a onClick={() => menuChanged(2)}>Mobile</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className={funky}>
          {selectedMenu.val.map((item) => (
            <ProjectItem key={item.key} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
