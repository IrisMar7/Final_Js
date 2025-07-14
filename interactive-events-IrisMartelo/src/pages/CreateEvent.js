// CreateEvent.js: Admin event creation
import BASE_URL from '../services/api.js';
export default function CreateEvent() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <style>
      .form-container {
        max-width: 400px;
        margin: 80px auto;
        padding: 40px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        font-family: Arial, sans-serif;
        text-align: center;
      }
      .form-container h2 {
        margin-bottom: 20px;
        font-size: 26px;
      }
      .form-container input {
        width: 100%;
        padding: 12px;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 16px;
      }
      .form-container button {
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
      .form-container button:hover {
        background-color: #6b21a8;
      }
    </style>

    <div class="form-container">
      <h2>Create Event</h2>
      <form id="event-form">
        <input type="text" id="title" placeholder="Title" required />
        <input type="date" id="date" required />
        <button type="submit">Save</button>
      </form>
    </div>
  `;

  document.getElementById("event-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const date = e.target.date.value;

    try {
      await fetch(`${BASE_URL}/events`,  {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, date })
      });
      alert("Event created");
      window.history.pushState({}, "", "/dashboard");
      location.reload();
    } catch (err) {
      alert("Error creating event");
    }
  });
}