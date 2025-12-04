# Premium Mobile Car Detailing Website

A modern, responsive React website for a mobile car detailing business.

## Features

- 🎨 Beautiful, modern UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Vite
- 🎯 Smooth scrolling navigation
- 📋 Service packages showcase
- 📝 Contact/booking form
- ✨ Professional animations and transitions

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
mobile-detailing/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Hero.jsx         # Hero section
│   │   ├── Services.jsx     # Services showcase
│   │   ├── About.jsx        # About/Why Choose Us
│   │   ├── Contact.jsx      # Contact form
│   │   └── Footer.jsx       # Footer
│   ├── App.jsx              # Main app component
│   ├── App.css              # App styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
└── vite.config.js           # Vite configuration
```

## Customization

### Update Business Information

- **Company Name**: Edit the logo text in `Header.jsx` and `Footer.jsx`
- **Contact Info**: Update phone, email, and address in `Contact.jsx` and `Footer.jsx`
- **Services**: Modify service packages in `Services.jsx`
- **Pricing**: Update prices in the services array in `Services.jsx`

### Styling

- Colors are defined in CSS variables in `src/index.css`
- Each component has its own CSS file for easy customization
- The design uses a modern color scheme that can be easily adjusted

## Technologies Used

- React 18
- Vite
- CSS3 (with CSS Variables)
- Google Fonts (Poppins)

## License

This project is open source and available for personal and commercial use.

