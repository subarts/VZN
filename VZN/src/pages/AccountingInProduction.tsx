import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import { AccountingInProductionMenu } from "../components/main/accountingInProductionMenu/AccountingInProductionMenu"
const AccountingInProduction = () => {
  const headerProps = {
    title: "Учет в производстве",
    style: ["header", "border", "backgroundColor"],
  }
  return (
    <>
      <Header {...headerProps} />
      <AccountingInProductionMenu />
      <Footer />
    </>
  )
}

export default AccountingInProduction
