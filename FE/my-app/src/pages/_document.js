import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="assets/css/fontawesome.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/animated.css" />
        <link rel="stylesheet" href="assets/css/owl.css" />
        <link rel="shortcut icon" href="assets/images/short_cut_icon.jpg" />
        <link rel="stylesheet" href="vendor/fontawesome-free-6.2.1-web/css/all.css"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/js/owl-carousel.js"></script>
        {/* <script src="assets/js/animation.js"></script> */}
        {/* <script src="assets/js/imagesloaded.js"></script> */}
        <script src="assets/js/templatemo-custom.js"></script>
      </body>
    </Html>
  )
}


