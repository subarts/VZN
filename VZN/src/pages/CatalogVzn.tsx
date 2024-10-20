import Button from "../components/button/Button"
import Footer from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import ModalFilterVzn from "../components/modalFilterVzn/ModalFilterVzn"
import OptionIcon from "../components/icons/OptionIcon"
import PLusIcon from "../components/icons/PlusIcon"
import Consigment from "../components/consigment/Consigment"
import { useState } from "react"
import { THeaderStyle } from "../types"
import CloseIcon from "../components/icons/CloseIcon"
const CatalogVzn = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(true)
  const headerProps: THeaderStyle = isVisibleModal
    ? { style: ["border", "justifyStartH1"] }
    : { style: "" }
  function headerRenderProps(): React.ReactNode {
    return !isVisibleModal ? (
      <h1>
        ВЗН УП (Расход)
        <div className="listButtons">
          <Button
            onClick={() => setIsVisibleModal(true)}
            children={
              <>
                <OptionIcon className="" />
                Поиск
              </>
            }
            size={"Small"}
            className={"smallButtonText"}
          />
          <Button
            children={
              <>
                <PLusIcon className={""} />
                Создать
              </>
            }
            size={"Small"}
            className={"smallButtonText"}
          />
        </div>
      </h1>
    ) : (
      <h1>
        <CloseIcon className="" onClick={() => setIsVisibleModal(false)} />
        Фильтр ВЗН УП
      </h1>
    )
  }
  return (
    <>
      <Header render={() => headerRenderProps()} headerProps={headerProps} />

      {isVisibleModal ? <ModalFilterVzn /> : <Consigment />}

      <Footer />
    </>
  )
}

export default CatalogVzn
