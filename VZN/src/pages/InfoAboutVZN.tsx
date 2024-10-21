import React from "react"
import { Header } from "../components/header/Header"
import Footer from "../components/footer/Footer"
import { AboutVZN } from "../components/InfoAboutVZN/AboutVZN"
import { THeaderStyle } from "../types"
import { useParams } from "react-router-dom"

export const InfoAboutVZN = () => {
  const headerProps: THeaderStyle = { style: [""] }
  const { numberVzn } = useParams()

  function headerRenderProps(): React.ReactNode {
    return <h1>ВЗН №{numberVzn} (Расход)</h1>
  }

  return (
    <>
      <Header render={() => headerRenderProps()} headerProps={headerProps} />
      <AboutVZN />
      <Footer />
    </>
  )
}
