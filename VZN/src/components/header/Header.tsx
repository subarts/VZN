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
  const headerStyles: Array<string | boolean | undefined> = [
    styles.header,
    isBorder && styles.border,
    isBackgroundColor && styles.backgroundColor,
    isFilter && styles.filter__vzn,
  ]
  return (
    <header className={headerStyles.join(" ")}>
      <h1>
        {isCloseIcon && <ReactSVG src={closeIcon} className="icon__close" />}
        {title}
      </h1>
      {isMoreDefaultIcon && (
        <ReactSVG src={moreDefaultIcon} className="icon__moreDefault" />
      )}
    </header>
  )
}

export default Header
