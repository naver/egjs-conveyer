/* eslint-disable arrow-body-style */
import React, { useRef } from "react";

import styles from "./MainLogo.module.css";
import Scene from "scenejs";

const DISABLED_COLOR = "#999999";
const ITERATION_TIME = 4;

export default () => {
  const sceneRef = useRef<Scene | null>(null);

  React.useEffect(() => {
    const paths: SVGElement[] = [].slice.call(document.querySelectorAll("[data-style]"));

    paths.forEach(path => {
      path.style.cssText += path.getAttribute("data-style");
    });
    sceneRef.current = new Scene({
      ".mainLogoBorder": {
        0: "",
        0.5: "stroke-dashoffset: 0",
        [ITERATION_TIME - 0.5]: "stroke-dashoffset: 130.58",
        [ITERATION_TIME]: "",
        options: {
          direction: "alternate",
          iterationCount: 2,
          easing: "ease-in-out",
        },
      },
      ".mainLogoThumb": {
        0: "",
        0.5: "transform: translate(-50px)",
        [ITERATION_TIME - 0.5]: "transform: translate(50px)",
        [ITERATION_TIME]: "",
        options: {
          direction: "alternate",
          iterationCount: 2,
          easing: "ease-in-out",
        },
      },
      ".mainLogoPrev": {
        0: "",
        0.5: `fill: ${DISABLED_COLOR};stroke:${DISABLED_COLOR}`,
        1: "fill: #ffa000;stroke:#ffa000",
        [ITERATION_TIME]: "",
        options: {
          direction: "alternate",
          iterationCount: 2,
        },
      },
      ".mainLogoNext": {
        0: "",
        [ITERATION_TIME - 1]: "fill: #ffa000;stroke:#ffa000",
        [ITERATION_TIME - 0.5]: `fill: ${DISABLED_COLOR};stroke:${DISABLED_COLOR}`,
        [ITERATION_TIME]: "",
        options: {
          direction: "alternate",
          iterationCount: 2,
        },
      },
    }, {
      iterationCount: Infinity,
      selector: true,
    }).play();

    return () => {
      sceneRef.current.end();
    }
  }, []);
  return <div className="container main-logo-container mb-4">
    <div className={styles.mainLogoWrapper}>
      <svg width="100%" height="100%" viewBox="0 0 512 256" version="1.1" xmlns="http://www.w3.org/2000/svg" data-style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-miterlimit:2;">
        <path className="mainLogoBorder" d="M356.564,88.396l-201.128,0c0,0 -39.436,0 -39.436,39.604c-0,39.604 39.436,39.604 39.436,39.604l201.128,-0c-0,-0 39.436,-0 39.436,-39.604c0,-39.604 -39.436,-39.604 -39.436,-39.604Z" data-style="fill:none;stroke:#787878;stroke-width:10.42px;stroke-dasharray:39.79,25.5,0,0;stroke-dashoffset:0;" />
        <path className="mainLogoThumb" d="M301.826,106.598l-91.652,0c0,0 -20.331,0 -20.331,21.402c-0,21.402 20.331,21.402 20.331,21.402l91.652,-0c-0,-0 20.331,-0 20.331,-21.402c0,-21.402 -20.331,-21.402 -20.331,-21.402Z" data-style="fill:#787878;" />
        <path className="mainLogoPrev" d="M50.706,128l35,-20l-0,40l-35,-20Z" data-style="cursor:pointer;fill:#ffa000;stroke:#ffa000;stroke-width:8.33px;stroke-linejoin:round;" onClick={() => {
          const scene = sceneRef.current;
          const time = scene.getIterationTime();

          if (time < ITERATION_TIME) {
            scene.setTime(Math.max(ITERATION_TIME + 0.5, ITERATION_TIME * 2 - time));
          }
        }} />
        <path className="mainLogoNext" d="M461.294,128l-35,20l0,-40l35,20Z" data-style="cursor:pointer;fill:#ffa000;stroke:#ffa021;stroke-width:8.33px;stroke-linejoin:round;" onClick={() => {
          const scene = sceneRef.current;
          const time = scene.getIterationTime();

          if (time > ITERATION_TIME) {
            scene.setTime(Math.min(ITERATION_TIME - 0.5, ITERATION_TIME * 2 - time));
          }
        }} />
      </svg>
    </div>
    <h1 className={styles.title}>Conveyer</h1>
  </div>;
};
