import express from "express";
import {
    addEmergencyContact,
    deleteEmergencyContact,
    getEmergencyContacts,
    updateEmergencyContact
} from "../controller/emergencyContactController";

const router = express.Router();
router.use(express.json());

router.get('/get', async (req, res) => {
    try {
        const emergencyContacts = await getEmergencyContacts();
        res.json(emergencyContacts);
    } catch (error) {
        console.error(error);
        const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
        res.status(500).json({ error: errorMessage });
    }
});

router.post('/post', async (req, res) => {
    try {
        console.log(req.body);
        const addedEmergencyContact = await addEmergencyContact(req.body);
        res.json(addedEmergencyContact);
    } catch (error) {
        console.error(error);
        const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
        res.status(500).json({ error: errorMessage });
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        const updatedEmergencyContact = await updateEmergencyContact(req.params.id, req.body);
        res.json(updatedEmergencyContact);
    } catch (error) {
        console.error(error);
        const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
        res.status(500).json({ error: errorMessage });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedEmergencyContact = await deleteEmergencyContact(req.params.id);
        res.json(deletedEmergencyContact);
    } catch (error) {
        console.error(error);
        const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
        res.status(500).json({ error: errorMessage });
    }
});


export default router;
