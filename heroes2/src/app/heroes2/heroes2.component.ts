import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import {HEROES} from './mocks/Hero.mocks'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes2.component.html',
  styleUrls: ['./heroes2.component.css']
})
export class HeroesComponent implements OnInit {
  heroes : Hero[] = []
  selectedHero?: Hero;
  constructor(private heroService: HeroService){}

  ngOnInit(): void {
    this.getHeroes
  }
  getHeroes(): void {
    this.heroService.getHeroesMock().subscribe(heroes =>this.heroes = heroes);
  }
  onSelectHero(hero: Hero): void{
    this.selectedHero = hero
    this.messageService.add(`HeroesComponent: Selected hero id ${hero.id}`)
  }
}
