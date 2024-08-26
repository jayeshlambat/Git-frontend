import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Context } from './Context';

const ContextProvider = (props) => {


    // code started
    const [query, setQuery] = useState('');
    const [GenerateFile, setGenerateFile] = useState("");
    const [listData, setListData] = useState({});
    const [keyData, setKeyData] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [allOptions, setAllOptions] = useState([]);
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        FetchData();
    }, []);

    useEffect(() => {
        setAllOptions(keyData);
    }, [keyData]);

    const FetchData = () => {
        axios.get("https://git-shield-backend.vercel.app/list")
            .then(response => {
                setListData(response?.data?.GitIgnoreList);

                const names = Object.values(response?.data?.GitIgnoreList).map(item => item?.name);
                setKeyData(names);
            })
            .catch(err => {
                throw err;
            });
    };

    const getContentsByName = (name) => {
        for (const key in listData) {
            if (listData[key].name === name) {
                return listData[key].contents;
            }
        }
        return null;
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setQuery(value);

        if (value.length === 0) {
            setGenerateFile("");
        }

        if (value.length > 0) {
            const filteredSuggestions = allOptions.filter(option =>
                option.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion);
        setSuggestions([]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (query) {
            const content = getContentsByName(query);
            if (content) {
                setGenerateFile(content);
            } else {
                alert('No matching file found');
                setGenerateFile("");
            }
            setIsCopied(false);
        } else {
            alert('Please enter a file name');
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(GenerateFile).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }).catch(err => {
            throw err
        });
    };


    // code ended

    const contextValue = {
        query,
        GenerateFile,
        listData,
        suggestions,
        keyData,
        allOptions,
        isCopied,
        setQuery,
        setGenerateFile,
        setListData,
        setSuggestions,
        setKeyData,
        setAllOptions,
        setIsCopied,
        handleInputChange,
        handleSuggestionClick,
        handleSubmit,
        handleCopy
    }


    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
