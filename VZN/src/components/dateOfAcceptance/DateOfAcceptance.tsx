import style from "./DateOfAcceptance.module.css"
export const DateOfAcceptance = () => {
  return (
    <>
      <fieldset className={style.dateForm}>
        <legend>Дата принятия (период)</legend>
        <input type="date" className={style.inputFilter} />-{" "}
        <input type="date" className={style.inputFilter} />
      </fieldset>
    </>
  )
}
