import { Component} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Personaje  } from 'src/app/interface/interface';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {

  personajes:Personaje[] | undefined;
  personajesCopy:Personaje[] | undefined;

  




 

  constructor( public http:HttpClient ) {
    this.getData();


   }

   
   

 async getData(){

  await this.http
  .get<any>(environment.apiUrl + "characters")
  .subscribe((res)=>
  
 
  this.personajes = res.map(({char_id, name, nickname,img,status,occupation}: Personaje) =>{
    
    return {
      char_id: char_id,
      name: name,
      nickname: nickname,
      img: img,
      status: status,
      occupation: occupation,
      
    };

    
    
    
  }

 
  
  )

  
  
  
  ) 
  this.personajesCopy=this.personajes;

}
 
filter(e:any){
    
  const search:string = e.target.value;
  

  this.personajes = this.personajesCopy?.filter(({ name }: Personaje  ) =>{

    return name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  }
  
  
  
  )


}

  }

  




