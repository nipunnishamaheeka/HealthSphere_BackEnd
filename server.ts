import express from "express";
const app = express();


app.listen(3000, () => {
    console.log('Server is running on port 3000');

})

app.use('/', (req, res, next) => {
    res.status(200).send('Not Found');
});