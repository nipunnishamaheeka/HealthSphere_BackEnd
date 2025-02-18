import express from "express";
import {addGoal, deleteGoal, getGoals, updateGoal} from "../controller/goalController";

const router = express.Router();
router.use(express.json());

router.get('/get', async (req, res) => {
    try{
        const goal = await getGoals();
        res.json(goal);

    }catch (error){
        console.log(error);
        res.status(400).send("error getting goal");
    }
});

router.post('/post', async (req , res) => {
    try{
        console.log(req.body)
        const addedGoal = await addGoal(req.body);
        res.json(addedGoal);
    }catch (error){
        console.log(error);
        res.status(400).send("error adding goal");
    }
})
router.delete('/delete/:id', async (req, res) => {
    try{
        const deletedGoal = await deleteGoal(req.params.id);
        res.json(deletedGoal);
    }catch (error){
        console.log(error);
        res.status(400).send("error deleting goal");
    }
})
router.put('/update/:id', async (req, res) => {
    try{
        const updatedGoal = await updateGoal(req.params.id, req.body);
        res.json(updatedGoal);
    }catch (error){
        console.log(error);
        res.status(400).send("error updating goal");
    }
})

export default router;
