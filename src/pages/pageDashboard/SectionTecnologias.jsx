import { Card } from "../../components/CardTech/Card"
import { CardNull } from "../../components/CardTech/CardNull"
import { SectionTecnologiasStyled } from "./SectionTecnologiasStyled"
import { useContext } from "react"
import { FucoesExtrasContext } from "../../providers/funcoesExtras"
import { InfoUserContext } from "../../providers/infosUSerContext"


export const SectionTecnologias = () => {
    const { navigate } = useContext(FucoesExtrasContext)
    const { user } = useContext(InfoUserContext)

    return (
        <SectionTecnologiasStyled>
            <div>
                <h2>Tecnologias</h2>
                <button onClick={() => navigate("/PageDashboard/:infoTechs")}><h2>+</h2></button>
            </div>
            <ul>
                {(user.techs == undefined || user.techs.length <= 0) ? (
                    <CardNull />
                ) : (
                    user.techs.map((tech, index) => {
                        return <Card tech={tech} key={index} />
                    })
                )}
            </ul>
        </SectionTecnologiasStyled>
    )
}