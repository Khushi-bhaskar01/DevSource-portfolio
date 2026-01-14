# DevSource Community Portfolio
Hello
A shared React + Vite based portfolio project for **DevSource**, where each member builds and showcases their own portfolio page inside a single common repository.

This project is designed to:

* Encourage **learning by building**
* Teach **real-world Git & team collaboration**
* Help members create a **professional web portfolio**

---

## 🚀 Tech Stack

* **React** (JavaScript)
* **Vite** (Fast build tool)
* **React Router DOM** (Routing)
* **CSS** (Inline / Global styles)

---

## 📁 Folder Structure

```
devsource-portfolio/
│
├── public/
├── src/
│   ├── assets/
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Khushi.jsx        # Lead portfolio page
│   │   └── YourName.jsx     # Members add their own page here
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🏠 Home Page

The **Home Page** acts as the entry point for the DevSource portfolio.

* Displays DevSource introduction
* Contains reusable buttons
* Buttons redirect to individual member portfolio pages

---

## 👤 How Members Add Their Portfolio

1. Go to `src/pages/`
2. Create a new file with **your name**

   ```
   YourName.jsx
   ```
3. Create your portfolio UI inside that file
4. Export it as default
5. Add your route in `App.jsx`

Example:

```jsx
<Route path="/yourname" element={<YourName />} />
```

---


## 🛠️ Setup & Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open browser at:

```
http://localhost:5173
```

---

## 📌 Contribution Rules

* ❌ Do not modify others' portfolio pages
* ✅ Create changes only inside your own file
* ✅ Follow the folder structure
* ✅ Use meaningful commit messages

---

## 🌱 Purpose of This Project

This repository is built to:

* Practice **React fundamentals**
* Learn **team-based development**
* Build confidence in **frontend skills**
* Create a **real portfolio project** for resumes

---

## 🤝 DevSource

DevSource is a developer community focused on:

* Learning by building
* Peer mentorship
* Open-source mindset

> *"Build. Learn. Grow."*

---

### ⭐ If you're a DevSource member, give this repo a star and start building!
