// NotFound.js: Redirect for invalid routes
export default function NotFound() {
  const app = document.getElementById('app');
  app.innerHTML = "<h2>404 - Not found</h2>";
}
