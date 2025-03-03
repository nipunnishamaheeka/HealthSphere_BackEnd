import {UserRole} from "./enums";

export class UserModel {

    name: string;
    email: string;
    //role: UserRole;
    password_hash: string;

    constructor(

        name: string,
        email: string,
       // role: UserRole,
        password_hash: string,
    ) {

        this.name = name;
        this.email = email;
       // this.role = role;
        this.password_hash = password_hash;
    }
}