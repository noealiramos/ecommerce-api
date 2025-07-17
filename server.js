import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());



app.get('/',(req,res)=>{
    res.send('welcome!');
});

app.listen(process.env.PORT,()=>{ //trae el valor del archivo .env
    console.log(`server running ok http://localhost:${process.env.PORT}`);

});