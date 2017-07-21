import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import {AppComponent} from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    this.fixture = TestBed.createComponent(AppComponent);
  }));

  it('should create the app', () => {
    const app = this.fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Tour of Heroes'`, () => {
    const app = this.fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tour of Heroes');
  });

  it('should render title in a h1 tag', () => {
    this.fixture.detectChanges();
    const compiled = this.fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Tour of Heroes');
  });

  it('should render content in a router-outlet tag', () => {
    const compiled = this.fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet')).not.toBe(null);
  });
});
