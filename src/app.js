import express from 'express';

const app = express(); //create an express application instance


//routes import
import userRouter from './routes/user.route.js';

//middlewares
app.use(express.json()); //to parse json request bodies

//routes declaration
app.use('/api/v1/users', userRouter);

//example route: http://localhost:4000/api/v1/users/register

export default app;