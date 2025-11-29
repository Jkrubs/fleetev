import { createContext, useState } from "react";
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000'
export const StatsContext = createContext()

const StatsContextProvider = (props) => {
    const [active, setActive] = useState('stats')
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const value = {
        active, setActive, axios, user, setUser
    }
    return (
        <StatsContext.Provider value={value}>
            {props.children}
        </StatsContext.Provider>
    )
}

export default StatsContextProvider