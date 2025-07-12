# Contact List App (React + Context)

A sleek, dark-themed Contact List app built with React, TypeScript, Tailwind CSS, and the Context API.

This project demonstrates using **global state management** with React Context, TypeScript typing, API integration, and modern page routing — all in a professional, minimalist UI.

---

## 🔗 Live Demo (Frontend)

[https://contact-list-drab-delta.vercel.app](https://contact-list-drab-delta.vercel.app)

---

## Features

- Global Contact State using React Context:
  - Store and manage all contacts globally
  - Provide CRUD operations (Create, Read, Update, Delete)
- API Integration:
  - Connects to the Contact API to fetch and manage contacts
- Modern Page Routing:
  - `/` → Contact List Page
  - `/add` → Add New Contact Page
  - `/edit/:id` → Edit Contact Page
- Clean, responsive dark theme with Tailwind CSS
- Minimal, sleek UI ready for further customization
- Static profile image per contact (for demonstration)
- Deployed and production-ready on Vercel

---

## Tech Stack

- React (Vite)
- TypeScript
- Tailwind CSS
- React Router
- React Context API
- Lucide React (Icons)
- Headless UI (for modals)

---

## Getting Started

Clone the repo and run the project locally.

### Folder Structure

```
project-root/
├── src/
│   ├── components/       ← Reusable UI components (buttons, icons, etc.)
│   ├── context/          ← ContactsContext (global state)
│   ├── pages/            ← Pages for Contact List and Contact Form
│   ├── App.tsx           ← Main app routing + context provider
│   └── main.tsx          ← Entry point
├── public/               ← Static assets (images, favicon)
├── package.json          ← Project config
├── tailwind.config.js    ← Tailwind setup
└── tsconfig.json         ← TypeScript config
```

### Install Dependencies

```bash
npm install
```

### Run the Project

```bash
npm run dev
```

- Frontend: [http://localhost:5173](http://localhost:5173)

---

## Objectives Covered

- Use React Context for global state management
- Integrate with a REST API (Contacts API)
- Build page routing with React Router
- Structure project with scalability in mind
- Apply TypeScript for type safety
- Style with Tailwind CSS for a modern look
- Deploy to Vercel (production-ready)

---

## Learning Outcomes

- Manage global state cleanly using Context API
- Build scalable React projects with TypeScript
- Integrate REST APIs for real-world data handling
- Use React Router for smooth navigation
- Design clean, responsive UIs with Tailwind CSS
- Understand modern deployment workflows (Vercel)

---

## Author

Built by [@Cyberbot777](https://github.com/Cyberbot777)

