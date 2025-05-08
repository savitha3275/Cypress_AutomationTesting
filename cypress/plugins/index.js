// Import Cypress Webpack preprocessor
const webpack = require('@cypress/webpack-preprocessor');

module.exports = (on, config) => {
  // Webpack options for Cypress preprocessor
  const options = {
    webpackOptions: {
      module: {
        rules: [
          {
            test: /\.feature$/,  // This is the file type we want to match: .feature files
            use: 'gherkin-loader',  // The loader we use to process .feature files
          },
        ],
      },
    },
  };

  // Tell Cypress to use the Webpack preprocessor with the options above
  on('file:preprocessor', webpack(options));

  // Return the configuration object, this is important to keep existing config intact
  return config;
};
