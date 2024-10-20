import Footer from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import { SettingsMenu } from "../components/main/settingsMenu/SettingsMenu"
import { THeaderStyle } from "../types"
const Settings: React.FC = () => {
  const headerProps: THeaderStyle = { style: ["border", "backgroundColor"] }
  function headerRenderProps(): React.ReactNode {
    return <h1>Настройки</h1>
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
