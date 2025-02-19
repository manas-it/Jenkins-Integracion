import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

 

  it('suma 2+2 = 4', () => {
    const suma = 2+2;
    expect(suma).toBe(4);
  });

  it('suma 2+3 = 5', () => {
    const suma = 2+3;
    expect(suma).toBe(5);
  });

  it('suma 3+3 = 6', () => {
    const suma = 3+3;
    expect(suma).toBe(6);
  });

});
