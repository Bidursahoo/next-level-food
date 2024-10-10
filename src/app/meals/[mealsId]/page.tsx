import Image from "next/image";
import classes from "./mealsId.module.css";

export default function mealsIdPage() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill />
        </div>
        <div className={classes.headerText}>
          <h1>Title</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${"EMAIL"}`}>Name</a>
          </p>
          <p className={classes.summary}>SUMMARY</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instruction}
          dangerouslySetInnerHTML={{
            __html: `...`,
          }}
        ></p>
      </main>
    </>
  );
}
