import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Entry } from '../entry';
import { ParasternalService } from '../parasternal.service';

@Component({
  selector: 'app-parasternal-detail',
  templateUrl: './parasternal-detail.component.html',
  styleUrls: ['./parasternal-detail.component.css']
})
export class ParasternalDetailComponent implements OnInit {
  entry: Entry;

  constructor(
    private route: ActivatedRoute,
    private parasternalService: ParasternalService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.parasternalService.getEntry(name)
      .subscribe(entry => this.entry = entry);
  }

  goBack(): void {
    this.location.back();
  }

}
