import React from "react"
import { TIconProps } from "../../types"
const PrevPageIcon: React.FC<TIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#BCBABF"
      d="M11.87 5.558 8.435 9l3.435 3.443-1.057 1.057-4.5-4.5 4.5-4.5 1.057 1.058Z"
    />
  </svg>
)
export default PrevPageIcon
