# Tailwind-DarkModeThemeSwitcher-Nov2022
Switch Between light and dark modes using Tailwind and React

# Setup 

To manually toggle dark mode in tailwind, set the following configuration:

```tailwind.config.js```
```
module.exports = {
  darkMode: 'class',
  // ...
}
```

next, under public > ```index.html``` set the body to the following configuration:
```
  <body className="dark">
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
```

