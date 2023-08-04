import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const { dispatch } = useAuthContext();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const res = await fetch("/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setIsLoading(false);
      setError(data.error);
      return;
    }

    // save the user to local storage
    localStorage.setItem("user", JSON.stringify(data));

    // update the auth context
    dispatch({ type: "LOGIN", payload: { data } });

    setIsLoading(false);
  };

  return { signup, error, isLoading };
};
