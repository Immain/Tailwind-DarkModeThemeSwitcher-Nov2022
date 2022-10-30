# Tailwind-DarkModeThemeSwitcher-Nov2022
Switch Between light and dark modes using Tailwind and React

# Setup 

If you want to support toggling dark mode manually instead of relying on the operating system preference, use the class strategy instead of the media strategy:

```tailwind.config.js```
```
module.exports = {
  darkMode: 'class',
  // ...
}
```
Now instead of dark:{class} classes being applied based on prefers-color-scheme, they will be applied whenever dark class is present earlier in the HTML tree.
```
<!-- Dark mode not enabled -->
<html>
<body>
  <!-- Will be white -->
  <div class="bg-white dark:bg-black">
    <!-- ... -->
  </div>
</body>
</html>

<!-- Dark mode enabled -->
<html class="dark">
<body>
  <!-- Will be black -->
  <div class="bg-white dark:bg-black">
    <!-- ... -->
  </div>
</body>
</html>
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

