import {MongoClient}from 'mongodb'

const URL:string = "mongodb://localhost:27017"

export const client = new MongoClient(URL)

const mainConnection = async() =>{
    try {
        await client.connect()
        return "Database successfully connected 🛰 🛰 🌍"
    } catch (error) {
        console.log(error);
        
    }
}

mainConnection()
.then((res)=>{
    console.log(res);    
})
.catch((error)=>{
    console.log(error);    
})
.finally(()=>{
    client.close();    
})

export const db = client.db("StudentsDB").collection("Students")