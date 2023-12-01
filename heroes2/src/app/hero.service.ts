import { Injectable } from '@angular/core';
import { HEROES } from './heroes2/mocks/Hero.mocks';
import { Hero } from './Hero';
import { MessageService } from './messages.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService){

  }
  getHeroesMock(): Observable<Hero[]> {
    const heroes = of (HEROES);
    this.messageService.add('Hero Servoce: fethed heroes');
    return heroes
  }
}
