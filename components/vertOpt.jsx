import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={3}
    viewBox="0 0 3 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.4 8.39998C2.1732 8.39998 2.8 7.77317 2.8 6.99998C2.8 6.22678 2.1732 5.59998 1.4 5.59998C0.626801 5.59998 0 6.22678 0 6.99998C0 7.77317 0.626801 8.39998 1.4 8.39998Z"
      fill="#2E2F2E"
    />
    <Path
      d="M1.4 14C2.1732 14 2.8 13.3732 2.8 12.6C2.8 11.8268 2.1732 11.2 1.4 11.2C0.626801 11.2 0 11.8268 0 12.6C0 13.3732 0.626801 14 1.4 14Z"
      fill="#2E2F2E"
    />
    <Path
      d="M1.4 2.8C2.1732 2.8 2.8 2.1732 2.8 1.4C2.8 0.626801 2.1732 0 1.4 0C0.626801 0 0 0.626801 0 1.4C0 2.1732 0.626801 2.8 1.4 2.8Z"
      fill="#2E2F2E"
    />
  </Svg>
);
export default SVGComponent;
