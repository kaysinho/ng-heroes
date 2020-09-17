import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroe';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Array<Heroe> = [];
  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes)
  }

}
