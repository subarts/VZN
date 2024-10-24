import { useEffect, useState } from "react"
import styles from "./folderSelect.module.css"
import FolderInputIcon from "../icons/FolderInputIcon"
import { Divisions } from "../../api/Divisions"
import { useStore } from "../../store/Store"
type SelectProps = {
  legend: string
  className?: string
  disabled?: boolean
  required?: boolean
  addToBodyRequest?: (e: any) => void
}
type TDivisions = {
  Code: number
  Name: string
}
export default function FolderSelect({
  legend,
  className = "",
  disabled,
  required = false,
  addToBodyRequest,
}: SelectProps) {
  const [selectedValue, setSelectedValue] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [optionSelected, setOptionSelected] = useState(false)

  const [divisionsList, setDivisionsList] = useState<Array<TDivisions>>([
    { Code: 1, Name: "" },
  ])
  const { divisions } = useStore((state) => state)
  const { addDivisions } = useStore((state) => state)
  useEffect(() => {
    const requestDivisions = async (): Promise<void> => {
      const result = await Divisions()
      setDivisionsList(result)
      addDivisions(result)
    }
    if (divisions > 0) {
      setDivisionsList(divisions)
    } else {
      requestDivisions()
    }
  }, [])

  const handleOptionClick = (value: number) => {
    setSelectedValue(value)
    setOptionSelected(true)
    setIsOpen(false)
    if (addToBodyRequest) {
      addToBodyRequest(value)
    }
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
              ? divisionsList.find((option) => option.Code === selectedValue)
                  ?.Name
              : ""}
          </div>
          <FolderInputIcon onClick={toggleDropdown} />
        </div>
        {isOpen && !disabled && (
          <div className={styles.optionsList}>
            {divisionsList.map((option, index) => (
              <div
                key={index}
                className={styles.option}
                onClick={() => handleOptionClick(option.Code)}
              >
                {option.Name}
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
