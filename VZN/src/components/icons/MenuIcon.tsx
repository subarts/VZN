import style from "./icons.module.css"
const MenuIcon = ({ className }) => {
  return (
    <svg
      className={style[className]}
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      fill="none"
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M3.333 8V6h18v2h-18Zm0 5h18v-2h-18v2Zm0 5h18v-2h-18v2Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default MenuIcon
