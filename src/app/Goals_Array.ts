import { Goal } from "./Goal";

export const Goals_Array: Goal[] = [
  /* 
  Creating instances of the Goal class and stored them in the
  Goals_Array.

  Note that the date object created with months starting from 0. i.e January = 0, December = 11 
*/

  new Goal(1, "Identify skills to be mastered.", "Well for now its music, math and programming.", new Date(2018, 6, 31)),
  new Goal(2, "Mastery of skills.", "Not yet but getting there.", new Date(2018, 8, 8)),
  new Goal(3, "Application of skills.", "I'll be applying while still getting better.", new Date(2018, 8, 15)),
  new Goal(4, "World domination.", "One day at a time.", new Date(2018, 9, 14)),
  new Goal(5, "Test", "This is just testing Event Emitting and Output binding.", new Date(2018, 10, 5)),

]