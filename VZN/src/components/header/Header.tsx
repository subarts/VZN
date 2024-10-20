import React from "react"
import styles from "./header.module.css"
import { THeaderStyle } from "../../types"
type THeaderProps = {
  render: () => React.ReactNode
  headerProps?: THeaderStyle
}
export const Header: React.FC<THeaderProps> = ({ render, headerProps }) => {
  const headerStyles = Array.isArray(headerProps?.style)
    ? headerProps?.style?.map((el: string) => styles[el]).join(" ")
    : ""
  return (
    <header className={styles.header + " " + headerStyles}>{render()}</header>
  )
}
