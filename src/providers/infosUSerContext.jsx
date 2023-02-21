import { createContext, useContext, useEffect, useState } from "react";
import { CardNull } from "../components/CardTech/CardNull";
import { Api } from "../services";
import { FucoesExtrasContext } from "./funcoesExtras";

export const InfoUserContext = createContext()

export const InfoUserProviders = ({ children }) => {
    const { token, navigate } = useContext(FucoesExtrasContext)
    const [user, setUser] = useState([])

    useEffect(() => {
        async function getUser() {
            try {
                const dadosUser = await Api.get('/profile', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                setUser(dadosUser.data)
            } catch (error) {
                console.log(error)
            }
        }
        {(token) ? (getUser()) : (navigate('/'))}
    }, [user])

    return (
        <InfoUserContext.Provider value={{ user }}>
            {children}
        </InfoUserContext.Provider>
    )
}