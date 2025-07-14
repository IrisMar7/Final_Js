// Register.js: Create a new user
import BASE_URL from '../services/api.js';

export default function Register() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <style>
      .register-container {
        max-width: 400px;
        margin: 80px auto;
        padding: 40px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        font-family: Arial, sans-serif;
        text-align: center;
      }
      .register-container h2 {
        margin-bottom: 20px;
        font-size: 28px;
      }
      .register-container input, .register-container select {
        width: 100%;
        padding: 12px;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 16px;
      }
      .register-container button {
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
      .register-container button:hover {
        background-color: #6b21a8;
      }
    </style>

    <div class="register-container">
      <h2>Register</h2>
      <form id="register-form">
        <input type="email" id="email" placeholder="Email" required />
        <input type="password" id="password" placeholder="Password" required />
        <select id="role">
          <option value="visitor">Visitor</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  `;

  document.getElementById("register-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const role = e.target.role.value;

    try {
      await fetch($,{BASE_URL}/users, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ email, password, role })
      });
      alert("User registered!");
      window.location.href = "/login";
    } catch (error) {
      alert("Registration error");
      console.error(error);
    }
  });
}
