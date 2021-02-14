import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { Post, Tag } from '../_models';
import { HomeService } from '../_services/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger("slideInOutFromRight", [
      transition(":enter", [
        style({ transform: 'translateX(100%)' }),
        animate(100, style({ transform: 'translateX(0)' })),
      ]),
      transition(":leave", [animate(100, style({ transform: 'translateX(100%)' }))]),
    ]),

  ],
})
export class HomeComponent implements OnInit, AfterViewInit {
  innerWidth: number;
  topNavVisible = false;
  tags$: Observable<Tag>;
  pages$: Observable<Post>;

  constructor(private _home: HomeService) {    
    this.tags$ = this._home.indexTags();
    this.pages$ = this._home.indexPages();
  }
  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.autoSetTopNavVisibility(window.innerWidth);
  }

  toggleTopNav() {
    this.topNavVisible = !this.topNavVisible;
  }




  ngOnInit() {
    this.autoSetTopNavVisibility(window.innerWidth);
  }
  ngAfterViewInit() {
  }

  private autoSetTopNavVisibility(innerWidth: number) {
    this.innerWidth = innerWidth;
    if (this.innerWidth > 768) {
      this.topNavVisible = true;
    } else {
      this.topNavVisible = false;
    }
  }


}
