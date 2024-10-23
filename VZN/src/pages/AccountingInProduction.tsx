import Footer from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import { AccountingInProductionMenu } from "../components/main/accountingInProductionMenu/AccountingInProductionMenu"
import { THeaderStyle } from "../types"
const AccountingInProduction: React.FC = () => {
  const headerProps: THeaderStyle = { style: ["border", "backgroundColor"] }
  function headerRenderProps(): React.ReactNode {
    return <h1>Учет в производстве</h1>
  }
  return (
    <>
      <Header render={() => headerRenderProps()} headerProps={headerProps} />
      <AccountingInProductionMenu />
      <Footer />
    </>
  )
}

export default AccountingInProduction
