"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const siteRoutes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Todos",
    href: "/todos",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-4">
      <ul className="flex items-center gap-4">
        {siteRoutes.map((route) => (
          <li key={route.href}>
            <Link
              href={route.href}
              className={`${
                pathname === route.href ? "text-black" : "text-zinc-500"
              }`}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
