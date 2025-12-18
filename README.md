# AnimeFlix - Anime Streaming PWA

This is a starter project for an Anime Streaming Progressive Web App (PWA) built with React.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/Naiml007/anime-streaming-pwa)


## Features

*   **Progressive Web App (PWA):** Optimized for mobile phones with offline support, caching, and installability.
*   **Modern UI/UX:** A clean, modern UI/UX with smooth transitions and a minimal design.
*   **Fast, Intelligent Search:** Search for anime by title with auto-complete and filters.
*   **Anime Information:** View detailed information about anime, including summaries and episode lists.
*   **Streaming:** Stream anime directly in the app.
*   **Responsive Design:** Optimized for a seamless experience on all devices.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v14 or later)
*   npm

### Installation

1.  **Fork this repository:**
    *   Click the "Fork" button at the top right of this page.

2.  **Clone your forked repository:**
    ```sh
    git clone https://github.com/your_username/anime-streaming-pwa.git
    ```
3.  **Install NPM packages:**
    ```sh
    cd anime-streaming-pwa
    npm install
    ```

## API Deployment (Render)

This project uses the [Consumet API](https://github.com/consumet/consumet-api) to fetch anime data. You can deploy your own instance of the API to [Render](https://render.com/) by following these steps:

1.  **Fork the Consumet API repository:**
    *   Go to the [Consumet API repository](https://github.com/consumet/consumet-api) and click the "Fork" button.

2.  **Create a new Web Service on Render:**
    *   Go to your Render dashboard and click "New" > "Web Service".
    *   Connect your GitHub account and select your forked repository.
    *   Give your service a name (e.g., `consumet-api`).
    *   Select the `main` branch.
    *   For the "Build Command", enter `npm install`.
    *   For the "Start Command", enter `npm start`.
    *   Click "Create Web Service".

3.  **Get your API URL:**
    *   Once the deployment is complete, Render will provide you with a URL for your API (e.g., `https://consumet-api.onrender.com`).

## PWA Configuration

To configure the PWA to use your deployed API, you need to create a `.env` file in the root of the project and add the following:

```
REACT_APP_API_URL=https://your-api-url.onrender.com
```

Replace `https://your-api-url.onrender.com` with the URL of your deployed Consumet API.

## PWA Deployment (Render)

### One-Click Deploy

1.  **Update the Deploy Button URL:**
    *   In your forked repository on GitHub, edit the `README.md` file.
    *   Replace `https://github.com/your-username/anime-streaming-pwa` in the "Deploy to Render" button's URL with the URL of your forked repository.
    *   Commit the changes.

2.  **Click the Deploy Button:**
    *   Click the "Deploy to Render" button at the top of this README.
    *   Render will automatically use the `render.yaml` file in this repository to configure the deployment.

### Manual Deployment

If you prefer to deploy manually, you can follow these steps:

1.  **Create a new Static Site on Render:**
    *   Go to your Render dashboard and click "New" > "Static Site".
    *   Connect your GitHub account and select your PWA repository.
    *   Render will automatically detect the settings in the `render.yaml` file.
    *   Click "Create Static Site".

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## License

Distributed under the MIT License. See `LICENSE` for more information.
