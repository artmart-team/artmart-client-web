# NOTE FOR DEVELOPERS

## assets
in `assets` folder, there are two folders, 
  `images` => used for logo or other core images
  `json` => used for lottie animation

## components
in `helpers` folder, there are two folders,
  `helpers` => used for loading, error, splash screen, etc
  `layout` => used for reusable component, such as navbar, footer, product cards, etc

## pages
in `pages` folder, there are many folders and one file,
  `Page Folder` => contained Page File, components for pages scoped component, and styles for pages scoped style
  `index.js` => used for collecting page file to make easier to importing.

  for example

  `import { Home } from './pages`

  OR

  `import { Home } from './pages/index.js`

## routers
In `routers` folder, there is `index.js` file. This is for collecting path for routers to make easier to importing.

for example

`import path from './routers/index.js';`

`<Link to={path.home}></Link>`

## styles
`styles` folder used for collecting global styling.

## utils
`utils` folder used for `API`, and other package that need to be modularized.

## How to write code

This is just a guideline to make our code more beautiful, but you can use your style too.

1. functional need to be declared as `const`
    for example:
    ```
    const App = _ => {
      return(
        <h1>Hello, World!</h1>
      );
    };
    ```
2. don't forget semicolon
3. if there is no args in function, u can use `_` or just `()`, it is up to you
4. don't worry if you have a mistake, Muamar will check the code to make it more readable.

## How to push?

Make sure you make new branch, Format branch is

`GitUsername/ActionName/Feature`

ActionName: {
  Making,
  BugFix,
  HotFix
}

And makesure everything is pascal case

Example `Ralfarios/Making/HomePage`

## Any Question? Tell me!
