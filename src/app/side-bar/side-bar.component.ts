import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements AfterViewInit{

  // @ViewChild('about') aboutElement!: ElementRef;
  // @ViewChild('experience') experienceElement!: ElementRef;
  // @ViewChild('skills') skillsElement!: ElementRef;
  // @ViewChild('education') educationElement!: ElementRef;
  // @ViewChild('projects') projectsElement!: ElementRef;


  aboutElement = document.getElementById("about");
  experienceElement = document.getElementById("experience");
  skillsElement = document.getElementById("skills");
  educationElement = document.getElementById("education");
  projectsElement = document.getElementById("projects");

  public currentActive = 1;
  public aboutOffset = 1;
  public experienceOffset = 2;
  public skillsOffset = 3;
  public educationOffset = 4;
  public projectsOffset = 5;


  ngAfterViewInit() {
  }

  ngAfterViewChecked(){
    this.aboutElement = document.getElementById("about");
    this.experienceElement = document.getElementById("experience");
    this.skillsElement = document.getElementById("skills");
    this.educationElement = document.getElementById("education");
    this.projectsElement = document.getElementById("projects");

    if (this.aboutElement != null){
      this.aboutOffset = this.aboutElement.offsetTop;
    }
    if (this.experienceElement != null){
      this.experienceOffset = this.experienceElement.offsetTop - 50;
    }
    if (this.skillsElement != null){
      this.skillsOffset = this.skillsElement.offsetTop - 50;
    }
    if (this.educationElement != null){
      this.educationOffset = this.educationElement.offsetTop - 50;
    }
    if (this.projectsElement != null){
      this.projectsOffset = this.projectsElement.offsetTop - 50;
    }
  }

  scroll(id: string) {
      // console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    if (el != null){
      el.scrollIntoView({ behavior: "smooth", block: "start"});
    }
    else {
      console.log('el is NULL')
    }
  }

  
  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    // console.log(window.scrollY); // this will console log our scroll position
    if (window.scrollY >= this.aboutOffset && window.scrollY < this.experienceOffset) {
      this.currentActive = 1;
      // console.log('here active 1');
    } 
    else if (window.scrollY >= this.experienceOffset && window.scrollY < this.skillsOffset) {
      this.currentActive = 2;
      // console.log('here active 2');
    } 
    else if (window.scrollY >= this.skillsOffset && window.scrollY < this.educationOffset) {
      this.currentActive = 3;
      // console.log('here active 3');
    } 
    else if (window.scrollY >= this.educationOffset && window.scrollY < this.projectsOffset) {
      this.currentActive = 4;
      // console.log('here active 4');
    } 
    else if (window.scrollY >= this.projectsOffset) {
      this.currentActive = 5;
      // console.log('here active 5');
    } 
    else {
      this.currentActive = 1;
      console.log(' currentActive outside bounds ');
    }
  }
}
