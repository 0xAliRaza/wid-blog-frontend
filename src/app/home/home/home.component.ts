import { Component, OnInit } from '@angular/core';
import { environment } from '@environments/environment';
import { Post } from '../_models';
import { HomeService } from '../_services/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {  }

  ngOnInit() {
  }

}
