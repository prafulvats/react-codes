import React, { useMemo, useState } from 'react'
import './Demo.css'
import findNthPrime from './utils/findPrime';
// UseMemo Hook Implementation
const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  console.log(isDarkMode, 'isDark')

  const findPrimeNo = useMemo(() => findNthPrime(text), [text]);
  return (
    <div className={`${isDarkMode ? 'dark': 'light'} demoMain`}>
        <span>useMemo Hook Implementation</span>
        <button onClick={(e) => setIsDarkMode(!isDarkMode)}>Toggle Mode</button>
        <input
            type='number'
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <div><span>nth Prime No: {findPrimeNo}</span></div>
    </div>
  )
}

export default Demo
