# React Sandbox
React homokozó, nem önálló appok fejlesztéséhez. A buildelés library-ként történik. Ha ezen változtatni szeretnél és standalone appot készítenél, akkor a `webpack.build.js` fájlát módosítsd!

## Támogatás:
- [x] React + JSX
- [x] Webpack 2
  * [x] ES6
  * [x] SCSS
  * [x] dev-server
  * [x] Hot Module Replacement
  * [x] styles loader
  * [x] ProvidePlugin
  * [x] jpg/svg
  * [x] PostCSS
  * [ ] wav/mp3
- [ ] ESLint
- [ ] SCSSLint

## Parancsok:
- npm start: Elindítja a dev-servert, ami elérhető a localhost:8080-on.
- npm run build: Library-ként buildeli az appot, amit aztán más projectben lehet importálni.

### Fejlesztés megkezdése:
A components/app könyvtárban található App.jsx fájlt módosítva tudod bővíteni a sandboxot.

Minden új komponenst a components könyvtárba tegyél, kisbetűs könyvtárnévvel és nagybetűs kezdéssel a fájlnévnél.

Komponenshez tartozó SCSS fájlt csak egyszerűen importáld be:
`import styles from './MyComponentStyle.scss'`
Ezután a `styles` objectet használhatod, amiben az scss-ben kifejtett classokat találod.
