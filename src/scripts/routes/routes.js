import {
  checkAuthenticatedRoute,
  checkUnauthenticatedRouteOnly,
} from "../utils/auth";
import HomePage from "../pages/home/home-page";
import LoginPage from "../pages/auth/login/login-page";
import RegisterPage from "../pages/auth/register/register-page";
import StoryDetailPage from "../pages/story-detail/story-detail-page";
import NewPage from "../pages/new/new-page";

const routes = {
  "/login": () => checkUnauthenticatedRouteOnly(new LoginPage()),
  "/register": () => checkUnauthenticatedRouteOnly(new RegisterPage()),

  "/": () => checkAuthenticatedRoute(new HomePage()),
  "/stories/:id": () => checkAuthenticatedRoute(new StoryDetailPage()),
  "/new": () => checkAuthenticatedRoute(new NewPage()),
};

export default routes;
