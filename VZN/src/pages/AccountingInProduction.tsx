import Footer from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import { AccountingInProductionMenu } from "../components/main/accountingInProductionMenu/AccountingInProductionMenu"
const AccountingInProduction = () => {
  const headerProps = { style: ["border", "backgroundColor"] }
  function headerRenderProps() {
    return <h1>Меню</h1>
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
