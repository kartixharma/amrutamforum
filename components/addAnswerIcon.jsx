import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={16}
    height={15}
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.05991 15.0001H0.522061C0.237466 15.0001 0 14.7626 0 14.478C0 14.1934 0.237466 13.9559 0.522061 13.9559H9.05991C9.3445 13.9559 9.58197 14.1934 9.58197 14.478C9.58197 14.7626 9.3445 15.0001 9.05991 15.0001Z"
      fill="black"
    />
    <Path
      d="M7.99696 13.7104C7.86445 13.7104 7.73104 13.6918 7.59853 13.6437C7.28548 13.5397 7.02934 13.3209 6.88704 13.0274C6.83013 12.9234 6.80167 12.8095 6.77321 12.6957L6.68783 12.2306C6.56421 11.5191 6.66915 10.7693 6.99109 10.1246L11.6869 0.808518C12.0471 0.087241 12.9391 -0.206233 13.6604 0.15395L14.5044 0.580842C15.2257 0.941025 15.5191 1.83306 15.159 2.55434L10.4631 11.8704C10.1403 12.5152 9.59957 13.047 8.9548 13.3689L8.5279 13.5779C8.35715 13.6633 8.16772 13.7105 7.97738 13.7105L7.99696 13.7104ZM13.0156 1.03619C12.8546 1.03619 12.7124 1.12157 12.6359 1.27365L7.94005 10.5897C7.71237 11.0353 7.63678 11.5573 7.73105 12.0411L7.81642 12.5063C7.87334 12.6388 8.00586 12.6868 8.09123 12.6388L8.51812 12.4298C8.96368 12.2119 9.33366 11.8419 9.56133 11.3955L14.2571 2.07941C14.3612 1.87041 14.2758 1.61427 14.0677 1.51022L13.2237 1.08333C13.1668 1.05487 13.1001 1.03619 13.0343 1.03619L13.0156 1.03619Z"
      fill="black"
    />
  </Svg>
);
export default SVGComponent;
