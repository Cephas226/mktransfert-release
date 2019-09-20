import { Injectable } from '@angular/core';
import { gloabal_variable } from './globalvariable';
 
@Injectable({
  providedIn: 'root'
})

export class GlobalVariableService {
   RegimeTVA = gloabal_variable.RegimeTVA;
   
  constructor() {
   }
   getRegimeTVA(){
    this.RegimeTVA
  }
   
}