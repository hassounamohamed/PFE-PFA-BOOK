import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from "./footer/footer.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddComponent } from './add/add.component';
@Component({
  selector: 'app-root',
  imports: [HomeComponent, RouterOutlet, FooterComponent ,SidebarComponent,AddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pfe-pfa-book';
}
