import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutModalComponent } from 'src/app/modal/about-modal/about-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public dialog: MatDialog) {}

  openAboutModal():void
  {
    const dialogRef = this.dialog.open(AboutModalComponent, {
      width: '1500px',height:'500px'
      // Add more configuration options if needed
    });
  }
}
