import { Component, OnInit } from '@angular/core';
import { HEROES } from '../heroes/mockData/mock-heros';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {Router} from '@angular/router';

 
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

heroes : Hero[];
 
selectedHero : Hero;

  constructor(private heroService : HeroService, private router :  Router) 
  {

    
  }

  getHeroes(): void {
    
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);

  }

  ngOnInit() {

    this.getHeroes();
    

  }

  onSelected(hero)
  {
    this.selectedHero = hero;
    
    this.router.navigateByUrl('detail/' + hero.id);

  }

}
