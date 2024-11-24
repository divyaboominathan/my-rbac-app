import Roles from "../pages/Admin";
import Users from "../pages/User";
import HomePage from "../pages/Home";

const routes = [
  { path: "/users", component: Users },
  { path: "/roles", component: Roles },
  { path: "/", component: HomePage },
];

export default routes;
