import React from "react"
import { TIconProps } from "../../types"

const OptionIcon: React.FC<TIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M7.5 15.5v-5H9v1.75h6v1.5H9v1.75H7.5ZM1 13.75v-1.5h5v1.5H1ZM4 11V9.25H1v-1.5h3V6h1.5v5H4Zm3-1.75v-1.5h8v1.5H7Zm3-2.75v-5h1.5v1.75H15v1.5h-3.5V6.5H10ZM1 4.75v-1.5h8v1.5H1Z"
    />
  </svg>
)

export default OptionIcon
