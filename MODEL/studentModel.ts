import {ObjectId} from "mongodb"

export class studentModel {
    public _id:ObjectId
    public name:string
    public courses:Array<string>
    public score:number

    constructor(
    name:string,
    courses:Array<string>,
    score:number
    ){
        this._id = new ObjectId() 
        this.name=name,
        this.courses=courses,
        this.score=score
    }
}