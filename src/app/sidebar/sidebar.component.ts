import { Component } from '@angular/core';

import { HelppComponent } from '../helpp/helpp.component';

import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  imports: [HelppComponent,RouterModule, RouterOutlet],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
