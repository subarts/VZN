import styles from "../folderInput/FolderInput.module.css"
import FolderInputIcon from "../icons/FolderInputIcon"

export default function FolderInput({
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
      <div className={styles.iconWrapper}>
        <input
            readOnly
            className={styles.inputFilter}
            type={type}
            placeholder={placeHolder}
            {...props}
        />
        <button>
            <FolderInputIcon />
        </button>
      </div>
    </fieldset>
  )
}