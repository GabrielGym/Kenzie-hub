import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const FucoesExtrasContext = createContext()

export const FucoesExtrasProviders = ({ children }) => {
    const token = localStorage.getItem('@TOKEN')
    const infoUsers = localStorage.getItem('@USERID')
    const infoUser = JSON.parse(infoUsers)
    const infoTechs = localStorage.getItem('@INFOTECH')
    const infoTech = JSON.parse(infoTechs)
    const navigate = useNavigate()

    const verificacaoLogado = () => {
        useEffect(() => {
            if (token) {
                return navigate("/pageDashboard")
            }
        }, [token])
    }

    const verificacaoDeslogado = () => {
        useEffect(() => {
            if (!token) {
               return navigate('/')
            }
        }, [token])
    }

    const Logout = () => {
        window.localStorage.clear()
        navigate("/")
    }

    return (
        <FucoesExtrasContext.Provider value={{ token, infoUser, infoTech, verificacaoLogado, verificacaoDeslogado, navigate, Logout }}>
            {children}
        </FucoesExtrasContext.Provider>
    )
}