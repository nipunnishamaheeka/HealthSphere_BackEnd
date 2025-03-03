export class EmergencyContactModel {
    user_id: string;
    contactName: string;
    relationship: string;
    contactNumber: string;

    constructor(
        user_id: string,
        contactName: string,
        relationship: string,
        contactNumber: string
    ) {
        this.user_id = user_id;
        this.contactName = contactName;
        this.relationship = relationship;
        this.contactNumber = contactNumber;
    }
}
