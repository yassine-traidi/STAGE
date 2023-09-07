import { Answer } from "./answer";
import { Quiz } from "./quiz";
import { User } from "./user";

export interface CandidateResponse{
    id:number,
    user:User,
    answers:Answer[],
    quiz:Quiz,
}