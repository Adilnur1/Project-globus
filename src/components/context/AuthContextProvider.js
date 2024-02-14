import React, { createContext, useContext } from "react";
const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  return <authContext.Provider>{children}</authContext.Provider>;
};

export default AuthContextProvider;
