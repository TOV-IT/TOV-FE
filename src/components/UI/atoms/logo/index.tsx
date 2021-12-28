import React from "react";
import LogoComponent from "./logo_component";
import { hot } from "react-hot-loader";

const testAdd = (num1: number, num2: number): number => {
  return num1 + num2;
};

const Logo: React.FC<any> = ({...props}) => {
  return <LogoComponent {...props} />;
};

export { 
  LogoComponent,
  testAdd,
};

export default hot(module)(Logo);
