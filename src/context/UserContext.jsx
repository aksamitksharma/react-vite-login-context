import { createContext, useContext, useState } from "react";


const UserContext = createContext()

// eslint-disable-next-line react/prop-types
export const UserProvider =  ({children}) => {
    const [user, setUser] = useState()

    const login = (username, password) => {
       
        setUser({ username, password }); 
    
        console.log(username, password);
      };

    return(
        <UserContext.Provider value={{user, login}}>
            {children}
        </UserContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(UserContext)