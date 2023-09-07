import { Question } from "./question";

export interface Quiz{
    id:number,
    description:string,
    questions:Question[],
}