# Contributing to Short Notes

First off, thank you for considering contributing to Short Notes! 🎉 It's people like you that make Short Notes such a great tool.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Project Structure](#project-structure)
- [Coding Guidelines](#coding-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Community](#community)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible using our [bug report template](.github/ISSUE_TEMPLATE/bug_report.md).

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. Create an issue using our [feature request template](.github/ISSUE_TEMPLATE/feature_request.md) and provide detailed information.

### Improving Documentation

Documentation improvements are always welcome! Use our [documentation improvement template](.github/ISSUE_TEMPLATE/documentation_improvement.md) to suggest changes.

### Your First Code Contribution

Unsure where to begin? Look for issues labeled:
- `good first issue` - Issues suitable for beginners
- `help wanted` - Issues that need attention
- `bug` - Bug fixes needed
- `documentation` - Documentation improvements

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v16.0.0 or higher
- **npm**: v7.0.0 or higher (or yarn/pnpm)
- **Git**: Latest version

### Fork and Clone

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/short-notes.git
   cd short-notes
   ```

3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/short-notes.git
   ```

### Install Dependencies

```bash
npm install
```

### Set Up Environment

Create a `.env` file in the root directory if needed:
```env
# Add your environment variables here
VITE_API_URL=your_api_url_here
```

## 🔧 Development Workflow

### Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in terminal).

### Build for Production

```bash
npm run build
```

Build output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

Fix linting issues automatically:
```bash
npm run lint:fix
```

### Format Code

If Prettier is configured:
```bash
npm run format
```

## 📂 Project Structure

```
short-notes/
├─ public/                    # Static assets
├─ src/
│  ├─ assets/                 # Images, fonts, etc.
│  ├─ components/             # React components
│  │  ├─ Home.jsx             # Home page component
│  │  ├─ Navbar.jsx           # Navigation component
│  │  ├─ Paste.jsx            # Paste creation component
│  │  └─ ViewPaste.jsx        # Paste viewing component
│  ├─ data/                   # Static data files
│  │  └─ Navbar.js            # Navbar configuration
│  ├─ redux/                  # Redux store and slices
│  │  ├─ pasteSlice.js        # Paste state management
│  │  └─ store.js             # Redux store configuration
│  ├─ utils/                  # Utility functions
│  │  └─ formatDate.js        # Date formatting utilities
│  ├─ App.jsx                 # Main App component
│  ├─ App.css                 # App-level styles
│  ├─ main.jsx                # Application entry point
│  └─ index.css               # Global styles
├─ .gitignore
├─ eslint.config.js           # ESLint configuration
├─ index.html                 # HTML template
├─ package.json               # Dependencies and scripts
├─ README.md                  # Project documentation
└─ vite.config.js             # Vite configuration
```

## 📝 Coding Guidelines

### General Rules

- **Write clean, readable code** with meaningful variable names
- **Follow the DRY principle** (Don't Repeat Yourself)
- **Keep functions small and focused** on a single task
- **Add comments** for complex logic
- **Remove console.log** statements before committing
- **No commented-out code** in commits

### React Best Practices

#### Component Structure

```javascript
// Component imports
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Third-party imports
import { toast } from 'react-hot-toast';

// Local imports
import { addPaste } from '../redux/pasteSlice';
import './ComponentName.css';

const ComponentName = ({ prop1, prop2 }) => {
  // Hooks at the top
  const [state, setState] = useState('');
  const dispatch = useDispatch();
  const data = useSelector(state => state.paste.pastes);

  // Event handlers
  const handleClick = () => {
    // Implementation
  };

  // useEffect hooks
  useEffect(() => {
    // Side effects
  }, []);

  // Render
  return (
    <div className="component-name">
      {/* JSX content */}
    </div>
  );
};

export default ComponentName;
```

#### Naming Conventions

- **Components**: `PascalCase` (e.g., `ViewPaste.jsx`, `Navbar.jsx`)
- **Files**: Match component name (e.g., `Navbar.jsx` not `navbar.jsx`)
- **Functions/Variables**: `camelCase` (e.g., `handleSubmit`, `userName`)
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `MAX_LENGTH`, `API_URL`)
- **Custom Hooks**: Start with `use` (e.g., `useLocalStorage`, `useDebounce`)
- **CSS Classes**: `kebab-case` (e.g., `navbar-container`, `button-primary`)

#### Hooks Rules

✅ **DO:**
```javascript
// Hooks at component top level
const [count, setCount] = useState(0);
const dispatch = useDispatch();

// Conditional logic inside hooks
useEffect(() => {
  if (condition) {
    // Do something
  }
}, [condition]);
```

❌ **DON'T:**
```javascript
// Hooks inside conditions
if (condition) {
  const [count, setCount] = useState(0); // ❌ Wrong!
}

// Hooks inside loops
for (let i = 0; i < 10; i++) {
  useEffect(() => {}); // ❌ Wrong!
}
```

#### State Management

- Use **local state** for component-specific data
- Use **Redux** for global application state
- Keep state as **minimal** as possible
- Avoid **prop drilling** - use Redux or Context for deeply nested data

#### Performance

- Use `React.memo()` for expensive components
- Use `useMemo()` and `useCallback()` appropriately
- Lazy load routes and heavy components
- Optimize images and assets

#### Accessibility

- Use semantic HTML (`<nav>`, `<main>`, `<button>`, etc.)
- Add proper ARIA labels for screen readers
- Ensure keyboard navigation works
- Maintain color contrast ratios (WCAG AA standard)
- Include focus states for interactive elements

### CSS/Styling

- Use **CSS Modules** or **Tailwind utility classes**
- Avoid **inline styles** unless necessary
- Keep styles **scoped to components**
- Use **semantic class names**
- Ensure **responsive design** (mobile-first approach)

Example:
```css
/* Component-specific styles */
.paste-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

/* Responsive */
@media (min-width: 768px) {
  .paste-container {
    flex-direction: row;
  }
}
```

### Error Handling

Always handle errors gracefully:

```javascript
try {
  // Code that might throw
  const result = await fetchData();
} catch (error) {
  console.error('Error fetching data:', error);
  toast.error('Failed to load data. Please try again.');
}
```

## 💬 Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that don't affect code meaning (white-space, formatting)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to build process or auxiliary tools

### Examples

```bash
feat(paste): add copy to clipboard functionality

Add a button to copy paste content to clipboard with toast notification.

Closes #123
```

```bash
fix(navbar): resolve mobile menu toggle issue

Fixed an issue where the mobile menu wouldn't close after clicking a link.

Fixes #456
```

```bash
docs(readme): update installation instructions

Added detailed steps for setting up the development environment.
```

### Scope Examples

- `paste` - Paste-related features
- `navbar` - Navigation component
- `redux` - State management
- `ui` - User interface changes
- `a11y` - Accessibility improvements

## 🔀 Pull Request Process

### Before Submitting

1. **Create a branch** from `dev`:
   ```bash
   git checkout dev
   git pull upstream dev
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and test thoroughly

3. **Update documentation** if needed

4. **Run linting** and fix issues:
   ```bash
   npm run lint
   ```

5. **Test your build**:
   ```bash
   npm run build
   npm run preview
   ```

### Branch Naming

Use descriptive branch names:
- `feature/add-dark-mode`
- `fix/navbar-responsive-issue`
- `docs/update-contributing-guide`
- `refactor/simplify-paste-logic`

### Submit Pull Request

1. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open a Pull Request** against the `dev` branch (NOT `main`)

3. **Fill out the PR template** completely

4. **Link related issues** using keywords like `Closes #123`

5. **Add screenshots** for UI changes

6. **Wait for review** - Be patient and responsive to feedback

### PR Checklist

Before submitting, ensure:

- [ ] Code follows project style guidelines
- [ ] Self-review of code completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings in console
- [ ] Tested on multiple browsers
- [ ] Tested responsive design
- [ ] Accessibility verified
- [ ] Commit messages follow convention
- [ ] Branch is up-to-date with `dev`

### Review Process

1. **Automated checks** run (linting, build)
2. **Maintainer review** (may request changes)
3. **Address feedback** and push updates
4. **Approval and merge** into `dev`
5. **Periodic releases** to `main`

## 🌟 Style Guide

### JavaScript/JSX

```javascript
// Use arrow functions for components
const MyComponent = () => {
  return <div>Content</div>;
};

// Destructure props
const Button = ({ onClick, children, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

// Use template literals
const message = `Hello, ${userName}!`;

// Use optional chaining
const address = user?.profile?.address;

// Prefer const over let, never var
const MAX_COUNT = 100;
let counter = 0; // Only if reassignment needed
```

### File Organization

- One component per file
- Group related components in folders
- Keep utility functions in `utils/`
- Keep constants in a separate file

## 🐛 Debugging Tips

### Common Issues

**Issue**: Changes not reflecting
```bash
# Clear cache and restart dev server
rm -rf node_modules/.vite
npm run dev
```

**Issue**: Build errors
```bash
# Clean install dependencies
rm -rf node_modules package-lock.json
npm install
```

**Issue**: Redux state issues
- Check Redux DevTools browser extension
- Verify action creators and reducers
- Check initial state in `store.js`

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [JavaScript MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🎉 Community

### Getting Help

- Open a [discussion](../../discussions) for questions
- Join our community chat (if available)
- Check existing [issues](../../issues) and [pull requests](../../pulls)

### Recognition

Contributors are recognized in:
- README.md contributors section
- Release notes
- GitHub contributors page

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to Short Notes!** 🙏

Your contributions make this project better for everyone. We appreciate your time and effort!

If you have any questions, feel free to ask in the discussions or open an issue.

Happy coding! 🚀
