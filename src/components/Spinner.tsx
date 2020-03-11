import * as React from "react";
import { Spin } from "antd";

const Spinner: React.FunctionComponent = () => (
  <div style={{ textAlign: "center", padding: "30px 50px", marginTop: "30px" }}>
    <Spin size="large" />
  </div>
);

export default Spinner;
