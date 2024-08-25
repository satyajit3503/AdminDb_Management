import { Component, ViewChild, ElementRef } from '@angular/core';
import { SharedImports } from '../sharedImport';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [SharedImports],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {
  @ViewChild('sidebar') sidebar!: ElementRef;

  constructor(private router: Router) {}

  toggleNav() {
    const sidebarElement = this.sidebar.nativeElement;
    const mainContentElement = document.getElementById('main-content');

    if (sidebarElement.style.width === "250px") {
      sidebarElement.style.width = "0";
      mainContentElement?.classList.remove('sidebar-open');
    } else {
      sidebarElement.style.width = "250px";
      mainContentElement?.classList.add('sidebar-open');
    }
  }

  navigateToBranch() {
    this.router.navigate(['/branch']);
  }

  navigateToAnotherLink() {
    // Implement navigation logic or other functionality as needed
  }
}
