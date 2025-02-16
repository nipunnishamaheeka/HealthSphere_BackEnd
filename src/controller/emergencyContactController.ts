import {PrismaClient} from "@prisma/client";
import {EmergencyContactModel} from "../model/emergencyContactModel";


const prisma = new PrismaClient();

export async function addEmergencyContact(emergencyContact: EmergencyContactModel){
    try {
        await prisma.emergencyContact.create({
            data: {
                userId: emergencyContact.user_id,
                contactName: emergencyContact.contact_name,
                contactNumber: emergencyContact.contact_number,
                relationship: emergencyContact.relationship
            }
        })
        console.log("EmergencyContact Created successfully");
    } catch (error) {
        console.log(error)
    }
}

export async function getEmergencyContacts() {
    try {
        const emergencyContacts = await prisma.emergencyContact.findMany();
        console.log(emergencyContacts);
        return emergencyContacts;
    } catch (error) {
        console.log(error)
    }
}

export async function deleteEmergencyContact(id: string) {
    try {
        await prisma.emergencyContact.delete({
            where: {
                id: id
            }
        })
        console.log("EmergencyContact Deleted successfully");
    } catch (error) {
        console.log(error)
    }
}

export async function updateEmergencyContact(id: string, emergencyContact: EmergencyContactModel) {
    try {
        await prisma.emergencyContact.update({
            where: {
                id: id
            },
            data: {
                userId: emergencyContact.user_id,
                contactName: emergencyContact.contact_name,
                contactNumber: emergencyContact.contact_number,
                relationship: emergencyContact.relationship
            }
        })
        console.log("EmergencyContact Updated successfully");
    } catch (error) {
        console.log(error)
    }
}