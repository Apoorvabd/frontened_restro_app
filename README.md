# Restaurant App - Frontend

![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0+-38B2AC?style=flat-square&logo=tailwindcss)
![Zustand](https://img.shields.io/badge/Zustand-State%20Management-764ABC?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

> A modern, responsive React frontend for a Restaurant App that allows users to browse menus, make reservations, and manage orders seamlessly.

---

## 🎯 Features

- ✅ User-friendly navigation and responsive design
- ✅ Menu browsing with detailed item descriptions
- ✅ Reservation system with modal form
- ✅ Order management and history
- ✅ Beautiful carousel for showcasing restaurants
- ✅ Hero section and team showcases
- ✅ Real-time form validation
- ✅ Toast notifications for user feedback
- ✅ Mobile-optimized UI
- ✅ Clean and modular component structure

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React.js** | Frontend framework |
| **Vite** | Fast build tool & dev server |
| **Tailwind CSS** | Utility-first CSS framework |
| **Axios** | HTTP client for API calls |
| **Zustand** | Lightweight state management |
| **React Router** | Client-side routing |
| **React Hot Toast** | Toast notifications |
| **React Scroll** | Smooth scroll navigation |
| **React Icons** | Icon library |

---

## 📁 Folder Structure

```
frontened/
├─ public/                 # Static assets
├─ src/
│  ├─ assets/             # Images, fonts, etc.
│  ├─ components/         # Reusable components
│  │  ├─ About.jsx
│  │  ├─ Carousel.jsx
│  │  ├─ Footer.jsx
│  │  ├─ HeroSection.jsx
│  │  ├─ Menu.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ Qualities.jsx
│  │  ├─ Reservation.jsx  # Modal reservation form
│  │  ├─ Team.jsx
│  │  └─ Whoarewe.jsx
│  ├─ pages/              # Page components
│  │  ├─ Home.jsx         # Main landing page
│  │  ├─ Success.jsx      # Post-reservation success
│  │  └─ NotFound.jsx     # 404 page
│  ├─ App.jsx             # Root component
│  ├─ App.css             # Global styles
│  ├─ main.jsx            # Entry point
│  ├─ store.js            # Zustand state management
│  └─ index.html
├─ .env.example           # Environment variable template
├─ package.json
├─ vite.config.js
├─ tailwind.config.js
├─ postcss.config.js
└─ README.md
```

---

## 🚀 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**

```bash
git clone <repository-url>
cd frontened
```

2. **Install dependencies**

```bash
npm install
```

3. **Create environment file**

```bash
cp .env.example .env.local
```

4. **Update `.env.local` with your backend URL** (if different)

```env
VITE_API_URL=https://restro.up.railway.app
```

5. **Start development server**

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 🔧 Environment Variables

Create a `.env.local` file in the project root:

```env
# Backend API Base URL
VITE_API_URL=https://restro.up.railway.app

# Optional: Add other environment variables as needed
VITE_APP_NAME=Restaurant App
```

> **Note:** Environment variables must start with `VITE_` to be accessible in the frontend.

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint checks |

---

## 🎨 Key Components

### Navbar
- Navigation links with smooth scrolling
- Reservation button with toggle
- Mobile-responsive hamburger menu

### Reservation Modal
- Beautiful fixed overlay with blur effect
- Form validation before submission
- Toast notifications on success/error
- Auto-close after successful booking

### Menu
- Display restaurant items with descriptions
- Responsive grid layout
- Image support

### Hero Section
- Eye-catching landing area
- Call-to-action buttons
- Responsive design

---

## 🔌 API Integration

The app communicates with backend at: **`https://restro.up.railway.app`**

### Endpoints Used

- `POST /api/reservation` — Create a new reservation
  - Body: `{ firstName, lastName, email, date, time, phone }`

Example API call:

```javascript
const response = await axios.post(
  "https://restro.up.railway.app/api/reservation",
  { firstName, lastName, email, date, time, phone },
  {
    headers: { "Content-Type": "application/json" },
    withCredentials: true
  }
);
```

---

## 🎮 State Management (Zustand)

The `store.js` file manages the reservation modal visibility:

```javascript
const useReservationStore = create((set) => ({
  showReservation: false,
  openReservation: () => set({ showReservation: true }),
  closeReservation: () => set({ showReservation: false }),
  toggleReservation: () => set((state) => ({ showReservation: !state.showReservation }))
}));
```

---

## 📸 Screenshots

### Home Page
![Home Page Placeholder]
- Modern hero section with call-to-action

### Reservation Modal
![Reservation Modal Placeholder]
- Modal overlay with form validation

### Menu Section
![Menu Section Placeholder]
- Responsive grid of menu items

### Responsive Design
![Mobile View Placeholder]
- Fully responsive on mobile devices

> *Screenshots coming soon! Add actual screenshots to enhance documentation.*

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Set environment variables in Vercel dashboard
4. Deploy!

```bash
npm run build
```

### Deploy to Netlify

```bash
npm run build
# Deploy the dist/ folder
```

---

## 🐛 Troubleshooting

### 404 Error on Reservation Submit
- Ensure backend API endpoint is correct: `/api/reservation`
- Check if backend server is running
- Verify environment variables are set

### Tailwind CSS not applying
- Clear node_modules: `rm -rf node_modules && npm install`
- Rebuild: `npm run dev`

### CORS Issues
- Ensure backend has correct CORS configuration
- Check `withCredentials: true` in axios calls

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Zustand](https://github.com/pmndrs/zustand)
- [Axios Documentation](https://axios-http.com)

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 Future Enhancements

- [ ] Add user authentication (login/signup)
- [ ] Implement order tracking
- [ ] Add payment gateway integration
- [ ] Create admin dashboard
- [ ] Add dark mode toggle
- [ ] Implement restaurant search and filters
- [ ] Add user reviews and ratings
- [ ] Real-time order notifications via WebSocket

---

## 👨‍💻 Author

- **Your Name** — Full Stack Developer
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com
- Portfolio: [your-website.com](https://your-website.com)

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](../LICENSE) file for details.

---

## 🙏 Acknowledgments

- Inspired by modern restaurant booking platforms
- Special thanks to the open-source community
- Built with ❤️ using React and Tailwind CSS

---

**Happy Coding! 🚀** Feel free to open issues or reach out with suggestions.
