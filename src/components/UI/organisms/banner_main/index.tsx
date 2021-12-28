import React from "react";
import { hot } from "react-hot-loader";
import BannerMainComponent from "./banner_main_component";

const BannerMain: React.FC<any> = ({...props}) => {
    return(
        <BannerMainComponent {...props} />
    )
};

export default BannerMain;
