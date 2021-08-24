import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  template: `
    <h2>
      Welcome to TipsToCode!.
    </h2>
  `,
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
