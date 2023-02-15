import { Card } from "../../components/CardTech/Card"
import { CardNull } from "../../components/CardTech/CardNull"
import { SectionTecnologiasStyled } from "./SectionTecnologiasStyled"
import { useNavigate } from "react-router-dom"
import { Api } from "../../services"
import { useEffect, useState } from "react"


export const SectionTecnologias = ({ setModal }) => {
    const token = localStorage.getItem('@TOKEN')
    const navigate = useNavigate()
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
        getUser()
    }, [user])

    return (
        <SectionTecnologiasStyled>
            <div>
                <h2>Tecnologias</h2>
                <button onClick={() => navigate(":infoTechs")}><h2>+</h2></button>
            </div>
            <ul>
                {user.length === 0 ? (
                    <CardNull />
                ) : (
                    user.techs.map((tech, index) => {
                        return <Card tech={tech} key={index} setModal={setModal} />
                    })

                )}
            </ul>
        </SectionTecnologiasStyled>
    )
}