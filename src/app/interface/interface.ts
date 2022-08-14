export interface Personaje {

char_id:number;

nickname:string;

name : string ;

img:string

status:string;

occupation : Occupation [];

}

interface Occupation{
    name:string;
}