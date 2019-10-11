import { Mentor } from './mentor.model';

export class Payment {
  id:BigInteger;
  txnType:string;
  amount:number;
  remarks:string;
  mentorId:BigInteger;
  mentorName:string;
  techId:number;
  skillName:string;
  totalAmountToMentor:number;
  mentor:Mentor.mentor_id;

 
}
