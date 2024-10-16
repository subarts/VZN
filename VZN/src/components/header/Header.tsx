import React from "react"
import styles from "./header.module.css"
import { ReactSVG } from "react-svg"
import closeIcon from "../../assets/icons/close.svg"
import moreDefaultIcon from "../../assets/icons/moreDefault.svg"
import { HeaderProps } from "../../types"
const Header: React.FC<HeaderProps> = ({
  title,
  isBorder,
  isBackgroundColor,
  isFilter,
  isCloseIcon,
  isMoreDefaultIcon,
}) => {
  const headerStyles: string = [
    styles.header,
    isBorder && styles.border,
    isBackgroundColor && styles.backgroundColor,
    isFilter && styles.filterVzn,
  ].join(" ")
  return (
    <header className={headerStyles}>
      <h1>
        {isCloseIcon && <ReactSVG src={closeIcon} className="iconClose" />}
        {title}
      </h1>
      {isMoreDefaultIcon && (
        <ReactSVG src={moreDefaultIcon} className="iconMoreDefault" />
      )}
    </header>
  )
}

export default Header
