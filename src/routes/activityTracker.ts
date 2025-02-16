import express from "express";
import {addActivityTracker, deleteActivityTracker, getActivityTrackers} from "../controller/activityTrackerController";

const router = express.Router();
router.use(express.json());

router.get('/get', async (req, res) => {
    try{
        const activityTracker = await getActivityTrackers();
        res.json(activityTracker);
    }catch (error){
        console.log(error);
        res.status(400).send("error getting activityTracker");
    }
});
router.post('/post', async (req , res) => {
    try{
        console.log(req.body)
        const addedActivityTracker = await addActivityTracker(req.body);
        res.json(addedActivityTracker);
    }catch (error){
        console.log(error);
        res.status(400).send("error adding activityTracker");
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedActivityTracker = await deleteActivityTracker(req.params.id);
        res.json(deletedActivityTracker);
    } catch (error) {
        console.log(error);
        res.status(400).send("error deleting activityTracker");
    }
})

export default router;