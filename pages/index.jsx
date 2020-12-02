/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import dynamic from "next/dynamic";

const BrowserComponent = dynamic(
  () => import("../src/components/BrowserComponent/BrowserComponent"),
  { ssr: false }
);
// import BrowserComponent from "../src/components/BrowserComponent/BrowserComponent";

const Pages = (props) => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: "containers.page",
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h1 sx={{ fontSize: 6, my: 0 }}>{props.title}</h1>
      <h2 sx={{ fontSize: 4, my: 0 }}>
        This is a really dope note taking app.
      </h2>
    </div>
    <BrowserComponent />
  </div>
);
export default Pages;

export async function getStaticProps(context) {
  console.log("getStaticProps", context);
  // get data from CMS
  return {
    props: {
      title: "Notes",
    },
  };
}
