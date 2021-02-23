import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    // todo inject a service and get the data
    // todo load the data before creating the component using a Router Resolver
    }

  ngOnInit(): void {
    const heroId = this.route.snapshot.paramMap.get('id');
    console.log('side menu category',heroId)
  }

}
