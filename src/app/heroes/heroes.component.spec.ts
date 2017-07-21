import { TestBed, async } from '@angular/core/testing';
import {HttpModule} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';

import {HeroesComponent} from './heroes.component';
import {Hero} from '../hero/hero.model';

describe('HeroesComponent', () => {
  let component: HeroesComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule
      ],
      declarations: [
        HeroesComponent
      ],
      providers: [
      ]
    });

    component = TestBed.createComponent(HeroesComponent).componentInstance;
  }));

  it('should select a hero', () => {
    const hero: Hero = { id: 100, name: 'Batman' };
    expect(component.selectedHero).not.toEqual(hero);
    component.onSelect(hero);
    expect(component.selectedHero).toEqual(hero);
  });
});
