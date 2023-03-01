import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public isShowToggle = true;
  @Output() changeEmitter = new EventEmitter();
  @Output() changeIconCloseEmitter = new EventEmitter();

  changeIcon() {
    this.isShowToggle = !this.isShowToggle;
    this.changeEmitter.emit();
  }

  changeIconClose() {
    this.isShowToggle = !this.isShowToggle;
    this.changeIconCloseEmitter.emit();
  }

  toggle() {
    let profileDropdownList = document.querySelector(".profile-dropdown-list");
    let btn = document.querySelector(".profile-dropdown-btn");
    if (profileDropdownList != null && btn != null) {
      profileDropdownList.classList.toggle("active");
    }
  }

  clickedOutside(): void {
    let profileDropdownList = document.querySelector(".profile-dropdown-list");
    let btn = document.querySelector(".profile-dropdown-btn");
    if (profileDropdownList != null && btn != null) {
      profileDropdownList.classList.remove("active");
    }
  }
}
