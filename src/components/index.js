import React from "react";
import loadable from "../utils/loadable";
import Loader from "./Loader";

export const PopupModal = loadable(() => import("./modal/PopupModal"), {
  fallback: <Loader />,
});
