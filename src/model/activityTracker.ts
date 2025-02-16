export class ActivityTrackerModel {
    activity_id: string;
    user_id: string;
    date: Date;
    exercise_type: string;
    duration: number;
    calories_burned: number;

    constructor(
        activity_id: string,
        user_id: string,
        date: Date,
        exercise_type: string,
        duration: number,
        calories_burned: number
    ) {
        this.activity_id = activity_id;
        this.user_id = user_id;
        this.date = date;
        this.exercise_type = exercise_type;
        this.duration = duration;
        this.calories_burned = calories_burned;
    }
}
