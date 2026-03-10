# 📝 Short Notes

> A modern, full-stack note-taking and paste-sharing web application built with React, Redux Toolkit, Node.js, and MongoDB Atlas.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.x-blue.svg)](https://reactjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.x-purple.svg)](https://redux-toolkit.js.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF.svg)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-22.x-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green.svg)](https://www.mongodb.com/atlas)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](.github/CONTRIBUTING.md)

## 🌟 Demo

**Live Demo:** [https://mythoughts-gray.vercel.app](https://mythoughts-gray.vercel.app)

## ✨ Features

- 📝 **Create & Save Notes** — Quickly create and save your notes/pastes
- ✏️ **Edit Pastes** — Update your existing notes anytime
- 🗑️ **Delete Pastes** — Remove single or all pastes
- 👁️ **View Pastes** — Read your saved pastes with a clean viewer
- 🔍 **Search** — Find your notes by title instantly
- 📋 **Copy to Clipboard** — One-click copy for any paste
- 📤 **Share on WhatsApp** — Share pastes directly
- 🔐 **Authentication** — Signup/Login with JWT-based auth
- 🌙 **Dark Mode** — Toggle between light and dark themes
- 📱 **Responsive Design** — Works on all devices
- ⚡ **Lightning Fast** — Built with Vite for optimal performance

## 🚀 Tech Stack

### Frontend
- **Framework:** React 19
- **State Management:** Redux Toolkit
- **Routing:** React Router DOM v7
- **Styling:** Tailwind CSS v4
- **Build Tool:** Vite
- **Icons:** Lucide React
- **Notifications:** React Hot Toast

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas (cloud)
- **ODM:** Mongoose
- **Auth:** JWT + bcryptjs
- **Hosting:** Railway

## 📋 Prerequisites

- **Node.js** v18+ ([Download](https://nodejs.org/))
- **npm** v7+ (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))
- **MongoDB Atlas** account (free) — [Sign up](https://www.mongodb.com/atlas)

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/VinayKumar42/short-notes.git
cd short-notes
```

### 2. Setup the Backend
```bash
cd backend
npm install
cp .env.example .env
```

Edit `backend/.env` with your values:
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the backend:
```bash
npm run dev
```

### 3. Setup the Frontend
```bash
# from the root of the project
npm install
cp .env.example .env
```

Edit `.env` with your backend URL:
```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📂 Project Structure

```
short-notes/
├── backend/                  # Node.js + Express API
│   ├── authController.js     # Auth logic (signup, login)
│   ├── authMiddleware.js     # JWT verification
│   ├── authRoutes.js         # Auth routes
│   ├── db.js                 # MongoDB connection
│   ├── pasteController.js    # Paste CRUD logic
│   ├── pasteModel.js         # Mongoose paste schema
│   ├── pasteRoutes.js        # Paste routes
│   ├── server.js             # Express app entry
│   ├── userModel.js          # Mongoose user schema
│   ├── .env.example          # Backend env template
│   └── package.json
├── src/                      # React frontend
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Home.jsx          # Create/edit paste
│   │   ├── Navbar.jsx
│   │   ├── Paste.jsx         # All pastes list
│   │   ├── ProtectedRoute.jsx
│   │   └── ViewPaste.jsx     # View single paste
│   ├── config.js             # API URL config
│   ├── data/
│   │   └── Navbar.js
│   ├── pages/
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── redux/
│   │   ├── authSlice.js
│   │   ├── pasteSlice.js
│   │   ├── store.js
│   │   └── themeSlice.js
│   ├── utils/
│   │   └── formatDate.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example              # Frontend env template
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## 🔧 Available Scripts

### Frontend
| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

### Backend
| Command | Description |
|---------|-------------|
| `npm run dev` | Start with nodemon (auto-reload) |
| `npm start` | Start production server |

## 🌐 Environment Variables

### Frontend (`.env`)
```env
VITE_API_URL=http://localhost:5000/api
```

### Backend (`backend/.env`)
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
```

## 🤝 Contributing

We welcome contributions from everyone! Please read our [Contributing Guidelines](.github/CONTRIBUTING.md) before submitting a PR.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature idea? Please [open an issue](https://github.com/VinayKumar42/short-notes/issues/new/choose).

## 🔒 Security

Found a security vulnerability? Please review our [Security Policy](.github/SECURITY.md).

## 📝 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## 👥 Authors & Contributors

- **Vinay Kumar** — *Initial work* — [@VinayKumar42](https://github.com/VinayKumar42)

See the list of [contributors](https://github.com/VinayKumar42/short-notes/contributors).

## 🗺️ Roadmap

- [ ] User-specific pastes (each user sees only their own)
- [ ] Export pastes as PDF/Markdown
- [ ] Categories and tags
- [ ] Rich text editor
- [ ] Paste expiration dates
- [ ] Keyboard shortcuts

---

<p align="center">Made with ❤️ by <a href="https://github.com/VinayKumar42">Vinay Kumar</a></p>
<p align="center"><a href="#-short-notes">Back to top ⬆️</a></p>