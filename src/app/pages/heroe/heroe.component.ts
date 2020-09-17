import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroe';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe : Heroe
  constructor(private activatedRoute:ActivatedRoute, private service: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((data)=>{
        this.getHeroe(data.id)
      })
  }

  getHeroe(id :string){
    this.heroe = this.service.getHeroe(Number(id));
    console.log(this.heroe)
  }

}
