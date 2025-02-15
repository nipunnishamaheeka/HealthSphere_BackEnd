import {PrismaClient} from "@prisma/client";
import {HealthLogModel} from "../model/healthLogModel";

const prisma = new PrismaClient();

export async function addHealthLog(healthLog: HealthLogModel){

    try {
        await prisma.healthLog.create({
            data: {
                userId: healthLog.user_id,
                // date: healthLog.date,
                date: new Date(),
                weight: healthLog.weight,
                bloodPressure: healthLog.blood_pressure,
                sleepHours: healthLog.sleep_hours,
                waterIntake: healthLog.water_intake
            }
        })
        console.log("HealthLogModel Created successfully");
    } catch (error) {
        console.log(error)
    }
}

export async function getHealthLogs() {
    try {
        const healthLogs = await prisma.healthLog.findMany();
        console.log(healthLogs);
        return healthLogs;
    } catch (error) {
        console.log(error)
    }
}

export async function updateHealthLog(id: string, healthLog: HealthLogModel) {
    try {
        await prisma.healthLog.update({
            where: {
                id: id
            },
            data: {
                userId: healthLog.user_id,
                date: healthLog.date,
                weight: healthLog.weight,
                bloodPressure: healthLog.blood_pressure,
                sleepHours: healthLog.sleep_hours,
                waterIntake: healthLog.water_intake
            }
        })
        console.log("HealthLogModel Updated successfully");
    } catch (error) {
        console.log(error)
    }
}

export async function deleteHealthLog(id: string) {
    try {
        await prisma.healthLog.delete({
            where: {
                id: id
            }
        })
        console.log("HealthLogModel Deleted successfully");
    } catch (error) {
        console.log(error)
    }
}