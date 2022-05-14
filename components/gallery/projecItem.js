import { Modal, Box, Dialog, Button, Fade } from "@mui/material";
import React, { useRef, useEffect, useState } from "react";
import { Slider } from "./slider";
import CloseIcon from "@mui/icons-material/Close";

export const ProjectItem = (props) => {
  const [showModal, setShowModal] = useState(false);
  console.log("key = " + props.data.key);

  return (
    <div
      key={props.data.key}
      className="col-lg-4 col-md-4 col-sm-6 brand manipul design print"
    >
      <div className="h_gallery_item">
        <div className="g_img_item">
          <img className="img-fluid" src="img/gallery/project-1.jpg" alt="" />
          <div className="light" onClick={() => setShowModal(true)}>
            <img src="img/gallery/icon.png" alt="" />
          </div>
        </div>
        <div className="g_item_text">
          <h4>{props.data.title}</h4>
          <p>{props.data.desc}</p>
        </div>
      </div>
      <Modal open={showModal} onClose={() => setShowModal(true)}>
        <Fade in={showModal}>
          <Box className="sliderPArent">
            <Slider />
            <Button
              variant="contained"
              sx={{ justifySelf: "center" }}
              onClick={() => setShowModal(false)}
            >
              <CloseIcon />
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
