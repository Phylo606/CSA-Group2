import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry';
import { ParasternalService } from '../parasternal.service';

@Component({
  selector: 'app-parasternal-main',
  templateUrl: './parasternal-main.component.html',
  styleUrls: ['./parasternal-main.component.css']
})
export class ParasternalMainComponent implements OnInit {

  entries : Entry[];

  constructor(private parasternalService: ParasternalService) { }

  ngOnInit(): void {
    this.getEntries();
  }

  getEntries(): void {
    this.parasternalService.getEntries()
      .subscribe(entries => this.entries = entries);
  }
} 
