import styles from "../input/Input.module.css"

interface InputProps {
  placeHolder?: string
  legendText: string
  required?: boolean
  type?: string
  className?: string
  disabled?: boolean
  value?: string
  onChange?: (event: any) => void
}

export default function Input({
  placeHolder = "",
  legendText = "",
  required = false,
  type = "text",
  className = "",
  disabled = false,
  value,
  onChange,
  ...props
}: InputProps) {
  return (
    <fieldset className={` ${disabled ? styles.inputDisabled : ""}`}>
      <legend className={`${disabled ? styles.legendDisabled : ""}`}>
        {legendText}
      </legend>
      <input
        className={styles.inputFilter}
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        required={required}
        {...props}
      />
    </fieldset>
  )
}
