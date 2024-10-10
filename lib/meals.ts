import sql from "better-sqlite3";
const db = sql("meals.db");

export function getAllMeals() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const meals = db.prepare("SELECT * FROM meals").all();
      resolve(meals);
    }, 3000);
  });
}

export async function getMeal(slug: any) {
  return db.prepare("Select * from meals where slug = ?").get(slug);
}
