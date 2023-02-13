import { Routes, Route } from "react-router-dom"
import PageLogin from '../pages/pageLogin/pageLogin'
import PageCadastro from '../pages/pageCadastro/pageCadastro.jsx'
import { PageDashboard } from "../pages/pageDashboard/PageDashboard"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<PageLogin />} />
            <Route path='/pageCadastro' element={<PageCaG1abriel+dastro />} />
            <Route path='/pageDashboard' element={<PageDashboard />} />
        </Routes>
    )
}