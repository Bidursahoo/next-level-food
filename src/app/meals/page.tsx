import classes from "./page.module.css";
export default function MealsPage() {
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
        <p className={classes.cta}></p>
      </header>
      <main className={classes.main}></main>
    </>
  );
}
