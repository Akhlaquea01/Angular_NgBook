import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  choice=["first","Second","Third","Fourth","Other"]
  constructor() { }

  ngOnInit(): void {
  }

  nextChoice(){

  }

}
