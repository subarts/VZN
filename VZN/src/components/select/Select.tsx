import { useState } from "react"
import styles from "../select/Select.module.css"

type SelectProps = {
  legend: string
  className?: string
  disabled: boolean
}

export default function CustomSelect({
  legend,
  className = "",
  disabled,
}: SelectProps) {
  const [selectedValue, setSelectedValue] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [optionSelected, setOptionSelected] = useState(false)

  const options = [
    { value: "expense", label: "Внутризаводская накладная УП (Расход)" },
    { value: "income", label: "Внутризаводская накладная УП (Приход)" },
  ]

  const handleOptionClick = (value: string) => {
    setSelectedValue(value)
    setOptionSelected(true)
    setIsOpen(false)
  }

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen)
    }
  }

  return (
    <fieldset
      className={`${styles.selectFieldset} ${
        disabled ? styles.selectDisabled : ""
      } ${className}`}
    >
      {legend && (
        <legend
          className={`${styles.selectLegend} ${
            disabled ? styles.legendDisabled : ""
          }`}
        >
          {legend}
        </legend>
      )}
      <div className={styles.customSelectWrapper}>
        <div
          className={`${styles.customSelect} ${
            disabled ? styles.disabledSelect : ""
          } ${optionSelected ? styles.noPadding : ""}`}
          onClick={toggleDropdown}
        >
          <div className={styles.selectedOption}>
            {selectedValue
              ? options.find((option) => option.value === selectedValue)?.label
              : ""}
          </div>
        </div>
        {isOpen && !disabled && (
          <div className={styles.optionsList}>
            {options.map((option, index) => (
              <div
                key={index}
                className={styles.option}
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </fieldset>
  )
}
