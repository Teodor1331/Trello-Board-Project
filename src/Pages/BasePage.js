import React from "react";

import { Outlet } from "react-router-dom";

import NavigationBar from "../Components/NavigationBar";

const BasePage = () => {
    return (
        <React.Fragment>
            <NavigationBar /><Outlet /> 
        </React.Fragment>
    );
};

export default BasePage;