export type LogPass = {
  login: string
  password: string
}
export type THeaderStyle = {
  style: Array<string> | string | undefined
}
export type TListRequest = {
  Sender: string
  Num: string
  Receiver: string
  StartArrivalMoveDate: string
  endArrivalMoveDate: string
}

export type TDivisions = {
  BeginDate: string
  Code: number
  DivisionParentCode: number
  EndDate: string
  Name: string
  Sign: string
  Type: number
  WSCode: string
}

export type TListVznPropsItem = {
  ArrivalMoveDate: string
  Code: number
  DocDate: string
  LeaveMoveDate: string
  Num: string
  Receiver: number
  ReceiverSection: number
  Sender: number
  SenderSection: number
  bo: {
    BoCode: number
    State: number
    so: {
      attrs: [
        {
          Code: number
          IsNull: boolean
          MeasCode: number
          Value: number
        },
        {
          Code: number
          IsNull: boolean
          MeasCode: number
          Value: number
        },
        {
          Code: number
          IsNull: boolean
          MeasCode: number
        }
      ]
    }
  }
}

export interface InfoCardsVZNInterface {
  ArrivalCardCode: number
  ArrivalCardType: number
  ArrivalQty: number
  ArticleOfExpense: number
  Code: number
  InplantCode: number
  LeaveCardCode: number
  LeaveQty: number
  LotCode: number
  OrderCode: number
}

export interface IDepotCards {
  Code: number
  DivCode: number
  IsLotMoving: boolean
  MeasCode: number
  Notice: string
  Num: string
  Remainder: number
  StockobjCode: number
}

export interface INameCardResult {
  BaseCode: number
  BaseType: number
  Code: number
  Description: string
  KoType: number
  MeasCode: number
  Name: string
  NomNum: string
  Notice: string
  Sign: string
}
export type TIconProps = {
  className?: string
  props?: React.SVGProps<SVGSVGElement>
}
