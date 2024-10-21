import Button from "../button/Button"
import { DateOfAcceptance } from "../dateOfAcceptance/DateOfAcceptance"
import Input from "../input/Input"
import style from "./modalFilterVzn.module.css"
import { TListRequest } from "../../types"
import { useState } from "react"
import { ConsignmentsVzn } from "../../api/ConsignmentsVzn"

const ModalFilterVzn = ({ filterListVzn }) => {
  const [bodyRequest, setBodyRequest] = useState<TListRequest>({
    Num: "50022%%",
    Sender: "",
    Receiver: "",
    StartArrivalMoveDate: "",
    endArrivalMoveDate: "",
  })

  const requestVzn = async (body: TListRequest): Promise<void> => {
    const result = await ConsignmentsVzn(body)
    filterListVzn(result)
  }

  function getList(): void {
    requestVzn(bodyRequest)
  }

  return (
    <main className={style.main}>
      <div className={style.listInput}>
        <Input
          legendText="Номер ВЗН"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setBodyRequest({ ...bodyRequest, Num: e.target.value + "%" })
          }
        />
        <Input
          legendText="Отправитель"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setBodyRequest({ ...bodyRequest, Sender: e.target.value })
          }
        />
        <Input
          legendText="Получатель"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setBodyRequest({ ...bodyRequest, Receiver: e.target.value })
          }
        />
        <DateOfAcceptance />
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
