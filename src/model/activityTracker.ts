export class ActivityTrackerModel {
    activity_id: string;
    user_id: string;
    date: Date;
    type: string;
    duration: number;
    calories: number;

    constructor(
        activity_id: string,
        user_id: string,
        date: Date,
        type: string,
        duration: number,
        calories: number
    ) {
        this.activity_id = activity_id;
        this.user_id = user_id;
        this.date = date;
        this.type = type;
        this.duration = duration;
        this.calories = calories;
    }
}
