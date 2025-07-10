# 💻 Laptop Prices & Offers Comparison Website

A full-stack web application that compares laptop prices and special offers from **Amazon, Flipkart, Croma, and Reliance Digital**. Built using **Node.js**, **Express**, **MongoDB**, and **vanilla HTML/CSS/JS**.

---

## 🚀 Features

* 🔍 Filter laptops by **title**, **brand**, or **price range**
* 💰 Compare **prices** and **card offers** from all 4 platforms
* 🗂️ See product **images**, specs, and **Buy Now** links
* 🗂️ Clean structure: `frontend/` for UI, `backend/` for API & DB

---

## 💠 Tech Stack

| Layer       | Technology                  |
| ----------- | --------------------------- |
| Frontend    | HTML, CSS, JavaScript       |
| Backend     | Node.js, Express.js         |
| Database    | MongoDB                     |
| Hosting     | (Optional: Vercel / Render) |
| Git Hosting | Git + GitHub                |

---

## 📁 Project Structure

```
tech/
️|
|├── backend/            # Express.js API & DB logic
|│   └── routes/
|│   └── models/
|│   └── controllers/
|
|├── frontend/           # HTML/CSS/JS pages
|│   └── mainpage.html
|│   └── productpage.html
|
|├── .gitignore
|├── README.md
|└── package.json
```

---

## 🔧 Setup Instructions (Local)

1. **Clone the repo**

```bash
git clone https://github.com/prabhakarboya/laptop-prices-offers-comparison.git
cd laptop-prices-offers-comparison
```

2. **Install backend dependencies**

```bash
cd backend
npm install
```

3. **Start MongoDB** (locally or use a MongoDB Atlas URI in `.env`)

4. **Run the server**

```bash
node server.js
```

5. **Open the frontend**

Open `frontend/mainpage.html` in your browser

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

