import React from "react"
import { TIconProps } from "../../types"
const NextPageIcon: React.FC<TIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#BCBABF"
      d="M6.63 12.443 10.065 9 6.63 5.558 7.687 4.5l4.5 4.5-4.5 4.5-1.057-1.057Z"
    />
  </svg>
)
export default NextPageIcon
