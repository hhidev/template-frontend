import * as React from "react";
import Icon from "@ant-design/icons";
import NasaSVG from "../assets/logo/nasa.svg";

interface Props {
  style?: React.CSSProperties;
}

const BrandLogo: React.FunctionComponent<Props> = props => (
  <Icon component={NasaSVG} {...props} />
);

export default BrandLogo;
