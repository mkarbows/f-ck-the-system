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
    window.open('//go.theactionpac.com/sign/stand-with-breonna?akid=s241348..ujFWHe');
  }

  BTPetition2() {
    window.open('//chng.it/SCZ66jZyKB');
  }

}
