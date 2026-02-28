# 🖥️ Nextech — PC Parts & Tech Store

A modern full-stack e-commerce website for PC components and tech accessories, inspired by Scorptec. Built with React + Vite on the frontend and Node.js/Express on the backend.

---

## 🚀 Live Demo

> Coming soon...

---

## 📸 Preview

![Nextech Preview](./preview.png)

---

## ✨ Features

- 🔝 Sticky responsive navbar with mobile hamburger menu
- 🎯 Hero banner with promotional content and CTA
- 🗂️ Product category browsing (PC Cases, CPUs, GPUs, and more)
- 🛍️ Dynamic featured products grid fetched from REST API
- ❤️ Wishlist button & Quick Add on every product card
- 📰 Newsletter signup section
- 🔒 Trust bar (Payments, Delivery, Returns, Security)
- 🦶 Full footer with A–Z browse and site navigation
- 📱 Fully responsive across all screen sizes
- ⏳ Loading skeleton while products are being fetched
- 🚫 Empty state UI when no products are returned

---

## 🛠️ Tech Stack

| Layer      | Technology              |
|------------|--------------------------|
| Frontend   | React 18, Vite, Tailwind CSS |
| Backend    | Node.js, Express         |
| HTTP Client| Axios                    |
| Styling    | Tailwind CSS v3          |

---

## 📁 Project Structure

```
nextech/
├── client/                   # React + Vite frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │       ├── Navbar.jsx
│   │       ├── Hero.jsx
│   │       ├── FeaturedProducts.jsx
│   │       ├── Product.jsx
│   │       ├── Footer.jsx
│   │     
│   │   
│   │     
│   │      
│   │      
│   │     
│   │   
│   │ 
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
└── server/                   # Node.js + Express backend
    ├── routes/
    ├── models/
    ├── controllers/
    └── index.js
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) v18+
- npm or yarn

---

### 1. Clone the repository

```bash
git clone https://github.com/your-username/nextech.git
cd nextech
```

---

### 2. Setup the Backend

```bash
cd server
npm install
npm start
```

The backend will run on **http://localhost:4000**

---

### 3. Setup the Frontend

```bash
cd client
npm install
npm run dev
```

The frontend will run on **http://localhost:5173**

---

## 🔌 API Endpoints

| Method | Endpoint             | Description          |
|--------|----------------------|----------------------|
| GET    | /api/getProducts     | Fetch all products   |

---

## 🧩 Components Overview

| Component          | Description                                      |
|--------------------|--------------------------------------------------|
| `Navbar`           | Sticky top nav with links, search, mobile menu   |
| `Hero`             | Full-width banner with sale info and CTA         |
| `FeaturedProducts` | API-fetched product grid with loading skeleton   |
| `Product`          | Individual product card with wishlist & quick add|
| `Footer`           | Dark footer with A–Z nav and link columns        |

---

## 📦 Environment Variables

Create a `.env` file in the `server/` directory:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

**Malan Chandima**
- GitHub: [@malan-x9](https://github.com/malan-x9)

---

> Built with ❤️ using React + Vite & Tailwind CSS
