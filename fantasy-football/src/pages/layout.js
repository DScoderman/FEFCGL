import { Outlet} from "react-router-dom";
import HomeHeader from "../component/homeHeader";

const Layout = () => {
    return (
        <>
        <HomeHeader></HomeHeader>
        <Outlet/>
        </>
    )
};

export default Layout;