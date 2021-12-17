import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../src/redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import StoryRouter from "storybook-react-router";
import GlobalStyle from "../src/assets/GlobalStyles";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Helmet } from "react-helmet";

import "../src/assets/index.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const store = createStore(rootReducer, composeWithDevTools());
const persistor = persistStore(store);

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={GlobalStyle}>
            <Story />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  ),
];
