import React, { createContext, useContext, useState } from 'react';

// Create Context
const UserContext = createContext();

// Provider Component
export const UserProvider = ({ children }) => {
  // Multiple states
  const [user, setUser] = useState("test");
  const [theme, setTheme] = useState("light");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{
        user, setUser,
        theme, setTheme,
        isLoggedIn, setIsLoggedIn
        
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for using UserContext
export const useUser = () => useContext(UserContext);
