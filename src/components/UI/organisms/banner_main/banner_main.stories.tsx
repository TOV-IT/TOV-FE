import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import styled, { createGlobalStyle, ThemeProvider, css } from "styled-components";
import { Link, Route, BrowserRouter, Router, Routes } from "react-router-dom";
import GlobalStyle from "StyleVars";
import BannerMainComponent from "./banner_main_component";

export default {
  title: "Banner/Main",
  component: BannerMainComponent,
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
    return(<BannerMainComponent {...args} />)
} 

export const Default = Template.bind({});
Default.args = {};
