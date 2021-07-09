import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common'
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  hero$: Observable<{}>;
  hero: any = {'id': 2, name:'deault in second component'};
  heroId: number;

  HEROES = of([
    {'id': 0, 'name': 'first'},
    {'id': 1, 'name': 'second'},
    {'id': 2, 'name': 'third'}
  ])

  constructor(private router: Router, private route: ActivatedRoute , private location: Location) { }

  ngOnInit(): void {
    this.heroId = +this.route.snapshot.paramMap.get('id');
    this.hero$ = of({'id': 1, 'name': 'first'}); // hard coded, this will likely be returned from a server by a service
    this.hero$.subscribe(val => this.hero=val);
    console.log(this.hero);
  }

  goToFirst() {
    console.log(this.route);
    this.router.navigate(['first-component'], { relativeTo: this.route.parent });
  }

  goBack(): void {
    this.location.back();
  }

  gotoItems(hero: any) {
    const heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that item.
    console.log(heroId);
    this.router.navigate(['/first-component', { id: heroId }]);
  }

}
