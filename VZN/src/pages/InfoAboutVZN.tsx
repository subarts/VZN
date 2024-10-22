import React from "react"
import { Header } from "../components/header/Header"
import Footer from "../components/footer/Footer"
import { AboutVZN } from "../components/InfoAboutVZN/AboutVZN"
import { THeaderStyle } from "../types"
import { useStore } from "../store/Store"
import { useParams } from "react-router-dom"
export const InfoAboutVZN = () => {
  const headerProps: THeaderStyle = { style: [""] }
  const { findVzn } = useStore((state) => state)
  const code: number = Number(useParams().numberUnicCodeVzn)
  const title: string = findVzn(code)
  function headerRenderProps(): React.ReactNode {
    return <h1>ВЗН №{title} (Расход)</h1>
  }

  return (
    <>
      <Header render={() => headerRenderProps()} headerProps={headerProps} />
      <AboutVZN />
      <Footer />
    </>
  )
}
