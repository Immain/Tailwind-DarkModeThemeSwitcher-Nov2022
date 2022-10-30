import React, {useState, useEffect} from 'react'

function Switch() {
    const [theme, setTheme] = useState('null')

    useEffect(() => {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, [])

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    };

  return (
    <div>
        <button className='bg-blue-200 p-4 rounded-3xl' onClick={handleThemeSwitch}>Theme</button>
    </div>
  )
}

export default Switch
