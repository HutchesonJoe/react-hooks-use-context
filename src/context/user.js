import React, { useState } from "react";


const UserContext = React.createContext();

function UserProvider({children}) {
  const currentUser = {
    name: "Duane",
    interests: ["coding", "biking", "Words ending in 'ing'"]
  }
  const [user, setUser] = useState(currentUser)
  
  return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}

export { UserContext, UserProvider };
