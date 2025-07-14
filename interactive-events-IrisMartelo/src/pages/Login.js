// Login.js: Login con estilos similares al diseño compartido
import BASE_URL from '../services/api.js';

export default function Login() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <style>
      .login-container {
        max-width: 400px;
        margin: 80px auto;
        padding: 40px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        font-family: Arial, sans-serif;
        text-align: center;
      }
      .login-container h2 {
        margin-bottom: 20px;
        font-size: 28px;
      }
      .login-container input {
        width: 100%;
        padding: 12px;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 16px;
      }
      .login-container button {
        background-color: #7e22ce;
        color: white;
        border: none;
        padding: 12px;
        border-radius: 8px;
        width: 100%;
        font-size: 16px;
        cursor: pointer;
        margin-top: 15px;
      }
      .login-container button:hover {
        background-color: #6b21a8;
      }
    </style>

    <div class="login-container">
      <h2>Login</h2>
      <form id="login-form">
        <input type="email" id="email" placeholder="Email" required />
        <input type="password" id="password" placeholder="Password" required />
        <button type="submit">Log in</button>
      </form>
    </div>
  `;

  document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await fetch(`${BASE_URL}/users?email=${email}&password=${password}`);
      const users = await res.json();
      if (users.length === 1) {
        localStorage.setItem("user", JSON.stringify(users[0]));
        window.history.pushState({}, "", "/dashboard");
        location.reload();
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      alert("Login error");
      console.error(error);
    }
  });
}
