# 📝 Short Notes :

> A modern, fast, and elegant note-taking and paste-sharing web application built with React, Redux Toolkit, and Vite.

![Short Notes Banner](./public/banner.png) <!-- Add your banner image -->

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.x-purple.svg)](https://redux-toolkit.js.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF.svg)](https://vitejs.dev/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](.github/CONTRIBUTING.md)

## 🌟 Demo

**Live Demo:** [https://mythoughts-gray.vercel.app](https://mythoughts-gray.vercel.app)

## 📸 Screenshots

<details>
<summary>Click to view screenshots</summary>

### Home Page
![Home Page](./public/screenshots/home.png)

### Create Paste
![Create Paste](./public/screenshots/create.png)

### View Paste
![View Paste](./public/screenshots/view.png)

</details>

## ✨ Features

- 📝 **Create & Save Notes** - Quickly create and save your notes/pastes
- 👁️ **View Pastes** - Access your saved pastes anytime
- 🔍 **Search & Filter** - Find your notes quickly
- 💾 **Local Storage** - Persistent storage without backend
- 🎨 **Clean UI** - Modern and intuitive interface
- 📱 **Responsive Design** - Works on all devices
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🔄 **State Management** - Redux Toolkit for predictable state
- 🎯 **URL Routing** - React Router for seamless navigation

## 🚀 Tech Stack

- **Frontend Framework:** React 18.x
- **State Management:** Redux Toolkit
- **Build Tool:** Vite
- **Styling:** CSS3 (with potential Tailwind CSS)
- **Routing:** React Router DOM
- **Storage:** Browser Local Storage
- **Linting:** ESLint

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v16.0.0 or higher ([Download](https://nodejs.org/))
- **npm**: v7.0.0 or higher (comes with Node.js)
- **Git**: Latest version ([Download](https://git-scm.com/))

## 🛠️ Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/VinayKumar42/short-notes.gits
   cd short-notes
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (if needed)
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

### Running Locally

```bash
# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 📂 Project Structure

```
short-notes/
├─ public/                    # Static assets
├─ src/
│  ├─ assets/                 # Images, fonts, icons
│  ├─ components/             # React components
│  │  ├─ Home.jsx             # Homepage component
│  │  ├─ Navbar.jsx           # Navigation bar
│  │  ├─ Paste.jsx            # Create/edit paste
│  │  └─ ViewPaste.jsx        # View single paste
│  ├─ data/                   # Static data
│  │  └─ Navbar.js            # Navigation configuration
│  ├─ redux/                  # Redux store
│  │  ├─ pasteSlice.js        # Paste state slice
│  │  └─ store.js             # Store configuration
│  ├─ utils/                  # Utility functions
│  │  └─ formatDate.js        # Date formatting
│  ├─ App.jsx                 # Root component
│  ├─ App.css                 # App styles
│  ├─ main.jsx                # Entry point
│  └─ index.css               # Global styles
├─ .gitignore
├─ eslint.config.js           # ESLint configuration
├─ index.html                 # HTML template
├─ package.json               # Dependencies
├─ vite.config.js             # Vite configuration
└─ README.md                  # This file
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |

## 🌐 Environment Variables

Create a `.env` file in the root directory:

```env
# API Configuration (if needed)
VITE_API_URL=your_api_url_here

# Other configurations
VITE_APP_NAME=Short Notes
VITE_APP_VERSION=1.0.0
```

> **Note:** Vite exposes env variables with `VITE_` prefix to the client.

## 🧩 Key Components

### Home.jsx
Displays list of all saved pastes with search and filter functionality.

### Navbar.jsx
Navigation component with links to different sections of the app.

### Paste.jsx
Form component for creating and editing pastes with title, content, and tags.

### ViewPaste.jsx
Displays individual paste details with options to edit or delete.

### pasteSlice.js
Redux slice managing paste state with actions for add, update, delete, and fetch operations.

## 🎯 Usage Examples

### Creating a Paste

```javascript
import { useDispatch } from 'react-redux';
import { addPaste } from './redux/pasteSlice';

const CreatePaste = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    dispatch(addPaste({
      id: Date.now(),
      title: data.title,
      content: data.content,
      createdAt: new Date().toISOString()
    }));
  };

  // ...rest of component
};
```

### Viewing Pastes

```javascript
import { useSelector } from 'react-redux';

const PasteList = () => {
  const pastes = useSelector(state => state.paste.pastes);

  return (
    <div>
      {pastes.map(paste => (
        <PasteCard key={paste.id} paste={paste} />
      ))}
    </div>
  );
};
```

## 🤝 Contributing

We welcome contributions from everyone! Please read our [Contributing Guidelines](.github/CONTRIBUTING.md) before submitting a PR.

### Quick Start

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Types

- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation improvements
- 🎨 UI/UX enhancements
- ⚡ Performance optimizations
- ♿ Accessibility improvements

## 📜 Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](.github/CODE_OF_CONDUCT.md). By participating, you agree to uphold this code.

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature idea? Please [open an issue](https://github.com/yourusername/short-notes/issues/new/choose) using our issue templates.

## 🔒 Security

Found a security vulnerability? Please review our [Security Policy](.github/SECURITY.md) for reporting guidelines.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors & Contributors

- **Your Name** - *Initial work* - [@VinayKumar42](https://github.com/VinayKumar42)

See the list of [contributors](https://github.com/VinayKumar42/short-notes/contributors) who participated in this project.

## 🙏 Acknowledgments

- React team for the amazing framework
- Redux Toolkit for simplified state management
- Vite for blazing fast build tool
- All contributors and supporters

## 📞 Support

- 📧 Email: vinayboss9669@gmail.com
- 💬 Discussions: [GitHub Discussions](https://github.com/VinayKumar42/short-notes/discussions)

## 🗺️ Roadmap

- [ ] Dark/Light theme toggle
- [ ] Export pastes as PDF/Markdown
- [ ] Categories and tags
- [ ] Search functionality
- [ ] Rich text editor
- [ ] Cloud sync (optional backend)
- [ ] Keyboard shortcuts
- [ ] Paste expiration dates
- [ ] Sharing via unique URLs

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/short-notes?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/short-notes?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/short-notes)
![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/short-notes)

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/VinayKumar42">Vinay Kumar</a>
</p>

<p align="center">
  <a href="#-short-notes">Back to top ⬆️</a>
</p>
