import Footer from "../footer/Footer"
import Header from "../header/Header"
import { Scan } from "./mainScan/Scan"

const ModalScan = () => {
    const headerProps = {
      title: "Сканировать номер объекта",
      style: ["header", "border"],
    }
    return (
      <>
        <Header {...headerProps} />
        <Scan />
        <Footer />
      </>
    )
  }
  
  export default ModalScan