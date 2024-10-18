import styles from "../input/Input.module.css"

export default function Input({
  placeHolder = "",
  legendText = "",
  required = false,
  type = "text",
  ...props
}) {
  return (
    <fieldset className={styles.inputContainer}>
      <legend className={styles.inputLabel}>{legendText}</legend>
      <input
        className={styles.inputFilter}
        type={type}
        placeholder={placeHolder}
        {...props}
      />
    </fieldset>
  )
}
