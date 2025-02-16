export class EmergencyContactModel {
    contact_id: string;
    user_id: string;
    contact_name: string;
    relationship: string;
    contact_number: string;

    constructor(
        contact_id: string,
        user_id: string,
        contact_name: string,
        relationship: string,
        contact_number: string
    ) {
        this.contact_id = contact_id;
        this.user_id = user_id;
        this.contact_name = contact_name;
        this.relationship = relationship;
        this.contact_number = contact_number;
    }
}