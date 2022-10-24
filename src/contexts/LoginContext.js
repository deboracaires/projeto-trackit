import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const LoginContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleLogin = async (email, password) => {
    const body = {
      email, password
    }

    const response = await axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`, body);
    localStorage.setItem("image", JSON.stringify(response.data.image));
    localStorage.setItem("token", JSON.stringify(response.data.token));
    setUser(response.data);
    console.log(response);

  }

  //   if(recoveredUser && token){
  //     setUser(JSON.parse(recoveredUser));
  //     api.defaults.headers.Authorization = `Bearer ${token}`;
  // }


  return (
    <LoginContext.Provider value={{ handleLogin, user }}>
      {children}
    </LoginContext.Provider>
  );
}

export const useLoginProvider = () => {
  const context = useContext(LoginContext);

  return context;
}