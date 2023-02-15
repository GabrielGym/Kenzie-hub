import { Header } from "../../components/header/Header"
import { DivStyled } from "./PageDashboardStyled"
import { SectionInfo } from "./SectionInfo"
import { SectionTecnologias } from "./SectionTecnologias"
import { Outlet } from "react-router-dom"


export const PageDashboard = ({setModal}) => {

    const infos = localStorage.getItem("@USERID")
    const infoUser = JSON.parse(infos)

    return (
        <>
            <Outlet />
            <DivStyled>
                <Header />
                <SectionInfo infoUser={infoUser} />
                <SectionTecnologias setModal={setModal} />
            </DivStyled>
        </>

    )
}