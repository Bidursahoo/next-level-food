"use client";
import ImagePicker from "@/components/meals/ImagePicker";
import classes from "./page.module.css";
import { submitShareMeal } from "../../../../lib/serverActions";
import MealsFormSubmitBtn from "@/components/meals/meals-form-submit";
// import { useActionState } from "react";
import { useFormState } from "react-dom";

export default function ShareMealPage() {
  const [state, formAction] = useFormState(submitShareMeal, {
    message: null,
  });
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          {state.message && <p>{state.message}</p>}
          <ImagePicker label="your image" name="image" />
          <p className={classes.actions}>
            <MealsFormSubmitBtn />
          </p>
        </form>
      </main>
    </>
  );
}
