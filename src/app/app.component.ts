import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isShowDivIf = false;
  // openNav() {
  //   this.isShowDivIf = !this.isShowDivIf;
  //   let box = document.getElementById("mySidebar");
  //   let main = document.getElementById("main");
  //   if (box != null && main != null) {
  //     box.setAttribute("style", "transition:0.3s; ");
  //     main.setAttribute("style", "margin-left:10%; ");
  //   }
  // }

  openNav() {
    this.isShowDivIf = !this.isShowDivIf;
    let box = document.getElementById("mySidebar");
    let main = document.getElementById("main");
    let toggle = document.getElementById("toggle");
    if (box != null && main != null && toggle !== null) {
      toggle.setAttribute("style", "padding-left:0px !important;transition:0.3s;");
      box.setAttribute("style", "transition:0.3s;margin-top:48px ");
      main.setAttribute("style", "margin-left:10%; ");
    }
  }


  closeNav() {
    this.isShowDivIf = !this.isShowDivIf;
    let box = document.getElementById("mySidebar");
    let toggle = document.getElementById("toggle");
    let main = document.getElementById("main");
    if (box != null && main != null && toggle !== null) {
      box.setAttribute("style", "width: 0px;margin-top:48px ");
      toggle.setAttribute("style", "padding-left:0px !important;transition:0.3s;");
      main.setAttribute("style", "width: 100%;margin-left:0px; ");
    }
  }
}
