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





const webList = [
  {
    title: "alkabbash website",
    desc: "web wordpress website",
    img: kabbashcover.src,
    key: 1,
  },
  {
    title: "SpellMe dashboard",
    desc: "dashboard website for spell me game app",
    img: spellmewebcover.src,
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
    title: "Service supplier app",
    desc: "multi platform flutter app for delivering services indoor",
    img: suppliercover.src,
    key: 5,
  },
  {
    title: "SpellMe app",
    desc: "real-time challenging quiz game for imporving spelling skills",
    img: spellmeapp.src,
    key: 6,
  },
  {
    title: "Family market app",
    desc: "android & ios mobile app for groceries daily shopping ",
    img: familycover.src,
    key: 7,
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
    <section ref={re} className={classy}>
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
