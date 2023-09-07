import { Answer } from "./answer";

export interface User{
    id:number,
    username:string,
    email:string,
    phone:string,
    answers:Answer[],
}