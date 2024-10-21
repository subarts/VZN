import { THeaderStyle } from "../../types"
import Footer from "../footer/Footer"
import { Header } from "../header/Header"
import { Scan } from "./mainScan/Scan"

const ModalScan = () => {
    const headerProps: THeaderStyle = { style: ["header", "border"] }
  function headerRenderProps(): React.ReactNode {
    return <h1>Сканировать номер объекта</h1>
  }
    return (
      <>
        <Header render={() => headerRenderProps()} {...headerProps} />
        <Scan />
        <Footer />
      </>
    )
  }
  
  export default ModalScan