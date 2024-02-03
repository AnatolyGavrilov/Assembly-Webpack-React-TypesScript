import React, { useState } from 'react';
import './App.scss'

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
                <button className='button' onClick={
                    increment
                }>  <span className='button__span'>s</span></button>
            </div>
        </div>
    );
};

export default App;