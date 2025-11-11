import type { Route } from "./+types/book";
import { Book } from "../pages/book/book";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function BookRoute() {
  return <Book />;
}
