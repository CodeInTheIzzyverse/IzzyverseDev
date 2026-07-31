import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { PATHS } from "@/constants/routes";
import { Analytics } from "@vercel/analytics/react";
import WhatsappBtn from "../UI/Bubble/WhatsappBubble";
import KofiBtn from "../UI/Bubble/KofiBubble";

const MainLayout = () => {
    const location = useLocation();
    const showFloatingButtons = location.pathname !== PATHS.LINKS;

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            {showFloatingButtons && <WhatsappBtn />}
            {showFloatingButtons && <KofiBtn />}
            <Analytics />
        </>
    )
}

export default MainLayout;