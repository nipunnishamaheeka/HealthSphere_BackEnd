export class TrainerNutritionistModel {
    trainer_id: string;
    user_id: string;
    name: string;
    email: string;
    role: string;

    constructor(
        trainer_id: string,
        user_id: string,
        name: string,
        email: string,
        role: string
    ) {
        this.trainer_id = trainer_id;
        this.user_id = user_id;
        this.name = name;
        this.email = email;
        this.role = role;
    }
}
