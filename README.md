Lien du netlify: https://kangouscape.netlify.com

Nom des membres du groupes 15 Olimar:

Use the following link to design your own level: https://www.figma.com/file/xstMf51b8kHpvMbyC2w0Vm/Untitled?node-id=0%3A1

Send a request to implement your level on our game to this e-mail: reda.hamouche@outlook.com

Hamouche Réda
Paulos Wendy
Grancher Quentin
Attar Ramtim


## We are using a library called Oxo : https://github.com/bcalou/oxo-game-boilerplate

## How to use

Clone and cd into the repository and run `npm install`

### Development mode

`npm run dev`

Open `localhost:1234/index.html`

Don't forget the `index.html` part !

### Production mode

`npm run build`

Serve the `dist` folder.

## Files structure

### html

Work in the `src/screens` folder. Each screen is located here. There are two screens by default : `home` and `game`. Home is loaded when the app starts.

When a screen is loaded, it is injected into the `body` of `index.html`, which should not be modified.

### css

Work in the `src/scss` folder. For simplicity, the same stylesheet will be used for all the screens.

If you need to target a special screen, you can target the class that is added to the `body` each time a screen is loaded. For example, when the `home` screen is loaded you will have `<body class="home">`.

### js

Work in the `src/js/script.js` file. You can use the `OXO` library to help you to write your game's code.


