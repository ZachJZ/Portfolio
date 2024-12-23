import { Component, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing-service',
  standalone: true,
  imports: [],
  templateUrl: './routing-service.component.html',
  styleUrl: './routing-service.component.css'
})
@Injectable({
  providedIn: 'root'
})
export class RoutingServiceComponent {
  constructor(private router:Router, private activatedRoute: ActivatedRoute) {}

  // routerOnActivate(curr: RouteSegment, prev?: RouteSegment, currTree?: RouteTree, prevTree?: RouteTree) : void {
  //   this.router.navigate(['SomeRoute'], curr);
  // }
  getToPage(destination: String){
    this.router.navigate([destination]);
    console.log('made it here! '+ destination +" is the destination");
  }
}
