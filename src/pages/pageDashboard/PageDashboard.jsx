import { Header } from "../../components/header/Header"
import { DivStyled } from "./PageDashboardStyled"
import { SectionInfo } from "./SectionInfo"
import { SectionTecnologias } from "./SectionTecnologias"


export const PageDashboard = () => {

    const infos = localStorage.getItem("@USERID")
    const infoUser = JSON.parse(infos)

    return (
        <DivStyled>
            <Header/>
            <SectionInfo infoUser={infoUser}/>
            <SectionTecnologias infoUser={infoUser} />
        </DivStyled>
    )
}