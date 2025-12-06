import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  // Load from localStorage
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("userData");
    return savedUser
      ? JSON.parse(savedUser)
      : {
          email: "",
          name: "",
          phone: "",
          age: "",
          location: "",
        };
  });

  // Save to localStorage whenever user updates
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
