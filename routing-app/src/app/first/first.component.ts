import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  name: string = '';

  constructor(
    private route: ActivatedRoute,
  ) {}

  // Todo: How to add information to a route
  ngOnInit() {
    // http://localhost:4200/first-component?name=best
    // best is retrived from the route
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }

}
