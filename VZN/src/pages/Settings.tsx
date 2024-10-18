import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import { SettingsMenu } from "../components/main/settingsMenu/SettingsMenu"

const Settings = () => {
  const headerProps = {
    title: "Настройки",
    style: ["header", "border", "backgroundColor"],
  }
  return (
    <>
      <Header {...headerProps} />
      <SettingsMenu />
      <Footer />
    </>
  )
}

export default Settings
