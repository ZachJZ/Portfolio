import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RoutingServiceComponent } from '../routing-service/routing-service.component';
import { IconBoxComponent } from "../icon-box/icon-box.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [IconBoxComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
// @ViewChild('about') aboutElement: ElementRef;
// @ViewChild('experience') experienceElement: ElementRef;
// @ViewChild('skills') skillsElement: ElementRef;
// @ViewChild('education') educationElement: ElementRef;
// @ViewChild('interests') interestsElement: ElementRef;

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

  ngAfterViewInit() {
    // this.aboutOffset = this.aboutElement.nativeElement.offsetTop;
    // this.experienceOffset = this.experienceElement.nativeElement.offsetTop;
    // this.skillsOffset = this.skillsElement.nativeElement.offsetTop;
    // this.educationOffset = this.educationElement.nativeElement.offsetTop;
    // this.interestsOffset = this.interestsElement.nativeElement.offsetTop;
  }

  // @HostListener('window:scroll', ['$event'])
  // checkOffsetTop() {
  //   console.log(window.scrollY); // this will console log our scroll position
  //   if (window.pageYOffset >= this.homeOffset && window.pageYOffset < this.conOffset) {
  //     this.currentActive = 1;
  //   } else if (window.pageYOffset >= this.conOffset && window.pageYOffset < this.newOffset) {
  //     this.currentActive = 2;
  //   } else if (window.pageYOffset >= this.newOffset && window.pageYOffset < this.aboutOffset) {
  //     this.currentActive = 3;
  //   } else if (window.pageYOffset >= this.aboutOffset) {
  //     this.currentActive = 4;
  //   } else {
  //     this.currentActive = 0;
  //   }
  // }


}
