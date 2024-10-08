"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classes from "./navLinks.module.css";

type NavLinkProp = {
  href: string;
  children: string;
};

export default function NavLinks({ href, children }: NavLinkProp) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.active} ${classes.link}`
          : `${classes.link}  `
      }
    >
      {children}
    </Link>
  );
}
