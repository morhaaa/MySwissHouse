import "../styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/router";
import "mapbox-gl/dist/mapbox-gl.css";
import Head from "next/head";

const progress = new ProgressBar({
  size: 4,
  color: "#94a3b8",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>My House</title>
        <meta name="description" content="First Swiss Real Estate" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
