
import { useState } from 'react';
import ResContext from './ResContext';


const ResContextProvider = ({children})=>{
    const [resData,setResData]=useState(null)
    const [filteredListData,setFilteredListData]=useState(null)
    
    return (
    <ResContext.Provider value={{resData,setResData,filteredListData,setFilteredListData}}>
        {children}
    </ResContext.Provider >
    )

}

export default  ResContextProvider;