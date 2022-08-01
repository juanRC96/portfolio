import React,{useState} from "react"
import AuthContext from "./AuthContext"
import {useNavigate} from "react-router-dom";


function AuthProvider(props){
    const [userLogin,setUserLogin] = useState(localStorage.getItem("login")|| false)
    const navigate = useNavigate()

    const loginUser = (userInfo) => {
        setUserLogin(true)
        localStorage.setItem("login",true)
        localStorage.setItem("userInfo",JSON.stringify(userInfo))
        setTimeout(()=>{
            navigate("/")
        },1000)
    }
    const logoutUser = () => {
        setUserLogin(false)
        localStorage.removeItem("login")
        setTimeout(()=>{
            navigate("/")
        },1000)
    }

    return(
        <AuthContext.Provider value={{
            userLogin,
            loginUser,
            logoutUser,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;