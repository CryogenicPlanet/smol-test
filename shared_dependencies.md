1. Exported Variables:
   - `app` from `src/main.ts`
   - `App` from `src/App.vue`
   - `Home` from `src/components/Home.vue`
   - `Redesign` from `src/components/Redesign.vue`
   - `githubAPI` from `src/api/githubAPI.ts`

2. Data Schemas:
   - `GithubData` in `src/api/githubAPI.ts`

3. ID Names of DOM Elements:
   - `app` in `src/main.ts`
   - `home` in `src/components/Home.vue`
   - `redesign` in `src/components/Redesign.vue`
   - `popup` in `public/popup.html`

4. Message Names:
   - `GET_GITHUB_DATA` in `src/api/githubAPI.ts` and `public/contentScript.js`
   - `REDESIGN_PAGE` in `src/components/Redesign.vue` and `public/contentScript.js`

5. Function Names:
   - `createApp` in `src/main.ts`
   - `fetchGithubData` in `src/api/githubAPI.ts`
   - `redesignPage` in `src/components/Redesign.vue`
   - `initPopup` in `public/popup.ts`

6. Shared Dependencies:
   - `vue` in `src/main.ts`, `src/App.vue`, `src/components/Home.vue`, `src/components/Redesign.vue`
   - `vite` in `vite.config.ts`
   - `tailwindcss` in `src/styles/index.css`, `src/styles/tailwind.config.js`
   - `typescript` in all `.ts` files
   - `github-graphql-api` in `src/api/githubAPI.ts`
   - `chrome-extension-api` in `public/background.js`, `public/contentScript.js`, `public/popup.ts`