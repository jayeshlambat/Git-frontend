import React, { useEffect, useState } from 'react';
import InputBox from '../components/InputBox';
import axios from "axios";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import GeneratedFile from '../components/GeneratedFile';

const Content = () => {
    return (
        <div className='w-full h-[80%] flex flex-col items-center p-4 sm:p-6 md:p-8'>
            <div className='flex flex-col items-center mt-5 mb-0 dark:text-white text-center'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl'><span className='text-[#F05033]'>Gitignore</span> generator</h1>
                <p className='text-lg sm:text-xl my-2'>Create useful .gitignore files for your project</p>
            </div>
            <InputBox/>
            <GeneratedFile/>
        </div>
    );
};

export default Content;
