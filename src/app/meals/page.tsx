import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/MealsGrid";
import { getAllMeals } from "../../../lib/meals";
import { Suspense } from "react";

async function Meals() {
  const mealsData = await getAllMeals();
  return <MealsGrid meals={mealsData} />;
}

export default async function MealsPage() {
  // console.log(mealsData);
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals created{" "}
          <span className={classes.highlight}>by You</span>
        </h1>
        <p>
          Choose Your own favorite recipe and cook it your self. Its easy and
          fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Loading Please Wait...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
