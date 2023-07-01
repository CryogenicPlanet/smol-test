# Github Homepage Redesign

This is a Chrome extension built with TypeScript, Vite, and Tailwind CSS that allows you to redesign the Github homepage. The goal of this extension isn't just to be a stylistic change but rather something that pulls from the Github GraphQL API to put actually important information back on the home page and remove all the unnecessary elements that Github adds.

## Installation

1. Clone this repository
2. Run `npm install` to install the dependencies
3. Build the project using `npm run build`
4. Load the extension into Chrome through the `Load unpacked` option and select the `dist` folder

## Usage

Once the extension is installed, you can navigate to the Github homepage and the extension will automatically redesign the page.

## Files

- `src/main.ts`: Entry point of the application
- `src/App.vue`: Main Vue component
- `src/components/Home.vue`: Component for the original Github homepage
- `src/components/Redesign.vue`: Component for the redesigned Github homepage
- `src/api/githubAPI.ts`: API calls to the Github GraphQL API
- `src/styles/index.css`: Global styles
- `src/styles/tailwind.config.js`: Tailwind CSS configuration
- `public/manifest.json`: Chrome extension manifest file
- `public/background.js`: Background script for the Chrome extension
- `public/contentScript.js`: Content script for the Chrome extension
- `public/popup.html`: Popup HTML for the Chrome extension
- `public/popup.ts`: Popup script for the Chrome extension
- `vite.config.ts`: Vite configuration file
- `package.json`: Project dependencies and scripts
- `tsconfig.json`: TypeScript configuration file

## Dependencies

- Vue
- Vite
- Tailwind CSS
- TypeScript
- Github GraphQL API
- Chrome Extension API

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)