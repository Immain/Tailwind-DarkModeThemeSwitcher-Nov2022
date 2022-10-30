# Tailwind-DarkModeThemeSwitcher-Nov2022
Switch Between light and dark modes using Tailwind and React

## Description:
This light/dark theme is set to switch to the system default. If you system theme is dark, the theme will be set to dark. If you system theme is light, it will be set to light. This also applies to iOS and Android devices, as well as MacOS devices. If you still would like for the website to be in a light or dark mode, you can toggle between light/dark, overriding your current system theme.

# Setup:

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
To use Dark Mode in your ```.js``` or ```.jsx``` file, simply import ```useState, useEffect```
```
import React, {useState, useEffect} from 'react'
```

