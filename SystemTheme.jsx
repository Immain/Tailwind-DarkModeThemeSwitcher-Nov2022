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
    <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in ml-2">
        <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" onClick={handleThemeSwitch}/>
        <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
    </div>

  )
}

export default Switch
