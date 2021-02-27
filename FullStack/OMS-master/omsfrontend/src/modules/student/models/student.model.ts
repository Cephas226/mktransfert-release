export interface Country {
    [key: string]: string | number;
    id: number;
    name: string;
    flag: string;
    area: number;
    population: number;
}
export interface Students {

  id: number,
  code:string,
  firstName:string,
  lastName:string,
  gender:string,
  email: string,
  phone:string,
  status:string,
  inscriptionDateAtGA:string,
  Bithdaydate:string,
  cityOfResidence: string,
  course:string,
  parents: [
    {
      "firstName": string,
      "lastName": string,
      "gender": string,
      "phone":string,
    }]
}
