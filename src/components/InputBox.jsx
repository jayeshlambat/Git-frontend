import React, { useContext } from 'react'
import { Context } from "../context/Context";

const InputBox = () => {
    const {
        handleSubmit,
        query,
        handleInputChange,
        handleSuggestionClick,
        suggestions
    } = useContext(Context);

    return (
        <div className="flex items-center my-5 justify-center bg-gray-100 dark:bg-transparent w-full md:w-[80%]">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-[#28252E] p-4 rounded shadow-lg dark:shadow-none w-full flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-2">
                <div className="relative h-full w-full sm:w-[80%]">
                    <input
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        placeholder="Search operating systems, frameworks, IDEs, or programming languages"
                        className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-1 focus:ring-[#fa6d54]"
                    />
                    {suggestions.length > 0 && (
                        <ul className="absolute left-0 right-0 bg-white dark:bg-[#3e3947] dark:text-white border border-gray-300 mt-1 rounded shadow-lg z-10 max-h-60 overflow-y-auto">
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleSuggestionClick(suggestion)}
                                    className="p-2 cursor-pointer hover:bg-sky-100 hover:dark:bg-[#2d2933]"
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <button
                    type="submit"
                    className="bg-[#fa6d54] text-white py-2 px-3 rounded hover:bg-[#c4503c] w-full sm:w-auto"
                >
                    Create
                </button>
            </form>
        </div>
    )
}

export default InputBox