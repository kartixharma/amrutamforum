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
      d="M6.5 19h3.692v-5.077c0-.229.078-.42.232-.575a.782.782 0 0 1 .576-.232h3c.229 0 .42.077.575.232a.782.782 0 0 1 .233.575V19H18.5v-8.692a.578.578 0 0 0-.067-.28.745.745 0 0 0-.183-.22L12.866 5.75a.537.537 0 0 0-.366-.134.537.537 0 0 0-.366.134L6.75 9.808a.745.745 0 0 0-.183.22.58.58 0 0 0-.067.28V19Zm-1 0v-8.692a1.603 1.603 0 0 1 .646-1.292l5.385-4.077c.282-.216.604-.323.966-.323s.686.107.972.323l5.385 4.077a1.603 1.603 0 0 1 .646 1.292V19a.96.96 0 0 1-.299.701.96.96 0 0 1-.701.299h-3.884a.781.781 0 0 1-.576-.232.782.782 0 0 1-.232-.576v-5.076h-2.616v5.076c0 .23-.077.42-.232.576a.781.781 0 0 1-.576.232H6.5a.96.96 0 0 1-.701-.299A.96.96 0 0 1 5.5 19Z"
    />
  </Svg>
)
export default SvgComponent
