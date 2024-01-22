import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutModalComponent } from 'src/app/modal/about-modal/about-modal.component';
import { ContactModalComponent } from 'src/app/modal/contact-modal/contact-modal.component';
import { PortfolioModalComponent } from 'src/app/modal/portfolio-modal/portfolio-modal.component';
import { ServiceModalComponent } from 'src/app/modal/service-modal/service-modal.component';

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

  openContactModal():void
  {
    const dialogRef = this.dialog.open(ContactModalComponent, {
      width: '1500px',height:'500px'
      // Add more configuration options if needed
    });
  }

  openPortfolioModal():void
  {
    const dialogRef = this.dialog.open(PortfolioModalComponent, {
      width: '1500px',height:'500px'
      // Add more configuration options if needed
    });
  }

  openServiceModal():void
  {
    const dialogRef = this.dialog.open(ServiceModalComponent, {
      width: '1500px',height:'500px'
      // Add more configuration options if needed
    });
  }
}
