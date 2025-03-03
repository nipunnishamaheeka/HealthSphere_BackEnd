import express from "express";
import {addHealthLog, deleteHealthLog, getHealthLogs, updateHealthLog} from "../controller/healthLogController";

const router = express.Router();
router.use(express.json());

router.get('/get', async (req, res) => {
    try{
        const healthLog = await getHealthLogs();
        res.json(healthLog);
    }catch (error){
        console.log(error);
        res.status(400).send("error getting healthLog");
    }
});

router.post('/post', async (req , res) => {
    try{
        console.log(req.body)
        const addedHealthLog = await addHealthLog(req.body);
        // res.json(addedHealthLog);
        res.status(201).json(addedHealthLog);
    }catch (error){
        console.log(error);
        res.status(400).send("error adding healthLog");
    }
})
router.put('/update/:id', async (req, res) => {
    try {
        const updatedHealthLog = await updateHealthLog(req.params.id, req.body);
        res.json(updatedHealthLog);
    } catch (error) {
        console.log(error);
        res.status(400).send("error updating healthLog");
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedHealthLog = await deleteHealthLog(req.params.id);
        res.json(deletedHealthLog);
    } catch (error) {
        console.log(error);
        res.status(400).send("error deleting healthLog");
    }
});
export default router;