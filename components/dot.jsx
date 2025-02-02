import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={4}
    height={4}
    viewBox="0 0 4 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.89947 3.89946C2.94851 3.89946 3.79893 3.04904 3.79893 1.99999C3.79893 0.950944 2.94851 0.100525 1.89947 0.100525C0.850419 0.100525 0 0.950944 0 1.99999C0 3.04904 0.850419 3.89946 1.89947 3.89946Z"
      fill="#3A643B"
    />
  </Svg>
);
export default SVGComponent;
