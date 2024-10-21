import React from "react"
import style from "./icons.module.css"
import { TIconProps } from "../../types"

const TasksIcon: React.FC<TIconProps> = ({ className, ...props }) => {
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
        stroke="#020202"
        strokeLinecap="square"
        strokeMiterlimit={10}
        d="M20.09 5.81H2.91A1.91 1.91 0 0 0 1 7.72v11.45a1.91 1.91 0 0 0 1.91 1.91h17.18A1.91 1.91 0 0 0 22 19.17V7.72a1.91 1.91 0 0 0-1.91-1.91Z"
      />
      <path
        stroke="#020202"
        strokeMiterlimit={10}
        d="M13.41 12.54h4.77A3.81 3.81 0 0 0 22 8.68v-1a1.91 1.91 0 0 0-1.91-1.91H2.91A1.91 1.91 0 0 0 1 7.72v1a3.81 3.81 0 0 0 3.82 3.82h8.59Z"
      />
      <path
        stroke="#020202"
        strokeLinecap="square"
        strokeMiterlimit={10}
        d="M11.5 11.54v1.91M15.32 5.81H7.68L8.64 2h5.72l.96 3.81Z"
      />
    </svg>
  )
}
export default TasksIcon
