import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#9DB29D"
      d="M6 18.77a.483.483 0 0 1-.356-.145.485.485 0 0 1-.144-.357c0-.141.048-.26.144-.355A.485.485 0 0 1 6 17.769h1.115V9.846c0-1.306.414-2.455 1.24-3.447A5.271 5.271 0 0 1 11.5 4.546V4c0-.278.097-.514.291-.708A.961.961 0 0 1 12.498 3c.277 0 .513.097.709.292.195.194.293.43.293.708v.546A5.272 5.272 0 0 1 16.644 6.4c.827.992 1.24 2.14 1.24 3.447v7.923H19c.142 0 .26.048.356.144a.484.484 0 0 1 .144.357c0 .142-.048.26-.144.356a.484.484 0 0 1-.356.143H6Zm6.496 2.614c-.445 0-.825-.158-1.14-.474a1.559 1.559 0 0 1-.472-1.14h3.232c0 .447-.16.828-.476 1.143a1.564 1.564 0 0 1-1.144.471Zm-4.38-3.615h8.768V9.846c0-1.215-.426-2.25-1.28-3.104-.854-.854-1.889-1.28-3.104-1.28s-2.25.426-3.104 1.28c-.854.854-1.28 1.889-1.28 3.104v7.923Z"
    />
  </Svg>
)
export default SvgComponent
