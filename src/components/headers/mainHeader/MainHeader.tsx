import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoPic from "@/assets/logo.png";
import classes from "./mainHeader.module.css";
import MainHeaderBackground from "../headerBackground/MainHeaderBackground";
import NavLinks from "@/components/navLinks/NavLinks";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image
            src={logoPic.src}
            alt="A plate of food"
            height={0}
            width={50}
            priority
          />
          Next Level Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLinks href="/meals">Browse Meals</NavLinks>
            </li>
            <li>
              <NavLinks href="/community">Join our community</NavLinks>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
