import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class BreakingService {


 private breakingUrl='https://www.breakingbadapi.com/api/'







  constructor( private http:HttpClient) { 

  }


  getCharacter(){

  const url= `${this.breakingUrl}/characters`

  

  return this.http.get(`https://breakingbadapi.com/api/characters?limit=10&offset=0`, )
     .pipe(map(data =>{
      return data;
     }))




  }

  getMore (){


    return this.http.get(`https://breakingbadapi.com/api/character/random?limit=10&offset=10`, )
  
  }
}

