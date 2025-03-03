import { PrismaClient } from "@prisma/client";
import { MealPlannerModel } from "../model/mealPlanModel";

const prisma = new PrismaClient();

interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}
export async function addMealPlan(mealPlan: MealPlannerModel): Promise<ApiResponse<any>> {
    try {
        const newMealPlan = await prisma.mealPlanner.create({
            data: {
                userId: mealPlan.user_id,
                trainerId: mealPlan.trainer_id,
               // mealPlanDate: mealPlan.meal_plan_date,
                mealType: mealPlan.mealType,
                ingredients: mealPlan.ingredients,
                nutritionalBreakdown: mealPlan.nutritional_breakdown
            }
        });

        return {
            success: true,
            data: newMealPlan
        };
    } catch (error) {
        console.error("Error creating meal plan:", error);
        return {
            success: false,
            error: "Failed to create meal plan"
        };
    }
}

export async function getMealPlans(): Promise<ApiResponse<any[]>> {
    try {
        const mealPlans = await prisma.mealPlanner.findMany();
        return {
            success: true,
            data: mealPlans
        };
    } catch (error) {
        console.error("Error fetching meal plans:", error);
        return {
            success: false,
            error: "Failed to fetch meal plans"
        };
    }
}

export async function deleteMealPlan(id: string): Promise<ApiResponse<void>> {
    try {
        await prisma.mealPlanner.delete({
            where: { id }
        });

        return {
            success: true
        };
    } catch (error) {
        console.error("Error deleting meal plan:", error);
        return {
            success: false,
            error: "Failed to delete meal plan"
        };
    }
}

export async function updateMealPlan(id: string, mealPlan: MealPlannerModel): Promise<ApiResponse<any>> {
    try {
        const updatedMealPlan = await prisma.mealPlanner.update({
            where: { id },
            data: {
                userId: mealPlan.user_id,
                trainerId: mealPlan.trainer_id,
                //mealPlanDate: mealPlan.meal_plan_date,
                mealType: mealPlan.mealType,
                ingredients: mealPlan.ingredients,
                nutritionalBreakdown: mealPlan.nutritional_breakdown
            }
        });

        return {
            success: true,
            data: updatedMealPlan
        };
    } catch (error) {
        console.error("Error updating meal plan:", error);
        return {
            success: false,
            error: "Failed to update meal plan"
        };
    }
}