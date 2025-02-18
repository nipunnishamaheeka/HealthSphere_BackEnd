import express from "express";
import healthLogRoutes from "./src/routes/healthLogRoutes";
import activityTracker from "./src/routes/activityTracker";
import mealPlanRoutes from "./src/routes/mealPlanRoutes";
import emergencyContactRoutes from "./src/routes/emergencyContactRoutes";
import goalRoutes from "./src/routes/goalRoutes";

const app = express();

app.use('/',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type');
    next();

})

app.use('/healthlog' ,healthLogRoutes);
app.use('/activitytracker' ,activityTracker);
app.use('/mealplan', mealPlanRoutes);
app.use('/emergencycontact', emergencyContactRoutes);
app.use('/goal',goalRoutes)

app.listen(3000, () => {
    console.log('Server is running on port 3000');

})

app.use('/', (req, res, next) => {
    res.status(200).send('Not Found');
});