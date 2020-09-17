import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes:Array<Heroe> = [
    {id: 1 ,name : "Hulk", description: "Esta es la descripcion", img: "assets/img/hulk.png"},
    {id: 2 ,name : "Batman", description: "Esta es la descripcion", img: "assets/img/batman.png"},
    {id: 3 ,name : "Wonder Woman", description: "Esta es la descripcion", img: "assets/img/wonderwoman.png"}
  ];
  constructor() { 
    console.log("Servicio de Heroes")
  }

  getHeroes():Array<Heroe>{
    return this.heroes;
  }

  getHeroe(id:number):Heroe{
    return this.heroes.filter( heroe => heroe.id == id)[0];
  }
}
