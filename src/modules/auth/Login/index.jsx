import React from "react";
import Loadable from "../../../components/Loadable";

export default Loadable(() => import("./view"), { fallback: <h1>Loading</h1> });
