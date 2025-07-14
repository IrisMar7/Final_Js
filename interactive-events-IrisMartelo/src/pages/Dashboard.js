// Dashboard.js: Show events and controls
import BASE_URL from '../services/api.js';
import { getUser } from '../utils/auth.js';

export default async function Dashboard() {
  const user = getUser();
  const app = document.getElementById('app');
  const res = await fetch(`${BASE_URL}/events`);
  const events = await res.json();

  let html = `<h2>Welcome ${user.email} (${user.role})</h2>`;

  if (user.role === "admin") {
    html += '<a href="/dashboard/events/create">Create Event</a><br>';
  }

  html += `<ul>`;
  events.forEach(e => {
    html += `<li>${e.title} - ${e.date}`;
    if (user.role === "admin") {
      html += ` <a href="/dashboard/events/edit?id=${e.id}">Edit</a>`;
    }
    html += `</li>`;
  });
  html += `</ul>`;

  app.innerHTML = html;
}
