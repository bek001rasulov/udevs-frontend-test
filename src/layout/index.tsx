import {LayoutContent, LayoutWrapper, Main} from "./style.ts";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import {Outlet} from "react-router-dom";

const RootLayout = () => {
    return (
        <LayoutWrapper>
            <Sidebar/>
            <LayoutContent>
                <Navbar/>
                <Main>
                    <Outlet/>
                </Main>
            </LayoutContent>
        </LayoutWrapper>
    );
};

export default RootLayout;