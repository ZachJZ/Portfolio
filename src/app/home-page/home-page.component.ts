import { Component } from '@angular/core';
import { RoutingServiceComponent } from '../routing-service/routing-service.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private myRoute: RoutingServiceComponent){

  }

  routeMe(destination: string) {
    if(destination != null){
      this.myRoute.getToPage(destination);
    }
    else {
      throw new Error('destination null');
    }
  }
}
