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
          <img className="img-fluid" src={props.data.img} alt="" />
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
          <Box >

            <Slider items={props.data.slides} />

            <Button
              // variant="contained"
              // sx={{ justifySelf: "center" }}
              onClick={() => setShowModal(false)}
            >
              <CloseIcon sx={{
                width: 50,
                height: 50,
                bgcolor: "rgb(240, 255, 255)",
                borderRadius: 20,
                "position": "fixed",
                "top": "2%",
                "left": "5%",
                "z-index": 1000000
              }} />

            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
