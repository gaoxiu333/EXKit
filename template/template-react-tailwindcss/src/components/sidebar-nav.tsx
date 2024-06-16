import { NavLink } from "react-router-dom";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  return (
    <nav
      className={
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1" + " " + className
      }
      {...props}
    >
      {items.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            (isActive
              ? "bg-slate-300/30 rounded-md "
              : "hover:bg-transparent hover:underline") +
            " " +
            "justify-start p-2"
          }
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
}
