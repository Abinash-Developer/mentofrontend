import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../constants";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const navigate = useNavigate();
  useEffect(()=>{
    try {
      axios.post(`${API_URL}/varifySession`,{},
        { headers: {"Authorization" : `Bearer ${token}`} }
      ).then((result)=>{
        if(!result?.data?.status){
          logOut();
        }
      }).catch((error)=>{
        console.log("Promise catch =",error);
      })
    } catch (error) {
      console.log("Catch try= ",error);
    }
  },[token]);
  const loginAction = async (data) => {
   
    try {
      const response = await axios.post(`${API_URL}/create-student/`,data);
      if (response.data) {
        setToken(response.data.token);
        localStorage.setItem("site", response.data.token);
        return true;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = () => {
    setToken("");
    localStorage.removeItem("site");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ token, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};