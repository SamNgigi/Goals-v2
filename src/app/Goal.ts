export class Goal {
  /* 
    Here we use the public keyword which is an ACCESS MODIFIER that
    determines where the properties of a class are visible.

    In this case public means that the specified properties are visible anywhere outside the class.
  */
  constructor(public id: number, public name: string, public description: string) {
    // This will be defined where we will import this class definition.
  }
}
