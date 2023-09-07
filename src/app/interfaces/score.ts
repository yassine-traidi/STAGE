import { Quiz } from "./quiz";
import { User } from "./user";

export interface Score{
    id:number,
    user:User,
    quiz:Quiz,
    score:number,
    date:Date,
}