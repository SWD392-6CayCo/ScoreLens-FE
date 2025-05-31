import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../layouts/PageNotFound";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

export default function MainRoutes() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}