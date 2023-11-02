import express, {Application} from 'express'
import cors from 'cors'
import './UTILS/dbConfig'
import { mainApp } from './mainApp'

const app:Application = express()
// app.use(cors())
app.use(express.json())

const port:number = 3000 

mainApp(app) 
const server = app.listen(()=>{
    console.log("Port running on", port);
    
})

process.on("uncaughtException", (error:Error)=>{
    console.log("uncaughtException", error);
        process.exit(1)
    
})

process.on("unhandledRejection", (reason:any)=>{
    console.log("unhandledRejection", reason);

    server.close(()=>{
        process.exit(1)
    })
    
})