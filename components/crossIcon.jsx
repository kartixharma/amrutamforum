import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <Circle cx={15} cy={15} r={15} fill="#D9D9D9" />
    <Path
      fill="#000"
      d="M21.727 8.653a.97.97 0 0 0-1.415 0l-5.303 5.534-5.303-5.534a.97.97 0 0 0-1.414 0 1.076 1.076 0 0 0 0 1.476l5.303 5.534-5.303 5.534a1.076 1.076 0 0 0 0 1.476.97.97 0 0 0 1.414 0l5.303-5.534 5.303 5.534a.97.97 0 0 0 1.415 0c.39-.408.39-1.069 0-1.476l-5.304-5.534 5.304-5.534c.39-.407.39-1.068 0-1.476Z"
    />
  </Svg>
)
export default SvgComponent
