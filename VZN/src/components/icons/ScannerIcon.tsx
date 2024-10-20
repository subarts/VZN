import style from "./icons.module.css"
const ScannerIcon = ({ className }) => {
  return (
    <svg
      className={style[className]}
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={24}
      fill="none"
    >
      <path
        fill="#000"
        d="M26.5 4v3.5h-1V4A1.502 1.502 0 0 0 24 2.5h-3.5v-1H24A2.503 2.503 0 0 1 26.5 4ZM8 21.5A1.502 1.502 0 0 1 6.5 20v-3.5h-1V20A2.503 2.503 0 0 0 8 22.5h3.5v-1H8ZM25.5 20a1.502 1.502 0 0 1-1.5 1.5h-3.5v1H24a2.503 2.503 0 0 0 2.5-2.5v-3.5h-1V20ZM6.5 4A1.502 1.502 0 0 1 8 2.5h3.5v-1H8A2.503 2.503 0 0 0 5.5 4v3.5h1V4Zm7 14.5v-13h-1v13h1Zm-4-13v13h2v-13h-2Zm8 13v-13h-2v13h2Zm3-13v13h2v-13h-2Zm-2 0v13h1v-13h-1Z"
      />
    </svg>
  )
}

export default ScannerIcon
