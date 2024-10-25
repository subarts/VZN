import React from "react"
import { useParams } from "react-router-dom"
import { boOperations } from "../api/boOperations"
import BottomSheet from "../components/bottomSheet/BottomSheet"
import Footer from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import CloseIcon from "../components/icons/CloseIcon"
import VerticalIcon from "../components/icons/VerticalIcon"
import { AboutVZN } from "../components/InfoAboutVZN/AboutVZN"
import { ViewingTheComposition } from "../components/modalViewingTheComposition/mainTheComposition/ViewingComposition"
import { useStore } from "../store/Store"
import { THeaderStyle } from "../types"
import style from "./infoAboutVZN.module.css"
import ModalConfirmOperation from "../components/modalConfirmOperation/ModalConfirmOperation"

interface IBoOperations {
  Botype: number
  Code: number
  CurrentState: number
  NextState: number
  name: string
}

type TVisibleModal = "aboutVZN" | "viewingComposition" | "confirmOperation"
export const InfoAboutVZN = () => {
  const [visibleModalType, setVisibleModalType] = React.useState<TVisibleModal>(
    "aboutVZN"
  )
  const [isBottomSheet, setIsBottomSheet] = React.useState<boolean>(false)
  const headerProps: THeaderStyle =
    visibleModalType === "aboutVZN"
      ? { style: "" }
      : { style: ["border", "justifyStartH1"] }
  const { findVzn, listVzn, addBoOperation } = useStore((state) => state)
  const [boOperationsState, setBoOperationsState] = React.useState<
    IBoOperations[]
  >([])
  const code: number = Number(useParams().numberUnicCodeVzn)
  const title: string = findVzn(code)
  const isConsignment = window.location.pathname.includes("/ListConsignment")
  const itemVzn = React.useMemo(
    () =>
      listVzn.filter((el) => {
        if (!code) return
        if (el.Code === code) return el
        return null
      })[0],
    []
  )

  React.useEffect(() => {
    if (!isBottomSheet) return
    async function bottomSheetOperations() {
      const bottomSheetChildrens = await boOperations(itemVzn.bo.BoCode)
      setBoOperationsState(bottomSheetChildrens)
    }
    bottomSheetOperations()
  }, [isBottomSheet])

  function handleClickOperation(e: React.MouseEvent<HTMLUListElement>) {
    const elem = e.target as HTMLElement
    if (!elem) return
    if (elem.tagName === "LI" && elem.textContent) {
      addBoOperation(elem.textContent)
      setVisibleModalType("confirmOperation")
      setIsBottomSheet(false)
    }
  }

  function headerRenderProps(): React.ReactNode {
    return (
      <h1>
        {visibleModalType !== "aboutVZN" ? (
          <CloseIcon
            className=""
            onClick={() => setVisibleModalType("aboutVZN")}
          />
        ) : null}
        {visibleModalType === "aboutVZN"
          ? `ВЗН №${title} (${isConsignment ? "Расход" : "Приход"})`
          : visibleModalType === "viewingComposition"
          ? `Элемент ВЗН №${title}`
          : "Операция"}
        {visibleModalType === "aboutVZN" ? (
          <VerticalIcon onClick={() => setIsBottomSheet(true)} />
        ) : null}
      </h1>
    )
  }

  return (
    <>
      <Header render={() => headerRenderProps()} headerProps={headerProps} />

      {visibleModalType === "aboutVZN" ? (
        <AboutVZN setVisibleModalType={setVisibleModalType} />
      ) : visibleModalType === "viewingComposition" ? (
        <ViewingTheComposition />
      ) : (
        <ModalConfirmOperation />
      )}

      <Footer />

      {isBottomSheet ? (
        <BottomSheet visible={setIsBottomSheet}>
          <header className={style.headerBottomSheet}>
            <div>
              <h3 className={style.headerTitle}>Информация о БО</h3>
              <p className={style.info}>Отображать доп. информацию о БО</p>
            </div>
            <label className={style.switch}>
              <input type="checkbox" />
              <span className={`${style.slider} ${style.round}`}></span>
            </label>
          </header>
          <ul className={style.listOperations} onClick={handleClickOperation}>
            {boOperationsState.map((item) => (
              <li key={item.Code}>{item.name}</li>
            ))}
          </ul>
        </BottomSheet>
      ) : null}
    </>
  )
}
