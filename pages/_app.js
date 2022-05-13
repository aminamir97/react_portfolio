import Head from "next/head";
import "../styles/globals.css";
import "../styles/animateamin.css";
// import { Animated } from "react-animated-css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

// import React from "react";
// import { useInView } from "react-hook-inview";
// import { motion } from "framer-motion";
// import "../styles/animateamin.css";
// import { Animated } from "react-animated-css";

// export default function Component() {
//   const [ref, isVisible] = useInView({
//     threshold: 1,
//     onEnter: () => {
//       console.log("entered");
//     },
//   });
//   const [isActive, setIsActive] = React.useState(false);

//   return (
//     <Animated
//       animateOnMount={true}
//       animationIn="bounceInLeft"
//       animationOut="fadeOut"
//     >
//       <div>asdasd</div>
//     </Animated>
//   );
// }
