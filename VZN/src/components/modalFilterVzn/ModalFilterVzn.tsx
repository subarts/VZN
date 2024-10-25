import Button from "../button/Button"
import { DateOfAcceptance } from "../dateOfAcceptance/DateOfAcceptance"
import Input from "../input/Input"
import style from "./modalFilterVzn.module.css"
import { TListRequest } from "../../types"
import { useState } from "react"
import { ConsignmentsVzn } from "../../api/consignmentsVzn"

import { useStore } from "../../store/Store"
import FolderInput from "../folderSelect/FolderSelect"

type TVisibleModal = "create" | "search"
interface IModalFilterVznProps {
  setVisibleModalType: React.Dispatch<React.SetStateAction<"" | TVisibleModal>>
}

const ModalFilterVzn: React.FC<IModalFilterVznProps> = ({
  setVisibleModalType,
}) => {
  const [bodyRequest, setBodyRequest] = useState<TListRequest>({
    Num: "50022%",
    Sender: "",
    Receiver: "",
    StartArrivalMoveDate: "",
    endArrivalMoveDate: "",
  })
  console.log(bodyRequest)
  const { addVzn } = useStore((state) => state)

  const requestVzn = async (): Promise<void> => {
    const result = await ConsignmentsVzn(bodyRequest)
    addVzn(result)
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
        <Button
          size={"Regular"}
          onClick={() => {
            requestVzn()
            setVisibleModalType("")
          }}
        >
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
