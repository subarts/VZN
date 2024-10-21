import styles from "../input/Input.module.css"
export default function Input({
  placeHolder = "",
  legendText = "",
  required = false,
  type = "text",
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <fieldset className={` ${disabled ? styles.inputDisabled : ""}`}>
      <legend className={`${disabled ? styles.legendDisabled : ""}`}>
        {legendText}
      </legend>
      <input
        className={styles.inputFilter}
        type={type}
        placeholder={placeHolder}
        {...props}
      />
    </fieldset>
  )
}
