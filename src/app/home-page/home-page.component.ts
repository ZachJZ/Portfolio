import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RoutingServiceComponent } from '../routing-service/routing-service.component';
import { IconBoxComponent } from "../icon-box/icon-box.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [IconBoxComponent, NgFor],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
// @ViewChild('about') aboutElement: ElementRef;
// @ViewChild('experience') experienceElement: ElementRef;
// @ViewChild('skills') skillsElement: ElementRef;
// @ViewChild('education') educationElement: ElementRef;
// @ViewChild('projects') projectsElement: ElementRef;

export class HomePageComponent {
  
  constructor(private myRoute: RoutingServiceComponent){
    this.myTimer();
  }

  slideGroup1 = [
    { id: 1, src: '/assets/images/pngimages/ShipBlaster.png', name: 'Galaga Iteration' },
    { id: 2, src: '/assets/images/pngimages/Degree Pics/Bedroom.png', name: 'Bedroom Level'},
    { id: 3, src: '/assets/images/pngimages/Degree Pics/POngGame.png', name: 'Pong Recreation'},
    { id: 4, src: '/assets/images/pngimages/Degree Pics/SpaceRacerLv1.png', name: 'Physics Racing'},
    // { id: 5, src: '/assets/images/pngimages/Degree Pics/Bedroom.png', name: 'Physics Racing'},
    // { id: 6, src: '/assets/images/pngimages/ShipBlaster.png', name: 'Physics Racing'},
  ];
  reset: any; 
  counter = 5;
  myTimer(){
    let intervalId = setInterval(() => {
      this.counter = <number>this.counter - 1;
      // console.log(this.counter)
      if(this.counter === 0) {
        // clearInterval(intervalId);
        this.plusSlides();
        this.counter = 5;
      }
    }, 1000)
    this.counter = 5;
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
    // this.projectsOffset = this.projectsElement.nativeElement.offsetTop;
    this.showSlides(this.slideIndex);
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

  slideIndex: number = 2;
  ngAfterViewChecked(){
    // this.showSlides(this.slideIndex);
  }
  // Next/previous controls
  plusSlides() {
    this.counter = 5;
    this.showSlides(this.slideIndex += 1);
  }
  // Next/previous controls
  minusSlides() {
    this.counter = 5;
    this.showSlides(this.slideIndex += -1 );
  }
  // Thumbnail image controls
  currentSlide(n: number) {
    this.counter = 5;
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    let i;
    let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        this.slideIndex = 1
        // console.log("setting to 1");
      }
    if (n < 1) {
        this.slideIndex = slides.length
        // console.log("n < 1: setting to length");
      }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      // console.log("slides for loop setting display to none for " + i);
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
      // console.log("dots for loop setting display to active for " + i);
    }
    slides[this.slideIndex-1].style.display = "block";
    dots[this.slideIndex-1].className += " active";
  }
}