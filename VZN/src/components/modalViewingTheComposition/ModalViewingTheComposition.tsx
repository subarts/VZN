import React from "react"
import Footer from "../footer/Footer"
import { Header } from "../header/Header"
import { ViewingTheComposition } from "./mainTheComposition/ViewingComposition"

import { THeaderStyle } from "../../types"
const ModalViewingTheComposition = () => {
  const headerProps: THeaderStyle = { style: ["border", "backgroundColor"] }
  function headerRenderProps(): React.ReactNode {
    return <h1>Меню</h1>
  }

  return (
    <>
      <Header render={() => headerRenderProps()} headerProps={headerProps} />
      <ViewingTheComposition />
      <Footer />
    </>
  )
}

export default ModalViewingTheComposition
