import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have four slides', () => {
    component.slideGroup1 = [
      { id: 1, src: '/assets/images/pngimages/ShipBlaster.png', name: 'Galaga Iteration' },
      { id: 2, src: '/assets/images/pngimages/Degree Pics/Bedroom.png', name: 'Bedroom Level'},
      { id: 3, src: '/assets/images/pngimages/Degree Pics/POngGame.png', name: 'Pong Recreation'},
      { id: 4, src: '/assets/images/pngimages/Degree Pics/SpaceRacerLv1.png', name: 'Physics Racing'},
      // { id: 5, src: '/assets/images/pngimages/Degree Pics/Bedroom.png', name: 'Physics Racing'},
      // { id: 6, src: '/assets/images/pngimages/ShipBlaster.png', name: 'Physics Racing'},
    ];
    expect(component.slideGroup1.length == 4).toBeTruthy();
  })
});
