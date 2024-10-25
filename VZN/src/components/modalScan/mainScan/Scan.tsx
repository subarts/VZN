import { SetStateAction, useState } from "react"
import Button from "../../button/Button"
import Input from "../../input/Input"
import styles from "../mainScan/scan.module.css"
import Select from "../../select/Select"

export const Scan = () => {
  const [inputValue, setInputValue] = useState("")
  const isButtonDisabled = inputValue.length < 10

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> }
  }) => {
    setInputValue(e.target.value)
  }

  return (
    <main className={styles.main}>
      <p className={styles.text}>
        Сканируйте штрихкод с номером объекта или введите его вручную.
      </p>
      <Input
        placeHolder={``}
        legendText="Номер объекта"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Select
        legend="Тип объекта БО"
        disabled={inputValue.length < 10}
        className={`${styles.selectFieldset} ${styles.selectFilter} ${
          inputValue.length < 10 ? styles.disabledSelect : styles.selectFieldset
        }`}
      />
      <div className={styles.buttons}>
        <Button
          disabled={isButtonDisabled}
          className={isButtonDisabled ? "button:disabled" : ""}
          type="submit"
          color="Blue"
          size="Regular"
          children="Перейти"
        />
        <Button type="submit" color="TransparentWithBorder" children="Отмена" />
      </div>
    </main>
  )
}
