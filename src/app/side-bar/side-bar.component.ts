import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  scroll(id: string) {
      console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    if (el != null){
      el.scrollIntoView({ behavior: "smooth", block: "start"});
    }
    else {
      console.log('el is NULL')
    }
  }

}
