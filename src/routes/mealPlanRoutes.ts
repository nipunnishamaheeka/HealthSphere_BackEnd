import express from "express";
import {addMealPlan, deleteMealPlan, getMealPlans, updateMealPlan} from "../controller/mealPlanController";

const router = express.Router();
router.use (express.json());

router.get('/get', async (req, res) => {
    try{
        const mealPlan = await getMealPlans();
        res.send(mealPlan);
    }catch (error){
        console.log(error);
        res.status(400).send("error getting mealPlan");
    }
});

router.post('/post', async (req , res) => {
    try{
        const addedMealPlan = await addMealPlan(req.body);
        res.send(addedMealPlan);
    }catch (error){
        console.log(error);
        res.status(400).send("error adding mealPlan");
    }
})
router.put('/update/:id', async (req, res) => {
    try {
        const updatedMealPlan = await updateMealPlan(req.params.id, req.body);
        res.send(updatedMealPlan);
    } catch (error) {
        console.log(error);
        res.status(400).send("error updating mealPlan");
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedMealPlan = await deleteMealPlan(req.params.id);
        res.send(deletedMealPlan);
    } catch (error) {
        console.log(error);
        res.status(400).send("error deleting mealPlan");
    }
});

export default router;