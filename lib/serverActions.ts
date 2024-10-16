"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { MealFormData } from "@/app/global types/Share-Page";
import { revalidatePath } from "next/cache";

const isInvalidText = (text: FormDataEntryValue | null): boolean => {
  return !text || (typeof text === "string" && text.trim() === "");
};

export async function submitShareMeal(prevState: any, formData: FormData) {
  const meal: MealFormData = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image") as File | null,
    creator: formData.get("name"),
    creator_email: formData.get("email") as string,
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    !meal.creator_email ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid Input",
    };
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
