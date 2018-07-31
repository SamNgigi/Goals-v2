export class Goal {

  /* 
    Here we use the public keyword which is an ACCESS MODIFIER that
    determines where the properties of a class are visible.

    In this case public means that the specified properties are visible anywhere outside the class.
  */

  public showDescription: boolean;

  constructor(public id: number, public goal: string, public description: string, public completeDate: Date) {
    /* 
      You could be asking yourself why the description is not
      showing from the beginning yet the showDescription by default
      is false.

      It seems when we set this.showDescription to true here we start out being able to see the details.

      
      More details in the goal.component.html.
    */
    this.showDescription = false
  }
}
