import React from "react"
import style from "./icons.module.css"
import { TIconProps } from "../../types"

const CloseIcon: React.FC<TIconProps> = ({ className, ...props }) => {
  return (
    <svg
      className={style[className]}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <path
        fill="#49454F"
        d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"
      />
    </svg>
  )
}

export default CloseIcon
