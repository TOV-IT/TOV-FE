import React from "react";
import HeaderComponent from "./header_component";
import { hot } from "react-hot-loader";

const Header: React.FC<any> = ({...props}) => {
    return(
        <HeaderComponent {...props} />
    )
};

export default hot(module)(Header);
