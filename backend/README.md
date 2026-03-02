# SHORT-NOTES — Full Stack Paste App

## 📁 Project Structure

```
SHORT-NOTES/
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── pasteModel.js
│   ├── pasteController.js
│   ├── pasteRoutes.js
│   └── package.json
├── src/
│   ├── components/
│   │   ├── Home.jsx        ← updated (API calls)
│   │   ├── Paste.jsx       ← updated (API calls)
│   │   ├── ViewPaste.jsx   ← updated (API calls)
│   │   └── Navbar.jsx
│   ├── redux/
│   │   ├── pasteSlice.js   ← updated (async thunks)
│   │   └── store.js
│   ├── data/
│   │   └── Navbar.js
│   ├── utlis/
│   │   └── formatDate.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── package.json (frontend)
```

---

## 🚀 How to Run

### 1. Start the Backend
```bash
cd backend
npm install
npm run dev
```
Backend runs at: **http://localhost:5000**

### 2. Start the Frontend
```bash
# from the project root
npm install
npm run dev
```
Frontend runs at: **http://localhost:5173**

---

## 🔌 What Changed (Frontend → Backend)

| File | Before | After |
|---|---|---|
| `pasteSlice.js` | localStorage + sync reducers | Async thunks hitting REST API |
| `Home.jsx` | dispatch sync action | dispatch async `addToPastes` / `updatePastes` |
| `Paste.jsx` | reads from Redux store only | fetches from backend on mount |
| `ViewPaste.jsx` | reads from Redux store | direct `fetch()` call to `/api/pastes/:id` |

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/pastes` | Get all pastes |
| GET | `/api/pastes/:id` | Get paste by ID |
| POST | `/api/pastes` | Create paste |
| PUT | `/api/pastes/:id` | Update paste |
| DELETE | `/api/pastes/:id` | Delete paste |
| DELETE | `/api/pastes` | Delete all |
