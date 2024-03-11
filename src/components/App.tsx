import React, { useState } from 'react';
import styles from './App.module.scss'

const App = () => {
    const [count, setCount] = useState<number>(1)

    const increment = () => {
        setCount(prev => prev + 1)
    }

    return (
        <div>
            Hello world!
            <div>
                <div>{count}</div>
                <button className={styles.button} onClick={
                    increment
                }>  <span className='button__span'>s</span></button>
            </div>
        </div>
    );
};

export default App;