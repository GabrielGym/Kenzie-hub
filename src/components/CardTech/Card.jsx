import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Card = ({ tech, setModal }) => {

    const navigate = useNavigate()
    const info = () => {
        setModal(true)
        navigate(":infoTechs")
        window.localStorage.setItem('@INFOTECH', JSON.stringify(tech))
    }
    useEffect(() => {

    }, [tech])

    return (
        <li>
            <button onClick={info}>
                <h2>{tech.title}</h2>
                <p>{tech.status}</p>
            </button>
        </li>
    )
}