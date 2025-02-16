import {PrismaClient} from "@prisma/client";
import {ActivityTrackerModel} from "../model/activityTracker";

const prisma = new PrismaClient();

export async function addActivityTracker(activityTracker: ActivityTrackerModel){
    try {
        await prisma.activityTracker.create({
            data: {
                userId: activityTracker.user_id,
                date: new Date(),
                exerciseType: activityTracker.exercise_type,
                duration: activityTracker.duration,
                caloriesBurned: activityTracker.calories_burned
            }
        })
        console.log("ActivityTrackerModel Created successfully");
    } catch (error) {
        console.log(error)
    }
}
export async function getActivityTrackers() {
    try {
        const activityTrackers = await prisma.activityTracker.findMany();
        console.log(activityTrackers);
        return activityTrackers;
    } catch (error) {
        console.log(error)
    }
}
export async function deleteActivityTracker(id: string) {
    try {
        await prisma.activityTracker.delete({
            where: {
                id: id
            }
        })
        console.log("ActivityTrackerModel Deleted successfully");
    } catch (error) {
        console.log(error)
    }
}