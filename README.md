# Netflix Clone (MERN Stack)

A production-ready, full-stack Netflix clone built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- **Authentication**: Secure Login/Register with JWT (httpOnly cookies).
- **Dashboard**: Browse movies fetched from OMDb API.
- **Search**: Real-time movie search.
- **Responsive UI**: Tailwind CSS styling with dark mode.

## Prerequisites

- Node.js (v14+)
- MongoDB (Local or Atlas URI)

## Setup Instructions

1.  **Clone the repository** (if applicable) or navigate to project root.

2.  **Install Dependencies**:

    ```bash
    # Backend
    cd server
    npm install

    # Frontend
    cd ../client
    npm install
    ```

3.  **Environment Variables**:
    - Backend: `server/.env` is already configured with defaults (Port 5000, Mongo Local).
    - Frontend: Proxy is configured in `vite.config.js`.

4.  **Run the Application**:

    Open two terminals:

    Terminal 1 (Backend):
    ```bash
    cd server
    node index.js
    ```

    Terminal 2 (Frontend):
    ```bash
    cd client
    npm run dev
    ```

5.  **Access the App**:
    Open [http://localhost:5173](http://localhost:5173) in your browser.

## API Endpoints

- `POST /api/auth/register` - Create user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/movies/search?s=Title` - Search movies (Protected)

## Tech Stack

- **Frontend**: React (Vite), Tailwind CSS, Axios, React Router
- **Backend**: Node.js, Express, Mongoose, JWT, Bcrypt
- **Database**: MongoDB

Enjoy!
