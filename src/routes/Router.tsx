import { Route, Routes } from "react-router-dom";
import { HomePage, CharacterPage, RecepcionRemitos, GestionRemitos, Practice } from "../pages";
import { RouterLayout } from '../common/RouterLayout';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/character/:id" element={<CharacterPage />} />
                <Route path="/recepcion-remitos" element={<RecepcionRemitos />} />
                <Route path="/gestion-remitos" element={<GestionRemitos />} />
            </Route>
            <Route path="/practice" element={<Practice />} />
        </Routes>
    )
}
