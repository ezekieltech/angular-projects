import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  name: string = '';

  HEROES = of([
    {'id': 0, 'name': 'first'},
    {'id': 1, 'name': 'second'},
    {'id': 2, 'name': 'third'}
  ])

  heroes$: Observable<any[]>;
  selectedId = 1;
  heroes = this.HEROES;

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

    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = Number(params.get('id'));
        console.log(this.selectedId)
        return this.HEROES;
      })
    )
  }

}

