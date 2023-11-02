import student from './ROUTER/studentView'
import { Request, Response, Application } from 'express'
import { stats } from './UTILS/statusCodes'


export const mainApp =(app:Application) =>{
    app.use("/api/v1/", student)
    app.get("/", (req:Request, res:Response)=>{
        try {
            return res.status(stats.OK).json({
                message:"A default get to confirm if all endpoints are working..."
            })
        } catch (error) {
            return res.status(stats.BAD_REQUEST).json({
                message:"Unfortunately, unfortunately..."
            })
        }
    })
}; 
