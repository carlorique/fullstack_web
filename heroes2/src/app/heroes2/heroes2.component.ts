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
  onSelectHero(hero: Hero){
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
