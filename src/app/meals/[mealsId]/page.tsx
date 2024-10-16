import Image from "next/image";
import classes from "./mealsId.module.css";
import { getMeal } from "../../../../lib/meals";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { [mealsId] };
}): Promise<Metadata> {
  const meal = getMeal(params.mealsId);
  if (!meal) {
    notFound();
  }
  return { title: meal.title, description: meal.summary };
}
export default function mealsIdPage({ params }) {
  const meal = getMeal(params.mealsId);

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          {/* <h1>Title</h1> */}
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
