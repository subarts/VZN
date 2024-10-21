import { Menu } from "../components/main/menu/Menu"
import Footer from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import React from "react"
import { THeaderStyle } from "../types"

const Home: React.FC = () => {
  const headerProps: THeaderStyle = { style: ["border", "backgroundColor"] }
  function headerRenderProps(): React.ReactNode {
    return <h1>Меню</h1>
  }
  return (
    <>
      <Header render={() => headerRenderProps()} headerProps={headerProps} />
      <Menu />

      <Footer />
    </>
  )
}

export default Home
