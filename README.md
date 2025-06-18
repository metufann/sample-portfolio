# Berfin Candemir - Personal Portfolio

A modern, responsive personal portfolio website for Berfin Candemir, an Electrical-Electronics Engineer based in Ankara, Türkiye.

## Features

- 🌐 Responsive design with mobile-first approach
- 🌙 Dark/Light mode toggle
- 🌍 Multilingual support (English & Turkish)
- ✨ Smooth animations and transitions
- 📱 Mobile-friendly navigation
- 🎨 Modern and clean UI with Tailwind CSS
- 🚀 Built with React + Vite

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- i18next
- React Icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/berfin-portfolio.git
   cd berfin-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/         # React components
├── i18n/              # Internationalization
│   ├── config.ts      # i18n configuration
│   └── locales/       # Translation files
├── App.tsx           # Main App component
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## Customization

### Adding New Translations

1. Add new translation keys to `src/i18n/locales/en.json` and `src/i18n/locales/tr.json`
2. Use the translation hook in your components:
   ```typescript
   import { useTranslation } from 'react-i18next';
   
   const { t } = useTranslation();
   t('your.translation.key');
   ```

### Modifying Theme Colors

Edit the `tailwind.config.js` file to customize the color scheme and other theme settings.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Berfin Candemir - [bercndmr@gmail.com](mailto:bercndmr@gmail.com)

Project Link: [https://github.com/yourusername/berfin-portfolio](https://github.com/yourusername/berfin-portfolio)
