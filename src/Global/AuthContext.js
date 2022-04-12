import React, {createContext} from 'react'
// import { create } from 'yup/lib/array'

export const GlobalContext = createContext()


export const AuthProvider = ({children})=>{
    const [first, setFirst] = React.useState(true)
    const [second, setSecond] = React.useState(false)
    const [third, setThird] = React.useState(false)
    const [current, setCurrent] = React.useState(null)
    const [fourth, setFourth] = React.useState(false)



    React.useEffect(()=>{
        setCurrent(JSON.parse(localStorage.getItem("inovator")))
        console.log('this is currenst', current);
    },[])



    return(
        <GlobalContext.Provider  
        value={{
           first,
           second,
           setFirst,
           setSecond ,
           third,
           setThird,
           current,
           fourth,
           setFourth
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}