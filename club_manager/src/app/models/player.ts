export class Player {
  [key: string]: any;
  id: number = 0;
  name: string = '';
  shirtNumber: number = 0;
  team: string ='';
  age: number = 0;
  wage: number = 0;
  contractEnd: Date = new Date();
  static team: any;
}
