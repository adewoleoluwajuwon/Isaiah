// src/components/Navbar.tsx
import {
  Navbar,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavbarLink,
  Button,
} from "flowbite-react";
import ThemeToggle from "../ThemeToggle";
import AutoLogo from "./AutoLogo";

export default function AppNavbar() {
  const brandName = "Isaiah";

  // one place to control link contrast in both themes
  const linkCls =
    "px-2 py-1 rounded-md transition-colors " +
    "text-slate-800 hover:text-slate-900 hover:bg-slate-100 " +
    "dark:text-slate-100 dark:hover:text-white dark:hover:bg-slate-800";

  return (
    <Navbar
      fluid
      rounded
      className={[
        "sticky top-0 z-50 supports-[backdrop-filter]:backdrop-blur",
        "bg-white/80 border-b border-slate-200",
        "dark:bg-slate-950/80 dark:border-slate-800",
      ].join(" ")}
    >
      <NavbarBrand href="#" className="gap-2">
        {/* Fixed red brand logo */}
        <AutoLogo name={brandName} size={32} palette="rose" className="mr-2" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-slate-900 dark:text-slate-100">
          {brandName}
        </span>
      </NavbarBrand>

      <div className="flex md:order-2 items-center gap-3">
        <ThemeToggle />
        {/* High-contrast CTA in both themes (red brand) */}
        <Button
          as="a"
          href="#contact"
          size="sm"
          className="!px-4 !py-2 !font-semibold
                     !bg-rose-600 hover:!bg-rose-700 !text-white
                     dark:!bg-rose-400 dark:hover:!bg-rose-300 dark:!text-slate-950
                     focus:!ring-2 focus:!ring-offset-2 focus:!ring-rose-600
                     dark:focus:!ring-rose-400 dark:focus:!ring-offset-slate-950"
        >
          Contact
        </Button>
        <NavbarToggle className="text-slate-700 dark:text-slate-200" />
      </div>

      {/* Give the collapse a surface so links stay readable over content */}
      <NavbarCollapse
        className="md:items-center md:justify-end md:gap-2
                   md:bg-transparent bg-white/95 dark:bg-slate-950/90
                   md:shadow-none shadow rounded-xl md:rounded-none
                   p-3 md:p-0"
      >
        <NavbarLink href="#about" className={linkCls}>
          About
        </NavbarLink>
        <NavbarLink href="#projects" className={linkCls}>
          Projects
        </NavbarLink>
        <NavbarLink href="#experience" className={linkCls}>
          Experience
        </NavbarLink>
        <NavbarLink href="#contact" className={linkCls}>
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
