// auth.js: session helpers
export function isAuthenticated() {
  return !!localStorage.getItem("user");
}

export function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}
