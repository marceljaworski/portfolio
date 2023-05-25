# portfolio - page under construction

This is a minimal React site created with Vite with an implemented React Router menu. 

<!-- ![grafik](https://user-images.githubusercontent.com/446574/200960596-bdc5bd34-ca8c-4c03-9c0f-e67e9bf7d111.png) -->

## includes:

- built with **Vite**
- **React Router** menu
- TypeScript
- Sass
- **useContext**
- **CLI** to easily create pages (`npm run cp Info` creates info page)
- this site has **React Router 404 bug fixes** implemented for both Netlify (`public/_redirects` file) and Vercel (`vercel.json` file)
- page-load flicker bug fixed in index.html:
```
  <style>
    body {
      background-color: #333;
    }
  </style>
```

## how to install

- download zip
- copy all files to new directory, e.g. `/home/yourname/projects/site001`
- open VSCode in that directory (`code .`)
- `npm i`
- `npm run dev`
