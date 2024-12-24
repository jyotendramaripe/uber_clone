import React, { createContext, useState } from 'react'

export const UserDataContext = createContext();// this is the context that will be used to pass the user data to the components.
//usercontext is a wrapper component that will wrap the entire application and will provide the user data to all the components.
const UserContext = ({children}) => {
  const [user, setUser] = useState({
    email:'',
    fullName:{
      firstName:'',
      lastName:''
    }
  });
  return (
    <div>
      <UserDataContext.Provider value={[user, setUser]}>
        {children}
      </UserDataContext.Provider>
    </div>
  )
}

export default UserContext

