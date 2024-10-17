import React from "react"
import styles from "./header.module.css"
import { ReactSVG } from "react-svg"
import closeIcon from "../../assets/icons/close.svg"
import moreDefaultIcon from "../../assets/icons/moreDefault.svg"

type HeaderProps = {
  title: string
  style: Array<string>
}

const Header: React.FC<HeaderProps> = ({ title, style }) => {
  const headerStyles = style.map((el: string) => styles[el]).join(" ")
  return (
    <header className={headerStyles}>
      <h1>
        {<ReactSVG src={closeIcon} className="iconClose" />}
        {title}
      </h1>
      {<ReactSVG src={moreDefaultIcon} className="iconMoreDefault" />}
    </header>
  )
}

export default Header
