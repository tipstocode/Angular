import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  constructor(private logger: LoggerService) { }
  title = 'angular-component';
  ngOnInit() {
    this.logIt(`OnInit`);
  }

  logIt(msg: string) {
    this.logger.log(`${msg}`);
  }
}
