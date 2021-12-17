import React from "react";
import LogoComponent from "./logo_component";
import { hot } from "react-hot-loader";

const testAdd = (num1: number, num2: number) => {
  return num1 + num2;
};
export { testAdd };

export { LogoComponent };
const Logo: React.FC<any> = ({...props}) => {
  return <LogoComponent {...props} />;
};

export default hot(module)(Logo);
