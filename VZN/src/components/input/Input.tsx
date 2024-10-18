import styles from '../input/Input.module.css'

export default function Input({placeHolder ='', legendText = '', required = false,  ...props}){
    return(
        <fieldset className={styles.inputContainer}>
            <legend className={styles.inputLabel}>{legendText}</legend>
            <input className={styles.inputFilter} type="text" placeholder={placeHolder} {...props}/>
        </fieldset>
    )
}