import  {Request, Response} from 'express'
import { stats } from '../UTILS/statusCodes'
import { client, db } from '../UTILS/dbConfig'
import { studentModel } from '../MODEL/studentModel'
import {ObjectId} from "mongodb"


export const enrollStudent =async(req:Request, res:Response)=>{
    try {
        await client.connect()

        const {name, courses, score } = req.body

        const students = new studentModel (
            name, courses, score  )

        await db.insertOne(students)

        return res.status(stats.CREATED).json({
            message:"Created! ",
            data:students
        })
    } catch (error) {
        return res.status(stats.BAD_REQUEST).json({
            message:"Couldn't create! ☹ "
        })
    }
} 

export const readStudentsResults = async(req:Request, res:Response)=>{
    try {
        await client.connect()

        const students =await db.find().toArray()
        return res.status(stats.OK).json({
            message:"Couldnt read. PLease check GET request",
            data:students
         }) 
    } catch (error) {
     return res.status(stats.BAD_REQUEST).json({
        message:"Couldnt read. PLease check GET request"
     })   
    }
}

export const readStudentByID = async(req:Request, res:Response)=>{
    try {
        await client.connect()
        const {studentID} = req.params

        const students = db.find({_id: new ObjectId(studentID)})

        return res.status(stats.OK).json({
            message: "successfully got a single student by ID",
            data: students
            })
    } catch (error) {
        return res.status(stats.BAD_REQUEST).json({
        message: "error in getting a single student"
            
        })
        
    }
}

export const readStudentByName = async(req:Request, res:Response)=>{
    try {
        await client.connect()
        const {name} = req.body

        const students = await db.find({name})

        return res.status(stats.OK).json({
            message: "successfully got a single student by name",
            data: students
            })
    } catch (error) {
        return res.status(stats.BAD_REQUEST).json({
        message: "error in getting a single student"
            
        })
        
    }
}

export const readStudentByScore = async(req:Request, res:Response)=>{
    try {
        await client.connect()
        const {score} = req.body

        const students =await db.find({score})

        return res.status(stats.OK).json({
            message: "successfully got a single student by score",
            data: students
            })
    } catch (error) {
        return res.status(stats.BAD_REQUEST).json({
        message: "error in getting a single student"
            
        })
        
    }
}

export const readStudentByCourses = async(req:Request, res:Response)=>{
    try {
        await client.connect()
        const {courses} = req.params

        const students = await db.find({courses})

        return res.status(stats.OK).json({
            message: "successfully got a single student by courses",
            data: students
            })
    } catch (error) {
        return res.status(stats.BAD_REQUEST).json({
        message: "error in getting a single student"
            
        })
        
    }
}

export const updateResult =  async(req:Request, res:Response)=>{
    try {
        await client.connect()
        const {studentID} = req.params
        const {score} = req.body

        const students = await db.updateOne({_id: new ObjectId(studentID)}, {$set: {score}})

        return res.status(stats.OK).json({
            message: "student updated",
            data:students
                
            })
    } catch (error) {
        return res.status(stats.BAD_REQUEST).json({
            message: "error in updating a student"
                
            })
    }
}

export const deleteStudentInfo = async(req:Request, res:Response) => {
    try {
        await client.connect()
        const {studentID} = req.params

         await db.deleteOne({_id: new ObjectId(studentID)})

        return res.status(stats.OK).json({
            message: "student deleted"
                
            })
    } catch (error) {
        return res.status(stats.BAD_REQUEST).json({
            message: "student could not be deleted"
           
            })
    }
}