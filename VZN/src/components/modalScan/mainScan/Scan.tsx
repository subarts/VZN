
import { SetStateAction, useEffect, useState } from 'react';
import Button from '../../button/Button';
import Input from '../../input/Input';
import styles from '../mainScan/scan.module.css';
import Select from '../../select/Select';
import { BoTypes } from '../../../api/BoTypes';
import { Link } from 'react-router-dom';

export const Scan = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const isButtonDisabled = inputValue.length < 10

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> }
  }) => {
    setInputValue(e.target.value)
  }


    const fetchData = async () => {
        const data = await BoTypes();
        console.log(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <main className={styles.main}>
            <p className={styles.text}>Сканируйте штрихкод с номером объекта или введите его вручную.</p>
            <Input 
                placeHolder={``}
                legendText='Номер объекта'
                type='text'
                value={inputValue}
                onChange={handleInputChange} 
                required={false} 
                className={''} 
                disabled={false}
            />
            <Select
                legend='Тип объекта БО'
                disabled={inputValue.length < 10}
                className={`${styles.selectFieldset} ${styles.selectFilter} ${inputValue.length < 10 ? styles.disabledSelect : styles.selectFieldset}`}
            />
            <div className={styles.buttons}>
                <Link to='/ListConsignment/:numberUnicCodeVzn' >
                    <Button disabled={isButtonDisabled} className={isButtonDisabled ? 'button:disabled' : ''} type="submit" color='Blue' size='Regular' children='Перейти' />
                </Link>
                <Button type='submit' color='TransparentWithBorder' children='Отмена' />
            </div>
        </main>
    );
};
