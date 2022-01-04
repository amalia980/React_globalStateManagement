import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = (providerObject) => {

    const [user, setUser] = useState({username: ""});
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <UserContext.Provider value={{user, setUser, loggedIn, setLoggedIn}}>
            {providerObject.children}
        </UserContext.Provider>
    );
};

export default UserProvider;
