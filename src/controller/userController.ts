import bcrypt from 'bcrypt';
import { PrismaClient } from "@prisma/client";
import {UserModel} from "../model/userModel";

const prisma = new PrismaClient();

export async function createUser(user: UserModel) {
    const hashedPassword = await bcrypt.hash(user.password_hash, 10);

    const addedUser = await prisma.user.create({
        data: {
            name: user.name,
            email: user.email,
            passwordHash: hashedPassword,
        },
    });

    console.log("User Created successfully", addedUser);
    return addedUser;
}

export async function verifyUserCredentials(verifyUser: { email: any; password_hash: any }) {
    const user = await prisma.user.findUnique({
        where: {email: verifyUser.email},
    });

    if (!user) {
        return false;
    }

    return await bcrypt.compare(verifyUser.password_hash, user.passwordHash);
}
//
// // Get user by ID
// export async function getUserById(id: string) {
//     try {
//         const user = await prisma.user.findUnique({
//             where: {
//                 user_id: id, // Ensure this matches your Prisma schema
//             }
//         });
//
//         console.log(user);
//         return user;
//     } catch (error) {
//         console.error("Error fetching user:", error);
//         return null;
//     }
// }
