# 📝 Notes App

A simple and minimal **Notes Management Application** built with **Node.js, Express.js, EJS, and MongoDB**.

The application allows users to create, read, update, and delete notes through a clean and responsive interface.

## 🚀 Features

* ✏️ Create new notes
* 📖 View all notes
* 🔄 Update existing notes
* 🗑️ Delete notes
* 💾 Store notes in MongoDB
* 🎨 Clean and minimal UI
* 📱 Responsive design
* ⚡ Server-side rendering with EJS

## 🛠️ Technologies Used

* **Node.js** — Runtime environment
* **Express.js** — Backend framework
* **MongoDB** — Database
* **Mongoose** — MongoDB object modeling
* **EJS** — Server-side templating
* **HTML & CSS** — Frontend

## 📂 Project Structure

```text
notes-app/
│
├── model/
│   └── notesmodel.js
│
├── views/
│   ├── home.ejs
│   └── read.ejs
│
├── public/
│   ├── css/
│   └── js/
│
├── app.js
├── package.json
└── README.md
```

## 🔄 CRUD Operations

The application implements all four basic CRUD operations:

| Operation  | Purpose               | Example     |
| ---------- | --------------------- | ----------- |
| **Create** | Add a new note        | Add Note    |
| **Read**   | Display saved notes   | View Notes  |
| **Update** | Edit an existing note | Edit Note   |
| **Delete** | Remove a note         | Delete Note |

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/notes-app.git
```

### 2. Open the project

```bash
cd notes-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start MongoDB

Make sure MongoDB is running locally.

The application uses:

```text
mongodb://localhost:27017/notesapp
```

### 5. Start the server

```bash
node app.js
```

Or, if you are using nodemon:

```bash
npx nodemon app.js
```

### 6. Open the application

```text
http://localhost:2000
```

## 📌 Main Routes

```text
GET     /home
POST    /create
GET     /read
GET     /edit/:id
POST    /update/:id
GET     /delete/:id
```

> Routes may vary depending on how the CRUD functionality is implemented.

## 🗄️ Note Schema

Each note contains:

```js
{
    title: String,
    description: String
}
```

MongoDB automatically generates a unique `_id` for every note.

## 🎯 Project Purpose

This project was built to practice **backend development with Node.js**, understand **Express routing**, work with **MongoDB and Mongoose**, and learn how frontend forms communicate with a backend server.

It also provides practical experience implementing a complete **CRUD workflow**.

## 🔮 Future Improvements

* Search notes
* Add note categories
* Add timestamps
* Add authentication
* Add dark mode
* Add pagination
* Improve UI animations

## 👨‍💻 Author

**Muhammad Ashraf**

Built while learning **Node.js, Express.js, MongoDB, and EJS**.
