import style from "./icons.module.css"
const ArrowBack = ({ className }) => {
  return (
    <svg
      className={style[className]}
      xmlns="http://www.w3.org/2000/svg"
      width={33}
      height={24}
      fill="none"
    >
      <path
        fill="#000"
        d="M24.667 11h-12.17l5.59-5.59L16.667 4l-8 8 8 8 1.41-1.41-5.58-5.59h12.17v-2Z"
      />
    </svg>
  )
}

export default ArrowBack