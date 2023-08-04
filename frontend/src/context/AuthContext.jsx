import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext({});

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) return;

    dispatch({ type: "LOGIN", payload: user });
  }, []);

  const value = { ...state, dispatch };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
