import React from "react";
import classes from "./mealsGrid.module.css";
import MealItem from "./MealItems";

// Use the Meal type for the meals prop
type Meal = {
  id: string; // Adjust if the type of id is different
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
};

type MealsGridProps = {
  meals: Meal[];
};

export default function MealsGrid({ meals }: MealsGridProps) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
