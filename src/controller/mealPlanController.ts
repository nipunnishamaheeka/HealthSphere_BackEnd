import {PrismaClient} from "@prisma/client";
import {MealPlannerModel} from "../model/mealPlanModel";

const prisma = new PrismaClient();

export async function addMealPlan(mealPlan: MealPlannerModel){
    try {
        await prisma.mealPlanner.create({
            data: {
                userId: mealPlan.user_id,
                trainerId: mealPlan.trainer_id,
                mealPlanDate: mealPlan.meal_plan_date,
                mealType: mealPlan.meal_type,
                ingredients: mealPlan.ingredients,
                nutritionalBreakdown: mealPlan.nutritional_breakdown
            }
        })
        console.log("MealPlannerModel Created successfully");
    }catch (error) {
        console.log(error)
    }
}

export async function getMealPlans() {
    try {
        const mealPlans = await prisma.mealPlanner.findMany();
        console.log(mealPlans);
        return mealPlans;
    } catch (error) {
        console.log(error)
    }
}

export async function deleteMealPlan(id: string) {
    try {
        await prisma.mealPlanner.delete({
            where: {
                id: id
            }
        })
        console.log("MealPlannerModel Deleted successfully");
    } catch (error) {
        console.log(error)
    }
}

export async function updateMealPlan(id: string, mealPlan: MealPlannerModel) {
    try {
        await prisma.mealPlanner.update({
            where: {
                id: id
            },
            data: {
                userId: mealPlan.user_id,
                trainerId: mealPlan.trainer_id,
                mealPlanDate: mealPlan.meal_plan_date,
                mealType: mealPlan.meal_type,
                ingredients: mealPlan.ingredients,
                nutritionalBreakdown: mealPlan.nutritional_breakdown
            }
        })
        console.log("MealPlannerModel Updated successfully");
    } catch (error) {
        console.log(error)
    }
}