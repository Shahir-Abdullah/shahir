# Shahir Abdullah Portfolio

Angular portfolio site for GitHub Pages.

## Local development

```bash
npm install
npm start
```

Open `http://127.0.0.1:4200/`.

## Production build

```bash
npm run build
```

The production bundle is generated in `dist/shahir-portfolio`.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` builds the Angular app and deploys the `dist/shahir-portfolio` folder to GitHub Pages on pushes to `main` or `master`.
