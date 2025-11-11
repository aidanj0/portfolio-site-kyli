import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/cover.tsx"),
  route("/home", "routes/home.tsx"),
  route("/book", "routes/book.tsx"),
  //
  route("/welcome", "routes/welcome.tsx")
] satisfies RouteConfig;
