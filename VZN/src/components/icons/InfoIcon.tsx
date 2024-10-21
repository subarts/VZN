import React from "react"
import style from "./icons.module.css"
import { TIconProps } from "../../types"
const InfoIcon: React.FC<TIconProps> = ({ className, ...props }) => {
  return (
    <svg
      className={style[className]}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          stroke="#000"
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
        />
        <path stroke="#000" strokeLinecap="round" d="M12 17v-6" />
        <path fill="#000" d="M12 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default InfoIcon
