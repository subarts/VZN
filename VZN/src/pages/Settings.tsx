import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import { SettingsMenu } from "../components/main/settingsMenu/SettingsMenu"

const Settings = () => {
  return (
    <>
      <Header title={"Настройки"} isBorder={true} isBackgroundColor={true} />
      <SettingsMenu />
      <Footer />
    </>
  )
}

export default Settings
