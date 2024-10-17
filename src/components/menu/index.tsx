"use client";

import { useMenu } from "@refinedev/core";
import Link from "next/link";

export const Menu = () => {
  const { menuItems, selectedKey } = useMenu();

  return (
    // nav className="menu" fa novaiko anio ambany io
    // <nav className="flex flex-col w-[100px] min-w-[200px] border-r min-h-screen p-4 bg"> 
    <nav className="menu">
      <ul>
        {menuItems.map((item) => (
          <li key={item.key}>
            <Link
              href={item.route ?? "/"}
              className={selectedKey === item.key ? "active" : ""}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
