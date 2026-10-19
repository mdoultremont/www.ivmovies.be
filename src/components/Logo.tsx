import { Link } from "@tanstack/react-router";
import logo from "../assets/logo-white.png";

export function Logo({ className = "h-16 w-16" }: { className?: string }) {
  return (
    <Link to="/" className="inline-block">
      <img className={className} src={logo} alt="Logo ivmovies" />
    </Link>
  );
}
