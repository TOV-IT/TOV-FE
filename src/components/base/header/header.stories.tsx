import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import styled, { createGlobalStyle, ThemeProvider, css } from "styled-components";
import { Link, Route, BrowserRouter, Router, Routes } from "react-router-dom";
import HeaderComponent from "./header_component";
import GlobalStyle from "StyleVars";

export default {
  title: "Base/Header",
  component: HeaderComponent,
  parameters: {
    backgrounds: {
      default: "White",
      values: [
        { name: "Multi", value: "rgb(208, 208, 208, 100%)" },
        { name: "Black", value: "#000000" },
        { name: "White", value: "#ffffff" },
      ],
    },
  },
} as Meta;

const Template: Story<any> = (args) => {
    return(<HeaderComponent {...args} />)
} 

export const Default = Template.bind({});
Default.parameters = {
  backgrounds: { default: "Black" },
};
Default.args = {};
