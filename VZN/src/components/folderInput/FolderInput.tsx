import { useEffect, useState } from "react"
import styles from "./folderInput.module.css"
import FolderInputIcon from "../icons/FolderInputIcon"
import { Divisions } from "../../api/Divisions"
import { useStore } from "../../store/Store"
type SelectProps = {
  legend: string
  className?: string
  disabled?: boolean
  addToBodyRequest: (e: any) => void
}

export default function FolderSelect({
  legend,
  className = "",
  disabled,
  addToBodyRequest,
}: SelectProps) {
  const [selectedValue, setSelectedValue] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [optionSelected, setOptionSelected] = useState(false)

  const [divisions, setDivisions] = useState([{ code: 1, name: "" }])

  const { addDivisions } = useStore((state) => state)
  useEffect(() => {
    const requestDivisions = async (): Promise<void> => {
      const result = await Divisions()
      setDivisions(result)
      addDivisions(result)
    }
    requestDivisions()
  }, [])

  const handleOptionClick = (value: number) => {
    addToBodyRequest(value)
    setSelectedValue(value)
    setOptionSelected(true)
    setIsOpen(false)
  }

  const toggleDropdown = () => {
    isOpen ? getDiv() : ""
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
        >
          <div className={styles.selectedOption}>
            {selectedValue
              ? divisions.find((option) => option.code === selectedValue)?.name
              : ""}
          </div>
          <FolderInputIcon onClick={toggleDropdown} />
        </div>
        {isOpen && !disabled && (
          <div className={styles.optionsList}>
            {divisions.map((option, index) => (
              <div
                key={index}
                className={styles.option}
                onClick={() => handleOptionClick(option.code)}
              >
                {option.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </fieldset>
  )
}
function getDiv() {
  throw new Error("Function not implemented.")
}
