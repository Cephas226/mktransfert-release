import {Courses} from '@modules/employees/models';

export interface Country {
    [key: string]: string | number;
    id: number;
    name: string;
    flag: string;
    area: number;
    population: number;
}
export interface Students {

    id: number | null,
    "code": string,
    "lastName":string,
    "firstName":string,
    "gender": string,
    "country": string,
    "nationnality": string,
    "site": string,
    "grade": string,
    "type": string,
    "inscriptionDateAtGA": string,
    "email": string,
    "phone": string,
    "address": string,
    "level": string,
    "books": string,
    "cityOfResidence": string,
    "status": boolean,
    "courses": Courses,
    "bithdaydate": string,
    "parents":Parent
}



export interface Parent {

    id: number | null,
    "lastName":string,
    "firstName":string,
    "gender": string,
    "email": string,
    "phone": string,
    "address": string,
}
