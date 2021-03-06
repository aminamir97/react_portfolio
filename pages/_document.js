import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>

        
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
        <link rel="stylesheet" href="css/bootstrap.css" />
        <link rel="stylesheet" href="vendors/linericon/style.css" />
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        <link
          rel="stylesheet"
          href="vendors/owl-carousel/owl.carousel.min.css"
        />
        <link rel="stylesheet" href="vendors/lightbox/simpleLightbox.css" />
        <link rel="stylesheet" href="vendors/nice-select/css/nice-select.css" />
        <link rel="stylesheet" href="vendors/animate-css/animate.css" />
        <link rel="stylesheet" href="vendors/popup/magnific-popup.css" />
        <link rel="stylesheet" href="vendors/flaticon/flaticon.css" />
        {/* <!-- main css --> */}
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/responsive.css" />
      </Head>
      
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
