import React, { useState, useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Tooltip } from '@mui/material';

const Header = () => {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? storedTheme : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleSystemThemeChange = (e) => {
            const newTheme = e.matches ? 'dark' : 'light';
            setTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        };

        mediaQuery.addEventListener('change', handleSystemThemeChange);

        return () => {
            mediaQuery.removeEventListener('change', handleSystemThemeChange);
        };
    }, []);

    const toggleTheme = () => {
        setTheme(prevTheme => {
            const newTheme = prevTheme === "light" ? "dark" : "light";
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    };

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <div className='w-full h-[10%] bg-white dark:bg-[#28252E] flex items-center justify-between p-4 sm:px-6 lg:px-10 dark:shadow-md'>
            <div className='flex items-center space-x-4'>
                <img src="./assets/logo.png" alt="Gitignore logo" className='h-8 sm:h-10' />
                <h1 className='text-lg sm:text-xl lg:text-2xl font-semibold dark:text-white'><span className='text-[#F05033]'>Git</span>Filter</h1>
            </div>

            <div className='flex space-x-4'>
                <span>
                    <a href="https://github.com/PiyushB2003/GitShield" target='_blank'>
                        <Tooltip title="Source code">
                            <button className='bg-[#E4EDED] hover:bg-[#c6cece] dark:text-white dark:bg-[#3e3947] dark:hover:bg-[#534d5f] p-2 rounded-full flex items-center justify-center'>
                                <GitHubIcon />
                            </button>
                        </Tooltip>
                    </a>
                </span>
                <span>
                    <Tooltip title={`${theme === "light" ? "Dark mode" : "Light mode"}`}>
                        <button className='bg-[#E4EDED] hover:bg-[#c6cece] dark:text-white dark:bg-[#3e3947] dark:hover:bg-[#534d5f] p-2 rounded-full flex items-center justify-center' onClick={toggleTheme}>
                            {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                        </button>
                    </Tooltip>
                </span>
            </div>
        </div>
    );
};

export default Header;
