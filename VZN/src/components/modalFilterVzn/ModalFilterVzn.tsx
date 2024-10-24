import Button from "../button/Button"
import { DateOfAcceptance } from "../folderSelect.module.css/DateOfAcceptance"
import Input from "../input/Input"
import style from "./modalFilterVzn.module.css"
import { TListRequest } from "../../types"
import { useState } from "react"
import { ConsignmentsVzn } from "../../api/ConsignmentsVzn"
import { TListVznPropsItem } from "../../types"

import { useStore } from "../../store/Store"
import FolderInput from "../folderSelect/FolderSelect"

type TFuncVoid = {
  filterListVzn: (e: Array<TListVznPropsItem>) => void
}
const ModalFilterVzn: React.FC<TFuncVoid> = ({ filterListVzn }) => {
  const [bodyRequest, setBodyRequest] = useState<TListRequest>({
    Num: "50022%",
    Sender: "",
    Receiver: "",
    StartArrivalMoveDate: "",
    endArrivalMoveDate: "",
  })

  const { addVzn } = useStore((state) => state)
  const requestVzn = async (body: TListRequest): Promise<void> => {
    const result = await ConsignmentsVzn(body)
    filterListVzn(result)
    addVzn(result)
  }

  function getList(): void {
    requestVzn(bodyRequest)
  }
  function addStartDateBodyrequest(date: string): void {
    setBodyRequest({ ...bodyRequest, StartArrivalMoveDate: date })
  }
  function addEndDateBodyrequest(date: string): void {
    setBodyRequest({ ...bodyRequest, endArrivalMoveDate: date })
  }
  function addSender(sender: string): void {
    setBodyRequest({ ...bodyRequest, Sender: sender })
  }
  function addReceiver(sender: string): void {
    setBodyRequest({ ...bodyRequest, Receiver: sender })
  }
  const addDates: Array<(date: string) => void> = [
    addStartDateBodyrequest,
    addEndDateBodyrequest,
  ]
  return (
    <main className={style.main}>
      <div className={style.listInput}>
        <Input
          legendText="Номер ВЗН"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setBodyRequest({
              ...bodyRequest,
              Num: e.target.value /*+ "%" для поиска по маске*/,
            })
          }
        />
        <FolderInput legend="Отправитель" addToBodyRequest={addSender} />
        <FolderInput legend="Получатель" addToBodyRequest={addReceiver} />
        <DateOfAcceptance addDates={addDates} />
      </div>
      <div className="listButton">
        <Button size={"Regular"} onClick={getList}>
          Поиск
        </Button>
        <Button shape={"Round"} color={"TransparentWithBorder"}>
          Отмена
        </Button>
      </div>
    </main>
  )
}

export default ModalFilterVzn
