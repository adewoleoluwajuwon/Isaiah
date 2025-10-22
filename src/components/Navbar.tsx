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

export default function AppNavbar() {
  return (
    <Navbar
      fluid
      rounded
      className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-gray-100 dark:border-gray-800"
    >
      <NavbarBrand href="#">
        <img src="/logo.svg" className="mr-3 h-6 sm:h-8" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Your Name
        </span>
      </NavbarBrand>

      <div className="flex md:order-2 items-center gap-3">
        <ThemeToggle />
        <Button as="a" href="#contact" size="sm">
          Contact
        </Button>
        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <NavbarLink href="#about">About</NavbarLink>
        <NavbarLink href="#projects">Projects</NavbarLink>
        <NavbarLink href="#experience">Experience</NavbarLink>
        <NavbarLink href="#contact">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
