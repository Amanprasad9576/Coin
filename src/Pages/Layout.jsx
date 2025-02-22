import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";

function MainLayout(){
    return (
        <>
              <Navbar />   {/* This navbar is the shared ui we want to across pages */}
              <Outlet />    {/* The actual page which which will be rendered along with navbar */}
        </>
    );
}
export default MainLayout;



// <Outlet /> --> it ia a component provide by the 'react-router-dom'
// it provide the feature of remaining page except the share page.