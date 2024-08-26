import React, { useContext } from 'react'
import { Context } from '../context/Context'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';

const GeneratedFile = () => {
    const {
        GenerateFile,
        isCopied,
        handleCopy
    } = useContext(Context);
    return (
        <>
            {GenerateFile && (
                <div className="relative overflow-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px] px-3 py-1 w-full sm:w-[90%] md:w-[85%] lg:w-[80%] mt-1 bg-white dark:bg-black">
                    <div className='w-full flex justify-end sticky top-0 z-10'>
                        <button onClick={handleCopy} className='flex items-center bg-zinc-700 text-white p-2 rounded-md flex-row justify-center m-2'>
                            {isCopied ? <DoneAllRoundedIcon className='scale-75' /> : <ContentCopyIcon className='scale-75' />}
                            <span className='text-sm mr-1'>{isCopied ? 'Copied!' : 'Copy'}</span>
                        </button>
                    </div>
                    <pre className='block dark:text-white'>
                        <code>
                            {GenerateFile}
                        </code>
                    </pre>
                </div>
            )}
        </>
    )
}

export default GeneratedFile