import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import { AccountingInProductionMenu } from "../components/main/accountingInProductionMenu/AccountingInProductionMenu"
const AccountingInProduction = () => {
  return (
    <>
      <Header
        title={"Учёт в производстве"}
        isBorder={true}
        isBackgroundColor={true}
      />
      <AccountingInProductionMenu />
      <Footer />
    </>
  )
}

export default AccountingInProduction
