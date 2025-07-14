// Router.js: Simple router to handle views and authentication
import { isAuthenticated, getUser } from '../utils/auth.js';
import Login from '../pages/Login.js';
import Register from '../pages/Register.js';
import Dashboard from '../pages/Dashboard.js';
import CreateEvent from '../pages/CreateEvent.js';
import EditEvent from '../pages/EditEvent.js';
import NotFound from '../components/NotFound.js';

const routes = {
  '/login': Login,
  '/register': Register,
  '/dashboard': Dashboard,
  '/dashboard/events/create': CreateEvent,
  '/dashboard/events/edit': EditEvent
};

export default function Router() {
  const app = document.getElementById('app');
  const path = window.location.pathname;

  if (!isAuthenticated() && !['/login', '/register'].includes(path)) {
    NotFound();
    return;
  }

  if (isAuthenticated() && ['/login', '/register'].includes(path)) {
    window.history.pushState({}, "", "/dashboard");
    Dashboard();
    return;
  }

  const route = routes[path];
  if (route) {
    route();
  } else {
    NotFound();
  }
}
