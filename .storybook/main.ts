const path = require("path");
module.exports = {
  stories: ["../src/**/*.stories.(js|jsx|ts|tsx|mdx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {

    config.resolve.alias.Action = __dirname + "/../../src/redux/actions";
    config.resolve.alias.Vars = __dirname + "/../../src/assets/vars.scss";
    config.resolve.alias.Bases = __dirname + "/../src/components/base/index.ts";
    config.resolve.alias.Actions = __dirname + "/../src/redux/actions/index.ts";
    config.resolve.alias.Vars = __dirname + "/../src/assets/vars.scss";
    config.resolve.alias.Templates = __dirname + "/../src/components/templates/index.ts";
    config.resolve.alias.Pages = __dirname + "/../src/components/pages/";
    config.resolve.alias.Atoms = __dirname + "/../src/components/UI/atoms/index.ts";
    config.resolve.alias.Molecules = __dirname + "/../src/components/UI/molecules/index.ts";
    config.resolve.alias.Organisms = __dirname + "/../src/components/UI/organisms/index.ts";
    config.resolve.alias.Hoc = __dirname + "/../src/components/HOC/index.ts";
    config.resolve.alias.Utils = __dirname + "/../src/utils/index.ts";
    config.resolve.alias.StyleVars = __dirname + "/../src/assets/GlobalStyles.tsx";

    config.module.rules.push(
      {
        test: /\.(js|jsx|ts|tsx|mdx)$/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../src"),
      },
    );
    config.resolve.extensions.push(
      ".ts",
      ".tsx",
      ".js",
      ".jsx",
      ".mdx",
      ".scss",
    );
    return config;
  },
};
