import { Component } from '@angular/core';
declare var $: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'C360';
  ngOnInit(): void {
    
    $("#sidenavToggler").click(function(e:any) {
      e.preventDefault();
      $("body").toggleClass("sidenav-toggled");
      $(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
      $(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show");
    });
  }
}
