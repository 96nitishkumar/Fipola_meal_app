import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Box } from "@mui/material";
import loadingGif from "./assets/loading/loading.gif";
const LazyLoading = React.lazy(() => import("./App"));

const htmlImgElement = document.getElementById("lazyhtml");

if (htmlImgElement) {
  // htmlImgElement.classList.add("myClass");
  htmlImgElement.parentNode?.removeChild(htmlImgElement);
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense
      fallback={<Box component={"img"} alt="gif loading" src={loadingGif} />}
    >
      <LazyLoading />
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
