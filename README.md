# MERN + Python — Full-Stack Application

A full-stack web application built with a **MERN** stack (MongoDB, Express, React, Node.js) and a **Python/FastAPI** service for cryptocurrency price prediction. The app includes user auth, forms, a trading advisory chatbot, market data, and ML-based crypto price predictions.

---

## Architecture Overview

| Layer      | Tech           | Purpose |
|-----------|----------------|--------|
| **Frontend** | React 18, Redux, React Router | UI, chatbot, charts, forms, auth |
| **Backend**  | Node.js, Express, MongoDB     | REST API, auth (JWT), form & message storage |
| **Python**   | FastAPI, scikit-learn, pandas | ML prediction API (candle-based & current price) |

- **Backend** runs on port **8800** (or `process.env.PORT`).
- **Python API** runs on port **8000** (frontend expects `http://localhost:8000`).
- **Frontend** runs on port **3000** (React dev server), and proxies API calls as configured.

---

## Prerequisites

- **Node.js** (v16+)
- **npm** or **yarn**
- **MongoDB** (local or Atlas connection string)
- **Python** 3.9+ (for the prediction API)

---

## Quick Start

### 1. Clone and install dependencies

```bash
git clone <repo-url>
cd mern
npm install
cd frontend && npm install && cd ..
```

### 2. Backend (Node.js + Express)

Create a `.env` in the project root with:

```env
URI=mongodb://localhost:27017/yourdb
# or MongoDB Atlas:
# URI=mongodb+srv://user:pass@cluster.mongodb.net/yourdb
PORT=8800
JWT_SECRET=your-jwt-secret
```

Start the backend:

```bash
npm run dev
# or: npm start
```

Runs at **http://localhost:8800**.

### 3. Python prediction API (FastAPI)

From the project root:

```bash
cd python
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Runs at **http://localhost:8000**.  
API docs: **http://localhost:8000/docs**.

*Note: Run from the `python/` directory so paths to `models/*.joblib` and `App/` resolve correctly.*

### 4. Frontend (React)

From the project root:

```bash
cd frontend
npm start
```

Runs at **http://localhost:3000**.  
Frontend is configured to call:

- Backend: `http://localhost:8800` (auth, form, messages).
- Python API: `http://localhost:8000` (predictions, candles).

---

## Project Structure

```
mern/
├── frontend/                 # React app
│   ├── public/
│   ├── src/
│   │   ├── Components/       # Pages & UI (Home, Form, Login, Market, Chatbot, etc.)
│   │   ├── chatbot/          # Chatbot config, widgets, actions
│   │   ├── Actions/          # Redux async (user, messages)
│   │   ├── reducers/
│   │   ├── config/           # store, coins, knowledge base
│   │   └── styles/
│   └── package.json
├── backend/                  # Express API
│   ├── config/               # db, middleware, JWT
│   ├── Controllers/          # user, message
│   ├── routes/               # user, form, messages
│   ├── schemas/              # Mongoose models (user, form, message)
│   └── index.js
├── python/                   # FastAPI prediction service
│   ├── main.py               # FastAPI app, CORS, routers
│   ├── router/
│   │   ├── candles.py        # POST /api/candles/{Bitcoin|Ethereum|Solana|Polygon|Dogecoin}
│   │   └── price.py          # GET /api/prediction/Bitcoin
│   ├── model.py              # Pydantic request body (open, high, low, day)
│   ├── models/               # priceprediction logic, *.joblib ML models
│   └── App/                  # inference, serialized models (e.g. linear_reg_10_24.sav)
├── .env                      # Backend: URI, PORT, JWT_SECRET
├── package.json              # Root scripts, backend deps
└── README.md
```

---

## Frontend

- **Stack:** React 18, React Router 6, Redux (+ Thunk), Axios, react-chatbot-kit.
- **Main routes:** `/`, `/form`, `/market`, `/login`, `/register`, `/chatbot`, `/charts`, `/dashboard`, `/results`, `/terms`, `/privacy`.
- **Features:**
  - Auth (login/register) and protected flows.
  - Form submission and success page.
  - Market view and charts (e.g. Binance data).
  - Advisory chatbot with custom widgets (candles, price, AI prediction, trading tips).
  - Dashboard and results views.

**Scripts:**

| Command   | Description        |
|----------|--------------------|
| `npm start` | Start dev server (React) |
| `npm run build` | Production build   |
| `npm test`     | Run tests          |

**Env:** Frontend uses hardcoded `localhost` URLs for backend (8800) and Python (8000). For production, switch to env-based API base URLs.

---

## Backend

- **Stack:** Express, Mongoose, bcryptjs, jsonwebtoken, cors, dotenv.
- **Database:** MongoDB (connection via `process.env.URI`).

**API routes:**

| Method | Route              | Description        |
|--------|--------------------|--------------------|
| POST   | `/api/user/register` | Register user   |
| POST   | `/api/user/login`    | Login, returns JWT |
| POST   | `/api/form/new`      | Submit form (body as stored) |
| POST   | `/api/message`        | Create message (auth) |
| GET    | `/api/message`       | Get messages (auth) |
| DELETE | `/api/message`       | Delete messages (auth) |

**Scripts (from repo root):**

| Command     | Description           |
|------------|------------------------|
| `npm start`  | `node backend/index.js` |
| `npm run dev`| `nodemon backend/index.js` |

**Env:** `.env` must define `URI` (MongoDB) and optionally `PORT`, `JWT_SECRET`.

---

## Python (FastAPI prediction API)

- **Stack:** FastAPI, Pydantic, pandas, scikit-learn (joblib), and helpers (e.g. yfinance, cryptocmd) used in `models/priceprediction.py`.
- **Role:** Serve ML-based crypto price predictions and current close price.

**Endpoints:**

| Method | Route                          | Description |
|--------|--------------------------------|-------------|
| GET    | `/api/prediction/Bitcoin`      | Current BTC close price (from external data) |
| POST   | `/api/candles/Bitcoin`         | Price prediction for Bitcoin (OHLC + day) |
| POST   | `/api/candles/Ethereum`        | Same for Ethereum |
| POST   | `/api/candles/Solana`          | Same for Solana |
| POST   | `/api/candles/Polygon`         | Same for Polygon (MATIC) |
| POST   | `/api/candles/Dogecoin`        | Same for Dogecoin |

**POST body (candles):**

```json
{
  "open": 40000.0,
  "high": 41000.0,
  "low": 39500.0,
  "day": 2
}
```

**Run:**

```bash
cd python
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

**CORS:** Configured for `localhost` (e.g. 3000, 3003, 3004) so the React app can call the API.

---

## Environment summary

| Variable    | Where   | Purpose           |
|------------|---------|-------------------|
| `URI`      | Backend | MongoDB URL       |
| `PORT`     | Backend | Server port (default 8800) |
| `JWT_SECRET` | Backend | Signing auth tokens |

Frontend and Python use fixed `localhost` URLs in code; for production, use environment-based config for API bases.

---

## Deployment note

- **Backend:** `package.json` includes a `heroku-postbuild` that installs and builds the frontend; `npm start` runs `node backend/index.js`. Set `URI`, `PORT`, and `JWT_SECRET` in the host’s env.
- **Frontend:** Build with `npm run build` (in `frontend/`) and serve the `build` folder or deploy to a static host; point API and Python URLs to deployed backend and Python services.
- **Python:** Deploy the `python/` app (e.g. with `uvicorn` or a cloud Python runtime), then set the frontend’s prediction API base URL to that host.

---

## License

ISC (see root `package.json`).
