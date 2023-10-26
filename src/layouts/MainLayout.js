import {Header} from "../components/Header/Header";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <h1>Hello User. Choose category</h1>
        </div>
    );
};

export {MainLayout};