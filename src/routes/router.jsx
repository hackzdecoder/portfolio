import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const PageContent = lazy(() => import('@components/content'));

export default function Routing() {
    return(
        <Routes>
            <Route path="/home" element={<PageContent/>}/>
        </Routes>
    )
}