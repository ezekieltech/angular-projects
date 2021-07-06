import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
  }

  goToFirst() {
    console.log(this.route);
    this.router.navigate(['first-component'], { relativeTo: this.route.parent });
  }

}
