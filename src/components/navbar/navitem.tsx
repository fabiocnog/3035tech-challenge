import type { ReactNode } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router";

type NavitemProps = {
  icon: ReactNode;
  title: string;
  to: string;
}
export default function Navitem({icon, title, to}: NavitemProps) {
  return (
    <Button variant="default" asChild>
      <Link to={to} className="text-gray-100">{icon} {title}</Link>
    </Button>
  )

}