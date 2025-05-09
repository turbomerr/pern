import React from 'react'
import { Palette } from "lucide-react"
import { THEMES } from '../constants'
import  {useThemeStore}  from '../store/useThemeStore'

const ThemeSelector = () => {
    const { theme, setTheme } = useThemeStore();
    //console.log("Theme : ", theme)

    return (
        <div className='dropdown dropdown-end'>

            <button tabIndex={0} className='btn btn-ghost btn-circle'>
                <Palette className='w-5 h-5' />
            </button>

            <div tabIndex={0} className='dropdown-content mt-2 p-1 shadow-2xl backdrop-blur-lg rounded-lg w-56 border-base-content/10 '>
                {THEMES.map(themeOption => (
                    <button key={themeOption.name} className={` w-full px-4 py-3 rounded-xl flex items-center gap-3 transition-colors
                    ${theme === themeOption.name
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-base-content/5"
                        }
                `}
                        onClick={() => setTheme(themeOption.name)}

                    >
                        <Palette className="w-4 h-4" />
                        <span className="text-sm font-medium">{themeOption.label}</span>

                        <div className="ml-auto flex gap-1">
                            {themeOption.colors.map((color, i) => (
                                <span key={i} className="size-2 rounded-full" style={{ backgroundColor: color }} />
                            ))}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ThemeSelector