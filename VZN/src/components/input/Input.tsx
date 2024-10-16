import styles from '../input/Input.module.css'

export default function Input({placeHolder='', labelText= '', hasIcon = false,  ...props}){
    return(
        <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>{labelText}</label>
            <input className={styles.input} type="text" placeholder={placeHolder} {...props}/>
            {hasIcon && <button className={styles.iconButton} type="button"></button>}
        </div>
    )
}