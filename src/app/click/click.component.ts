import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class ClickComponent implements OnInit {
  id;
  timeStamp;

  constructor(id: number) {
    this.id = 0;
    this.timeStamp = new Date();
  }

  ngOnInit() {
  }

}
