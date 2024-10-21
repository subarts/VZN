import React from "react"
import style from "./icons.module.css"
import { TIconProps } from "../../types"
const WarehouseIcon: React.FC<TIconProps> = ({ className, ...props }) => {
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
        fill="#000"
        d="M5.578 11.225h3.506v2.925H5.578v-2.925Zm0 6.816h3.506v-2.925H5.578v2.925Zm0 3.88h3.506v-2.924H5.578v2.925Zm4.547-3.88h3.497v-2.925h-3.506v2.925h.009Zm0 3.88h3.497v-2.924h-3.506v2.925h.009Zm4.547-2.924v2.925h3.506v-2.925h-3.506Zm9.075-11.41L11.869 2 0 7.606l.74 1.547 1.51-.722v13.5h1.706V8.375H19.8V21.95h1.706V8.45l1.51.703.73-1.566Z"
      />
    </svg>
  )
}

export default WarehouseIcon
