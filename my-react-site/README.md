# Portfolio site

A black and red React/Vite portfolio starter. Replace the bracketed placeholder copy in `src/App.jsx` with your own details.

## Run locally

```bash
npm install
npm run dev
```

## Run with Docker

```bash
docker build -t portfolio-site .
docker run --rm -p 8080:80 portfolio-site
```

Open `http://localhost:8080` after starting the container.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
