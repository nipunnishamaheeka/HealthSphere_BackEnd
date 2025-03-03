import dotenv from 'dotenv';
import express from "express";
import { Request, Response } from "express";
import {createUser, verifyUserCredentials} from "../controller/userController";
import jwt, {Secret} from 'jsonwebtoken';


dotenv.config();

const router = express.Router();

router.post("/login", async (req, res) => {
    console.log("Login route hit");

    const email = req.body.email;
    const password_hash = req.body.password;

    const user : { email: any; password_hash: any } = { email, password_hash}

    try{
        const isVerified = await verifyUserCredentials(user);

        if (isVerified){
            const token = jwt.sign({email},process.env.SECRET_KEY as Secret, { expiresIn: "1d"});
         //   const refreshToken = jwt.sign({email}, process.env.REFRESH_TOKEN as Secret, {expireIn: "7d"});
            res.json({accessToken: token});
        }else {
            res.sendStatus(403).send('Invalid credentials');
        }
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
})

// @ts-ignore
router.post("/register", async (req: Request, res: Response) => {
    try {
        const {name, email, password} = req.body; // ✅ Fix: Extract directly from request body
        console.log(name, email, password);
        if (!name || !email || !password) {
            return res.status(400).json({error: "Missing required fields"});
        }

        const newUser = {
            name,
            email,
            password_hash: password, // Assuming password hashing is done in `createUser`
        };

        const registration = await createUser(newUser);
        if (registration) {
            const token = jwt.sign({email}, process.env.SECRET_KEY as Secret, {expiresIn: "1d"});
            res.json({accessToken: token});
        }
        // res.status(201).json(registration);
            else {
        res.status(500).json({error: "Failed to register user"});
        }
    } catch (error) {
        console.error("Registration Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



router.post("/refresh-token", async (req, res) => {
    const authHeader = req.headers.authorization;
    const refresh_token = authHeader?.split(' ')[1];

    if(!refresh_token)res.status(401).send("No refresh token provided");

    try{
        const payload = jwt.verify(refresh_token as string, process.env.REFRESH_TOKEN as Secret) as {email: string, iat: number};
        const token = jwt.sign({email: payload.email}, process.env.SECRET_KEY as Secret, {expiresIn: "1m"});
        res.json({accessToken: token});

    }catch (err){
        console.log(err);
        res.sendStatus(500);
    }
})

export function authenticateToken( req: express.Request, res : express.Response, next : express.NextFunction) {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];

    console.log(token);
    if(!token)res.status(401).send('No token provided');

    try {
        const payload = jwt.verify(token as string, process.env.SECRET_KEY as Secret) as {
            username: string,
            iat: number
        };
        console.log(payload.username);
        req.body.username = payload.username;
        next();

    }catch (err){
        console.log(err);
        res.sendStatus(403);
    }
}


export default router;