import React from "react"
import styles from "./header.module.css"
type THeaderStyle = {
  render: () => React.ReactNode
  headerProps?: { style: Array<string> | string | undefined }
}
export const Header: React.FC<THeaderStyle> = ({ render, headerProps }) => {
  const headerStyles = Array.isArray(headerProps?.style)
    ? headerProps?.style?.map((el: string) => styles[el]).join(" ")
    : ""
  return (
    <header className={styles.header + " " + headerStyles}>{render()}</header>
  )
}
