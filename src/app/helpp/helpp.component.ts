import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-helpp',
  imports: [SidebarComponent],
  templateUrl: './helpp.component.html',
  styleUrl: './helpp.component.css'
})
export class HelppComponent {
  title='Welcome to PFE PFA Book!'
  help='This platform is designed to help you manage academic and professional projects effectively. With tools for organization, collaboration, and knowledge sharing, you can streamline your work and focus on success. Built using Angular and Angular Material, the platform offers a modern, user-friendly interface for handling Projets de Fin d’Études (PFE) and Projets de Fin d’Année (PFA). Explore features like task management, resource sharing, and team collaboration to make your project journey seamless and productive.'

}
