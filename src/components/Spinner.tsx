import * as React from "react";
import { Spin } from "antd";

const Spinner: React.FunctionComponent = () => (
  <div style={{ textAlign: "center", padding: "3rem 5rem", marginTop: "3rem" }}>
    <Spin size="large" />
  </div>
);

export default Spinner;
