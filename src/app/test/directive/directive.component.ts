import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  data: any;
  constructor() {
    this.data = { color: null, emotion: 'happy' };
  }

  ngOnInit() {
  }

}
