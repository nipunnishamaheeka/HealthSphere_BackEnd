// trainerNutritionistController.ts
import {PrismaClient} from "@prisma/client";
import { TrainerNutritionistModel } from '../model/trainerNutritionistModel';

const prisma = new PrismaClient();
export async function getTrainerNutritionists() {
    try {
        return await prisma.trainerNutritionist.findMany({
            include: {
                user: true
            }
        });
    } catch (error) {
        throw error;
    }
}

export async function getTrainerNutritionistById(id: string) {
    try {
        return await prisma.trainerNutritionist.findUnique({
            where: {
                trainer_id: id
            },
            include: {
                user: true
            }
        });
    } catch (error) {
        throw error;
    }
}

export async function addTrainerNutritionist(trainer: TrainerNutritionistModel) {
    try {
        return await prisma.trainerNutritionist.create({
            data: {
                user_id: trainer.user_id,
                name: trainer.name,
                email: trainer.email,
                role: trainer.role
            },
            include: {
                user: true
            }
        });
    } catch (error) {
        throw error;
    }
}

export async function updateTrainerNutritionist(id: string, trainer: Partial<TrainerNutritionistModel>) {
    try {
        return await prisma.trainerNutritionist.update({
            where: {
                trainer_id: id
            },
            data: {
                user_id: trainer.user_id,
                name: trainer.name,
                email: trainer.email,
                role: trainer.role
            },
            include: {
                user: true
            }
        });
    } catch (error) {
        throw error;
    }
}

export async function deleteTrainerNutritionist(id: string) {
    try {
        return await prisma.trainerNutritionist.delete({
            where: {
                trainer_id: id
            }
        });
    } catch (error) {
        throw error;
    }
}