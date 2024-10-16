import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
import { MealFormData, MealServerAction } from "@/app/global types/Share-Page";
const db = sql("meals.db");

export function getAllMeals() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const meals = db.prepare("SELECT * FROM meals").all();
      resolve(meals);
    }, 3000);
  });
}

export function getMeal(slug: string) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal: any) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Error while saving image! ");
    }
  });
  meal.image = `/images/${fileName}`;
  db.prepare(
    `Insert into meals (title ,summary , instructions ,  creator , creator_email, image , slug ) values(
    @title,
    @summary,
    @instructions,
    @creator,
    @creator_email,
    @image,
    @slug
    ) `
  ).run(meal);
}
