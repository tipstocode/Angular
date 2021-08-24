import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-component',
  template: `
  <link rel="stylesheet" href="../../assets/firstcomponent.css">
    <h2>
      Welcome to TipsToCode!.
    </h2>
  `
})
export class ThirdComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
