import { createContext, useState } from "react";

export const VerificacaoModal = createContext()

export const VerificacaoModalProvider = ({ children }) => {
    const [modal, setModal] = useState()

    return (
        <VerificacaoModal.Provider value={{ modal, setModal }}>
            {children}
        </VerificacaoModal.Provider>
    )
}