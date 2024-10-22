import style from "./DateOfAcceptance.module.css"
type TFuncVoid = {
  addDates: Array<(date: string) => void>
}
export const DateOfAcceptance: React.FC<TFuncVoid> = ({ addDates }) => {
  return (
    <>
      <fieldset className={style.dateForm}>
        <legend>Дата принятия (период)</legend>
        <input
          type="date"
          className={style.inputFilter}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            addDates[0](e.target.value)
          }
        />
        -{" "}
        <input
          type="date"
          className={style.inputFilter}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            addDates[1](e.target.value)
          }
        />
      </fieldset>
    </>
  )
}
