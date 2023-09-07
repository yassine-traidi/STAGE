import { Answer } from "./answer";
import { Quiz } from "./quiz";

export interface Question{
    id:number,
    content:string,
    link:string,
    answers:Answer[],
    quiz?:Quiz
}