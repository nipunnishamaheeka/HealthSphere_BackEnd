import {PrismaClient} from "@prisma/client";
import {GoalSettingModel} from "../model/goalModel";

const prisma = new PrismaClient();

export  async function addGoal(goal: GoalSettingModel){
    try{
        await prisma.goalSetting.create({
            data:{
                userId: goal.user_id,
                goalType: goal.goal_type,
                goalValue: goal.goal_value,
                currentProgress: goal.current_progress,
                targetDate: new Date(goal.target_date)
            }
        })
        console.log("Goal Created successfully");
    }catch (error){
        console.log(error);
    }
}

export async function getGoals(){
    try {
        const goals = await prisma.goalSetting.findMany();
        console.log(goals);
        return goals;

    } catch (error){
        console.log(error);
    }
}

export async function deleteGoal(id: string){
    try{
        await prisma.goalSetting.delete({
            where:{
                id: id
            }
        })
        console.log("Goal Deleted successfully");
    }catch (error){
        console.log(error);
    }
}
export async function updateGoal(id: string, goal: GoalSettingModel){
    try{
        await prisma.goalSetting.update({
            where:{
                id: id
            },
            data:{
                userId: goal.user_id,
                goalType: goal.goal_type,
                goalValue: goal.goal_value,
                currentProgress: goal.current_progress,
                targetDate: goal.target_date
            }
        })
        console.log("Goal Updated successfully");
    }catch (error){
        console.log(error);
    }
}