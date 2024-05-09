const express =require("express")
const cors =require("cors")
const dotenv =require("dotenv")

//dotenv configration
dotenv.config()

//creating rest object 
const app=express()

//adding middlewares
app.use(cors())
app.use(express.json())

//routes
app.use('/api/v1/portfolio',require('./routes/portfolioRoute'))

//port
const PORT=process.env.PORT || 8080

//listen
app.listen(PORT, ()=>{
    console.log(`Server Running On PORT ${PORT}`);
});