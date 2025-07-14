// EditEvent.js: Edit existing events
import BASE_URL from '../services/api.js';

export default async function EditEvent() {
  const urlParams = new URLSearchParams(window.location.search);
  const eventId = urlParams.get('id');
  const app = document.getElementById('app');

  const res = await fetch(`${BASE_URL}/events/${eventId}`);
  const event = await res.json();

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
      <h2>Edit Event</h2>
      <form id="edit-form">
        <input type="text" id="title" value="${event.title}" required />
        <input type="date" id="date" value="${event.date}" required />
        <button type="submit">Update</button>
      </form>
    </div>
  `;

  document.getElementById("edit-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const date = e.target.date.value;

    try {
      await fetch(`${BASE_URL}/events/${eventId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, date })
      });
      alert("Event updated");
      window.history.pushState({}, "", "/dashboard");
      location.reload();
    } catch (err) {
      alert("Error updating event");
    }
  });
}