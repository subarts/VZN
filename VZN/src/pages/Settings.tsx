import Footer from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import { SettingsMenu } from "../components/main/settingsMenu/SettingsMenu"

const Settings = () => {
  const headerProps = { style: ["border", "backgroundColor"] }
  function headerRenderProps() {
    return <h1>Меню</h1>
  }
  return (
    <>
      <Header render={() => headerRenderProps()} headerProps={headerProps} />
      <SettingsMenu />
      <Footer />
    </>
  )
}

export default Settings
