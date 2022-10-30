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
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    };

  return (
    <div class="relative hidden lg:block w-10 mr-2 align-middle select-none transition duration-200 ease-in ml-2">
        <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-slate-700 border-4 border-sky-600 appearance-none cursor-pointer" onClick={handleThemeSwitch}/>
        <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-400 cursor-pointer"></label>
    </div>

  )
}

export default Switch
