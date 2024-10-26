import { THeaderStyle } from "../../types"
import Footer from "../footer/Footer"
import { Header } from "../header/Header"
import CloseIcon from "../icons/CloseIcon"
import { Scan } from "./mainScan/Scan"
import styles from '../modalScan/modalScan.module.css'
import { Link } from "react-router-dom"

const ModalScan = () => {
  const headerProps: THeaderStyle = { style: ["border", "justifyStartH1"] }

  function headerRenderProps(): React.ReactNode {
    return (
      <div className={styles.header}>
        <Link to='/menu'>
          <CloseIcon className='' />
        </Link>
        <h1>Сканировать номер объекта</h1>
      </div>
    )
  }

  return (
    <>
      <Header render={() => headerRenderProps()} headerProps={headerProps} />
      <Scan />
      <Footer />
    </>
  )
}

export default ModalScan
