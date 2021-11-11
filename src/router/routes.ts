import Users from "pages/Users";
import redirect from "router/modules/redirect";

const routes = [
  {
    path: "/users",
    component: Users,
  },
  {
    path: "/",
    component: redirect("/users"),
  },
  {
    path: "*",
    component: redirect("/users", true),
  },
];

export default routes;
