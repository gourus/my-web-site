import { Component, OnInit } from '@angular/core';
import {School} from './school-class.class'

@Component({
  template: `
<div>
    <h1> Hello world... </h1>
</div>
  `,
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  isCollapsed: boolean = false;

  school : School = {
    name: "Navabharathi High School",
    marks: 494,
    percentage: 82,
    place: "Huzurabad"
  };

  scName: string = "Navab";

  constructor() {
  }

  ngOnInit(): void {
    
  }

  clickEvent(){
    console.log("ID one toggled...");
    this.isCollapsed = !this.isCollapsed;
  }
  
  public getSchoolName() : string {
    return this.school.name;
  }

}
