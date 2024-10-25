import React from "react"
import { TIconProps } from "../../types"

const PLusIcon: React.FC<TIconProps> = (props) => (
  <svg width={16} height={17} fill="none" {...props}>
    <path
      fill="#fff"
      d="M14 9.25H8.75v5.25h-1.5V9.25H2v-1.5h5.25V2.5h1.5v5.25H14v1.5Z"
    />
  </svg>
)

export default PLusIcon
