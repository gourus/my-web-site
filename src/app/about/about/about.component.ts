import { Component, OnInit } from '@angular/core';
import {School} from './school-class.class'

@Component({
  templateUrl:'./about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  isCollapsed: boolean = false;

  school : School = {
    name: "Navabharathi High School",
    marks: 494,
    percentage: 0.825,
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
