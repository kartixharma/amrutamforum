import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M30.029 19.34 15.537 10.97a.779.779 0 0 0-1.168.676v16.736c0 .6.648.976 1.168.676l14.496-8.368a.782.782 0 0 0-.004-1.352Z"
    />
    <Path
      fill="#fff"
      d="M20 40C8.972 40 0 31.028 0 20S8.972 0 20 0s20 8.972 20 20-8.972 20-20 20Zm0-37.736C10.22 2.264 2.264 10.22 2.264 20c0 9.78 7.956 17.736 17.736 17.736 9.78 0 17.736-7.956 17.736-17.736 0-9.78-7.956-17.736-17.736-17.736Z"
    />
  </Svg>
)
export default SvgComponent
