import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-petitions',
  templateUrl: './petitions.component.html',
  styleUrls: ['./petitions.component.css']
})
export class PetitionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  BTPetition() {
    window.open('//petitions.whitehouse.gov/petition/justice-breonna-taylor-5');
  }

}
