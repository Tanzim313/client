import React from "react";
import Navbar from "../Nabvar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/footer";

const Root =()=>{

    return(
        <div>

            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    )

}

export default Root;