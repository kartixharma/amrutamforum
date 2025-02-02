import * as React from "react";
import Svg, { Circle } from "react-native-svg";
const SVGComponent = ({circleProps, ...props}) => (
  <Svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle
    {...circleProps}
      fill="#CFEBCF"
      fillOpacity={0.5}
    />
  </Svg>
);
export default SVGComponent;
