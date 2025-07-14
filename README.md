<img width="754" height="211" alt="Captura desde 2025-07-14 10-34-12" src="https://github.com/user-attachments/assets/28d50e86-498c-4eb7-b96e-94d8b24cb992" />
<img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green">

# Final_Js 

This repository contains everything you need to understand and view a functional, interactive SPA with user login.
Single Page Application (SPA) for event management, with user authentication, session persistence and CRUD operations, developed in Vanilla JavaScript and backend simulation with `json-server`

## 🧩 Main features🧩

-  **Authentication** with roles (`admin` and `visitor`).
-  **Protected routes** based on session and role.
-  **Session persistence** with `localStorage`.
-  **Event CRUD** for administrators.
-  **Event visualization** for all users.
-  **Modern** and responsive interface with CSS included.
-  **Database** simulation with `json-server`.

### 📆Event CRUD (Admin only)📆

* Administrators can:

* *Create events* (title + date).
* *Edit existing events*.
* *View all events in the dashboard*.
* All of this is saved in json-server, simulating a real database.

### 👁️Viewing Events (All)👁️

* Any authenticated user can view the event list from /dashboard


## 🚀 Getting started 🚀

_This space of instructions will allow you to obtain a working copy of the project on your local machine for development and testing purposes._

### 📋Pre-requisites 

_What things do you need to install the software and how to install them?_ 
* You need to open the terminal in your pc (Ctrl + Alt + T)
* You need Vite in VS (visual studio code) is a extention.
* cd interactive-events-full-spa
* npm install
* npx json-server --watch db.json --port 3000
* npm run dev
  

```
Example: npm install -g json-server
```
<img width="811" height="271" alt="Captura desde 2025-07-14 11-14-56" src="https://github.com/user-attachments/assets/bc7fae63-0eb5-404e-8e2c-8a82135ce969" />

### 🔧Install thinks 

_what you need to run to have a development environment running_
_In your terminal you need the star a things, for example:_
```
npm install
```
<img width="811" height="244" alt="Captura desde 2025-07-14 11-25-05" src="https://github.com/user-attachments/assets/ba4fc4f4-6b35-4cdf-bd42-06ea58792e32" />

_🥇Clone the repository_
```
git clone <URL_DEL_REPOSITORIO>
cd interactive-events-spa
```

_The other things:_
```
npx json-server --watch db.json --port 3000
```
_Run the application with Vite:_
```
npm run dev
```
The application will be available at:
```
`http://localhost:3000`
```

### You need to learn this:
* If an unauthenticated user attempts to access paths like /dashboard, /dashboard/events/create, or /dashboard/events/edit, they will be redirected to a 404 page.*
* If an authenticated user attempts to go to /login or /register, they will be automatically redirected to the dashboard.*
* Even if you reload the page, your session remains active until you manually log out (you can add a logout button if you wish).*


### 🔩Project structure:

```
interactive-events-spa/
├── public/             
├── src/
│   ├── assets/         
│   ├── components/     
│   ├── pages/          
│   ├── router/         
│   ├── services/       
│   └── utils/          
├── db.json             
├── README.md
├── package.json
   =
Public: base HTML
components: Navbar,notfound,etc
Pages: login, register, dashboard, createevent, editevent
router: navigation logic
Sevices: Base API
utils: authentication functions
db.json: simulated base the dates

```

### Coding style tests.

Includes default admin user:

``` json
{
"users": [
{
"id": 1,
"email": "admin@demo.com",
"password": "admin123",
"role": "admin"
}
],
"events": [],
"registrations": []
}
```

## 📖Technologies used📖
-  **Html.** 
-  **JavaScript.** 
-  **Vanilla.** 
-  **Json-server.**
-  **CSS.**


## ✒️Authors

_Made with:_

* **Iris Martelo** - *Only worker in this proyect* - [IrisMar7](https://github.com/IrisMar7)

## 📄Licencia.
This project was developed as part of a technical test to demonstrate knowledge of JavaScript, session management, authentication, and CRUD operations without frameworks.



