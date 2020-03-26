import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  sideNavVisible: boolean;
  constructor() {}
  toggleSideNav() {
    this.sideNavVisible = !this.sideNavVisible;
  }
  ngOnInit() {}
}
