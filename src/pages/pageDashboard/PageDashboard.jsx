import { Header } from "../../components/header/Header"
import { DivStyled } from "./PageDashboardStyled"
import { SectionInfo } from "./SectionInfo"
import { SectionTecnologias } from "./SectionTecnologias"
import { Outlet } from "react-router-dom"
import { useContext } from "react"
import { FucoesExtrasContext } from "../../providers/funcoesExtras"


export const PageDashboard = () => {

    const { navigate, token, verificacaoDeslogado } = useContext(FucoesExtrasContext)

    verificacaoDeslogado()

    return (
        (token) ? (
            <DivStyled>
                <Outlet />
                <Header />
                <SectionInfo />
                <SectionTecnologias />
            </DivStyled>
        ) : (
            navigate('/')
        )
    )
}