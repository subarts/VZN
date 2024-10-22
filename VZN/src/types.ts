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
