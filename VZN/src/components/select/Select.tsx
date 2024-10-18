import { useState } from 'react';
import styles from '../select/Select.module.css'

type SelectProps = {
    legend: string;
}

export default function Select({ legend }: SelectProps){
    const [selectedValue, setSelectedValue] = useState('');
  
    const options = [
      { value: 'expense', label: 'Внутризаводская накладная УП (Расход)' },
      { value: 'income', label: 'Внутризаводская накладная УП (Приход)' }
    ];
  
    const handleSelectChange = (event: { target: { value: any; }; }) => {
      const value = event.target.value;
      setSelectedValue(value);
    };
  
    return (
        <fieldset className={styles.selectFieldset}>
            {legend && <legend className={styles.selectLegend}>{legend}</legend>}
            <select className={styles.selectFilter} value={selectedValue} onChange={handleSelectChange} defaultValue="">
                <option className={styles.option} value="" disabled hidden>
                    Некий идентификатор
                </option>
                {options.map((option, index) => (
                    <option className={styles.option} key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </fieldset>
    );
  };