import { useEffect, useState } from "react"
import Button from "../components/button/Button"
import Consigment from "../components/consigment/Consigment"
import Footer from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import CloseIcon from "../components/icons/CloseIcon"
import OptionIcon from "../components/icons/OptionIcon"
import PLusIcon from "../components/icons/PlusIcon"
import ModalFilterVzn from "../components/modalFilterVzn/ModalFilterVzn"
import ModalCreateVZN from "../components/modalCreateVZN/ModalCreateVZN"
import { THeaderStyle } from "../types"
import { ConsignmentsVzn } from "../api/ConsignmentsVzn"
import { TListVznPropsItem } from "../types"
import { TListRequest } from "../types"
type TVisibleModal = "create" | "search"

const CatalogVzn = () => {
  const [visibleModalType, setVisibleModalType] = useState<TVisibleModal | "">(
    "search"
  )
  /* начальное состояние добавлено тк без фильтров приходит массив на 9к+ элементов  */

  const [bodyRequest, setBodyRequest] = useState<TListRequest>({
    Num: "500223%",
    Sender: "",
    Receiver: "",
    StartArrivalMoveDate: "",
    endArrivalMoveDate: "",
  })

  const [listVzn, setListVzn] = useState<Array<TListVznPropsItem>>([])
  useEffect(() => {
    const requestVzn = async () => {
      const result = await ConsignmentsVzn(bodyRequest)

      setListVzn(result)
    }
    requestVzn()
  }, [])
  function filterListVzn(list) {
    setListVzn(list)
    setVisibleModalType("")
  }
  const isConsignment =
    window.location.pathname === "/ListConsignment" /* флаг на расход приход */
  const headerProps: THeaderStyle = visibleModalType
    ? { style: ["border", "justifyStartH1"] }
    : { style: "" }

  function headerRenderProps(): React.ReactNode {
    return !visibleModalType ? (
      <h1>
        ВЗН УП ({isConsignment ? "Расход" : "Приход"})
        <div className="listButtons">
          <Button
            onClick={() => setVisibleModalType("search")}
            size={"Small"}
            className={"smallButtonText"}
          >
            <>
              <OptionIcon className="" />
              Поиск
            </>
          </Button>
          {isConsignment && (
            <Button
              onClick={() => setVisibleModalType("create")}
              size={"Small"}
              className={"smallButtonText"}
            >
              <>
                <PLusIcon />
                Создать
              </>
            </Button>
          )}
        </div>
      </h1>
    ) : (
      <h1>
        <CloseIcon className="" onClick={() => setVisibleModalType("")} />
        {visibleModalType === "search"
          ? "Фильтр ВЗН УП"
          : "Создание ВЗН (Расход)"}
      </h1>
    )
  }
  return (
    <>
      <Header render={() => headerRenderProps()} headerProps={headerProps} />

      {visibleModalType === "search" ? (
        <ModalFilterVzn filterListVzn={filterListVzn} />
      ) : visibleModalType === "create" ? (
        <ModalCreateVZN />
      ) : (
        <Consigment listVzn={listVzn} />
      )}

      <Footer />
    </>
  )
}

export default CatalogVzn
