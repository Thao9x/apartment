import { Component, Input } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() closeToggle: boolean = false;

  f(e: any) {
    let id = $(e.target).attr('id');
    $('#' + id).next('.sub-menu').slideToggle();
    $('#' + id).find('.dropdown').toggleClass('rotate');
  }

}
